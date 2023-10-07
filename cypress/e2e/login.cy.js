describe('template spec', () => {
  beforeEach(function () {
    cy.fixture('user.json').as('user');
  });

  it.only('Passes with correct credentials', function () {
    cy.visit('/login');

    cy.get('input[name="email"]').type(this.user.email);
    cy.get('input[name="password"]').type(this.user.password);

    cy.get('button[type="submit"]').click();

    cy.contains(`Hola ${this.user.name}`);
  });

  it('Fails with incorrect credentials', function () {
    cy.visit('/login');

    cy.get('input[name="email"]').type(this.user.email);
    cy.get('input[name="password"]').type(1234567);

    cy.get('button[type="submit"]').click();

    cy.contains(`invalid email or password`);
  });
});
