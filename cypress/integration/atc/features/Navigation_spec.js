describe('ATC Main mavigation', () => {
  before(() => {
    cy.login();
  });
  it('Can switch between different tabs', () => {
    cy.visit('/');
    const dashboardOptions = ['ATC', 'Datastories', 'Guide'];
    cy.get('.dashboard-link').each(($el, index, list) => {
      cy.log($el.text());
      expect(list.length > 0).to.eq(true);
      expect(dashboardOptions.includes($el.text())).to.eq(true);
    });

    cy.get('[data-testid=wm-icon-bell]').click();

    const userManagementOptions = ['Groups', 'Roles', 'Users'];
    cy.get('[data-testid=wm-icon-inbox]').click();
    cy.get('.dashboard-link').each(($el, index, list) => {
      cy.log($el.text());
      expect(list.length > 0).to.eq(true);
      expect(userManagementOptions.includes($el.text())).to.eq(true);
    });

    cy.get('[data-testid=wm-icon-database]').click();
    cy.get('.dashboard-link').each(($dl, index, list) => {
      expect(list.length > 0).to.eq(true);
    });
    cy.get('[data-testid=wm-icon-project-diagram]').click();
    cy.get('.ml-2 > .d-inline-flex').contains('Add Rule Set');
  });
});
