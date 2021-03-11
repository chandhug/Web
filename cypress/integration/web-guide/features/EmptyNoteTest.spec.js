describe('Empty Note check', () => {
  before(() => {
    cy.login();
  });
  it('Click on the Search button', () => {
    cy.visit('/');
    cy.get('#WmMenuOption_Search').click();
  });
  it('Click on a member', () => {
    cy.get(
      '#tb-container > div > div > table > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > div > a > span',
    ).click();
  });
  it('Click on Add Note', () => {
    cy.get('.d-flex > .dhead')
    cy.get('[data-testid=add-note-btn]').click();
  });
  it('Click on Save', () => {
    cy.get('#note_icheck').uncheck({force:true})
    cy.get('.ml-auto').click()
    // cy.get('.post-btn').click({force:true});
  })
  it('Check Error Message', () => {
    cy.get('.invalid-feedback').contains("You cannot create an empty note.")
  })
});
