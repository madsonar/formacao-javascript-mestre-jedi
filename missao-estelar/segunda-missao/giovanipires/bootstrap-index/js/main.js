//Tarefa 6
//Segunda Missão Estelar JS

//Tarefa 7
/*
Apertem os cintos para adentramos
ao hiper-espaço rumo a uma nova
Missão Estelar JS!:)
*/

//Tarefa 8
var missao = "Segunda Missão Estelar JS";
console.log("var missao é = " + missao + "do tipo " + typeof missao);

//Tarefa 9
var hiperespaco = new String('Aperte os cintos para adentrarmos ao hiper-espaço rumo a uma nova Missão estelar JS! :)');
console.log("var hiperespaco: " + hiperespaco.toString() + " - Tipo: " + typeof missao);

//Tarefa 10
var nomeCliente = "Maria";
var renda = 1500.00;
var dataNascimento = new Date('1990-09-10');
var ativo = true;

function exibirDadosClienteVariáveis() {
    console.log("Nome: " + nomeCliente);
    console.log("Renda: R$" + renda);
    console.log("Data de nascimento: " + dataNascimento);
    console.log("Ativo: ", ativo == true ? "Sim" : "Não");
}

exibirDadosClienteVariáveis();

//Tarefa 11
var clienteArray = [
    ['Nome: ', 'Maria'],
    ['Renda: R$ ', 1500.00],
    ['Data de nascimento: ', new Date('1990-09-10')],
    ['Ativo: ', true]
];

function exibirDadosClienteArray() {
    for(var i of clienteArray) {
        if(i[0] == 'Ativo: ') {
            console.log(i[0], i[1] == true ? 'Sim' : 'Não');
        } else {
            console.log(i[0], i[1]);
        }
    }
}

exibirDadosClienteArray();

//Tarefa 12
var clienteObject = {
    nome: "Maria",
    renda: 1500.00,
    dataNascimento: new Date('1990-09-10'),
    ativo: true
};

function exibirDadosCienteObjeto() {
    for(var key in clienteObject) {
        switch (key) {
            case "nome":
                console.log("Nome: ", clienteObject[key]);
                break;
            case "renda":
                console.log("Renda: R$ ", clienteObject[key].toString().replace(".",","));
                break;
            case "dataNascimento: "
                console.log("Data de nascimento: ", clienteObject[key]);
                break;
            case "ativo":
                console.log("Ativo: ", clienteObject[key] == true ? 'Sim' : 'Não');
                break;
            default:
                console.log(key, ": ", clienteObject[key]);
                break;
        }
    }
}

exibirDadosCienteObjeto();

//Tarefa 13
function retornarDataAtualFormatada() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth()+1;
    var ano = data.getFullYear();
    var dataFomatada = '';

    if(dia.toString().length == 1) {
        dataFomatada += "0" + dia.toString();
    }else{
        dataFomatada += dia.toString();
    }

    if(mes.toString().length == 1) {
        dataFomatada += "/0" + mes.toString();
    }else{
        dataFomatada += "/" + mes.toString();
    }

    dataFomatada += "/" + ano.toString();

    return dataFomatada;
}

console.log("Data: ", retornarDataAtualFormatada());

//Tarefa 14
var hiperespacoRegExp = new RegExp(/Estelar/);
var textoMissao = "Apertem os cintos para adentrarmos ao hiper-espaço rumo a uma nova Missão Estelar JS! :)";

console.log("Teste: ", hiperespacoRegExp.test(textoMissao));
console.log("Pesquisa: ", hiperespacoRegExp.exec(textoMissao));

//Tarefa 15
try {
    for (var i = 30, c = 0; i>= 0; i--, c++) {
        console.log(i, " <=> " + c);
        if(c == 29) {
            throw new Error("Ocorreu um erro na iteração: " + c);
        }
    }
} catch (error) {
    console.log(error.nome);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("Executou o bloco Finally");
}

//Tarefa 16
function receberDadosFormBoot(objFormElementos) {
    console.log("Tipo do Objeto: " + Object.prototype.toString.call(objFormElementos));

    var objDadosForm = new Object();

    console.log("nomeBoot", objFormElementos.nomeBoot.value);
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;

    console.log("emailBoot", objFormElementos.emailBoot.value);
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;

    console.log("emailPromocionalCheckBoot", objFormElementos.emailPromocionalCheckBoot.checked);
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;

    console.log("formaContatoTelefoneRadioBoot", objFormElementos.formaContatoTelefoneRadioBoot.checked);
    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;

    console.log("formaContatoEmailRadioBoot", objFormElementos.formaContatoEmailRadioBoot.checked);
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;

    console.log("estadoSelectBoot", objFormElementos.estadoSelectBoot.value);
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;

    console.log(objDadosForm);

    preencherFormHtml(objDadosForm);
}

function preencherFormHtml(objDados) {
  let formHtmlSimples = document.querySelector(#formHtml);
  console.log(formHtml);

  formHtml.nomeHtml.value = objDados.nomeBoot;
  formHtml.emailHtml.value = objDados.emailBoot;
  formHtml.emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot;
  formHtml.formaContatoTelefoneRadioHtml.checked = objDados. formaContatoTelefoneRadioBoot;
  formHtml.formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioBoot;
  formHtml.estadoSelectHtml.value = objDados.estadoSelectBoot;
}
