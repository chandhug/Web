const user_name = 'auto_user'
const user_name_upd = 'auto_user_updated'

describe("Add/Edit/Delete User", () => {
    before(() => {
        cy.login();
    });
    it("Open ATC", () => {
        cy.visit("/");
    });
    it('Open User form', () => {
        cy.contains('ATC').click()
        cy.contains('User Management').click();
        cy.contains('Users').click();
        cy.get('.ml-2 > .text-capitalize').click();
    })
    it('Add User', () => {
        cy.get('.border > :nth-child(1) > .form-control').type(user_name);
        cy.get(':nth-child(2) > .form-control').type(user_name);
        cy.get(':nth-child(3) > .form-control').type('auto_testing_user@withmehealth.com');
        cy.get('.react-phone-number-input__input').type('+389 78 214 293')
        cy.get('.mb-0 > .btn-primary').click()
    })
    it('Confirm that user is created', () => {
        cy.get('.col > .form-control').type(user_name + '{enter}{enter}')
        cy.get('.wm-list-item').contains(user_name)
    })
    it('Edit User', () => {
        cy.get('.wm-list-item').contains(user_name)
        cy.get('.dropleft > .border').click()
        cy.get('.dropdown-menu').contains('Edit').click()
        cy.get('.border > :nth-child(1) > .form-control').clear()
        cy.get('.border > :nth-child(1) > .form-control').type(user_name_upd)
        cy.get('.border > :nth-child(1) > .form-control').clear();
        cy.get('.border > :nth-child(1) > .form-control').type(user_name_upd)
        cy.get('.mb-0 > .btn-primary').click()
    })
    it('Confirm that User was edited', () => {
        cy.get('.col > .form-control').clear()
        cy.get('.col > .form-control').type(user_name_upd + '{enter}{enter}')
        cy.get('.wm-list-item').contains(user_name_upd)
    })
    it('Delete User', () => {
        cy.get('.wm-list-item').contains(user_name_upd);
        cy.get('.wm-list-item').contains(user_name);
        cy.get('.dropleft > .border').click();
        cy.get('.dropdown-menu').contains('Delete').click();
        cy.get('.text-center > span').contains('USER: ' + user_name_upd +' ' +  user_name);
        cy.get('.modal-footer > .btn-primary').click()
    })
    it('Confirm that User was deleted', () => {
        cy.get('.col > .form-control').clear()
        cy.get('.col > .form-control').type(user_name_upd + '{enter}{enter}')
        cy.get('.rule-list-container > .p-2').contains('No users found.')
    })
});