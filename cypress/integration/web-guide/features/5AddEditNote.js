import { randomPassword } from "../../../functions";
import 'cypress-file-upload';
import { file } from '../../../fixtures/example.json'


const randomWord = randomPassword(5);

describe("Add Note", () => {
  before(() => {
    cy.login();
  });
  it("Open a member search", () => {
    cy.visit("/search/members");
  });
  it("Open member profile", () => {
    cy.server();
    cy.intercept("GET", "**/user/api/v1/auth/search/fulltext**").as("getmemberSearch");

    cy.get(".form-control").type("curry {enter}");
    cy.wait("@getmemberSearch");  // { timeout: 5000 })
    cy.get(
      ":nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name"
    ).click();
    cy.wait(1000);
  });
  it("Open Note", () => {
    cy.get("[data-testid=add-note-btn]").click();
  });
  it('Cancel Note witout attachment', () => {
    cy.get(".css-yk16xz-control > .css-1hwfws3");
    cy.get(".css-yk16xz-control > .css-1hwfws3").type("Lab report {enter}");
    cy.get(".modal-content").find(".note-description").type(randomWord);
    cy.get('[data-testid=wm-icon-times] > path').click()
  });
  it('Cancel Note with attachment', ()=> {
    cy.get("[data-testid=add-note-btn]").click();
    cy.get(".css-yk16xz-control > .css-1hwfws3").type("Lab report {enter}");
    cy.get(".modal-content").find(".note-description").type(randomWord);
    cy.get('[data-testid=uploadFile]').attachFile({ filePath: 'attach.txt', encoding: 'utf-8' });
    cy.get('.col-9 > .mt-4.no-gutters').contains('attach.txt');
    cy.get('[data-testid=wm-icon-times] > path').click()
  })
  it('Try empty Note', () => {
    cy.get("[data-testid=add-note-btn]").click();
    cy.get('#note_icheck').uncheck({force:true})
    cy.get('.ml-auto').click() // cy.get('.post-btn')
  })
  it('Check Error Message', () => {
    cy.get('.invalid-feedback').contains("You cannot create an empty note.")
  })
  it("Add Description and add Note without attachment", () => {
    cy.get(".modal-content").find(".note-description").type(randomWord);
  });
  it("Choose Category", () => {
    cy.get(".css-yk16xz-control > .css-1hwfws3");
    cy.get(".css-yk16xz-control > .css-1hwfws3").type("Lab report {enter}");
  });
  it('Save Note without attachment', ()=> {
    cy.get(".modal-content").find(".ml-auto").click();
  });
  it('Add attacment update and Save Note', ()=> {
    cy.get(":nth-child(1) > :nth-child(3) > .mt-1").click();
    cy.get(".css-yk16xz-control > .css-1hwfws3");
    cy.get(".css-yk16xz-control > .css-1hwfws3").type("General Note {enter}");
    cy.get('[data-testid=uploadFile]').attachFile('example.json');
    cy.get('.col-9 > .mt-4.no-gutters').contains('example.json');
    cy.get(".modal-content").find(".ml-auto").click();
    cy.wait(2000)
  })
  it('Add more Attachments and update', () => {
    cy.get(":nth-child(1) > :nth-child(3) > .mt-1").click();
    cy.get(".css-yk16xz-control > .css-1hwfws3").type("Clinical document {enter}");
    // cy.get('[data-testid=uploadFile]').attachFile('example.json');
    // cy.get('.col-9 > .mt-4.no-gutters').contains('example.json');
    cy.get('[data-testid=uploadFile]').attachFile({ filePath: 'attach.txt', encoding: 'utf-8' });
    cy.get('.col-9 > .mt-4.no-gutters').contains('attach.txt');
    cy.get('[data-testid=uploadFile]').attachFile({ filePath: 'windows.png', encoding: 'utf-8' });
    cy.get('.col-9 > .mt-4.no-gutters').contains('windows.png');
    cy.get('[data-testid=uploadFile]').attachFile({ filePath: 'testdoc.doc', encoding: 'utf-8' });
    cy.get('.col-9 > .mt-4.no-gutters').contains('testdoc.doc');
    cy.get('[data-testid=uploadFile]').attachFile({ filePath: 'testdocx.docx', encoding: 'utf-8' });
    cy.get('.col-9 > .mt-4.no-gutters').contains('testdocx.docx');
    cy.get('[data-testid=uploadFile]').attachFile({ filePath: 'testxlsx.xlsx', encoding: 'utf-8' });
    cy.get('.col-9 > .mt-4.no-gutters').contains('testxlsx.xlsx');
    cy.get('[data-testid=uploadFile]').attachFile({ filePath: 'testxls.xls', encoding: 'utf-8' });
    cy.get('.col-9 > .mt-4.no-gutters').contains('testxls.xls');
    cy.get('[data-testid=uploadFile]').attachFile({ filePath: 'testpdf.pdf', encoding: 'utf-8' });
    cy.get('.col-9 > .mt-4.no-gutters').contains('testpdf.pdf');
    cy.get('[data-testid=uploadFile]').attachFile({ filePath: 'attach.csv', encoding: 'utf-8' });
    cy.get('.col-9 > .mt-4.no-gutters').contains('attach.csv');
  });
  it("Save note", () => {
    cy.get(".modal-content").find(".ml-auto").click();
  });
  it("Confirm that Note was created", () => {
    cy.contains(randomWord);
  });
  it("Edit the note", () => {
    cy.get(":nth-child(1) > :nth-child(3) > .mt-1").click();
    cy.get(".note-description").type("test");
  });
  it('Cancel Attachment', () => {
    cy.get(':nth-child(10) > .fa-times-circle').click()
    cy.get('.btn-danger').click();
    cy.get(':nth-child(9) > .fa-times-circle').click()
    cy.get('.btn-danger').click();
    cy.get(':nth-child(8) > .fa-times-circle').click()
    cy.get('.btn-danger').click();
    cy.get(':nth-child(7) > .fa-times-circle').click()
    cy.get('.btn-danger').click();
    cy.get(':nth-child(6) > .fa-times-circle').click()
    cy.get('.btn-danger').click();
    cy.get(':nth-child(5) > .fa-times-circle').click()
    cy.get('.btn-danger').click();
    cy.get(':nth-child(4) > .fa-times-circle').click()
    cy.get('.btn-danger').click();
    cy.get(':nth-child(3) > .fa-times-circle').click()
    cy.get('.btn-danger').click();
    cy.get(':nth-child(2) > .fa-times-circle').click()
    cy.get('.btn-danger').click();
    cy.get('.file-item').should('not.be.visible');
  });
  it("Save edited note", () => {
    cy.get(".modal-content").find(".ml-auto").click();
  });
  it("Confirm that Note was edited", () => {
    cy.contains(`${randomWord}test`);
  });
  it("Post Note", () => {
    cy.get('.wm-list-item > :nth-child(3) > .sc-bdfBwQ').click();
    cy.get('.post-btn').click({multiple:true});
  });
});
