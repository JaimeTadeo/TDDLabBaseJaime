import calculadoraCadenas from "./calculadoraCadenas.js";

describe("Calculadora de Cadenas", () => {
  it("deberia retornar 0 para una cadena vacia", () => {
    expect(calculadoraCadenas("")).toEqual(0);
  });

  it("deberia retornar el mismo numero para un solo numero", () => {
    expect(calculadoraCadenas("2")).toEqual(2);
  });

  it("deberia retornar la suma de dos numeros separados por coma", () => {
    expect(calculadoraCadenas("1,2")).toEqual(3);
  });

  it("deberia retornar la suma de varios numeros separados por coma", () => {
    expect(calculadoraCadenas("1,2,3")).toEqual(6);
  });

  it("deberia admitir el caracter guion (-) como separador ademas de las comas", () => {
    expect(calculadoraCadenas("1-2,3")).toEqual(6);
  });
});