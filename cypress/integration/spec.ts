describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Welcome');
    cy.contains('e2e-study app is running!');
  });
});
