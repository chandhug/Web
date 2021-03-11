describe('Preferred language is available in Member Workspace', () => {
  before(() => {
    cy.login();
  });
  it('Open a member page', () => {
    cy.visit('/search/members');
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
    ).click();
    cy.wait(1000);
  });
  it('Open contact info dropdown', () => {
    cy.get('.profile-data > :nth-child(1) > .w-100').click();
  });
  it('Click on Edit Contact info', () => {
    cy.wait(4000)
    cy.contains('Edit Contact Info').click();
    cy.wait(2000);
  });
  it('Change language from English to Spanish & Check if Language is updated', () => {
    cy.get('.modal-body');
    cy.get('[data-testid=preferredLanguage]').type('English{enter}');
    cy.get('form');
    cy.contains('Save changes').click();
    cy.wait(10000)
    cy.get('.member-summary').contains('English');
  });
  it('Click on Edit Contact info', () => {
    cy.contains('Edit Contact Info').click();
  });
  it('Change language back to English & Check if Language is updated', () => {
    cy.get('.modal-body');
    cy.get('[data-testid=preferredLanguage]').type('Spanish{enter}');
    cy.get('form');
    cy.contains('Save changes').click();
    cy.wait(10000)
    cy.get('.member-summary').contains('Spanish');
  });
});


// Waits are added because of a bug that takes 10 seconds to change language
