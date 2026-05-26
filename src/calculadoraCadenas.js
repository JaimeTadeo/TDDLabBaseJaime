function calculadoraCadenas(cadena) {
  if (cadena === "") {
    return 0;
  }

  let regexString = ",|-";
  let secuenciaNumeros = cadena;

  if (cadena.startsWith("//[")) {
    const finConfiguracion = cadena.lastIndexOf("]");
    const delimitador = cadena.substring(3, finConfiguracion);
    
    // Escapar el delimitador por si tiene caracteres especiales de Regex
    const delimitadorEscapado = delimitador.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    regexString += "|" + delimitadorEscapado;
    
    // Obtener la secuencia después de la configuración y limpiar espacios en blanco (por ej: "//[;] 6..." tiene un espacio)
    secuenciaNumeros = cadena.substring(finConfiguracion + 1).trim();
  }

  const regexSeparadores = new RegExp(regexString);
  const numeros = secuenciaNumeros.split(regexSeparadores);

  let suma = 0;
  for (let num of numeros) {
    if (num.trim() !== "") {
      suma += parseInt(num, 10);
    }
  }
  return suma;
}

export default calculadoraCadenas;