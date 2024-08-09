//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TAREFA DE NÚMERO 06                                                                                                      //

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* SEGUNDA MISSÃO ESTELAR JS */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TAREFA DE NÚMERO 07                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Apertem os cintos para adentrarmos ao hiper-espaço rumo a uma nova Missão Estelar JS! */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TAREFA DE NÚMERO 08                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var missao = "Segunda Missão Estelar JS"
console.log(missao)
console.log(typeof missao)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TAREFA DE NÚMERO 09                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var hiperespaco = new String("Apertem os cintos para adentrarmos ao hiper-espaço rumo a uma nova Missão Estelar JS!")
console.log(hiperespaco.toString())
console.log(typeof hiperespaco)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TAREFA DE NÚMERO 10                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var nomeCliente = "HILSON DE OLIVEIRA SANTOS"
var renda = 1420.00
var dataNacimento = Date("1969-08-14")
var ativo = true

function exibirDadosClienteVariaveis() {
    console.log("Nome do Cliente: " + nomeCliente)
    console.log("Renda R$ " + renda)
    console.log("Data de Nascimento: " + dataNacimento)
    if (ativo) {
        console.log("Ativo: SIM")
    } else {
        console.log("Ativo: NAO")
    }
    
}
exibirDadosClienteVariaveis()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TAREFA DE NÚMERO 11                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var clienteArray = new Array("HILSON DE OLIVEIRA SANTOS", 1420.00, Date("1969-08-14"), true)

function exibirDadosClienteArray() {
    console.log("Nome do Cliente: " + clienteArray[0])
    console.log("Renda R$ " + clienteArray[1])
    console.log("Data de Nascimento: " + clienteArray[2])
    if (clienteArray[3]) {
        console.log("Ativo: SIM")
    } else {
        console.log("Ativo: NAO")
    }
    
}
exibirDadosClienteArray()
console.log(typeof clienteArray)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TAREFA DE NÚMERO 12                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var clienteObject = {nomeCliente: "HILSON DE OLIVEIRA SANTOS", renda: 1420.00, dataNacimento: "1969-08-14", ativo: true}
function exibirDadosClienteObject() {
    for (var chave in clienteObject) {
        switch (chave) {
            case "nomeCliente":
                console.log("Nome do Cliente: " + clienteObject[chave])
                break
            case "renda":
                console.log("Renda R$: " + clienteObject[chave])
                break
            case "dataNascimento":
                console.log("Data Nascimento: " + clienteObject[chave])
                break
            case "ativo":
                if (clienteObject[chave]) {
                    console.log("Ativo: SIM")
                } else {
                    console.log("Ativo: NAO")
                }
                break
        }
    }
}
exibirDadosClienteObject()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TAREFA DE NÚMERO 13                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function retornaDataAtualFormatada() {
    var dataAtual = new Date()
    var dataDia = dataAtual.getDate()
    var dataMes = dataAtual.getMonth()+1
    var dataAno = dataAtual.getFullYear()
    var dataFormatada = ""
    
    if (dataDia.toString().length == 1) {
        dataFormatada += "0" + dataDia.toString()
    } else {
        dataFormatada += dataDia.toString()
    }

    if (dataMes.toString().length == 1) {
        dataFormatada += "/0" + dataMes.toString()
    } else {
        dataFormatada += "/"
    }

    dataFormatada += "/" + dataAno.toString()

    console.log("Data atual: " + dataAtual)
    console.log("Data atual formatada: " + dataFormatada)
}
retornaDataAtualFormatada()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TAREFA DE NÚMERO 14                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var hiperEspacoRegExp = new RegExp(/Estelar/)
var textoMissao = "Apertem os cintos para adentrarmos ao hiper-espaço rumo a uma nova Missão Estelar JS!"

console.log(hiperEspacoRegExp.test(textoMissao))
console.log(hiperEspacoRegExp.exec(textoMissao))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TAREFA DE NÚMERO 15                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
try {
    cont = 0
    for (var i = 30; i >= 0; i--) {
        console.log("Valor » " + i)
        if (cont == 29) {
            throw new Error("Ocorreu um erro na iteração: " + cont)
        }
        cont += 1
    }
} catch (error) {
    console.log(error.nome)
    console.log(error.message)
    console.log(error.stack)
    
} finally {
    console.log("Executou o bloco finally!")
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TAREFA DE NÚMERO 16                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function recebeDadosFormBoot(objFormElementos) {
    console.log("Tipo do objeto: " + Object.prototype.toString.call(objFormElementos))
    
    var objDadosForm = new Object()

    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value
    console.log("nomeBoot", objFormElementos.nomeBoot.value)
    
    objDadosForm.emailBoot = objFormElementos.emailBoot.value
    console.log("emailBoot", objFormElementos.emailBoot.value)

    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked
    console.log("emailPromocionalCheckBoot", objFormElementos.emailPromocionalCheckBoot.checked)

    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked
    console.log("formaContatoTelefoneRadioBoot", objFormElementos.formaContatoTelefoneRadioBoot.checked)

    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked
    console.log("formaContatoEmailRadioBoot", objFormElementos.formaContatoEmailRadioBoot.checked)

    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value
    console.log("estadoSelectBoot", objFormElementos.estadoSelectBoot.value)

    console.log(objDadosForm)

    preencherFormHTML(objDadosForm)
}

function preencherFormHTML(objDados) {
    var formHtml = document.querySelector("#formBoot")
    console.log(formHtml)

    formHtml.nomeBoot.value = objDados.nomeBoot
    formHtml.emailBoot.value = objDados.emailBoot
    formHtml.emailPromocionalCheckBoot.checked = objDados.emailPromocionalCheckBoot
    formHtml.formaContatoTelefoneRadioBoot.checked = objDados.formaContatoTelefoneRadioBoot
    formHtml.formaContatoEmailRadioBoot.checked = objDados.formaContatoEmailRadioBoot
    formHtml.estadoSelectBoot.value = objDados.estadoSelectBoot
}