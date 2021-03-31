//Segunda Missão Estelar JS
/*
Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)
*/
console.log("****************8***************************");
var missao = "Segunda Missão Estelar JS";
console.log('"', missao, '"', ", tipo ", typeof missao);
console.log("****************9***************************");

var hiperespaco = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");
console.log(hiperespaco, ", tipo ", typeof hiperespaco);

console.log("*****************10**************************");

var nomeCliente = "Diego";
var renda = 1000;
var dataNascimento = new Date("1984", "07", "12");
var ativo = true;
var ativoTrasnf = ativo ? "Sim" : "Não";

function exibirDadosClienteVariaveis() {
    console.log("Dados do cliente: \nNome: ", nomeCliente, "\nRenda: ", renda, "\nData de nascimento: ", dataNascimento.getDate(), "/", dataNascimento.getMonth(), "/", dataNascimento.getFullYear(), "\nCliente Ativo? ", ativoTrasnf);
}

exibirDadosClienteVariaveis();

console.log("*****************11*************************");

var clienteArray = [
    ["Nome", "Diego"],
    ["Renda", 1000],
    ["Nascimento", new Date("1984", "07", "12")],
    ["Ativo", true]
];

function exibirDadosClienteArray() {
    for (const value of clienteArray) {
        console.log(value[0], ": ", value[1] == true ? "Sim" : value[1] == false ? "Não" : value[1]);
    }
}
exibirDadosClienteArray();

console.log("*****************12**************************");

var clienteObject = { nome: "Diego", renda: 1000, dataNascimento: new Date("1984", "07", "12"), ativo: true }

function exibirDadosClienteObjeto() {
    for (const value in clienteObject) {
        switch (value) {
            case "nome":
                console.log("Nome do Cliente: ", clienteObject[value])
                break;

            case "renda":
                console.log("Renda: ", clienteObject[value])
                break;

            case "dataNascimento":
                console.log("Data de Nascimento: ", clienteObject[value].getDate(), "/", clienteObject[value].getMonth(), "/", clienteObject[value].getFullYear())
                break;

            case "ativo":
                console.log("Ativo: ", clienteObject[value] == true ? "Sim" : "Não")
                break;
        }
    }
}

exibirDadosClienteObjeto();

console.log("*****************13**************************");

var hoje = new Date();
var dia = hoje.getDate();
var mes = hoje.getMonth() + 1;
var ano = hoje.getFullYear();
var dataFormatada = "";

function retornaDataAtualFormatada() {
    if (dia.toString().length == "1") {
        dataFormatada = "0" + dia.toString();
    } else {
        dataFormatada = dia.toString();
    }
    if (mes.toString().length == "1") {
        dataFormatada += "/0" + mes.toString();
    } else {
        dataFormatada += "/" + mes.toString();
    }
    dataFormatada += "/" + ano.toString();
    console.log("Data Atual: ", dataFormatada);
}

retornaDataAtualFormatada();

console.log("*****************14**************************");

var hiperEspacoRegExp = new RegExp(/Estelar/);
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";
console.log("Teste: ", hiperEspacoRegExp.test(textoMissao));
console.log("Exec", hiperEspacoRegExp.exec(textoMissao));

console.log("*****************15**************************");

function decrescerNumero() {
    for (let index = 30; index > -1; index--) {
        if (index != 1) {
            console.log(index);
        } else {
            try {
                throw new Error("ooooops");
            } catch (e) {
                console.log(e.stack);
            }
            finally {
                console.log(index);
            }
        }
    }
}

decrescerNumero();

console.log("*****************16**************************");

function recebeDadosFormBoot(objFormElementos) {
console.log("Tipo: ", Object.prototype.toString.call(objFormElementos));

var objDadosForm = new Object();

console.log("nome boot: ", objFormElementos.nomeBoot.value);
objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;

console.log("email boot: ", objFormElementos.emailBoot.value);
objDadosForm.emailBoot = objFormElementos.emailBoot.value;

console.log("emailPromocionalCheckBoot: ", objFormElementos.emailPromocionalCheckBoot.checked);
objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;

console.log("formaContatoTelefoneRadioBoot: ", objFormElementos.formaContatoTelefoneRadioBoot.checked);
objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;

console.log("formaContatoEmailRadioBoot: ", objFormElementos.formaContatoEmailRadioBoot.checked);
objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;

console.log("estadoSelectBoot: ", objFormElementos.estadoSelectBoot.value);
objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;

console.log(objDadosForm);

preencherFormHtml(objDadosForm);
}

function preencherFormHtml(objDados) {
    
var form2 = document.querySelector("#formHtml");

form2.nomeHtml.value = objDados.nomeBoot;
form2.emailHtml.value = objDados.emailBoot;
form2.emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot;
form2.formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelefoneRadioBoot;
form2.formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioBoot;
form2.estadoSelectHtml.value = objDados.estadoSelectBoot;
}