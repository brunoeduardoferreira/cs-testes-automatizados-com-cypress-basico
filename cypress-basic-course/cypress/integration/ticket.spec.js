describe("Tickets", () => {
  // Passa a URL que será chamada
  beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));

  // teste que irá preencher os campos de Texto da Aplicação
  it("fills all the text input fields", () => {
    const firstName = "Bruno";
    const lastName = "Ferreira"

    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type("brunoemf@gmail.com");
    cy.get("#requests").type("Gamer");
    cy.get("#signature").type(`${firstName} ${lastName}`);
  });

  // Teste de preencher campo do tipo select  
  it("select two tickets", () => {
    cy.get("#ticket-quantity").select("2");
  });

  // Teste para interagir com RadioButton
  it("select 'vip' ticket type", () => {
    cy.get("#vip").check();
  });

  // Testes para interagir com checkboxes
  // Checkbox isolado
  it("selects 'social media' checkbox", () => {
    cy.get("#social-media").check();
  });

  // vários checkboxes
  it("selects 'friend', and 'publication', then uncheck 'friend'", () => {
    cy.get("#friend").check();
    cy.get("#publication").check();
    cy.get("#social-media").uncheck();
  });

  // Faz a verificação ( Assertion ) se o componente do header h1 contem o texto TICKETBOX
  it("has 'TICKETBOX' header's heading", () => {
    cy.get("header h1").should("contain", "TICKETBOX");
  });

  it("alerts on invalid email", () => {
    cy.get("#email")
      .as("email") // da um alias para o elemento
      .type("brunoemf-gmail.com");

    cy.get("#email.invalid")
      .should("exist");

    cy.get("@email")
      .clear()
      .type("brunoemf@gmail.com")

    cy.get("#email.invalid").should("not.exist");
  });

  it("fills and reset the form", () => {
    const firstName = "Bruno";
    const lastName = "Ferreira";
    const fullName = `${firstName} ${lastName}`;

    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type("brunoemf@gmail.com");
    cy.get("#ticket-quantity").select("2");
    cy.get("#vip").check();
    cy.get("#friend").check();
    cy.get("#requests").type("Gamer");

    cy.get(".agreement p").should(
      "contain",
      `I, ${fullName}, wish to buy 2 VIP tickets.`
    );

    cy.get("#agree").click();
    cy.get("#signature").type(fullName);

    cy.get("button[type='submit']")
      .as("submitButton")
      .should("not.be.disabled");

    cy.get("button[type='reset']").click();

    cy.get("@submitButton").should("be.disabled")
  });

  it("fills mandatory fields using support command", () => {
    const customer = {
      firstName: "Bruno",
      lastName: "Eduardo de Moura Ferreira",
      email: "brunoemf@gmail.com"
    };

    cy.fillMandatoryFields(customer);

    cy.get("button[type='submit']")
      .as("submitButton")
      .should("not.be.disabled")

    cy.get("#agree").uncheck();

    cy.get("@submitButton").should("be.disabled");
  });


})