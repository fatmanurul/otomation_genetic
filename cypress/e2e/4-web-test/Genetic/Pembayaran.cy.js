import { login } from '../support/login'; // Pastikan path file sudah sesuai
import pembayaranPage from "../support/pageObject/genetic/pembayaran.page";

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
        pembayaranPage.ClickDetail1()
        pembayaranPage.ClickDetailPmbyrn()
    })

    it("CetakStruk", () => {
        pembayaranPage.ClickDetail1()
        pembayaranPage.ClickDetailPmbyrn()
        pembayaranPage.ClickBtnCtkStrk()
    })

    it("NE-BatalkanPembayaran-KolomDikosongkan", () => {
        pembayaranPage.ClickDtail2()
        pembayaranPage.ClickDetailPmbyrn()
        pembayaranPage.ClickBtlknPmbyrn()
        pembayaranPage.ClickBtlknPmbyrn()
        cy.get(pembayaranPage.AlrtRqrdPssw).should('have.text','Kata sandi harus diisi')
    })

    it("PE-BatalkanPembayaran", () => {
        pembayaranPage.ClickDetail1()
        pembayaranPage.ClickDetailPmbyrn()
        pembayaranPage.ClickBtlknPmbyrn()
        cy.get(pembayaranPage.AlsnBtl).type('haha')
        cy.get(pembayaranPage.PsswAlsn).type('password')
        pembayaranPage.ClickBtlknPmbyrn()
    })
});

