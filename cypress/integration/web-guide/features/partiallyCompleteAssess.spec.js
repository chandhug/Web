describe('Rapid 3 partially', () => {
    before(() => {
        cy.login();
    });
    it('Exeptions', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })
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
            .contains('RAPID 3')
            .click();
        cy.get('[data-testid=expand-assessment-btn]').click();
    });
    it('Select Answers', () => {
        cy.get('#dressYourself_a_1').click();
        cy.get('#getOutBed_a_1').click();
        cy.get('#liftGlassToMouth_a_1').click();
        cy.get('#walkOutdoors_a_1').click();
        cy.get('#washBody_a_1').click();
        cy.get('#bendDown_a_1').click();
        cy.get('#faucetsOnOff_a_1').click();
        cy.get('#inOutTransportation_a_1').click();
        cy.get('#walkTwoMiles_a_1').click();
        cy.get('#playSports_a_1').click();
        cy.get('#goodNightSleep_a_1').click();
        cy.get('#dealWithAnxiety_a_1').click();
        cy.get(':nth-child(15) > .answer-slider > .rc-slider > .rc-slider-step').click(200, 15, { force: true })
        cy.get(':nth-child(16) > .answer-slider > .rc-slider > .rc-slider-step').click(200, 15, { force: true })
    });
    it('Complete the Assessment', () => {
        cy.get('.btn-outline-purple')
            .contains('Complete')
            .click();
    });
    it('Confirm that warning modal appears', () => {
        cy.get('.modal-header').contains('Warning')
    });
    it('Confirm that you want to save Assess partially', () => {
        cy.get('.modal-footer > .btn-primary').click();
    })
    // it('Confirm that assessment was created & is in progress', () => {
    //     cy.get(':nth-child(1) > .rapid3Timeline').contains('In progress');
    // });
    // it('Open the assessment', () => {
    //     cy.get(':nth-child(1) > .rapid3Timeline').click();
    //     cy.get('[data-testid=expand-assessment-btn]').click()
    // });
    // it('Complete the Assessment', () => {
    //     cy.get('#dealWithDepression_a_1').click();
    //     cy.get('.btn-outline-purple')
    //         .contains('Complete')
    //         .click();
    // });

    // Commented code will be uncomented once the Assessments issue is fixed.
});

