import userData from'../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

const selectorslist = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTopBar: ".oxd-topbar-header-breadcrumb-module",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role='alert']"
}


  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorslist. passwordField).type(userData.userSuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardGrid)
  })

    it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userFail.username)
    cy.get(selectorslist. passwordField).type(userData.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get("[role='alert']")
  })
})