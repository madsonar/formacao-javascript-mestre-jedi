//Segunda Missão Estelar JS
/*
Apertem os cintos para adentramos ao hiper-
espaço rumo a uma nova Missão Estelar JS!:
*/

var missao = "Segunda Missão Estelar JS";
console.log("Valor: ", missao, "Tipo: ", typeof(missao));

var hiperespaco = new String("‘Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");

var nomeCliente = new String("Rennan Neves");
var renda = new Number(4000.00);
var dataNascimento = new Date("1990-08-03");
var ativo = false;

function exibirDadosClienteVariaveis(){
    console.log("Nome: ", nomeCliente);
    console.log("Renda: ", renda);
    console.log("Data de Nascimento: ", dataNascimento);
    console.log(ativo ? "sim" : "não");
}

exibirDadosClienteVariaveis();

var clienteArray = [ ["nome", "Rennan Neves"],  ["renda", 4000.00],  ["dataNascimento", new Date("1990-08-03")], ["ativo", false] ];

function exibirDadosClienteArray(){
    for(var valor of clienteArray){
        if(valor[0] == "ativo"){
            console.log("Ativo: ", ativo ? "SIM": "NÃO");
        }else
        console.log(valor[0], valor[1]);    
    }
}
exibirDadosClienteArray();

var clienteObject = {nome: 'Rennan Neves',  renda: '4000.00',  dataNascimento: new Date("1990-08-03"), ativo: false };

function exibirDadosClienteObjeto(){
    for(var item in clienteObject){
        switch (item) {
            case "nome":
                console.log("Nome Cliente:", clienteObject[item]);
                break;

                case "renda":
                console.log("Renda: ", clienteObject[item]);
                break;
            
                case dataNascimento:
                console.log("Data Nascimento: ", clienteObject[item]);
                break;

                case "ativo":
                console.log("Ativo: ", clienteObject[item] ? "SIM": "NÃO");
                break;
            default:
            console.log("ITEM: ", clienteObject[item]);
                break;
        }
    }

}
exibirDadosClienteObjeto();

function retornaDataAtualFormatada(){
    var hoje = new Date();
    var dia = hoje.getDate();
    var mes = hoje.getMonth() +1;
    var ano = hoje.getFullYear();
    var hojeFormatado = '';

    if(dia.toString().length == 1){
        hojeFormatado +=  "0" + dia.toString();
    }else{
        hojeFormatado += dia.toString();
    }

    if(mes.toString().length == 1){
        hojeFormatado +=  "/0" + mes.toString();
    }else{
        hojeFormatado += "/" + mes.toString();
    }

    hojeFormatado += "/" + ano.toString();

    return hojeFormatado;
}

console.log("Data Atual: ", retornaDataAtualFormatada());

var hiperEspacoRegExp = new RegExp(/Estelar/);
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";
console.log("Teste: ", hiperEspacoRegExp.test(textoMissao));
console.log("Info da Pesquisa: ", hiperEspacoRegExp.exec(textoMissao));

try {
    for(var i = 30, j = 0; i >= 0; i--, j++){
        console.log(i);
        if(j == 29){
            throw new Error("Interação de Número 29 Encontrada. Erro lançado");
        }
    }    
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}finally{
    console.log("Executou o bloco Finally");
}

function recebeDadosFormBoot(objFormElementos){
    console.log("Tipo Objeto: ", Object.prototype.toString.call(objFormElementos));
    var objDadosForm = new Object();
    console.log("nomeBoot", objFormElementos.nomeBoot.value);
    console.log("emailBoot", objFormElementos.emailBoot.value);
    console.log("emailPromocionalCheckBoot", objFormElementos.emailPromocionalCheckBoot.checked);
    console.log("formaContatoTelefoneRadioBoot", objFormElementos.formaContatoTelefoneRadioBoot.checked);
    console.log("formaContatoEmailRadioBoot", objFormElementos.formaContatoEmailRadioBoot.checked);
    console.log("estadoSelectBoot", objFormElementos.estadoSelectBoot.value);

    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;
    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;

    console.log(objDadosForm);
    preencherFormHtml(objDadosForm);
    
}

function preencherFormHtml(objDados){
    var form = document.querySelector("#formHtml");
    form.nomeHtml.value = objDados.nomeBoot;
    form.emailHtml.value = objDados.emailBoot;
    form.emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot;
    form.formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelefoneRadioBoot;
    form.formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioBoot;
    form.estadoSelectHtml.value = objDados.estadoSelectBoot;
}