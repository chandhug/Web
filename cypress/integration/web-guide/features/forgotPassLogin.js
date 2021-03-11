import 'cypress-iframe';
import { randomPassword } from '../../../functions';
import {
  CYPRESS_LOGIN_PAGE_BASE_URL,
  CYPRESS_AUTHENTICATION_TEST_USERNAME,
  CYPRESS_AUTHENTICATION_TEST_USERID,
  CYPRESS_USER_SERVICE_BASE_URL,
} from '../../../config';

const pass = randomPassword(12);

describe('Forgot Password', () => {
  it('Navigate to login page', () => {
    cy.visit(CYPRESS_LOGIN_PAGE_BASE_URL);
  });
  it('Find Iframe', () => {
    cy.frameLoaded('#app > div > iframe:nth-child(2)');
  });
  it('Enter username', () => {
    cy.iframe('#app > div > iframe:nth-child(2)')
      .find('#username')
      .type(CYPRESS_AUTHENTICATION_TEST_USERNAME);
  });
  it('Click on forgot password', () => {
    cy.iframe('#app > div > iframe:nth-child(2)')
      .find('#app > div > div > div > div > form > div.mt-3.row > div > a')
      .click();
  });
  it('Click Submit', () => {
    cy.iframe('#app > div > iframe:nth-child(2)')
      .find(
        '#app > div > div > div > div > form > div:nth-child(2) > div > button',
      )
      .click();
  });
  it('Wait for code to be updated', () => {
    cy.wait(5000);
  });
  it('Find and enter code', () => {
    cy.request(
      `${CYPRESS_USER_SERVICE_BASE_URL}internal/user/get_sms_code/${CYPRESS_AUTHENTICATION_TEST_USERID}`,
    ).then(smsResponse => {
      cy.iframe('#app > div > iframe:nth-child(2)')
        .find('#verificationCode')
        .type(smsResponse.body.sms_verification_code);
    });
  });
  it('Click submit', () => {
    cy.iframe('#app > div > iframe:nth-child(2)')
      .find(
        '#app > div > div > div > div > form > div:nth-child(2) > div > button',
      )
      .click();
  });
  it('Enter password', () => {
    cy.iframe('#app > div > iframe:nth-child(2)')
      .find('#password')
      .type(pass); 
  });
  it('Confirm password', () => {
    cy.iframe('#app > div > iframe:nth-child(2)')
      .find('#confirmPassword')
      .type(pass); 
  });
  it('Click submit', () => {
    cy.iframe('#app > div > iframe:nth-child(2)')
      .find('#app > div > div > div > div > form > div.row > div > button')
      .click();
  });
  it('Wait for update of Password', () => {
    cy.wait(15000);
  });
  it('Logout', () => {
    cy.get(
      '#app > div > div > div > div.col-auto > div > a:nth-child(8)',
    ).click();
  });
  it('Wait', () => {
    cy.wait(5000);
  });
});

describe('Login', () => {
  it('Navigate to login page', () => {
    cy.visit(CYPRESS_LOGIN_PAGE_BASE_URL);
  });
  it('Find Iframe', () => {
    cy.frameLoaded('#app > div > iframe:nth-child(2)');
  });
  it('Enter username', () => {
    cy.iframe('#app > div > iframe:nth-child(2)')
      .find('#username')
      .type(CYPRESS_AUTHENTICATION_TEST_USERNAME);   //'lazar.stepanoski@loka.com'
  });
  it('Enter password', () => {
    cy.iframe('#app > div > iframe:nth-child(2)')
      .find('#password')
      .type(pass);
  });
  it('Click Submit', () => {
    cy.iframe('#app > div > iframe:nth-child(2)')
      .find(
        '#app > div > div > div > div > form > div:nth-child(3) > div > button',
      )
      .click();
  });
  it('Find Iframe in verification', () => {
    cy.frameLoaded('#app > div > iframe:nth-child(2)');
  });

  it('Wait for code to be updated', () => {
    cy.wait(5000);
  });

  it('Find and enter code', () => {
    cy.request(
      `${CYPRESS_USER_SERVICE_BASE_URL}internal/user/get_sms_code/${CYPRESS_AUTHENTICATION_TEST_USERID}`,
    ).then(smsResponse => {
      cy.iframe('#app > div > iframe:nth-child(2)')
        .find('#verificationCode')
        .type(smsResponse.body.sms_verification_code);
    });
  });
  it('Click submit', () => {
    cy.iframe('#app > div > iframe:nth-child(2)')
      .find(
        '#app > div > div > div > div > form > div:nth-child(2) > div > button',
      )
      .click();
  });
  it('Wait', () => {
    cy.wait(5000);
  });
  it('Logout', () => {
    cy.get(
      '#app > div > div > div > div.col-auto > div > a:nth-child(8)',
    ).click();
  });
  it('Wait', () => {
    cy.wait(5000);
  });
});
