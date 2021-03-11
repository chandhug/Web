// describe('Add/Edit allergy form', () => {
//     before(() => {
//         cy.login();
//     });
//     after(() => {
//         // cy.logout();
//     });
//     it('Should open a pop-up modal for add/edit allergy', () => {
//         cy.visit('/search/members');
//         cy.get(
//             ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
//         ).click();
//         cy.server();
//         cy.route('GET', '/execute_sql_query?output_format=json&sql_query=SELECT * FROM WithMe.allergenreactionpicklist').as('allergyReactions');
//         cy.get(
//             '.member-container > .row > .col > .member-details > .reflex-container > .left-pane > .d-flex > .pitems > :nth-child(8) > .btn',
//         ).click();
//         cy.wait('@allergyReactions');
//         cy.get('[data-testid=add-allergy-btn]').click();
//         cy.get('.modal-header').and('be.visible');
//     });
//     it('Should create an allergy', () => {
//         cy.server();
//         // hardcoded input value until the partial search is fully implemented
//         cy.route('GET', '/appsvc/view-service/api/v1/ref/allergies/names?name=citrus&limit=30').as('allergenOptions');
//         cy.get('[data-testid=reactions-picklist] > :nth-child(1) > span').click();
//         cy.get('[data-testid=allergen-dropdown] > .css-2b097c-container')
//             .click()
//             // hardcoded input value until the partial search is fully implemented
//             .type('Citrus');
//         cy.wait('@allergenOptions');
//         cy.get(
//             '[data-testid=allergen-dropdown]>div>:nth-child(3)>div>:nth-child(1)',
//         ).click();
//         cy.get('[data-testid=severity-dropdown] > .css-2b097c-container').click();
//         cy.get(
//             '[data-testid=severity-dropdown]>div>:nth-child(3)>div>:nth-child(1)',
//         ).click();
//         cy.get('.allergy-footer').scrollIntoView();
//         cy.get('[data-testid=save-allergy-btn]').click();
//     });
//     it('Should remove the created allergy', () => {
//         cy.get('.allergy-block')
//             .first()
//             .then($block => {
//                 cy.wrap($block)
//                     .find('[data-testid=allergy-details-btn]')
//                     .click();
//                 cy.wrap($block)
//                     .find('[data-testid=remove-allergy-btn]')
//                     .click();
//                 cy.wrap($block).should('not.exist');
//             });
//     });
// });
