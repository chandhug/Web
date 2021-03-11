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
    cy.get(':nth-child(3) > [data-testid=plan-btn]').click();
    cy.wait(3000)
    cy.get("[data-testid='add-medication-btn']").click();
  });

  it('Should fill the medication details', () => {
    cy.server();
    cy.route(
      'GET',
      '/appsvc/view-service/api/v1/ref/medications/names?limit=10&name=motrin',
    ).as('searchMedication');
    cy.route(
      'GET',
      '/appsvc/view-service/api/v1/ref/medications/generics?exact_name=Motrin%20IB',
    ).as('selectMedication');
    cy.route(
      'GET',
      '/appsvc/view-service/api/v1/ref/medications/frequency-of-fill?exact_name=Ibuprofen',
    ).as('selectGenericName');

    cy.route('POST', '/execute_json_query?output_format=es&facet_type=list').as(
      'selectForm',
    );

    cy.route('GET', '/appsvc/view-service/api/v1/ref/medications/size-count?exact_name=Ibuprofen&form=Tablet&strength=800%20mg').as('tablets')

    cy.get('[data-testid="select-medication"]')
      .click()
      .type('motrin')
      .wait('@searchMedication');
    cy.get('.css-11unzgr').contains('Motrin IB').type('{enter}')
    cy.get('[data-testid="medication-version"] > label:nth-child(2)')
      .find('[type="radio"]')
      .first()
      .check()
      .wait('@selectGenericName');
    cy.get(
      '[data-testid="medication-form"] > .form-group > .MuiFormGroup-root > label:nth-child(1)',
    )
      .find('[type="radio"]')
      .first()
      .check()

    cy.get(
      '[data-testid="medication-strength"] > .form-group > .MuiFormGroup-root > label:nth-child(1)',
    )
      .find('[type="radio"]')
      .first()
      .check();

    cy.get('[data-testid=medication-size] > .form-group > .MuiFormGroup-root > :nth-child(1)').click()
    cy.get('[data-testid=medication-frequency] > .form-group > .MuiFormGroup-root > :nth-child(1) > .MuiTypography-root').click()
  });
  it('Should save/add the new medication', () => {
    cy.get('[data-testid=save-button]')
      .click();
    cy.wait(5000);  
  });
  it('Validate the medication has been added', () => {
    cy.get('[data-testid="medication-list"]').
    should('contain', 'Ibuprofen')
    cy.wait(3000);
  });
  it('Update medication quantity and day supply', () => {
    cy.get('.medication-list--medication-name:eq(0)')  
     .click({force: true})
     cy.get('[data-testid="edit-medication-button"]')
     .eq(0)
     .click() 
    cy.get('[data-testid=medication-quantity-input]')
      .clear()
      .type(30)
    cy.get(':nth-child(2) > .bitem > #quantity')
      .clear()
      .type(40)
    cy.get('[data-testid=save-medication-edit-btn]').click()
    cy.wait(6000)
    
  });
  it('Change Pharmacy and Provider', () => {
    cy.get(':nth-child(3) > [data-testid=plan-btn]').click();
    cy.get('.medication-list--medication-name:eq(0)')
    .scrollIntoView()  
    .click({force:true})
    cy.get('[data-testid="edit-medication-button"]')
    .eq(0)
    .click({force: true}) 
    cy.get(':nth-child(1) > .bitem > .medication-button > .sc-bdfBwQ').click()
    cy.wait(2000)
    cy.get('[data-testid=query-input]').type('Walg')
    cy.get('[data-testid="search-button"]').click()
    cy.wait(5000)
    cy.get('tbody > :nth-child(1) > :nth-child(5) > .sc-bdfBwQ').click()
    // Change Provider
    cy.get(':nth-child(2) > .bitem > .medication-button > .sc-bdfBwQ').click()
    cy.get('[data-testid=query-input]').type('zallen')
    cy.get('[data-testid=search-button]').click()
    cy.wait(2000)
    cy.get('.wm-list-item > :nth-child(5) > .sc-bdfBwQ').click()
    cy.wait(2000)
    cy.get('[data-testid=save-medication-edit-btn]').click()
    cy.wait(2000)
    cy.get(':nth-child(3) > [data-testid=plan-btn]').click();
    cy.get('.medication-list--medication-name:eq(0)')
    .scrollIntoView()  
    .click({force:true})
    cy.get('[data-testid=medication-list] > :nth-child(1) > .collapse').should('contain.text', 'WALGREEN CO')
    cy.get('[data-testid=medication-list] > :nth-child(1) > .collapse').should('contain.text', '30') 
  });
  it('Delete medication', () => {
    cy.get('[data-testid=medication-list] > :nth-child(1) > .collapse > .bg-white > .text-center').click()
    cy.wait(1000)
    cy.get('[data-testid=not-taken]').check()
    cy.get('.css-yk16xz-control > .css-1hwfws3').click()
    cy.get('.css-26l3qy-menu').eq(0).click({foce: true})
    cy.get('[data-testid=note]').type('test')
    cy.get('.w-100 > .ml-auto').click()
    cy.get('[data-testid="medication-list"]').
    not('contain', 'Ibuprofen')
    cy.wait(3000);


  })
});
