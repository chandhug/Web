describe("Navigate to a member in a client collection", () => {
  before(() => {
    cy.login();
  });
  it("Open a member search", () => {
    cy.visit("/search/members");
    cy.server();
    cy.route("GET", "**/user/api/v1/auth/search/fulltext**").as("memberSearch");

    cy.get(".form-control").type("curry {enter}");
    cy.wait("@memberSearch", { timeout: 5000 });
    cy.get(
      ":nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name"
    ).click();
  });

  it("Open member profile and view plan cost information", () => {
    // open the coverage information section
    cy.get("[data-testid=toggle-plan-btn]").click();
    // open the active plan (first plan)
    cy.get("[data-testid=show-plan-details-0]").click();
    // click the view copay information button
    cy.get("[data-testid=show-copay-coinsurance]").click();
    // expect to see the 3 options "retail", etc...
    cy.contains("Copays & Coinsurance", { matchCase: false });

    // click each option and verify content shows on the right
    cy.get("[data-testid=wm-plan-pharmacy-type-name]").each(
      ($el, index, $list) => {
        cy.wrap($el).click();
        cy.contains("up to", { matchCase: false });
      }
    );

    // close the modal
    cy.get("[data-testid=wm-icon-times]").click();

    // validate that the plan pharmacy type buttons are no longer visible
    cy.get("[data-testid=wm-plan-pharmacy-type-name]").should("not.exist");
  });
});

// Test added for ticket: https://withmehealth.atlassian.net/browse/WIT-7239
