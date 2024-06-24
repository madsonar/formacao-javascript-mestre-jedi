// item 6
// Segunda Missão Estelae JS
/* item 7
Aperte os cintos para 
adentrarmos ao hiper-espaço
rumo a uma nova Missão Estela JS
*/
// item 8
function exibirMenssagem() {
    var missao = "Segunda Missão Estelae JS"
    console.log(missao)
    console.log("tipo de variavel : " + typeof missao)
}
// item 9

function fHiperespaco(mensagem) {
    var hiperespaco = new String("Aperte os cintos para" +
        "adentrarmos ao hiper-espaço" +
        "rumo a uma nova Missão Estela JS")
    console.log("tipo ==>> " + typeof hiperespaco + "  conteudo ==>> " + hiperespaco)
}
// item 10
var nomeCliente = "Gelson Carlos"
var renda = 1000
var dataNascimento = new Date("1960-11-09")
var ativo = true
function exibirDadosClienteVariavel() {
    console.log("Nome : " + nomeCliente)
    console.log("Renda : " + renda)
    console.log("Data Nascimento : " + dataNascimento)
    console.log("Ativo : ", ativo == true ? "Sim" : "Não")
}

// item 11
var clienteArray = [["nomeCliente", "Gelson Carlos"],
["renda", 1000],
["dataNascimento", new Date("1960-11-09")],
["ativo", true]]

function exibirDadosClienteArray() {
    for (var valor of clienteArray) {
        if (valor[0] == "ativo") {
            console.log(valor[0], valor[1] == true ? "Sim" : "Não")
        } else {
            console.log(valor[0], valor[1])
        }
    }
}

// item 12

var clienteObject = {
    nomeCliente: "Gelson Carlos",
    renda: 1000,
    dataNascimento: "1960-11-09",
    ativo: true
}

function exibirDadosClienteObject() {
    for (var indice in clienteObject) {
        switch (indice) {
            case "nomeCliente":
                console.log("NOME DO CLIENTE....: " + clienteObject[indice])
                break;

            case "renda":
                console.log("RENDA..............: " + clienteObject[indice])
                break;

            case "dataNascimento":
                console.log("DATA DE NASCIMENTO.: " + clienteObject[indice])
                break;
            case "ativo":
                if (clienteObject[indice] == true) {
                    console.log("ATIVO..............:" + " Sim  ")
                } else {
                    console.log("ATIVO..............:" + " Não  ")
                }
                break;

            default:
                console.log(indice + "...............: ", clienteObject[indice])

        }
    }
}



// ITEM 13

function retornaDataAtualFormatada() {
    var dataatual = new Date()
    console.log(dataatual)
    var dia = dataatual.getDate();           // 1-31
    var dia_sem = dataatual.getDay();        // 0-6 (zero=domingo)
    var mes = dataatual.getMonth();          // 0-11 (zero=janeiro)
    var ano2 = dataatual.getYear();          // 2 dígitos
    var ano4 = dataatual.getFullYear();      // 4 dígitos
    var hora = dataatual.getHours();         // 0-23
    var min = dataatual.getMinutes();        // 0-59
    var seg = dataatual.getSeconds();        // 0-59
    var mseg = dataatual.getMilliseconds();  // 0-999
    var tz = dataatual.getTimezoneOffset();  // em minutos
    mes += 1
    var messtring = mes.toString()
    if (messtring.length == 1) {
        messtring = "0" + messtring
    }
    console.log(dia + '/' + messtring + '/' + ano4)
}

// item 14
// padrão Estelar
// texto Apertem os cintos para adentrarmos ao hiper-espaço rumo a uma nova Missão Estelar JS!
// expressão regular hiperEspacoRegExp
// variavel textoMissão
function funcRegExp() {
    var textoMissão = "Apertem os cintos para adentrarmos ao hiper-espaço rumo a uma nova Missão Estelar JS!"
    var hiperEspacoRegExp = new RegExp('Estelar')
    console.log("Utilizando test")
    console.log(hiperEspacoRegExp.test(textoMissão));
    console.log("Utilizando exec")
    console.log(hiperEspacoRegExp.exec(textoMissão));
}


// item 15
//var  divisao = 0
function fordecrementa() {
    try {
        for (var index = 30; index >= 0; index--) {
            console.log(index);
            if (index == 1) {
                throw new Error("Indice 29 invalido ");
            }
        }

    } catch (e) {
        console.log("Erro " + e.message)
    } finally {
        // console.log("")
    }
}


// item 16.2.2 / 16.2.3 
function recebeDadosFormBoot(objFormElementos) {
    console.log(Object.prototype.toString.call(objFormElementos))
    console.log(objFormElementos)
    var objDadosForm = new Object();
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;
    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;
    console.log("objFormElementos.nomeBoot", objFormElementos.nomeBoot.value)
    console.log("objFormElementos.emailBoot", objFormElementos.emailBoot.value)
    console.log("objFormElementos.emailPromocionalCheckBoot ", objFormElementos.emailPromocionalCheckBoot.checked)
    console.log("objFormElementos.formaContatoTelefoneRadioBoot ", objFormElementos.formaContatoTelefoneRadioBoot.checked)
    console.log("objFormElementos.formaContatoEmailRadioBoot", objFormElementos.formaContatoEmailRadioBoot.checked)
    console.log("objFormElementos.estadoSelectBoot", objFormElementos.estadoSelectBoot.value)
    // item 16.2.4
    console.log(objFormElementos)
    //item 16.2.5 Chame a função de nome 'preencherFormHtml' 
    // a ser criada, passando por parâmetro o objeto 'objDadosForm'
    preencherFormHtml (objFormElementos)
}

//item 16.3
function preencherFormHtml (objDadosForm){
// item 16.3.1
/* Utilize alguma função de manipulação de DOM de sua escolha e
   preencha todos os campos do formulario 'formHtml' com os dados
   do objeto 'objDados'
*/
//var formulario = document.getSelection("#formHtml")
//var formulario = document.getElementById("#formHtml")
var formulario = document.querySelector("#formHtml")
console.log (formulario)

formulario.nomeHtml.value = objDadosForm.nomeBoot.value
formulario.emailHtml.value = objDadosForm.emailBoot.value
formulario.emailPromocionalCheckHtml.checked = objDadosForm.emailPromocionalCheckBoot.checked
formulario.formaContatoTelefoneRadioHtml.checked = objDadosForm.formaContatoTelefoneRadioBoot.checked
formulario.formaContatoEmailRadioHtml.checked = objDadosForm.formaContatoEmailRadioBoot.checked
formulario.estadoSelectHtml.value = objDadosForm.estadoSelectBoot.value


}












