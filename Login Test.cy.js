///reference type="cypress"/>


describe('Google Test', () => {
  it('Valid credentials', () => {

    cy.visit('https://books.dhoon.co/')
    cy.get('#loginForm_email').type('bipin@dhoon.co')
    cy.get('#loginForm_password').type('bipin666')
    cy.contains('Login').click()


  })


  it('Invalid email', () => {

    cy.visit('https://books.dhoon.co/')
    cy.get('#loginForm_email').type('bipin1@dhoon.co')
    cy.get('#loginForm_password').type('bipin666')
    cy.contains('Login').click()
    cy.contains('Request failed with status code 500').and('be.visible')

  })

  it('Invalid password', () => {

    cy.visit('https://books.dhoon.co/')
    cy.get('#loginForm_email').type('bipin@dhoon.co')
    cy.get('#loginForm_password').type('bipin000')
    cy.contains('Login').click()


  })

})