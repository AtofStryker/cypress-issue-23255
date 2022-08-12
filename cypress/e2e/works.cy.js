describe('working spec', () => {
  before(() => {
    cy.visit('https://example.cypress.io')
    cy.get('a[href="/commands/querying"]').should('exist').and('be.visible')
  })

  it('should validate 0', () => {
    cy.get('a:contains("get")').should('exist').and('be.visible');
  });

  it('should validate 1', () => {
    cy.get('a:contains("contains")').should('exist').and('be.visible');
  });

  it('should validate 2', () => {
    cy.get('a:contains("within")').should('exist').and('be.visible');
  });
})