import { randomPassword } from '../../../functions';

const randomWord = randomPassword(5);


describe('Add/Edit/Remove Allergy', () => {
    before(() => {
        cy.login();
    });
    it('Open a member search', () => {
        cy.visit('/search/members');
    });
    it('Open member profile', () => {
        cy.get(
            ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
        ).click();
        cy.wait(1000);
    });
    it('Add Allergy form', () => {
        cy.get('[data-testid=allergy-toggle]').click();
        cy.get('.expanded > .blocks > [data-testid=add-allergy-btn]').click();
    });
    it('Аdd allergy', () => {
        cy.get('[data-testid=severity-dropdown]').type('Mild{enter}')

        cy.get('.note-input').type(randomWord);
        cy.get('[data-testid=allergen-dropdown]').type('Pol')
        cy.get('.css-11unzgr').contains('Pollen').type('{enter}')
        cy.wait(4000)
        cy.get('[data-testid=reactions-picklist] > :nth-child(1) > input').click()
        cy.get('[data-testid=save-allergy-btn]').click()
    })
    it('Confirm that allergy is added', () => {
        cy.get('[data-testid=allergy-details-btn]').contains('Pollen').click();
    })
    it('Edit Allergy', () => {
        // cy.get('.planValue > .fal').click();
        cy.get(':nth-child(1) > .blocks > .row > :nth-child(1) > .planValue > .fal').click({force:true});
        cy.get('[data-testid=allergen-dropdown]').type('Tylenol')
        cy.get('.css-11unzgr').contains('Tylenol').type('{enter}')
        cy.get('[data-testid=save-allergy-btn]').click()
    })
    it('Confirm that allergy is edited', () => {
        cy.get('[data-testid=allergy-details-btn]').contains('Tylenol')
    })
    it('Delete Allergy', () =>{
        cy.get('.planLabel > [data-testid=remove-allergy-btn]').click({multiple: true});
        cy.get('[data-testid=allergy-details-btn]').contains('Tylenol').should('not.exist')
    })
});