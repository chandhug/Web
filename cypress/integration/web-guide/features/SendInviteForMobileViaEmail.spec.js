import { CYPRESS_USER_USERNAME } from '../../../config';

describe('Send invitation for Mobile App via Email', () => {
  before(() => {
    cy.login();
  });
  it('Click on the Search button', () => {
    cy.visit('/');
    cy.get('#WmMenuOption_Search').click();
  });
  it('Click on a member', () => {
    cy.get(
      '#tb-container > div > div > table > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > div > a > span',
    ).click();
  });
  it('Click on the Outreach dropdown -> Invite for App -> Email', () => {
    cy.get(
      '#app > div > div.p-0.container-fluid > div > div.overflow-hidden.col > div.member-container > div > div > div > div > div.middle-pane.vertical.reflex-element > div > div.dhead.p-2 > div.wmenu.no-gutters.row > div:nth-child(2) > div > button > div',
    ).click();
    cy.get(
      '#app > div > div.p-0.container-fluid > div > div.overflow-hidden.col > div.member-container > div > div > div > div > div.middle-pane.vertical.reflex-element > div > div.dhead.p-2 > div.wmenu.no-gutters.row > div:nth-child(2) > div > div > div:nth-child(1) > div > button > div',
    ).click();
    cy.get(
      '#app > div > div.p-0.container-fluid > div > div.overflow-hidden.col > div.member-container > div > div > div > div > div.middle-pane.vertical.reflex-element > div > div.dhead.p-2 > div.wmenu.no-gutters.row > div:nth-child(2) > div > div > div:nth-child(1) > div > div > button:nth-child(2) > div',
    ).click();
    cy.get(
      '#app > div > div.p-0.container-fluid > div > div.overflow-hidden.col > div.member-container > div > div > div > div > div.middle-pane.vertical.reflex-element > div > div.dhead.p-2',
    ).click();
  });
  it('Enter Email & click Send button And Check Response Status 200', () => {
    cy.server();
    cy.route('POST', '/appsvc/messaging_ms/api/v1/send_message').as('checkEmail');
    cy.get(
      '#app > div > div.p-0.container-fluid > div > div.overflow-hidden.col > div.member-container > div > div > div > div > div.middle-pane.vertical.reflex-element > div > div.p-2.hasBackground.overflow-auto > div.modal-inline.sms-modal > div > div > div.modal-body > div.row > div > input',
    )
      .type(CYPRESS_USER_USERNAME)
      .get(
        '#app > div > div.p-0.container-fluid > div > div.overflow-hidden.col > div.member-container > div > div > div > div > div.middle-pane.vertical.reflex-element > div > div.p-2.hasBackground.overflow-auto > div.modal-inline.sms-modal > div > div > div.modal-footer > button.btn.btn-primary',
      )
      .click();
    cy.wait('@checkEmail')
      .its('status')
      .should('eq', 200);
  });
});
