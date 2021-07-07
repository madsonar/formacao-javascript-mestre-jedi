//Segunda Missão Estelar JS

/**
 * Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)
 */






// QUESTÃO 8 E 9
 var missao = 'Segunda Missão Estelar JS';

 console.log(missao);
 console.log(typeof missao);



 var hiperespaco = new String('Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)');

 console.log(hiperespaco);
 console.log(typeof hiperespaco);






 // QUESTAO 10
var nomeCliente = 'Paulo';
var renda = 3000;
var dataNascimento = new Date('1990-02-02');
var ativo = false;

function exibirDadosClienteVariaveis(){
    console.log('Nome do cliente:', nomeCliente);
    console.log('Renda:', renda);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('Ativo?', ativo == false ? 'Não' : 'Sim' );
}

exibirDadosClienteVariaveis();












//QUESTAO 11
var clienteArray = [

    [ 'nomeCliente', 'Paulo'],
    [ 'renda', 3000],
    [ 'dataNascimento', new Date('1990-02-02') ],
    [ 'ativo', false]

];


function exibirDadosClienteArray(){
    for (const item of clienteArray)
    {   
        //console.log(item);
        console.log(item[0] + ': ' + item[1]);
    }

}

exibirDadosClienteArray();









//QUESTAO 12
var clienteObject = {

    nomeCliente: 'Paulo',
    renda: 3000,
    dataNascimento: new Date('1990-02-02'),
    ativo: false

};


function exibirDadosClienteObjeto(){

    console.log('Com for in: \n\n');
    for (const key in clienteObject) {
        console.log(key + ': ' + clienteObject[key]);
    }

}

exibirDadosClienteObjeto();














//QUESTÃO 13
function retornaDataAtualFormatada(){

    var date = new Date();

    //console.log(typeof date.getDay());

    var dayOfTheWeek = '';

    switch (date.getDay()) 
    {
        case 0:
            dayOfTheWeek = 'Domingo';
            break;
        case 1:
            dayOfTheWeek = 'Segunda-feira';
            break;
        case 2:
            dayOfTheWeek = 'Terça-feira';
            break;
        case 3:
            dayOfTheWeek = 'Quarta-feira';
            break;
        case 4:
            dayOfTheWeek = 'Quinta-feira';
            break;
        case 5:
            dayOfTheWeek = 'Sexta-feira';
            break;
        case 6:
            dayOfTheWeek = 'Sábado';
            break;
  
    }

    console.log(
        
        dayOfTheWeek + ', ' +
        date.getDate() + '/' +
        date.getMonth() + '/' +
        date.getFullYear()
        
    );

}

retornaDataAtualFormatada();














//QUESTÃO 14
var hiperEspacoRegExp = new RegExp('Estelar');

var textoMissao = 'Estelar Side';

console.log( hiperEspacoRegExp.test(textoMissao) );
console.log( hiperEspacoRegExp.exec(textoMissao) );













//QUESTAO 15
function showCount(){

    try {


        var quantity = 30;
        var iteration = 29;

        for (let index = quantity; index >= 0; index--) {

            console.log(index);

            if ( index == (quantity - iteration) ) {
                
                throw new Error('Erro na iteração ' + iteration);
            }
            
        }


        
    } catch (error) {
        console.log(error);

    } finally{
        console.log('Sempre excecutado');
    }
    
}

showCount();












