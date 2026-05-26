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

  it("deberia aceptar un delimitador personalizado de un caracter", () => {
    expect(calculadoraCadenas("//[;] 6;7;4")).toEqual(17);
  });

  it("deberia combinar delimitador personalizado con los por defecto (, y -)", () => {
    expect(calculadoraCadenas("//[;] 6,3-2;1")).toEqual(12);
  });

  it("deberia ignorar numeros mayores a 1000", () => {
    expect(calculadoraCadenas("2, 1001")).toEqual(2);
  });

  it("deberia aceptar delimitadores de cualquier longitud", () => {
    expect(calculadoraCadenas("//[***] 1***2***3")).toEqual(6);
  });

  it("deberia aceptar multiples delimitadores configurados", () => {
    expect(calculadoraCadenas("//[*][%] 1*2%3,7-9")).toEqual(22);
  });
});