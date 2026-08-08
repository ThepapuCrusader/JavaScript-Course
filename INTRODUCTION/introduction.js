//ENTEROS O "INTS"
num1 = 1;
num2 = 20;
num3 = -100;


console.log(""); //funcion para mostrar en consola


//DECIMALES O "FLOATS"
num4 = 3.14;
num5 = -4.458;
num6 = 28.34294;


//STRING O "TEXTOS"
//Pueden ser declarados con comillas dobles("") o comillas simples('')
txt1 = "HELLO";
txt = 'abcde';



//BOLEANO
bl = true;
b2 = false;


//NULL MAS ADELANTE LO ENTENDERE (VACIA A PROPOSITO, POSIBLEMENTE PARA USO FUTURO)
var1 = null;


//OBJECTO O "OBJECT" UNA CLASE BASICAMENTE
//FUNCIONAN MEDIANTE 2 COAS "PROPIEDADES Y VALORES" O "CLAVE Y VALOR" que son practicamente lo mismo
{
    type: "two worlds wars and one world cup england, england"
    color: "red"
};

let auto = {
    marca = "Ford",
    modelo = "nose de autos",
    año = "2084"
};


//SYMBOL, USADO PARA CREAR SIMBOLOS UNICOS TALES ETIQUETAS, IDENTIFICADORES ETC. INMUTABLE POR CIERTO
Symbol('hola');
Symbol('4g6%r');


//BigInt usado para numeros tan grandes como tu mama (osea numeros grandes que exceden el limite de datos tipo "number")
//PD: para crearlos hay que agregar una "n" al final
bnumber = 167923892437390749020477205703n;



//DECLARACION DE VARIABLES
//let es una variable local es decir si es declara dentro un bloque ej: un if else, ese let solo existira dentro de ese bloque
let abcde; //variable sin un valor definido
let age = 12;
console.log("A luisardo le gustan las de " + age) //mostrar en consola la varible age

//algo piola de let es que es mutable osea puedes cmabiarle el valor incluso despues de haberlo declarado
let age2 = 20;

age2 = 300;
//para hacer esto no necesitas usar "let" nuevamente ya que "age2" ya fue declarada
//funciona piola
//PD: las variables deben comenzar con una letra, guion bajo o un signo "$" pero jamas con un numero u otros caracteres especiales

let hola = 1;
let Hola = 1;
//JS es sensible a las mayusculas por lo que "hola" y "Hola" son variables distintas


//VARIABLES CONST
//A diferencia de "let", las variables declaradas mediante "const" son INMUTABLES, a diferencia de let una vez que las declaras ya no puedes cambiarlas 
//const es ideal para valores que no quieres que cambien bajo ninguna circunstancia
//PD: estas variables DEBEN TENER UN VALOR de lo contrario mostrara un error
const hg1 = 1;
//const num1 = 2; //Va a mostrar un error
console.log(num1);


//VAR, mmm bueno este tipo de variables a diferencia de las anteriores son globales
var uga = 127;

//por cierto los strings son inmutables, una vez que los declaras ni puedes cambiar su valor directamente, en lugar 
//de eso puedes asignar una nueva cadena como se muestra abajo
let developer = "Jessica";
console.log(developer);
developer = "Quincy";
console.log(developer);



//CONCATENACION
//En resumen combinar strings con otros tipos de datos

//EJEMPLO 1:
let pnombre = "Joe";
let snombre = "Mama";
console.log(pnombre + " " + snombre);
//Concatenacion y ya solo que sin darle un espacio de separacion.
console.log(pnombre + snombre);

let nombre_completo = pnombre + snombre //otra forma de concatenar
console.log(nombre_completo);

//ANEXION DE CADENAS
let salute = "The nation calls to you, Hero";
salute += ", let them remember your WRATH";
console.log(salute)
// Aca anexe un nuevo string al previamente existente "salute".

//contat()
//Concatena y ya.
//PD: es un objeto

let v1 = "BURN THE";
let v2 = "H E R E T I C S";

let vdef = v1.concat("  ", v2);
console.log(vdef);
