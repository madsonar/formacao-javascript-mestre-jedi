//como criar objeto?
//literal
var objPessoa01 = {nome: 'Marcos'};
console.log(objPessoa01.nome);

//por construtor
var objPessoa02 = new Object();
objPessoa02.nome = 'Maria';
console.log(objPessoa02.nome);

//Object.create que irá criar um objeto com protótipo
var objPessoa03 = Object.create(Object.prototype);
objPessoa03.nome = 'João';
console.log(objPessoa03.nome);

//Funções construtoras
var obj01 = new Object();
var obj02 = new Array(1,2,3);
var obj03 = new Date();//Data atual
var obj04 = new Error("Ocorreu um erro");
var obj05 = new RegExp(/teste/);
var obj06 = new Function("parametroNome", "return 'olá ' + parametroNome + '!'");
console.log(obj06("Francisca"));

//Criar objeto literal
var objetoPessoa = {
    nome: "João Pedro da Silva",
    cpf: 12345678923,
    dataNascimento: new Date(1981, 3, 14),
    ativo: true,
    "teste prop": "teste",
    contatos: [124368789, 124395464, 268785753],
    endereco: {rua: "Rua A", numero: 2534, cep: 7247324872},
    saudacao: function(){
        return "Olá, me chamo " + this.nome +"!";
    }
}
console.log(objetoPessoa);

//acessar propriedades
console.log("nome: ", objetoPessoa.nome);
console.log("cpf: ", objetoPessoa.cpf);
console.log("data de nascimento: ", objetoPessoa.dataNascimento);
console.log("ativo: ", objetoPessoa.ativo);
console.log("teste", objetoPessoa["teste prop"])
console.log("contato: ", objetoPessoa.contatos[0]);
for (var contato of objetoPessoa.contatos) {
    console.log("contato:", contato);
}
console.log("Endereco:", objetoPessoa.endereco.rua);
for (var key in objetoPessoa.endereco) {
    console.log(key, objetoPessoa.endereco[key]);
}

//chamar método
console.log(objetoPessoa.saudacao);
console.log(objetoPessoa.saudacao());

//criar um objeto com construtor Object
var objetoProduto =  new Object();
objetoProduto.nome = 'Mesa';
objetoProduto.preco = 89.99;
objetoProduto.dimensoes = {largura: "1m", comprimento: "1,5m", altura: "90cm"};
objetoProduto["nome no formato string valido"] = "deu certo";
var nomeProp = "novoNome";
objetoProduto[nomeProp] = "deu certo o novo nome";
objetoProduto[""] = "vazio";
objetoProduto["123"] = 123;

//acessar usando operador membro
console.log("nome:", objetoProduto["nome"]);
console.log("altua:", objetoProduto.dimensoes.altura);
console.log("cubo:", objetoProduto.dimensoes.cubo);
//console.log("cubo:", objetoProduto.dimensoes.cubo.valor); gerou erro ao acessar uma propriedade de undefined
console.log("objetoProduto['nome no formato string valido']", objetoProduto["nome no formato string valido"]);
console.log("novoNome:", objetoProduto["novoNome"]);
console.log("novoNome:", objetoProduto[nomeProp]);
console.log("novoNome:", objetoProduto.novoNome);
console.log('objetoProduto[""]' , objetoProduto[""] );
console.log('objetoProduto["123"]' , objetoProduto["123"] );

for(var elemento in objetoProduto.dimensoes){
    console.log(elemento, objetoProduto.dimensoes[elemento]);
}

//o objeto por referencia
var obj1 = {matricula: 17};
console.log("obj1 matrícula:", obj1.matricula);
var obj2 = obj1;
console.log("obj2 matrícula:", obj2.matricula);
obj2.matricula = 28;

console.log("obj2 matrícula:", obj2.matricula);
console.log("obj1 matrícula:", obj1.matricula);

obj2 = null;//limpar a memoria
console.log("tipo objeto: typeof", typeof obj1);
console.log("tipo objeto: instanceof", obj1 instanceof Object);

