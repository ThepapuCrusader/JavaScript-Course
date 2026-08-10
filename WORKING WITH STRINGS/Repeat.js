//En JS havy una funcion para repetir una cadena determinadas veces no se con que finalidad pero existe
//esta funcion es repeat()

//sintaxis myVar.repeat(count)  count = el numero de veces que se repetira la cadena

//ejemplos:

let example = "PURGE";
console.log(example.repeat(4)); //"PURGEPURGEPURGEPURGE" se repite 4 veces

//no obstante este metodo tiene algunas limitaciones
//ejemplos

//  console.log(example.repeat(-1)) //devuelve RangeError ya que el argumento de repeat() no acepta valores negativos

//el argumento de repeat() debe ser un numero finito (En JS hay un valor especial llamado "Inffinity" por obvias razones no funciona con "repeat()")

//  console.log(example.repeat(Infinity))// Error: invalid count value

console.log("............................");

//aqui viene lo interesante

//si usas decimales repeat() redondeara al numero inferior mas cercano
console.log(example.repeat(2.9)); //aca redondea a 2 pese a estar a una decima del numero 3
console.log(example.repeat(5.2)); //aca redondea al numero 5


//si a repeat() le das un valor 0 devolvera una cadena vacia
console.log(example.repeat(0));


//repeat() tambien funciona con variables numericas lo que da paso a ejecuciones mas dinamicas
let count = 10;
console.log(example.repeat(count));
