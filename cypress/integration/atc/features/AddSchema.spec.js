// import { randomPassword } from '../../../functions';

// const randomWord = randomPassword(1);

// describe("Add Schema", () => {
//     before(() => {
//         cy.login();
//     });
//     it("Open ATC", () => {
//         cy.visit("/");
//     });
//     it('Go to Schemas', () => {
//         cy.get(':nth-child(1) > .dashboard-link').contains('ATC').click()
//         cy.get(':nth-child(2) > .dashboard-link').contains('Data Management').click()
//         cy.get(':nth-child(1) > .dashboard-link').contains('Schema').click()
//         cy.get('.ml-2 > .d-inline-flex').contains('Add Schema').click()
//         cy.screenshot()
//     })
//     it('Confirm that Schema is loaded well', () => {
//         cy.get(':nth-child(1) > .active').contains('Generic');
//         cy.get(':nth-child(2) > .nav-link').contains('Meta Data Definition');
//         cy.get(':nth-child(3) > .nav-link').contains('Search Definition');
//         cy.get(':nth-child(4) > .nav-link').contains('UI/Display Definition');
//         cy.get(':nth-child(5) > .nav-link').contains('Unique Keys');
//         cy.get(':nth-child(2) > :nth-child(1) > .col > .float-right').contains('Delete Field');
//         cy.get(':nth-child(3) > :nth-child(1) > .col > .float-right').contains('Delete Group');
//         cy.get('.modal-footer > .btn-outline-primary').contains('Cancel')
//         cy.get(':nth-child(3) > .mt-3 > .mt-2 > .btn').contains('Add Groups')
//         cy.screenshot()
//     })
//     it('Add Schema', () => {
//         cy.get('#name').type(randomWord);
//         cy.get('#version').type('1.0.5')
//         cy.get('#type').select('fhir')
//         cy.get(':nth-child(2) > .mt-3 > .col-sm-12 > .form-control').type('test1.primaryId');
//         cy.get(':nth-child(2) > .mt-3 > .mt-2 > .btn').contains('+ Add Fields').click();
//         cy.get(':nth-child(5) > .nav-link').contains('Unique Keys').click();
//         cy.get('.active > .row > :nth-child(2) > .btn').contains('Add');
//         cy.get('.col-md-1 > .btn').contains('Delete');
//         cy.get(':nth-child(1) > .col-md-6 > :nth-child(1) > .col-sm-10 > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type('test1.primaryId{enter}')
//         cy.get('.modal-footer > .btn-primary').click()
//     })
//     it('Confirm that Schema is added', () => {
//         cy.get('.col > .form-control').type(`${randomWord}{enter}`)
//         cy.get('.wm-list-item > :nth-child(2)').contains(`${randomWord}`)
//         cy.get('.dropleft > .border').click();
//         cy.get('.dropdown-menu').contains('Delete').click();
//         cy.get('.modal-body > .text-center').contains(`${randomWord}`)
//         cy.get('.modal-footer > .btn-primary').click()
//     })
// });