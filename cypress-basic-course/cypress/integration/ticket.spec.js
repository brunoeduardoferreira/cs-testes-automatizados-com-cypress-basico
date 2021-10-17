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
    cy.get("#ticket-quantity").select("3");
  });

  // Teste para interagir com RadioButton
  it("select 'vip' ticket type", () => {
    cy.get("#vip").check();
  });

  // Testes para interagir com checkboxes
  // Checkbox isolado
  it("selects 'social media' checkbox ", () => {
    cy.get("#social-media").check();
  });

  // vários checkboxes
  it.only("selects 'friend', and 'publication', then uncheck 'friend'", () => {
    cy.get("#friend").check();
    cy.get("#publication").check();
    cy.get("#social-media").uncheck();
  });

  it("has 'TICKETBOX' header's heading", () => {

  });
})