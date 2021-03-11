import { randomPassword } from '../../../functions'

const randomWord = randomPassword(5);

describe('Recently Closed Task', () => {
    before(() => {
        // cy.logout();
    });
    it('Visit Members', () => {
        cy.login();
        cy.visit('/search/members');
    });
    it('Open member profile', () => {
        cy.get(
            ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
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
            ':nth-child(4) > .col > .btn-group > .dropdown-menu > :nth-child(1)',
        ).click();
    });
    it('Choose due date', () => {
        cy.get("[data-testid='wm-global-modal']")
            .find('[data-testid=task-duedate-value]')
            .click();
        cy.get(".react-datepicker > .react-datepicker__navigation--next").click()
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
    it('Go to Tasks', () => {
        cy.get('[data-testid=wm-icon-tasks]').click();
    });
    it('Edit the task to Completed', () => {
        cy.get('[data-rbd-draggable-id="column-draggable-assigned"] > .sc-gTgzIj')
            .find('[data-testid="task-card-description"]')
            .contains(randomWord)
            .click({multiple:false});
        // cy.get('[data-rbd-draggable-id]')
        //     .contains(randomWord)
        //     .click({ multiple: false });
    })
    it('Change Task Status', () => {
        cy.get('.task-status').click();
        cy.get('.dropdown-menu > :nth-child(3) > span').click()
    })
    it('Save Task changes', () => {
        cy.get('[data-testid=save-task-changes-btn]').click();
    })
    it('Open Closed Task', () => {
        cy.get('.closed-tasks > :nth-child(1) > :nth-child(1) > .details').click()
    })
    it('See if status & due date can be edited', () => {
        cy.get('[data-testid=task-status]').should('not.be.selected')  //be.disabled
        cy.get('.due-date').should('not.be.selected')
    })
});