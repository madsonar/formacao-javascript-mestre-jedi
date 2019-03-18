//IIFE immediately-invoked function expression (expressão de função invocada imediatamente)
/*Esse padrão é frequentemente usado ao tentar evitar poluir o namespace global, porque todas
as variáveis usadas dentro do IIFE (como em qualquer outra função normal ) não são visíveis
fora de seu escopo.*/
/*IIFE faz uso de uma função anônima e é executada de imediato, criado um escopo temporário 
durante a execução da função;*/
//Segurança, você declara a função anônima, executa e ponto final;
/*Partes da IIFE
1- '()' parênteses que recebem como padrão uma função anônima concretizando um expressão a ser
avaliada;
2- 'function () {}' função anônima a ser executada com seu escopo próprio;
3- '()' operador para execução função/expressão da IIFE;
*/
(function () {    
})();

//exemplo 1 - 
//escopo local
//executar de imediato
var teste = true;

console.log('teste', teste);

(function(){
    teste = false;
    var local = true;
    //teste2 = true;
    console.log('teste', teste);
    console.log('local', local);
})();

console.log('teste', teste);
//console.log('local', local);//ReferenceError: local is not defined
//console.log('teste2', teste2);

//exemplo 2
console.log('-------------------------');
//parâmetro
//IIFE não fica poluindo escopo global
//pode retornar algo
//Segurança, você declara a função anônima, executa e ponto final;
var teste2 = true;

console.log('teste2', teste2);

var fn = (function f(win){
    win.teste2 = false;
    var local2 = true;    
    console.log('teste2', win.teste2);
    console.log('local2', local2);
    //return true;
})(this);

console.log('fn',fn);

console.log('-------------------------');
//exemplo 3
var valor = 40.4;

var cobranca = (function(vlr){
    var juros = 3.3;
    var total = (juros/100*vlr) + vlr;
    return {total: total, juros: juros};
})(valor);

console.log("Valor: R$", valor);
console.log("Juros: R$", cobranca.juros);
console.log("Total: R$", cobranca.total.toFixed(2));
console.log(cobranca);