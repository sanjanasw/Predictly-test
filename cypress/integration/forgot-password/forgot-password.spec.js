describe("users should be able to reset their password", () => {
  it("users should be able to visit forgot-password page", () => {
    cy.visit("https://app.predictly.live/auth/login");
    cy.get('[data-qa="auth_login_link_forgot_password"]').click();
  });

  it("users should be able to send reset password link", () => {
    cy.intercept("POST", "**/auth/forgot-password").as("forgot-password");

    cy.get('[data-qa="auth_forgot_password_input_email"]').type(
      "sanjanasw99@gmail.com"
    );

    cy.get('[data-qa="auth_forgot_password_btn_submit"]').click();

    cy.wait("@forgot-password").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
      expect(response.body.message).to.eq("Reset Password Link Sent!");
    });

    cy.wait(400).location("pathname").should("eq", "/auth/forgot-password");
  });
});
