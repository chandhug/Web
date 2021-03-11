describe('Member Page pagination scroll', () => {
  before(() => {
    cy.login();
  });
  it('Open Member search table', () => {
    cy.visit('/search'); //http://localhost:8081
    cy.wait(4000);
  });
  it('Scroll until list is expanded', () => {
    cy.get('#tb-container')
      .scrollTo('bottom')
      .find(':nth-child(35) > :nth-child(1) > :nth-child(1) > .td-container')
      .scrollIntoView()
      .and('be.visible');
  });
});
