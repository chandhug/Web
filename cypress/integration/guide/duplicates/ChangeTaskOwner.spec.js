import { randomPassword } from '../../../functions'
import { CYPRESS_USER_FULL_NAME } from '../../../config'

const randomWord = randomPassword(5);

describe('Recently Closed Task', () => {
    before(() => {
        cy.login();
        // cy.logout();
    });
    it('Visit Members', () => {
        // cy.login();
        cy.visit('/search/members');
    });
    it('Open member profile', () => {
        cy.get(
            ':nth-child(5) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
        ).click();
        cy.wait(1000);
    });
    it('Click Add Task', () => {
        cy.get('[data-testid=add-task-btn]').click();
    });
    it('Choose status', () => {
        cy.get("[data-testid='wm-global-modal']")
            .find('[data-testid=task-status]')
            .click();
        cy.get(
            ':nth-child(4) > .col > .d-block> .dropdown-menu > :nth-child(1)', //btn-group 
        ).click();
    });
    it('Choose due date', () => {
        cy.get("[data-testid='wm-global-modal']")
            .find('[data-testid=task-duedate-value]')
            .click();
        cy.get(':nth-child(5) > .react-datepicker__day--030').click();
    });
    it('Add description', () => {
        cy.get("[data-testid='wm-global-modal']")
            .find('.form-control')
            .type(randomWord);
    });
    it('Choose Type', () => {
        cy.server();
        cy.wait(3000)
        cy.get("[data-testid='wm-global-modal']").find('.css-yk16xz-control');
        cy.get("[data-testid='wm-global-modal']")
            .find('.css-yk16xz-control')
            .click()
            .type('Member Outreach{enter}');
    });
    it('Create Task', () => {
        cy.get("[data-testid='wm-global-modal']")
            .find('[data-testid=create-task]')
            .click();
    });
    it('Edit task owner', () => {
        cy.get('.userName').contains('Auto User').click()
        cy.get('.css-1uccc91-singleValue > .userName').type('{downarrow}{downarrow}{enter}')
        cy.get("[data-testid='wm-global-modal']")
             .find('[data-testid=save-task-changes-btn]')
            //  .find('[data-testid=create-task]')
             .click();
    })
});