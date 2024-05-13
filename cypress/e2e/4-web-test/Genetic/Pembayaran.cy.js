import { login } from '../support/login'; // Pastikan path file sudah sesuai

describe("Pembayaran", () => {
    beforeEach(() => {
        // Lakukan login
        login('username', 'password');

        // Tunggu hingga URL berubah menjadi URL halaman admin setelah login
        cy.url().should('include', '/admin/dashboard'); // Pastikan halaman dashboard dimuat dengan benar
        cy.wait(5000);
        cy.get(':nth-child(8) > .nav-link').click(); // Klik pada elemen menu yang mengarahkan ke halaman pesanan
        cy.url().should('include', '/admin/payments'); // Verifikasi bahwa navigasi berhasil ke halaman pesanan
    });

    it("DetailPembayaran", () => {
        cy.get(':nth-child(2) > .sorting_1').click()
        cy.get('.dtr-data > .btn').click()
    })

    it("CetakStruk", () => {
        cy.get(':nth-child(2) > .sorting_1').click()
        cy.get('.dtr-data > .btn').click()
        cy.get('.btn-default').click()
    })

    it.only("NE-BatalkanPembayaran-KolomDikosongkan", () => {
        cy.get(':nth-child(1) > .sorting_1').click()
        cy.get('.dtr-data > .btn').click()
        cy.get('.btn-danger').click()
        cy.get('.col-sm-10 > .btn').click()
        cy.get('#parsley-id-3 > .parsley-required').should('have.text','Kata sandi harus diisi')
    })

    it("PE-BatalkanPembayaran", () => {
        cy.get(':nth-child(2) > .sorting_1').click()
        cy.get('.dtr-data > .btn').click()
        cy.get('.btn-danger').click()
        cy.get('.note-editable').type('haha')
        cy.get('#iUserPassword').type('password')
        cy.get('.col-sm-10 > .btn').click()
    })
});

