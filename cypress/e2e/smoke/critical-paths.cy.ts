
describe("Critical path smoke suite", () => {
  it("loads the home page", () => {
    cy.visit("/");
    cy.get("body").should("be.visible");
    cy.title().should("not.be.empty");
  });

  it("allows a user to log in and view the dashboard", () => {
  cy.loginByUi(Cypress.env("TEST_USER_EMAIL"), Cypress.env("TEST_USER_PASSWORD"));
  cy.url().should("include", "/dashboard");
  cy.get('[data-testid="dashboard-heading"]').should("be.visible");
});

  it("health endpoint is available", () => {
    cy.request({
      method: "GET",
      url: `${Cypress.env("API_URL")}/health`,
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});