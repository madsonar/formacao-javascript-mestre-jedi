//Segunda Missão Estelar JS
/* Apertem os cintos 
para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!;)*/
/*
var missao = "Segunda Missão Estelar JS";

console.log(missao);

var hiperespaco = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!");
console.log(hiperespaco);

var nomeCliente = "Joaquim Fonseca";
var renda = 1000000;
var dataNascimento = new Date(1985, 05-1, 11,   10+1,30,40,20);
var ativo = true;

function exibirDadosClienteVariaveis (){
    console.log("Nome do cliente: ",nomeCliente);
    console.log("Renda: ", renda);
    console.log("Data de nascimento", dataNascimento);
    var msg = ativo == true ? "sim!": "nao";
console.log(msg);
}
console.log("#########");
exibirDadosClienteVariaveis();
console.log("#########");
console.log("#########");
var clienteArray = [ nomeCliente, renda, dataNascimento, ativo];

function exibirDadosClienteArray(){
    for (const value of clienteArray) {
        console.log(value);
    }
}
exibirDadosClienteArray();
console.log("##########");
console.log("##12- Object   -   for in ##");
console.log("##########");

var clienteObject = {
    nomeCliente: "Joaquim Fonseca",
    renda: 1000000,
    dataNascimento: new Date("1985-05-11"),
    ativo: true
};

var cliente2Object = [['Nome cliente: ', 'Roberta'], ['Renda: €', 3.200], ['Data de Nascimento: ', new Date("1987-03-27")], ['Ativo: ', true]];

function exibirDadosClienteObjeto() {
    for (const key in clienteObject) {
        if (clienteObject.hasOwnProperty(key)) {
            const element = clienteObject[key];
            console.log(element);
        }
    }
    for (const key in cliente2Object) {
        if (cliente2Object.hasOwnProperty(key)) {
            const element = cliente2Object[key];
            console.log(element);
        }
    }
}
exibirDadosClienteObjeto();
console.log("##########");
console.log("## 13 - retornaDataAtualFormatada ##");
console.log("##########");
function retornaDataAtualFormatada() {
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1;
    var ano = dataAtual.getFullYear();
    var dataFormatada = "";

    if (dia.toString().length == 1) {
        dataFormatada += "0" + dia.toString();
    } else {
        dataFormatada += dia.toString();

    }
    if (mes.toString().length == 1) {
        dataFormatada += "/0" + mes.toString();
    } else {
        dataFormatada += "/" + mes.toString();

    }
    dataFormatada += "/" + ano.toString();
    return dataFormatada;

}
console.log("Data Atual : " + retornaDataAtualFormatada());

console.log("##########");
console.log("## 14 - RegExp");
console.log("##########");

var hiperEspacoRegExp = new RegExp("Estelar");
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!";
function test() {
    console.log(hiperEspacoRegExp.exec(textoMissao));
    console.log(hiperEspacoRegExp.test(textoMissao)); // test se existe, retorn true/false
}
test();


    try {
        for (var i = 30, c = 0; i >= 0; i--, c++) {
        console.log(i + " - "+ c);
        if(c == 29) throw new Error("Ocorreu um erro na iteração: " + c);
        }
    }
      catch (error) {
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    }
      finally {
        console.log("Chegou no bloco finally, sempre será executado");
      }
*/

// # Nº 16
function recebeDadosFormBoot(objFormElementos){
    //console.log("Tipo de objecto: "+ Object.prototype.toString.call(objFormElementos)); // HTMLFormElement
    
    var objDadosForm = new Object();
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;
    
    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;//Radio Button (telefone )
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;//Radio Button (telefone)
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;
    console.log(objDadosForm);
    preencherFormHtml(objDadosForm);
} 
function preencherFormHtml(objDados){
    var formHtml = document.querySelector("#formHtml");
    console.log(formHtml);
    formHtml.nomeHtml.value = objDados.nomeBoot;
    formHtml.emailHtml.value = objDados.emailBoot;
    formHtml.emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot;
    formHtml.formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelefoneRadioBoot;
    formHtml.formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioBoot;
    formHtml.estadoSelectHtml.value = objDados.estadoSelectBoot;
}