//verificar se uma propriedade ou método existe no objeto em questão ou em sua cadeia de protótipos
var pedido = new Object();
pedido.total = 233.45;//add
console.log("cliente in pedido: ", "cliente" in pedido);
console.log("cliente pedido: ", pedido.cliente);
//console.log("cliente pedido: ", pedido.cliente.nome);
console.log("total in pedido: ", "total" in pedido);
//o 'in' verifica se a propriedade ou método existe no objeto e na cadeia de prototipo
console.log("toString in pedido:", "toString" in pedido);
console.log("tatal in pedido com hasOwnProperty:", pedido.hasOwnProperty("total"))
console.log("toString in pedido com hasOwnProperty:", pedido.hasOwnProperty("toString"))

//como deletar propriedades do objeto(método tb)
pedido.totalIntens = 23;
console.log("removeu a prop. totalItens?", delete pedido.totalIntens);
console.log("totalItens?", pedido.totalIntens);


//como obter as chaves(nome de propriedades) do objeto----------------------------------------
var produtoTeste = {nome: 'teste', valor: 12, ativo: true};
var chaves = Object.keys(produtoTeste);//ECMAScript 5
console.log("Object.keys(produtoTeste)", chaves);
console.log("tipo com typeof", typeof chaves);
console.log("Object.prototype.toString.call(chaves)",Object.prototype.toString.call(chaves));
console.log("verificar se é um array com Array.isArray", Array.isArray(chaves));

//acessar os valores das propriedades do objeto-------------------------------------------------
for(var prop in produtoTeste){
    console.log(produtoTeste[prop]);
}

var valoresProp = Object.values(produtoTeste);//ES2017
console.log("Object.values(produtoTeste):", valoresProp);
console.log("tipo com typeof", typeof valoresProp);
console.log("Object.prototype.toString.call(valoresProp)",Object.prototype.toString.call(valoresProp));
console.log("verificar se é um array com Array.isArray", Array.isArray(valoresProp));


//recuperar as propriedades e valores do objeto---------------------------------------------------------
var chavesValoresArray = Object.entries(valoresProp);//em array //ES2017
console.log(chavesValoresArray);
var chavesValoresObjeto = Object.entries(produtoTeste);//em objeto
console.log(chavesValoresObjeto);
console.log("tipo com typeof", typeof chavesValoresObjeto);
console.log("Object.prototype.toString.call(chavesValoresObjeto)",Object.prototype.toString.call(chavesValoresObjeto));
console.log("verificar se é um array com Array.isArray", Array.isArray(chavesValoresObjeto));

for (const [chave, valor] of chavesValoresObjeto) {
    console.log(chave+":",valor );
}


//criando propriedades de objeto de acesso e dado - atributos de propriedade - métodos acessores get set
var folhaPagamento = {
    _total: 0,//nomenclatura para informar que este atributo é privado e não deve ser acessado diretamente
    set total(valor){
        //novoValor = valor + 1;
        //this._total = novoValor;
        this._total = valor;
    },
    get total(){
        //regra de negócio para tratar o retorno
        return this._total;
    }
}
folhaPagamento.total = 67233.42;
console.log("Total folha pagamento: R$ ", folhaPagamento.total);

console.log("Atributos das propriedades do objeto: ", Object.getOwnPropertyDescriptors(folhaPagamento));

console.log("------------------------------------")
//Verificar se uma propriedade é iterável/enumerável
var objTeste = {a:1, b:2, c:3};
console.log("a in objTeste:", "a" in objTeste);
console.log("objTeste.propertyIsEnumerable('a'):", objTeste.propertyIsEnumerable("a"));
console.log("objTeste.propertyIsEnumerable('toString'):", objTeste.propertyIsEnumerable("toString"));
console.log("objTeste.propertyIsEnumerable('length'):", objTeste.propertyIsEnumerable("length"));

console.log(objTeste);

for(var [k,v] of Object.entries(objTeste)){
    console.log(k,v);
}

Object.defineProperty(objTeste, "a", {
    enumerable: false,
    configurable: false
});
console.log("------------------------------------")
for(var [k,v] of Object.entries(objTeste)){
    console.log(k,v);
}

console.log("delete objTeste.a?", delete objTeste.a);

//tornar uma propriedade gravável em não gravável
objTeste.b = 10;
console.log("objTeste.b: ",objTeste.b);

Object.defineProperty(objTeste, "b", {
    writable: false
})

