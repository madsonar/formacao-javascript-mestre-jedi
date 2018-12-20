var contaStatus = false;
console.log("Status da conta: ", contaStatus);

var contaStatus = true;
console.log("Status da conta: ", contaStatus);

console.log(typeof contaStatus);

//if(contaStatus){//true
if(contaStatus == true){//true
    console.log("Enviar email!");
}else{//false
    console.log("Ative sua conta!");
}

console.log(!!contaStatus);

var nome = "madson";
var preco  = 22.8;
var vazio  = "";

console.log(!!nome);
console.log(!!preco);
console.log(!!vazio);
console.log("-----");

//6 valores / objetos
/*
Valores que sempre serão falsos
console.log(!!"");
console.log(!!0);
console.log(!!-0);
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
*/
console.log(!!"");
console.log(!!0);
console.log(!!-0);
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
console.log(!!Array);
console.log(!!Object);
console.log(!!Function);