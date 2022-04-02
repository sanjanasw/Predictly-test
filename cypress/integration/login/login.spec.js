describe("student should be able to login to system using login screen", () => {
  it("student should be able to login to the system", () => {
    cy.visit("https://app.predictly.live/auth/login");
    cy.intercept("POST", "**/auth/login").as("login");

    cy.get('[data-qa="auth_login_input_username"]').type("sanjanasw");

    cy.get('[data-qa="auth_login_input_password"]').type("$Sanjana1");

    cy.get('[data-qa="auth_login_check_remember"]').click();

    cy.get('[data-qa="auth_login_btn_login"]').click();

    cy.wait("@login").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });

    cy.wait(400).location("pathname").should("eq", "/dashboard");
  });

  it("Schools should be able to login to the system", () => {
    cy.visit("https://app.predictly.live/auth/login");
    cy.intercept("POST", "**/auth/login").as("login");

    cy.get('[data-qa="auth_login_input_username"]').type("visionAdmin");

    cy.get('[data-qa="auth_login_input_password"]').type("$Sanjana1");

    cy.get('[data-qa="auth_login_check_remember"]').click();

    cy.get('[data-qa="auth_login_btn_login"]').click();

    cy.wait("@login").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });

    cy.wait(400).location("pathname").should("eq", "/school-dashboard");
  });

  it("Admins should be able to login to the system", () => {
    cy.visit("https://app.predictly.live/auth/login");
    cy.intercept("POST", "**/auth/login").as("login");

    cy.get('[data-qa="auth_login_input_username"]').type("admin");

    cy.get('[data-qa="auth_login_input_password"]').type("$Sanjana1");

    cy.get('[data-qa="auth_login_check_remember"]').click();

    cy.get('[data-qa="auth_login_btn_login"]').click();

    cy.wait("@login").then(({ response }) => {
      expect(response.statusCode).to.eq(200);
    });

    cy.wait(400).location("pathname").should("eq", "/admins-list");
  });

  it("Users not be able to login to the system with invalid credentials", () => {
    cy.visit("http://localhost:4200/auth/login");
    cy.intercept("POST", "**/auth/login").as("login");

    cy.get('[data-qa="auth_login_input_username"]').type("sanjanasw");

    cy.get('[data-qa="auth_login_input_password"]').type("$Sanjan1");

    cy.get('[data-qa="auth_login_check_remember"]').click();

    cy.get('[data-qa="auth_login_btn_login"]').click();

    cy.wait("@login").then(({ response }) => {
      expect(response.statusCode).to.eq(401);
      expect(response.body.message).to.eq("Username or password incorrect!");
    });
  });

  it("Users not be able to login to the system without confirming email", () => {
    cy.visit("http://localhost:4200/auth/login");
    cy.intercept("POST", "**/auth/login").as("login");

    cy.get('[data-qa="auth_login_input_username"]').type("testStaff");

    cy.get('[data-qa="auth_login_input_password"]').type(
      "$NewUserPassword1Temp"
    );

    cy.get('[data-qa="auth_login_check_remember"]').click();

    cy.get('[data-qa="auth_login_btn_login"]').click();

    cy.wait("@login").then(({ response }) => {
      expect(response.statusCode).to.eq(403);
      expect(response.body.message).to.eq("Please verify your email!");
    });
  });

  it("users should be able to click login button without filling form", () => {
    cy.visit("https://app.predictly.live/auth/login");
    cy.intercept("POST", "**/auth/login").as("login");

    cy.get('[data-qa="auth_login_btn_login"]').should("be.disabled");

    cy.get('[data-qa="auth_login_input_username"]').type("testStaff");

    cy.get('[data-qa="auth_login_btn_login"]').should("be.disabled");

    cy.get('[data-qa="auth_login_input_password"]').type(
      "$NewUserPassword1Temp"
    );

    cy.get('[data-qa="auth_login_check_remember"]').click();

    cy.get('[data-qa="auth_login_btn_login"]').should("not.be.disabled");

    cy.get('[data-qa="auth_login_btn_login"]').click();

    cy.wait("@login").then(({ response }) => {
      expect(response.statusCode).to.eq(403);
      expect(response.body.message).to.eq("Please verify your email!");
    });
  });
});
