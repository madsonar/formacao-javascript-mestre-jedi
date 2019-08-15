//Segunda Missão Estrelar
/* 
Apertem os cintos para adentrarmos ao hiper-espaço rumo a uma nova missão estrelar
*/
var missao = "missao estrelar";
console.log(missao);

var nomeCliente = "Paulo";
var renda = 1500;
var dataNascimento = new Date('2015-05-13');
var ativo = true;
 

function exibirDadosClienteVariaveis() {    
    console.log('nome:'+ nomeCliente)
    console.log('renda:'+ renda);
    console.log("nascimento:"+ dataNascimento);
    console.log("ativo:" + (ativo == true ? 'sim' : 'não'));
}

exibirDadosClienteVariaveis();
 
 var clienteArray = [
    ['nomeCliente', 'Paulo'],
    ['renda', 1500],
    [ 'dataNascimento', new Date('2015-05-13') ],
    [ 'ativo', (ativo == true ? 'sim' : 'não') ]
    ];

    function exibirDadoClienteArray() {
        for( var i of clienteArray) {
            console.log('clienteArray', i);
        }
    };

exibirDadoClienteArray();

var clienteObject = {
    nomecliente: 'Paulo',
    renda: 1500,
    datanascimento: new Date('2008-10-08'),
    ativo: true
};

function exibirDadosClientes() {
    for(var data in clienteObject) {
        
        switch (data){
            case 'nomecliente':
            console.log("nome:" + " " + clienteObject[data]);
            break;
            
            case 'renda':
            console.log("renda:" + " " + clienteObject[data]);
            break;
         
            case 'datanascimento':
            console.log("Dada de Nascimento:" + " " + clienteObject[data]);
            break;
         
            default:
            
             break;
        }

        if (clienteObject[data] == true) {
            console.log('Cliente é ativo');
        }
       
    }
};

console.log('DadosObjeto');
exibirDadosClientes();


console.log('Função de Data')

function retornoDataAtual() {
    var dia = new Date().getDate();
    var mes = new Date().getMonth();
    var ano = new Date().getFullYear();
    datahoje = '' ;

    if(dia <= 10) {
        datahoje += "0" + dia + '/';
    }    
    if(mes <= 10) {
       datahoje += "0" + (++mes) + '/';
    }else if(mes > 12) {
       datahoje += (--mes) + '/';
    }
    datahoje += ano;       
}

retornoDataAtual();
console.log(datahoje);  

var hiperespacoRegExp = new RegExp(/Estelar/);
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";

function teste(){
    console.log( hiperespacoRegExp.test(textoMissao) )
    console.log( hiperespacoRegExp.exec(textoMissao) );
}

console.log('mission message');
teste();


console.log('Reverse Counter');
try {
    for (i = 30; i >= 0; i--) {
    console.log(i);
        if(i == 29){
            throw new Error ("Deu um bug do além");
        } 
    }
} catch (erro) {
    console.log("" + erro);
} finally{
    console.log('procedimento executado!');
}


function receberDadosFormBoot() {
    var objFormElementos = document.getElementById("formBoot");
    
    console.log(Object.prototype.toString.call(objFormElementos));

    var objDadosForm = new Object();
    console.log(objDadosForm);
    
    objDadosForm.nome = document.getElementById("nomeBoot").value;
    if(objDadosForm.nome == ""){
        objDadosForm.nome = 'nome não inserido';
    }

    objDadosForm.email = document.getElementById("emailBoot").value;
    if(objDadosForm.email == ""){
        objDadosForm.email = 'email não inserido';
    }

    objDadosForm.mailpromo = document.getElementById("emailPromocionalCheckBoot").checked;
    if(objDadosForm.mailpromo == true) {
        objDadosForm.mailpromo = 'Quero receber e-mail promocional';
    } else {
        objDadosForm.mailpromo = 'Opção de promo não foi selecionada';
    }
        
    objDadosForm.contactphone = document.getElementById("formaContatoTelefoneRadioBoot").checked;
    objDadosForm.contacmail = document.getElementById("formaContatoEmailRadioBoot").checked;
    
    if(objDadosForm.contactphone == false && objDadosForm.contacmail == false){
        objDadosForm.contactphone = 'sem opção selecionada';
        objDadosForm.contacmail = 'sem opção selecionada';
    }else if(objDadosForm.contactphone == true && objDadosForm.contacmail == false) {
        objDadosForm.contactphone = 'entre em contato por telefone';
        objDadosForm.contacmail = 'não quero se contatado via email';
    }else {
        objDadosForm.contactphone = 'não quero se contatado via telefone';
        objDadosForm.contacmail = 'entre em contato via e-mail';
    }
   
    objDadosForm.state = document.getElementById("estadoSelectBoot").value;
    
    function preencherFormHtml(){
        document.getElementById('nomeHtml').value = objDadosForm.nome;
        document.getElementById('emailHtml').value = objDadosForm.email;
        
        if(objDadosForm.mailpromo == 'Quero receber e-mail promocional'){
            document.getElementById('emailPromocionalCheckHtml').checked = true;
        }else {
            document.getElementById('emailPromocionalCheckHtml').checked = false;
        }
        
        if(objDadosForm.contactphone == 'entre em contato por telefone'){
            document.getElementById('formaContatoTelefoneRadioHtml').checked = true;
        };

        if(objDadosForm.contacmail == 'entre em contato via e-mail'){
            document.getElementById('formaContatoEmailRadioHtml').checked = true;
        };
        
        document.getElementById('estadoSelectHtml').value = objDadosForm.state;
        
    };
    preencherFormHtml();
}



   