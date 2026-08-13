//Number: valor numerico, no hay mas ciencia.

//JS ocupa el mismo tipo de dato "Number" para enteros, decimales y valores espciales

const intNumber = 123; //number
const floatNumber = 12.3; //Number
const negativeNumber = -10; //NUMBER
const zeroNumber = 0; //N U M B E R

console.log(typeof(intNumber));
console.log(typeof(floatNumber));
console.log(typeof(negativeNumber));


//El tipo de dato Number incluye diversos tipos de valores numeros tales como los mencionado anteriormente hasta incluso casos especiales
//como Inffinity y NaN(not a number)

//Inffinity (numeros mas alla del limite maximo)

const inffiniteNumber = 1/0;
console.log(inffiniteNumber); //Inffinity
console.log(typeof inffiniteNumber); //number (pese a que excede los limites de number)


//NaN. Ciertas operaciones en JavaScript pueden devolver un numero invalido
//ejemplos:

const nanNumber = 'ABCDEFG' / 2;
console.log(nanNumber); //NaN
console.log(typeof nanNumber); //number


//PD: a parte del sistema decimal estantar (base 10) JS admite otros de numeros de sistintas bases tales como binario, octal y hexadeciaml
