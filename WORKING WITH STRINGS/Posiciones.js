//Dentro de un string existen las subcadenas ejemplo: "Hola mundo" es una cadena. "Hola" y "mundo" son subcadenas
//Si requieres localizar la posicion de una subcadena en tring puedes usar lo siguente:

let exampleVar = "Hello World"
console.log(exampleVar.indexOf("World")) //devuelve 6 ya que la palabra "World" comienza en el indice 6 de exampleVar

//tmabien puedes decirle en que posicion debe emepzar a buscar

exampleVar = "London bridge is broken down, broken down"
console.log(exampleVar.indexOf("down", 30)) //la busqueda empezo en la poscion 30, es por eso que devuelve el valor 37 ya que el segundo "down" esta en esa posicion

// como curiosidad si buscas una subcadena que no esta en la cadena devuelve 0

console.log(exampleVar.indexOf("fantastic")) //devuelve -1 lo que significa error

//a y indexOf es sensible a las mayusculas y minusculas 

let myNewVar = "hola mundo"
console.log(myNewVar.indexOf("Mundo")) //devuelve -1
