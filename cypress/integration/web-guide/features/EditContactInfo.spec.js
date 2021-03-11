import { randomPassword } from '../../../functions'
const randomWord = randomPassword(1);

describe('Edit member info', () => {
  before(() => {
    cy.login();
  });
  it('Open a member search', () => {
    cy.visit('/search/members');
  });
  it('Open member profile', () => {
    cy.get(
      ':nth-child(1) > :nth-child(1) > :nth-child(1) > .td-container > a > .name',
    ).click();
    cy.wait(1000);
  });
  it('Open contact info dropdown', () => {
    cy.get('.profile-data > :nth-child(1) > .w-100').click();
    cy.wait(3000)
  });
  it('Click on Edit Contact info', () => {
    cy.get('#edit-info-btn').click();
  });
  it('Edit the informations', () => {
    //Update Preferred Language and Pronouns
    cy.get('[data-testid=patientPreferredLanguageId] > .selectR > .css-yk16xz-control > .css-1hwfws3').click()
    cy.wait(2000)
    cy.get('.css-26l3qy-menu').contains('English').click()
    cy.get(':nth-child(2) > .col > .selectR > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r').click()
    cy.wait(2000)
    cy.get('.css-26l3qy-menu').contains('She/her/hers').click()

    //Update home and mailing address
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .google-places-autocomplete > #react-google-places-autocomplete-input')
      .clear()
      .type('100 Boyd Road')
    cy.get('[data-testid="patientHomeAddressFields.addressLine2"]')
      .clear()
      .type('APT.123')
    cy.get('[data-testid="patientHomeAddressFields.city"]')
      .clear()
      .type('Concord')
    cy.get('[data-testid="patientHomeAddressFields.stateProvince"]')
      .clear()
      .type('California')
    cy.get('[data-testid="patientHomeAddressFields.postalCode"]')
      .clear()
      .type(94523)
    
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .google-places-autocomplete > #react-google-places-autocomplete-input')
      .clear()
      .type ('8401 Live Oak Rd')
    cy.get('[data-testid="patientMailingAddressFields.addressLine2"]')
      .clear()
      .type('Bulding 321')
    cy.get('[data-testid="patientMailingAddressFields.city"]')
      .clear()
      .type('Harrisburg')
    cy.get('[data-testid="patientMailingAddressFields.stateProvince"]')
      .clear()
      .type('NC')
    cy.get('[data-testid="patientMailingAddressFields.postalCode"]')
      .clear()
      .type('28075')
    cy.wait(3000)
    //Upadte mailing address as home address
    // cy.get('.mailing-addr-checkbox').check()
    // cy.wait(2000)  

    //Update home phone, mobile phone and e-mail.
    cy.get('.modal-body')
    cy.get('[data-testid=patientHomePhone-phone-number]') //get('[data-testid=query-input-homePhone]')
      .clear()
      .type(9252770102); //38979123456

    cy.get('.modal-body');
    cy.get('[data-testid=patientMobilePhone-phone-number]')  //cy.get('[data-testid=query-input-mobile]')
      .clear()
      .type(9252770304); //38979654321

    cy.get('.modal-body');
    cy.get('[data-testid=query-input-email]')
      .clear()
      .type(`${randomWord}@test.com`);

  });
  it('Click on Edit Contact info & Check if Info is updated', () => {
    cy.get('.ml-auto').contains('Save Changes').click()
    // cy.contains('Save changes').click();
    cy.get('.profile-data > :nth-child(1) > .w-100').click();
    cy.get('.profile-data > :nth-child(1) > .w-100').click()
    // cy.get('#edit-info-btn').click()
    //Verification email, home amd mobile phone
    cy.get('.blocks > :nth-child(6)').contains(`${randomWord}@test.com`)
    cy.get('.blocks > :nth-child(6)').contains(9252770102)
    cy.get('.blocks > :nth-child(6)').contains(9252770304)
    // Verification Language and Pronouns
    cy.get('.blocks > :nth-child(2)').contains('English')
    cy.get('.blocks > :nth-child(2)').contains('She/her/hers')
    //Verification home and mailing address
    cy.get('[data-testid=collapse] > :nth-child(4)') 
      .contains('APT.123, Concord, California, 94523')
      cy.get('[data-testid=collapse] > :nth-child(4)')
      .contains('Bulding 321, Harrisburg, NC, 28075')
  }); 
});
