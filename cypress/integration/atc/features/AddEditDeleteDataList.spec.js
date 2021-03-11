// import { randomPassword } from '../../../functions';

// const randomWord = randomPassword(6);
// const data_list_name = 'auto_list'

// describe("Add/Edit/Delete Data List", () => {
//     before(() => {
//         cy.login();
//     });
//     it("Open ATC", () => {
//         cy.visit("/");
//     });
//     it('Add Data List', () => {
//         cy.get(':nth-child(1) > .dashboard-link').contains('ATC').click()
//         cy.get(':nth-child(2) > .dashboard-link').contains('Data Management').click()
//         cy.get(':nth-child(6) > .dashboard-link').contains('Data List').click()
//         // cy.get('.ml-2 > .d-inline-flex').contains('Add Data List').click();
//     })

//     it('Delete Data List if already exists', () => {
//         it('Delete Collection if exists', () => {
//             cy.on('fail', (e, runnable) => {
//                 console.log('error', e)
//                 console.log('runnable', runnable)
//                 if (e.name === 'AssertionError' &&
//                   e.message.includes('Expected to find element: `.wm-list-item > :nth-child(2)`, but never found it')) {
//                   return false
//                 }
//               })
//         cy.get('.col > .form-control').clear()
//         cy.get('.col > .form-control').type(data_list_name  + '{enter}{enter}')
//         cy.get('.wm-list-item > :nth-child(2)').contains(data_list_name)
//         cy.get('.dropleft > .border').click()
//         cy.get('.dropdown-menu').contains('Delete').click()
//         cy.get('.text-center > :nth-child(2)').contains(data_list_name);
//         cy.get('.modal-footer > .btn-primary').contains('Delete').click()
//         cy.get('.col > .form-control').clear()
//         cy.get('.col > .form-control').type(data_list_name)
//         cy.get('.rule-list-container > .p-2').contains('No data found...')
//         })
//     });
//     it('Confirm that Data List is loaded well', () => {
//         cy.get('.ml-2 > .d-inline-flex').contains('Add Data List').click();
//         cy.get('.modal-title').contains('Add Data List')
//         cy.get(':nth-child(1) > .active').contains('Properties');
//         cy.get(':nth-child(2) > .nav-link').contains('Query Editor');
//         cy.get(':nth-child(3) > .nav-link').contains('Run Query');
//         cy.get(':nth-child(4) > .nav-link').contains('JSON List')
//         cy.get(':nth-child(5) > .nav-link').contains('Data list sets')
//         cy.get(':nth-child(3) > .form-control').contains('List');
//         cy.get(':nth-child(4) > .form-control').contains("Query")
//         cy.get(':nth-child(4) > label').contains('Entry Type');
//         cy.get(':nth-child(3) > label').contains('Datalist Type');
//         cy.get('.col-md-3 > :nth-child(1) > label').contains('Refresh Rate (hours)');
//         cy.get('.col-12 > :nth-child(2) > label').contains('Purpose');
//         cy.get('.col-12 > :nth-child(1) > label').contains('Name');
//         cy.get(':nth-child(2) > .nav-link').click()
//         cy.get('.active > :nth-child(1) > label').contains('Query Type');
//         cy.get('.active > :nth-child(1) > .form-control').contains('SQL Query');
//         cy.get('.active > :nth-child(2) > label').contains('Query Editor')
//         cy.get(':nth-child(3) > .nav-link').click();
//         cy.get('.active > :nth-child(1) > label').contains('Query');
//         cy.get(':nth-child(4) > .nav-link').click();
//         cy.get('.active > .form-group > label').contains('JSON List/Map');
//         cy.get(':nth-child(5) > .nav-link').click();
//         cy.get('.pl-3 > .row > .col > .form-group > label').contains('Selected Data List Sets');
//         cy.get(':nth-child(3) > .row > .col > .form-group > label').contains('Available Data Set Lists');
//     });
//     it('Create Data List', () => {
//         cy.get(':nth-child(1) > .nav-link').click();
//         cy.get('#name').type(data_list_name);
//         cy.get('#purpose').type('Testing')
//         cy.get('.modal-footer > .btn-primary').click()
//         cy.wait(6000)
        
//     })
//     it('Confirm that Data List is added', () => {
//         cy.get('.col > .form-control').clear()
//         cy.get('.col > .form-control').type(data_list_name + '{enter}{enter}')
//         cy.get('.wm-list-item > :nth-child(2)').contains(data_list_name)
//     })
//     it('Edit Data List', () => {
//         cy.get('.dropleft > .border').click()
//         cy.get('.dropdown-menu').contains('Edit').click()
//         cy.get('.modal-title').contains(data_list_name)
//         cy.get('#name').clear();
//         cy.get('#name').clear();
//         cy.get('#name').clear();
//         cy.get('#name').type(data_list_name)
//         cy.get('.modal-footer > .btn-primary').click()
//     })
//     it('Delete and Confirm that Data List is deleted', () => {
//         cy.get('.col > .form-control').clear()
//         cy.get('.col > .form-control').type(data_list_name)
//         cy.get('.wm-list-item > :nth-child(2)').contains(data_list_name)
//         cy.get('.dropleft > .border').click()
//         cy.get('.dropdown-menu').contains('Delete').click()
//         cy.get('.text-center > :nth-child(2)').contains(data_list_name);
//         cy.get('.modal-footer > .btn-primary').contains('Delete').click()
//         cy.wait(6000)
//         cy.get('.col > .form-control').clear()
//         cy.get('.col > .form-control').type(data_list_name)
//         cy.get('.rule-list-container > .p-2').contains('No data found...')
//     });
//     it('Confirm that Data List is deleted', () => {
//         cy.get('.col > .form-control').clear()
//         cy.get('.col > .form-control').type(data_list_name)
//         cy.get('.rule-list-container > .p-2').contains('No data found...')
//     })
// });