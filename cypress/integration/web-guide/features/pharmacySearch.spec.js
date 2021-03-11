describe('Pharmacy Search', () => {
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
    it('Open Pharmacy Search', () => {
        cy.contains('Resources').click();
        cy.contains('Search Pharmacy').click()
    })
    it('Search for Pharmacy', () => {
        cy.get('#react-google-places-autocomplete-input').type('77 Green')
        cy.get('#-google-places-autocomplete-suggestion--0').click();
    })
    it('Confirm that results are loaded', () => {
        cy.get('[data-testid=pharmacy-resources]').contains('77 GREEN')
    })
})