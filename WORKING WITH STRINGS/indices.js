//INDICES 
//EN JAVASCRIPT LOS indices empiezan en el numero 0 y despues le sigue el 1

//Por ejemplo aqui "h" esta en la posicion 0, e en "1", la primera "l" en 2, la segunda "l" en 3 y la "o" en 4
//para acceder a las elementos de las cadenas usamos los corchetes "[]"
let salute = "hello";
console.log(salute[0]); //esto devolvera "h"
console.log(salute[1]); //esto devolvera "e"
console.log(salute[2]); //esto devolvera "l"
console.log(salute[3]); //esto devolvera "l"
console.log(salute[4]); //esto devolvera "o"

//si quieres obtener el ultimo digito y no sabes la longitud de la cadena (por alguna razon) puedes usar lo siguente
//pero antes la funcion "length", esto sirve para obtener la longitud o tamaño de una cadena

let myVar = "ABCDEFGHI";
console.log(myVar.length); //devuelve 9

//ahora si lo primero
console.log(myVar[myVar.length-1]); //devuelve el ultimo caracter osea "I". Debido a que la longitud de "myVar" es 9 si le restas 1 te da 8 (DESCUBRIMIENTO DEL SIGLO) 
// que casualmente es la posicion del ultimo caracter en myVar


//Si quieres obtener multiples caracteres puedes hacer lo siguiente

let exampleVar = "Germany"
console.log(exampleVar[0] + exampleVar[1]) //devolvera "Ge"

//he aqui otro ejemplo

let Name = "Heinrich"
let lastName = "French"
let age = "26"
let userLocation = "Asturias"

let userPassword = Name[0] + Name[1] + lastName[lastName.length-2] + lastName[lastName.length-1] + age + userLocation[userLocation.length-2] + userLocation[userLocation.length -1]
console.log("Tu contraseña " + userPassword)

