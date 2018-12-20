//toString
var valor = new Number(3.456);
console.log(valor, " - tipo: ", typeof valor);
console.log(valor.toString(), " - tipo: ", typeof valor.toString());

//toFixed
console.log(valor, "typeof: "+ typeof valor + " - ", valor.toFixed(2), " typeof: " + typeof valor.toFixed(2));

//converter para ponto flutuante
var valorPontoFlutuante = Number.parseFloat(valor.toFixed(2));
console.log(valorPontoFlutuante, typeof valorPontoFlutuante);

//converter para um inteiro
var valorInteiro = Number.parseInt(valor);
console.log(valorInteiro, typeof valorInteiro);

//precisar verificar se é um número inteiro - retorna true ou false
var v1 = 23.67;
var v2 = "78";
var v3 = false;
var v4 = 43;

console.log(v1, Number.isInteger(v1));
console.log(v2, Number.isInteger(v2));
console.log(v3, Number.isInteger(v3));
console.log(v4, Number.isInteger(v4));

//isNaN - retornar true se por o valor NaN
var a = "abc";
var b = "12";
var c = 23;
var d = NaN;//valor especial
console.log(a, Number.isNaN(a));
console.log(b, Number.isNaN(b));
console.log(c, Number.isNaN(c));
console.log(d, Number.isNaN(d));

var numero = 2345.358738;
console.log(numero, numero.toPrecision(6), typeof numero.toPrecision(6));

//retornar o valor primitivo do dado
var valorX = new Number(23467);
console.log(valorX, typeof valorX);
console.log(valorX.toString(), typeof valorX.toString());
console.log(valorX.valueOf(), typeof valorX.valueOf());

//isFinite - retorna true
console.log(2/2);
console.log("isFinite", Number.isFinite(2/2));
console.log(1000/1);
console.log("isFinite", Number.isFinite(1000/1));
console.log(1000/0);
console.log("isFinite",Number.isFinite(1000/0));

//valores pre definido no js
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(valorX.toString().length)
