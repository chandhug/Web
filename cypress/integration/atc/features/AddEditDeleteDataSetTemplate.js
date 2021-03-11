const data_set_template_name = 'auto_data_set_template'
const data_set_template_name_upd = 'auto_data_set_template_updated'


describe("Add/Edit/Delete Collection Template", () => {
    before(() => {
        cy.login();
    });
    it("Open ATC", () => {
        cy.visit("/");
    });
    it('Go to Collection Template', () => {
        cy.get(':nth-child(1) > .dashboard-link').contains('ATC').click()
        cy.get(':nth-child(2) > .dashboard-link').contains('Data Management').click()
        cy.get(':nth-child(3) > .dashboard-link').contains('Collection Template').click()
        cy.get('.ml-2 > .d-inline-flex').contains('Add CollectionTemplate').click()
    })
    it('Add Collection Template', () => {
        cy.get('.modal-title').contains('Add Collection Template');
        cy.get('.col-sm-3 > .form-group > label').contains('Name');
        cy.get('.pl-3 > .row > .col > .form-group > label').contains('Selected Data Set Templates');
        cy.get(':nth-child(4) > .row > .col > .form-group > label').contains('Available Data Set Templates');
        cy.get('#name').type(data_set_template_name);
        cy.get('.modal-footer > .btn-primary').click();
    })
    it('Check if Collection Template is created', () => {
        cy.get('.col > .form-control').type(data_set_template_name + '{enter}{enter}');
        cy.get('.wm-list-item > :nth-child(2)').contains(data_set_template_name);
    })
    it('Edit Collection Template', () => {
        cy.get('.dropleft > .border').click();
        cy.get('.dropdown-menu').contains('Edit').click()
        cy.get('.modal-title').contains('Edit Collection Template: ' + data_set_template_name);
        cy.get('#name').clear()
        cy.get('#name').type(data_set_template_name_upd)
        cy.get('#name').clear()
        cy.get('#name').type(data_set_template_name_upd)
        cy.get('.modal-footer > .btn-primary').click()
    })
    it('Confirm that Collection Template was edited', () => {
        cy.get('.col > .form-control').clear();
        cy.get('.col > .form-control').type(data_set_template_name_upd + '{enter}{enter}');
        cy.get('.wm-list-item > :nth-child(2)').contains(data_set_template_name_upd);
    })
    it('Delete Collection Template', () => {
        cy.get('.wm-list-item > :nth-child(2)').contains(data_set_template_name_upd);
        cy.get('.dropleft > .border').click();
        cy.get('.dropdown-menu').contains('Delete').click()
        cy.get('.text-center > :nth-child(2)').contains(data_set_template_name_upd);
        cy.get('.modal-footer > .btn-primary').click()
    })
    it('Confirm that Collection Template was deleted', () => {
        cy.get('.col > .form-control').clear();
        cy.get('.col > .form-control').type(data_set_template_name_upd + '{enter}{enter}');
        cy.get('.rule-list-container > .p-2').contains('No data found...')
    })
});