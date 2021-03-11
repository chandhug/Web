describe('Task Search Table', () => {
  before(() => {
    cy.login();
  });
  it('Can view the detail of a task from the tasks search table', () => {
    cy.visit('/search/tasks');
    cy.get(
      '.table-body > :nth-child(1) > :nth-child(1) > :nth-child(1)',
    ).click();
    cy.get('[data-testid="wm-global-modal"]');
    cy.get('.modal-header').and('be.visible');
  });
});
