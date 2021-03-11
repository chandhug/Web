describe("Disposition Chat", () => {
  before(() => {
    cy.login();
  });
  it("Open a member profile", () => {
    cy.visit("/members/7606");
  });
  it("Start Chat", () => {
    cy.get("[data-testid=send-message-textarea]").type("Hello");
    cy.get("[data-testid=send-message]").click();
  });
  it("Leave chat", () => {
    cy.get(".fa-times-square").click();
  });
  it("Fill disposition", () => {
    cy.get(".css-yk16xz-control > .css-1hwfws3").type("Appeal{enter}");
    cy.get("[data-testid=disposition-form--note]").type("Test");
    cy.get("[data-testid=save-button]").click();
  });
  it("Confirm that chat is ended", () => {
    cy.get("[data-testid=save-button]").should("not.exist");
    cy.get(".fa-exchange").should("not.exist");
  });
});
