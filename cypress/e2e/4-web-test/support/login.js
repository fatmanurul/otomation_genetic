export function login(username, password) {
    cy.visit("https://dev.geneticwear.id/login");
    cy.get('#usr_email').type("sadm.gw@mailinator.com");
    cy.get('#password').type("password");
    cy.get('#submit').click(); 
}