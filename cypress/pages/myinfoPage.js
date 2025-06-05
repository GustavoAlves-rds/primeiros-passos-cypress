class MyInfoPage{
    selectorsList(){
      const selectors = {
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

        return selectors
    }

    fillPersonalDetails(firstName, secondName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().SecondNameField).clear().type(secondName)
        cy.get(this.selectorsList().LastNameFeild).clear().type(lastName)
      }
       

     fillEmployeeDetails(employeeID, otherID, driversLicense, driversLicenseDate){
        cy.get(this.selectorsList().genericFiel).eq(3).clear().type(employeeID)
        cy.get(this.selectorsList().genericFiel).eq(4).clear().type(otherID)
        cy.get(this.selectorsList().genericFiel).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().genericFiel).eq(6).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
     }

     saveForm(){
        cy.get(this.selectorsList().submiteButton).eq(0).click({force: true})
        cy.get('body').should('contain','Successfully Updated')
        cy.get('.oxd-toast-close')
     }

     fillStatus(){
        cy.get(this.selectorsList().genericCombobox).eq(0).click({force: true})
        cy.get(this.selectorsList().secondtemCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click({force: true})
        cy.get(this.selectorsList().thirdItemcombobox).click()

     }

    }
    export default MyInfoPage