objTeste.b = 20;
console.log("objTeste.b: ",objTeste.b);

Object.defineProperty(objTeste, "c", {
    value: 30
})

console.log("objTeste.c: ",objTeste.c);

console.log("-----------------------");
//definindo propriedades e atributos------------------
var objAluno2 = {};
Object.defineProperties(objAluno2, {
    nome:{
        value: "Fernanda",
        enumerable: true,
        configurable: true,
        writable: true
    },
    turma:{
        value: "A",
        enumerable: true,
        configurable: false,
        writable: false
    }
});

console.log(objAluno2);
objAluno2.turma = "B";
delete objAluno2.turma;
console.log(objAluno2);

var objAluno3 = {};

Object.defineProperties(objAluno3, {
    _nome:{
        value: "marcelo",
        enumerable: true,
        configurable:true,
        writable: true
    },
    nome: {
        get: function(){
            return this._nome + " turma: A";
        },
        set: function(valor){
            this._nome = valor;
        }
    }
});

objAluno3.nome = "joão";
console.log("nome aluno: ", objAluno3.nome);

console.log("----------------------------------------------------")

//recuperar as informações de atributos de propriedades
var objCarro = {marca: 'fiat', cor: 'preta'};
console.log("0 - Object.getOwnPropertyDescriptors(objCarro):", Object.getOwnPropertyDescriptors(objCarro));
console.log("1 - Object.getOwnPropertyDescriptor(objCarro, 'cor'):", Object.getOwnPropertyDescriptor(objCarro, "marca"));
Object.defineProperty(objCarro, 'cor', {enumerable:false, configurable:false, writable: false});
console.log("2 - Object.getOwnPropertyDescriptors(objCarro):", Object.getOwnPropertyDescriptors(objCarro))
console.log("3 - Object.getOwnPropertyDescriptor(objCarro, 'cor')):", Object.getOwnPropertyDescriptor(objCarro, "marca"));

console.log("4-Object.getOwnPropertyDescriptor(objCarro, 'toString')):", Object.getOwnPropertyDescriptor(objCarro, "toString"));
console.log("5-Object.getOwnPropertyDescriptor(objCarro, 'length')):", Object.getOwnPropertyDescriptor(objCarro, "length"));
console.log("5-Object.getOwnPropertyDescriptor(objCarro, 'placa')):", Object.getOwnPropertyDescriptor(objCarro, "placa"));

var retorno = Object.getOwnPropertyDescriptor(objCarro, "marca");
console.log(retorno)
console.log(Object.prototype.toString.call(retorno));

console.log("----------------------------------------------------")
//Travar objeto para ficar nao extensível - não permitir adicionar propriedades ao mesmo
var objMoto = {marca: 'honda', cor:'vermelha'};
console.log("Object.getOwnPropertyDescriptors(objMoto):", Object.getOwnPropertyDescriptors(objMoto));
console.log("Object.isExtensible(objMoto)?", Object.isExtensible(objMoto));//ECMAScript 5
console.log("Object.preventExtensions(objMoto):",Object.preventExtensions(objMoto));
objMoto.placa = 'hfd1234';
objMoto.ligar = function(){return "moto ligada"};
console.log("Object.getOwnPropertyDescriptors(objMoto):", Object.getOwnPropertyDescriptors(objMoto));
console.log("Object.isExtensible(objMoto)?", Object.isExtensible(objMoto));
console.log("'placa' in objMoto:",'placa' in objMoto);
console.log("'ligar' in objMoto:",'ligar' in objMoto);

objMoto.cor = 'preta';
console.log("Object.getOwnPropertyDescriptors(objMoto):", Object.getOwnPropertyDescriptors(objMoto));
console.log("Object.isExtensible(objMoto)?", Object.isExtensible(objMoto));

console.log("delete objMoto.cor?", delete objMoto.cor);
console.log("Object.getOwnPropertyDescriptors(objMoto):", Object.getOwnPropertyDescriptors(objMoto));
//Object.defineProperty(objMoto, 'cor', {value:'Amarela'}); gera um erro pois o objeto nao extensível


