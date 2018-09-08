// Segunda Missão Estelar JS

/*
Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)
*/

var missao = "Segunda Missão Estelar JS";
console.log(missao, "Tipo:", typeof missao);

var hiperespaco = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");
console.log(hiperespaco.toString(), "Tipo:", typeof hiperespaco);

var nomeCliente = "Jose";
var renda = 7657.89;
var dataNascimento = new Date(1985, 07, 27);
var ativo = true;
function exibirDadosVariaveis() {
    console.log("Nome:", nomeCliente);
    console.log("Renda:", renda);
    console.log("Data de Nascimento:", dataNascimento.toLocaleDateString());
    console.log("Está Ativo?:", (ativo == true ? "Sim" : "Não"));
}
exibirDadosVariaveis();

var clienteArray = [["Nome Cliente:", "Jose"], ["Renda:", 7657.89], ["Data Nascimento:", new Date(1985, 07, 27)], ["Ativo:", true]];
function exibirDadosClienteArray() {
    for (const iterator of clienteArray) {
        if(iterator[0] == "Data Nascimento:"){
            console.log(iterator[0], iterator[1].toLocaleDateString());
        } else if(iterator[0] == "Ativo:"){
            console.log(iterator[0], iterator[1] == true ? "Sim" : "Não");
        } else {
            console.log(iterator[0], iterator[1]);
        }
    }
}
exibirDadosClienteArray();

var clienteObjeto = {
    nome: "José",
    renda: 7657.89,
    dataNascimento: new Date(1985, 07, 27),
    ativo: true
};
function exibirDadosClienteObjeto() {
    for (const key in clienteObjeto) {
        switch (key) {
            case "nome":
                console.log("Nome do Cliente:", clienteObjeto[key]);
                break;
            case "renda":
                console.log("Renda do Cliente:", clienteObjeto[key]);
                break;
            case "dataNascimento":
                console.log("Data de Nascimento do Cliente:", clienteObjeto[key].toLocaleDateString());
                break;
            case "ativo":
                if (clienteObjeto[key] == true) {
                    console.log("O cliente está ativo");
                } else {
                    console.log("O cliente não está ativo");
                }
                break;
            default:
                break;
        }
    }
}
exibirDadosClienteObjeto();

function retornaDataAtualFormatada(){
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1;
    var ano = dataAtual.getFullYear();
    
    var dataFormatada = "";
   
    if (dia.toString().length == 1 && mes.toString().length == 1) {
        dataFormatada += "0" + dia.toString() + "/";
        dataFormatada += "0" + mes.toString() + "/";
        dataFormatada += ano.toString();
        return dataFormatada;
    } else if (dia.toString().length == 2 && mes.toString().length == 2){
        dataFormatada += dia.toString() + "/";
        dataFormatada += mes.toString() + "/" + ano.toString();
        return dataFormatada;
    } else if (dia.toString().length == 1 && mes.toString().length == 2){
        dataFormatada += "0" + dia.toString() + "/";
        dataFormatada += mes.toString() + "/" + ano.toString();
        return dataFormatada;
    } else {
        dataFormatada += dia.toString() + "/";
        dataFormatada += "0" + mes.toString() + "/" + ano.toString();
        return dataFormatada;
    }
}
console.log(retornaDataAtualFormatada());

var hiperEspacoRegExp = new RegExp("Estelar");
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";

console.log(hiperEspacoRegExp.test(textoMissao));
console.log(hiperEspacoRegExp.exec(textoMissao));

var count = 0;
for (var i = 30; i > -1;  i-- ) {
    try {
        if(count == 29){
            //throw new Error("Erro Disparado")
        }
        count++;
        console.log("Sequencia:",i," - Iteração:", count);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    }
    
}

function recebeDadosFormBoot(objFormElementos){
    console.log("Tipo:", Object.prototype.toString.call(objFormElementos));

    var objDadosForm = new Object();
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;
    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;

    for (const key in objDadosForm) {
        console.log(objDadosForm[key]);
    }

    preencherFormHtml(objDadosForm);
}

function preencherFormHtml(objDados){
 var form = document.getElementById("formHtml");
 form.nomeHtml.value = objDados.nomeBoot;
 form.emailHtml.value = objDados.emailBoot;
 form.emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot;
 form.formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelefoneRadioBoot;
 form.formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioBoot;
 form.estadoSelectHtml.value = objDados.estadoSelectBoot;

 
}