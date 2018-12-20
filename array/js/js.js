//array-like
console.log('Objeto HTMLCollection--------------------------------')
//Array.prototype
//HTMLCollection
var inputs = document.getElementsByTagName('input');

console.log('typeof inputs', typeof inputs);
console.log('call inputs', Object.prototype.toString.call(inputs));

for (let index = 0; index < inputs.length; index++) {
    const element = inputs[index];
    //console.log('elemento:', element);
}

/*inputs.forEach(function(valor, elemento){
    console.log('elemento', elemento);
});*/

Array.prototype.forEach.call(inputs, function(valor, elemento){
    console.log('elemento', valor);
});

//array-like
console.log('Objeto arguments--------------------------------')

function somarValores(a, b){
    return a + b;
}

console.log('somarValores(10, 10):', somarValores(10, 10));

function somarValoresV2(a, b){
    var total = Array.prototype.reduce.call(arguments, 
        function(acumulador, valor, indice){
            return acumulador + valor;
    })
    return total;
}

console.log('somarValoresV2(10, 20, 30, 40):', somarValoresV2(10, 20, 30, 40));