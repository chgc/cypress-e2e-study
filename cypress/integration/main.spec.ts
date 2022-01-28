describe('Main', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visits the initial project page', () => {
    cy.contains('todos');
  });

  it('has two todo item in the list', () => {
    cy.get('.todo-list').children().should('have.length', 0);
  });

  it('add new todo, list should have 3 items', () => {
    // cy.get('.new-todo').type('abc').type('{enter}');
    cy.get('[data-cy=newTodo]').type('abc').type('{enter}');
    cy.get('.todo-list').children().should('have.length', 1);
  });
});
