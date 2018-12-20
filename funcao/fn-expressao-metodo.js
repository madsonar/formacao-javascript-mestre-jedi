//Declaração de função
//literal
function retornoDataAtualBr(){
    return new Date().toLocaleString('pt-BR');
}

console.log('retornoDataAtualBr()', retornoDataAtualBr());

//expressão
var elevarAoQuadrado = function(numero){ return numero * numero };
console.log('elevarAoQuadrado(8)', elevarAoQuadrado(8));

//auto executar fn
var mult = function(){return 2 * 2}();
console.log('auto executar fn:', mult);

//método objeto
var objetoFechaPedido = {qtde: 8, 
    valor: 10,
    somar: function(){
        return this.qtde * this.valor;
    }
}

console.log('objetoFechaPedido:', objetoFechaPedido);
console.log('objetoFechaPedido.somar():', objetoFechaPedido.somar());
