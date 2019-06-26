// reto 46, creando funciones

// Example
function ourReusableFunction() {
    console.log("Heyya, World");
  }
  
  ourReusableFunction();
 
  function reusableFunction(){
  
    console.log("Hi World");
  }
  
  reusableFunction();

// reto 47, pasando valores o argumentos a la funcion

// Example
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
  }
  ourFunctionWithArgs(10, 5); // Outputs 5
  
  // Only change code below this line.
  
  function functionWithArgs(a,b){
  
    console.log(a+b);
  }
  
  functionWithArgs(7,9);

  // reto 48, declarar variables globales

  // Declare your variable here
var  myGlobal = 10;


function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
  
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


// reto 49, declarar variables locales

function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    
    console.log(myVar);
  }
  myLocalScope();
  
  var myVar;
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log(myVar);
  
  // Now remove the console log line to pass the test


  // reto 50, variables locales y globales con el mismo nombre

  // Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  
  var  outerWear = "sweater";

  
  // Only change code above this line
  return outerWear;
}

myOutfit();


// reto 51, retornar valores

// Example
function minusSeven(num) {
    return num - 7;
  }
  
  // Only change code below this line  
  
  
  console.log(minusSeven(10));
  
  function timesFive(num){
  
    return num * 5;
  
  }
  
  var answer = timesFive(5);


  // reto 52, devuelve valor indefinido

  // Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive(){
sum += 5;
}
// Only change code above this line
var returnedValue = addFive();


// reto 53, asignacion con un valor devuelto

// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}


// Only change code below this line
processed = processArg(7);


// reto 54, eliminar y añadir elementos de un array y devolver lo eliminado

function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    var removed = arr.shift();
    return removed;  // Change this line
  }
  
  // Test Setup
  var testArr = [1,2,3,4,5];
  
  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));


  // reto 55, los booleanos devuelven 2 valores: falso o verdadero.

  function welcomeToBooleans() {

    // Only change code below this line.
    
    return true; // Change this line
    
    // Only change code above this line.
    }
    
    welcomeToBooleans();


    // reto 56, evaluar condiciones con booleano

    // Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) { 
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  
  if (wasThatTrue){

      return "Yes, that was true"
  }
  return "No, that was false"
  // Only change code above this line.

}

// Change this value to test
trueOrFalse(false);


// reto 57, Comparación con el operador de igualdad

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);


// reto 58, // 6. comparacion con igualdad estricta (===).

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);


// reto 59, comparando diferentes valores.

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(20, "20");


// reto 60, utilizando operador de desigualdad.


// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);


// reto 61, utilizando operador de desigualdad estricta.

// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line
  
  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);


// reto 62, operador mayor >

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  
  if (val > 10 ) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);


// reto 63, usando operador mayor o igual >=

function testGreaterOrEqual(val) {
  if (val >= 20 ) {  // Change this line
    return "20 or Over";
  }
  
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);


// reto 64, usando operador menor <

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }
  
  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);


// reto 65,usando operador menor o igual <=

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  
  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);


// reto 66, operador &&

function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
  
      return "Yes"; 
  
    // Only change code above this line
}
return "No";
}
  
// Change this value to test
testLogicalAnd(10);


// reto 67, operador ||

function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);


// reto 68, funcion else

function testElse(val) {
  var result = "";
  // Only change code below this line
  
  if (val > 5) {
    result = "Bigger than 5";
  }else {
  result = "5 or Smaller";
  }
    
  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);


// reto 69, usando else if

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
   return "Smaller than 5";
        }  else{

return "Between 5 and 10";
        }

    }  

// Change this value to test
testElseIf(7);


// reto 70, orden de los else if

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);


// reto 71, multiples else if

function testSize(num) {
  // Only change code below this line
  if ( num < 5){

    return "Tiny"
  } else if (num < 10){

return "Small"

  }else if ( num < 15){

return "Medium"

  }else if(num < 20 ){

return "Large"

  }else
    
  return "Huge";
  // Only change code above this line
}

// Change this value to test
testSize(20);


// reto 72, codigo de golf

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1){
    return "Hole-in-one!";
  } else if (strokes <= par -2){
    return "Eagle";
  } else if (strokes == par -1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par +1) {
    return "Bogey";
  } else if (strokes == par +2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
  // Only change code above this line
}
// Change these values to test
golfScore(5, 4);


// reto 73, usando case

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
 switch(val){

case 1:

return "alpha"
break

case 2:

return "beta"
break

case 3:

return "gamma"
break

case 4:

return "delta"
break

 }
 
  // Only change code above this line  
  return answer;  
}

// Change this value to test
caseInSwitch(1);



// reto 74, usando case con default

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val){

case "a":

return "apple";

break;

case "b":

return "bird";

break;

case "c":

return "cat";

break;

default:

return "stuff"

break;
  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
switchOfStuff(1);



// reto 75, casos con respuestas iguales

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
  case 1:
  case 2:
  case 3:
    return "Low";
    break;
  case 4:
  case 5:
  case 6:
    return "Mid";
    break;
  case 7:
  case 8:
  case 9:
return "High";
break;
}
 
  // Only change code above this line  
  return answer;  
}

