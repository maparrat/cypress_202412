import {faker} from '@faker-js/faker';
Cypress.Commands.add('login', () => {
  cy.visit('http://localhost:2368/ghost/');
 

  cy.get('#identification').type('monkey@gmail.com'); 
  cy.get('#password').type('123456789a'); 

  cy.get('button[type="submit"]').click();
  cy.wait(2000);

  cy.url().should('include', '/dashboard');

  cy.wait(2000);
});


// GIVEN: User is logged in
describe('Crear nueva pagina con dominio diferente ', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User creates a new page with a name "test" content test
  it('Crea una nueva pagina con el nombre "test"', () => {
    cy.visit('http://localhost:2368/ghost/#/editor/page');
    cy.wait(2000);

    // WHEN: User types the known tag name "test"
    const url = faker.internet.url();
    cy.get('[data-test-editor-title-input]') // Target using data-test attribute
    .type('This is the page title');
    cy.get('[data-koenig-dnd-container]') // Target using data-test attribute
    .type('This is the page content');
    cy.wait(1000);
    cy.get('[data-test-psm-trigger]')
    .should('be.visible') // Optional assertion for visibility
    .click(); // Click the button
    cy.wait(1000);
    cy.get('#url').type(url);
    cy.wait(1000);
    cy.get('[data-test-psm-trigger]')
    .should('be.visible') // Optional assertion for visibility
    .click(); // Click the button
    cy.wait(1000);
    cy.contains('Publish').click();

    cy.wait(5000);

    // THEN: The new tag with the known name "test" should be created

    cy.contains('Continue, final review').click();
    cy.wait(2000);
    cy.contains('Publish page, right now').click();
  });
});


// GIVEN: User is logged in
describe('Crear nueva pagina,mostrar  preview ', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User creates a new page must show the preview
  it('Crea una nueva pagina con el nombre "test"', () => {
    cy.visit('http://localhost:2368/ghost/#/editor/page');
    cy.wait(2000);

    // WHEN: User types the known tag name "test"
    
    cy.get('[data-test-editor-title-input]') // Target using data-test attribute
    .type('This is the page title');
    cy.get('[data-koenig-dnd-container]') // Target using data-test attribute
    .type('This is the page content');
    
    cy.contains('Preview').click();

    cy.wait(5000);

    // THEN: The new tag with the known name "test" should be created
    cy.contains('Publish');

  
  });
});


// GIVEN: User is logged in
describe('Crear nueva miembro ', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });
    it('Crea una nuevo miembro', () => {
    // THEN: User creates a new memeber
    cy.visit('http://localhost:2368/ghost/#/members/new');
    cy.wait(2000);

    // WHEN: User types the known tag name "test"
    const email = faker.internet.email();
    cy.get('#member-name') // Target using data-test attribute
    .type('miembro1');
    cy.get('#member-email') // Target using data-test attribute
    .type(email);

    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The new tag with the known name "test" should be created

    cy.contains('miembro1').should('be.visible');
  });
});

// GIVEN: User is logged in
describe('Crear nueva pagina ', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User creates a new page with a name "test" content test
  it('Crea una nueva pagina con el nombre "test"', () => {
    cy.visit('http://localhost:2368/ghost/#/editor/page');
    cy.wait(2000);

    // WHEN: User types the known tag name "test"
    
    cy.get('[data-test-editor-title-input]') // Target using data-test attribute
    .type('This is the page title');
    cy.get('[data-koenig-dnd-container]') // Target using data-test attribute
    .type('This is the page content');
    
    cy.contains('Publish').click();

    cy.wait(5000);

    // THEN: The new tag with the known name "test" should be created

    cy.contains('Continue, final review').click();
    cy.wait(2000);
    cy.contains('Publish page, right now').click();
  });
});

// GIVEN: User is logged in
describe('Crear nueva etiqueta ', () => {
  beforeEach(() => {
    // WHEN: User logs in before each test
    cy.login();
  });

  // THEN: User creates a new tag with a known name "test"
  it('Crea una nueva etiqueta con el nombre "test"', () => {
    cy.visit('http://localhost:2368/ghost/#/tags/new');
    cy.wait(2000);

    // WHEN: User types the known tag name "test"
    const tagName = 'test';
    cy.get('#tag-name')
      .should('be.visible')
      .type(tagName);

    // WHEN: User clicks on the "Save" button
    cy.contains('Save').click();

    cy.wait(5000);

    // THEN: The new tag with the known name "test" should be created
  });
});

