console.log("------------for...in");
var objCliente = {nome: "Flávio", idade: 23, dataNasc: new Date("1993-08-19")}

for(var chave in objCliente){
    console.log("chave:", chave);
    console.log("valor:", objCliente[chave]);
}

console.log("------------for...in");

var arrayQualquer = ['a','b','c',1,2,3];

/*for (let index = 0; index < array.length; index++) {
    const element = array[index];    
}*/

for(var index in arrayQualquer){// for...in: index recebe o o index do elemento do array
    console.log("index:", index);
    console.log("valor:", arrayQualquer[index]);
}

console.log("------------for...of");
for(var valor of arrayQualquer){// for...of: valor recebe o o valor do elemento do array
    console.log("valor:", valor);    
}
