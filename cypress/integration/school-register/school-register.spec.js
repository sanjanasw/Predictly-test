//existing school name
describe("school sign up flow straight forward and If user entered previously added school should display error message", () => {
  it("school user should be able to visit school register flow", () => {
    cy.visit("https://app.predictly.live/auth/login");
    cy.get('[data-qa="auth_login_link_school_signup"]').click();
  });

  it("school should be able to enter school data", () => {
    cy.get('[data-qa="school-register_school_info_input_name"]').type(
      "Vision International"
    );
    step1();
  });

  it("school user should be able to add user information and set credentials", () => {
    cy.get('[data-qa="school-register_finish_input_username"]').type(
      "sanjanasw"
    );

    cy.get('[data-qa="school-register_finish_input_email"]').type(
      "sanjanasw99@gmail.com"
    );

    step2();
    cy.intercept(
      "POST",
      "https://predictly.azurewebsites.net/auth/school-register"
    ).as("register");
    cy.get('[data-qa="school-register_finish_btn_submit"]').click();
    cy.wait("@register").then(({ response }) => {
      expect(response.statusCode).to.eq(409);
      expect(response.body.message).to.eq("School is already exists!");
    });
  });
});

//existing username
describe("school sign up flow straight forward and If user entered previously used username should display error message", () => {
  it("school user should be able to visit school register flow", () => {
    cy.visit("https://app.predictly.live/auth/login");
    cy.get('[data-qa="auth_login_link_school_signup"]').click();
  });

  it("school should be able to enter school data", () => {
    cy.get('[data-qa="school-register_school_info_input_name"]').type(
      "Test School"
    );
    step1();
  });

  it("school user should be able to add user information and set credentials", () => {
    cy.get('[data-qa="school-register_finish_input_username"]').type(
      "sanjanasw"
    );

    cy.get('[data-qa="school-register_finish_input_email"]').type(
      "sanjanasw99@gmail.com"
    );

    step2();
    cy.intercept("POST", "**/auth/school-register").as("register");
    cy.get('[data-qa="school-register_finish_btn_submit"]').click();
    cy.wait("@register").then(({ response }) => {
      expect(response.statusCode).to.eq(409);
      expect(response.body.message).to.eq("Username is already exists!");
    });
  });
});

//existing email
describe("school sign up flow straight forward and If user entered previously used email should display error message", () => {
  it("school user should be able to visit school register flow", () => {
    cy.visit("https://app.predictly.live/auth/login");
    cy.get('[data-qa="auth_login_link_school_signup"]').click();
  });

  it("school should be able to enter school data", () => {
    cy.get('[data-qa="school-register_school_info_input_name"]').type(
      "Test School"
    );
    step1();
  });

  it("school user should be able to add user information and set credentials", () => {
    cy.get('[data-qa="school-register_finish_input_username"]').type("sanjana");

    cy.get('[data-qa="school-register_finish_input_email"]').type(
      "sanjanasw99@gmail.com"
    );

    step2();
    cy.intercept("POST", "**/auth/school-register").as("register");
    cy.get('[data-qa="school-register_finish_btn_submit"]').click();
    cy.wait("@register").then(({ response }) => {
      expect(response.statusCode).to.eq(409);
      expect(response.body.message).to.eq("Email is already exists!");
    });
  });
});

// steps
function step1() {
  cy.get('[data-qa="school-register_school_info_input_address"]').type(
    "1, Cross Street, Kandy."
  );

  cy.get('[data-qa="school-register_school_info_btn_submit"]').click();
}

function step2() {
  cy.get('[data-qa="school-register_finish_input_first_name"]').type("sanjana");

  cy.get('[data-qa="school-register_finish_input_last_name"]').type(
    "sulakshana"
  );

  cy.get('[data-qa="school-register_finish_select_gender"]').click();
  cy.get('[data-qa="school-register_finish_select_gender"]')
    .contains("Male")
    .click();

  cy.get('[data-qa="school-register_finish_input_password"]').type("$Sanjana1");

  cy.get('[data-qa="school-register_finish_input_re_password"]').type(
    "$Sanjana1"
  );

  cy.get('[data-qa="school-register_finish_check_is_agree"]').click();
}
