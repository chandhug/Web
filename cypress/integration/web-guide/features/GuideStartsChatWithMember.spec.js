import { randomPassword } from '../../../functions';

const randomWord = randomPassword(5);

describe("Guide Starts a Chat With Member", () => {
    before(() => {
        cy.login();
    });
    it('Open a member search', () => {
        cy.visit('/search/members');
    });
    it('Open member profile', () => {
        cy.get(
            ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
          ).click();
          cy.wait(1000);
    });
    it("Click on the Chat typing input", () => {
        cy.get('[data-testid=send-message-textarea]').type(randomWord)
    });
    it("Send a message", () => {
        cy.get('[data-testid=send-message]').click()
    })
    it("Confirm that message was sent", () => {
        cy.get('.chat-container > .overflow-auto').contains(randomWord)
    })
    it("Close the chat", () => {
        cy.get('.fa-times-square').click();
        cy.get('.css-yk16xz-control > .css-1hwfws3').type('Other{enter}')
        cy.get('[data-testid=disposition-form--note]').type("test close chat")
        cy.get('[data-testid=save-button]').click()
    })
})
