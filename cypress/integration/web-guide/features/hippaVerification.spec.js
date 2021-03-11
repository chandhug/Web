// import { memberId } from "../../../functions"

describe("Hippa Verification", () => {
    before(() => {
        cy.login();
    });
    it("Open a member search", () => {
        cy.visit("/search/members");
    });
    it("Open member profile", () => {
        cy.get(
            ":nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name"
        ).click();
        cy.wait(1000);
    });
    it('Open Hippa Verification', () => {
        cy.get('.wmenu > :nth-child(2) > :nth-child(1) > :nth-child(1)').click()
        cy.get(':nth-child(2) > .dropright > .btn').click()
        cy.get(':nth-child(2) > .dropright > .dropdown-menu > :nth-child(1)').click()
    })
    it('Fill the Hippa Verification', () => {
        cy.get('[data-testid=expand-btn]').click();
        cy.get('[data-testid=check-address]').click();
        cy.get('[data-testid=check-phone]').click();
        cy.get('[data-testid=check-dob]').click();
        cy.get('[data-testid=check-confirm]').click();
        cy.get('[data-testid=name-input]').type('John Doe')
        cy.get('.css-yk16xz-control > .css-1hwfws3').type('Son{enter}')
    })
    it('Complete the Hippa Verification', () => {
        cy.get('[data-testid=submit-btn]').click();
        cy.get('.d-flex > .hasBackground').contains('HIPAA Verification')
    })
})

