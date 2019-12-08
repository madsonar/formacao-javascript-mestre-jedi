// Segunda Missão Estelar JS

/* Apertem os cintos para 
adentramos ao hiper-espaço 
rumo a uma nova Missão Estelar JS!:) */

var missao = 'Segunda Missão Estelar JS';
console.log(missao, typeof missao);

var hiperespaco = new String('Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)');
console.log(hiperespaco, typeof hiperespaco);

var nomeCliente = 'Vitor';
var renda = 5000;
var dataNascimento = new Date('1985-09-11');
var ativo = true;

function exibirDadosClienteVariaveis() {
    console.log('Nome do cliente: ', nomeCliente);
    console.log('Renda: ', renda);
    console.log('Data de nascimento: ', dataNascimento);
    console.log('Ativo: ', ativo ? 'Sim' : 'Não');
}
exibirDadosClienteVariaveis();


var clienteArray = [
    ['nomeCliente', 'Vitor'],
    ['renda', 5000],
    ['dataNascimento', new Date('1985-09-11')],
    ['ativo', true],
];

function exibirDadosClienteArray() {
    for (var campo of clienteArray) {
        console.log(campo[0] + ': ' + campo[1]);
    }
}
exibirDadosClienteArray();

var clienteObject = {
    nomeCliente: 'Vitor',
    renda: 5000,
    dataNascimento: new Date('1985-09-11'),
    ativo: true
}

function exibirDadosClienteObjeto() {
    for(var campo in clienteObject) {
        var valor = clienteObject[campo];
        switch (typeof valor) {
            case 'boolean':
                console.log(campo + ': ' + (valor ? 'Sim' : 'Não'));
                break;
            default:
                console.log(campo + ': ' + valor);
                break;
        }
    }
}
exibirDadosClienteObjeto()


function retornaDataAtualFormatada() {
    var hoje = new Date();
    var dataFormatada = '';
    if (hoje.getDate() < 10) {
        dataFormatada += '0';
    }
    dataFormatada += hoje.getDate() + '/';
    if (hoje.getMonth() + 1 < 10) {
        dataFormatada += '0';
    }
    dataFormatada += hoje.getMonth() + 1 + '/';
    dataFormatada += hoje.getFullYear();

    return dataFormatada;
}
console.log(retornaDataAtualFormatada());

var hiperEspacoRegExp = new RegExp('Estelar');
var textoMissao = 'Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)';
console.log(hiperEspacoRegExp.test(textoMissao));
console.log(hiperEspacoRegExp.exec(textoMissao));

var interacao = 0;
for (var numero = 30; numero >= 0; numero --) {
    try {
        interacao++
        if (interacao === 29) {
            throw new Error('Erro iteração 29');
        }
    }
    catch (erro) {
        console.log(erro);
    } finally {
        console.log(numero);
    }
}

function recebeDadosFormBoot(objFormElementos) {
    console.log(Object.prototype.toString.call(objFormElementos));

    var objDadosForm = new Object();
    console.log('nomeBoot', objFormElementos.nomeBoot.value);
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;

    console.log('emailBoot', objFormElementos.emailBoot.value);
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;

    console.log('emailPromocionalCheckBoot', objFormElementos.emailPromocionalCheckBoot.checked);
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;

    console.log('formaContatoTelefoneRadioBoot', objFormElementos.formaContatoTelefoneRadioBoot.checked);
    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;
    console.log('formaContatoEmailRadioBoot', objFormElementos.formaContatoEmailRadioBoot.checked);
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;

    console.log('estadoSelectBoot', objFormElementos.estadoSelectBoot.value);
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;

    console.log(objDadosForm);
    preencherFormHtml(objDadosForm);
}

function preencherFormHtml(objDados) {
    var formHtml = document.querySelector('#formHtml');
    console.log(formHtml);

    formHtml.nomeHtml.value     = objDados.nomeBoot;
    formHtml.emailHtml.value    = objDados.emailBoot;
    formHtml.emailPromocionalCheckHtml.checked      = objDados.emailPromocionalCheckBoot;
    formHtml.formaContatoTelefoneRadioHtml.checked  = objDados.formaContatoTelefoneRadioBoot;
    formHtml.formaContatoEmailRadioHtml.checked     = objDados.formaContatoEmailRadioBoot;
    formHtml.estadoSelectHtml.value                 = objDados.estadoSelectBoot
}