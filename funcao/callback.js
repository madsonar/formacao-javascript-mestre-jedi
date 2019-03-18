/*Callback é um recurso no qual uma função é passada via argumento para outra função no
ato da invocação, desta forma a função que recebe a função callback como argumento 
pode chamar o callback durante sua execução em um processo síncrono ou assíncrono*/
/*-Processo síncrona significa que cada instrução será executada mediante a finalização da 
instrução anterior.*/
/*Processo assíncrono significa que durante a execução da aplicação pode haver instruções 
que serão executadas mediante resposta de alguma processo, mas não interromperá o fluxo 
principal da aplicação não sendo comprometido.*/

//exemplo 1
function mostrarCliente(nome){
    console.log('Cliente:', nome);
}

function realizarVenda(callback){
    callback('Pedro');
    console.log('1 - Item A');
    console.log('2 - Item B');
    console.log('3 - Item C');
    console.log('Total X');
}

//realizarVenda(mostrarCliente);

console.log('------------------------------');
//exemplo 2
function contador(){
    var num = 10000;
    for(var i = 0; i < num; i++){
        console.log(i);
    }
}

function iniciar(callback){
    console.log('Início');
    callback();//alert
    console.log('Término');
}

//iniciar(contador);

//exemplo 3
function propaganda(tempo){
    setTimeout(function(){
        console.log('Propaganda>>>>>>>>>>>>>>>');
    }, tempo);
}

function rodar(callback){
    console.log('Início');
    callback(3000);//ajax
    console.log('app rodando......')
}

rodar(propaganda);