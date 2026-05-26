function calculadoraCadenas(cadena) {
  if (cadena === "") {
    return 0;
  }
  const numeros = cadena.split(/,|-/);
  let suma = 0;
  for (let num of numeros) {
    suma += parseInt(num, 10);
  }
  return suma;
}

export default calculadoraCadenas;