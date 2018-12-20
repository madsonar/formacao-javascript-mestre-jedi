var a = true;//literal
console.log(a, "tipo: ", typeof a);

var b = new Boolean(false);
console.log(b, "tipo: ", typeof b);
console.log(b.toString(), "tipo: ", typeof b.toString());

//retornar o valor primitivo
console.log("valueOf", b.valueOf(), typeof b.valueOf());
console.log(b.toString().toUpperCase());
console.log(b.toString().length);