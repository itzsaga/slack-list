describe('The About Page', () => {
  beforeEach(() => {
    cy.visit('/about')
  })
  it('successfully loads', () => {})
  context('navbar', () => {
    it("'Home' link works", () => {
      cy.contains('Home').click({ force: true })
      cy.title().should('not.equal', 'Error')
    })
  })
  context('footer', () => {
    it("'MIT License' link works", () => {
      cy.contains('MIT License').click()
    })
    it("'CC BY-NC-SA 4.0' link works", () => {
      // Clicking through runs creativecommons.org's own JavaScript, which
      // throws and fails the test. Requesting the href checks what this test
      // cares about -- the link points somewhere that responds -- without
      // executing their code.
      cy.contains('CC BY-NC-SA 4.0')
        .should('have.attr', 'href')
        .then((href) => {
          cy.request(href).its('status').should('eq', 200)
        })
    })
  })
})
