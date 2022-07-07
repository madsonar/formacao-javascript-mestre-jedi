//Segunda Missão Estelar JS

/*

Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)

*/

var missao = "Segunda Missão Estelar JS";
console.log("Tipo: " + typeof missao, " - var missao " + missao);
var hiperespaco = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");
console.log("Tipo: " + typeof hiperespaco, " - var hiperespaco " + hiperespaco);

var nomeCliente = "Gerson";
var renda = 3000;
var dataNascimento = new Date("2017-03-22");
var ativo = true;


function exibirDadosClientesVariaveis() {
    console.log("Nome: " + nomeCliente);
    console.log("Renda: " + renda);
    console.log("Data Nascimento: " + dataNascimento);

    var i = ativo == true ? "Sim" : "Não";
    console.log("Ativo: " + i);

}

exibirDadosClientesVariaveis();
console.log("***************************************************************************************************************");

var clienteArray = [['Nome Cliente:', 'Carlos'], ['Renda:', '2700'], ['Data Nascimento:', new Date("2015-07-30")], ['Ativo:', true]];

function exibirDadosClientesArray() {

    for (var array of clienteArray) {

        if (array[0] == 'Ativo:') {
            console.log(array[0], array[1] == true ? "Sim" : "Não");
        } else {
            console.log(array[0], array[1]);
        }
    }

}
exibirDadosClientesArray();

console.log("***************************************************************************************************************");

function exibirDadosClientesObject() {

    var clienteObject = { nomeCliente: "Claudin", renda: 1700, dataNascimento: new Date(1984, 4, 25), ativo: true };

    for (var item in clienteObject) {
        switch (item) {
            case "nomeCliente":
                console.log("Nome Cliente: ", clienteObject[item]);
                break;

            case "renda":
                console.log("Renda: ", clienteObject[item]);
                break;

            case "dataNascimento":
                console.log("Data Nascimento: ", clienteObject[item]);
                break;


            default:
                console.log("Ativo: ", clienteObject[item] == true ? "Sim" : "Não");
                break;
        }
    }

}
exibirDadosClientesObject();

console.log("***************************************************************************************************************");

function retornaDataAtualFormatada(){

    var dataAtual = new Date();
    var dia = dataAtual.getDay();
    var mes = dataAtual.getMonth() + 1;
    var ano = dataAtual.getFullYear();
    var dataFormatada = "";


    if(dia.toString().length == 1){
        dataFormatada += "0" + dia.toString();
    }else{
        dataFormatada += dia.toString();
    }

    if(mes.toString().length == 1){
        dataFormatada += "/0" + mes.toString();
    }else{
        dataFormatada += "/" + mes.toString();
    }

    dataFormatada += "/" + ano.toString();

    console.log("Data Formatada: " + dataFormatada);

}
retornaDataAtualFormatada();

console.log("***************************************************************************************************************");

var hiperEspacoRegExp = new RegExp(/Estelar/);
var textoMissao = "Apertem os cintos para adentrarmos o hiper-espaço rumo a uma nova missão Estelar JS!:)";
console.log("Teste: ", hiperEspacoRegExp.test(textoMissao));
console.log("Pesquisa: ", hiperEspacoRegExp.exec(textoMissao));


console.log("***************************************************************************************************************");

try {

    for(var i = 30, c = 0; i >= 0; i--,c++){

        console.log(i,"-",c);
        if(c==29){
            throw new Error("Ocorreu um Erro na iteração " + c);
        }

    }
    
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    
}finally{
    console.log("Chegou no bloco finallly, sempre será executado")
}



