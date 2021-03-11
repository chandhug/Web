import { randomPassword } from '../../../functions';

const randomWord = randomPassword(6);
const collection_name = 'auto_test'

describe("Add/Edit/Delete/Collection", () => {
    before(() => {
        cy.login();
    });
    // after(() => {
    //     cy.logout();
    // });
    it("Open ATC", () => {
        cy.visit("/");
    });
    it('Go to Collections and Data Sets', () => {
        cy.get(':nth-child(1) > .dashboard-link').contains('ATC').click()
        cy.get(':nth-child(2) > .dashboard-link').contains('Data Management').click()
        cy.get(':nth-child(2) > .dashboard-link').click()
    })
    it('Delete Collection if exists', () => {
        cy.on('fail', (e, runnable) => {
            console.log('error', e)
            console.log('runnable', runnable)
            if (e.name === 'AssertionError' &&
              e.message.includes('Expected to find element: `.wm-list-item > :nth-child(1)`, but never found it')) {
              return false
            }
          })
      
        cy.get('.col > .form-control').type(collection_name + '{enter}{enter}')
        cy.get('.wm-list-item > :nth-child(1)')
        cy.get('.dropleft > .border').click()
        cy.get('.dropdown-menu').contains('Delete').click()
        cy.get('.text-center > :nth-child(2)').contains(collection_name)
        cy.get('.modal-footer > .btn-primary').click()
        cy.wait(6000)
        cy.get('.col > .form-control').clear()
        cy.get('.col > .form-control').type(collection_name)
        cy.get('.rule-list-container > .p-2').contains('No data found...')
        // cy.get('.col > .form-control').clear
    })
    it('Confirm that Collections and Data Sets are loaded well on Add Collection Model', () => {
        cy.get('.col > .form-control').clear()
        cy.get('.ml-2 > .d-inline-flex').contains('Add Collection').click()
        cy.get('.modal-title').contains('Add Collection')
        cy.get(':nth-child(1) > :nth-child(1) > label').contains('Collection Name')
        cy.get('.pl-3 > .form-group > label').contains('Collection Template')
        cy.get(':nth-child(2) > label').contains('Data Segment Hierarchies')
        cy.get('label > .btn').title('Generate')
        cy.get('.modal-footer > .btn-outline-primary').title('Cancel')
        cy.get('.modal-footer > .btn-primary').title('Save changes')

    })
    it('Add Collection', () => {
        cy.get('#name').type(collection_name);
        cy.get('.modal-footer > .btn-primary').click()
        .get('.modal-footer > .btn-outline-primary').click()
        cy.wait(6000)
        // .type('{esc}', {force: true})
    })
    it('Confirm that Collection is created', () => {
        cy.get('.col > .form-control').type(collection_name + '{enter}{enter}')
        cy.get('.wm-list-item > :nth-child(1)').contains(collection_name)
    })
    it('Edit Collection', () => {
        cy.get('.dropleft > .border').click()
        cy.get('.dropdown-menu').contains('Edit').click()
        cy.get('.modal-title').contains(collection_name)
        // cy.get(':nth-child(1) > :nth-child(1) > #name').contains(collection_name)
        cy.get(':nth-child(1) > :nth-child(1) > #name').clear()
        cy.get(':nth-child(1) > :nth-child(1) > #name').type(collection_name)
        cy.get('.modal-footer > .btn-primary').click()
    })
    it('Confirm that Collection was edited', () => {
        cy.get('.col > .form-control').clear();
        cy.get('.col > .form-control').type(collection_name + '{enter}{enter}')
        cy.get('.wm-list-item > :nth-child(1)').contains(collection_name)
    })
    it('Delete and Confirm Delete the Collection', () => {
        // cy.get(':nth-child(1) > :nth-child(1) > #name').clear()
        // cy.get('.col > .form-control').type(collection_name + '{enter}{enter}')
        // cy.get('.wm-list-item > :nth-child(1)').contains(collection_name)
        cy.get('.dropleft > .border').click()
        cy.get('.dropdown-menu').contains('Delete').click()
        cy.get('.text-center > :nth-child(2)').contains(collection_name)
        cy.get('.modal-footer > .btn-primary').click()
        cy.wait(6000)
        cy.get('.col > .form-control').clear()
        cy.get('.col > .form-control').type(collection_name)
        cy.get('.rule-list-container > .p-2').contains('No data found...')
    
    })

});