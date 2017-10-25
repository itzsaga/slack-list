describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('successfully loads', () => {})
  context('navbar', () => {
    it("'About' link works", () => {
      cy.contains('About').click({force: true})
      cy.title().should('not.equal', 'Error')
    })
    it("'The List' link works", () => {
      cy.contains('The List').click({force: true})
      cy.title().should('not.equal', 'Error')
    })
  })
  context('footer', () => {
    it("'MIT License' link works", () => {
      cy.contains('MIT License').click()
    })
    it("'CC BY-NC-SA 4.0' link works", () => {
      cy.contains('CC BY-NC-SA 4.0').click()
    })
  })
})