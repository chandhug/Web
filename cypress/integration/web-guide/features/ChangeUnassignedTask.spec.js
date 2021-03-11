// import { randomPassword } from '../../../functions';
// import {
//   CYPRESS_AUTHENTICATION_TEST_USERID,
//   CYPRESS_USER_FULL_NAME,
// } from '../../../config';

// const randomWord = randomPassword(5);

// describe('Change Task Owner', () => {
//   before(() => {
//     cy.login();
//     cy.server();
//     cy.route(
//       'GET',
//       `/user/api/v1/auth/user/${CYPRESS_AUTHENTICATION_TEST_USERID}`,
//     ).as('login');
//     cy.route(
//       'GET',
//       '/execute_sql_query?output_format=json&sql_query=select * from WithMe.taskhierarchy',
//     ).as('taskTypes');
//     cy.route('POST', '/tasks/api/v1/task').as('addTask');
//     cy.route('POST', '/tasks/api/v1/get_all_tasks').as('getAllTasks');
//     cy.route('PUT', '/tasks/api/v1/task').as('updateTask');
//     cy.route(
//       'GET',
//       '/user/api/v1/auth/user/get_user_basic_json_by_type/Guide',
//     ).as('getGuides');
//     // it should visit member profile
//     cy.visit('/search/members');
//     cy.wait('@login');
//     cy.get(
//       ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
//     ).click();
//     // it should open the add-task modal
//     cy.get('[data-testid=add-task-btn]')
//       .click()
//       .wait('@taskTypes');
//     // it should choose a task type
//     cy.get(
//       '[data-testid="task-type-col"] > .css-2b097c-container > .css-yk16xz-control',
//     ).click();
//     cy.get(
//       '.css-2b097c-container>div:nth-child(3)>div>div:nth-child(3)',
//     ).click();
//     // it should choose a task priority
//     cy.get("[data-testid='wm-global-modal']")
//       .find('[data-testid=task-priority] > .btn-group > .pl-0')
//       .click()
//       .get('[data-testid=high]')
//       .click();
//     // it should set the owner to unassigned
//     cy.get("[data-testid='task-owner'] > .css-g0y5er-container")
//       .click()
//       .find('.css-26l3qy-menu > .css-4ljt47-MenuList > div:nth-child(1)')
//       .click();
//     // it should choose a task status
//     cy.get("[data-testid='wm-global-modal']")
//       .find('[data-testid=task-status]')
//       .click();
//     cy.get('[data-testid="task-status-option"]')
//       .first()
//       .click();
//     // it should choose task duedate
//     cy.get('[data-testid=task-duedate]').click();
//     cy.get('.react-datepicker > .react-datepicker__navigation--next').click();
//     cy.get('.react-datepicker__day--015').click();
//     // it should enter task description
//     cy.get('[data-testid=task-description] > .form-control').type(
//       `Cypress test is creating unassigned task, identifier: ${randomWord}`,
//     );
//     // it should save the created task
//     cy.get("[data-testid='wm-global-modal']")
//       .find('[data-testid=create-task]')
//       .click();
//     cy.wait('@addTask');
//   });

//   after(() => {
//     //cy.logout();
//   });
//   it('Should find the created task and change its owner to the current user', () => {
//     cy.visit('/tasks');
//     cy.wait('@getAllTasks');
//     cy.get('[data-rbd-draggable-id="column-draggable-Unassigned"]')
//       .find('[data-testid="task-card-description"]')
//       .contains(
//         `Cypress test is creating unassigned task, identifier: ${randomWord}`,
//       )
//       .click();
//     cy.wait('@getGuides');
//     cy.get('[data-testid="task-owner"] > div > .css-g0y5er-container').type(
//       CYPRESS_USER_FULL_NAME,
//     );
//     cy.get(
//       '.css-26l3qy-menu > .css-4ljt47-MenuList > div:nth-child(1)',
//     ).click();
//     cy.get("[data-testid='save-task-changes-btn']").click();
//     cy.wait('@updateTask');
//     cy.get('[data-rbd-draggable-id="column-draggable-assigned"]')
//       .find('[data-testid="task-card-description"]')
//       .contains(
//         `Cypress test is creating unassigned task, identifier: ${randomWord}`,
//       )
//       .should('exist');
//   });
// });
