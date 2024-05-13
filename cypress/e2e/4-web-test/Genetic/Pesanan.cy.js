import { login } from '../support/login'; // Pastikan path file sudah sesuai

describe("Pesanan", () => {
    beforeEach(() => {
        // Lakukan login
        login('username', 'password');

        // Tunggu hingga URL berubah menjadi URL halaman admin setelah login
        cy.url().should('include', '/admin/dashboard'); // Pastikan halaman dashboard dimuat dengan benar
        cy.wait(5000);
        cy.get(':nth-child(4) > .nav-link').click(); // Klik pada elemen menu yang mengarahkan ke halaman pesanan
        cy.url().should('include', '/admin/orders'); // Verifikasi bahwa navigasi berhasil ke halaman pesanan
    });

    it("Detail Daftar", () => {
        cy.get('label > input').type('sumi')
        cy.get('tbody > :nth-child(1) > .text-right').click()
        cy.get('.dtr-data > .btn').click()
        // cy.get('.btn-success').click()
    })

    it.only("Nama Pemesan", () => {
        // Lakukan tindakan yang diperlukan di halaman pesanan
        cy.get('.float-right > .btn').click();
        cy.get('#select2-iOrderCustomerId-container').type('Rendy');
        cy.get('.select2-results__options').each(($el, index, $list) => {
            if ($el.text() === 'Rendy Hutagaol  | - | +62 82118342147') {
                $el.click(); // Klik opsi yang sesuai
            }
        });
    
        // Ketik teks ke dalam input dengan opsi {force: true}
        cy.get('#iOrderProductAliasProduct').type('Baju Kemerdekaan', { force: true });

        cy.get('#select2-iOrderProductProductTypeId-container').type('Jaket');
        cy.get('.select2-results__option').each(($e, index, $list) => {
            if ($e.text() === 'jaket') {
                $e.click(); // Klik opsi yang sesuai
            }
        });
    });
    
    
  
//   it("Po Alias", () => {
   
//   });

    // Tambahkan pengujian tambahan di halaman pesanan jika diperlukan
});


