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
    addTodo('abc');
    getTodoList().children().should('have.length', 1);
  });

  describe('work with one todo', () => {
    beforeEach(() => {
      for (let i = 0; i < 3; i++) {
        addTodo(i.toString());
      }
    });

    it('edit first item', () => {
      edtingItem();
      cy.get('@firstItem').should('have.class', 'editing');
      cy.get('@firstItem').find('input.edit').should('exist');
    });

    it('edit first item value and enter save', () => {
      edtingItem();
      cy.get('@firstItem').find('input.edit').type('hello').type('{enter}');
      cy.get('@firstItem').should('contain.text', '0hello');
    });
  });

  it('complete todo item', () => {
    addTodo('0');
    getTodoList().children('li:first').as('firstItem');
    cy.get('@firstItem').find('.toggle').check();
    cy.get('@firstItem').should('have.class', 'completed');
  });

  it('remove todo item', () => {
    addTodo('0');
    getTodoList().children('li:first').as('firstItem');
    cy.get('@firstItem').find('.destroy').click({ force: true });
    getTodoList().children().should('have.length', 0);
  });
});

function edtingItem() {
  getTodoList().children('li:first').as('firstItem');
  cy.get('@firstItem').find('label').dblclick();
}

function getTodoList() {
  return cy.get('.todo-list');
}

function addTodo(content: string) {
  cy.get('[data-cy=newTodo]').type(content).type('{enter}');
}