console.log("----------------------------------------------------")
/*como selar um objeto - um objeto selado não é extensível (pode pode add prop.) 
e também as propriedades não são configuráveis(não é possível deletar prop.)*/
var livro = {titulo:'JavaScript Mestre Jedi', paginas:1345};
console.log("Object.isExtensible(livro)?", Object.isExtensible(livro));
console.log("Object.isSealed(livro)?", Object.isSealed(livro));

console.log("selando o objeto (Object.seal(livro)): ", Object.seal(livro));

console.log("Object.isExtensible(livro)?", Object.isExtensible(livro));
console.log("Object.isSealed(livro)?", Object.isSealed(livro));

//add
livro.ebook = true;
console.log("add ebook - livro.hasOwnProperty('ebook'):", livro.hasOwnProperty('ebook'));
console.log("delete livro.titulo?", delete livro.titulo);
console.log("livro.hasOwnProperty('titulo'):", livro.hasOwnProperty('titulo'));

livro.paginas = 1498;
console.log(Object.getOwnPropertyDescriptors(livro));

//Object.defineProperty(livro, 'paginas', {configurable: true}); nao possível pois o objeto esta selado

console.log("----------------------------------------------------")
//congelando objeto, irá ficar: não extensível, não configurável e não será possível gravar dados
//nao pode ser adicionar propriedades, não pode deletar propriedades e nem setar dados nas propriedades/
//o objeto será apenas leitura
//depois de congelado nao pode reverter o processo
//o congelamento afeta apenas o objeto em questão e não a cadeia de protótipos
var artigo = {autor:'Prof. Madson Aguiar', titulo: 'Classes em JavaScript'};
console.log("Object.isFrozen(artigo)?",Object.isFrozen(artigo))
console.log("Object.isExtensible(artigo)?",Object.isExtensible(artigo));
console.log("Object.isSealed(artigo)?", Object.isSealed(artigo))

console.log("Congelando o objeto(Object.freeze(artigo)): ", Object.freeze(artigo));
console.log("Object.isFrozen(artigo)?",Object.isFrozen(artigo))
console.log("Object.isExtensible(artigo)?",Object.isExtensible(artigo));
console.log("Object.isSealed(artigo)?", Object.isSealed(artigo))

console.log(Object.getOwnPropertyDescriptors(artigo));

artigo.titulo = "Classes em PHP";//add
artigo.paginas = 5;//add
console.log("delete artigo.titulo?", delete artigo.titulo);//delete
console.log(Object.getOwnPropertyDescriptors(artigo));

console.log("----------------------------------------------------")

//Trabalhando JSON
var pessoa = {
    nome: "João da Silva",
    cpf: 123456789123,
    dataNascimento: new Date(1974,3,16),
    ativo: true,
    "testeString": 'teste string',
    contatos: [122345577, 7621356136, 3133131113],
    endereco: {rua: "Rua B", numeto: 367, cep:'620234562', pontoRef: {ponto1: "ponto ref 1", ponto2: "ponto ref 2"}},
    expressaoReg: /teste/g,
    //error: new Error("Gerou um erro"),
    funcao: function(){return "teste"},
    valorNull: null,
    valorUndefined: undefined,
    valorNaN: NaN,
    valorInfinty: Infinity,
    valorInfintyNegativo: -Infinity,
    stringVazia: ""
};

console.log("Objeto JS:", pessoa);
var retornoObjetoParaJson = JSON.stringify(pessoa);
console.log("retornoObjetoParaJson: ", retornoObjetoParaJson);
console.log("retornoObjetoParaJson tipo?", typeof retornoObjetoParaJson);
var formatoJson = '{"nome":"João da Silva","cpf":123456789123,"dataNascimento":"1974-04-16T03:00:00.000Z","ativo":true,"testeString":"teste string","contatos":[122345577,7621356136,3133131113],"endereco":{"rua":"Rua B","numeto":367,"cep":"620234562","pontoRef":{"ponto1":"ponto ref 1","ponto2":"ponto ref 2"}},"expressaoReg":{},"valorNull":null,"valorNaN":null,"valorInfinty":null,"valorInfintyNegativo":null,"stringVazia":""}';

var retornoJsonParaObjeto = JSON.parse(retornoObjetoParaJson);
console.log("retornoJsonParaObjeto tipo?", typeof retornoJsonParaObjeto);
console.log(retornoJsonParaObjeto);






