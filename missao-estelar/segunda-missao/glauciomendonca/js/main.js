// Passo 7

// "Segunda Missão Estelar JS"

// Passo 8

/*Apertem os cintos para adentramos 
ao hiper-espaço rumo a uma nova 
Missão Estelar JS!*/

// Passo 9
var missao = "Segunda Missão Estelar JS";
console.log("Exibindo conteúdo da variável missao: " + missao);
console.log("Tipo da variável missao: " + typeof missao);

// Passo 10
var nomeCliente = "Gláucio";
var renda = 1500;
var dataNascimento = new Date(1996,3,12);
var ativo = true;

function exibirDadosClienteVariaveis (){
    console.log(`nome do cliente: ${nomeCliente}`);
    console.log(`Renda do cliente: ${renda}`);
    console.log(`Data de nascimento: ${dataNascimento}`);
    console.log(`Está ativo? ${(ativo)?"sim":"não"}`);
}
console.log(`\nExibirDadosClienteVariaveis`);
exibirDadosClienteVariaveis();
// Passo 11
var clienteArray = [['nomeCliente' , "Gláucio"], 
                    ['renda' , 1500],
                    ['dataNascimento' , new Date(1996,3,12)],
                    ['ativo' , true]];

function exibirDadosClienteArray (){
    for (let value of clienteArray) console.log(value);
}
console.log(`\nExibirDadosClienteArray`);
exibirDadosClienteArray();
// Passo 12
var clienteObject = {nomeCliente : "Gláucio",
                     renda : 1500,
                     dataNascimento : new Date(1996,3,12),
                     ativo : true}

function exibirDadosClienteObject (){
    for (let key in clienteObject){
        if(key == ativo){
            switch (clienteObject[key]){
                case true: console.log("ativo : sim");
                break;
                case false: console.log("ativo : não");
                break;
            }
        }else{
            console.log(key +" : "+ clienteObject[key]);
        }
    }
}
console.log(`\nExibirDadosClienteObject`);
exibirDadosClienteObject();
// Passo 13
function retornaDataAtualFormatada (){
    var now = new Date;
    var d, m;
    
    if (now.getDate().toString().length == 1 ) 
        d = '0' + now.getDate();
    else
        d =  now.getDate();

    if (now.getMonth().toString().length == 1)
        m = '0' + now.getMonth();
    else
        now.getMonth();
    
    var data = `${d}/${m}/${now.getFullYear()}`;
    return data;
}
console.log(`\nData Formatada`);
console.log(retornaDataAtualFormatada());
// Passo 14
var hiperEspacoRegExp = new RegExp("Estelar");
var textoMissao = `Apertem os cintos para adentramos ao 
hiper-espaço rumo a uma nova Missão Estelar JS!:)`;

console.log(`\nExpressão Regular`);
console.log(`\n Usando função \"test\"`);
console.log(hiperEspacoRegExp.test(textoMissao));
console.log(`\n Usando função \"exec\"`);
console.log(hiperEspacoRegExp.exec(textoMissao));

// Passo 15
console.log(`\nLoop & Tratamento de erros`);
try {
    for (let i = 30; i >= 0; i--){
        if (i == 1) throw `erro forçado na iteração ${30 - i}`;
        console.log(`Iteração ${30 - i} : Valor ${i}`);
    }    
} catch (error) {
    console.log(error);
}finally{
    console.log("Erro tratado com sucesso!");
}

// Passo 16 (1 - 2.5)
function recebeDadosFormBoot (objFormElementos){
    console.log(typeof objFormElementos);
    console.log(Object.prototype.toString.call(objFormElementos));
    
    var objDadosForm = new Object;

    objDadosForm.nomeCli = objFormElementos[0].value;
    objDadosForm.email = objFormElementos[1].value;
    objDadosForm.receberEmailPromocional = objFormElementos[2].checked ? "Sim" : "Não";
    objDadosForm.contatoPor = objFormElementos[3].checked ? "Telefone" : "Email";
    objDadosForm.estado = objFormElementos[5].value;

    console.log(objDadosForm);

    preencherFormHtml(objDadosForm);
}

// Passo 16 (3 - 3.2)
function preencherFormHtml (dados){
    var formHtml = document.getElementById("formHtml");

    formHtml[0].value = dados.nomeCli;
    formHtml[1].value = dados.email;
    formHtml[2].checked = dados.receberEmailPromocional == "Sim" ? true : false;
    dados.contatoPor == "Email" ? formHtml[4].checked = true : formHtml[3].checked = true ;
    formHtml[5].value = dados.estado;
}
