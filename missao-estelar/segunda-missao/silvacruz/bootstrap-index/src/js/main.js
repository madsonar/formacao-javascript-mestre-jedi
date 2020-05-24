//Segunda Missão Estelar JS

/*
    Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)
*/

//declaração de variáveis
const missao = "Segunda Missão Estelar JS";
const hiperespaco = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");

const nomeCliente = 'Raul Marreta';
const renda = 2048.16;
const dataNascimento = new Date(1995, 05, 16);
const ativo = true;

const clienteAtivo = ativo ? "sim" : "não";

const clienteArray = [["Nome", nomeCliente], ["Renda", renda],
    ["Data de Nascimento", dataNascimento.getDate() 
        + "/" + dataNascimento.getMonth() 
        + "/" + dataNascimento.getFullYear()], 
    ["Ativo", clienteAtivo]];

const clienteObject = {
    Nome: nomeCliente,
    Renda: renda,
    'Data de Nascimento': dataNascimento.getDate() 
    + "/" + dataNascimento.getMonth() 
    + "/" + dataNascimento.getFullYear(),
    Ativo: clienteAtivo
}

const hiperEspacoRegExp = new RegExp('Estelar');
const textoMissao = hiperespaco.toString();

const formularioBootstrap = document.querySelector("#formBootstrap");


//declaração de funções
function exibirDadosClienteVariaveis() {
    console.log("Nome do cliente: ", nomeCliente);
    console.log(`Renda de ${nomeCliente}: ${renda}`);
    
    console.log("Nascimento: ", dataNascimento.getDate() 
        + "/" + dataNascimento.getMonth() 
        + "/" + dataNascimento.getFullYear());
    
    console.log("Cliente ativo: ", clienteAtivo);
}

function exibirDadosClienteArray() {
    for (const [key, value] of clienteArray) {
        console.log(key + ": " + value);
    }
}

function exibirDadosClienteObjeto() {
    for (const key in clienteObject) {
        console.log(key + ": " + clienteObject[key]);
    }
}

function retornaDataAtualFormatada() {
    return dataNascimento.getDate() 
    + "/" + dataNascimento.getMonth() 
    + "/" + dataNascimento.getFullYear();
}

function exibeContagemDecrescente() {
    let contador = 0;
    
    for (i = 30; i >= 0; i--) {
        try {
            contador++;
        if(contador == 29)
            throw new Error("Erro na iteração " + contador);
        } catch(e) {
            console.log(e.message);
        } finally {
            if(contador != 29) {
                console.log("iteração " + contador + ": " + i);
            } else {
                console.log("iteração " + contador + " será executada mesmo assim no finally: " + i);
            }
        }
    }  
}

function recebeDadosFormBoot(objFormulario) {
    console.log(Object.prototype.toString.call(objFormulario));

    const objDadosForm = new Object();

    objDadosForm.nomeBootstrap = objFormulario.nomeBootstrap.value;
    objDadosForm.emailBootstrap = objFormulario.emailBootstrap.value;
    objDadosForm.customCheck1 = objFormulario.customCheck1.checked;
    objDadosForm.customRadio1 = objFormulario.customRadio1.checked;
    objDadosForm.customRadio2 = objFormulario.customRadio2.checked;
    objDadosForm.selectBootstrap = objFormulario.selectBootstrap.value;

    console.log(objDadosForm);

    preencherFormHtml(objDadosForm);
}
    
function preencherFormHtml(objDados) {
    const formHTML = document.querySelector("#formHTML");

    formHTML[0].value = objDados.nomeBootstrap;
    formHTML[1].value = objDados.emailBootstrap;
    formHTML[2].checked = objDados.customCheck1;
    formHTML[3].checked = objDados.customRadio1;
    formHTML[4].checked = objDados.customRadio2;
    formHTML[5].value = objDados.selectBootstrap;
}

//valor e tipo de variáveis
console.log(missao);
console.log(typeof missao);
console.log(hiperespaco.toString());
console.log(typeof hiperespaco);

//test e exec do regExp
console.log("------\n");
console.log(hiperEspacoRegExp.test(textoMissao));
console.log(hiperEspacoRegExp.exec(textoMissao).index);

//chamadas de funções
console.log("--- função exibirDadosClienteVariaveis() ---\n");
exibirDadosClienteVariaveis();
console.log("--- função exibirDadosClienteArray() ---\n");
exibirDadosClienteArray();
console.log("--- função exibirDadosClienteObjeto() ---\n");
exibirDadosClienteObjeto();
console.log("--- função retornaDataAtualFormatada() ---\n");
console.log(retornaDataAtualFormatada());
console.log("--- função exibeContagemDecrescente() ---\n");
exibeContagemDecrescente();
