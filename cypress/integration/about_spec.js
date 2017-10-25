describe('The About Page', () => {
  beforeEach(() => {
    cy.visit('/about.html')
  })
  it('successfully loads', () => {})
  context('navbar', () => {
    it("'Home' link works", () => {
      cy.contains('Home').click({force: true})
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