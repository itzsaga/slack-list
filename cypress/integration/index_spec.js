describe('The List Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('successfully loads', () => {})

  context('navbar', () => {
    it("'About' link works", () => {
      cy.contains('About').click({ force: true })
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
      it("'Denver Devs' link works", () => {
        cy.contains('Denver Devs').click()
      })
      it("'NewTech Colorado' link works", () => {
        cy.contains('NewTech Colorado').click()
      })
      it("'DCTech' link works", () => {
        cy.contains('DCTech').click()
      })
      it("'Suncoast Developers Guild' link works", () => {
        cy.contains('Suncoast Developers Guild').click()
      })
      it("'TECH404' link works", () => {
        cy.contains('TECH404').click()
      })
      it("'Chicago Tech' link works", () => {
        cy.contains('Chicago Tech').click()
      })
      it("'Louisville Tech / Louisville.IO' link works", () => {
        cy.contains('Louisville Tech / Louisville.IO').click()
      })
      it("'MidWestDevChat.com' link works", () => {
        cy.contains('MidWestDevChat.com').click()
      })
      it("'NYC Devs' link works", () => {
        cy.contains('NYC Devs').click()
      })
      it("'NYCTech' link works", () => {
        cy.contains('NYCTech').click()
      })
      it("'PIG Squad' link works", () => {
        cy.contains('PIG Squad').click()
      })
      it("'Portland Tech' link works", () => {
        cy.contains('Portland Tech').click()
      })
      it("'#techseattle' link works", () => {
        cy.contains('#techseattle').click()
      })
      it("'Phillydev' link works", () => {
        cy.contains('Phillydev').click()
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
        cy.contains('Android United').click()
      })
      it("'APIs You Won't Hate' link works", () => {
        cy.contains("APIs You Won't Hate").click()
      })
      it("'HackerX' link works", () => {
        cy.contains('HackerX').click()
      })
      it("'Hangops' link works", () => {
        cy.contains('Hangops').click()
      })
      it("'iOS Developers' link works", () => {
        cy.contains('iOS Developers').click()
      })
    })

    context('programming based', () => {
      it("'Larachat' link works", () => {
        cy.contains('Larachat').click()
      })
    })
  })
})
