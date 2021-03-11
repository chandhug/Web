describe('Provider Search', () => {
    before(() => {
      cy.login();
    });
    it('Open a member profile', () => {
      cy.visit('/search/members');
      cy.get(
        ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
      ).click();
      cy.wait(3000);
    });
    it('Open Provider Search', () => {
        cy.contains('Resources').click();
        cy.contains('Search Provider').click()
    })
    it('Search for Provider', () => {
        cy.get('[data-testid=query-input]').type('John')
        cy.get('[data-testid=search-button]').click();
    })
    it('Confirm that results are loaded', () => {
        cy.get('[data-testid=provider-resources]').contains('JOHN')
    })
})