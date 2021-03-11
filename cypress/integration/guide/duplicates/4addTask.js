import { randomPassword } from '../../../functions'

const randomWord = randomPassword(5);

describe('Member search & Add Task', () => {
  before(() => {
    cy.login();
    // cy.logout();
  });
  it('Visit Members', () => {
    // cy.login();
    cy.visit('/search/members');
  });
  it('Open member profile', () => {
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
    ).click();
    cy.wait(1000);
  });
  it('Click Add Task', () => {
    cy.get('[data-testid=add-task-btn]').click();
  });
  it('Choose priority', () => {
    cy.get("[data-testid='wm-global-modal']").find(
      '[data-testid=task-priority] > .btn-group > .pl-0',
    );
    cy.get("[data-testid='wm-global-modal']")
      .find('[data-testid=task-priority] > .btn-group > .pl-0')
      .click()
      .get('[data-testid=high]')
      .click();
  });
  it('Choose status', () => {
    cy.get("[data-testid='wm-global-modal']")
      .find('[data-testid=task-status]')
      .click();
    cy.get(
      ':nth-child(4) > .col > .btn-group > .dropdown-menu > :nth-child(1)',
    ).click();
  });
  it('Choose due date', () => {
    // cy.get("[data-testid='wm-global-modal']")
    //   .find('.react-datepicker__input-container')
    //   .click();
    cy.get("[data-testid=task-duedate-due-date-arrow-down]").click()
    cy.get(".react-datepicker > .react-datepicker__navigation--next").click()
    cy.get('.react-datepicker__day--016').click(); //:nth-child(5) > 
  });
  it('Add description', () => {
    cy.get("[data-testid='wm-global-modal']")
      .find('.form-control')
      .type(randomWord);
  });
  it('Choose Type', () => {
    cy.server();
    cy.get("[data-testid='wm-global-modal']").find('.css-yk16xz-control');
    cy.get("[data-testid='wm-global-modal']")
      .find('.css-yk16xz-control')
      .click()
      .type('Assess{enter}');
  });
  it('Create Task', () => {
    cy.get("[data-testid='wm-global-modal']")
      .find('[data-testid=create-task]')
      .click();
  });
  it('Confirm that Task was created', () => {
    cy.get('[data-testid=wm-icon-tasks]').click();
    cy.wait(4000)
    cy.get('[data-rbd-draggable-id="column-draggable-assigned"] > .sc-gTgzIj')  //sc-fzoLag
      .find('[data-testid="task-card-description"]')
      .contains(randomWord)
      .click({multiple:false})
      .should('contain.text', randomWord);
      // .type(`{ctrl}{f}${randomWord}`)
      // .should('be.visible');
  });
});
