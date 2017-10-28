describe('The List Page', () => {
  beforeEach(() => {
    cy.visit('/list.html')
  })

  it('successfully loads', () => {})

  context('navbar', () => {
    it("'Home' link works", () => {
      cy.contains('Home').click({force: true})
      cy.title().should('not.equal', 'Error')
    })
    it("'About' link works", () => {
      cy.contains('About').click({force: true})
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

  context('the list', () => {

    context('location based', () => {
      it("'DevDK' link works", () => {
        cy.contains('DevDK').click()
      })
      it("'TECH404' link works", () => {
        cy.contains('TECH404').click()
      })
      it("'Charleston Tech' link works", () => {
        cy.contains('Charleston Tech').click()
      })
      it("'memtech' link works", () => {
        cy.contains('memtech').click()
      })
      it("'NashDev' link works", () => {
        cy.contains('NashDev').click()
      })
    })

    context('it based', () => {
      it("'Android United' link works", () => {
        cy.contains("Android United").click()
      })
      it("'APIs You Won't Hate' link works", () => {
        cy.contains("APIs You Won't Hate").click()
      })
      it("'HackerX' link works", () => {
        cy.contains("HackerX").click()
      })
      it("'Hangops' link works", () => {
        cy.contains("Hangops").click()
      })
      it("'iOS Developers' link works", () => {
        cy.contains("iOS Developers").click()
      })
    })

    context('programming based', () => {
      it("'Larachat' link works", () => {
        cy.contains('Larachat').click()
      })
    })
  })
})