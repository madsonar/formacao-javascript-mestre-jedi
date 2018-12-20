/*Hoisting ou içamento é uma técnica que o interpretador do javaScript usar para elevar para o 
topo do escopo as declarações de variáveis e funções que estejam espalhado pelo código, desta
forma você pode referênciar uma função ou variável em determinada linha do código mesmo que as
referidas declarações estejam em linhas posteriores*/
/*Obs: O Hoisting eleva apenas a declaração da variável ou função, desconsiderando a 
inicialização da mesma, desta forma tome cuidado ao usar valores de variável ou função que
tenham sido atribuídas a uma variável*/
//Boa prática, declarar tudo no início do código

//Com variáveis-----------------------------------------
//exemplo 1
var nome = 'Pedro';
console.log('nome:', nome);//ReferenceError: nome is not defined

//exemplo 2
//var sobrenome;
console.log('sobrenome:', sobrenome);//mostrar o valor undefined
var sobrenome = 'Silva';//sobrenome = 'Silva';
console.log('sobrenome:', sobrenome);

//Com funções----------------------------------------------
console.log("----------------------------------------------")
//exemplo 1
msgSaudacao();

function msgSaudacao(){
    console.log("Olá, seja bem vindo!");
}

//exemplo 2
//msg();//TypeError: msg is not a function

var msg = function(){
    console.log("Olá, seja bem vindo!");
}

msg();