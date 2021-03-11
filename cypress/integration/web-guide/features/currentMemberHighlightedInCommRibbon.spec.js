describe('Confirm that currently open member profile is highlighted in comm ribbon', () => {
    before(() => {
        cy.login();
    });
    it('Open Member', () => {
        cy.visit('/search/members');
        cy.get('.form-control').type('CINDI MCPEEK{enter}')
        cy.wait(4000)
        cy.get(
            ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
        ).click();
        cy.wait(1000);
    });
    it('Click on Comm Ribbon', () => {
        cy.get('.noti-panel-container').click();
    });
    it('Comm Ribbon Contains Member Name  ', () => {
        cy.get('.member-ribbon--name').contains('CINDI MCPEEK');
    });
});
