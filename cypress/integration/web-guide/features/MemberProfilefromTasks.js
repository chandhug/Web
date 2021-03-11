describe('Member Page pagination scroll', () => {
  before(() => {
    cy.login();
  });
  it('Open Tasks search table', () => {
    cy.visit('/search/tasks'); //http://localhost:8081
  });
  it('Open Member profile', () => {
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(2) > .td-container',
    ).should('be.visible');
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(2) > .td-container > a > .name',
    ).click();
  });
  it('Member Profile is displayed', () => {
    cy.url().should('include', '/members');
    cy.get('.row > :nth-child(1) > .far').should('be.visible');
    cy.get('.phone-num > .far').should('be.visible');
    cy.get('.row > :nth-child(4) > .far').should('be.visible');
    cy.get('.row > :nth-child(3) > .far').should('be.visible');
    cy.get(':nth-child(7) > .far').should('be.visible');
    cy.get('.add-tag').should('be.visible');
    cy.get('.left-pane > .d-flex').should('be.visible');
    cy.get('.d-flex > .dhead').should('be.visible');
    cy.get('.d-flex > .hasBackground').should('be.visible');
    cy.get('.message > :nth-child(1)').should('be.visible');
  });
});
