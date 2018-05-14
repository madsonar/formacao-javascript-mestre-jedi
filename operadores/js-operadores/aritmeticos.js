//adição/soma/**/
var soma = 20 + 20;
console.log("soma 20 + 20 = ", soma);
console.log("20"+"20");
console.log("20"+20);
console.log("Prof. "+"Madson Aguiar");
var numStr = "27";
console.log(typeof numStr);
console.log(typeof +numStr);
console.log(true + false + true)
console.log("10 + null ", 10 + null);
console.log("10 + undefined ", 10 + undefined);
console.log("0.2 + 0.1 = ", 0.2 + 0.1);
console.log("0.1 + 0.7 = ", 0.1 + 0.7);//IEEE 754
console.log("10.22 + 11.11 =", 10.22 + 11.11);

//subtração/**/
console.log("subtração########################")
var sub = 500 - 330;
console.log("500 - 330 = ", sub );
console.log("-120 -30 = ", -120 -30);
console.log("-120 +30 = ", -120 +30);
console.log("+30 = ", -30);
console.log("15 - true= ", 15 - true);
var strNum = "56";
console.log("-(strNum = '56')", -strNum);
console.log("typeof -(strNum = '56')",typeof -strNum);
console.log("0.33 - 0.1 = ", 0.33 - 0.1)

//multiplicação/**/
console.log("multiplicação########################")
var mult = 5 * 20;
console.log("5 * 20 = ", 5 * 20);
console.log('7 * "3"= ', 7 * "3");
console.log('7 * "tres"= ', 7 * "tres");
console.log("precedência: ", 3 + 3 * 2);
console.log("precedência: ()", (3 + 3) * 2);
console.log("3 * 0 = ", 3 * 0);
console.log("0 * 3 = ", 0 * 3);
console.log("3 * -2 = ", 3 * -2);
console.log("3 * true = ", 3 * true);

//divisão/**/
console.log("divisão########################")
var div = 10 / 2;
console.log("10 / 2 = ", 10 / 2);
console.log("10 / 0 = ", 10 / 0 );//infinity
console.log("-10 / 0 = ", -10 / 0 );//infinity
console.log("0 / 10 = ", 0 / 10 );
console.log("2 / 3 = ", 2 / 3 );
console.log("infinity / infinity = ", Infinity / Infinity );
console.log('10 / "2" = ',10 / "2");
console.log('10 / "dois" = ',10 / "dois");//NaN

//módulo-resto divisão/**/
console.log("módulo########################");
var mod = 9 % 2;
console.log("9 % 2 = ",mod);

//Incremento /**/
console.log("Incremento########################");
var incremento = 10;
incremento++;
console.log("1 - incremento 10 (++)", incremento);
console.log("2 - incremento++", incremento++);
console.log("3 - incremento", incremento);
console.log("4 - ++incremento", ++incremento);
console.log("5 - incremento", incremento);

console.log("decremento########################");
var decremento = 20;
decremento--;
console.log("1 - decremento 10 (--)", decremento);
console.log("2 - decremento--", decremento--);
console.log("3 - decremento", decremento);
console.log("4 - --decremento", --decremento);
console.log("5 - decremento", decremento);

//** exponenciação/potenciação
console.log("exponenciação/potenciação########################");//ES7 - 2016
var exp = 2 ** 3;
console.log("exponenciação/potenciação: 2 ** 3 = ", exp);