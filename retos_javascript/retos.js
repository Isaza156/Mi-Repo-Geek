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



// reto 77,




// reto 78,





// reto 79,




// reto 80,





// reto 62,




// reto 62,





// reto 62,




// reto 62,





// reto 62,




// reto 62,