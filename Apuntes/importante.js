// 1. El método shift() elimina el primer elemento del array y devuelve dicho elemento. 
// Este método modifica la longitud del array.

var miPescado = ['ángel', 'payaso', 'mandarín', 'cirujano'];

console.log('miPescado antes: ' + miPescado);
// "miPescado antes: ángel,payaso,mandarín,cirujano"

var eliminado = miPescado.shift(); 

console.log('miPescado después: ' + miPescado); 
// "miPescado after: payaso,mandarín,cirujano" 

console.log('Elemento eliminado: ' + eliminado); 
// "Elemento eliminado: ángel"


// 2. El método push() añade uno o más elementos al final de un array.
// Devuelve la nueva longitud del array.

var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens');

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]


// 2. Otro ejemplo:

var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total);  // 4

// 3. El método pop() elimina el último elemento de un array.
// Lo devuelve y este método cambia la longitud del array.

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

// 3. Otro ejemplo:

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ] 

console.log(popped); // 'sturgeon'

// 4. El método unshift() agrega uno o más elementos al inicio del array.
// Devuelve la nueva longitud del array.

var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

// 4. Otro ejemplo:

var arr = [1, 2];

arr.unshift(0); // resultado de la llamada es 3, la nueva longitud del array
// arr es [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr es [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr es [[-3], -2, -1, 0, 1, 2]



// 5. comparacion con igualdad (==).

1 == 1 // true
1 == 2 // false
1 == '1' // true
"3" == 3 // true


// 6. comparacion con igualdad estricta (===). Si los valores que se comparan tienen diferentes tipos, 
// se consideran desiguales y el operador de igualdad estricta devolverá el valor falso.

3 === 3 // verdadero 
3 === '3' // falso


// 7. En conclusion:

3 == '3' // devuelve true porque JavaScript realiza la conversión de tipo de la cadena al número 
3 === '3' // devuelve false porque los tipos son diferentes y la conversión de tipo no se realiza


// 8. El operador de desigualdad ( !=) es lo opuesto al operador de igualdad. Significa "No es igual" 
// Retorna false donde la igualdad regresaría true y viceversa.

1 != 2 // verdadero 
1 != "1" // falso 
1 != '1' // falso 
1 != Verdadero // falso 
0 != Falso // falso


// 9. operador de desigualdad estricta ( !==)  Significa "Estrictamente no es igual" 
// Retorna false donde la igualdad estricta volvería true y viceversa 

3 !== 3 // falso 
3 !== '3' // verdadero 
4 !== 3 // verdadero

