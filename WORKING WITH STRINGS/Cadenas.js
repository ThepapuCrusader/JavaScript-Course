//Al trabajr con Strings quizas necesites verificar si un String contiene una cadena en en especifico que tu requieras para el funcionamiento de algo
//para esto existe "includes()"

//sintaxis: "myVar.includes(searchValue)"

//en caso de que encuentre lo especificado devolvera "True" en caso contratrio "False"

//ejemplos:
let myVar = "JavaSScript is awesome"
console.log(myVar.includes("awesome"))  //devolvera Ttue
console.log(myVar.includes("papu")) //devolvera false

//Esta funcion se ve afectada si hay mayusculas en el valor a buscar, como se ve en el siguiente ejemplo:

console.log(myVar.includes("Awesome")) //devolvera false

//tambien puedes especificar desde que posicion empezar a buscar

let phrase = "Hay Nalgoticas en IG"
let result = phrase.includes("en", 10) //devuelve true
if (result == true) {
    console.log(`${result} Se encontro la palabra`)
} else {
    console.log(`${result} No se encontro la palabra`)
};

let result2 = phrase.includes("Nalgoticas", 20) //devuelve false
if (result2 == true) {
    console.log(`${result2} Se encontro la palabra`)
} else {
    console.log(`${result2} No se encontro la palabra`)
};

console.log('..................................................................')
console.log('..................................................................')

//OK pero como extraigo una subcadena
//Hasta ahora includes() solo sirve para verificar si determinado valor se encuentra dentro de una cadena

//Es ahi donde entra Slice() en caso de que quiera extraer una palabra o fragmento en especifico de una oracion. PD: slice() devuelve una nueva cadena NO modifica la original.
//silce() toma 2 parametros la posicion de inico y la posicion final, la poscion final es opcional, si no se la proporcionas buscara hasta el final de la cadena. PD: el final especificado no se incluye ej: slice(0,5) la posicion numero 5 no se cuenta

//sintaxis: myVar.slice(Inicio, Final)

//Ejemplos

let sentence = "JavaScript is full of Nalgoticas";
let search = sentence.slice(22,32) //parametro de inicio y final
console.log(search)

let search2 = sentence.slice(14) //solo parametro de inicio 
console.log(search2)

//tambien puedes usar parametros negativos en cuyo caso la busqueda empieza desde atras hasta el final de la cadena

let search3 = sentence.slice(-10)  //devuelve las ultimos 10 caracteres
console.log(search3)
