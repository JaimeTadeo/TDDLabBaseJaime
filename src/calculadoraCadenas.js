function calculadoraCadenas(cadena) {
  if (cadena === "") {
    return 0;
  }

  let regexString = ",|-";
  let secuenciaNumeros = cadena;

  if (cadena.startsWith("//[")) {
    const finConfiguracion = cadena.lastIndexOf("]");
    const delimitador = cadena.substring(3, finConfiguracion);
    
    const delimitadorEscapado = delimitador.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    regexString += "|" + delimitadorEscapado;
    
    secuenciaNumeros = cadena.substring(finConfiguracion + 1).trim();
  }

  const regexSeparadores = new RegExp(regexString);
  const numeros = secuenciaNumeros.split(regexSeparadores);

  let suma = 0;
  for (let num of numeros) {
    if (num.trim() !== "") {
      const valorEntero = parseInt(num, 10);
      if (valorEntero <= 1000) {
        suma += valorEntero;
      }
    }
  }
  return suma;
}

export default calculadoraCadenas;