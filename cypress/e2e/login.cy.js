describe('template spec', () => {
  it('passes', () => {
    cy.fixture('user.json').then((user) => {
      cy.visit('/login');

      cy.get('input[name="email"]').type(user.email);
      cy.get('input[name="password"]').type(user.password);

      cy.get('button[type="submit"]').click();

      cy.contains(`Hola ${user.name}`);
    });
  });
});
