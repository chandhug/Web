import 'cypress-file-upload';

describe('Add Note', () => {
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
  it('Open Note', () => {
    cy.get('[data-testid=add-note-btn]').click();
  });
  it('Add Attachment', () => {
    cy.get('[data-testid=uploadFile]').attachFile('example.json'); //windows.jpg
    cy.get('.fname > a').contains('example.json');
  });
  it('Cancel Attachment', () => {
    cy.get('.fa-times-circle').click();
    cy.get('.btn-danger').click();
    cy.get('.file-item').should('not.be.visible');
  });
});
