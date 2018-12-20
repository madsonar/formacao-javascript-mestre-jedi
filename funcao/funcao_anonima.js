/*Função anônima é uma forma definir uma função sem nome, neste formato não pode ser invocada 
diretamente*/
/*Como usar:
- Ideal para armazenar em variáveis, objetos e array;
- Usar como callback;
- Manipulador de eventos;
- IIFE;
- Retorno de função*/
/*Vantagens---------------------------------------------------
- Função anônima não irá poluir o escopo global;
- Não pode ser chamada diretamente, evitando que qualquer pessoa possa chamar via console do 
browser;
- Simplicidade na escrita e proposito de uso;
*/
/*Desvantagens-------------------------------------------------
- Dificulta a reutilização de código;
- São difíceis de debugar;
*/

//declarar 
function ola(){
    console.log('olá')    
}
ola();

var minhaFn = function(){
    console.log('minha fn')    
};
minhaFn();

//window.onload = function(){ console.log('página carregada.') }

var carro = {marca: 'abc', ligar: function(){console.log('carro ligado')}}
carro.ligar();

(function(){
    console.log('executando uma IIFE');
})();

/*setTimeout(function er(){
    throw new Error('deu um erro :(');
})*/
setTimeout(function(){
    throw new Error('deu um erro :(');
})
