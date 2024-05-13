describe("test", () => {
  function randomName() {
    const randomString = Math.random().toString(36).substring(2, 9);
    const name = "user " + randomString;
    return name;
  }

  let username = randomName();
  let job = "tester";

  it("get user", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("per_page", 6);
    });
  });
  it("create user", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      body: {
        name: username,
        job: job,
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      cy.log(username);
    });
  });
});
