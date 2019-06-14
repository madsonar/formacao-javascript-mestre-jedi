// Segunda Missão Estelar JS

/*
Apertem os cintos para adentramos ao hiper-espaço 
rumo a uma nova Missão Estelar JS!:)
*/

var missao = "Segunda Missão Estelar JS";

console.log(missao);
console.log(typeof missao);

var hiperespaco = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");

console.log(hiperespaco.toString());
console.log(typeof hiperespaco);

var nomeCliente = "Kiane L. Casagrande";
var renda = 950.0;
var dataNascimento = new Date(1995, 01, 11);
var ativo = true;

function exibirDadosClienteVariaveis() {
    console.log("Nome: " + nomeCliente);
    console.log("Renda: R$ " + renda);
    console.log("Data de Nascimento: " + dataNascimento.toLocaleDateString());
    console.log("Ativo? " + (ativo ? "Sim" : "Não"));
}

exibirDadosClienteVariaveis();

var clienteArray = [
    ["Nome", "Kiane L. Casagrande"],
    ["Renda", 950.0],
    ["Data de Nascimento", new Date(1995, 01, 11).toLocaleDateString()],
    ["Ativo", true]
];
function exibirDadosClienteArray() {
    for (let valor of clienteArray) {
        if ('Ativo' == valor[0]) {
            console.log(valor[0] + ": " + (valor[1] ? "Sim" : "Não"));
        } else {
            console.log(valor[0] + ": " + valor[1]);
        }
    }
}

exibirDadosClienteArray();

var clienteObject = {
    nomeCliente: "Kiane L. Casagrande",
    renda: 950.0,
    dataNascimento: new Date(1995, 01, 11),
    ativo: true
}

function exibirDadosClienteObjeto() {
    for (let prop in clienteObject) {
        switch (prop) {
            case 'nomeCliente':
                console.log("Nome: " + clienteObject[prop]);
                break;
            case 'renda':
                console.log("Renda: R$ " + clienteObject[prop]);
                break;
            case 'dataNascimento':
                console.log("Data de Nascimento: " + clienteObject[prop].toLocaleDateString());
                break;
            case 'ativo':
                console.log("Ativo? " + (clienteObject[prop] ? "Sim" : "Não"));
                break;
            default:
                break;
        }
    }
}

exibirDadosClienteObjeto();

function retornaDataAtualFormatada() {
    var dataNascimento = new Date();
    var dia = dataNascimento.getDate();
    var mes = dataNascimento.getMonth() + 1;
    var ano = dataNascimento.getFullYear();
    var format_data = "";

    if (dia.toString().length == 1) {
        format_data += '0' + dia.toString() + '/';
    } else {
        format_data += dia.toString() + '/';
    }

    if (mes.toString().length == 1) {
        format_data += '0' + mes.toString() + '/';
    } else {
        format_data += mes.toString() + '/';
    }

    format_data += ano.toString();

    return format_data;
}

console.log("Data atual: " + retornaDataAtualFormatada());

var hiperEspacoRegExp = new RegExp("Estelar");
var textoMissao = 'Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)';
console.log(hiperEspacoRegExp.test(textoMissao));
console.log(hiperEspacoRegExp.exec(textoMissao));

try {
    for (var i = 30, c = 0; i >= 0; i-- , c++) {
        if (c == 29) {
            throw new Error("Ocorreu um erro na iteração: " + c);
        }
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("Sempre será executado!!!");
}

function recebeDadosFormBoot(objFormElementos) {
    console.log("Object call: " + Object.prototype.toString.call(objFormElementos));
    var objDadosForm = new Object();
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;
    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;

    for (const index in objDadosForm) {
        console.log(index  + ": " + objDadosForm[index]);
    }

    preencherFormHtml(objDadosForm);
}

function preencherFormHtml(objDados) {
    var formHtml = document.querySelector("#formHtml");

    formHtml.nomeHtml.value = objDados.nomeBoot;
    formHtml.emailHtml.value = objDados.emailBoot;
    formHtml.emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot;
    formHtml.formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelefoneRadioBoot;
    formHtml.formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioBoot;
    formHtml.estadoSelectHtml.value = objDados.estadoSelectBoot;
}