// Change this value to test
sequentialSizes(1);


// reto 76, Reemplazo de cadenas de otro tipo con interruptor

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
switch (val){

case "bob":
return "Marley"
break

case 42:
return "The Answer"
break

case 1:
return "There is no #1"
break

case 99:
return "Missed me by this much!"
break

case 7:
return "Ate Nine"
break

case "John":
return ""
break

case "156":
return ""
break

}
  // Only change code above this line  
  return answer;  
}

// Change this value to test
chainToSwitch(7);



// reto 77, Devolviendo valores booleanos desde funciones

function isLess(a, b) {
  // Fix this code
  return a <= b;
}
// Change these values to test
isLess(10, 15);


// reto 78, regresa el patrón inicial para funciones

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0){

    return undefined
  }
  
  
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);



// reto 79, regresa el patrón inicial para funciones

function cc(card) {
  // Only change code below this line
  var regex = /[JQKA]/;
  if (card > 1 && card < 7){count++;}
  else if (card === 10 || String(card).match(regex)){count--;}

  if (count > 0) return count + " Bet";
  return count + " Hold";

  // Only change code above this line
}


// reto 80, Construye objetos JavaScript

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {
  "name": "pachito",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
  };


// reto 81, acceso a propiedades de objetos con notación de puntos

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line


// reto 82, acceso a propiedades de objetos con notación de corchete

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line


// reto 83, acceso a propiedades de objetos con variables

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line


// reto 84, actualizando las propiedades del objeto

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog.name = "Happy Coder"; // Solution



// reto 85, Agregar nuevas propiedades a un objeto JavaScript

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog.bark = "woof";


// reto 86, eliminar propiedades de un objeto JavaScript

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line.

delete myDog.tails;


// reto 87, Uso de objetos para búsquedas

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
    var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  } 
  result = lookup[val];


  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");

// reto 88, Prueba de objetos para propiedades

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  else {
      return "Not Found"
  }
}
// Test your code by modifying these values
checkObj("gift");

// reto 89, manipulando objetos complejos

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  // Add record here
  {
    "artist": "Deep Purple",
    "title": "Smoke on the water",
    "release_year": 1976,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
  }
 ];

// reto 91, acceso a objetos anidados

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"] // Change this line


// reto 92, accediendo a matrices anidadas

// Setup
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

// Only change code below this line

var secondTree = myPlants[1].list[1];


// reto 93, colección de discos


// Setup
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [ 
      "Let It Rock", 
      "You Give Love a Bad Name" 
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [ 
      "1999", 
      "Little Red Corvette" 
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439": {
    "album": "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
if (prop === "tracks" && value !== "") {
 if(collection[id][prop]) {
  collection[id][prop].push(value);
 }
 else {
  collection[id][prop]=[value];
 }
} else if (value !== "") {
  collection[id][prop] = value;
} else {
  delete collection[id][prop];
}

return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

 
// reto 94, Iterar con JavaScript Mientras Bucles

// Setup
var myArray = [];

// Only change code below this line.
var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}


// reto 95, Iterar con JavaScript para bucles

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 1; i < 6; i++) {
  myArray.push(i);
}


// reto 96, Iterar números impares con un bucle for

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.


for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}


// reto 97, contar hacia atrás con un bucle for

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}


// reto 98, iterar a través de una matriz con un bucle For

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}


// reto 99, anidando para bucles


function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var i=0; i < arr.length; i++){
    for (var j=0; j < arr[i].length; j++){
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);


// reto 100, Iterate con JavaScript Do ... While Loops

// Setup
var myArray = [];
var i = 10;

// Only change code below this line.
do{
myArray.push(i);
i++;


} while (i < 10)


// reto 101, Búsqueda de perfiles

//Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];


function lookUpProfile(name, prop){
// Only change code below this line
for (var x = 0; x < contacts.length; x++){
  if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
      } else {
          return "No such property";
      }
  }
}
return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");


// reto 102, generar fracciones aleatorias con JavaScript

function randomFraction() {
  // Only change code below this line.
  var result = 0;
  
  while (result === 0) {
    result = Math.random();
  }

  return result;  
  // Only change code above this line.
}

// reto 103, generar números enteros aleatorios con JavaScript

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}

// reto 104, generar números enteros aleatorios dentro de un rango

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);

 
// reto 105, usar la función parseInt

function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");


// reto 106, use la función parseInt con un Radix

function convertToInteger(str) {
  var radix = 2;
return parseInt(str, radix);
}

convertToInteger("10011");

// reto 107, utilizar el operador condicional (ternario)

function checkEqual(a, b) {
  return (a == b ? true : false);
}

checkEqual(1, 2);


// reto 108,

function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(10);


// FIN !!

