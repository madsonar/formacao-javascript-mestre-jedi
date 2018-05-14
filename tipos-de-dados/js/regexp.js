var regexpLiteral = /JS/; //literal
var regexpConstrutor = new RegExp("J");

var stringCurso = "Formação Completa JavaScript - Mestre JS Jedi";

console.log(regexpLiteral.test(stringCurso));
console.log(regexpConstrutor.exec(stringCurso));

//recuperar todoas as ocorrências de js no texto
var expTodas = new RegExp("j","ig");
var resultado = stringCurso.match(expTodas);
console.log("Tipo resultado: ", Object.prototype.toString.call(resultado));
console.log("Qtde elementos: ", resultado.length);
console.log(resultado);
for (let index = 0; index < resultado.length; index++) {
    var element = resultado[index];
    console.log("Elemento: "+ element);
}
