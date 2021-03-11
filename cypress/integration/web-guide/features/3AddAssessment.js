
describe('Complete RAPID 3 and Adherence Assessment', () => {
  before(() => {
    cy.login();
  });
  it('Open a member page', () => {
    cy.visit('/search/members');
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
    ).click();
    cy.wait(1000);
  });
  it('Open Assessment', () => {
    cy.get('.assessment-menu').click();
    cy.get(':nth-child(3) > .dropdown > .dropdown-menu')
      .contains('RAPID 3') //PHQ 2
      .click();
  });
  it('Select Answers', () => {
    cy.get('#dressYourself_a_2').click(); 
    cy.get('#getOutBed_a_2').click();
    cy.get('#liftGlassToMouth_a_3').click();
    cy.get('#walkOutdoors_a_1').clock();
    cy.get('#washBody_a_1').click();
    cy.get('#bendDown_a_2').click();
    cy.get('#faucetsOnOff_a_3').click();
    cy.get('#inOutTransportation_a_1').click();
    cy.get('#walkTwoMiles_a_3').click();
    cy.get('#playSports_a_1').click();
    cy.get('#goodNightSleep_a_2').click();
    cy.get('#dealWithAnxiety_a_1').click();
    cy.get('#dealWithDepression_a_2').click();
    cy.get(':nth-child(15) > .answer-slider > .rc-slider > .rc-slider-step')
     .trigger('mousedown', {button: 0})
     .trigger('mousemove', 'center', {force:true})
    //  .trigger('mouseup', {force: true})  
     cy.get(':nth-child(16) > .answer-slider > .rc-slider > .rc-slider-handle')
     .trigger('mousedown', {button: 0})
     .trigger('mousemove', 'center', {force:true})
    //  .trigger('mouseup', {force: true}) 

  });      
  it ('Complete the Assessment', () => {
    cy.get('.btn-outline-purple')
      .contains('Complete')
      .click();
    cy.get('.modal-footer > .btn-primary').click();  
  });
  it ('Confirm that assessment was added', () => {
    cy.get('.d-flex > .hasBackground')  
      .contains('Assessment - RAPID3')
      .should('be.visible');
  });
  
});
