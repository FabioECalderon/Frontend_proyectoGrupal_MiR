describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get('#main-nav-dropdown').should('have.text', 'Zona de usuario');

    cy.contains('Encuentra tu cita');
    cy.get('form')
      .children()
      .first()
      .children()
      .first()
      .should('have.text', 'Especialidad');

    cy.get('#mostSearched');
  });
});
