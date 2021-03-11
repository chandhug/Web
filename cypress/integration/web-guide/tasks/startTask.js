import { randomPassword } from "../../../functions";

const randomWord = randomPassword(5);

describe("Create & Edit Task", () => {
  // before(() => {
  //   cy.logout();
  // });
  it("Visit Members", () => {
    cy.login();
    cy.visit("/search/members");
  });
  it("Open member profile", () => {
    cy.get(
      ":nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name"
    ).click();
    cy.wait(1000);
  });
  it("Click Add Task", () => {
    cy.get("[data-testid=add-task-btn]").click();
  });
  it("Choose priority", () => {
    cy.get("[data-testid='wm-global-modal']").find(
      "[data-testid=task-priority] > .btn-group > .pl-0"
    );
    cy.get("[data-testid='wm-global-modal']")
      .find("[data-testid=task-priority] > .btn-group > .pl-0")
      .click()
      .get("[data-testid=high]")
      .click();
  });
  it("Choose status", () => {
    cy.get("[data-testid='wm-global-modal']")
      .find("[data-testid=task-status]")
      .click();
    cy.get(".dropdown-menu > :nth-child(1) > span").click();
  });
  it("Choose due date", () => {
    cy.get('[data-testid=task-duedate-due-date-arrow-down]').click({force:true})
    cy.get(".react-datepicker > .react-datepicker__navigation--next").click({force:true});
    cy.get(".react-datepicker__day--015").click();
    // cy.get("[data-testid='wm-global-modal']")
    //   .find(".react-datepicker__input-container")
    //   .click();
    // cy.get(":nth-child(5) > .react-datepicker__day--030").click();
  });
  it("Add description", () => {
    cy.get("[data-testid='wm-global-modal']")
      .find(".form-control")
      .type(randomWord);
  });
  it("Choose Type", () => {
    cy.get("[data-testid='wm-global-modal']")
      .find(".css-yk16xz-control")
      // .wait(15000);
    cy.get("[data-testid='wm-global-modal']")
      .find(".css-yk16xz-control")
      .click()
      .type("Adher{enter}"); //Gad2
  });
  it("Create Task", () => {
    cy.get("[data-testid='wm-global-modal']")
      .find("[data-testid=create-task]")
      .click();
  });
  it("Start Task", () => {
    cy.get('button[type=button]').should('contain.text', 'Start Task')
    .eq(-1).click()

    // cy.get(".flex-column > .hasBackground").contains("Assess - GAD2");
    // cy.get(":nth-child(1) > :nth-child(6) > div > .task-action-btn").click();
  });
});
