describe("Tickets", () => {
  // Passa a URL que será chamada
  beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));

  // teste que irá preencher os campos de Texto da Aplicação
  it.only("fills all the text input fields", () => {
    const firstName = "Bruno";
    const lastName = "Ferreira"

    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#email").type("brunoemf@gmail.com");
    cy.get("#requests").type("Gamer");
    cy.get("#signature").type(`${firstName} ${lastName}`);
  });


  it("has 'TICKETBOX' header's heading", () => {

  });
})