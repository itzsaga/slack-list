describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
  context('navbar', () => {
    it("the 'about' link works", () => {
      cy.visit('/')
      cy.contains('About').click({force: true})
      cy.title().should('not.equal', 'Error')
    })
  })
  context('footer', () => {
    it("the 'MIT License' link works", () => {
      cy.visit('/')
      cy.contains('MIT License').click()
    })
    it("the 'CC BY-NC-SA 4.0' link works", () => {
      cy.visit('/')
      cy.contains('CC BY-NC-SA 4.0').click()
    })
  })
})