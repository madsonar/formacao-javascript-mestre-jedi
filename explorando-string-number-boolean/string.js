//string
//toString()
var nome = new String("Maria da Silva");
console.log("1 tipo:", typeof nome);
console.log("2 tipo:", typeof nome.toString());

//length
console.log("length: ", nome.length);

//iterar na string
for(var indice in nome){
    console.log("índice: "+indice, nome[indice]);
}

//recupear o valor a partir do índece
console.log("charAt()", nome.charAt(9));

//receperando o código UTF-16 pelo índice
console.log("charCodeAt()", nome.charCodeAt(9));

//recuperando o índice pelo valor
console.log("indexOf()", nome.indexOf("S"));

//recuperando o índice - último caractere pesquisado
console.log("lastIndexOf()", nome.lastIndexOf("a"));

//concatenar mais dados na string
console.log("concat", nome.concat(" - Seja bem-vinda!").concat(" Obrigada!"));

//retorna um código html
console.log("sub", nome.sub());
console.log("sup", nome.sup());

//buscar uma quantidade de caracter a partir de um índece
console.log("substr", nome.substr(0, 5));
console.log("substr",nome.substr(0, nome.length));

//buscar parte de uma string informando o índece inicial e final
console.log("substring ", nome.substring(0,10));
console.log("substring ", nome.substring(5,nome.length));
console.log("substring ", nome.substring(5));

//replace - substituir dados em uma string
console.log('replace("a", "?")', nome.replace("a", "?"));
console.log('replace(/a/, "?")', nome.replace(/a/, "?"));
console.log('replace(/a/g, "?")', nome.replace(/a/g, "?"));
console.log(nome = nome.replace(/a/g, "?"));
nome = nome.replace(/\?/g, function(x){
        return "a";
    }
)
console.log(nome);

//split - dividir a string
console.log("split ", nome.split());
console.log(nome.split(""));
console.log(nome.split(" "));
console.log(nome.split(" ",1));
console.log(nome.split("a"));
console.log(nome.split(/ da /g));

//Texto em caixa alta e baixa
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());

//match - realizar uma pesquisa com RegExp
var texto = "Casa de Papel de Madeira de Ferro";
var resultado = texto.match(/de/g);
console.log("tipo: ", Object.prototype.toString.call(resultado));
console.log(resultado);

//search
var resultado2 = texto.search(/de/g);//-1 quando nao encontrar
console.log("tipo: ", Object.prototype.toString.call(resultado2));
console.log(resultado2);

//Para verificar se uma string começa com algo'?'
console.log(nome.startsWith("Maria"));
console.log(nome.startsWith("Maria", 4));

//retirar os espaços antes de depois do texto
var texto2 = " texto ";
console.log(texto2.trim());

//valueOf - string
var nome2 = new String("Pedro");
console.log(typeof nome2);
console.log(typeof nome2.valueOf());

//precisar repetir o valor da string
console.log(nome2.repeat(3));


