//Segunda Missão Estelar JS
/*
Apertem os cintos para adentramos ao hiper-espaço 
rumo a uma nova Missão Estelar JS!:)
*/
// 08
console.log("------------Exercico 08");
var missao = "Segunda Missão Estelar JS";
console.log('Texto:' + missao + '-----Tipo: ' + typeof missao);

//09
console.log("------------Exercico 09");
var hiperespaco = new String('Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!');
console.log(hiperespaco);

//10 
console.log("------------Exercico 10");
var nomeCliente = 'Ricardo Bene';
var renda = 5000;
var dataNascimento = new Date('1978-08-27');
var ativo = true;
function exibirDadosClienteVariaveis() {
    console.log("Nome: " + nomeCliente);
    console.log("Renda: " + renda);
    console.log("Nascimento: " + dataNascimento);

    ativo == true ? console.log('Aivo: Sim') : console.log('Aivo: Não');
}
exibirDadosClienteVariaveis();

//11
console.log("------------Exercico 11");
var clienteArray = [
    { nomeCliente: 'Ricardo Bene' },
    { renda: 5000 },
    { dataNascimento: new Date('1978-08-27') },
    { ativo: true }];

function exibirDadosClienteArray() {
    for (var i of clienteArray) {
        console.log(i);
    }
}
exibirDadosClienteArray();

//12
console.log("------------Exercico 12");
var clienteObject = {
    nomeCliente: 'Ricardo Bene',
    renda: 5000,
    dataNascimento: new Date('1978-08-27'),
    ativo: true
};

function exibirDadosClienteObjeto(){
    for (var key in clienteObject) {
       console.log(key,": ",clienteObject[key]);
    }
};
exibirDadosClienteObjeto();

//13
console.log("------------Exercico 13");
function retornaDataAtualFormatada(){
    var dataString = new Date();
    var ano = dataString.getFullYear();
    var mes = dataString.getMonth()+1;
    if(mes.toString.length == 1)
        mes="0"+mes+'/';
       
    
    var dia = dataString.getDay();
    if(dia.toString.length == 1)
    dia = "0"+dia+'/';

    var novaData = dia;
    novaData += mes;
    novaData += ano
    console.log(novaData);
}
retornaDataAtualFormatada();