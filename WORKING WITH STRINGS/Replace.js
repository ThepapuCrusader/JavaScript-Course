//Algunas ocasiones necesitaras reeemplazar un determinado valor de una cadena
//para tan critica tarea es que existe replace()

//este metodo te permite buscar un valor y reemplazarlo con otro lo que duvuelve una nueva cadena manteniendo la original(para bien o para mal)

//sintaxis: String.replace(searchValue, newValue);
//searchValue = Valor a buscar, newValue = Reemplazo del valor a buscar

//El valor a buscar puede ser una palabra, cadena o regex (Regular Expression se ahondara en eso mas adelante).

let text = "Es lebe Preußen!";
console.log(text);

let newText = text.replace("Preußen", "Deutschland"); //Valor a buscar: "Preußen", Reemplazo del valor a buscar: "Deutschland"
console.log(newText); //devuelve "Es lebe Deutschland!"


//replace() es sensible a las mayusculas/minusculas por lo que el valor a buscar debe ser estrictamente igual al valor en la cadena
//ejemplo:
let sentence = "WE MUST BEGIN A CRUSADE AGAINST THE INFIDELS"
console.log(sentence)  //devuelve "WE MUST BEGIN A CRUSADE AGAINST THE INFIDELS"

let newSentence = sentence.replace("must", "SHALL");
console.log(newSentence); //devuelve "WE MUST BEGIN A CRUSADE AGAINST THE INFIDELS" ya que "MUST" esta en mayusculas no en minusculas


//otra caracteristica de replace() es que si hay valores repetidos en la cadena solo modifica el primero que encuentre
//ejemplo
let phrase = "JavaScript has as its base the language Java, however JavaScript is more focused on web development"
console.log(phrase); //devuelve "JavaScript has as its base the language Java, however JavaScript is more focused on web development"

let newPhrase = phrase.replace("JavaScript", "C++");
console.log(newPhrase); //devuelve "C++ has as its base the language Java, however JavaScript is more focused on web development"
//como se puede ver solo modifica la primera coincidencia que encuentra


console.log(".............................................................................")
console.log(".............................................................................")


//por supuesto tambien existe una solucion para esto la cual es replaceAll() aunque no esta disponible para navegadores mas antiguos
let example = "Hello world, Goodbye world"
console.log(example) //devuelve "Hello world, Goodbye world"

let newExample = example.replaceAll("world", "Europe");
console.log(newExample); //devuelve "Hello Europe, Goodbye Europe"
