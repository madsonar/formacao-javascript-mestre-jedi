var regexpLiteral = /JS/; //literal
var regexpConstrutor = new RegExp("J");

var stringCurso = "Formação Completa JavaScript - Mestre JS Jedi";

console.log(regexpLiteral.test(stringCurso));
console.log(regexpConstrutor.exec(stringCurso));

