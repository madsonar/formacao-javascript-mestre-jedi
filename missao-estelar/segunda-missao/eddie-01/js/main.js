// Segunda Missão Estelar JS

/*Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!*/

// passo 8
var missao = "Segunda Missão Estelar JS"
console.log(missao)
console.log("tipo: " + typeof missao)

// passo 9
var hiperespaço = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!")
console.log(hiperespaço)
console.log("tipo: " + typeof hiperespaço)

// passo 10
var nomeCliente = "Edmon"
var renda = 8000.00
var dataNascimento = new Date("04-03-2001")
var ativo = true

function exibirDadosClienteVariaveis() {
    console.log("Cliente: " + nomeCliente)
    console.log("Renda: R$" + renda)
    console.log("Data de nascimento: " + dataNascimento)
    console.log("Ativo: ", ativo == true ? "sim" : "não")
}

exibirDadosClienteVariaveis()

// passo 11
var clienteArray = [
    ['Nome do cliente: ', 'Paulo'],
    ['Renda: R$', 3500.00],
    ['Data de nascimento', new Date("1987-03-27")],
    ['ativo: ', true]
]

function exibirDadosClienteArray() {
    for (var array of clienteArray) {
        console.log(array[0], array[1])
    }
}

exibirDadosClienteArray()

// passo 12
var clienteObject = {
    nome: "Gabriel",
    renda: 20000.00,
    dataNascimento: new Date("07-05-2000"),
    ativo: true
}

function exibirDadosClienteObjeto() {
    for (var chave in clienteObject) {
        switch (chave) {
            case "nome":
                console.log("Nome do cliente: ", clienteObject[chave])
                break;
            case "renda":
                console.log("Renda: R$", clienteObject[chave])
                break;
            case "dataNascimento":
                console.log("Data de nascimento: ", clienteObject[chave])
                break;
            case "ativo":
                console.log("ativo: ", clienteObject[chave])
                break;

            default:
                console.log(chave, clienteObject[chave])
                break;
        }

    }
}

exibirDadosClienteObjeto()

// passo 13
function retornaDataAtualFormatada(){
    var dataAtual = new Date()
    var dia = dataAtual.getDate()
    var mes = dataAtual.getMonth() + 1
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

console.log("Data atual:", retornaDataAtualFormatada())

// passo 14

var hiperEspacoRegExp = new RegExp("Estelar")
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS! c:"
console.log(hiperEspacoRegExp.test(textoMissao))
console.log(hiperEspacoRegExp.exec(textoMissao))

// passo 15
try {
    for(var c = 30, i = 0; c>=0; i++,c--){
        console.log(c, "&" ,i)
        if(i == 29){
            throw new Error("[ERRO na interação "+i)
        }
    }
} catch (error) {
    console.log(error.nome)
    console.log(error.message)
    console.log(error.stack)
    
}finally{
    console.log("Bloco finally(sempre será executado)")
}

// passo 16 (crud.html)
function recebeDadosFormBoot(objFormElementos){
    console.log("Object call tipo: ", Object.prototype.toString.call(objFormElementos))
    var objDadosForm = new Object()

    console.log("nomeBoot: ",objFormElementos.nomeBoot.value)
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value

    console.log("emailBoot: ",objFormElementos.emailBoot.value)
    objDadosForm.emailBoot = objFormElementos.emailBoot.value
     
    console.log("emailPromocionalCheckBoot: ",objFormElementos.emailPromocionalCheckBoot.checked)
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked

    console.log("formaContatoTelefoneRadioBoot: ",objFormElementos.formaContatoTelefoneRadioBoot.checked)
    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked

    console.log("formaContatoEmailRadioBoot: ",objFormElementos.formaContatoEmailRadioBoot.checked)
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked

    console.log("estadoSelectBoot: ",objFormElementos.estadoSelectBoot.value)
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value

    console.log(objDadosForm)
    preencherFormHtml(objDadosForm)
}

function preencherFormHtml(objDados){
    var formHtml = document.querySelector('#formHtml')
    console.log(formHtml)

    formHtml.nomeHtml.value = objDados.nomeBoot
    formHtml.emailHtml.value = objDados.emailBoot
    formHtml.emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot
    formHtml.formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelefoneRadioBoot
    formHtml.formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioBoot
    formHtml.estadoSelectHtml.value= objDados.estadoSelectBoot
}


