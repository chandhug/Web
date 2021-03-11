import 'cypress-iframe';
import {
  CYPRESS_LOGIN_PAGE_BASE_URL,
  CYPRESS_USER_PASSWORD,
  CYPRESS_USER_USERNAME,
  CYPRESS_USER_SERVICE_BASE_URL,
  CYPRESS_USER_TEST_USERID,
} from '../../../config';

describe('Login & Logout', () => {
  it('Navigate to login page', () => {
    cy.visit(CYPRESS_LOGIN_PAGE_BASE_URL);
    cy.get('[data-testid=wm-icon-sign-out]').click()
  });
//   it('Find Iframe', () => {
//     cy.frameLoaded('#app > div > iframe:nth-child(2)');
//   });
//   it('Check if Login page is displayed', () => {
//     cy.url().should('include', '/login');
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find('#app > div > div > div > div > h2')
//       .should('have.text', 'Login');
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find(
//         '#app > div > div > div > div > form > div:nth-child(3) > div > button',
//       )
//       .should('be.visible');
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find('#username')
//       .should('be.visible');
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find('#password')
//       .should('be.visible');
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find('#app > div > div > div > div > form > div.mt-3.row > div > a')
//       .should('be.visible');
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find('#app > div > div > div > div > form > div.mt-3.row > div > a')
//       .should('have.text', 'Forgot your password?');
//   });
//   it('Enter Username & Password', () => {
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find('#username')
//       .type(CYPRESS_USER_USERNAME);
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find('#password')
//       .type(CYPRESS_USER_PASSWORD);
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find(
//         '#app > div > div > div > div > form > div:nth-child(3) > div > button',
//       )
//       .click();
//   });
//   it('Enter Verification Code', () => {
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find('#app > div > div > div > div')
//       .should('be.visible');
//     cy.wait(2000);
//     cy.request(
//       `${CYPRESS_USER_SERVICE_BASE_URL}internal/user/get_sms_code/${CYPRESS_USER_TEST_USERID}`,
//     ).then(smsResponse => {
//       cy.iframe('#app > div > iframe:nth-child(2)')
//         .find('#verificationCode')
//         .type(smsResponse.body.sms_verification_code);
//     });
//   });
//   it('Login to ATC', () => {
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find(
//         '#app > div > div > div > div > form > div:nth-child(2) > div > button',
//       )
//       .click();
//   });
//   it('Visit Web Guide', () => {
//     cy.get(':nth-child(3) > .dashboard-link').click();
//     cy.visit('http://web-guide-dev-service.dev.svc.cluster.local/tasks');
//     cy.wait(3000);
//   });
//   it('Check if page is loaded', () => {
//     cy.get('[data-testid=wm-icon-tasks]').should('be.visible');
//     cy.get('[data-testid=wm-icon-search]').should('be.visible');
//     cy.get('[data-testid=wm-icon-history]').should('be.visible');
//     cy.get('[data-testid=wm-icon-chart-line]').should('be.visible');
//   });
//   it('Go back to ATC', () => {
//     cy.visit('http://atc-dev-service.dev.svc.cluster.local');
//     cy.wait(5000);
//   });
//   it('Logout', () => {
//     cy.get(
//       '#app > div > div > div > div.col-auto > div > a:nth-child(8)',
//     ).click();
//   });
//   it('Check if Login page is displayed', () => {
//     cy.url().should('include', '/login');
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find('#app > div > div > div > div > h2')
//       .should('have.text', 'Login');
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find(
//         '#app > div > div > div > div > form > div:nth-child(3) > div > button',
//       )
//       .should('be.visible');
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find('#username')
//       .should('be.visible');
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find('#password')
//       .should('be.visible');
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find('#app > div > div > div > div > form > div.mt-3.row > div > a')
//       .should('be.visible');
//     cy.iframe('#app > div > iframe:nth-child(2)')
//       .find('#app > div > div > div > div > form > div.mt-3.row > div > a')
//       .should('have.text', 'Forgot your password?');
//   });
});
