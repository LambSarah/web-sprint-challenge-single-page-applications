// pizzaFormTest.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Visit Site Test', function () {
  it('Visits site', function () {
    cy.visit('http://localhost:3000/');
  });
});

describe('Open Pizza Order Form Test', function () {
  it('Clicks the pizza button and opens the order form.', function () {
    cy.visit('http://localhost:3000/');
    cy.get('[name=pizzaButton]').click();
  });
});

describe('Add Name Test', function () {
  it('Opens pizza order form and adds name to nameInput', function () {
    cy.visit('http://localhost:3000/pizza');
    cy.get('[name=nameInput]').type('Sarah').should('have.value', 'Sarah');
  });
});

describe('Select Multiple Toppings Test', function () {
  it('Selects multiple pizza toppings', function () {
    cy.get('[name=pepperoni]')
      .check()
      .then(cy.get('[name=beef]').check().then(cy.get('[name=onions]').check()))
      .invoke('val')
      .should('deep.equal', ['pepperoni', 'beef', 'onions']);
  });
});
