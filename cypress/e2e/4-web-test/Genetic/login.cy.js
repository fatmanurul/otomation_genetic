import loginPage from "../support/pageObject/genetic/login.page";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://dev.geneticwear.id/login");
  })

  it("Ne-Kolom Diskosongkan", () => {
    loginPage.ClickLoginBtn()
    cy.get(loginPage.RqiredEmail).should('have.text', 'Alamat email harus diisi')
    cy.get(loginPage.RqiredPsswrd).should('have.text', 'Kata sandi harus diisi')
  });

  it("Ne-Email Tidak Valid", () => {
    cy.get(loginPage.Email).type("dev");
    cy.get(loginPage.Passwrd).type("password");
    loginPage.ClickLoginBtn()
    cy.get(loginPage.ErrorMssgEmail).should('have.text', 'Alamat email tidak valid')
  });

  it("Ne-Kata sandi salah", () => {
    cy.get(loginPage.Email).type("dev.gw@mailinator.com");
    cy.get(loginPage.Passwrd).type("1");
    loginPage.ClickLoginBtn() 
    cy.get(loginPage.ErrorMssgPswrd).should('have.text', 'Kata sandi salah')
  });

  it("PO-Berhasil Login", () => {
    cy.get(loginPage.Email).type("sadm.gw@mailinator.com");
    cy.get(loginPage.Passwrd).type("password");
    loginPage.ClickLoginBtn() 
  });

  it("PO-Logout", () => {
    cy.get(loginPage.Email).type("sadm.gw@mailinator.com");
    cy.get(loginPage.Passwrd).type("password");
    loginPage.ClickLoginBtn(); 
    loginPage.ClickAkun();
    loginPage.ClickLogout();
  });

  it.only("PO-DetailAkun", () => {
    cy.get(loginPage.Email).type("egi@gmail.com");
    cy.get(loginPage.Passwrd).type("password");
    loginPage.ClickLoginBtn(); 
    loginPage.ClickAkun();
    cy.get(loginPage.DetailAkun).click();
    cy.get(loginPage.KolomNamaDetailAkun).type('egi santoso')
  });

 });
