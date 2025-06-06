import userData from'../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myinfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menupage  = new MenuPage()
const myinfopage  = new MyInfoPage()


describe('Orange HRM Tests', () => {


  it('User Info Update- Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menupage.accessMyInfo()
    myinfopage.fillPersonalDetails('Gsuatvo','Aves', 'Rodrigues')
    myinfopage.fillEmployeeDetails('EmployId', 'OtherID', '1411','2025-06-12')
    myinfopage.fillStatus()
    myinfopage.saveForm()
    
  })

})