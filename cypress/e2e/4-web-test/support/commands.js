import 'cypress-file-upload'; // Menambahkan dukungan untuk mengunggah file

// Mendefinisikan custom command untuk mengunggah file gambar
Cypress.Commands.add('uploadImage', (selector, fileName) => {
  cy.get(selector).attachFile(fileName);
});