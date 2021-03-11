describe('add/remove conditionals in rule items', () => {
  before(() => {
    cy.login();
  });
  it('navigates to create rule', () => {
    cy.visit('/rule-management');

    cy.get('[data-testid=rule-link]')
      .first()
      .click();
    cy.get('[data-testid=add-rule]').click();

    cy.get('[data-testid=rule-conditionals-container]').scrollIntoView();
    cy.get('[data-testid=rule-conditionals-container]')
      .find('[data-testid=rule-conditional]')
      .should('have.length', 1);
    cy.wait(1000);

    cy.get('[data-testid=add-rule-conditional]').click();
    cy.get('[data-testid=rule-conditionals-container]')
      .find('[data-testid=rule-conditional]')
      .should('have.length', 2);
    cy.wait(1000);
    cy.get('[data-testid=add-rule-conditional]').click();
    cy.get('[data-testid=rule-conditionals-container]')
      .find('[data-testid=rule-conditional]')
      .should('have.length', 3);
  });
});
