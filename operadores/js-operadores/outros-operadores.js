//typeof
var numero = new String("20");
console.log("typeof numero: ", typeof numero);

//instanceof
console.log("numero instanceof String: ", numero instanceof String);

//in
var objPessoa = {nome: "Prof. Madson Aguiar", teste: true};
console.log("nome in objPessoa: ", "nome" in objPessoa);
console.log("idade in objPessoa: ", "idade" in objPessoa);
var array = Array("a", "b", "c");
console.log("0 in array: ", 0 in array);
console.log("3 in array: ", 3 in array);

//delete
delete objPessoa.teste;
console.log("delete 'teste':", objPessoa);
delete array[0];
console.log("delete 'array[0]':", array);

//operador de membro '.' e '[]'
console.log("objPessoa.nome", objPessoa.nome);
console.log("objPessoa[nome]", objPessoa["nome"]);

//void
//()
function teste(){
    return 10;
}
console.log("teste(): ", teste());
console.log("teste(): ", void(teste()));

//new 
var stringNome = new String("Prof. Madson");
console.log("new ", stringNome);
