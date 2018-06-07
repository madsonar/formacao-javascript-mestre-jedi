typeof window //return "object"
typeof Window //Interface return "function"
window.Window //objeto window contém uma uto referência de Window
window instanceof Window //window é uma instancia do construtor Window

//valores(propriedades) globais
window.NaN;
window.undefined;
window.Infinity;

//objetos globais
window.document //objeto document representa o DOM
typeof window.console //"object"
typeof window.console.log //"function"
typeof this.console // proprio objeto window
var global = this; //Variavel que é referencia do objeto global

//declaração de variáveis, funções, objetos
var curso = "Metre JS Jedi";
console.log(window.curso)
var funcaoSoma = function(a, b){ return a + b };
console.log(window.funcaoSoma(10,10));
var objetoPessoa = {nome: 'Prof. Madson Aguiar'}
console.log(window.objetoPessoa.nome);