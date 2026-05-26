import calculadoraCadenas from "./calculadoraCadenas.js";

const cadenaInput = document.querySelector("#cadena-input");
const form = document.querySelector("#calculadora-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadena = cadenaInput.value;
  const resultado = calculadoraCadenas(cadena);

  div.innerHTML = "<p>El resultado es: <strong>" + resultado + "</strong></p>";
});
