//Closure
//Closure é um escopo próprio para função;
/*Entenda closure como sendo algo fechado para acesso via escopo global, externo ao closure,
e ao mesmo tempo sendo aberto a partir do escopo local interno para acessar o escopo global;*/
//Closure é um escopo isolado, encapsulado em uma função;
//Quando se cria uma função no escopo raiz, se cria uma closure para a mesma em escopo global;
/*Quando se cria uma função no escopo local de uma função, se cria uma closure em escopo local.
Somando isso a uma instrução de return e uma variável global para armazenar o closure podemos 
construir um escopo totalmente encapsulado e em memória por tempo indeterminado*/
/*Uma Closure é criada com o escopo no qual ela foi definida, mesmo que o escopo superior não
exista mais, a closure irá criar um clone temporário do escopo no qual foi criada.*/

//exemplo 1
var contadorEscopoGlobal = 0;
console.log('contadorEscopoGlobal', contadorEscopoGlobal);

function incrementar(){
    var contadorEscopoLocal = 0;
    ++contadorEscopoLocal;
    ++contadorEscopoGlobal;

    console.log('contadorEscopoLocal', contadorEscopoLocal);
}

incrementar();
incrementar();
incrementar();
//console.log('contadorEscopoLocal', contadorEscopoLocal);//ReferenceError: contadorEscopoLocal is not defined
console.log('contadorEscopoGlobal', contadorEscopoGlobal);


//exemplo 2
console.log('----------------------');
var contador;

function incrementarV2(){
    var contadorEscopoLocal = 0;

    function gravar(){
        ++contadorEscopoLocal;
        console.log('contadorEscopoLocal', contadorEscopoLocal);
    }
    contador = gravar;
}

incrementarV2();
contador();
contador();
contador();
//console.log(contadorEscopoLocal);//ReferenceError: contadorEscopoLocal is not defined
console.log(contador);

//exemplo 3 closure e IIFE
console.log('----------------------');
var contar = (function(){
    var contadorPrivado = 0;

    function setarValor(valor){
        contadorPrivado += valor;
    }

    return {
        incrementar: function(){
            setarValor(1);
        },
        decrementar: function(){
            setarValor(-1);
        },
        getValor: function(){
            return contadorPrivado;
        }
    }
})();

console.log('incrementar', contar.incrementar());
console.log('incrementar', contar.incrementar());
console.log('incrementar', contar.incrementar());
console.log('valor do contador', contar.getValor());
console.log('incrementar', contar.decrementar());
console.log('incrementar', contar.decrementar());
console.log('valor do contador', contar.getValor());


