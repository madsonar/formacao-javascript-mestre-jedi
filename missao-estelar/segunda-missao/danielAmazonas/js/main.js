//Segunda Missão Estelar JS

/*
Apertem os cintos para adentramos ao hiper-espaço
rumo a uma nova Missão Estelar JS!:)
*/

var missao = 'Segunda Missão Estelar JS';
var hiperespaco = new String('Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)');

var nomeCliente = 'Darth Maul';
var renda = 27000;
var dataNascimento = new Date('1996-7-30');
var ativo = true;

var clienteArray = [
    ['Nome Cliente', 'Darth Bane'],
    ['Renda', 58000],
    ['Data Nascimento', new Date('1920-10-14')],
    ['Ativo', false]
];

var clienteObject = {
    nome: 'Darth Sidius',
    renda: 67000,
    dataNasc: new Date('1912-2-28'),
    ativo: true
};

var hiperEspacoRegExp = new RegExp(/Estelar/);
var textoMissao = 'Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)';
console.log('>> Test: ', hiperEspacoRegExp.test(textoMissao));

console.log('######################');

console.log('>> Exec: ', hiperEspacoRegExp.exec(textoMissao));

console.log('######################');

console.log('>> ' + missao + '\n>> Tipo: ' + typeof missao);
console.log('>> ' + hiperespaco + '\n>> Tipo: ' + typeof hiperespaco);

function exibirDadosClienteVariaveis() {
    console.log('>> Nome Cliente: ' + nomeCliente +
                '\n>> Renda: $' + renda + 
                '\n>> Data Nascimento: ' + dataNascimento +
                '\n>> Ativo: ' + (ativo?'Sim':'Não'));
}

function exibirDadosClienteArray() {
    for (let valor of clienteArray) {
        if (valor[0] == 'Ativo') {
            console.log('>> ' + valor[0] + ': ' + (valor[1] == true ? 'Sim' : 'Não'));    
        } else {
            console.log('>> ' + valor[0] + ': ' + valor[1]);
        }
    }
}

function exibirDadosClienteObjeto() {
    var temp = '';
    for (let index in clienteObject) {
        switch (index) {
            case 'nome':
                temp += '>> Nome Cliente: ' + clienteObject[index];
                break;
            case 'renda':
                temp += '\n>> Renda: $' + clienteObject[index];
                break;
            case 'dataNasc':
                temp += '\n>> Data Nascimento: ' + clienteObject[index];
                break;
            case 'ativo':
                clienteObject[index] ? temp += '\n>> Ativo: Sim' : temp += '\n>> Ativo: Não';
                break;
            default:
                break;
        }
    }
    console.log(temp);
}

function retornaDataAtualFormatada() {
    var dataInicial = new Date();
    var dia = dataInicial.getDate();
    var mes = dataInicial.getMonth() + 1;
    var ano = dataInicial.getFullYear();
    var dataFormatada = '';

    if (dia.toString().length == 1)
        dataFormatada += '0' + dia.toString() + '/';
    else
        dataFormatada += dia.toString() + '/';

    if (mes.toString().length == 1)
        dataFormatada += '0' + mes.toString() + '/';
    else
        dataFormatada += mes.toString() + '/';
    dataFormatada += ano;
    console.log('>> Data Atual Formatada: ' + dataFormatada);
}

console.log('######################');
console.log('>> Decrementar 30:');

for (let i = 30; i >= 0; i--) {
    try {
        console.log(i);
        if (i == 29) {
            document.getElementById('testeDiv').text('Error');
        }
    } catch (error) {
        console.log('>> Error Name: ' + error.name + '\n>> Error Message: ' +
                    error.message + '\n>> Error Stack: ' + error.stack);
        break;
    } finally {
    
    }
}

function recebeDadosFormBoot() {
    var objFormElementos = document.getElementById('formBoot');
    console.log('>> Object call (objFormElementos): ' + Object.prototype.toString.call(objFormElementos));
    var objDadosForm = new Object();
    objDadosForm.nome = objFormElementos.elements.namedItem('nomeBoot').value;
    objDadosForm.email = objFormElementos.elements.namedItem('emailBoot').value;
    objDadosForm.receberEmail = objFormElementos.elements.namedItem('emailPromocionalCheckBoot').checked;
    if (objDadosForm.receberEmail)
        objDadosForm.receberEmail = 'Sim';
    else
        objDadosForm.receberEmail = 'Não';
    objDadosForm.contato = objFormElementos.querySelector("[name=formaContatoRadioBoot]").checked;
    if (objDadosForm.contato)
        objDadosForm.contato = 'Telefone';
    else
        objDadosForm.contato = 'email';
    objDadosForm.estado = objFormElementos.elements.namedItem('estadoSelectBoot').value;

    console.log('>> Nome: ' + objDadosForm.nome);
    console.log('>> email: ' + objDadosForm.email);
    console.log('>> Receber email Promocional: ' + objDadosForm.receberEmail);
    console.log('>> Tipo de Contato: ' + objDadosForm.contato);
    console.log('>> Estado: ' + objDadosForm.estado);

    console.log('>> Object call (objDadosForm): ' + Object.prototype.toString.call(objDadosForm));

    console.log('######################');

    preencherFormHtml(objDadosForm);
}

function preencherFormHtml(obj) {
    document.getElementById('nomeHtml').value = obj.nome;
    document.getElementById('emailHtml').value = obj.email;
    if (obj.receberEmail == 'Sim')
        document.getElementById('emailPromocionalCheckHtml').checked = true;
    else
        document.getElementById('emailPromocionalCheckHtml').checked = false;
    if (obj.contato == 'Telefone')
        document.getElementById('formaContatoTelefoneRadioHtml').checked = true;
    else
        document.getElementById('formaContatoEmailRadioHtml').checked = true;
    document.getElementById('estadoSelectHtml').value = obj.estado;
}

console.log('######################');

exibirDadosClienteVariaveis();

console.log('######################');

exibirDadosClienteArray();

console.log('######################');

exibirDadosClienteObjeto();

console.log('######################');

retornaDataAtualFormatada();

console.log('######################');