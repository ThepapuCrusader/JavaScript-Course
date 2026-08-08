//WELL WELL WELL

//typeof es un operador que devuelve el tipo de dato (dentro de un string) de una variable en especifico

let exampleVariable;

exampleVariable = 23;

console.log(typeof exampleVariable) // devolvera "number"

exampleVariable = "ABCDE"
console.log(typeof exampleVariable) // "string"

exampleVariable = 12366783467382647832664273n
console.log(typeof exampleVariable) // "BigInt"


//Sin embargo este operador cuenta con una particularidad con cierto tipo de dato

let irregularity = null;

console.log(typeof irregularity) //devuelve "object"
//la razon de esto esta en la creacion de el mismo JavaScript ya que valores como null (entre otros) son representados como un tipo de objeto especial,
//desafortunadamente esto es parte del lenguaje
