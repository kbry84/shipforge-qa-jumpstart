describe("Login flow", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("logs in successfully with valid credentials", () => {
    cy.get('[data-testid="email"]').should("be.visible").type(Cypress.env("TEST_USER_EMAIL"));
    cy.get('[data-testid="password"]').should("be.visible").type(Cypress.env("TEST_USER_PASSWORD"), {
      log: false,
    });

    cy.get('[data-testid="login-submit"]').click();

    cy.url().should("include", "/dashboard");
    cy.get('[data-testid="user-menu"]').should("be.visible");
  });

  it("shows validation errors for missing credentials", () => {
    cy.get('[data-testid="login-submit"]').click();

    cy.get('[data-testid="email-error"]')
      .should("be.visible")
      .and("contain", "Email is required");

    cy.get('[data-testid="password-error"]')
      .should("be.visible")
      .and("contain", "Password is required");
  });

  it("shows an auth error for invalid credentials", () => {
    cy.get('[data-testid="email"]').type("invalid-user@example.com");
    cy.get('[data-testid="password"]').type("wrong-password", { log: false });

    cy.get('[data-testid="login-submit"]').click();

    cy.get('[data-testid="auth-error"]')
      .should("be.visible")
      .and("contain", "Invalid email or password");
  });
});