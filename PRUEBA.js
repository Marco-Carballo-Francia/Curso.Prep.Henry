function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    // Tu código:
    if (numero > 0)
    {
      return "Es positivo";
    } else if (numero < 0)
      {
        return "Es negativo";
      }
    else
    {
      return false;
    }
  }
  esPositivo(0);
  esPositivo(22);
  esPositivo(-2);