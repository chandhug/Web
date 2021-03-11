import { greetingMessage } from '../../../functions'

var greetingF = greetingMessage()

describe('Rapid 3', () => {
    before(() => {
        cy.login();
    });
    it('Open a member page', () => {
        cy.visit('/tasks');
    });
    it('Check Greeting Message', () => {
        cy.get('.ptext').contains(greetingF)
    });
    it('Check if title is Tasks', () => {
        cy.get('.title').contains("Tasks")
    })
    it('Check if Unassigned Tasks is visible', () => {
        cy.get('#cheader-unassigned').contains('Unassigned')
        cy.get('[data-testid=see-all-tasks-btn]').contains('See All')
        cy.get('#cheader-unassigned > .counts').should('be.visible')
    })
    it('Check if Assigned to me is visible', () => {
        cy.get('#cheader-assigned').contains('Assigned to Me')
        cy.get('#cheader-unassigned > .counts').should('be.visible')
    })
    it('Check if Recently is visible', () => {
        cy.get('#cheader-completed').contains('Recently completed or closed')
        cy.get('#cheader-completed > .counts').should('be.visible')
    })
    it('Confirm that buttons are visible', () => {
        cy.get('[data-testid=wm-icon-tasks]').should('be.visible');
        cy.get('[data-testid=wm-icon-search]').should('be.visible');
        cy.get('[data-testid=wm-icon-history]').should('be.visible');
    })
    it('Confirm that avatar is visible', () => {
        cy.get('.avatar').should('be.visible')
    })
    it('Confirm that Amazon call button is visible', () => {
        cy.get('.fas').should('be.visible')
    })
});