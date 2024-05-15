class LoginPage {
    Email = '#usr_email'
    Passwrd = '#password'
    LgnBtn = '#submit'
    ErrorMssgEmail = '.parsley-type' 
    ErrorMssgPswrd = '.toast'   
    RqiredEmail = '#parsley-id-5 > .parsley-required'
    RqiredPsswrd = '#parsley-id-7 > .parsley-required'
    ClikAkun = '.user-profile > .img-circle'
    Logout = '[href="https://dev.geneticwear.id/logout"]'
    DetailAkun = '[href="https://dev.geneticwear.id/customer/account"]'
    KolomNamaDetailAkun = '#iUserName'


    ClickLoginBtn(){
        cy.get(this.LgnBtn).click()
    }

    ClickAkun(){
        cy.get(this.ClikAkun).click()
    }

    ClickLogout() {
        cy.get(this.Logout).click()
    }

    // ClickDtailAkun(){
    //     cy.get(this.DetailAkun).click()
    // }
}

export default new LoginPage()