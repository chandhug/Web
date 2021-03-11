import {
  CYPRESS_USER_USERNAME,
  CYPRESS_USER_SERVICE_BASE_URL,
  CYPRESS_AUTHENTICATION_TEST_USERID,
} from '../../../config';

describe('Guide curates a list of educational resources for member ', () => {
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
  it('Click on the Resources dropdown -> Preference', () => {
    cy.get('.wmenu > :nth-child(1) > .dropdown > .btn').click();
    cy.get(
      ':nth-child(1) > .dropdown > .dropdown-menu > :nth-child(3)',
    ).click();
    cy.wait(5000);
  });
  it('click on 3 dots and Send Through SMS', () => {
    cy.server();
    cy.route('POST', '/appsvc/messaging_ms/api/v1/send_message').as('checkSMS');
    cy.get(':nth-child(1) > :nth-child(3) > .dropdown > .btn').click();
    cy.get(':nth-child(1) > :nth-child(3) > .dropdown > .dropdown-menu > :nth-child(1) > .text').click();
    cy.get('[data-testid=mobilePhone-phone-number]').click();
    cy.get('[data-testid=mobilePhone-phone-number]').type('+38979123456');
    cy.get('[data-testid=mobilePhone-phone-number]').type('+38979123456');
    cy.get('.modal-footer > .btn-primary').click();
    cy.wait('@checkSMS')
      .its('status')
      .should('eq', 200);
    cy.wait(5000);
  });
  it('click on 3 dots and Send Through Email', () => {
    cy.server();
    cy.route('POST', '/appsvc/messaging_ms/api/v1/send_message').as('checkEmail');
    cy.get(':nth-child(1) > :nth-child(3) > .dropdown > .btn').click();
    cy.get(
      ':nth-child(1) > :nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2) > .text',
    ).click();
    cy.get('.col > .form-control').type(CYPRESS_USER_USERNAME);
    cy.get('.modal-footer > .btn-primary').click();
    cy.wait('@checkEmail')
      .its('status')
      .should('eq', 200);
    cy.wait(5000);
  });
  it('click on 3 dots and Send Through Email', () => {
    cy.server();
    cy.route('POST', '/appsvc/messaging_ms/api/v1/send_message').as('checkEmail');
    cy.get(':nth-child(1) > :nth-child(3) > .dropdown > .btn').click();
    cy.get(
      ':nth-child(1) > :nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2) > .text',
    ).click();
    cy.get('.col > .form-control').type(CYPRESS_USER_USERNAME);
    cy.get('.modal-footer > .btn-primary').click();
    cy.wait('@checkEmail')
      .its('status')
      .should('eq', 200);
    cy.wait(5000);
  });
});
