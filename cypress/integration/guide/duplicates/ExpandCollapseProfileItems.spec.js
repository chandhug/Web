// describe('Each field of the member details section should be expandable/collapsable', () => {
//   before(() => {
//     cy.login();
//   });

//   after(() => {
//     // cy.logout();
//   });

//   it('Should visit a member profile and check the fields', () => {
//     cy.visit('/search/members');
//     cy.get(
//       ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
//     ).click();
//     cy.get('#pteim-0').click();
//     cy.get('#item-0').and('be.visible');
//     cy.get('#pteim-0').click();
//     cy.get('#item-0').should('not.be.visible');
//     cy.get('#pteim-1').click();
//     cy.get('#item-1').and('be.visible');
//     cy.get('#pteim-1').click();
//     cy.get('#item-1').should('not.be.visible');
//     cy.get('#pteim-2').click();
//     cy.get('#item-2').and('be.visible');
//     cy.get('#pteim-2').click();
//     cy.get('#item-2').should('not.be.visible');
//     cy.get('#pteim-3').click();
//     cy.get('#item-3').and('be.visible');
//     cy.get('#pteim-3').click();
//     cy.get('#item-3').should('not.be.visible');
//     cy.get('#pteim-4').click();
//     cy.get('#item-4').and('be.visible');
//     cy.get('#pteim-4').click();
//     cy.get('#item-4').should('not.be.visible');
//     cy.get('#pteim-5').click();
//     cy.get('#item-5').and('be.visible');
//     cy.get('#pteim-5').click();
//     cy.get('#item-5').should('not.be.visible');
//     cy.get('#pteim-6').click();
//     cy.get('#item-6').and('be.visible');
//     cy.get('#pteim-6').click();
//     cy.get('#item-6').should('not.be.visible');
//     cy.get('[data-testid="allergy-toggle"]').click();
//     cy.get('[data-testid="add-allergy-btn"]')
//       .scrollIntoView()
//       .should('exist');
//     cy.get('[data-testid="allergy-toggle"]').click();
//     cy.get('[data-testid="add-allergy-btn"]').should('not.be.visible');
//   });
// });
