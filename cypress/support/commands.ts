Cypress.Commands.add("loginByUi", (email: string, password: string) => {
  cy.visit("/login");
  cy.get('[data-testid="email"]').type(email);
  cy.get('[data-testid="password"]').type(password, { log: false });
  cy.get('[data-testid="login-submit"]').click();
});