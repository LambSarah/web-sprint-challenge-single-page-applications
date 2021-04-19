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

describe('Select Size Test', function () {
  it('Select pizza size', function () {
    cy.get('[name=size]').should('have.value', 'Select');
    cy.get('.size').select('Small-8" (6 slices)');
    cy.get('.size').should('have.value', 'small');
  });
});

describe('Sauce Test', function () {
  it('Selects a pizza Sauce', function () {
    cy.get('[value="marinara"]').check().should('be.checked');
  });
});
describe('Select Multiple Toppings Test', function () {
  it('Selects multiple pizza toppings', function () {
    cy.get('[name=pepperoni]').check().should('be.checked');
    cy.get('[name=beef').check().should('be.checked');
    cy.get('[name=grilledChicken]').check().should('be.checked');
  });
});

describe('Submit Form Test', function () {
  it('submits pizza order form', function () {
    cy.get('Button').click({ force: true });
  });
});
