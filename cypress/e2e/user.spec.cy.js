import userData from'../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menupage  = new MenuPage()


describe('Orange HRM Tests', () => {

const selectorslist = {
  firstNameField: "[name='firstName']",
  SecondNameField:  "[name='middleName']",
  LastNameFeild:"[name='middleName']",
  genericFiel: ".oxd-input--active",
  dateField: "[placeholder='yyyy-dd-mm']",
  dateCloseButton: ".--close",
  submiteButton: "[type='submit']",
  secondtemCombobox : ".oxd-select-dropdown > :nth-child(3)",
  thirdItemcombobox: ".oxd-select-dropdown > :nth-child(4)",
  genericCombobox: ".oxd-select-text-input"
}


  it.only('User Info Update- Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menupage.accessMyInfo()

  
    cy.get(selectorslist.firstNameField).clear().type('Gustavo')
    cy.get(selectorslist.SecondNameField).clear().type('Alves')
    cy.get(selectorslist.LastNameFeild).clear().type('Rodrigues')
    cy.get(selectorslist.genericFiel).eq(4).clear().type('Admin')
    cy.get(selectorslist.genericFiel).eq(5).clear().type('14198')
    cy.get(selectorslist.genericFiel).eq(7).clear().type('2025-03-10')
    cy.get(selectorslist.dateCloseButton).click
    cy.get(selectorslist.genericFiel).eq(8).clear().type('sinNumber teste')
    cy.get(selectorslist.submiteButton).eq(0).click({force: true})
    cy.get('body').should('contain','Successfully Updated')
    cy.get('.oxd-toast-close')

    cy.get(selectorslist.genericCombobox).eq(0).click({force: true})
    cy.get(selectorslist.secondtemCombobox).click()
    cy.get(selectorslist.genericCombobox).eq(1).click({force: true})
    cy.get(selectorslist.thirdItemcombobox).click()

    
  })

    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userFail.username)
    cy.get(selectorslist. passwordField).type(userData.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get("[role='alert']")
  })
})