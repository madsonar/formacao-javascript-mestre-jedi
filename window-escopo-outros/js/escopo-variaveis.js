var cliente = "Pedro";
console.log(window.cliente);
var msgVenda = "Olá " + cliente;
console.log(msgVenda, " GLOBAL");

function realizarVenda(item, valor){
    var msgVenda = "Venda realizada com sucesso!";
    //msgVenda = "Venda realizada com sucesso!";
    console.log(msgVenda, " LOCAL");
    console.log("Cliente: ", cliente);
    console.log("Item: ", item);
    console.log("Valor: ", valor);

    function total(){
        var msgVenda = "Total 6.6";
        console.log(msgVenda, " ESCOPO Function interna");
    }

    total();
}

realizarVenda("Arroz", 3.3);
//console.log(msgVenda);
//console.log(item);