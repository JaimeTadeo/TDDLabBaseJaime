describe("Calculadora de Cadenas UI", () => {
  it("Muestra el resultado de sumar varios numeros por defecto", () => {
    cy.visit("/");
    cy.get("#cadena-input").type("1,2,3");
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "6");
  });

  it("Muestra el resultado usando un caracter personalizado", () => {
    cy.visit("/");
    cy.get("#cadena-input").type("//[;] 6;7;4");
    cy.get("#calcular-button").click();
    cy.get("#resultado-div").should("contain", "17");
  });
});
