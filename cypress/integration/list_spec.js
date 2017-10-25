describe('The List Page', () => {
  beforeEach(() => {
    cy.visit('/list.html')
  })
  it('successfully loads', () => {})
  context('navbar', () => {
    it("the 'Home' link works", () => {
      cy.contains('Home').click({force: true})
      cy.title().should('not.equal', 'Error')
    })
    it("the 'About' link works", () => {
      cy.contains('About').click({force: true})
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