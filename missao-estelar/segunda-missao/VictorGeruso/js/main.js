//6
//Segunda Missão Estelar JS

//7
/*
Aperte os cintos para adentrarmos ao hiper-espaço 
rumo a uma nova Missão estelar JS! :)
*/

//8
console.log("++++Item 8++++");
var missao = "Segunda Missão Estelar JS";
console.log("Texto: " + missao + " - Tipo: " + typeof missao);

//9
console.log("++++Item 9++++");
var hiperespaco = new String('Aperte os cintos para adentrarmos ao hiper-espaço rumo a uma nova Missão estelar JS! :)');
console.log("Texto: " + hiperespaco.toString() + " - Tipo: " + typeof missao);

//10
console.log("++++Item 10++++");
var nomeCliente = "Carlos";
var renda = 900.00;
var dataNascimento = new Date('1996-05-02');
var ativo = true;

function exibirDadosClienteVariáveis() {
    console.log("Nome: " + nomeCliente);
    console.log("Renda: R$" + renda);
    console.log("Data de nascimento: " + dataNascimento);
    var usuarioAtivo = (ativo == true) ? "sim" : "não";
    console.log("Ativo: " + usuarioAtivo);
}

exibirDadosClienteVariáveis();

//11
console.log("++++Item 11++++");
var clienteArray = [
    [
        'Nome:', 'Victor Geruso'
    ],
    [
        'renda: R$', 1000
    ],
    [
        'Data de nascimento:', new Date('1978-12-06')
    ],
    [
        'Ativo:', true
    ]
];

function exibirDadosClienteArray() {
    for(var i of clienteArray) {
        if(i[0] == 'Ativo: ') {
            console.log(i[0], i[1] == true ? 'sim' : 'não');
        } else {
            console.log(i[0], i[1]);
        }
    }
}

exibirDadosClienteArray();

//12
console.log("++++Item 12++++");
var clienteObject = {
    nome: "Andre",
    renda: 4000,
    dataNascimento: new Date('1995-05-30'),
    ativo: true
};

function exibirDadosCienteObjeto() {
    for(var key in clienteObject) {
        switch (key) {
            case "nome":
                console.log("Nome:", clienteObject[key]);
                break;
            case "renda":
                console.log("Renda: R$", clienteObject[key]);
                break;
            case "dataNascimento":
                console.log("Data de nascimento:", clienteObject[key]);
                break;
            case "ativo":
                console.log("Ativo:", clienteObject[key] == true ? 'sim' : 'não');
                break;
            default:
                console.log(key, ": ", clienteObject[key]);
                break;
        }
    }
}

exibirDadosCienteObjeto();

//13
console.log("++++Item 13++++");
function retornarDataAtualFormatada() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth()+1;
    var ano = data.getFullYear();
    var dataFomatada = '';

    if(dia.toString().length == 1) {
        dataFomatada += "0" + dia.toString();
    }else{
        dataFomatada += dia.toString();
    }

    if(mes.toString().length == 1) {
        dataFomatada += "/0" + mes.toString();
    }else{
        dataFomatada += "/" + mes.toString();
    }

    dataFomatada += "/" + ano.toString();

    return dataFomatada;
}

console.log(retornarDataAtualFormatada());

//14
console.log("++++Item 14++++");
var hiperespacoRegExp = new RegExp('Estelar');
var textoMissao = "Apertem os cintos para adentrarmos ao hiper-espaço rumo a uma nova Missão Estelar JS! :)";

console.log(hiperespacoRegExp.test(textoMissao));
console.log(hiperespacoRegExp.exec(textoMissao));

//15
console.log("++++Item 15++++");
var num = 30;
try {
    for (let index = 0; index >= 0 ; index++) {
        console.log(num);
        num--;
        if(index == 29) {
            throw new Error("Interação 29");
        }
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("Executou o bloco Finally");
}

//16
console.log("++++Item 16++++");
function receberDadosFormBoot(objFormElementos) {
    console.log("Tipo do Objeto: " + Object.prototype.toString.call(objFormElementos));
    var objDadosForm = new Object();
    
    objDadosForm.nome = objFormElementos.nomeBoot.value;
    objDadosForm.email = objFormElementos.emailBoot.value;
    objDadosForm.emailPromo = objFormElementos.emailPromocionalCheckBoot.checked;
    objDadosForm.formaContato = objFormElementos.formaContatoRadioBoot.value;
    objDadosForm.estado = objFormElementos.estadoSelectBoot.value;

    if(objDadosForm.emailPromo) {
        objDadosForm.emailPromo = 'sim';
    } else {
        objDadosForm.emailPromo = 'não';
    }

    if(objDadosForm.formaContato == "1") {
        objDadosForm.formaContato = 'telefone';
    } else {
        objDadosForm.formaContato = 'email';
    }

    console.log(objDadosForm.nome);
    console.log(objDadosForm.email);
    console.log(objDadosForm.emailPromo);
    console.log(objDadosForm.formaContato);
    console.log(objDadosForm.estado);

    console.log("Propriedade do objeto: ", objDadosForm);

    preencherFormHTML(objDadosForm);
}

function preencherFormHTML(objDados) {
    document.getElementById('nomeHtml').value = objDados.nome;
    document.getElementById('emailHtml').value = objDados.email;
    
    if(objDados.emailPromo == "sim") {
        document.getElementById('emailPromocionalCheckHtml').checked = true;
    } else {
        document.getElementById('emailPromocionalCheckHtml').checked = false;
    }

    if(objDados.formaContato == "telefone") {
        document.getElementById('formaContatoTelefoneRadioHtml').checked = true;
        document.getElementById('formaContatoEmailRadioHtml').checked = false;
    } else {
        document.getElementById('formaContatoTelefoneRadioHtml').checked = false;
        document.getElementById('formaContatoEmailRadioHtml').checked = true;
    }

    document.getElementById('estadoSelectHtml').value = objDados.estado;
}
