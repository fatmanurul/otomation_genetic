describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://dev.geneticwear.id/");
  });
  it("passes", () => {
    cy.get(".navbar-right > :nth-child(1) > .page-scroll").click();
    cy.get(
      "#aboutModal > .modal-dialog > .modal-content > .modal-body > .btn"
    ).click();
    cy.get("#bs-navbar > :nth-child(1) > :nth-child(1) > .page-scroll").click();
    cy.get("div.text-center > .page-scroll").click();
    cy.get(
      "#aboutModal > .modal-dialog > .modal-content > .modal-body > .btn"
    ).click();
    cy.get(":nth-child(2) > .page-scroll").click();
    cy.get(
      "#two > :nth-child(2) > .row > :nth-child(1) > .feature > a > h3"
    ).click();
    cy.get(
      "#alertModalFullOrder > .modal-dialog > .modal-content > .modal-body > .btn"
    ).click();
    cy.get(
      "#two > :nth-child(2) > .row > :nth-child(2) > .feature > a > h3"
    ).click();
    cy.get(
      "#alertModalMakloon > .modal-dialog > .modal-content > .modal-body > .btn"
    ).click();
    cy.get(":nth-child(3) > .page-scroll").click();
    cy.get(
      ":nth-child(1) > .gallery-box > .gallery-box-caption > .gallery-box-content > div"
    ).click();
    cy.get("p > .btn").click();
    cy.get(":nth-child(4) > .page-scroll").click();
    cy.get(".active > .page-scroll").click();
    cy.get(
      ":nth-child(8) > :nth-child(2) > .row > :nth-child(1) > .feature > a > h3"
    ).click();
    cy.get(
      "#alertModalQuestion1 > .modal-dialog > .modal-content > .modal-body > .btn"
    ).click();
    cy.get(
      ":nth-child(8) > :nth-child(2) > .row > :nth-child(2) > .feature > a > h3"
    ).click();
    cy.get(
      "#alertModalQuestion2 > .modal-dialog > .modal-content > .modal-body > .btn"
    ).click();
    cy.get(":nth-child(3) > .feature > a > h3").click();
    cy.get(
      "#alertModalQuestion3 > .modal-dialog > .modal-content > .modal-body > .btn"
    ).click();
    cy.get(".form-control").type("diraya123@gmail.com");
    cy.get(".col-md-4 > .btn").click();
    cy.get(":nth-child(1) > a > .icon-lg").click();
    cy.get(":nth-child(2) > a > .icon-lg").click();
    cy.get(".wa").click();
  });
});
