// Item 6
// Segunda Missão Estelar JS

// Item 7
/**
 * Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão 
 * Estelar JS!:)
 */

 // Item 8
var missao = 'Segunda Missão Estelar JS';
//console.log(typeof missao, 'var missão: '+missao);

// Item 9
var hiperespaco = new String('Apertem os cintos para adentramos ao hiper-espaço\
 rumo a uma nova Missão Estelar JS!:)');
//console.log('Valor da var hiperespaco: '+hiperespaco, 'Tipo:',typeof
//hiperespaco);

/**
 * 10 – Em ‘main.js’ crie as variáveis de nomes: 
 * ‘nomeCliente’(string), 
 * ‘renda(number), 
 * ‘dataNascimento’(date) e 
 * ‘ativo’(boolean). 
 * Informe dados fictícios para as variáveis. Na sequência crie uma função de 
 * nome ‘exibirDadosClienteVariaveis’ para mostrar os dados no console. 
 * Obs: para mostrar o valor de ativo deve ser utilizado o operador ternário 
 * para verificar se é true ou false e mostrar sim ou não respectivamente;
 */
var nomeCliente = 'Abreu não pagou, nem eu,, fuii!!!!';
var renda = 6969;
var dataNascimento = new Date('01/04/2000');
var ativo = true;

function exibirDadosClientesVariaveis(nomeCliente, 
                                        renda, 
                                        dataNascimento, 
                                        ativo){
    console.log('Nome do Desinfeliz: '+nomeCliente);
    console.log('Renda: '+renda);
    console.log('Data dos fatos: '+dataNascimento, typeof dataNascimento);
    ativo ? console.log('Ativo: Sim uai'): console.log('Ativo: Não!');
}

//exibirDadosClientesVariaveis(nomeCliente, renda, dataNascimento, ativo);

// fim item 10

/**
 * 11 – Crie a mesma estrutura do item 10, porém em formato de Array de nome 
 * ‘clienteArray’, sendo cada elemento um novo array que armazene o nome do 
 * campo e valor. Na sequência crie uma função de nome ‘exibirDadosClienteArray’
 * para mostrar os dados no console fazendo uso do for of.
 */

var clienteArray = [['Nome','Josilnes Caprabulion Joavek'],
                    ['Renda',50999.87],
                    ['Data de Nascimento',new Date('01/04/2000')],
                    ['Ativo',true]];

function exibirDadosClienteArray(clienteArray){
    var ativo = false;
    for (var campoArray of clienteArray){

        if (campoArray[0] == 'Ativo'){
            ativo = campoArray[1] ? 'SIM':'NÃO';
            console.log(campoArray[0]+': '+ativo);
        } else {
            console.log(campoArray[0]+': '+campoArray[1]);
        }
    }
}

//exibirDadosClienteArray(clienteArray);

/**
 * 12 – Crie a mesma estrutura do item 10, porém em formato de Object com nome 
 * ‘clienteObject’. Na sequência crie uma função de nome 
 * ‘exibirDadosClienteObjeto’ para mostrar os dados no console fazendo uso do 
 * for in, switch e if...else para mostrar os nomes das propriedades de forma 
 * adequada para o usuário.
 */

var clienteObject = {
    nome:'Abelailds Kalinatu Franchoulds',
    renda: 2000.00,
    dataNascimento: new Date('01/04/2000'),
    ativo: true
}

function exibirDadosClienteObjeto(clienteObject){
    for (var item in clienteObject){
        switch (item){
            case 'nome':
                console.log('Nome: '+clienteObject[item]);
                break;
            case 'renda':
                console.log('Renda: '+clienteObject[item]);
                break;
            case 'dataNascimento':
                console.log('Data de Nascimento: '+clienteObject[item]);
                break;
            case 'ativo':
                if(clienteObject[item] === true)
                    console.log('Ativo: SIM');
                else
                    console.log('Ativo: NÃO');
                break;
        }
    }
}

//exibirDadosClienteObjeto(clienteObject);


/**
 * 13 – Crie uma função de nome ‘retornaDataAtualFormatada’ que retorne a data 
 * atual no formato string (DD/MM/YYYY), nesta função deve ser utilizado o 
 * construtor Date e seus respectivos métodos para retornar dia, mês e ano. 
 * Utilize a estrutura if...else e operador de atribuição ‘+=’ para auxiliar na 
 * formatação da data, na sequencia chame a função e imprima seu retorno no 
 * console.
 */

 function retornaDataAtualFormatada(){
    var dataAtual = new Date();
    var dia = dataAtual.getDay()
    var mes = dataAtual.getMonth() +1;
    var ano = dataAtual.getFullYear();

    if(mes < 10)
        mes = '0' + mes.toString();
    else
        mes = mes.toString();

    if(dia < 10)
        dia = '0' + dia.toString();
    else
        dia = dia.toString();

    ano = ano.toString();
        
    console.log(dia+'/'+mes+'/'+ano);
 }

 //retornaDataAtualFormatada();


 /**
  * 14- Crie uma expressão regular de nome ‘hiperEspacoRegExp’ com o padrão 
  * ‘Estelar’ através da função construtora, na sequencia crie uma variável de 
  * nome string ‘textoMissao’ com o texto a seguir, por fim teste o padrão com a
  * função ‘test’ e execute a mesma com ‘exec’ para mostrar os dados do índice 
  * da pesquisa no console.
  */

  var hiperEpacoRegExp = new RegExp('Estelar');

  var textoMissao = 'Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)';

  if (hiperEpacoRegExp.test(textoMissao))
    //console.log(hiperEpacoRegExp.exec(textoMissao));


