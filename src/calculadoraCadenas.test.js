import calculadoraCadenas from "./calculadoraCadenas.js";

describe("Calculadora de Cadenas", () => {
  it("deberia retornar 0 para una cadena vacia", () => {
    expect(calculadoraCadenas("")).toEqual(0);
  });

  it("deberia retornar el mismo numero para un solo numero", () => {
    expect(calculadoraCadenas("2")).toEqual(2);
  });
});

