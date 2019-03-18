// Segnda Missão Estelar JS

/*
    Aperterm os cintos para adentrarmos ao hiper-
    espaço rumo a uma nova Missão Estelar JS!:)
*/

var missao = "Segunda Missão Estelar JS"

console.log(missao)
console.log(typeof missao)

console.log("#-----------------------------------")

var hiperespaco = new String("Apertem os cintos para adentrarmos ao hiperespaço rumo a uma nova Missão Estelar JS!:)")

console.log(hiperespaco)
console.log(typeof hiperespaco)

console.log("#-----------------------------------")

var nomeCliente = "Kleiton Albuquerque"
var renda = 3000.00
var dataNascimento = new Date("1984-02-21") //YY-MM-DD
var ativo = true

function exibirDadosClientesVariaveis() {
   console.log("Cliente: ",nomeCliente)
   console.log("Renda: R$ ",renda)
   console.log("Data de nascimento: ", dataNascimento)
   console.log("Ativo: ",ativo == true ? "Cliente ativo" : "Procure sua agência para ativar sua conta")
}

exibirDadosClientesVariaveis()

console.log("#-----------------------------------")

var clienteArray = [
    ["Cliente:", "Roberta"],
    ["Renda: R$ ", 3000.00],
    ["Data de nascimento: ", new Date("1989-02-24")],
    ["Ativo: ",true]]

function exibirDadosClientesArray() {
    for (var array of clienteArray) {
        if (array[0] == "Ativo: ") {
            console.log(array[0], array[1] == true ? "SIM" : "NÃO")
        } else {
            console.log(array[0], array[1])
        }
    }
}

exibirDadosClientesArray()

console.log("#-----------------------------------")

var clienteObject = {nomeCliente: "João", renda: 5500, 
dataNascimento: new Date("1984-08-19"), ativo: false}

function exibirDadosClienteObjeto() {
    for(var chave in clienteObject){
        switch (chave) {
            case "nomeCliente":
                console.log("Nome cliente: ", clienteObject[chave])
                break;

            case "renda":
                console.log("Renda: R$", clienteObject[chave].toString().replace(".",","))
                break;

            case "dataNascimento":
                console.log("Data de nascimento: ", clienteObject[chave])
                break;

            case "ativo":
                console.log("Ativo: ", clienteObject[chave] == true ? "SIM" : "NÃO")
                break;
        
            default:
                console.log("")
                break;
        }
    }
}

exibirDadosClienteObjeto()

console.log("#-----------------------------------")

function retornaDataAtualFormatada() {
    var dataAtual = new Date() // Padrão americano
    var dia = dataAtual.getDate()
    var mes = dataAtual.getMonth()+1
    var ano = dataAtual.getFullYear()
    var dataFormatada = ""

    if (dia.toString().length == 1) {
        dataFormatada += "0" + dia.toString()
    } else {
        dataFormatada += dia.toString()
    }

    if (mes.toString().length == 1) {
        dataFormatada += "/0" + mes.toString()
    } else {
        dataFormatada += "/" + mes.toString()
    }

    dataFormatada += "/" + ano.toString()

    return dataFormatada
}

console.log("Data atual: ", retornaDataAtualFormatada())

console.log("#-----------------------------------")

var hiperEspacoRegExp = new RegExp(/Estelar/)
var textMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)"

console.log("Teste:",hiperEspacoRegExp.test(textMissao));
console.log(hiperEspacoRegExp.exec(textMissao));

console.log("#-----------------------------------")

try {
    for (var i = 30, c = 0; i >= 0; i--, c++) {
        console.log(i, "-" + c)
        if (c == 29) {
            throw new Error("Ocorreu um erro na iteração: " + c)
        }
    } 
} catch (error) {
    console.log(error.nome)
    console.log(error.message)
    console.log(error.stack)
} finally {
    console.log("Chegou no bloco finally; sempre será executado")
}

console.log("#-----------------------------------")

function recebeDadosFormBoot(objFormElementos) {
    console.log("Tipo de objeto: ", Object.prototype.toString.call(objFormElementos))

    var objDadosForm = new Object()
    console.log("nomeBoot: ",objFormElementos.nomeBoot.value)
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value

    console.log("emailBoot: ", objFormElementos.emailBoot.value)
    objDadosForm.emailBoot = objFormElementos.emailBoot.value

    console.log("emailPromocionalCheckBoot: ",objFormElementos.emailPromocionalCheckBoot.checked)
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked

    console.log("formContatoTelefoneRadioBoot: ",objFormElementos.formContatoTelefoneRadioBoot.checked)
    objDadosForm.formContatoTelefoneRadioBoot = objFormElementos.formContatoTelefoneRadioBoot.checked

    console.log("formContatoEmailRadioBoot: ", objFormElementos.formContatoEmailRadioBoot.checked)
    objDadosForm.formContatoEmailRadioBoot = objFormElementos.formContatoEmailRadioBoot.checked

    console.log("estadoSelectBoot: ", objFormElementos.estadoSelectBoot.value)
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value

    console.log(objDadosForm)
    preencherDadosFormHTML(objDadosForm)
}

function preencherDadosFormHTML(objDados) {
    var formHTML = document.querySelector("#formHtml")
    console.log(formHTML)

    formHTML.nomeHtml.value = objDados.nomeBoot
    formHTML.emailHtml.value = objDados.emailBoot
    formHTML.emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot
    formHTML.formContatoTelefoneRadioHtml.checked = objDados.formContatoTelefoneRadioBoot
    formHTML.formContatoEmailRadioHtml.checked = objDados.formContatoEmailRadioBoot
    formHTML.estadoSelectHtml.value = objDados.estadoSelectBoot
}
