// import { randomPassword } from '/../../functions';
// import { CYPRESS_AUTHENTICATION_TEST_USERID } from '.../../../config';

// const randomWord = randomPassword(5);

// describe('Change Task Status', () => {
//   before(() => {
//     cy.login();
//   });
//   after(() => {
//     //cy.logout();
//   });

//   beforeEach(() => {
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
//     // it should choose a task status
//     cy.get("[data-testid='wm-global-modal']")
//       .find('[data-testid=task-status]')
//       .click();
//     cy.get('[data-testid="task-status-option"]')
//       .first()
//       .click();
//     // it should choose task duedate from datepicker
//     cy.get('[data-testid=task-duedate]').click();
//     cy.get('.react-datepicker > .react-datepicker__navigation--next').click();
//     cy.get('.react-datepicker__day--015').click();
//     // it should enter task description
//     cy.get('[data-testid="task-description"] > .form-control').type(
//       `Cypress test is creating a task and changing its status, identifier:${randomWord}`,
//     );
//     // it should save the created task
//     cy.get("[data-testid='wm-global-modal']")
//       .find('[data-testid=create-task]')
//       .click();
//     cy.wait('@addTask');
//   });

//   it('Should find the created task and change the status to "Closed"', () => {
//     cy.visit('/tasks');
//     cy.wait('@getAllTasks');
//     cy.get('[data-rbd-draggable-id="column-draggable-assigned"]')
//       .find('[data-testid="task-card-description"]')
//       .contains(
//         `Cypress test is creating a task and changing its status, identifier:${randomWord}`,
//       )
//       .click();
//     cy.get("[data-testid='wm-global-modal']")
//       .find('[data-testid=task-status]')
//       .click();
//     cy.get('[data-testid="task-status-option"]')
//       .contains('Closed - Other')
//       .click();
//     cy.get("[data-testid='save-task-changes-btn']").click();
//     cy.wait('@updateTask');
//     cy.get('[data-testid="recently-closed-col"]')
//       .find('[data-testid="task-card-description"]')
//       .contains(
//         `Cypress test is creating a task and changing its status, identifier:${randomWord}`,
//       );
//   });

//   it('Should find the created task and change the status to "In Progress"', () => {
//     cy.visit('/tasks');
//     cy.wait('@getAllTasks');
//     cy.get('[data-rbd-draggable-id="column-draggable-assigned"]')
//       .find('[data-testid="task-card-description"]')
//       .contains(
//         `Cypress test is creating a task and changing its status, identifier:${randomWord}`,
//       )
//       .click();
//     cy.get("[data-testid='wm-global-modal']")
//       .find('[data-testid=task-status]')
//       .click();
//     cy.get('[data-testid="task-status-option"]')
//       .contains('In progress')
//       .click();
//     cy.get("[data-testid='save-task-changes-btn']").click();
//     cy.wait('@updateTask');
//     cy.get('[data-rbd-draggable-id="column-draggable-assigned"]')
//       .find('[data-testid="task-card-description"]')
//       .contains(
//         `Cypress test is creating a task and changing its status, identifier:${randomWord}`,
//       )
//       .click();
//     cy.get('[data-testid="task-status"] > .task-status').contains(
//       'In progress',
//     );
//   });
// });


//This is being tested with Recently Closed Task
