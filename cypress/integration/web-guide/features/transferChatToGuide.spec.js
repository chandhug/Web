describe("Transfer Chat", () => {
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
    it("Start Chat", () => {
        cy.get("[data-testid=send-message-textarea]").type("Hello");
        cy.get("[data-testid=send-message]").click();
    });
    it('Transfer Chat to another Guide', () => {
        cy.get('.fa-exchange').click()
        cy.wait(3000)
        cy.get('.css-7115k7-control > .css-1hwfws3')
        cy.get('[data-testid=transfer-chat--message]').type('Test')
        cy.get('.css-7115k7-control > .css-1hwfws3').type('{downarrow}{downarrow}{enter}');
        cy.get('[data-testid=save-button]').click()

    });
    it('Confirm that transfer is made', () => {
        cy.get('[data-testid=transfer-message]').should('be.visible');
        cy.get(".fa-exchange").should("not.exist");
        cy.get('.fa-times-square').should('not.exist')
    })
});
