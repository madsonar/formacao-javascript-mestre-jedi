var periodo = "matutino";
//var mensagem = exp ? true : false;
var mensagem = periodo == "matutino" ? "Bom dia!": "Olá!";
console.log(mensagem);

//periodo = "vespertino";
periodo = "nao sei";
var mensagem2 = periodo == "matutino" ? "Bom dia!": (periodo == "vespertino" ? "Boa tarde!": "Boa noite!");
console.log(mensagem2);
