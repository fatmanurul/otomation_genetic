import { login } from '../support/login'; // Pastikan path file sudah sesuai

describe("TipeUkuran", () => {
    beforeEach(() => {
        // Lakukan login
        login('username', 'password');
        // Tunggu hingga URL berubah menjadi URL halaman admin setelah login
        cy.url().should('include', '/admin/dashboard'); // Pastikan halaman dashboard dimuat dengan benar
        cy.wait(5000);
        cy.get(':nth-child(23) > .nav-link').click() // Klik pada elemen menu yang mengarahkan ke halaman pesanan
        cy.url().should('include', '/admin/size_types'); // Verifikasi bahwa navigasi berhasil ke halaman pesanan
    });
    it("Detail Daftar", () => {
        cy.get('label > input').type('sumi')
        cy.get('tbody > :nth-child(1) > .text-right').click()
        cy.get('.dtr-data > .btn').click()
        // cy.get('.btn-success').click()
    })

    
})