describe("Login API", () => {
  it("returns 200 and an auth token for valid credentials", () => {
    cy.request({
      method: "POST",
      url: `${Cypress.env("API_URL")}/auth/login`,
      body: {
        email: Cypress.env("TEST_USER_EMAIL"),
        password: Cypress.env("TEST_USER_PASSWORD"),
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
      expect(response.body.token).to.be.a("string").and.not.be.empty;
      expect(response.body).to.have.property("user");
      expect(response.body.user).to.have.property("email", Cypress.env("TEST_USER_EMAIL"));
    });
  });

  it("returns 401 for invalid credentials", () => {
    cy.request({
      method: "POST",
      url: `${Cypress.env("API_URL")}/auth/login`,
      failOnStatusCode: false,
      body: {
        email: "invalid-user@example.com",
        password: "wrong-password",
      },
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property("message");
    });
  });

  it("returns 400 when required fields are missing", () => {
    cy.request({
      method: "POST",
      url: `${Cypress.env("API_URL")}/auth/login`,
      failOnStatusCode: false,
      body: {},
    }).then((response) => {
      expect(response.status).to.be.oneOf([400, 422]);
      expect(response.body).to.have.property("message");
    });
  });
});