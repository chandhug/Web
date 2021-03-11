describe("Open AdherenceAssessment and check the questions/answers", () => {
  before(() => {
    cy.login();
  });
  it("Open AdherenceAssessment and check the questions/answers", () => {
    cy.visit("/search/members");
    cy.get(
      ":nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name"
    ).click();
    cy.get(".assessment-menu").click();
    cy.get('.dropdown-menu')
      .contains("Adherence Assessment")
      .first()
      .click();
    cy.get('[data-testid="expand-assessment-btn"]').click();
    cy.get('[data-testid="choiceexpand-question"]').should("have.length", 3);
    cy.get('[data-testid="choiceexpand-question"]').each(() => {
      cy.get("button").contains("Agree Completely").and("be.visible");
      cy.get("button").contains("Agree Mostly").and("be.visible");
      cy.get("button").contains("Agree Somewhat").and("be.visible");
      cy.get("button").contains("Disagree Somewhat").and("be.visible");
      cy.get("button").contains("Disagree Mostly").and("be.visible");
      cy.get("button").contains("Disagree Completely").and("be.visible");
    });
  });
});
