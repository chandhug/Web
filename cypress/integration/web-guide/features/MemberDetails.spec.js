describe('Member details page', () => {
  before(() => {
    cy.login();
  });
  it('Can add a task for a member', () => {
    // TODO: Not sure how we should handle this as it will add a lot of data for a user running on every build
    // commented out for now, but will add a task - also needs better selectors
    cy.visit('/search/members');
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
    ).click();
  });

  it('Verify RAPID3 modal open', ()=> {
    cy.get(':nth-child(3) > .dropdown > .btn').click();
    cy.get(
      ':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(1)',
    ).click();
    cy.wait(2000);
    cy.get('.row > :nth-child(1) > .title').should('be.visible')
    cy.get('[data-testid=close-btn] > .fal').click()  
  });
  it('Verify Adherence Assessment modal open', ()=> {
    cy.get(':nth-child(3) > .dropdown > .btn').click()
    cy.get(
      ':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(2)',
    ).click()
    cy.wait(2000)
    cy.get('.mb-3 > :nth-child(1) > .title').should('be.visible')
    cy.get('[data-testid=close-btn] > .fal').click()
  });
  it('Verify Medication review modal open', ()=> {
    cy.get(':nth-child(3) > .dropdown > .btn').click()
    cy.get(
      ':nth-child(3) > .dropdown > .dropdown-menu > :nth-child(3)',
    ).click()
    cy.wait(2000)
    cy.get('[data-testid=medication-review] > :nth-child(1) > :nth-child(1) > .title').should('be.visible')
    cy.get('[data-testid=close-btn] > .fal').click()
  });
  it('Verify App Invite->SMS modal open', ()=> {
    cy.get('.wmenu > :nth-child(2) > :nth-child(1) > :nth-child(1)').click()
    cy.get(':nth-child(1) > .dropright > .btn > .fal').click()
    cy.get(':nth-child(1) > .dropright > .dropdown-menu > :nth-child(1)').click()
    cy.get('[data-testid=mobilePhone-phone-number]').type(9252667070)
    cy.get('.modal-footer > .btn-primary').should('be.visible')
    cy.get('.modal-footer > .btn-transparent').click()
  });
  it('Verify App Invite->Email modal open', ()=> {
    cy.get('.wmenu > :nth-child(2) > :nth-child(1) > :nth-child(1)').click()
    cy.get(':nth-child(1) > .dropright > .btn > .fal').click()
    cy.get(':nth-child(1) > .dropright > .dropdown-menu > :nth-child(2)').click()
    cy.get('.form-control').type('qa@withmehealth.com')
    cy.get('.modal-footer > .btn-primary').should('be.visible')
    cy.get('.modal-footer > .btn-transparent').click()
  });
  it('Verify HIPPA verification modal open', ()=>{
    cy.get('.wmenu > :nth-child(2) > :nth-child(1) > :nth-child(1)').click() 
    cy.get(':nth-child(2) > .dropright > .btn > .fal').click()
    cy.get(':nth-child(2) > .dropright > .dropdown-menu > :nth-child(1)').click()
    cy.get('[data-testid=hipaa-verification] > .mb-3.row > :nth-child(1) > .title')
      .should('be.visible')
    cy.get('[data-testid=hipaa-verification] > .mb-3.row > .text-right > [data-testid=close-btn] > .fal')
      .click()
  });
  it('Verify App Onboarding modal open', ()=>{
    cy.get('.wmenu > :nth-child(2) > :nth-child(1) > :nth-child(1)').click() 
    cy.get(':nth-child(2) > .dropright > .btn > .fal').click()
    cy.get(':nth-child(2) > .dropright > .dropdown-menu > :nth-child(2)').click()
    cy.get('.chat-script > .title').should('be.visible')
    cy.get('.btn-close > .far').click()
    });
  it('Verify Search Provider modal open', ()=>{
    cy.get('.wmenu > :nth-child(1) > .dropdown > .btn').click()
    cy.get('.wmenu > :nth-child(1) > .dropdown > .dropdown-menu > :nth-child(1)')
      .click()
    cy.get('.header > .title').should('be.visible')
    cy.get('[data-testid=wm-icon-times] > path').click()
    });
  it('Verify Search Pharmacy modal open', ()=>{
    cy.get('.wmenu > :nth-child(1) > .dropdown > .btn').click()
    cy.get('.wmenu > :nth-child(1) > .dropdown > .dropdown-menu > :nth-child(2)')
      .click()
    cy.wait(2000)
    cy.get('.header > .title').should('be.visible')
    cy.get('[data-testid=wm-icon-times] > path').click() 
  });
  it('Verify Reference modal open', ()=>{
    cy.get('.wmenu > :nth-child(1) > .dropdown > .btn').click()
    cy.get('.wmenu > :nth-child(1) > .dropdown > .dropdown-menu > :nth-child(3)')
      .click()
    cy.wait(2000)  
    cy.get('.header > .title').should('be.visible')
    cy.get('.close > .fa').click()
  });
  it('Verify Formulary Lookup modal open', ()=>{
    cy.get('.wmenu > :nth-child(1) > .dropdown > .btn').click()
    cy.get('.dropdown-menu > :nth-child(4)').click()
    cy.get('.modal-content > :nth-child(1) > .modal-title')
      .should('be.visible')
      cy.get('.modal-content > :nth-child(1) > .sc-bdfBwQ').click()  
  });
  it('Verify Task modal open', ()=>{
    cy.get('.dhead > :nth-child(1) > .dropdown > .btn').click()
    cy.get('.dropdown-menu > :nth-child(1) > .d-flex').click()
    cy.get('.modal-title > .w-100').should('be.visible')
    cy.get('[data-testid=create-task]').should('be.visible')
    cy.get('[data-testid=wm-icon-times] > path').click()  
  });
  it('Verify Note modal open', ()=>{
    cy.get('.dhead > :nth-child(1) > .dropdown > .btn').click()
    cy.get(':nth-child(2) > .d-flex').click()
    cy.get('.modal-title > .w-100').should('be.visible')
    cy.get('.ml-auto').should('be.visible')
    cy.get('.attachment-btn').should('be.visible')
    cy.get('[data-testid=wm-icon-times] > path').click()  
  });
  it('Verify Intervention modal open', ()=>{
    cy.get('.dhead > :nth-child(1) > .dropdown > .btn').click()
    cy.get('.dropdown-menu > :nth-child(3) > .d-flex').click()
    cy.get('.modal-title > .w-100').should('be.visible')
    cy.get('[data-testid=save-button]').should('be.visible')
    cy.get('[data-testid=cancel-button]').should('be.visible')
      .click()
  });
  it('Verify Member detail info is present', ()=>{
    cy.get('.member-header').should('be.visible')
    cy.get('.member-summary > .row > :nth-child(1)').should('be.visible')
    cy.get('.phone-num').should('be.visible')
    cy.get('.member-summary > .row > :nth-child(3)').should('be.visible')
    cy.get('.member-summary > .row > :nth-child(3)').should('be.visible')
    cy.get('.member-summary > .row > :nth-child(5)').should('be.visible')
    cy.get('.member-summary > .row > :nth-child(6)').should('be.visible')
    cy.get('.member-summary > .row > :nth-child(7)').should('be.visible')
    cy.get('.member-header > .col').should('be.visible')
  });
  it('Verify Contact Info and Notification Preferences', ()=>{
    cy.get('[data-testid=wm-button]').should('be.visible')
    cy.get('[data-testid=collapse] > :nth-child(1)').should('not.be.visible')
    cy.get('[data-testid=edit-notification-button]').should('not.be.visible')
    cy.get('[data-testid=wm-button]').click()
    cy.get('[data-testid=collapse] > :nth-child(1)').should('be.visible')
    cy.get('.profile-data').scrollTo('bottom')
    cy.get('[data-testid=edit-notification-button]').scrollIntoView().should('be.visible')

    // Verify Edit Contact Info
    cy.get('[data-testid=collapse] > :nth-child(1)').click()
    cy.get('.modal-title').should('be.visible')
    cy.get('[data-testid=patientPreferredLanguageId]').should('be.visible')
    cy.get('.custom-row-select > :nth-child(2) > .col').should('be.visible')
    cy.get('.sc-iwyYcG > :nth-child(4) > .col').should('be.visible')
    cy.get('.sc-iwyYcG > :nth-child(5) > :nth-child(1) > :nth-child(1) > :nth-child(1)')
      .should('be.visible')
    cy.get('.sc-iwyYcG > :nth-child(5) > :nth-child(2) > :nth-child(1)')
      .should('be.visible')
    cy.get(':nth-child(8) > :nth-child(1) > .form-group').should('exist')
    cy.get(':nth-child(8) > :nth-child(2) > .form-group').should('exist')
    cy.get(':nth-child(3) > .form-group').should('exist')
    cy.get('.contact-info-footer > .ml-2').should('exist')
    cy.get('.contact-info-footer > .ml-auto').should('exist')
    cy.get('.contact-info-footer > .ml-2').click()

    //Verify Edit Notification Preferences
    cy.get('[data-testid=edit-notification-button]').click()
    cy.get('.modal-title > .w-100').should('be.visible')
    cy.get('[data-testid=contactMethod]').should('be.visible')
    cy.get('[data-testid=contactTime]').should('be.visible')
    cy.get('.notification-pref-form > :nth-child(4)').should('be.visible')
    cy.get('.notification-pref-form > :nth-child(5)').should('be.visible')
    cy.get('.notification-pref-form > :nth-child(6)').should('be.visible')
    cy.get('[data-testid=cancel-button]').should('be.visible')
    cy.get('[data-testid=save-button]').should('be.visible')
    cy.get('[data-testid=cancel-button]').click()
    cy.get('[data-testid=wm-button]').click()
  });
  it('Verify Coverage', ()=>{
    cy.get(':nth-child(2) > [data-testid=plan-btn]').should('be.visible')
    cy.get('[data-testid=plan-container] > .blocksNew').should('not.be.visible')
    cy.get(':nth-child(2) > [data-testid=plan-btn]').click()
    cy.get('[data-testid=plan-container] > .blocksNew').should('be.visible')
    cy.get('[data-testid=show-copay-coinsurance]').should('not.be.visible')
    cy.get('[data-testid=plan-container] > .blocksNew').click()
    cy.get('[data-testid=show-copay-coinsurance]').should('be.visible')
    cy.get('[data-testid=show-copay-coinsurance]').click()

    //Verify Copays & Coinsurance
    cy.get(':nth-child(1) > .modal-title').should('be.visible')
    cy.get('[data-testid=wm-modal-subheader] > .modal-title').should('be.visible')
    cy.get('.YcKaF > .card-body').should('be.visible')
    cy.get('[data-testid=plan-pharmacy-type-names] > :nth-child(2) > .card-body').should('be.visible')
    cy.get('[data-testid=plan-pharmacy-type-names] > :nth-child(3) > .card-body').should('be.visible')
    cy.get('[data-testid=plan-cost-detail-information-panel] > :nth-child(1)').should('be.visible')
    cy.get('[data-testid=plan-cost-detail-information-panel] > :nth-child(2) > .card-body').should('be.visible')
    cy.get('[data-testid=plan-cost-detail-information-panel] > :nth-child(3) > .card-body').should('be.visible')
    cy.get(':nth-child(4) > .card-body').should('be.visible')
    cy.get('[data-testid=plan-cost-detail-information-panel] > :nth-child(5)').should('be.visible')
    cy.get(':nth-child(6) > .card-body').should('be.visible')
    cy.get('[data-testid=plan-cost-detail-information-panel]').scrollTo('bottom')
    cy.get(':nth-child(7) > .card-body').scrollIntoView().should('be.visible')
    cy.get(':nth-child(8) > .card-body').scrollIntoView().should('be.visible')
    cy.get(':nth-child(10) > .card-body').scrollIntoView().should('be.visible')
    cy.get(':nth-child(11) > .card-body').scrollIntoView().should('be.visible')
    cy.get(':nth-child(12) > .card-body').scrollIntoView().should('be.visible')
    cy.get('.modal-content > :nth-child(1) > .sc-bdfBwQ').click()
    cy.get(':nth-child(2) > [data-testid=plan-btn]').click()
  });
  it('Verify Medication', ()=>{
    cy.get(':nth-child(3) > [data-testid=plan-btn]').should('be.visible')
    cy.get('[data-testid=plan-container]').should('not.be.visible')
    cy.get(':nth-child(3) > [data-testid=plan-btn]').click()
    cy.get('.expanded > [data-testid=plan-container]').should('be.visible')
    cy.get('.profile-data').scrollTo('bottom')
    cy.get('[data-testid=add-medication-btn]').scrollIntoView().should('be.visible')
    cy.get('.medication-list--past-drugs').scrollIntoView().should('be.visible')
    cy.get('[data-testid=add-medication-btn]').click()
    cy.get('.sc-kEjbxe').should('be.visible').should('be.visible')
    cy.get('.css-yk16xz-control > .css-1hwfws3').should('be.visible')
    cy.get('[data-testid=cancel-button]').should('be.visible')
    cy.get('[data-testid=cancel-button]').should('be.visible')
    cy.get('[data-testid=cancel-button]').click()
    cy.get(':nth-child(3) > [data-testid=plan-btn]').click()
  });
  it('Verify Careteam', ()=>{
    cy.get('.profile-data > :nth-child(4)').should('be.visible')
    cy.get('.profile-data > :nth-child(4)').click()
    cy.get('[data-testid=providers-container]').should('be.visible')
    cy.get('[data-testid=provider-list-btn]').click()
  });
  it('Verify Pharmacy', ()=>{
    cy.get('[data-testid=pharmacy-list-btn]').should('be.visible')
    cy.get('[data-testid=pharmacy-list-btn]').click()
    cy.get('[data-testid=pharmacies-container] > .blocksNew > [data-testid=allergy-details-btn]')
      .should('be.visible')
    cy.get('[data-testid=pharmacies-container] > .blocksNew > [data-testid=allergy-details-btn]')
      .click()
    cy.get('.profile-data').scrollTo('bottom')
    cy.get('[data-testid=pharmacies-container] > .blocksNew > .blocks > :nth-child(1) > .row > :nth-child(7) > .planLabel')
      .scrollIntoView().should('be.visible')    
    cy.get('[data-testid=pharmacy-list-btn]').click()
  });
  it('Verify Allergies', ()=>{
    cy.get('[data-testid=allergy-toggle]').should('be.visible')
    cy.get('[data-testid=allergy-toggle]').click()
    cy.get('.profile-data').scrollTo('bottom')
    cy.get('.expanded > .show').scrollIntoView().should('be.visible')
    cy.get('.show > :nth-child(1) > [data-testid=allergy-details-btn]').click()
    cy.get(':nth-child(1) > .blocks > .row > :nth-child(1) > .planLabel > [data-testid=remove-allergy-btn]')
      .should('be.visible')
    cy.get(':nth-child(1) > .blocks > .row > :nth-child(1) > .planValue > .fal')
      .should('be.visible')
    cy.get(':nth-child(1) > .blocks > .row > :nth-child(1) > .planValue > .fal')
      .click()
    cy.get('[data-testid=allergen-dropdown] > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3')
      .should('be.visible')
    cy.get('[data-testid=severity-dropdown] > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3')
      .should('be.visible')
    cy.get('[data-testid=reactions-picklist]').should('be.visible')
    cy.get('[data-testid=note]').should('be.visible').should('be.visible')
    cy.get('[data-testid=cancel-allergy-btn]').should('be.visible')
    cy.get('[data-testid=remove-allergy-form-btn]').should('be.visible')
    cy.get('[data-testid=save-allergy-btn]').should('be.visible')
    cy.get('[data-testid=cancel-allergy-btn]').click()
    cy.get('[data-testid=allergy-toggle]').click()
  });
  it('Verify Side Effects', ()=>{
    cy.get('[data-testid=side-effect-list-btn]').should('be.visible')
    cy.get('[data-testid=side-effect-list-btn]').click()
    cy.get('[data-testid=side-effects-container] > .blocksNew')
      .should('be.visible')
      cy.get('[data-testid=side-effects-container] > :nth-child(1)')
      .click()
    cy.get('.col-8 > [data-testid=remove-allergy-btn]').should('be.visible')
    cy.get('.col-4 > .fal').should('be.visible')
    cy.get(':nth-child(1) > .blocks > :nth-child(1) > .row > .col-4').click()
    cy.get('.mt-4.mb-4 > :nth-child(1) > .form-group').should('be.visible')
    cy.get(':nth-child(2) > .form-group').should('be.visible')
    cy.get('[data-testid=side-effect-form] > .mt-4.mb-4 > :nth-child(3)').should('be.visible')
    cy.get('.col-md-9').should('be.visible')
    cy.get('.sc-iqHYGH > .w-100 > :nth-child(1) > :nth-child(1)').should('be.visible')
    cy.get('.sc-iqHYGH > .w-100 > :nth-child(1) > :nth-child(2)').should('be.visible')
    cy.get('.text-right > .sc-bdfBwQ').should('be.visible')
    cy.get('.sc-iqHYGH > .w-100 > :nth-child(1) > :nth-child(1)').click()
    cy.get('.profile-data').scrollTo('bottom')
    cy.get('[data-testid=add-side-effect-btn]').scrollIntoView().should('be.visible')
    cy.get('[data-testid=side-effect-list-btn]').click()    
  });
  it('Verify History list', ()=>{
    cy.get('.flex-column > .hasBackground').should('be.visible')
    cy.get('.flex-column > .hasBackground').scrollTo('bottom')
    cy.get('.hasBackground > :nth-child(15)').scrollIntoView().should('be.visible')
    cy.get('.hasBackground > :nth-child(17)').scrollIntoView().should('be.visible')
    cy.get('[data-testid=activity]').scrollIntoView().should('be.visible')
    cy.get('[data-testid=guide] > :nth-child(1) > .dd-wrapper > .dd-header')
      .scrollIntoView().should('be.visible')
      cy.get('[data-testid=dateTime]').scrollIntoView().should('be.visible')
    cy.get('[data-testid=dateTime]').scrollIntoView().should('be.visible')
    cy.get('[data-testid=audit-history]').scrollIntoView().should('be.visible')
  });
  it('Verify left hand side bar icons', ()=>{
    cy.get('[data-testid=Wm_Menu]').should('be.visible')
    cy.get('.sc-hKgILt').should('be.visible')
    cy.get('.sc-hKgILt').should('be.visible')
    cy.get('.sc-hKgILt').should('be.visible')
    cy.get('.sc-hKgILt').should('be.visible')
  });
  it('Verify right hand side bar icons', ()=>{
    cy.get('.noti-panel-container > :nth-child(1) > .p-2').should('be.visible')
    cy.get('.py-1').should('be.visible')
    cy.get('#chat-header').should('be.visible')
    cy.get('.chat-container > .px-2').should('be.visible')
  });

  //   cy.get(
  //     '.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer',
  //   ).click();
  //   cy.get('.css-1wa3eu0-placeholder').type('assess - rapid3{enter}');
  //   cy.get('.form-control').type('Automated task description');
  //   cy.get('[data-testid=task-member]').click();
  //   cy.get('[data-testid=task-priority]').click();
  //   cy.get('[data-testid=high]').click();
  //   cy.get('[data-testid=create-task]').click();
  //   // eslint-disable-next-line no-unused-expressions
  //   cy.get('[data-testid=task-duedate-required]').should('be.visible');
  //   cy.get('[data-testid=task-duedate]').click();
  //   cy.get('.col-10 > .btn-group > .dropdown-menu > :nth-child(1)').click();
  //   cy.get('[data-testid=create-task]').click();
  // });
});
