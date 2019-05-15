//Segunda Missão Estelar JS
/*Apertem os cintos para adentramos ao hiper-espaço 
rumo a uma nova Missão Estelar JS!:)*/
var missao = "Segunda Missão Estelar JS";
console.log("Tipo da variável: ", typeof missao, " | Valor: " ,missao);
console.log("----------------------------");

var hiperespaco = new String("Apertem os cintos para adentramos ao "
+ "hiper-espaço rumo a uma nova Missão Estelar JS!:)");
console.log("Tipo da variável: ", typeof hiperespaco, " | Valor: " ,hiperespaco);
console.log("----------------------------");

//Item 10
var nomeCliente = "Danilo";
var renda = 6000;
var dataNascimento = new Date("1993,02,26");
var ativo = renda == 6000 ? "Retorna True" : "Retorna False";;

function exibirDadosClienteVariaveis(){
    console.log("Nome: " + nomeCliente + ", Renda: " + renda + ", Data de nascimento: " 
    + dataNascimento.toLocaleDateString() + ", Situação: " + ativo)
}

exibirDadosClienteVariaveis();
console.log("----------------------------");
//fim

//Item11
var clienteArray = [new Array("Nome do cliente: ", nomeCliente), new Array("Renda do cliente: ", renda), 
new Array("Data de nascimento: ", dataNascimento.toLocaleDateString()), new Array("Situação ativo: ", ativo)];

function exibirDadosClienteArray(){
    for (var items of clienteArray) {
        console.log(items);
    }
}
exibirDadosClienteArray();
console.log("----------------------------");
//fim

//Item12
var clienteObject = {nomeCliente, renda, dataNascimento, ativo};

function exibirDadosClienteObjeto(){ //for in, switch e if...else
    for (const item in clienteObject) {

        if (clienteObject.hasOwnProperty(item)) {
            const element = clienteObject[item];

            switch (element) {
                case nomeCliente:
                    console.log("Nome do cliente: " + nomeCliente);
                    break;
                case renda:
                    console.log("Renda mensal: " + renda);
                    break;
                case dataNascimento:
                    console.log("Data de nascimento: " + dataNascimento.toLocaleDateString());
                    break;
                case ativo:
                    console.log("Situação: " + ativo);
                    break;
            }
            
        }
        else console.log("Nenhum dado para exibir");
    }
}
exibirDadosClienteObjeto();
console.log("----------------------------");
//fim

//Item13
function retornaDataAtualFormatada(){
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() +1;
    var ano = dataAtual.getFullYear();
    var dataFormatada = '';

    if(dia.toString().length == 1){
        dataFormatada += "0" + dia + "/";
    }
    else dataFormatada += dia + "/";

    if(mes.toString().length == 1){
        dataFormatada += "0" + mes + "/";
    }
    else dataFormatada += mes + "/";

    dataFormatada += ano;

  return console.log(dataFormatada);  
}

retornaDataAtualFormatada();
console.log("----------------------------");
//fim

//Item14
var hiperEspacoRegExp = new RegExp("Estelar");
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";
console.log(hiperEspacoRegExp.test(textoMissao), hiperEspacoRegExp.exec(textoMissao));
console.log("----------------------------");
//fim

//Item15
try {
    for(var i = 30, j = 0; i >= 0; i--, j++){
        console.log(i);
        if(j == 29){
            throw new Error("Número 29. Erro lançado " + j);
        }
    }    
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}finally{
    console.log("Executou o finally");
}
console.log("----------------------------");
//fim

//Item16
function receberDadosFormBoot(objFormElementos){
    console.log("Tipo Obj: " + Object.prototype.toString.call(objFormElementos));
    
    var objDadosForm = new Object();
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;
    objDadosForm.emailPromoCheck = objFormElementos.emailPromocionalCheckBoot.checked;
    objDadosForm.formaContatoTelCheck = objFormElementos.formaContatoTelefoneRadioBoot.checked;
    objDadosForm.formaContatoEmailCheck = objFormElementos.formaContatoEmailRadioBoot.checked;
    objDadosForm.estadoSelect = objFormElementos.estadoSelectBoot.value;

    //exibir objFormElementos
    console.log("nomeBoot:", objFormElementos.nomeBoot.value);
    console.log("emailBoot:", objFormElementos.emailBoot.value);
    console.log("emailPromocionalCheckBoot:", objFormElementos.emailPromocionalCheckBoot.checke);
    console.log("formaContatoTelefoneRadioBoot:", objFormElementos.formaContatoTelefoneRadioBoot.checked);
    console.log("formaContatoEmailRadioBoot:", objFormElementos.formaContatoEmailRadioBoot.checked);
    console.log("estadoSelectBoot:", objFormElementos.estadoSelectBoot.value);

    //exibir objDadosForm
    console.log(objDadosForm);

    preencherFormHtml(objDadosForm);
    
}

function preencherFormHtml(objDados){
    var formhtml = document.querySelector('#formHtml');
    formhtml.nomeHtml.value = objDados.nomeBoot;
    formhtml.emailHtml.value = objDados.emailBoot;
    formhtml.emailPromocionalCheckHtml.checked = objDados.emailPromoCheck;
    formhtml.formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelCheck;
    formhtml.formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailCheck;
    formhtml.estadoSelectHtml.value = objDados.estadoSelect;
}



