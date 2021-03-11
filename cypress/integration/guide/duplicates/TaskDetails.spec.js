// describe('Open task details modal on and close the modal', ()=>{
//     before(()=>{
//         cy.login();
//     });
//     after(()=>{
//         // cy.logout();
//     });

//   it('Should visit the tasks page and open a Task Details modal on a Closed/Completed task', () => {
//     cy.visit('/tasks');
//     cy.server();
//     cy.route('POST', '/tasks/api/v1/get_all_tasks').as('getTasks');
//     cy.get('[data-testid="see-all-tasks-btn"]').click();
//     cy.wait('@getTasks');
//     cy.get('.table-body > .tb1:nth-child(3)').click();
//     cy.get('[data-testid="wm-global-modal"]').and('be.visible');
//     cy.get('[data-testid="wm-icon-times"]').click();
//     cy.get('[data-testid="wm-global-modal"]').should('not.be.visible');
//   });
// });
