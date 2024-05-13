describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://dev.geneticwear.id/login");
  })

  it("Ne-Kolom Diskosongkan", () => {
    cy.get('#submit').click();
    cy.get('#parsley-id-5 > .parsley-required').should('have.text', 'Alamat email harus diisi')
    cy.get('#parsley-id-7 > .parsley-required').should('have.text', 'Kata sandi harus diisi')
  });

  it("Ne-Email Tidak Valid", () => {
    cy.get('#usr_email').type("dev");
    cy.get('#password').type("password");
    cy.get('#submit').click();
    cy.get('.parsley-type').should('have.text', 'Alamat email tidak valid')
  });

  it("Ne-Kata sandi salah", () => {
    cy.get('#usr_email').type("dev.gw@mailinator.com");
    cy.get('#password').type("1");
    cy.get('#submit').click(); 
    cy.get('.toast').should('have.text', 'Kata sandi salah')
  });

  it.only("PO-Berhasil Login", () => {
    cy.get('#usr_email').type("sadm.gw@mailinator.com");
    cy.get('#password').type("password");
    cy.get('#submit').click(); 
  });
});
