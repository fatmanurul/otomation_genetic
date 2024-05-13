describe("Atur Ulang Kata Sandi", () => {
    beforeEach(() => {
      cy.visit("https://dev.geneticwear.id/password/reset");
    })

    it("Ne-Email tidak terdaftar", () => {
        cy.get('#usr_email').type('halo@gmail.com')
        cy.get('#submit').click()
        cy.get('.toast').should('have.text', 'Terjadi kesalahan sistem')
      });

    it("Ne-Kolom email tidak diisi", () => {
        cy.get('#submit').click()
        cy.get('.parsley-required').should('have.text', 'Alamat email harus diisi')
      });

    it("Ne-Email Tidak Valid", () => {
        cy.get('#usr_email').type('hal')
        cy.get('#submit').click()
        cy.get('.parsley-type').should('have.text', 'Alamat email tidak valid')
      });

    it("Po-Dapat mengatur ulang kata sandi", () => {
        cy.get('#usr_email').type('abdul@gmail.com')
        cy.get('#submit').click()
      });

      it("Po-Kembali ke Login", () => {
        cy.get('.mt-3 > a').click()
      });
      
});