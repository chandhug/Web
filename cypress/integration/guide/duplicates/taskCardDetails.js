// import { randomPassword } from '../../../functions';

// const randomWord = randomPassword(5);

// describe('Create & Edit Task', () => {
//   before(() => {
//     cy.logout();
//   });
//   it('Visit Members', () => {
//     cy.login();
//     cy.visit('/search/members');
//   });
//   it('Open member profile', () => {
//     cy.get(
//       ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
//     ).click();
//     cy.wait(1000);
//   });
//   it('Click Add Task', () => {
//     cy.get('[data-testid=add-task-btn]').click();
//   });
//   it('Task Type', () => {
//         cy.server();
//     cy.get("[data-testid='wm-global-modal']").find('.css-yk16xz-control');
//     cy.get("[data-testid='wm-global-modal']")
//       .find('.css-yk16xz-control')
//       .click()
//   })
//   it('Choose priority', () => {
//     cy.get("[data-testid='wm-global-modal']").find(
//       '[data-testid=task-priority] > .btn-group > .pl-0',
//     );
//     cy.get("[data-testid='wm-global-modal']")
//       .find('[data-testid=task-priority] > .btn-group > .pl-0')
//       .click()
//       .get('[data-testid=high]')
//       .click();
//   });
//   it('Choose status', () => {
//     cy.get("[data-testid='wm-global-modal']")
//       .find('[data-testid=task-status]')
//       .click();
//     cy.get('.dropdown-menu > :nth-child(1) > span').click();
//   });
//   it('Choose due date', () => {
//     cy.get("[data-testid='wm-global-modal']")
//       .find('.react-datepicker__input-container')
//       .click();
//     cy.get(':nth-child(5) > .react-datepicker__day--030').click();
//   });
//   it('Add description', () => {
//     cy.get("[data-testid='wm-global-modal']")
//       .find('.form-control')
//       .type(randomWord);
//   });
//   it('Choose Type', () => {
//     cy.server();
//     cy.get("[data-testid='wm-global-modal']").find('.css-yk16xz-control');
//     cy.get("[data-testid='wm-global-modal']")
//       .find('.css-yk16xz-control')
//       .click()
//       .type('Gad2{enter}');
//   });
//   it('Create Task', () => {
//     cy.get("[data-testid='wm-global-modal']")
//       .find('[data-testid=create-task]')
//       .click();
//   });
//   it('Open the edited task', () => {
//     cy.get('[data-testid=wm-icon-tasks]').click();
//     cy.wait(10000);
//     cy.get('[data-rbd-draggable-id="column-draggable-assigned"] > .sc-fzoLag')
//       .type(`{ctrl}{f}${randomWord}`)
//       .should('be.visible');
//     cy.get('[data-rbd-draggable-id]')
//       .contains(randomWord)
//       .click({ multiple: false });
//   });
//   it('Edit the task', () => {
//     cy.get('.css-1uccc91-singleValue > .userName').type('Lazar {enter}');
//     cy.get(
//       ':nth-child(3) > .col > .btn-group > .pl-0 > .task-priority',
//     ).click();
//     cy.get('[data-testid=medium]').click();
//     cy.get('.add-comment').type('Test1');
//     cy.get(':nth-child(2) > .nav-link').click();
//     cy.get(':nth-child(3) > .nav-link').click();
//     // cy.get('.btn-primary').click();
//   });
// });
