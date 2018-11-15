//Segunda Missão Estelar JS
/*Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:*/

var missao = "Segunda Missão Estelar JS ";

console.log(missao + typeof missao);

var hiperespaco = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");

console.log (hiperespaco + typeof hiperespaco);

var nomeCliente = new String("Luziberto Mendes");
var renda = new Number(1.99);
var dataNascimento = new Date("11-15-2018");
var ativo = new Boolean (true);

function exibirDadosClienteVariaveis(){
    console.log("Nome Do Cliente: " + nomeCliente);
    console.log("Renda: " + renda);
    console.log("Data De Nascimento: "+ dataNascimento);
    ativo ? console.log("sim") : console.log("não");
}

var clienteArray = new Array([cliente1 = ["Luziberto", 3.2 , new Date ("13-02-1332")], cliente2 = ["Luziberto", 3.2, new Date ("13-02-1332")], cliente3  = ["Luziberto", 3.2, new Date ("13-02-1332")]]);

var clienteObject = new Object({nome: "Luziberto", Renda: 11.20, Data: new Date ("13-02-1332")});

function retornaDataAtualFormatada(){
    var data = new Date();
    return console.log(data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());
}

retornaDataAtualFormatada();

var hiperEspacoRegExp = new RegExp();

var textoMissao = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");

console.log(hiperEspacoRegExp.test("exec"));

for(var cont = 0; cont < 30; cont++){
    try {
        if (cont != 28){
            console.log(cont + 1);
        }else{
            console.log(veto[cont]);
        }
    } catch (error) {
        console.log("Nome do Erro: " + error.name);
        console.log("Mensagem do Erro: " + error.message);
        
    } finally {

    }
}
function recebeDadosFormBoot(objFormElementos){
    console.log(Object.prototype.toString.call(objFormElementos));
    var objForm = new Object();
    console.log(objFormElementos[3].checked);
    objDadosForm = {
        nomeBoot: objFormElementos[0].value, 
        emailBoot: objFormElementos[1].value,
        emailPromocionalCheckBoot: objFormElementos[2].checked,
        formaContatoRadioBoot: objFormElementos[3].checked,
        estadoSelectBoot: objFormElementos[5].value
    };
    console.log(objDadosForm.nomeBoot);
    console.log(objDadosForm.emailBoot);
    console.log(objDadosForm.emailPromocionalCheckBoot);
    console.log(objDadosForm.formaContatoRadioBoot);
    console.log(objDadosForm.estadoSelectBoot);

    preencherFormHtml(objDadosForm);
}

function preencherFormHtml(objDadosForm){
    var nomeHtml = document.getElementById("nomeHtml");
    
    nomeHtml.value = objDadosForm.nomeBoot;

    var emailHtml = document.getElementById("emailHtml");
    var emailBoot = document.getElementById("emailBoot");

    emailHtml.value = objDadosForm.emailBoot;

    var emailPromocionalCheckHtml = document.getElementById("emailPromocionalCheckHtml");

    emailPromocionalCheckHtml.checked = objDadosForm.emailPromocionalCheckBoot;

    var formaContatoRadioHtml = document.getElementsByName("formaContatoRadioHtml");

    formaContatoRadioHtml[0].checked = objDadosForm.formaContatoRadioBoot;

    var estadoSelectHtml = document.getElementById("estadoSelectHtml");
    estadoSelectHtml.value = objDadosForm.estadoSelectBoot;

}
