describe('Task Search Table', () => {
  before(() => {
    cy.login();
  });
  it('Visit Web Guide', () => {
    cy.visit('/search/tasks');
  });
  it('Confirm that members are visible', () => {
    cy.get('#tb-container').should('be.visible');
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container',
    ).should('be.visible');
    cy.get(
      ':nth-child(2) > :nth-child(1) > :nth-child(1) > .td-container',
    ).should('be.visible');
    cy.get(
      ':nth-child(3) > :nth-child(1) > :nth-child(1) > .td-container',
    ).should('be.visible');
    cy.get(
      ':nth-child(3) > :nth-child(1) > :nth-child(1) > .td-container',
    ).should('be.visible');
  });
});
