import { randomPassword } from '../../../functions';

const randomWord = randomPassword(5);



describe('Medication Review', () => {
    before(() => {
        cy.login();
    });
    it('Open a member search', () => {
        cy.visit('/search/members');
    });
    it('Open member profile', () => {
        cy.get(
            '[data-testid="1121"] > :nth-child(1) > .td-container > [data-testid=member-name-test]',
        ).click();
        cy.wait(1000);
    });
    it('Open Assessment', () => {
        cy.get('.assessment-menu').click();
        cy.get('.dropdown-menu > :nth-child(9)')
            .click();
        cy.get('[data-testid=expand-btn]').click();
    });
    it('Confirm that Review is having all the fields', () => {
        cy.get('.my-2').contains('Active Prescriptions')
        cy.get('[data-testid=medication-review] > :nth-child(4)').contains('Past Prescriptions')
        cy.get('[data-testid=medication-review] > :nth-child(5)').contains('Side Effects')
        cy.get('[data-testid=medication-review] > :nth-child(7)').contains('Allergies')
        cy.get('.last-update').contains('Last medication review')
    })
    it('Confirm that buttons take you to Add: Medication, Allergy, Side Effects', () => {
        cy.get(':nth-child(3) > .purple-btn').click()
        cy.get('.font-weight-normal').contains('Medication Search');
        cy.get('.w-100 > [data-testid=wm-icon-times]').click();
        cy.get(':nth-child(6) > .purple-btn').click();
        cy.get('.font-weight-normal').contains('New Side Effect');
        cy.get('.w-100 > [data-testid=wm-icon-times]').click()
        cy.get(':nth-child(8) > .purple-btn').click();
        cy.get('.modal-title > .w-100').contains('Add Allergy')
        cy.get('.w-100 > [data-testid=wm-icon-times]').click()
    })
});