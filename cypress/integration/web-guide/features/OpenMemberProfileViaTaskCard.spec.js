// import {
//     CYPRESS_USER_SERVICE_BASE_URL,
//     CYPRESS_AUTHENTICATION_TEST_USERID,
//   } from '../../../config';
//   import { randomPassword } from '../../../functions';
//   ​
//   const randomWord = randomPassword(5);
// describe("Open a member profile/workspace via Task Card", () => {
//     before(() => {
//         cy.login();
//       });
//       it('Visit Web Guide Page', () => {
//         cy.visit('http://localhost:8081/tasks');
//       });
//       it('Open member search', () => {
//         cy.get('[data-testid=wm-icon-search]').click();
//         cy.wait(5000);
//       });
//       it('Open member profile', () => {
//         cy.get(
//           '#tb-container > div > div > table > tbody:nth-child(5) > tr:nth-child(1) > td:nth-child(1) > div > a',
//         ).click();
//         cy.wait(1000);
//       });
//       it('Click Add Task', () => {
//         cy.get(
//           '#app > div > div.p-0.container-fluid > div > div.overflow-hidden.col > div.member-container > div > div > div > div > div.middle-pane.vertical.reflex-element > div > div.dhead.p-2 > div:nth-child(1) > button:nth-child(2)',
//         ).click();
//       });
//       it('Choose Type', () => {
//         cy.get("[data-testid='wm-global-modal']")
//           .find('.css-yk16xz-control')
//           .wait(8000);
//         cy.get("[data-testid='wm-global-modal']")
//           .find('.css-yk16xz-control')
//           .click();
//         cy.get(
//           '[data-testid=select-task_type]>div>div>:nth-child(3)>div>:nth-child(1)',
//         ).click();
//         cy.wait(5000);
//       });
//       it('Choose priority', () => {
//         cy.get("[data-testid='wm-global-modal']")
//           .find('[data-testid=task-priority] > .btn-group > .pl-0')
//           .wait(5000);
//         cy.get("[data-testid='wm-global-modal']")
//           .find('[data-testid=task-priority] > .btn-group > .pl-0')
//           .click()
//           .get('[data-testid=high]')
//           .click();
//       });
//       it('Choose status', () => {
//         cy.get("[data-testid='wm-global-modal']")
//           .find('[data-testid=task-status]')
//           .click();
//         cy.get(
//           ':nth-child(4) > .col > .btn-group > .dropdown-menu > :nth-child(1)',
//         ).click();
//       });
//       it('Choose due date', () => {
//         cy.get("[data-testid='wm-global-modal']")
//           .find('[data-testid=task-duedate]')
//           .click();
//         cy.get('.col-10 > .btn-group > .dropdown-menu > :nth-child(2)').click();
//       });
//       it('Add description', () => {
//         cy.get("[data-testid='wm-global-modal']")
//           .find('.form-control')
//           .type(randomWord);
//       });
//       it('Create Task', () => {
//     cy.get("[data-testid='wm-global-modal']")
//       .find('[data-testid=create-task]')
//       .click();
//     cy.wait(3000);
//   });
//   it('Confirm that Task was created', () => {
//     cy.get('[data-testid=wm-icon-tasks]').click();
//     cy.wait(5000);
//     cy.get('[data-rbd-draggable-id="column-draggable-assigned"] > .sc-fzoLag')
//       .contains(randomWord)
//     });
//     it('Click on a Task card', () => {
//         cy.get(
//           '[data-rbd-draggable-id="d9b0fc72-a3f3-11ea-952d-4ab5d5b4b3f2"] > .sc-fzpans > .task-card-new > :nth-child(1) > .details > .task-title',
//         ).click();
//       });
//       it('Click on the member name', () => {
//         cy.get("[data-testid='wm-global-modal']")
//           .find('.member-name > .ml-2')
//           .click();
//           cy.get('[data-testid="wm-icon-times"]')
//           .click()
//       });
//       it('Go back to Tasks', () => {
//         cy.get('[data-testid="wm-icon-tasks"]').click();
//         cy.wait(5000);
//       });
//       it("Open click on a member name without opening the Task Card", () => {
//           cy.get('[data-rbd-draggable-id="d9b0fc72-a3f3-11ea-952d-4ab5d5b4b3f2"] > .sc-fzpans > .task-card-new > :nth-child(1) > .header > .btn > .user-profile-image-container > .label')
//           .click()
//           cy.location('pathname', { timeout: 5000 }).should('include', '/members');
//       })

// })
