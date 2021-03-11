// describe('Add assessment form', () => {
//   before(() => {
//     cy.login();
//   });
//   it('Should show list of assessments', () => {
//     cy.visit('/search/members');
//     cy.get(
//       ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
//     ).click();
//     cy.wait(3000);
//     cy.get('.assessment-menu').click();
//     cy.get('.assessment-name').contains('Hemophilia Treatment Log');
//     cy.get('.assessment-name').contains('RAPID 3');
//   });

//   it('Should show assessment form', () => {
//     cy.get('.assessment-name')
//       .contains('Adherence Assessment')
//       .click();
//     cy.get('.assessment').should('be.visible');
//     cy.get('.react-datepicker-wrapper')
//       .first()
//       .find('input')
//       .click();
//     cy.get('.react-datepicker-popper').should('be.visible');
//     cy.get('.react-datepicker-popper')
//       .contains('15')
//       .first()
//       .click();
//     cy.get('.btn-answer:nth-child(1)').each($el => {
//       cy.wrap($el)
//         .scrollIntoView()
//         .focus()
//         .click();
//       cy.wait(2000);
//     });
//     cy.get('.text-input').each($el => {
//       cy.wrap($el)
//         .scrollIntoView()
//         .focus()
//         .type('Test Answer');
//       cy.wait(1000);
//     });
//     cy.get('.number-input').each($el => {
//       cy.wrap($el)
//         .scrollIntoView()
//         .focus()
//         .type('50');
//       cy.wait(1000);
//     });
//   });

//   it('Should save assessment', () => {
//     cy.get('.rapid3s').then($el => {
//       const oldTotalRecords = $el.length;
//       cy.get('.btn-outline-purple')
//         .contains('Complete')
//         .click();
//       cy.get(`.rapid3s:nth-child(${oldTotalRecords + 1})`).should('exist');
//     });
//   });
// });


// Test not valid