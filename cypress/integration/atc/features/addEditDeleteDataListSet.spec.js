// const data_list_set_name = 'auto_data_list_set'
// const data_list_set_name_upd = 'auto_data_list_set_updated'


// describe("Add/Edit/Delete Data List Set", () => {
//     before(() => {
//         cy.login();
//     });
//     it("Open ATC", () => {
//         cy.visit("/");
//     });
//     it('Add Data List Set form', () => {
//         cy.get(':nth-child(1) > .dashboard-link').contains('ATC').click()
//         cy.get(':nth-child(2) > .dashboard-link').contains('Data Management').click()
//         cy.get(':nth-child(4) > .dashboard-link').contains('Data List Set').click()
//         cy.get('.ml-2 > .d-inline-flex').contains('Add Data List Set').click();
//     })
//     it('Confirm that Data List Set is loaded well', () => {
//         cy.get('.modal-title').contains('Add Data List Set');
//         cy.get('.col-12 > :nth-child(1) > label').contains('Name');
//         cy.get('.col-12 > :nth-child(2) > label').contains('Purpose');
//         cy.get(':nth-child(3) > label').contains('Datalist Type');
//         cy.get(':nth-child(4) > label').contains('Refresh Rate (hours)')
//         cy.get(':nth-child(1) > .active').contains('Properties');
//         cy.get(':nth-child(2) > .nav-link').contains('Run');
//         cy.get(':nth-child(3) > .nav-link').contains('Data Lists')
//         cy.get(':nth-child(2) > .nav-link').click();
//         cy.get('.active > :nth-child(2) > label').contains('Results')
//         cy.get('.justify-content-end > .btn').contains('Run');
//         cy.get(':nth-child(3) > .nav-link').click();
//         cy.get('.pl-3 > .row > .col > .form-group > label').contains('Selected Data Lists');
//         cy.get(':nth-child(3) > .row > .col > .form-group > label').contains('Available Data Lists');
//     })
//     it('Create Data List Set', () => {
//         cy.get(':nth-child(1) > .nav-link').click();
//         cy.get('#name').type(data_list_set_name);
//         cy.get('.modal-footer > .btn-primary').click()
//     })
//     it('Confirm that Data List Set is created', () => {
//         cy.get('.col > .form-control').type(data_list_set_name + '{enter}{enter}')
//         cy.get('.wm-list-item > :nth-child(2)').contains(data_list_set_name)
//     })
//     it('Edit Data List Set', () => {
//         cy.get('.wm-list-item > :nth-child(2)').contains(data_list_set_name)
//         cy.get('.dropleft > .border').click()
//         cy.get('.dropdown-menu').contains('Edit').click()
//         cy.get('.modal-title').contains('Edit Data List Set: ' +data_list_set_name)
//         cy.get('#name').clear()
//         cy.get('#name').type(data_list_set_name_upd)
//         cy.get('#name').clear();
//         cy.get('#name').type(data_list_set_name_upd)
//         cy.get('.modal-footer > .btn-primary').click()
//     })
//     it('Confirm that Data List Set is edited', () => {
//         cy.get('.col > .form-control').clear()
//         cy.get('.col > .form-control').type(data_list_set_name_upd + '{enter}{enter}')
//         cy.get('.wm-list-item > :nth-child(2)').contains(data_list_set_name_upd)
//     })
//     it('Delete Data list Set', () => {
//         cy.get('.col > .form-control').clear()
//         cy.get('.col > .form-control').type(data_list_set_name_upd + '{enter}{enter}')
//         cy.get('.wm-list-item > :nth-child(2)').contains(data_list_set_name_upd)
//         cy.get('.dropleft > .border').click()
//         cy.get('.dropdown-menu').contains('Delete').click()
//         cy.get('.text-center > :nth-child(2)').contains(data_list_set_name_upd)
//         cy.get('.modal-footer > .btn-primary').click();
//     })
//     it('Confirm that Data List Set is deleted', () => {
//         cy.get('.col > .form-control').clear()
//         cy.get('.col > .form-control').type(data_list_set_name_upd + '{enter}{enter}')
//         cy.get('.rule-list-container > .p-2').contains('No data found...')
//     })
// });