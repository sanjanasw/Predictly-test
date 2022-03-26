/// <reference types="cypress" />

describe("student sign up flow straight forward", () => {
  it("student should be able to visit register flow", () => {
    cy.visit("http://localhost:4200/auth/login");
    cy.get('[data-qa="auth_login_link_student_signup"]').click();
  });

  it("student should be able to enter user data", () => {
    step1();
  });

  it("student should be able to enter educational data ", () => {
    step2();
  });

  it("student should be able to enter study data", () => {
    step3();
  });

  it("student should be able to enter parent education levels", () => {
    step4();
  });

  it("student should be able to set credentials", () => {
    step5();
  });
});

describe.only("students sign up flow with back buttons", () => {
  it("student should be able to visit register flow", () => {
    cy.visit("http://localhost:4200/sign-up");
  });

  it("student should be able to enter user data", () => {
    step1();
  });

  it("student should be able to enter educational data and go back and submit again without filling data again", () => {
    cy.get('[data-qa="signup_education_btn_back"]', {
      timeout: 6000,
    }).click();
    cy.get('[data-qa="signup_signup_btn_submit"]').click();
    step2();
  });

  it("student should be able to enter study data and go back and submit again without filling data again", () => {
    cy.get('[data-qa="signup_study_btn_back"]').click();
    cy.get('[data-qa="signup_education_btn_submit"]').click();
    step3();
  });

  it("student should be able to enter parent education levels and go back and submit again without filling data again", () => {
    cy.get('[data-qa="signup_parents_info_btn_back"]').click();
    cy.get('[data-qa="signup_study_btn_submit"]').click();
    step4();
  });

  it("student should be able to set credentials and go back and submit again without filling data again", () => {
    cy.get('[data-qa="signup_finish_btn_back"]').click();
    cy.get('[data-qa="signup_parents_info_btn_submit"]').click();
    step5();
  });
});

function step1() {
  cy.get('[data-qa="signup_signup_input_first_name"]').type("sanjana");

  cy.get('[data-qa="signup_signup_input_last_name"]').type("sulakshana");

  cy.get('[data-qa="signup_signup_input_email"]').type("sanjanasw99@gmail.com");

  cy.get('[data-qa="signup_signup_select_gender"]').click();
  cy.get('[data-qa="signup_signup_select_gender"]').contains("Male").click();

  cy.get('[data-qa="signup_signup_select_o/l_year"]').click();
  cy.get('[data-qa="signup_signup_select_o/l_year"]').contains("2020").click();

  cy.get('[data-qa="signup_signup_btn_submit"]').click();
}

function step2() {
  // cy.get('[data-qa="signup_signup_select_school"]').click();
  // cy.get('[data-qa="signup_signup_select_school"]')
  //   .contains("Vision International")
  //   .click();

  cy.get('[data-qa="signup_signup_select_bsub_1"]', {
    timeout: 6000,
  }).click();
  cy.get('[data-qa="signup_signup_select_bsub_1"]')
    .contains("Geography")
    .click();

  cy.get('[data-qa="signup_education_btn_submit"]').click();
}

function step3() {
  cy.get('[data-qa="signup_study_data_select_sub1_study_hours"]').click();
  cy.get('[data-qa="signup_study_data_select_sub1_study_hours"]')
    .contains("Less than 3 hours")
    .click();

  cy.get('[data-qa="signup_study_data_input_sub1_avg_marks"]').type("68");

  cy.get('[data-qa="signup_study_data_select_sub2_study_hours"]').click();
  cy.get('[data-qa="signup_study_data_select_sub2_study_hours"]')
    .contains("Between 3 to 5 hours")
    .click();

  cy.get('[data-qa="signup_study_data_input_sub2_avg_marks"]').type("75");

  cy.get('[data-qa="signup_study_data_select_sub3_study_hours"]').click();
  cy.get('[data-qa="signup_study_data_select_sub3_study_hours"]')
    .contains("Between 5 to 10 hours")
    .click();

  cy.get('[data-qa="signup_study_data_input_sub3_avg_marks"]').type("77");

  cy.get('[data-qa="signup_study_data_check_sub3_class_status"]').click();

  cy.get('[data-qa="signup_study_data_select_sub4_study_hours"]').click();
  cy.get('[data-qa="signup_study_data_select_sub4_study_hours"]')
    .contains("Less than 3 hours")
    .click();

  cy.get('[data-qa="signup_study_data_input_sub4_avg_marks"]').type("68");

  cy.get('[data-qa="signup_study_data_select_sub5_study_hours"]').click();
  cy.get('[data-qa="signup_study_data_select_sub5_study_hours"]')
    .contains("Between 5 to 10 hours")
    .click();

  cy.get('[data-qa="signup_study_data_input_sub5_avg_marks"]').type("71");

  cy.get('[data-qa="signup_study_data_check_sub5_class_status"]').click();

  cy.get('[data-qa="signup_study_data_select_sub6_study_hours"]').click();
  cy.get('[data-qa="signup_study_data_select_sub6_study_hours"]')
    .contains("More than 10 hours")
    .click();

  cy.get('[data-qa="signup_study_data_input_sub6_avg_marks"]').type("79");

  cy.get('[data-qa="signup_study_data_check_sub6_class_status"]').click();

  cy.get('[data-qa="signup_study_data_select_sub7_study_hours"]').click();
  cy.get('[data-qa="signup_study_data_select_sub7_study_hours"]')
    .contains("Between 3 to 5 hours")
    .click();

  cy.get('[data-qa="signup_study_data_input_sub7_avg_marks"]').type("73");

  cy.get('[data-qa="signup_study_data_check_sub7_class_status"]').click();

  cy.get('[data-qa="signup_study_btn_submit"]').click();
}

function step4() {
  cy.get('[data-qa="signup_parents_info_select_fathers_edu_level"]').click();
  cy.get('[data-qa="signup_parents_info_select_fathers_edu_level"]')
    .contains("Masters Degree")
    .click();

  cy.get('[data-qa="signup_parents_info_select_mothers_edu_level"]').click();
  cy.get('[data-qa="signup_parents_info_select_mothers_edu_level"]')
    .contains("Diploma")
    .click();

  cy.get('[data-qa="signup_parents_info_btn_submit"]').click();
}

function step5() {
  cy.get('[data-qa="signup_finish_input_username"]').type("sanjana99");

  cy.get('[data-qa="signup_finish_input_password"]').type("$Sanjana1");

  cy.get('[data-qa="signup_finish_input_re_password"]').type("$Sanjana1");

  cy.get('[data-qa="signup_finish_check_is_agree"]').click();

  cy.get('[data-qa="signup_finish_btn_submit"]').click();
}
