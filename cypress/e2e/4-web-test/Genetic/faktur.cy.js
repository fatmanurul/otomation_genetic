import { login } from '../support/login'; // Pastikan path file sudah sesuai
import fakturPage from '../support/pageObject/genetic/faktur.page';


describe("Faktur", () => {
    beforeEach(() => {
        // Lakukan login
        login('username', 'password');

        // Tunggu hingga URL berubah menjadi URL halaman admin setelah login
        cy.url().should('include', '/admin/dashboard'); // Pastikan halaman dashboard dimuat dengan benar
        cy.wait(5000);
        cy.get(':nth-child(7) > .nav-link').click(); // Klik pada elemen menu yang mengarahkan ke halaman pesanan
        cy.url().should('include', '/admin/invoices'); // Verifikasi bahwa navigasi berhasil ke halaman pesanan
    });

    it("Detail Daftar", () => {
        fakturPage.ClickDtail()
        fakturPage.ClickDtailFaktur()
    })

});


