import {
  CYPRESS_USER_USERNAME,
  CYPRESS_USER_PASSWORD,
  CYPRESS_USER_LOGIN_UUID,
  CYPRESS_USER_SERVICE_BASE_URL,
} from '../config';
import 'cypress-file-upload'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';

// ADDED this because we can prevent localStorage from being cleared between each test, which is handy because
// we want to keep the `authToken` in LocalStorage and then we don't have to login before each test.
// eslint-disable-next-line func-names
Cypress.LocalStorage.clear = function () {
  // eslint-disable-next-line no-useless-return
  return;
};
/* eslint-disable camelcase */
Cypress.Commands.add('login', () => {
  cy.request({
    method: 'POST',
    url: `${CYPRESS_USER_SERVICE_BASE_URL}noauth/sign_in_system_user`,
    body: {
      email: CYPRESS_USER_USERNAME,
      login_uuid: CYPRESS_USER_LOGIN_UUID,
      password: CYPRESS_USER_PASSWORD
    }
  }).then(response => {
    const { id } = response.body;
    // const { sms_verification_code } = '123456';
    // cy.request({
    //   method: 'GET',
    //   url: `${CYPRESS_USER_SERVICE_BASE_URL}internal/user/get_sms_code/${id}`,
    // }).then(smsResponse => {
    //   const { sms_verification_code } = smsResponse.body;
      cy.request({
        method: 'POST',
        url: `${CYPRESS_USER_SERVICE_BASE_URL}noauth/verify_sign_in/${id}/123456?is_web=true`,
      }).then(tokenResponse => {
        const { jwt_token } = tokenResponse.body;
        window.localStorage.setItem('authToken', jwt_token.jwt_token);
      });
    // });
  });
});

Cypress.Commands.add('logout', () => {
  // window.localStorage.clear();
  cy.get('[data-testid=wm-icon-sign-out]').click();
  cy.get('.modal-footer > :nth-child(2)').click();
});
