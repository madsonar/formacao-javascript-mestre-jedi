//'Segunda Missão Estelar JS'
/*
Apertem os cintos para adentramos ao 
hiper-espaço rumo a uma nova Missão Estelar JS!:)’;
*/ 

function recebeDadosFormBoot(objFormElementos){
    console.log(Object.prototype.toString.call(objFormElementos))
    var objDadosForm = new Object()
}


function retornaDataAtualFormatada(){
    var data=new Date()
    var dataFormatada=String(data.getDate()) + '/' + String(data.getMonth()+1) + '/' +  String(data.getFullYear())
    return dataFormatada
}

function exibirDadosClienteObjeto(){
    for (var i in clienteObject) {
        if (clienteObject[i]=='Marcelo') {       
            console.log(clienteObject[i])
        }
        else{
            console.log(clienteObject[i])
        }
    }
}

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
['dataNascimento',new Date('1994-07-12')],['ativo', true]]

exibirDadosClienteArray();

var clienteObject = {
    nomeCliente: 'Marcelo',
    renda:300,
    dataNascimmento: new Date('1994-07-12'),
    ativo: true
}

exibirDadosClienteObjeto()

console.log(retornaDataAtualFormatada())

var hiperEspacoRegExp = new RegExp(/Estelar/)
var textoMissao = 'Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)'

console.log('Teste',hiperEspacoRegExp.test(textoMissao))
console.log('Exec',hiperEspacoRegExp.exec(textoMissao))

try {
    for (var index = 30; index > 0; index--) {
        if(index==1)
        {
            throw new Error('Rodou 29 vezes')
        }
    }

} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}finally{
    console.log('Executou tudo do try catch')
}