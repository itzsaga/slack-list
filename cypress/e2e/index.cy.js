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
      it("'AfriSplash Remotely' link works", () => {
        cy.contains('AfriSplash Remotely').click()
      })
      it("'Lekker Tech' link works", () => {
        cy.contains('Lekker Tech').click()
      })
      it("'EuropeanStartups' link works", () => {
        cy.contains('EuropeanStartups').click()
      })
      it("'EuropeanDevExplorer' link works", () => {
        cy.contains('EuropeanDevExplorer').click()
      })
      it("'DevDK' link works", () => {
        cy.contains('DevDK').click()
      })
      it("'Magic City Tech' link works", () => {
        cy.contains('Magic City Tech').click()
      })
      it("'Tech256' link works", () => {
        cy.contains('Tech256').click()
      })
      it("'js.la' link works", () => {
        cy.contains('js.la').click()
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
      it("'Idaho Tech Community' link works", () => {
        cy.contains('Idaho Tech Community').click()
      })
      it("'Chicago Tech' link works", () => {
        cy.contains('Chicago Tech').click()
      })
      it("'Startup Iowa Chat' link works", () => {
        cy.contains('Startup Iowa Chat').click()
      })
      it("'Bluegrass Developers Guild' link works", () => {
        cy.contains('Bluegrass Developers Guild').click()
      })
      it("'Louisville Tech' link works", () => {
        cy.contains('Louisville Tech').click()
      })
      it("'BetaNYC' link works", () => {
        cy.contains('BetaNYC').click()
      })
      it("'NYCTech' link works", () => {
        cy.contains('NYCTech').click()
      })
      it("'Techlahoma' link works", () => {
        cy.contains('Techlahoma').click()
      })
      it("'PIG Squad' link works", () => {
        cy.contains('PIG Squad').click()
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
      it("'Boro.Dev' link works", () => {
        cy.contains('Boro.Dev').click()
      })
      it("'KnoxDev' link works", () => {
        cy.contains('KnoxDev').click()
      })
      it("'memtech' link works", () => {
        cy.contains('memtech').click()
      })
      it("'NashDev' link works", () => {
        cy.contains('NashDev').click()
      })
      it("'Open Austin' link works", () => {
        cy.contains('Open Austin').click()
      })
      it("'Madison Slack' link works", () => {
        cy.contains('Madison Slack').click()
      })
      it("'Milwaukee Slack' link works", () => {
        cy.contains('Milwaukee Slack').click()
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
      it("'Rands Leadership link works", () => {
        cy.contains('Rands Leadership').click()
      })
    })

    context('programming based', () => {
      it("'Larachat' link works", () => {
        cy.contains('Larachat').click()
      })
      it("'Prisma' link works", () => {
        cy.contains('Prisma').click()
      })
    })

    context('miscellaneous based', () => {
      it("'Kingdom Builders' link works", () => {
        cy.contains('Kingdom Builders').click()
      })
      it("'Penny University' link works", () => {
        cy.contains('Penny University').click()
      })
    })
  })
})
