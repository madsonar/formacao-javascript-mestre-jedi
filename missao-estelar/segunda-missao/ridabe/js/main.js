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
console.log('Texto:' + hiperespaco + '-----Tipo: ' + typeof hiperespaco);

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

    ativo == true ? console.log('Ativo: Sim') : console.log('Ativo: Não');
}
exibirDadosClienteVariaveis();

//11
console.log("------------Exercico 11");
var clienteArray = [
    [
        'nomeCliente:', 'Ricardo Bene'
    ],
    [
        'renda: ', 5000
    ],
    [
        'dataNascimento:', new Date('1978-08-27')
    ],
    [
        'ativo:', true
    ]
];

function exibirDadosClienteArray() {
    for (var i of clienteArray) {

        if (i[0] == 'ativo:') {
            console.log(i[0], i[1] == true ? 'Sim' : 'Não');
        } else {
            console.log(i[0], i[1]);
        }

    }
};
exibirDadosClienteArray();

//12
console.log("------------Exercico 12");
var clienteObject = {
    nomeCliente: 'Ricardo Bene',
    renda: 45,
    dataNascimento: new Date('1980-08-27'),
    ativo: true
};

function exibirDadosClienteObjeto() {
    for (var item in clienteObject) {

        switch (item) {
            case "nomeCliente":
                console.log("Nome Clente: ", clienteObject[item]);
                break;

            case "renda":
                console.log("Renda: ", clienteObject[item]);
                break;

            case "dataNascimento":

                console.log("Data Nascimento: ", clienteObject[item]);
                break;

            case "ativo":

                console.log("Ativo: ", clienteObject[item] == true ? 'Sim' : 'Não');
                break;

            default:
                console.log(item, ": ", clienteObject[item]);
                break;
        };

    };
};
exibirDadosClienteObjeto();

//13
console.log("------------Exercico 13");

function retornaDataAtualFormatada() {
    var dataString = new Date();
    var ano = dataString.getFullYear();
    var mes = dataString.getMonth() + 1;
   
    var dataFormatdado = "";

   
    var dia = dataString.getDate();
    if (dia.toString.length == 1) {
        dataFormatdado += "0" + dia.toString();
    } else {
        dataFormatdado += dia.toString();
    }

    if (mes.toString.length == 1) {
        dataFormatdado += "/0" + mes.toString();
    } else {
        dataFormatdado += "/" + mes.toString();
    }

    dataFormatdado += "/" + ano.toString();

    return dataFormatdado;
}
console.log("Data Atual: " + retornaDataAtualFormatada()) ;

//14
console.log("------------Exercico 14");
var hiperEspacoRegExp = new RegExp(/Estelar/);
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";
console.log("Teste: " , hiperEspacoRegExp.test(textoMissao)); //Teste para verificar se existe a expressao regular setada dentro da variavel string "Retorna um boolean"
console.log("Pesquisa: ", hiperEspacoRegExp.exec(textoMissao));

//15
console.log("------------Exercico 15");
try {
    for (var i = 30; i >= 0; i--) {

        console.log(i);

        if (i == 1) { //Forçar um erro usando o trow para ir para o bloco catch
            throw new Error("Forcei um erro na iteracao 29");
        }
    }

} catch (error) {
    console.log(error.nome);
    console.log(error.message);
    console.log(error.stack);

} finally {
    console.log("Obrigado!");
}

//16
console.log("------------Exercico 16");

function recebeDadosFormBoot(elementos) {
    var objFormElementos = document.querySelector(elementos);
    console.log("Objeto tipo: ", Object.prototype.toString.call(objFormElementos));
    var objDadosForm = new Object;
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;
    objDadosForm.formaContatoRadioBoot = objFormElementos.formaContatoRadioBoot.value;
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;
    //var recebeEmail = document.getElementById("emailPromocionalCheckBoot").checked;

    if (objDadosForm.emailPromocionalCheckBoot == true) {

        objDadosForm.emailPromocionalCheckBoot = "Sim";

    } else {

        objDadosForm.emailPromocionalCheckBoot = "Não";
    }


    console.log(objDadosForm.nomeBoot);
    console.log(objDadosForm.emailBoot);
    console.log(objDadosForm.emailPromocionalCheckBoot);
    console.log(objDadosForm.formaContatoRadioBoot);
    console.log(objDadosForm.estadoSelectBoot);

    console.log("propriedades do objeto: ", objDadosForm);


    preencherFormHtml(objDadosForm); //chama a funcao que preenche os campos html
};



//Preencher os dados do form HTML com os Dados do Form Bootstrap
function preencherFormHtml(objDados) {
    document.getElementById("nomeHtml").value = objDados.nome;
    document.getElementById("emailHtml").value = objDados.email;

    if (objDados.emailPromocionalCheckBoot == "Sim") {
        document.getElementById("emailPromocionalCheckHtml").checked = true;
    } else {
        document.getElementById("emailPromocionalCheckHtml").checked = false;
    };

    if (objDados.formaContatoRadioBoot == "Telefone") {

        document.getElementById("formaContatoTelefoneRadioHtml").checked = true;
        document.getElementById("formaContatoEmailRadioHtml").checked = false;

    } else {

        document.getElementById("formaContatoTelefoneRadioHtml").checked = false;
        document.getElementById("formaContatoEmailRadioHtml").checked = true;

    };

    document.getElementById("estadoSelectHtml").value = objDados.estadoSelectBoot;

    //console.log(nomeHtml);
};