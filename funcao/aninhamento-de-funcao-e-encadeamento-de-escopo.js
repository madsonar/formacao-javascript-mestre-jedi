//Aninhamento de funções e encadeamento de escopos

var produto = 'Produto A';

function orçamento(){
    var formaPagamento = 'dinheiro';
    var qtde = 3;
    var preco = 20;
    var total = qtde * preco;

    pedido();
    function pedido(){
        var numeroPedido = 2345;
        var entrega = true;
        var taxaEntrega = 2;
        totalGeral = entrega == true ? total + taxaEntrega : total;

        notaFiscal();
        //console.log("numeroNfe", numeroNfe);//ReferenceError: numeroNfe is not defined

        function notaFiscal(){
            var numeroNfe = 987298;

            console.log('>>>Nota:', numeroNfe);
            console.log('>>>Produto:', produto);
            console.log('>>>Qtde:', qtde);
            console.log('>>>Preço:', preco);
            console.log('>>>Total:', total);
            entrega == true ? console.log('>>>Taxa entrega R$:', taxaEntrega) : "";
            console.log('>>>Total geral R$:', totalGeral);

        }

    }
}

orçamento();
//console.log("numeroNfe", numeroNfe);//ReferenceError: numeroNfe is not defined