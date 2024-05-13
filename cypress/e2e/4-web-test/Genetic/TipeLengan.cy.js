import { login } from "../support/login"; // Pastikan path file sudah sesuai

describe("Pesanan", () => {
  beforeEach(() => {
    // Lakukan login
    login("username", "password");

    // Tunggu hingga URL berubah menjadi URL halaman admin setelah login
    cy.url().should("include", "/admin/dashboard"); // Pastikan halaman dashboard dimuat dengan benar
    cy.wait(5000);
    cy.get(':nth-child(24) > .nav-link').click();
    cy.url().should("include", "/admin/sleeve_types");
  });
  it("Detail Daftar", () => {});
});
