const sum = (a,b) => {
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

function fromDollarToYen(value) {
    // Convierte el valor a yen
    let valueInYen = value * 127.9;
    return valueInYen;
  }
  
  function fromYenToPound(value) {
    // Convierte el valor a libras esterlinas
    let valueInPound = value * 0.8;
    return valueInPound;
  } 

    

module.exports = { sum,fromEuroToDollar,fromDollarToYen,fromYenToPound };