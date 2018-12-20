/*Construtor é uma função que trabalha junto com o operador new com objetivo de servir como 
um tipo de classe para criar/instanciar objetos personalizados no JavaScript com propriedades e
métodos específicos. Desta forma podemos ter um molde para criar objetos personalizados de
forma simples sem precisar repetir código*/
//Exemplos de construtores já existentes no JavaScript: Object, Function, Array, Number...

//Exemplo 1
function Carro(){
    //....
}

var carro = {};
var objCarro1 = new Carro();
var objCarro2 = new Carro;
var objCarro3 = objCarro2;

console.log('objCarro1:', objCarro1);
console.log('objCarro2:', objCarro2);
console.log('objCarro1 == objCarro2:', objCarro1 == objCarro2);
console.log('objCarro2 == objCarro3:', objCarro2 == objCarro3);
console.log('typeof objCarro1:', typeof objCarro1);
console.log('objCarro1 instanceof Carro:', objCarro1 instanceof Carro);
console.log('objCarro1.constructor:', objCarro1.constructor);
console.log('objCarro1.constructor == Carro:', objCarro1.constructor == Carro);

//Exemplo 2
function Pessoa(){
    this.nome;
    this.cpf;
    this.getNomeCpf = function(){
        return "Nome: " + this.nome + " - CPF: " + this.cpf;
    }
}

var objPessoa = new Pessoa();
objPessoa.nome = "Maria";
objPessoa.cpf = '123456676543';

console.log('objPessoa:', objPessoa);
console.log(objPessoa.getNomeCpf());

//Exemplo 3
function Pessoa2(nome, cpf){
    this.nome = nome;
    this.cpf = cpf;
    this.getNomeCpf = function(){
        return "Nome: " + this.nome + " - CPF: " + this.cpf;
    }
}

var objPessoa2 = new Pessoa2('Pedro', '34567898765');
//objPessoa.nome = "Maria";
//objPessoa.cpf = '123456676543';

console.log('objPessoa2:', objPessoa2);
console.log(objPessoa2.getNomeCpf());
