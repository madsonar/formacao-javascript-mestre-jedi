
console.log('------------------------------------------');
//Parâmetros e argumentos de função
/*Parâmetros são variável nomeadas de função que refere-se os valores que a mesma
deve receber, são informados na declaração da função entre () separados por vígula*/
/*Argumentos são valores que são passados para uma função no ato da invocação
da mesma, são informados entre () separados por vírgula*/
/*Se no ato de chamar uma função passar menos argumentos do que a quantidades de 
parâmetros esperados, os parâmetros que faltarem valores assumirão o valor undefined*/

//mais parâmetros que argumentos
function nomeCompletoUpperCase(nome1, nome2, nome3){
    //if(nome3 === undefined) nome3 = "";
    nome3 = nome3 || "";
    var nomeCompleto = nome1 + " " + nome2 + " " + nome3;
    return nomeCompleto.toUpperCase();
}

//console.log(nome2);

console.log("nomeCompletoUpperCase('Prof. Madson','Aguiar'):",
nomeCompletoUpperCase('Prof. Madson','Aguiar'));

//mais argumentos que parâmetros
function nomeCompletoUpperCaseV2(nome1, nome2, nome3){ 
    var nomeCompleto = "";

    if (arguments.length > 3) {
        for(var indice in arguments){
            nomeCompleto += " " + arguments[indice];
        }
    } else {
        nomeCompleto = nome1 + " " + nome2 + " " + nome3;
    }    

   return nomeCompleto.toUpperCase();
}

//console.log("nomeCompletoUpperCaseV2(...):",
//nomeCompletoUpperCaseV2('Maria', 'Paula', 'Ferreira', 'Silva'));
console.log("nomeCompletoUpperCaseV2(...):",
nomeCompletoUpperCaseV2('Maria', 'Paula', 'Ferreira'));