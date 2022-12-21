const { sum } = require('./app.js');

test ("adds 14 + 9 to equal 23",function(){
    let total = sum(14,9)

    expect(total).toBe(23);
} )
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("100 dollars should be 12790 yen", function() {
    // Importa las funciones de conversión de moneda
    const { fromDollarToYen } = require('./app.js');
  
    // Compara el resultado de la conversión con el valor esperado
    expect(fromDollarToYen(100)).toBe(12790);
  });
  
  test("1 pound should be 8 yen", function() {
    // Importa las funciones de conversión de moneda
    const { fromYenToPound } = require('./app.js');
  
    // Compara el resultado de la conversión con el valor esperado
    expect(fromYenToPound(1)).toBe(0.8);
  });
  