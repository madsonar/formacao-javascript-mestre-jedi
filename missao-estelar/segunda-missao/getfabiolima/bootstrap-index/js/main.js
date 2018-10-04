//Fiz utilização de Regions para organizar melhor meu código

// ‘Segunda Missão Estelar JS’
/*
    ‘Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)’
*/

var missao = 'Segunda Missão Estelar JS';
console.log("Valor da variável: " + missao, "\rTipo da variável: " + typeof missao)//imprimindo o valor da variavel e o tipo pulando linha 
console.log(missao); //imprime no console o conteudo da variável missao
console.log(typeof missao); //imprime o tipo da variável

//criando e imprimindo uma váriavel usando o construtor new
var hiperespaco = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");
console.log("Valor da variável: " + hiperespaco, "- Tipo da variável: " + typeof hiperespaco);

/*
Em ‘main.js’ crie as variáveis de nomes: ‘nomeCliente’(string), ‘renda(number), ‘dataNascimento’(date) e ‘ativo’(boolean). 
Informe dados fictícios para as variáveis. Na sequência crie uma função de nome ‘exibirDadosClienteVariaveis’ para mostrar os dados no console. 
Obs: para mostrar o valor de ativo deve ser utilizado o operador ternário para verificar se é true ou false e mostrar sim ou não respectivamente
*/

//#region 'Variáveis e chamada da função'
var nomeCliente = 'Lima';
var renda = 2800;
var dataDeNascimento = new Date("04/03/1991");
var ativo = true;

function exibirDadosClienteVariaveis() {
    console.log("Nome do Cliente:" + nomeCliente);
    console.log("Renda do Cliente:", renda);
    console.log("Data de Nascimento:", dataDeNascimento);
    console.log("Status: ", ativo == true ? "Sim" : "Não");
}
exibirDadosClienteVariaveis();
//#endregion

//#region 'Array e a chamada de sua função'
var clienteArray = [
    ['Nome do Cliente:', 'Fabio'],
    ['Renda do Cliente:', 3000],
    ['Data de Nascimento:', new Date(1991, 3, 4)],
    ['Status (ativo):', false],
];

function exibirDadosClienteArray() {
    //trazendo o primeiro valor do array
    for (const itemDoArray of clienteArray) {
        console.log(itemDoArray);
    }
    //iterando com a verificação do ativo
    for (const itemDoArray of clienteArray) {
        if (itemDoArray[0] == "Status (ativo):")
            console.log(itemDoArray[0], itemDoArray[1] == true ? "Sim" : "Não");
        else
            console.log(itemDoArray[0], itemDoArray[1]);

    }
}
exibirDadosClienteArray();
//#endregion

//#region Object e a chamada de sua função

var clienteObject = {
    nomeCliente: 'Juca',
    renda: 5450.99,
    dataDeNascimento: new Date("09/03/1945"),
    ativo: true,
};
function exibirDadosClienteObjeto() {
    for (var itemDoObjeto in clienteObject) {
        switch (itemDoObjeto) {
            //optei em imprimir acessando direto do objeto por sere dados conhecidos
            case "nomeCliente":
                console.log("Nome do Cliente:", clienteObject.nomeCliente);
                break;
            case "renda":
                //toString para converter e o replace para modificar, fiz esse ajuste após ver a correção
                console.log("Renda R$:", clienteObject.renda.toString().replace(".", ","));
                break;
            case "dataDeNascimento":
                console.log("Data de Nascimento:", clienteObject.dataDeNascimento);
                break;
            case "ativo":
                console.log("Status:", clienteObject.ativo == true ? "Sim" : "Não");
                break;
            default:
                //optei em acessar pela iteração por ser dados desconhecidos
                console.log(itemDoObjeto + ":", clienteObject[itemDoObjeto]);
                break;
        }
    }
};
exibirDadosClienteObjeto();

//#endregion

//#region ' retornaDataAtualFormatada() '
function retornaDataAtualFormatada() {
    var dataAtual = new Date();
    var dataAtualFormatada = "";
    var dia = (dataAtual.getDate()).toString();
    var mes = (dataAtual.getMonth() + 1).toString();
    var ano = (dataAtual.getFullYear()).toString();

    if (dia.length == 1)
        dataAtualFormatada = "0" + dia + "/";
    else
        dataAtualFormatada = dia + "/";

    if (mes.length == 1)
        dataAtualFormatada += "0" + mes + "/" + ano;
    else
        dataAtualFormatada += mes + "/" + ano;

    return dataAtualFormatada;
}
console.log("Data atual padrão pt/br:", retornaDataAtualFormatada());

//#endregion

//#region ' expressão regular '
var hiperEspacoRegExp = new RegExp("Estelar");
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS! :)";

console.log(hiperEspacoRegExp.test(textoMissao));
console.log(hiperEspacoRegExp.exec(textoMissao));
//#endregion

//#region ' for e try-catch-finally '
try {
    for (var i = 30, j = 0; i >= 0; i--, j++){
        if(j == 29) {
            throw new Error("Numero do erro: " + j);
        }
        console.log("Decremnto: "+i, "Incremento: "+j);
    }
} catch (error) {
    console.log(error.nome);
    console.log(error.message);
    console.log(error.Stack);
} finally {
    console.log("Fim do tratamento");
}

//#endregion

//#region ' ultimo item '
function recebeDadosFormBoot(objFormElementos){
    console.log("Tipo de dado:", Object.prototype.toString.call(objFormElementos))

    var objDadosForm = new Object();

    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;
    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;

    console.log("nomeBoot", objFormElementos.nomeBoot.value);
    console.log("emailBoot", objFormElementos.emailBoot.value);
    console.log("emailPromocionalCheckBoot", objFormElementos.emailPromocionalCheckBoot.checked);
    console.log("formaContatoTelefoneRadioBoot", objFormElementos.formaContatoTelefoneRadioBoot.checked);
    console.log("formaContatoEmailRadioBoot", objFormElementos.formaContatoEmailRadioBoot.checked);
    console.log("estadoSelectBoot", objFormElementos.estadoSelectBoot.value);

    console.log(objDadosForm);
    preencherFormHtml(objDadosForm);
}

function preencherFormHtml(objDados){
    //var dadosDoFormHtml = $('#formHtml');
    var dadosDoFormHtml = document.querySelector('#formHtml');

    dadosDoFormHtml.nomeHtml.value = objDados.nomeBoot;
    dadosDoFormHtml.emailHtml.value = objDados.emailBoot;
    dadosDoFormHtml.emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot;
    dadosDoFormHtml.formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelefoneRadioBoot;
    dadosDoFormHtml.formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioBoot;
    dadosDoFormHtml.nomeHestadoSelectHtml = objDados.estadoSelectBoot;

}

//#endregion
