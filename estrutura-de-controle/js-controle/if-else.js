//if...else
var condicao = true;

if(condicao) console.log("0 - Entrou no bloco if");
//-----
if(condicao){
    console.log("1 - Entrou no bloco if");
    console.log("2 - Entrou no bloco if");
}
//-----
if(condicao)
console.log("3 - Entrou no bloco if");
else
console.log("4 - Entrou no bloco else");
//-----
condicao = false;
if(condicao){
    console.log("5 - Entrou no bloco if");
    console.log("5.1 - Entrou no bloco if");
}else{
    console.log("6 - Entrou no bloco else");
    console.log("6.1 - Entrou no bloco else");
}
//-----

var texto = "JS";

if (texto == "js") {
    console.log("O texto é js!");
}else if(texto == "Js") {
    console.log("O texto é Js!");
}else if(texto == "jS") {
    console.log("O texto é jS!");
}else if(texto == "JS") {
    console.log("O texto é JS!");
}else{
    console.log("Não foi encontrado a combinação.");
}

//----

condicao = true;
var nome = "paulo";//maria
if (condicao == true) {
    console.log("1 - Condição TRUE");
    if (nome == "maria") {
        console.log("O cliente selecionado é Maria.");
    } else {
        console.log("O cliente selecionado NÃO é a Maria.");
    }

} else {
    console.log("1 - Condição FALSE");
}

//---

var a = "a";
var bool = false;
if (a == "a" && bool == true) 
    console.log('1 - a == "a"');

if (a == "a" || bool == true) 
    console.log('2 - a == "a"');

if(!false)
console.log('true');

if(10 > 9)
console.log('1 - retornou true');

if(10 >= 10)
console.log('2 - retornou true');
