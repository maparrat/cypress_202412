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

