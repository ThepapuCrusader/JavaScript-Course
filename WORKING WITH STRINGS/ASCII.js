//Pese a mis resistencia a incluir esto, ASCII y sus relativos son parte del curso asi que no teng otra opcion.

//ASCII (American Standard Code for Information Interchange) es sistema de codificacion de caracteres usado en computadoras
//para representar texto, todo caracter (letras, simbolos, numeros etc) posee un valor numerico que es reconocido universalmente por las maquinas
//no obstante, aunque JavaScript utilize UTF-16 los primeros 128 caracteres de este mismo conciden con ASCII

//He aqui algunos ejemplos

//1-
//charCodeAt() devuelve el codigo ASCII del caracter en cuestion

let letters = 'A!HBaB@';
console.log(letters.charCodeAt(0));  // A devuelve 65
console.log(letters.charCodeAt(1))  // ! devulve 33


//fromCharCode() hace lo contrario a la funcion anterior convertir un codigo ASCII en un caracter
let char = String.fromCharCode(89); //devuelve Y
console.log(char)

//Posibles usos:
/*
    1.- charCodeAt(): Verificar si un caracter es mayuscula/minuscula, numerico etc.
    2.- fromCharCode(): Generar combinaciones aleatorias de numeros en base a sus codigos ASCII.
*/