/**
 * 15- Crie uma estrutura de código que mostre os números de 0 a 30 de forma de-
 * crescente com uso do for, faça uso do try catch finally, na mesma implementa-
 * ção dispare um error na iteração 29 para que o bloco catch possa tratar e 
 * mostrar no console os detalhes do erro.
 */

/*
try{
    for (var i = 30, c = 0; i>0;i--, c++){
        console.log(i,'-',c);
        if (c == 29)
            throw new Error('DFHJMN');
    }
}
catch(error){
    console.log(error.nome);
    console.log(error.message);
    console.log(error.stack);
}
finally{
    console.log('Essa treta sempre executa!!!!!!');
}
*/


/**
 * 16 – Faça uso do arquivo ‘crud.html’ para implementar as instruções a seguir:
 */

/**
 * 2 -) No arquivo main.js crie a função ‘recebeDadosFormBoot’ que deve receber 
 * um objeto de nome ‘objFormElementos’;
 */
function recebeDadosFormBoot(objFormElementos){

    /**
     * 2.2 -) Crie um objeto chamado ‘objDadosForm’ através do construtor Object;
     */
    var objDadosForm = new Object();

    /**
     * 2.3 -) Recupere todos os valores dos campos do formulário ‘formBoot’ 
     * através o do objeto ‘objFormElementos’. Você deve criar propriedades do 
     * mesmo nome de cada campo do formulário no objeto ‘objDadosForm’ e exibir 
     * o valor de cada campo no console.
     */
    let nomeBoot = objFormElementos.nomeBoot.value;
    objDadosForm.nomeBoot = nomeBoot;
    console.log(nomeBoot);

    let emailBoot = objFormElementos.emailBoot.value;
    objDadosForm.emailBoot = emailBoot;
    console.log(emailBoot);

    let emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;
    objDadosForm.emailPromocionalCheckBoot = emailPromocionalCheckBoot;
    console.log(emailPromocionalCheckBoot);

    let formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;
    objDadosForm.formaContatoTelefoneRadioBoot = formaContatoTelefoneRadioBoot;
    console.log(formaContatoTelefoneRadioBoot);

    let formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;
    objDadosForm.formaContatoEmailRadioBoot = formaContatoEmailRadioBoot;
    console.log(formaContatoEmailRadioBoot);

    let estadoSelectBoot = objFormElementos.estadoSelectBoot.value;
    objDadosForm.estadoSelectBoot = estadoSelectBoot;
    console.log(estadoSelectBoot);

    /**
     * 2.4 -) Exiba no console as propriedades do objeto ‘objDadosForm’;
     */
    console.log(objDadosForm);

    /**
    * 2.5 -) Chame a função de nome ‘preencherFormHtml’ a ser criada, passando 
    * por parâmetro o objeto ‘objDadosForm’;
    */

    preencherFormHtml(objDadosForm);
    
}

/**
 * 3 -) Crie uma nova função de nome ‘preencherFormHtml’ que receba por parâme-
 * tro um objeto de nome ‘objDados’;
 */

 function preencherFormHtml(objDados) {
     
    /**
     * 3.1 -) Utilize alguma função de manipulação de DOM de sua escolha e pre-
     * encha todos os campos do formulário ‘formHtml’ com os dados do objeto 
     * ‘objDados’;
     */

     let nomeHtml = document.getElementById('nomeHtml');
     nomeHtml.value = objDados.nomeBoot;

     let emailHtml = document.getElementById('emailHtml');
     emailHtml.value = objDados.emailBoot;

     let emailPromocionalCheckHtml = document.getElementById('emailPromocionalCheckHtml');
     emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot;

     let formaContatoTelefoneRadioHtml = document.getElementById('formaContatoTelefoneRadioHtml');
     formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelefoneRadioBoot;

     let formaContatoEmailRadioHtml = document.getElementById('formaContatoEmailRadioHtml');
     formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioBoot;

     let estadoSelectHtml = document.getElementById('estadoSelectHtml');
     estadoSelectHtml.value = objDados.estadoSelectBoot; 
 }


