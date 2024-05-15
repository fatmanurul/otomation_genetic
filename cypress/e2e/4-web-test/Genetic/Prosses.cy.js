import { login } from '../support/login'; // Pastikan path file sudah sesuai
import 'cypress-file-upload'; // Menambahkan dukungan untuk mengunggah file

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
        cy.get('.sorting_1').click();
        cy.get('.dtr-data > .btn').click();
    });

    it("BatalkanProsses ", () => {
        cy.get('.sorting_1').click();
        cy.get('.dtr-data > .btn').click();
        // batalkan prosses
        cy.get('.btn').click();
        cy.get('.col-sm-10 > .btn').click();
    });

    it("BatalkanProsses dengan Alasan", () => {
        cy.get('.sorting_1').click();
        cy.get('.dtr-data > .btn').click();
        cy.get('.btn').click();
        cy.get('.note-editable').type('alasan');
        cy.get('#iUserPassword').type('password');
        cy.get('.col-sm-10 > .btn').click();
    });

    it("Pembayaran", () => {
        cy.get('.odd > .sorting_1').click();
        cy.get('.dtr-data > .btn-success').click();
        cy.get('#iProcessPaidDate').type('2024-05-08');
        // Tindakan mengklik elemen input file untuk memilih gambar
        cy.get('#iProcessPaidPicture').click();
        // Mendapatkan file gambar dari direktori fixture dan mengunggahnya
        cy.fixture('brownis bunga1.jpg').then(fileContent => {
            cy.uploadImage('input[type="file"]', 'brownis bunga1.jpg');
        });
        cy.get('.note-editable').type('alasan');
        cy.get('.col-sm-10 > .btn').click();
    });

    it("NE-ststusProsses ", () => {
        cy.get(':nth-child(1) > .sorting_1').click();
        cy.get('.dtr-data > .btn-warning').click();
        cy.get(':nth-child(1) > .swal-button').click()
    });

    it("Pe-ststusProsses ", () => {
        cy.get(':nth-child(1) > .sorting_1').click();
        cy.get('.dtr-data > .btn-warning').click();
        cy.get(':nth-child(2) > .swal-button').click()
    });

    it("Ne-ProssesSelesaiInputanTakDiisi ", () => {
        cy.get(':nth-child(1) > .sorting_1').click();
        cy.get('.dtr-data > .btn-success').click()
        cy.get('.col-sm-10 > .btn').click()
        cy.get('#parsley-id-5 > .parsley-required').should('have.text', 'Harga harus diisi');
    cy.get('#parsley-id-9 > .parsley-required').should('have.text', 'Foto proses harus dipilih');
    });

    it.only("Po-ProssesSelesai ", () => {
        cy.get(':nth-child(1) > .sorting_1').click();
        cy.get('.dtr-data > .btn-success').click();
        cy.get('#iProcessProductOrdersPrice').type('10000');
        const imagePath = 'brownis bunga1.jpg'; // Nama file fixture
         cy.get('#iOrderProductsDataFile').click(); // Klik pada input file
            cy.get('input[type="file"]').attachFile(imagePath); // Mengunggah file dengan menggunakan attachFile()
             cy.wait(5000); // Menunggu proses unggah selesai
            cy.get('.col-sm-10 > .btn').click(); // Klik tombol setelah proses unggah selesai
    });
    


});
