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

  context('the list', () => {

    context('location based', () => {
      it("the 'TECH404' link works", () => {
        cy.contains('TECH404').click()
      })
      it("the 'Charleston Tech' link works", () => {
        cy.contains('Charleston Tech').click()
      })
      it("the 'memtech' link works", () => {
        cy.contains('memtech').click()
      })
      it("the 'NashDev' link works", () => {
        cy.contains('NashDev').click()
      })
    })

    context('it based', () => {
      it("the 'APIs You Won't Hate' link works", () => {
        cy.contains("APIs You Won't Hate").click()
      })
    })

    context('programming based', () => {
      it("the 'Larachat' link works", () => {
        cy.contains('Larachat').click()
      })
    })
  })
})