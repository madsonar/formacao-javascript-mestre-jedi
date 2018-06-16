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
var clienteArray = [{
        nomeCliente: 'Ricardo Bene'
    },
    {
        renda: 5000
    },
    {
        dataNascimento: new Date('1978-08-27')
    },
    {
        ativo: true
    }
];

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

function exibirDadosClienteObjeto() {
    for (var key in clienteObject) {
        console.log(key, ": ", clienteObject[key]);
    }
};
exibirDadosClienteObjeto();

//13
console.log("------------Exercico 13");

function retornaDataAtualFormatada() {
    var dataString = new Date();
    var ano = dataString.getFullYear();
    var mes = dataString.getMonth() + 1;
    if (mes.toString.length == 1)
        mes = "0" + mes + '/';


    var dia = dataString.getDay();
    if (dia.toString.length == 1)
        dia = "0" + dia + '/';

    var novaData = dia;
    novaData += mes;
    novaData += ano
    console.log(novaData);
}
retornaDataAtualFormatada();

//14
console.log("------------Exercico 14");
var hiperEspacoRegExp = new RegExp("Estelar");
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";
console.log(hiperEspacoRegExp.test(textoMissao)); //Teste para verificar se existe a expressao regular setada dentro da variavel string "Retorna um boolean"
console.log(hiperEspacoRegExp.exec(textoMissao));

//15
console.log("------------Exercico 15");
try {
    for (var i = 30; i >= 0; i--) {

        console.log(i);

        if (i == 1) { //Forçar um erro usando o trow para ir para o bloco catch
            throw "Forcei um erro na iteracao 29";
        }
    }

} catch (error) {
    console.log("Detalehe do Erro!", error);

} finally {
    console.log("Obrigado!");
}

//16
console.log("------------Exercico 16");

function recebeDadosFormBoot(elementos) {
    var objFormElementos = document.querySelector(elementos);
    console.log("Objeto tipo: ", Object.prototype.toString.call(objFormElementos));
    var objDadosForm = new Object;
    objDadosForm.nome = objFormElementos[0].value;
    objDadosForm.email = objFormElementos[1].value;
    recebeEmail = objFormElementos[2].checked;

    //var recebeEmail = document.getElementById("emailPromocionalCheckBoot").checked;

    if (recebeEmail == true) {
        objDadosForm.emailPromocionalCheckBoot = "Sim";
    } else {
        objDadosForm.emailPromocionalCheckBoot = "Não";
    }


    var formaContatoTelefoneRadio = document.querySelector("[id=formaContatoTelefoneRadioBoot]");
    if (formaContatoTelefoneRadio.checked == true) {
        objDadosForm.formaContatoRadioBoot = objFormElementos[3].value;

    } else {
        objDadosForm.formaContatoRadioBoot = objFormElementos[4].value;
    }

    objDadosForm.estadoSelectBoot = objFormElementos[5].value;


    console.log(objDadosForm.nome);
    console.log(objDadosForm.email);
    console.log(objDadosForm.emailPromocionalCheckBoot);
    console.log(objDadosForm.formaContatoRadioBoot);
    console.log(objDadosForm.estadoSelectBoot);

    console.log("propriedades do objeto: ", objDadosForm.toString());


    preencherFormHtml(objDadosForm); //chama a funcao que preenche os campos html
};




function preencherFormHtml(objDados) {
    document.getElementById("nomeHtml").value = objDados.nome;
    document.getElementById("emailHtml").value = objDados.email;

    if (objDados.emailPromocionalCheckBoot == "Sim") {
        document.getElementById("emailPromocionalCheckHtml").checked = true;
    } else {
        document.getElementById("emailPromocionalCheckHtml").checked = false;
    }

    if (objDados.formaContatoRadioBoot == "Telefone") {

        document.getElementById("formaContatoTelefoneRadioHtml").checked = true;
        document.getElementById("formaContatoEmailRadioHtml").checked = false;

    } else {

        document.getElementById("formaContatoTelefoneRadioHtml").checked = false;
        document.getElementById("formaContatoEmailRadioHtml").checked = true;

    }

    document.getElementById("estadoSelectHtml").value = objDados.estadoSelectBoot

    //console.log(nomeHtml);
};