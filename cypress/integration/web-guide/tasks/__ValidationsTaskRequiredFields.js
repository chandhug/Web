
describe('Member search & Add Task', () => {
  before(() => {
    // cy.logout();
  });
  it('Visit Web Guide Page', () => {
    // cy.login();
    cy.visit('/search/members');
  });
  it('Open member profile', () => {
    cy.get(
      '#tb-container > div > div > table > tbody:nth-child(5) > tr:nth-child(1) > td:nth-child(1) > div > a',
    ).click();
    cy.wait(1000);
  });
  it('Click Add Task', () => {
    cy.get('.dhead > :nth-child(1) > :nth-child(2)').click();
  });
  it('Click Save', () => {
    cy.get('[data-testid=create-task]').click('');
  });
  it('Confirm that error messages appear', () => {
    cy.get('.col > .error').should('have.text', 'Task type is required.');
    cy.get('[data-testid=task-duedate-required]').should(
      'have.text',
      'Due date is required.',
    );
  });
});
