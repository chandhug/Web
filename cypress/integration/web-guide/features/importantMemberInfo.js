// describe('Useful Member Information', () => {
//   it('Visit Member Page', () => {
//     before(cy.login());
//   });
//   it('Open a member search', () => {
//     cy.visit('/search/members');
//   });
//   it('Open member profile', () => {
//     cy.get(
//       ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
//     ).click();
//     cy.wait(1000);
//   });
describe("Add Note", () => {
  before(() => {
    cy.login();
  });
  it("Open a member search", () => {
    cy.visit("/search/members");
  });
  it("Open member profile", () => {
    cy.server();
    cy.intercept("GET", "**/user/api/v1/auth/search/fulltext**").as("getmemberSearch");

    cy.get(".form-control").type("curry {enter}");
    cy.wait("@getmemberSearch");  // { timeout: 5000 })
    cy.get(
      ":nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name"
    ).click();
    cy.wait(1000);
  });
  it('Contact Info', () => {
    cy.get('.profile-data > :nth-child(1) > .w-100').click();
    cy.get('#edit-info-btn').should('be.visible');
    cy.get('.expanded > .w-100').click();
  });
  it('Plan', () => {
    cy.get(':nth-child(2) > [data-testid=plan-btn]').click();
    cy.get('.expanded > [data-testid=plan-btn]').click();
  });
  it('Medication', () => {
    cy.get(':nth-child(3) > [data-testid=plan-btn]').click();
    cy.get('.expanded > [data-testid=plan-btn]').scrollIntoView().click();
  });
  //Find a member with house hold info and add validations...
  // it('Household', () => {
  //   cy.get('[data-testid=household-list-btn]').click();
  //   cy.get('[data-testid=household-list-btn]').click();
  // });
  it('Care Team', () => {
    cy.get('[data-testid=provider-list-btn]').click()
    cy.get('[data-testid=providers-container]').should('be.visible')
    cy.get('[data-testid=provider-list-btn]').click()
  })
  it('Pharmacy', () => {
    cy.get('[data-testid=pharmacy-list-btn]').click();
    cy.get('[data-testid=pharmacies-container]').scrollIntoView().should('be.visible');
    cy.get('[data-testid=pharmacy-list-btn]').click();
  });

  it('Allergies', () => {
    cy.get('[data-testid=allergy-toggle]').click()
    //Add allergy if record does not exist anf run the scroll validation
    // cy.get('.profile-data').scrollTo('bottom')
    // cy.get(':nth-child(7) > .blocks > [data-testid=add-allergy-btn]').scrollIntoView().should('be.visible');
    // cy.get('[data-testid=allergy-toggle]').click();
  })
  it('Side Effects', () => {
    cy.get('[data-testid=side-effect-list-btn]').click()
    //Add allergy if record does not exist anf run the scroll validation
    // cy.get('.profile-data').scrollTo('bottom')
    // cy.get('[data-testid=add-side-effect-btn]').scrollIntoView().should('be.visible');
    // cy.get('[data-testid=side-effect-list-btn]').click();
  })
})
