describe('Add Note', () => {
  before(() => {
    cy.login();
  });
  it('Open tasks', () => {
    cy.visit('/tasks');
  });
  it('Go to Search members', () => {
    cy.get('[data-testid=wm-icon-search]').click();
  });
  it('Search for a member by name', () => {
    cy.get('.form-control').type('James Garner {enter}');
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
    ).contains('JAMES GARNER');
  });
  it('Search for a member by birth date', () => {
    cy.get('.form-control').clear();
    cy.get('.form-control').type('10 1980 11 {enter}');
    cy.wait(3000);
  });
  it('Confirm that searched member by DOB is filtered', () => {
    cy.get(
      ':nth-child(1) > :nth-child(1) > [style="width: 10%;"] > .td-container',
    )
      .contains('1980/11/10')
      .should('be.visible');
  });
  it('Search for a member by ID', () => {
    cy.get('.form-control').clear();
    cy.get('.form-control').type('1294719000');
  });
  it('Confirm that searched member by ID is filtered', () => {
    cy.wait(3000);
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .td-container')
      .contains('1294719000')
      .should('be.visible');
  });
});
