console.log('------------------------------------------');
//Funções de Primeira Classe(First-Class Function)
//Cidadão de primeira Classe (First-Class Citizen)
//As funções em JavaScript são tratadas como objeto/valor;
/*
//Algumas coisas que podemos fazer como uma função em JS:
- Atribuir a função a uma variável ou propriedade de objeto;
— Passar uma função argumento para parâmetro de outra função;
— Retornar a função como valor para um chamador de outra função;
— Armazenar a função em uma estrutura de dados como o array ou objeto;
*/

//- Atribuir a função a uma variável ou propriedade de objeto;
var msg = function(){ console.log("Olá, seja bem vindo ao curso JS!") };
msg();

//— Passar uma função argumento para parâmetro de outra função;
function somar(a, b){ return a + b };
function subtrair(a, b){ return a - b };

function calculadora(fn, v1, v2){
    //regras....
    return fn(v1, v2)
}

console.log('calculadora(somar, 50, 70)', calculadora(somar, 50, 70));
console.log('calculadora(subtrair, 100, 70)', calculadora(subtrair, 100, 70));

//— Retornar a função como valor para um chamador de outra função;
function somar(a, b){ return a + b };
function subtrair(a, b){ return a - b };

function calculadora(operacao){
     if (operacao == 'somar') {
         return somar;
     } else if(operacao == 'subtrair') {
         return subtrair
     } else{
         return 'Operação inválida.';
     }
}

var retornoOperacao = calculadora('somar');
console.log('retornoOperacao', retornoOperacao);
console.log('retornoOperacao', retornoOperacao(33,20));

//— Armazenar a função em uma estrutura de dados como o array ou objeto;
var array = [function(nome){ return "Oi " + nome + "!" }];
console.log(array[0]('Fernanda'));

var objeto = {msg: function(nome){ return "Oi " + nome + "!" }};
console.log(objeto.msg("Paulo"));