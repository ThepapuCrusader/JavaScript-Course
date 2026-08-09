//En raras ocasiones te puedes encontrar con espacios en blanco (espacios, saltos linea, tabulaciones etc), los cuales probablemente desees eliminar
//para ello existen 3 metodos en JS 
//trim(), trimStart() y trimEnd()


//trim();
//la forma mas comun de hacerlo es mediante trim()

let saludo = "  Hello World  ";
console.log(saludo); //devuelve "  Hello World  "

let fixedSaludo = saludo.trim();
console.log(fixedSaludo); //Devuelve "Hello World"


//En determinados casos quizas solo quieres elminar los espacios al inicio o al final de una cadena
//trimStart() para el incio
let saludo2 = "  Your people salutes you  ";
console.log(saludo2); //devuelve "  Your people salutes you  "
let fixedStartSaludo2 = saludo2.trimStart();
console.log(fixedStartSaludo2); //devuelve "Your people salutes you  "

//trimEnd() para el final
let fixedEndSaludo2 = saludo2.trimEnd();
console.log(fixedEndSaludo2); //devuelve "  Your people salutes you"
