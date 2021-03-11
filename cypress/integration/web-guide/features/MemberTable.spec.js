describe('Member Table', () => {
  before(() => {
    cy.login();
  });
  it('Can navigate to a patient from the tasks search table', () => {
    cy.visit('/search/members');
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
    ).click();
    cy.get('.member-header').and('be.visible');
  });
  it('Can filter the list of members', () => {
    cy.get('[data-testid=wm-icon-search]').click();
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
    ).should('be.visible')
  });
});
