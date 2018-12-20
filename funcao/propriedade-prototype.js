function Pessoa(nome, cpf){
    this.nome = nome;
    this.cpf = cpf;
    this.getNomeCpf = function(){
        return "Nome: " + this.nome + " - CPF: " + this.cpf;
    }
}

Pessoa.prototype.contador = 20;

var objPessoa = new Pessoa('Pedro', '34567898765');
var objPessoa2 = new Pessoa('Chico', '32334548765');
console.log(objPessoa.contador)
console.log(objPessoa2.contador)
objPessoa2.contador = 33;
console.log(objPessoa.contador)
console.log(objPessoa2.contador)

Pessoa.prototype.contador = 44;

console.log(objPessoa.contador)
console.log(objPessoa2.contador)

console.log('------------------------------');
console.log('------------------------------');
