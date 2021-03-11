describe('Adherence Assessment', () => {
    before(() => {
        cy.login();
    });
    it('Open a member page', () => {
        cy.visit('/search/members');
        cy.get(
            ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
        ).click();
        cy.wait(1000);
    });
    it('Open Assessment', () => {
        cy.get('.assessment-menu').click();
        cy.get('.assessment-name')
            .contains('Adherence Assessment')
            .click();
    });
    it('Select Answers', () => {
        cy.get('[data-testid=expand-assessment-btn]').click();
        cy.get('#medicationImportance_a_1').click();
        cy.get('#harmfulPrescription_a_1').click();
        cy.get('#financialBurden_a_1').click();
    });
    it('Complete the Assessment', () => {
        cy.get('.btn-outline-purple')
            .contains('Complete')
            .click();
    });
    // it('Confirm that assessment was added', () => {
    //     cy.get('.d-flex > .hasBackground').contains('Adherence Assessment')
    //     cy.get('.d-flex > .hasBackground').contains('Completed')
        // cy.get(':nth-child(1) > .rapid3Timeline').contains('Adherence Assessment')
        // cy.get(':nth-child(1) > .rapid3Timeline').contains('Completed')
    // });

    // Uncomment this once the bug with Assessments appearing on Member Profile after refresh is fixed
});