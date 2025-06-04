import userData from'../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

const selectorslist = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTopBar: ".oxd-topbar-header-breadcrumb-module",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role='alert']",
  myInfoButton : '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: "[name='firstName']",
  SecondNameField:  "[name='middleName']",
  LastNameFeild:"[name='middleName']",
  genericFiel: ".oxd-input--active",
  dateField: "[placeholder='yyyy-dd-mm']",
  daeCloseButton: ".--close",
  submiteButton: "[type='submit']",
}


  it.only('User Info Update- Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorslist. passwordField).type(userData.userSuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardGrid)
    cy.get(selectorslist.myInfoButton).click()
    cy.get(selectorslist.firstNameField).clear().type('Gustavo')
    cy.get(selectorslist.SecondNameField).clear().type('Alves')
    cy.get(selectorslist.LastNameFeild).clear().type('Rodrigues')
    cy.get(selectorslist.genericFiel).eq(4).clear().type('Admin')
    cy.get(selectorslist.genericFiel).eq(5).clear().type('14198')
    cy.get(selectorslist.genericFiel).eq(7).clear().type('2025-03-10')
    cy.get(selectorslist.daeCloseButton).click
    cy.get(selectorslist.genericFiel).eq(8).clear().type('sinNumber teste')
    cy.get(selectorslist.submiteButton).eq(0).click()
    cy.get('body').should('contain','Successfully Updated')
  })

    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userFail.username)
    cy.get(selectorslist. passwordField).type(userData.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get("[role='alert']")
  })
})