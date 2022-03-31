//existing email
describe("school sign up flow straight forward and If user entered previously added school should display error message", () => {
  it("school user should be able to visit school register flow", () => {
    cy.visit("http://localhost:4200//auth/login");
    cy.get('[data-qa="auth_login_link_school_signup"]').click();
  });

  it("school should be able to enter school data", () => {
    step1();
  });

  it("school user should be able to add user information and set credentials", () => {
    step2();
    cy.get('[data-qa="school-register_finish_btn_submit"]').click();
    cy.intercept("POST", "https://localhost:5001/auth/school-register").as(
      "register"
    );
    cy.wait("@register").then(({ response }) => {
      expect(response.statusCode).to.eq(409);
      expect(response.body.message).to.eq("School is already exists!");
    });
  });
});

// steps
function step1() {
  cy.get('[data-qa="school-register_school_info_input_name"]').type(
    "Vision International"
  );

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

  cy.get('[data-qa="school-register_finish_input_username"]').type("sanjanasw");

  cy.get('[data-qa="school-register_finish_select_gender"]').click();
  cy.get('[data-qa="school-register_finish_select_gender"]')
    .contains("Male")
    .click();

  cy.get('[data-qa="school-register_finish_input_email"]').type(
    "sanjanasw99@gmail.com"
  );

  cy.get('[data-qa="school-register_finish_input_password"]').type("$Sanjana1");

  cy.get('[data-qa="school-register_finish_input_re_password"]').type(
    "$Sanjana1"
  );

  cy.get('[data-qa="school-register_finish_check_is_agree"]').click();
}
