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
      it("'Software Craftsmanship' link works", () => {
        cy.contains('Software Craftsmanship').click()
      })
      it("'NewTech Colorado' link works", () => {
        cy.contains('NewTech Colorado').click()
      })
      it("'Suncoast Developers Guild' link works", () => {
        cy.contains('TECH404').click()
      })
      it("'TECH404' link works", () => {
        cy.contains('TECH404').click()
      })
      it("'Louisville Tech / Louisville.IO' link works", () => {
        cy.contains('Louisville Tech / Louisville.IO').click()
      })
      it("'MidWestDevChat.com' link works", () => {
        cy.contains('MidWestDevChat.com').click()
      })
      it("'New York Tech' link works", () => {
        cy.contains('New York Tech').click()
      })
      it("'Portland Tech' link works", () => {
        cy.contains('Portland Tech').click()
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
      it("'KnoxDev' link works", () => {
        cy.contains('KnoxDev').click()
      })
      it("'DFWStartupCommunity' link works", () => {
        cy.contains('DFWStartupCommunity').click()
      })
      it("'Open Austin' link works", () => {
        cy.contains('Open Austin').click()
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