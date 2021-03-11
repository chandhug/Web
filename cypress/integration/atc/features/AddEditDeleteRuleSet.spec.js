// import { randomPassword } from '../../../functions';

// const randomWord = randomPassword(6);
// const rule_set_name = 'auto_rules_set'
// const rule_set_name_upd = 'auto_rules_set_updated'

// describe("Add/Edit/Delete Rule Sets & Rules", () => {
//     before(() => {
//         cy.login();
//     });
//     it("Open ATC", () => {
//         cy.visit("/");
//     });
//     it('Go to Rules Management', () => {
//         cy.contains('ATC').click()
//         cy.contains('Rule Management').click()
//     })
//     it('Confirm that Rule Sets are loaded well', () => {
//         cy.get('.ml-2 > .d-inline-flex').contains('Add Rule Set').click();
//         cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .m-0').contains('Name');
//         cy.get('.mb-2 > .m-0').contains('Type');
//         cy.get('.col-sm-5 > .form-group > .text-center').contains('Tags');
//         cy.get(':nth-child(1) > .border > .d-block').contains('Exclude Collections');
//         cy.get(':nth-child(2) > .border > .d-block').contains('Schema');
//         cy.get('.text-left > .mr-2').contains('Add Query')
//     })
//     it('Add Rule Set', () => {
//         cy.get('.mb-2 > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type('Claims{enter}');
//         cy.get(':nth-child(2) > .border > .multiselect > .multiselect__control > .multiselect__value-container').type('Coverage{enter}')
//         cy.wait(2000)
//         cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .form-control').type(rule_set_name);
//         cy.get('.float-right').contains('Remove').click()
//         cy.get('.text-right > .btn-primary').contains('Save Changes').click()
//     })
//     it('Confirm that Rule Set is created', () => {
//         cy.get('[data-testid=wm-icon-project-diagram]').click()
//         cy.get('.col > .form-control').clear()
//         cy.get('.col > .form-control').type(rule_set_name + '{enter}');
//         cy.get('.align-self-center > .row > :nth-child(1)').contains(rule_set_name)
//     })
//     it('Edit the Rule Set', () => {
//         cy.wait(2000)
//         cy.get('.dropleft > .border').click();
//         cy.get('.dropdown-menu').contains('Edit').click()
//         cy.get('.data-name').contains('Edit ' + rule_set_name);
//         cy.get('.form-control').clear();
//         cy.get('.form-control').type(rule_set_name_upd);
//         cy.get('.text-right > .btn-primary').contains('Save Changes').click()
//     })
//     it('Confirm that Rule Set is edited', () => {
//         cy.get('[data-testid=wm-icon-project-diagram]')
//         cy.get('.col > .form-control').clear()
//         cy.get('.col > .form-control').type(rule_set_name_upd + '{enter}');
//         cy.get('.align-self-center > .row > :nth-child(1)').contains(rule_set_name_upd)
//     });
//     it('Delete the Rule Set', () => {
//         cy.get('.dropleft > .border').click();
//         cy.get('.dropdown-menu').contains('Delete').click()
//         cy.get('.text-center > :nth-child(2)').contains(rule_set_name_upd);
//         cy.get('.btn-outline-primary').contains('Cancel');
//         cy.get('.modal-footer > .btn-primary').contains('Delete').click();
//     })
// });



