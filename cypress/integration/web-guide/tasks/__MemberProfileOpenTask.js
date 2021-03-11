
describe("Navigate from the member search to a member profile view an existing task", () => {
  before(() => {
    cy.login();
  });
  it("Creates a task", () => {
    cy.server();
    cy.route(
      "GET",
      "/execute_sql_query?output_format=json&sql_query=select * from WithMe.taskhierarchy"
    ).as("taskTypes");
    cy.route("POST", "**/member/*/tasks").as("addTask"); // viewservice

    // it should visit member profile
    cy.visit("/search/members");
    cy.get(
      ":nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name"
    ).click();
    // it should open the add-task modal
    cy.get("[data-testid=add-task-btn]").click();
    // .wait('@taskTypes')

    // it should choose a task priority and confirm the three dropdown options are present
    cy.get("[data-testid='wm-global-modal']")
      .find("[data-testid=task-priority] > .btn-group > .pl-0").click()
      // .click()
      // .get('[data-testid=high] > .task-priority > .editable')
      .get("[data-testid=high]")
      // .and("be.visible")
      // .get('[data-testid=medium] > .task-priority > .editable')
      // .get("[data-testid=medium]")
      // .and("be.visible")
      // .get('[data-testid=low] > .task-priority > .editable')
      // .get("[data-testid=low]")
      // .and("be.visible")
      .click();
    // it should choose a task status
    cy.get("[data-testid='wm-global-modal']")
      .find("[data-testid=task-status]")
      .click();
    cy.get('[data-testid="task-status-option"]').first().click();
    // it should choose task duedate
    cy.get("[data-testid=task-duedate-due-date-arrow-down]").click();
    cy.get(".react-datepicker > .react-datepicker__navigation--next").click();
    cy.get(".react-datepicker__day--015").click();
    // it should enter task description
    cy.get('[data-testid="task-description"] > .form-control').type('taskToken');
    // it should choose a task type
    cy.get(
      '[data-testid="task-type-col"] > .css-2b097c-container > .css-yk16xz-control'
    ).click();
    cy.get(
      ".css-2b097c-container>div:nth-child(3)>div>div:nth-child(3)"
    ).click();
    // it should save the created task
    cy.get("[data-testid='wm-global-modal']")
      .find("[data-testid=create-task]")
      .click();
      //it should verify task is created
      cy.get('[data-testid=wm-icon-tasks]').click();
      cy.get('.title').should('have.text', 'Tasks')
      // cy.get('[data-rbd-draggable-id="column-draggable-assigned"] > .sc-fzoLag')
      //   .type(`{ctrl}{f}${randomWord}`)
      //   .should('be.visible');
    cy.wait("@addTask");
  });
});
