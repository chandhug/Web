describe("Add & Remove Tags", () => {
  before(() => {
    cy.login();
  });
  it("Open a member search", () => {
    cy.visit("/search/members");
  });
  it("Open member profile", () => {
    cy.get(
      ":nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name"
    ).click();
    cy.wait(1000);
  });
  it("Click on add tag", () => {
    cy.wait(2000)
    cy.get(".add-tag").click();
  });
  it("Select a Tag", () => {
    cy.wait(4000)
    cy.get(".css-yk16xz-control > .css-1hwfws3").type("Diabetes{enter}")
  });
  it("Save tag", () => {
    cy.get("[data-testid=save-button]").click();
  });
  it("Confirm that tag exist", () => {
    cy.wait(2000)
    cy.get(".task-type").should('be.visible');
  });
  it("Remove Tag", () => {
    cy.get(":nth-child(1) > [data-testid=close-button]").click();
    cy.get('.modal-footer > .gbdUQd').click()
    // cy.get('.modal-footer > .fGMaeu').click()
    cy.wait(4000)
    cy.get('.member-header').find('.task-type').should('not.exist');
    // cy.get(".task-type").should('not.be.visible')
  });
});
