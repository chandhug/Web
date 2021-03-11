describe("Should filter the table by the filterable fields", () => {
  before(() => {
    cy.login();
  });

  it('Go to Task Search Table', () => {
    cy.visit('/search/tasks')
  })
  it('Click on Task Type filter', () => {
    cy.server();
    cy.route('POST', '/appsvc/view-service/api/v1/tasks/facets').as('facets');
    cy.get('[data-testid=sort-task_type]').click()
    cy.wait('@facets')
      .its('status')
      .should('eq', 200);
  });
  it('Click on Member filter', () => {
    cy.server();
    cy.route('POST', '/appsvc/view-service/api/v1/tasks/facets').as('facets');
    cy.get('[data-testid=sort-member]').click()
    cy.wait('@facets')
      .its('status')
      .should('eq', 200);
  })
  it('Click on Guide filter', () => {
    cy.server();
    cy.route('POST', '/appsvc/view-service/api/v1/tasks/facets').as('facets');
    cy.get('[data-testid=sort-guide]').click()
    cy.wait('@facets')
      .its('status')
      .should('eq', 200);
  })
  it('Click on Priority filter', () => {
    cy.server();
    cy.route('POST', '/appsvc/view-service/api/v1/tasks/facets').as('facets');
    cy.get('[data-testid=sort-priority]').click()
    cy.wait('@facets')
      .its('status')
      .should('eq', 200);
  })
  it('Click on Due Date filter', () => {
    cy.server();
    cy.route('POST', '/appsvc/view-service/api/v1/tasks/facets').as('facets');
    cy.get('[data-testid=sort-due_date]').click()
    cy.wait('@facets')
      .its('status')
      .should('eq', 200);
  });
}) 