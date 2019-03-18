/*
Função:
É um bloco de código JavaScript definido uma fez;
Pode ser chamado para execução várias vezes;
Uma função pode receber parâmetros; 
Uma função pode retornar algo;
Uma função denominada construtora, serve como molde(classe) para instanciar objetos; 
*/

//declaração de forma literal, sintaxe:
function mensagem(){
    //escopo
    console.log('Olá Padawan!');
}

//executando a função(chamar/invocar);
mensagem();

//pode receber parâmetros
function boasVindas(nome){
    console.log("Olá", nome);
}

//chamar
boasVindas("Paulo");

//uma função pode retornar algo
function soma(valor1, valor2){
    return valor1 + valor2;
}

var retorno1 = soma(10, 30);
console.log('retorno1', retorno1);

//pode retornar undefined
function retornoUndefined(){
    console.log("esta função não retorna nada");
}

var retorno2 = retornoUndefined();
console.log("retorno2", retorno2);
