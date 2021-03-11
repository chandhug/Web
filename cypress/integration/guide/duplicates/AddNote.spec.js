describe('Add note form', () => {
  before(() => {
    cy.login();
  });
  it('Should open a pop-up modal', () => {
    cy.visit('/search/members');
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
    ).click();
    cy.get('[data-testid=add-note-btn]').click();
    cy.get('.modal-header').and('be.visible');
  });
  it('Should check if the Internal checkbox is checked', () => {
    cy.get('.note-right-pane')
      .find('[data-testid="note_icheck"]')
      .should('be.checked');
  });

  it('Should close the pop-up modal', () => {
    cy.get('.w-100 > [data-testid=wm-icon-times]')
      .first()
      .click();
    // cy.get('.modal-header').should('not.be.visible');
  });
});
