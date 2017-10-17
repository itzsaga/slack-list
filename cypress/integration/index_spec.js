describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
  it("clicking 'about' goes to the about page", () => {
    cy.visit('/')
    cy.contains('About').click()
    cy.title().should('not.equal', 'Error')
  })
})