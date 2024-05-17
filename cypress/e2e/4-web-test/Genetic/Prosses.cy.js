import { login } from '../support/login'; // Pastikan path file sudah sesuai
import 'cypress-file-upload'; // Menambahkan dukungan untuk mengunggah file
import prossesPage from '../support/pageObject/genetic/prosses.page';

describe("Proses", () => {
    beforeEach(() => {
        // Lakukan login
        login('username', 'password');

        // Tunggu hingga URL berubah menjadi URL halaman admin setelah login
        cy.url().should('include', '/admin/dashboard'); // Pastikan halaman dashboard dimuat dengan benar
        cy.wait(5000);
        cy.get(':nth-child(6) > .nav-link').click(); // Klik pada elemen menu yang mengarahkan ke halaman pesanan
        cy.url().should('include', '/admin/processes'); // Verifikasi bahwa navigasi berhasil ke halaman pesanan
    });

    it("DetailProsses ", () => {
        prossesPage.ClickDtailPsnan()
        prossesPage.ClickDtailPrssses()
    });

    it("Ne-BatalkanProsses ", () => {
       prossesPage.ClickDtailPsnan()
       prossesPage.ClickDtailPrssses()
        // batalkan prosses
       prossesPage.ClickBtlkn()
        cy.get('.col-sm-10 > .btn').click();
    });

    it("BatalkanProsses dengan Alasan", () => {
         prossesPage.ClickDtailPsnan()
        prossesPage.ClickDtailPrssses()
        prossesPage.ClickBtlkn()
        cy.get(prossesPage.AlsnDbtlkn).type('alasan');
        cy.get(prossesPage.AlsnDbtlkn).type('password');
        cy.get('.col-sm-10 > .btn').click();
    });

    it("Pembayaran", () => {
        cy.get(prossesPage.DetailP).click();
        prossesPage.ClickProssesSelesai()
        cy.get(prossesPage.TglPmbyrn).type('2024-05-08');
        // Tindakan mengklik elemen input file untuk memilih gambar
        cy.get(prossesPage.BuktiPmbyrn).click();
        // Mendapatkan file gambar dari direktori fixture dan mengunggahnya
        cy.fixture('brownis bunga1.jpg').then(fileContent => {
            cy.uploadImage('input[type="file"]', 'brownis bunga1.jpg');
        });
        cy.get(prossesPage.AlsnDbtlkn).type('alasan');
        cy.get('.col-sm-10 > .btn').click();
    });

    it.only("NE-ststusProsses ", () => {
        prossesPage.ClickBtnDetailProsses()
        prossesPage.ClickProsses()
        cy.get(prossesPage.BatalPrsoses).click()
    });

    it("Pe-ststusProsses ", () => {
        cy.get(prossesPage.ClickBtnDetailProsses).click();
        prossesPage.ClickProsses()
        cy.get(prossesPage.Prosses).click()
    });

    it("Ne-ProssesSelesaiInputanTakDiisi ", () => {
        cy.get(prossesPage.ClickBtnDetailProsses).click();
        prossesPage.ClickProssesSelesai()
        prossesPage.ClickBtnBtlkn()
        cy.get(prossesPage.RqrdHarga).should('have.text', 'Harga harus diisi');
    cy.get(prossesPage.RqrdFtoProsses).should('have.text', 'Foto proses harus dipilih');
    });

    it("Po-ProssesSelesai ", () => {
        cy.get(prossesPage.ClickBtnDetailProsses).click();
        prossesPage.ProssesSelesai()
        cy.get(prossesPage.Harga).type('10000');
        const imagePath = 'brownis bunga1.jpg'; // Nama file fixture
         cy.get(prossesPage.FotoProsses).click(); // Klik pada input file
            cy.get('input[type="file"]').attachFile(imagePath); // Mengunggah file dengan menggunakan attachFile()
             cy.wait(5000); // Menunggu proses unggah selesai
            cy.get('.col-sm-10 > .btn').click(); // Klik tombol setelah proses unggah selesai
    });
    
});
