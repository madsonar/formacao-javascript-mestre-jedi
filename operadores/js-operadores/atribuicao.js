/*
//opreador '='
var numero = 10;
var numero2 = 1;
var nome = 'Pedro';
var verdadeiro = true;

numero = numero = numero2;
console.log(numero);

//operador +=
var numero3 = 10;
//numero3 = numero3 + 1;
//numero3++;
//numero3 += 1;
numero3 += 20;
console.log(numero3);
nome += " Silva";
console.log("Nome completo: ",  nome);
nome += true;
console.log("Nome completo: ",  nome);
numero3 += true;
console.log("numero3: ",  numero3);


//operador -=
var sub = 30;
sub -= 20;
console.log("sub -= 20: ", sub);

//operador *=
var mult = 2;
mult *= 2;
console.log("mult *= 2: ", mult);

//operador /=
var div = 5;
div /= 2;
console.log("div /= 2: ", div);

//operador %=
var mod = 9;
mod %= 2;
console.log("mod %= 2: ", mod);

//operador **= ES7
var exp = 3;
exp **= 3;
console.log("exp **= 3: ", exp);
*/

//operador <<= Left Shift
console.log("operador <<= Left Shift########################");
var num1 = 320;
console.log("1 - num1 em Base10: ", num1);
console.log("2 - num1 em Base2: ", num1.toString(2));
num1 <<= 8;
console.log("3 - num1 em Base2: ", num1.toString(2));
console.log("4 - num1 em Base10: ", num1);

//operador >>= Right Shift
console.log("operador >>= Rigth Shift########################");
var num2 = 320;
console.log("1 - num2 em Base10: ", num2);
console.log("2 - num2 em Base2: ", num2.toString(2));
num2 >>= 7;
console.log("3 - num2 em Base2: ", num2.toString(2));
console.log("4 - num2 em Base10: ", num2);

//operador >>>= Right Shift sem sinal
console.log(">>>= Rigth Shift sem sinal########################");
var num3 = -320;
console.log("1 - num3 em Base10: ", num3);
console.log("2 - num3 em Base2: ", num3.toString(2));
num3 >>>= 7;
console.log("3 - num3 em Base2: ", num3.toString(2));
console.log("4 - num3 em Base10: ", num3);


