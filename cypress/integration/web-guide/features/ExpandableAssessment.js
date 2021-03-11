describe('Expandable Assessment Components', () => {
  before(() => {
    cy.login();
  });
  it('Open a member profile', () => {
    cy.visit('/search/members');
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
    ).click();
    cy.wait(3000);
  });
  it('Open Assessment dropdown & select Rapid3', () => {
    cy.get('.assessment-menu').click();
    cy.get('.assessment-name').contains('RAPID 3');
    cy.get('.assessment-name')
      .contains('RAPID 3')
      .click();
    cy.get('[data-testid=expand-assessment-btn]').click();
  });
  it('Expanded Assessment is visible', () => {
    cy.get('[data-testid=assessment]')
      .should('have.class', 'assessment expanded')
      .scrollTo('bottom');
  });
});
