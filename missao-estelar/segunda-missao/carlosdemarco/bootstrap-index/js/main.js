// 6 
// Segunda Missão Estelar JS

// 7 
/*
Apertem os cintos para adentramos ao hiper-espaço 
rumo a uma nova Missão Estelar JS!:)
*/

// 8
var missao = "Segunda Missão Estelar JS";
console.log(missao, " - tipo: ", typeof missao);

// 9 
var hiperespaco = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");
console.log(hiperespaco, " - tipo: ", typeof hiperespaco);

// 10
var nomeCliente = "Carlos De Marco";
var renda = 10500;
var dataNascimento = new Date(1986, 09, 16);
var ativo = true;

function exibirDadosClienteVariaveis() {
    console.log("Nome cliente: ", nomeCliente);
    console.log("Renda R$ ", renda);
    console.log("Data nascimento: ", dataNascimento);
    console.log("Ativo: ", ativo ? "Sim" : "Não");
}

exibirDadosClienteVariaveis();

// 11 
var clienteArray = [
    ["Nome cliente: ", nomeCliente],
    ["Renda R$ ", renda],
    ["Data nascimento: ", dataNascimento],
    ["Ativo: ", ativo]
];

function exibirDadosClienteArray() {
    for (var item of clienteArray) {
        if (typeof item[1] == "boolean") {
            console.log(item[0], item[1] ? "Sim" : "Não");
        } else {
            console.log(item[0], item[1]);
        }
    }
}

exibirDadosClienteArray();

// 12
var clienteObject = {
    nomeCliente: nomeCliente,
    renda: renda,
    dataNascimento: dataNascimento,
    ativo: ativo
}

function exibirDadosClienteObjeto() {
    for (const property in clienteObject) {
        if (clienteObject.hasOwnProperty(property)) {
            const element = clienteObject[property];
            switch(property) {
                case "nomeCliente":
                    console.log(".: Nome cliente: ", element);
                    break;                    
                case "renda":
                    console.log(".: Renda R$ ", element);
                    break;      
                case "dataNascimento":
                    console.log(".: Data nascimento: ", element);
                    break;   
                case "ativo":
                    console.log(".: Ativo: ", element ? "Sim" : "Não");
                    break;
            }
        }
    }
}

exibirDadosClienteObjeto();

// 13
function retornaDataAtualFormatada() {
    var dataHoraAtual = new Date();
    var dia = dataHoraAtual.getDay()+1;
    var mes = dataHoraAtual.getMonth()+1;
    var ano = dataHoraAtual.getFullYear();
    var dataHoraAtualFormatado = "";
    dataHoraAtualFormatado += (dia > 9 ? dia : "0"+dia);
    dataHoraAtualFormatado += "/";
    dataHoraAtualFormatado += (mes > 9 ? mes : "0"+mes);
    dataHoraAtualFormatado += "/";
    dataHoraAtualFormatado += ano;
    return dataHoraAtualFormatado;
}

console.log(retornaDataAtualFormatada());

// 14
var hiperEspacoRegExp = RegExp("Estelar");
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";

console.log("test(): ", hiperEspacoRegExp.test(textoMissao));
console.log("exec(): ", hiperEspacoRegExp.exec(textoMissao));

// 15
for (var index = 30; index >= 0; index--) {
    try {
        console.log(index);
        if (index == 29) {
            throw new Error("Lançando erro no index 29");
        }        
    } catch (error) {
        console.log(error.message);
    }
}

// 16
// 16) 2.
function recebeDadosFormBoot(objFormElementos) {
    // 2.1
    console.log(Object.prototype.toString.call(objFormElementos));

    // 2.2
    var objDadosForm = new Object();

    // 2.3
    objDadosForm.nome = objFormElementos.nomeBoot.value;
    objDadosForm.email = objFormElementos.emailBoot.value;
    objDadosForm.emailPromocionalCheck = objFormElementos.emailPromocionalCheckBoot.checked;
    objDadosForm.formaContatoRadio = objFormElementos.formaContatoRadioBoot.value;
    objDadosForm.estadoSelect = objFormElementos.estadoSelectBoot.value;
    
    // 2.4
    console.log(objDadosForm.nome);
    console.log(objDadosForm.email);
    console.log(objDadosForm.emailPromocionalCheck);
    console.log(objDadosForm.formaContatoRadio);
    console.log(objDadosForm.estadoSelect);

    // 2.5
    preencherFormHtml(objDadosForm);
}

// 3
function preencherFormHtml(objDadosForm) {
    document.querySelector("#nomeHtml").value = objDadosForm.nome;
    document.querySelector("#emailHtml").value = objDadosForm.email;
    document.querySelector("#emailPromocionalCheckHtml").checked = objDadosForm.emailPromocionalCheck;
    {
        var radioTelefone = document.querySelector("#formaContatoTelefoneRadioHtml");
        var radioEmail = document.querySelector("#formaContatoEmailRadioHtml");
        radioTelefone.checked = false;
        radioEmail.checked = false;
        if (objDadosForm.formaContatoRadio == "telefone") {
            radioTelefone.checked = true;
        } else if (objDadosForm.formaContatoRadio == "email")  {
            radioEmail.checked = true;
        }
    }
    document.querySelector("#estadoSelectHtml").value = objDadosForm.estadoSelect;
}