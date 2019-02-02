//Segunda missao estelar JS


//Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS! :)

var missao = "Segunda missão estelar JS";
console.log("Valor da variável: ", missao, " - Tipo: ", typeof missao);

var hiperespaco = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!");
console.log("Valor da variável: ", hiperespaco, " - Tipo", typeof hiperespaco);

//Funcao

var nomeCliente = "Max";
var renda = 30;
var dataNascimento = new Date("1999-11-03");
var ativo = true;

function exibirDadosClienteVariaveis() {
    console.log("Nome Cliente: ", nomeCliente);
    console.log("Renda: ", renda);
    console.log("Data de nascimento: ", dataNascimento);
    console.log("Ativo: ", ativo == true ? "Sim" : "Nao");
}

exibirDadosClienteVariaveis();

var clienteArray = [
    ['Nome cliente: ', "Max"],
    ['Renda:', 30],
    [`Data de nascimento`, new Date("1999-11-03")],
    [`ativo`, true]
]

function exibirDadosClienteArray() {
    for (var array of clienteArray) {
        if (array[0] == `ativo`) {
            console.log(array[0], array[1] == true ? "sim" : "nao");
        } else {
            console.log(array[0], array[1]);
        }
    }
}

exibirDadosClienteArray();


clienteObject = {
    nomeCliente: "Paulo",
    renda: 40,
    dataNascimento: new Date("1992-03-09"),
    ativo: false
}

function exibirDadosClienteObjeto() {
    for (var obj in clienteObject) {
        switch (obj) {
            case "nomeCliente":
                console.log("Nome Cliente: ", clienteObject[obj]);
                break;

            case "renda":
                console.log("Renda: ", clienteObject[obj]);
                break;

            case "dataNascimento":
                console.log("Data de nascimento: ", clienteObject[obj]);
                break;

            case "ativo":
                console.log("Ativo: ", clienteObject[obj] == true ? "Sim" : "Nao");
                break;

            default:
                console.log(obj, " : ", clienteObject[obj]);
                break;
        }
    }
}

exibirDadosClienteObjeto();

function retornaDataAtualFormatada(){
    var dataAtual = new Date();
    var dia =  dataAtual.getDate();
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

console.log("Data atual: ", retornaDataAtualFormatada());


var hiperEspacoRegExp = new RegExp(/Estelar/);
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)"
console.log("Teste: ", hiperEspacoRegExp.test(textoMissao));
console.log("Pesquisa: ", hiperEspacoRegExp.exec(textoMissao));


try {
    for (var i = 30, c = 0; i >= 0; i--, c++) {
        console.log(i, " - ", c);
        if(c == 29){
            throw new Error("Ocorreu um erro na interação: "+c)
        }
    }
} catch (error) {
    console.log(error.nome);
    console.log(error.menssage);
    console.log(error.stack);
}finally{
    console.log("Chegou no bloco Finally")
}






//Formulario Bootstrap
function recebeDadosFormBoot(objFormElementos) {
    console.log("Tipo de objeto: ", Object.prototype.toString.call(objFormElementos));

    var objDadosForm = new Object();
    console.log("Nome boot", objFormElementos.nomeBoot.value);
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;

    console.log("Email Boot", objFormElementos.emailBoot.value);
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;

    console.log("emailPromocionalCheckBoot", objFormElementos.emailPromocionalCheckBoot.checked);
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;

    console.log("formaContatoTelefoneRadioBoot", objFormElementos.formaContatoTelefoneRadioBoot.checked);
    objDadosForm.formaContatoTelefoneRadioBoot =  objFormElementos.formaContatoTelefoneRadioBoot.checked;

    console.log("formaContatoEmailRadioBoot", objFormElementos.formaContatoEmailRadioBoot.checked);
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;

    console.log("estadoSelectBoot", objFormElementos.estadoSelectBoot.value);
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;

    console.log(objDadosForm);
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



