import { login } from '../support/login'; // Pastikan path file sudah sesuai

describe("Dashboard", () => {
    beforeEach(() => {
        // Lakukan login
        login('username', 'password');

        // Tunggu hingga URL berubah menjadi URL halaman admin setelah login
        cy.url().should('include', '/admin/dashboard');
        
    });

    it("Tombol Sidebar", () => {
        // Pastikan tombol sidebar dapat diakses
        cy.get('.main-header > :nth-child(1) > .nav-item > .nav-link').should('be.visible').click();
    });

    it("Akun", () => {
        // Pastikan tombol profil dapat diakses
        cy.get('.user-profile > .img-circle').should('be.visible').click();
    });

    it("PO-Rentang Hari ini", () => {
        // Pastikan tombol tanggal dapat diakses
        cy.get('#dateRange').should('be.visible').click();
        cy.get('[data-range-key="Hari Ini"]').click();
        // cy.get('ul > .active').click();
        // cy.get('[data-range-key="Custom Range"]').click();
    });

    it("PO-Kemarin", () => {
        cy.get('[data-range-key="Kemarin"]').click();
    });

    it("PO-7 hari terakhir", () => {
        cy.get('[data-range-key="7 Hari Terakhir"]').click();
    });

    it("PO-30 hari terakhir", () => {
        cy.get('[data-range-key="30 Hari Terakhir"]').click();
    });

    it("PO-Bulan Lalu", () => {
        cy.get('[data-range-key="Bulan Lalu"]').click();
    });

    it("PO-Semua", () => {
        cy.get('[data-range-key="Semua"]').click().click();
    });
});
