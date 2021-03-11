// import { randomPassword } from "../../../functions";

// const randomWord = randomPassword(5);

// const taskToken = `test task, identifier: ${randomWord}`;
// // debugging this test it is helpful to use a static token :)
// // let taskToken = "test task, identifier: o*1V*1u*1F*1i*1";
// describe("Navigate from the member search to a member profile and add a task", () => {
//   before(() => {
//     cy.login();
//   });
//   it("Creates a task", () => {
//     cy.server();
//     cy.route(
//       "GET",
//       "/execute_sql_query?output_format=json&sql_query=select * from WithMe.taskhierarchy"
//     ).as("taskTypes");
//     cy.route("POST", "**/member/*/tasks").as("addTask"); // viewservice

//     // it should visit member profile
//     cy.visit("/search/members");
//     cy.get(
//       ":nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name"
//     ).click();
//     // it should open the add-task modal
//     cy.get("[data-testid=add-task-btn]").click().wait("@taskTypes");

//     // it should choose a task priority and confirm the three dropdown options are present
//     cy.get("[data-testid='wm-global-modal']")
//       .find("[data-testid=task-priority] > .btn-group > .pl-0")
//       .click()
//       .get("[data-testid=high]")
//       .and("be.visible")
//       .get("[data-testid=medium]")
//       .and("be.visible")
//       .get("[data-testid=low]")
//       .and("be.visible")
//       .click();
//     // it should choose a task status
//     cy.get("[data-testid='wm-global-modal']")
//       .find("[data-testid=task-status]")
//       .click();
//     cy.get('[data-testid="task-status-option"]').first().click();
//     // it should choose task duedate
//     cy.get("[data-testid=task-duedate-due-date-arrow-down]").click();
//     cy.get(".react-datepicker > .react-datepicker__navigation--next").click();
//     cy.get(".react-datepicker__day--015").click();
//     // it should enter task description
//     cy.get('[data-testid="task-description"] > .form-control').type(taskToken);
//     // it should choose a task type
//     cy.get(
//       '[data-testid="task-type-col"] > .css-2b097c-container > .css-yk16xz-control'
//     ).click();
//     cy.get(
//       ".css-2b097c-container>div:nth-child(3)>div>div:nth-child(3)"
//     ).click();
//     // it should save the created task
//     cy.get("[data-testid='wm-global-modal']")
//       .find("[data-testid=create-task]")
//       .click();
//     // cy.wait("@addTask");
//   });
//   it("Verifies the task exists on the tasks table after creation", () => {
//     cy.server();
//     cy.route("POST", "**/tasks/facets").as("getAllTasks");
//     cy.route("PUT", "**/member/*/tasks/**").as("updateTask");
//     cy.visit("/tasks");
//     cy.wait("@getAllTasks");
//     cy.get('[data-rbd-draggable-id="column-draggable-assigned"]')
//       .find('[data-testid="task-card-description"]')
//       .contains(taskToken)
//       .click();
//     cy.get("[data-testid=task-owner] > .col > :nth-child(1)").type("test");
//     cy.get(
//       ".css-g0y5er-container > .css-26l3qy-menu > .css-4ljt47-MenuList > div:nth-child(1)"
//     ).click();
//     cy.get('[data-testid="save-task-changes-btn"]').click();
//     cy.wait("@updateTask");
//     cy.get('[data-rbd-draggable-id="column-draggable-assigned"]')
//       .find('[data-testid="task-card-description"]')
//       .contains(taskToken)
//       .and("not.be.visible");
//   });
// });
