describe('ag grid tests', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('renders the grid', () => {
    cy.get('#staff_grid', { timeout: 10000 }).should('be.visible');
  });
});
