import 'cypress-file-upload';
import { randomPassword } from '../../../functions';
import { file } from '../../../fixtures/example.json'


const randomWord = randomPassword(5);

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
  it('Add Description', () => {
    cy.get('.modal-content')
      .find('.note-description')
      .type(randomWord);
  });
  it('Click on category', () => {
    cy.get('.css-yk16xz-control > .css-1hwfws3');
    cy.get('.css-yk16xz-control > .css-1hwfws3').type(
      '{enter}',
    );
  });
  it('Add Attachment', () => {
    cy.get('[data-testid=uploadFile]').attachFile('example.json');
    cy.get('.col-9 > .mt-4.no-gutters').contains('example.json');
  });
  it('Save as Draft note', () => {
    cy.get('.modal-content')
      .find('.ml-auto')
      .click();
  });
  it('Confirm that Note was created', () => {
    cy.get('.d-flex > .hasBackground')
      .scrollIntoView() 
      .contains(randomWord)
  });
  it('Post Note', () => {
    cy.get('.wm-list-item > :nth-child(3) > .sc-bdfBwQ')
    .click({multiple:true});
    cy.get('.post-btn').click();
  });
});
