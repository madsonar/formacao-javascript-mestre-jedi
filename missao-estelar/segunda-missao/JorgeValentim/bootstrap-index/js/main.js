//Segunda Missão Estelar JS
/*Apertem os cintos para adentramos ao hiper-espaço 
rumo a uma nova Missão Estelar JS!:)*/

var missao = "Segunda Missão Estelar JS";
console.log(typeof missao, missao);

var hiperespaco = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");
console.log(typeof hiperespaco, hiperespaco);

var nomeCliente = "Ze da Silva";
var renda = 2500;
var dataNascimento = new Date("1991-12-28");
var ativo = true;

function exibirDadosClienteVariaveis(){
    console.log("Dados do Cliente:");
    console.log("Nome: ",nomeCliente);
    console.log("Renda: ",renda);
    console.log("Data de nascimento: ",dataNascimento);
    if(ativo){
        console.log("Status :", ativo);
    }else{
        console.log("Status :", inativo);
    }
}

exibirDadosClienteVariaveis();

var clienteArray = [['nomeCliente','Juliana Lemos'],['renda',3200],['dataNascimento', new Date("1988-04-05")],['ativo',true]];

function exibirDadosClienteArray(){
    for(var array of clienteArray){
        if(array[0] == 'ativo'){
            console.log(array[0], array[1] == true ? "SIM":"NÂO");
        }else{
            console.log(array[0], array[1]);
        }
    }
}

exibirDadosClienteArray();

var clienteObject = {nomeCliente: "João", renda: 3500, dataNascimento: new Date(1993,10,25), ativo: false};

function exibirDadosClienteObjeto(){
    for(var obj in clienteObject){
        switch(obj){
            case "nomeCliente":
                console.log("Nome do Cliente: ", clienteObject[obj]);
                break;
            case "renda":
                console.log("Renda: ", clienteObject[obj]);
                break;
            case "dataNascimento":
                console.log("Data de Nascimento: ", clienteObject[obj]);
                break;
            case "ativo":
                console.log("Status: ", clienteObject[obj] == true ? "Ativo":"Inativo");
                break;
            default:
                console.log(obj , " : ", clienteObject[obj]);
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
    if (dia.toString().length == 1){
        dataFormatada += "0" + dia.toString();
    }else{
        dataFormatada += dia.toString();
    }

    if(mes.toString().length == 1){
        dataFormatada += "/0" + mes.toString();
    }else{
        dataFormatada += "/" + mes.toString();
    }
    dataFormatada += "/" + ano.toString();

    return dataFormatada;
}

console.log("Data Atual: ", retornaDataAtualFormatada());

var hiperEspacoRegExp = new RegExp(/Estelar/);
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";
console.log("Teste: ", hiperEspacoRegExp.test(textoMissao));
console.log("Pesquisa: ",hiperEspacoRegExp.exec(textoMissao));



try {
    for(var ind = 30, cont = 0; ind >= 0; ind--, cont ++){
        console.log(ind +" - "+ cont);
        if(cont == 29){
            throw new Error("Erro na interação "+cont+" na contagem");
        }
    }    
} catch (error) {
    console.log(error.nome);
    console.log(error.message);
    console.log(error.stack);
}finally{
    console.log("Bloco finally sempre sera execultado");
}

function recebeDadosFormBoot(objFormElementos){
    console.log("Tipo do Objeto: ", Object.prototype.toString.call(objFormElementos));
    var objDadosForm = new Object();

    console.log("nomeBoot :",objFormElementos.nomeBoot.value);
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;

    console.log("emailBoot :",objFormElementos.emailBoot.value);
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;

    console.log("emailPromocionalCheckBoot :",objFormElementos.emailPromocionalCheckBoot.checked);
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;

    console.log("formaContatoTelefoneRadioBoot :",objFormElementos.formaContatoTelefoneRadioBoot.checked);
    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;

    console.log("formaContatoEmailRadioBoot :",objFormElementos.formaContatoEmailRadioBoot.checked);
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;

    console.log("estadoSelectBoot :",objFormElementos.estadoSelectBoot.value);
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;

    console.log(objDadosForm);
    preencherFormHtml(objDadosForm);
}

function preencherFormHtml(objDados){
    var forHtml = document.querySelector("#formHtml");
    console.log(forHtml);

    forHtml.nomeHtml.value = objDados.nomeBoot;
    forHtml.emailHtml.value = objDados.emailBoot;
    forHtml.emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot;
    forHtml.formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelefoneRadioBoot;
    forHtml.formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioBoot;
    forHtml.estadoSelectHtml.value = objDados.estadoSelectBoot;
}

