import { randomPassword } from '../../../functions';

const randomWord = randomPassword(4);

describe('Send mobile invitation', () => {
  it('Visit member page', () => {
    before(cy.login());
    cy.visit('/members/1253');
  });
  it('Mobile invite sent', () => {
    cy.get('.member-summary > .row > :nth-child(6)').contains(
      'Mobile Invite Sent',
    );
  });
  it('Chat area is enabled', () => {
    cy.get('[data-testid=send-message-textarea]').type(randomWord);
    cy.get('[data-testid=send-message]').click();
  });
  it('Confirm that message was sent', () => {
    cy.get('.chat-container > .overflow-auto').contains(randomWord);
  });
});
