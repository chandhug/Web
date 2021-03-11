describe('Add Medicaiton To A Member', () => {
  before(() => {
    cy.login();
  });
  after(() => {
    // cy.logout();
  });
  it('Should open a member profile and click on Add Medication button', () => {
    cy.visit('/search/members');
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
    ).click();
    cy.get('#pteim-4').click();
    cy.get("[data-testid='add-medication-btn']").click();
  });

  it('Should fill the medication details', () => {
    cy.server();
    cy.route(
      'GET',
      '/view-service/api/v1/ref/medications/names?limit=10&name=metformin',
    ).as('searchMedication');
    cy.route(
      'GET',
      '/view-service/api/v1/ref/medications/generics?exact_name=metFORMIN HCl',
    ).as('selectMedication');

    cy.route(
      'GET',
      '/view-service/api/v1/ref/medications/forms?exact_name=metFORMIN HCl',
    ).as('getForm');

    cy.route('POST', '/execute_json_query?output_format=es&facet_type=list').as(
      'getStrength',
    );

    cy.get('[data-testid="select-medication"]')
      .click()
      .type('metformin')
      .wait('@searchMedication');
    cy.get(
      '.css-2b097c-container > .css-26l3qy-menu > .css-4ljt47-MenuList > div:nth-child(1)',
    )
      .click()
      .wait('@selectMedication')
      .wait('@getForm');
    cy.get(
      '[data-testid="medication-form"] > .form-group > .MuiFormGroup-root > label:nth-child(1)',
    )
      .find('[type="radio"]')
      .first()
      .check()
      .wait('@getStrength');
    cy.get(
      '[data-testid="medication-strength"] > .form-group > .MuiFormGroup-root > label:nth-child(1)',
    )
      .find('[type="radio"]')
      .first()
      .check();
  });
  it('Should save/add the new medication', () => {
    cy.server();
    cy.route('POST', '/entity').as('addMedication');
    cy.get('.modal-body > .medication-footer')
      .find('[data-testid="save-button"]')
      .click();

    cy.wait('@addMedication')
      .its('status')
      .should('eq', 200);
  });
});

//Duplicate
