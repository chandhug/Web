// import { get } from 'lodash';
// import { randomPassword } from '../../../functions';

// const randomWord = randomPassword(5);

// describe('Should Add Comment in Task', () => {
//   before(() => {
//     // cy.login();
//     cy.server();
//     cy.route(
//       'GET',
//       '/execute_sql_query?output_format=json&sql_query=select * from WithMe.taskhierarchy',
//     ).as('taskTypes');
//     cy.route('POST', '/tasks/api/v1/task').as('addTask');
//     cy.route('POST', '/tasks/api/v1/get_all_tasks').as('AllTasks');
//     cy.route('PUT', '/tasks/api/v1/task').as('updateTask');
//    }); 
//     it ('should visit member profile', () =>{
//     cy.visit('/search/members');
//     // cy.wait('@login');
//     cy.get(
//       ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
//     ).click();
//     });
//     it ('should open the add-task modal', () =>{
//     cy.get('[data-testid=add-task-btn]')
//       .click()
//       .wait('@taskTypes');
//     });  
//     it ('should choose a task type', () =>{
//     cy.get(
//       '[data-testid="task-type-col"] > .css-2b097c-container > .css-yk16xz-control',
//     ).click();
//     cy.get(
//       '.css-2b097c-container>div:nth-child(3)>div>div:nth-child(3)',
//     ).click();
//     });
//     it('should choose a task priority and confirm the three dropdown options are present', () => {
//     cy.get("[data-testid='wm-global-modal']")
//       .find('[data-testid=task-priority] > .btn-group > .pl-0')
//       .click()
//       .get('[data-testid=high]')
//       .and('be.visible')
//       .get('[data-testid=medium]')
//       .and('be.visible')
//       .get('[data-testid=low]')
//       .and('be.visible')
//       .click();
//     });  
//     it ('should choose a task status', () => {
//     cy.get("[data-testid='wm-global-modal']")
//       .find('[data-testid=task-status]')
//       .click();
//     cy.get('[data-testid="task-status-option"]')
//       .first()
//       .click();
//     });  
//     it ('should choose task duedate', () => {
//     cy.get('[data-testid=task-duedate]').click();
//     cy.get('.react-datepicker > .react-datepicker__navigation--next').click();
//     cy.get('.react-datepicker__day--015').click();
//     });
//     it ('should enter task description', () => {
//     cy.get('[data-testid="task-description"] > .form-control').type(
//       `Cypress test is creating a task, identifier: ${randomWord}`,
//     );
//     });
//     it ('should save the created task', () => {
//     cy.get("[data-testid='wm-global-modal']")
//       .find('[data-testid=create-task]')
//       .click();
//     cy.wait('@addTask');
//     });
//    });

//   after(() => {
//     //cy.logout();
//   });

//   it('Should find the created task, add comment and confirm that the added comment is visible', () => {
//     cy.visit('/tasks');
//     // cy.wait('@AllTasks');
//     cy.get('[title="Assigned to Me"]')
//     // cy.get('[data-rbd-draggable-id="column-draggable-assigned"]')
//       .find('[data-testid="task-card-description"]')
//       .contains(`Cypress test is creating a task, identifier: ${randomWord}`)
//       .click();
//     //adding comment
//     cy.get('.add-comment')
//       .click()
//       .type(`${randomWord} {enter}`);
//     //checking comment
//     cy.get('.comment-text').contains(randomWord);
//     // Confirm that the user can see the time when the comment was written
//     cy.get('.comment-timestamp').should('be.visible');
//     // Confirm that the user can see the person who wrote the comment.
//     cy.get('.comment-name').should('be.visible');
//     cy.get('.btn-primary').click();
  
// });
