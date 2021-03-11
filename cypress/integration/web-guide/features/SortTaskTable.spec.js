// describe("Should sort the tasks by the sortable fields", () => {
//   before(() => {
//     cy.login();
//   });

//   it("Should sort by Task Type", () => {
//     cy.visit("/search/tasks");
//     cy.server();
//     cy.route("POST", "appsvc/view-service/api/v1/tasks/facets").as("filteringTasks");
//     cy.get("[data-testid=sort-task_type]").click();
//     cy.wait("@filteringTasks");
//     const ascSortedItems = [];
//     const ascSortedItemsCopy = [];
//     cy.get(".tb1 > :nth-child(1) > :nth-child(1) > .td-container")
//       .each(($el) => {
//         ascSortedItems.push($el.text());
//         ascSortedItemsCopy.push($el.text());
//       })
//       .then(() => expect(ascSortedItemsCopy).to.deep.eq(ascSortedItems.sort()));

//     cy.get("[data-testid=sort-task_type]").click();
//     cy.wait("@filteringTasks");
//     const descSortedItems = [];
//     const descSortedItemsCopy = [];
//     cy.get(".tb1 > :nth-child(1) > :nth-child(1) > .td-container")
//       .each(($el) => {
//         descSortedItems.push($el.text());
//         descSortedItemsCopy.push($el.text());
//       })
//       .then(() =>
//         expect(descSortedItemsCopy).to.deep.eq(descSortedItems.sort().reverse())
//       );
//   });

//   it("Should sort by Member", () => {
//     cy.visit("/search/tasks");
//     cy.server();
//     cy.route("POST", "appsvc/view-service/api/v1/tasks/facets").as("filteringTasks");
//     cy.get("[data-testid=sort-member]").click();
//     cy.wait("@filteringTasks");
//     const ascSortedItems = [];
//     const ascSortedItemsCopy = [];
//     cy.get(".tb1 > :nth-child(1) > :nth-child(2) > .td-container > a > span")
//       .each(($el) => {
//         ascSortedItems.push($el.text());
//         ascSortedItemsCopy.push($el.text());
//       })
//       .then(() => expect(ascSortedItemsCopy).to.deep.eq(ascSortedItems.sort()));

//     cy.get("[data-testid=sort-member]").click();
//     cy.wait("@filteringTasks");
//     const descSortedItems = [];
//     const descSortedItemsCopy = [];
//     cy.get(".tb1 > :nth-child(1) > :nth-child(2) > .td-container > a > span")
//       .each(($el) => {
//         descSortedItems.push($el.text());
//         descSortedItemsCopy.push($el.text());
//       })
//       .then(() =>
//         expect(descSortedItemsCopy).to.deep.eq(descSortedItems.sort().reverse())
//       );
//   });

//   it("Should sort by Guide", () => {
//     cy.visit("/search/tasks");
//     cy.server();
//     cy.route("POST", "appsvc/view-service/api/v1/tasks/facets").as("filteringTasks");
//     cy.get("[data-testid=sort-guide]").click();
//     cy.wait("@filteringTasks").then((response) => {
//       const res = response.response.body.result;
//       const ascOwners = [];
//       const ascOwnersCopy = [];
//       res.map((el) => {
//         ascOwners.push(el.owner.fullName);
//         ascOwnersCopy.push(el.owner.fullName);
//       });
//       expect(ascOwnersCopy).to.deep.eq(ascOwners.sort());
//     });

//     cy.get("[data-testid=sort-guide]").click();
//     cy.wait("@filteringTasks").then((response) => {
//       const res = response.response.body.result;
//       const descOwners = [];
//       const descOwnersCopy = [];
//       res.map((el) => {
//         descOwners.push(el.owner.fullName);
//         descOwnersCopy.push(el.owner.fullName);
//       });
//       expect(descOwnersCopy).to.deep.eq(descOwners.sort().reverse());
//     });
//   });

//   it("Should sort by Priority", () => {
//     cy.visit("/search/tasks");
//     cy.server();
//     cy.route("POST", "appsvc/view-service/api/v1/tasks/facets").as("filteringTasks");
//     cy.get("[data-testid=sort-priority]").click();
//     cy.wait("@filteringTasks");
//     const ascSortedItems = [];
//     const ascSortedItemsCopy = [];
//     cy.get(
//       ".tb1 > :nth-child(1) > :nth-child(4) > .td-container > .task-priority > span"
//     )
//       .each(($el) => {
//         ascSortedItems.push($el.text());
//         ascSortedItemsCopy.push($el.text());
//       })
//       .then(() => expect(ascSortedItemsCopy).to.deep.eq(ascSortedItems.sort()));

//     cy.get("[data-testid=sort-priority]").click();
//     cy.wait("@filteringTasks");
//     const descSortedItems = [];
//     const descSortedItemsCopy = [];
//     cy.get(
//       ".tb1 > :nth-child(1) > :nth-child(4) > .td-container > .task-priority > span"
//     )
//       .each(($el) => {
//         descSortedItems.push($el.text());
//         descSortedItemsCopy.push($el.text());
//       })
//       .then(() =>
//         expect(descSortedItemsCopy).to.deep.eq(descSortedItems.sort().reverse())
//       );
//   });
//   it("Should sort by due_date", () => {
//     cy.visit("/search/tasks");
//     cy.server();
//     cy.route("POST", "appsvc/view-service/api/v1/tasks/facets").as("filteringTasks");
//     cy.get(
//       "[data-testid=due_date] > :nth-child(1) > .dd-wrapper > .dd-header > .dd-header-title > .fal"
//     ).click();
//     cy.wait("@filteringTasks").then((response) => {
//       const res = response.response.body.result;
//       const ascSortedItems = [];
//       const ascSortedItemsCopy = [];
//       res.map((el) => {
//         ascSortedItems.push(el.taskDueDate);
//         ascSortedItemsCopy.push(el.taskDueDate);
//       });
//       expect(ascSortedItemsCopy).to.deep.eq(
//         ascSortedItems.sort((a, b) => new Date(a) - new Date(b))
//       );
//     });

//     cy.get(
//       "[data-testid=due_date] > :nth-child(1) > .dd-wrapper > .dd-header > .dd-header-title > .fal"
//     ).click();
//     cy.wait("@filteringTasks").then((response) => {
//       const res = response.response.body.result;
//       const descSortedItems = [];
//       const descSortedItemsCopy = [];

//       res.map((el) => {
//         descSortedItems.push(el.taskDueDate);
//         descSortedItemsCopy.push(el.taskDueDate);
//       });
//       expect(descSortedItemsCopy).to.deep.eq(
//         descSortedItems.sort((a, b) => new Date(b) - new Date(a))
//       );
//     });
//   });
// });


//Code will get uncomented once sorting issue is resolved