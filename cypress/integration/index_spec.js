describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('successfully loads', () => {})
  context('navbar', () => {
    it("the 'About' link works", () => {
      cy.contains('About').click({force: true})
      cy.title().should('not.equal', 'Error')
    })
    it("the 'The List' link works", () => {
      cy.contains('The List').click({force: true})
      cy.title().should('not.equal', 'Error')
    })
  })
  context('footer', () => {
    it("the 'MIT License' link works", () => {
      cy.contains('MIT License').click()
    })
    it("the 'CC BY-NC-SA 4.0' link works", () => {
      cy.contains('CC BY-NC-SA 4.0').click()
    })
  })
})