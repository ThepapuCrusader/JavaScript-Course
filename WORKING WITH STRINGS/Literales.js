// Al crear cadenas de forma tradicional osea "" o '' no puedes incluir variables u otros elementos dentro de ellas
// a menos que los concatenes, sin embargo hay una forma bastante  mas facil de solucionar este problema
// que consiste en el uso de las comillas inversas con las que podemos crear "literales de plantillas"

//creacion de un string "regular"
let userName = "pedro" //nada anormal

//Literales de plantillas
let userName2 = `Alice` //  se declaran de forma distinta con ``(comillas inversas)
// ahora surge la pregunta, ¿Que nos permite eso?. muy simple: NOS FACILITA LA VIDA
let age = 45

let userInfo = `My names is ${userName2} and i am ${age} years old`
console.log(userInfo)
// como pudimos observar este tipo de strings nos permirte la exitosa introducion de variables de otros tipos de datos en un cadena de texto
//Por supuesto para insertarlo se debe seguir una estructura la cual es ${nombre_variable}

//tambien funciona con strings regulares

let myVar = "abcdef"

let importantInfo = `The first five letters in the alphabet are ${myVar}`
console.log(importantInfo)

//otra carcateristica especial es que los literales no necesitan caracteres especiales parta hacer saltos de linea, solo basta con declararlos

let Rapture = `Fab Five Freddy told me everybody's fly
DJ spinnin' I said, "My my"
Flash is fast, Flash is cool
François c'est pas, Flash ain't no dude
And you don't stop, sure shot
Go out to the parking lot`;
console.log(Rapture); //sin necesidad de "\n"


//y por ultimo tambien se pueden insertar expresiones matematicos (u de otros tipos) dentro de los literales


let locationPlace = "Woodlands";
let rainThisYear = 26 ;
let rainPastYear = 45;

let rainMilimeterstWoodlands = `En ${locationPlace} ha caido un total de ${rainThisYear}mm este año, 
el año pasado cayeron ${rainPastYear}mm lo que deja una difrencia de ${rainPastYear - rainThisYear}mm.`;
console.log(rainMilimeterstWoodlands);
