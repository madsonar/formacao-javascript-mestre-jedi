//'Segunda Missão Estelar JS'
/*
Apertem os cintos para adentramos ao 
hiper-espaço rumo a uma nova Missão Estelar JS!:)’;
*/ 

function exibirDadosClienteArray() {
    console.log('Dados do cliente')
    for (var i of clienteArray) {
        console.log(i)
    }
}

function exibirDadosClienteVariaveis() {
    console.log(nomeCliente)
    console.log(renda)
    console.log(dataNascimmento)
    var resp = ativo == true ? 'Sim':'Não'
    console.log(resp)
}

var missao = 'Segunda Missão Estelar JS';

console.log(missao)
console.log(typeof(missao))

var hiperespaco = new String('Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)');
console.log(hiperespaco)
console.log(typeof(hiperespaco))

var nomeCliente = 'Rafael'
var renda ='500'
var dataNascimmento = new Date('1994-07-12')
var ativo = true

exibirDadosClienteVariaveis();

clienteArray = [['nomeCliente','Rafael'],['renda',500],
['dataNasciment0',new Date('1994-07-12')],['ativo', true]]

exibirDadosClienteArray();

var clienteObject = {}
console.log(typeof(clienteObject))