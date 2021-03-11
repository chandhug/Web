describe('Expand/Collapse chat', () => {
  before(() => {
    cy.login();
  });
  it('Should visit a member profile and check if the chat is expandable/collapsable', () => {
    cy.visit('/search/members');
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
    ).click();
    cy.get('[data-testid="collapse-chat-btn"]')
      .should('be.visible')
      .click();
    cy.get('[data-testid="collapse-chat-btn"]').should('not.exist');
    cy.get('[data-testid="expand-chat-btn"]')
      .should('be.visible')
      .click();
    cy.get('[data-testid="expand-chat-btn"]').should('not.exist');
    cy.get('[data-testid="collapse-chat-btn"]').should('be.visible');
  });
});
