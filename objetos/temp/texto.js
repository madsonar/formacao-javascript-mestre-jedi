/*A linguagem JavaScript é projetada com base em um simples paradigma orientado a objeto. Um objeto é uma 
coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. 
Um valor de propriedade pode ser uma função, que é então considerada um método do objeto. 
Além dos objetos que são pré-definidos no browser, você pode definir seus próprios objetos*/
//Criando objeto de diversos tipos
var obj01 = new Object();
var obj02 = new Array(1, 2, 3);
var obj03 = new Date(1987, 4, );
var obj06 = new Error("Ocorreu um erro");
var obj05 = new RegExp(/teste/);
console.log(obj05.test("teste"));
var obj04 = new Function("parametroNome", "return 'Olá ' + parametroNome +'!'");//nao são reconhecidas pelos debuggers
console.log(obj04("Madson"));

//literal
var funcionario01 = { nome: "Maria" };
console.log(funcionario01);

//por construtor
var funcionario02 = new Object();
funcionario02.nome = "pedro";
console.log(funcionario02);

//função estática com prototipo
var funcionario03 = Object.create(Object.prototype);//EcmaScript 5
funcionario03.nome = "Marta";
console.log(funcionario03);



//Falar sobre tipo referencia de ponteiro

//criar objeto via literal---------------------------------
var objetoPessoa = {
    nome: "João Pedro da Silva",
    cpf: 00211122252,
    dataNascimento: new Date(1981, 4, 25),
    ativo: true,
    "teste": "teste",
    contatos: ['12458712', '21653298', '78561524'],
    endereco: { rua: "Av Sul", numero: 456 },
    saudacao: function () {
        return "Olá, me chamo " + this.nome + "!";
    }
};
console.log(objetoPessoa);

//acessar propriedades
console.log("nome: ", objetoPessoa.nome);
console.log("cpf: ", objetoPessoa.cpf);
console.log("Data nascimento: ", objetoPessoa.dataNascimento);
console.log("Ativo: ", objetoPessoa.ativo);
console.log("Contato: ", objetoPessoa.contatos[0]);
for (var value of objetoPessoa.contatos) {
    console.log("contato: ", value);
}
console.log("Rua: ", objetoPessoa.endereco.rua);
for (var key in objetoPessoa.endereco) {
    console.log(key, objetoPessoa.endereco[key])
}
//chamar método
console.log(objetoPessoa.saudacao);
console.log(objetoPessoa.saudacao());


//criar objeto via construtor
var objetoProduto = new Object()
//definendo propriedades de forma dinamica
objetoProduto.nome = "Mesa"
objetoProduto.preco = 89.66;
objetoProduto.dimensoes = { largura: "1m", comprimento: "1,5m", altura: "90cm" };
objetoProduto["nome no formato strung valido"] = "deu certo";
var nomeProp = "novoNome";
objetoProduto[nomeProp] = "deucerto";//é interessante quando se precisar saber dinamicamente qual propriedade acessar
objetoProduto[""] = "vazio";
objetoProduto["123"] = "123";

//usando operador de membro
console.log("nome: ", objetoProduto['nome']);
console.log("altura: ", objetoProduto.dimensoes.altura);
console.log("cubo: ", objetoProduto.dimensoes.cubo);
console.log("detalhe: ", objetoProduto.detalhe);
//console.log("cor detalhe: ", objetoProduto.detalhe.cor); gerou um erro - não é possível ler uma propriedade de undefined
console.log('objetoProduto["nome no formato strung valido"]', objetoProduto["nome no formato strung valido"]);
console.log('objetoProduto[nomeProp]', objetoProduto[nomeProp]);
console.log('objetoProduto[""]', objetoProduto[""]);
console.log('objetoProduto["123"]', objetoProduto["123"]);
//
for (var key in objetoProduto.dimensoes) {
    console.log(key, objetoProduto.dimensoes[key]);
}

//copia de objeto por referencia---------------------------------
var obj1 = { matricula: 17 };
console.log("obj1", obj1.matricula);
var obj2 = obj1;
console.log("obj2", obj2.matricula);
obj2.matricula = 18;
console.log("obj2", obj2.matricula);
console.log("obj1", obj1.matricula);

obj1 = null//limpar memoria; será obj2 tb perderá a referência???
console.log("tipo objeto: typeof", typeof obj01);//verificar o tipo
console.log("tipo objeto instanceof: ", obj01 instanceof Object);//Descobrir se é tipo referencia


//Verificando se uma propriedade ou método existe em um objeto com 'in'-----------------------
var pedido = new Object();
pedido.total = 233.34;//add
console.log("in - cliente", "cliente" in pedido);//o in veiricar se a propriedade existe no mesmo objeto e na 
//cadeia de prototipos
console.log("in - total", "total" in pedido);
console.log("in - toString", "toString" in pedido);
console.log("hasOwnProperty - total", pedido.hasOwnProperty("total"));//hasOwnProperty verificar se a propriedade
// existe e é original do objeto, e não de prototipo
console.log("hasOwnProperty - toString", pedido.hasOwnProperty("toString"));



//Adicionando e removendo propriedades dinamicamente------------------------------
//e possível bloquear este comportamento
pedido.totalItens = 23;//add
//Se conseguir deletar vai retornar true
console.log("removeu propriedade: ", delete objetoProduto.totalItens);
console.log("acesso total_Itens ", objetoProduto.totalItens);



//iterando em objetos------------------------------------------------------------
//Cada propriedade do um objeto tem um atributo interno chamado enumerable
var objTeste = { a: 1, b: 2, c: 3 };
for (const key in objTeste) {
    if (objTeste.hasOwnProperty(key)) {
        const element = objTeste[key];
        console.log(key, element)
    }
}


//obter a chaves do objetos-----------------------------------------------
//itera em propriedades iteraveis/enumeraveis[[enumerable]]
//o for in retornar todas as propriedades, até do prototipo, o keys apenas do objeto
var chaves = Object.keys(objTeste)//Implemento no ECMAScript 5, retorna um array
console.log("tipo retorno chaves: ", typeof chaves);
console.log("tipo retorno chaves call: ", Object.prototype.toString.call(chaves));
console.log("tipo retorno chaves isArray: ", Array.isArray(chaves));
console.log("Retorno: ", chaves);

var valores = Object.values(objTeste);//ES2017
console.log("tipo retorno valores: ", typeof valores);
console.log("tipo retorno valores call: ", Object.prototype.toString.call(valores));
console.log("tipo retorno valores isArray: ", Array.isArray(valores));
console.log("Retorno values: ", valores);

var chavesValores = Object.entries(objTeste);//ES2017
console.log("tipo retorno chavesValores typeor: ", typeof chavesValores);
console.log("tipo retorno chavesValores call: ", Object.prototype.toString.call(chavesValores));
console.log("tipo retorno chavesValores isArray: ", Array.isArray(chavesValores));
console.log("Retorno chavesValores: ", chavesValores);

for (const [chave, valor] of chavesValores) {//Object.entries(objTeste)
    console.log(chave, valor);
}



//Criando propriedades de 'acesso' para modificar propriedade de 'dado'----------------------------
var folhaPagamento = {
    _total: 0,//nomenclatura para informar que o atributo é privado, mais na prática isso não acontece
    set total(valor) {
        this._total = valor;
    },
    get total() {
        return this._total;
    }
};
folhaPagamento.total = 67513.66;
console.log("Total folha pagamento: ", folhaPagamento.total);

console.log("->", Object.getOwnPropertyDescriptors(folhaPagamento));

//não é necessário criar o get e set, mesmo se for usado sem existir irá gerar erro no set que não 
//existir apenas em modo restrito

//Verificando propriedades iteraveis enumeraveis-------------------------------
//verifica se o objeto tem uma propriedade própria enumerável
var objTeste = { a: 1, b: 2, c: 3 };
console.log('"a" in objTeste', "a" in objTeste.toString);
console.log('"a" propertyIsEnumerable', objTeste.propertyIsEnumerable("a"));
console.log('"length" propertyIsEnumerable', objTeste.propertyIsEnumerable("length"));

//Definindo atributos de propriedades-------------------------------
//Enumerable - permite que a propriedade seja iterável
//Configurable - determina se a propriedade pode ser alterada (pode ser alterada e ter seus atributos modificados)
//writable - Indica se o valor de uma propriedade é gravável ou não. Possui valor true se e somente se o valor puder ser alterado com um operador de atribuição. O valor padrão é false.
var objAluno = { nome: 'Pedro', turma: 'A', curso: 'JavaScript' };
console.log(objAluno);

for (var [k, v] of Object.entries(objAluno)) {
    console.log(k, v);
}

Object.defineProperty(objAluno, "turma", {
    enumerable: false,
    configurable: true
})

console.log("turma enumerable?", objAluno.propertyIsEnumerable('turma'))
for (var [k, v] of Object.entries(objAluno)) {
    console.log(k, v);
}

delete objAluno.turma;//em modo regtrito irá gerar um erro
console.log("turma", 'turma' in objAluno);

//console.log(objAluno.nome.value);
//console.log("value" in objAluno.nome);
var objAluno = { nome: 'pedro', turma: 'A', curso: 'JavaScript' };
Object.defineProperty(objAluno, 'nome',
    { writable: false }
);
objAluno.nome = 'joão';//writable lança erro em modo restrito
console.log("nome", objAluno.nome);




//defirnir varias propriedades com Object.defineProperties() //ver zap
var objAluno2 = {};
Object.defineProperties(objAluno2, {
    nome: {
        value: "Fernanda",
        enumerable: true,
        configurable: true,
        writable: true
    },
    turma: {
        value: "A",
        enumerable: true,
        configurable: true,
        writable: false
    }
}
);
objAluno2.nome = "João";
objAluno2.turma = "B";
console.log("nome", objAluno2.nome);
console.log("nome", objAluno2.turma);

//defirnir varias propriedades com Object.defineProperties() para get e set
var objAluno3 = {};
Object.defineProperties(objAluno3, {
    _nome: {
        value: "Marcelo",
        enumerable: true,
        configurable: true,
        writable: true
    },
    nome: {
        get: function () {
            return this._nome + " - Turma: C";
        },
        set: function (nome) {
            this._nome = nome;
        }
    }
}
);
console.log(objAluno3.nome);
objAluno3.nome = "Marcelo Silva";
console.log(objAluno3.nome);


//Recuperando informações de uma propriedade---------------------------------------------------------------
var objCarro = { marca: 'fiat', cor: 'preta' };
console.log("Object.getOwnPropertyDescriptors(objCarro)", Object.getOwnPropertyDescriptors(objCarro));
console.log("Object.getOwnPropertyDescriptor(objCarro, 'marca')", Object.getOwnPropertyDescriptor(objCarro, "marca"));

var atributosPropriedade = Object.getOwnPropertyDescriptor(objCarro, "marca");
console.log("tipo:", Object.prototype.toString.call(atributosPropriedade));
console.log("atributos:", atributosPropriedade);
//retorna undefined para propriedades herdadas e propriedades que nao existem
console.log("propriedade não existe: ", Object.getOwnPropertyDescriptor(objCarro, "placa"))
console.log("propriedade herdada: ", Object.getOwnPropertyDescriptor(objCarro, "toString"))

var atributosPropriedadeS = Object.getOwnPropertyDescriptors(objCarro);
console.log("atributos propriedades:", atributosPropriedadeS);

var nomesProrpiedades = Object.getOwnPropertyNames(objCarro);
console.log("tipo:", Object.prototype.toString.call(nomesProrpiedades));
console.log("nomes prop:", nomesProrpiedades);






//Travando objetos para inclusão de propriedades - atributo de objeto 'extensible' ECMA 5-----------------------------------------
//em modo restrito irá gerar um erro
var moto = { marca: 'honda', cor: 'vermelha' };
console.log("objeto extesível?", Object.isExtensible(moto));
//Torna o objeto não extenível, obs não tem como voltar para definir o mesmo como exetensível novamente
console.log("Object.preventExtensions", Object.preventExtensions(moto));
console.log("objeto extesível?", Object.isExtensible(moto));
moto.placa = "123";
moto.ligar = function () { return 'moto ligada' };
console.log("propriedade placa?", "placa" in moto);
console.log("método ligar?", "ligar" in moto);
moto.cor = "azul";//é possível modificar os valores objetos do objetos
console.log("cor", moto.cor)
delete moto.marca;//é possível deletar propriedades
console.log("marca", "marca" in moto);
/*Object.defineProperty(moto, "proprietario", {
    enumerable: true,
    configurable:true    
 });*/


//Selando objetos-----------------------------------------------------
/*Um objeto selado se torna não extensible(não pode add props) e torna 
nao configurable as props(nao pode deletar e prop, somente alterar valores)*/
var livro = { nome: 'JavaScript Mestre Jedi', paginas: 1300 };
console.log("Object.isExtensible(livro):", Object.isExtensible(livro));
console.log("Object.isSealed(livro):", Object.isSealed(livro));

console.log("Object.seal(livro):", Object.seal(livro));

console.log("Object.isExtensible(livro):", Object.isExtensible(livro));
console.log("Object.isSealed(livro):", Object.isSealed(livro));

livro.ebook = true;
console.log("'ebook' in livro:", 'ebook' in livro);

console.log("delete livro.nome: ", delete livro.nome);
livro.nome = "JavaScript Mestre JS Jedi";
console.log("livro.nome", livro.nome);

console.log('Object.getOwnPropertyDescriptor(livro, "nome"):', Object.getOwnPropertyDescriptor(livro, "nome"));


//Congelando Objetos-------------------------------------------------
//Objetos 'congelados' não são extensible(false), configurable(false) e writable(false)
//Em outras palavras não podemos adicionar propriedades, remover e nem alterar os valores das propriedades
//O mesmo será apenas leitura
//Quando um objeto é congelado o mesmo não pode mais ser descongelado
//verificar se propriedades de acesso iram continuar funcionando
//o congelamento afeta apenas o objeto e não a cadeia de prototipos
var artigo = { autor: 'Prof. Madson Aguiar', titulo: 'Classes em JavaScript.' };
console.log(" Object.isFrozen(artigo):", Object.isFrozen(artigo));
console.log(" Object.isExtensible(artigo):", Object.isExtensible(artigo));
console.log(" Object.isSealed(artigo):", Object.isSealed(artigo));
console.log("Object.getOwnPropertyDescriptor - writable", Object.getOwnPropertyDescriptor(artigo, 'autor'));

console.log("Object.freeze(artigo):", Object.freeze(artigo));

console.log(" Object.isFrozen(artigo):", Object.isFrozen(artigo));
console.log(" Object.isExtensible(artigo):", Object.isExtensible(artigo));
console.log(" Object.isSealed(artigo):", Object.isSealed(artigo));
console.log("Object.getOwnPropertyDescriptor - writable", Object.getOwnPropertyDescriptors(artigo));
delete artigo.tituo;
console.log("'titulo' in artigo:", 'titulo' in artigo);
artigo.autor = 'Prof. Madson Aguiar rodrigues';
console.log('autor', artigo.autor);

//mostrar como criar um objeto como prototipo congelado
var objSeal = Object.seal(Object.create(Object.freeze({ descricao: 'notbook' }, { marca: { value: 'notepower', writable: true } })));

console.log("-----------------------------------------")
//Serializando objetos em javaScript
//O ECMAScript 5 fornece os métodos JSON.stringify() e JSON.parse() para serializa e restalrar Objetos JS em JSON e vise-versa
//JSON - Significa JavaScript Object Notation, sintaxe similiar a literais de objetos e array. (identificadorers sempre com aspas duplas)
//NaN, Infinity e -Infinity são serializados como NULL
//Os Objetos datas são seralizados no formato string padrão ISO - Função Date.toJSON() e JSON.parse() pode ser usada.
//Function, RegExp, Error e o valor undefined não podem ser serializados. são omitidos;
//JSON.stringify() e JSON.parse() aceitam um segundo parametro para personalizar a conversão
var objetoPessoa = {
    nome: "João Pedro da Silva",
    cpf: 00211122252,
    dataNascimento: new Date(1981, 4, 25),
    ativo: true,
    "teste": "teste",
    contatos: ['12458712', '21653298', '78561524'],
    endereco: { rua: "Av Sul", numero: 456 },
    expressao: /teste/g,
    error: new Error('gerou um erro'),
    valorNull: null,
    valorUndefined: undefined,
    valorNan: NaN,
    valorInfinity: Infinity,
    valorInfinityNeg: -Infinity,
    stringVazia: "",
    saudacao: function () {
        return "Olá, me chamo " + this.nome + "!";
    }
};
console.log("objeto:", objetoPessoa);
var retornoObejetoParaJson = JSON.stringify(objetoPessoa);//converter objeto em json
console.log('retornoObjetoParaJson', retornoObejetoParaJson);
console.log('retornoObjetoParaJson tipo', typeof retornoObejetoParaJson);
var retornoJsonParaObjeto = JSON.parse(retornoObejetoParaJson);
console.log('retornoJsonParaObjeto', retornoJsonParaObjeto);
console.log('retornoJsonParaObjeto tipo', typeof retornoJsonParaObjeto);

console.log("-------------------------------------------------------------")

//-------------------------------------------------------------------------------
//Construtores, ou simplesmente Funções Construtoras sao para instanciar Objetos com uso do operador New
/*Contrutor é uma uma função que serve como molde base para criar objetos semelhantes com as mesmas 
propriedades e métodos*/
//Na programação orientada a objetos tradicional você vêe algo paracecido, as classes.
//nao retorna nada, apenas iniciar o objeto e o this
function Pessoa() {
}
//nova instancia de objeto pessoa, 
var ObjPessoa = new Pessoa();
console.log("typeof ObjPessoa:", typeof ObjPessoa);
console.log("ObjPessoa.constructor == Pessoa", ObjPessoa.constructor == Pessoa);
console.log("ObjPessoa instanceof Pessoa", ObjPessoa instanceof Pessoa);
//console.log(" Object.prototype.toString.call(ObjPessoa):", Object.prototype.toString.call(ObjPessoa));
//console.log("ObjPessoa === Pessoa:", ObjPessoa === Pessoa);

//-------------------------------------
function Programador(nome) {//parametro nomeado
    this.nome = nome;
    this.ola = function () {
        return "Olá meu nome é " + this.nome + "!";
    };
}

//sempre usar o new
//this interno gera erro em modo restrito
var programador1 = new Programador("Maria");
var programador2 = new Programador("Pedro");
console.log(programador1.ola());
console.log(programador2.ola());

//-----------------------------

function FolhaPagamento(total = 0) {
    let _total = total;
    
    this.valorTotal = function(){
        return "Valor total R$ " + this._total;
    }
};


//-------------------------------------
function Analista(nome) {
    Object.defineProperty(this, "nome", {
        get: function () {
            return nome;
        },
        set: function (param) {
            nome = param;
        }
    });

    this.ola = function () {
        return "Olá meu nome é " + nome + "!";
    };
}

var objAnalista = new Analista("Fernanda");
console.log("Analista:", objAnalista.nome);
console.log(objAnalista.ola());

//-------------------------------------------

function Carro(){
    Object.defineProperties(this, {
        _nome: {
            value: "padrao",
            enumerable: true,
            configurable: true,
            writable: false
        },
        nome: {
            get: function () {
                return this._nome;
            },
            set: function (param) {

                Object.defineProperty(this, "_nome", { writable: true });
                this._nome = param;
                Object.defineProperty(this, "_nome", { writable: false });
            }
        }
    });
}
var objCarro = new Carro();
objCarro._nome = "teste";
console.log("objCarro.nome:",objCarro.nome);
objCarro.nome = "deu certo";
console.log("objCarro.nome:",objCarro.nome);


//Protótipos##############################################################################################################

console.log("---------------------------------------------------------")
function Pessoa(){
    this._nome;

    this.ola = function(){
        return "Olá, meu nome é "+ this.nome;
    }
}

function Funcionario(){

}



//Prototype-----------------------------------------------------------
/*Todos os objeto tem uma propriedade chamada 'prototype' no qual podemos definir propriedades e métodos
que devem ser compartilhados entre as instancias criadas*/
//a ideia do protptipos é compartilhar algo via herança na cadeia de prototipos
var objPessoa = new Object();
objPessoa.nome = "Maria";
objPessoa.idade = 23;
console.log("objPessoa.idade.toString():",objPessoa.idade.toString());
console.log("objPessoa.hasOwnProperty('toString'):", objPessoa.hasOwnProperty("toString"));
console.log("Object.prototype.hasOwnProperty('toString'):", Object.prototype.hasOwnProperty("toString"));
//[[prototype]] propriedades de instancia que tem ponteiro para apontar para o prototipo
console.log("Object.getPrototypeOf(objPessoa):", Object.getPrototypeOf(objPessoa));//vai [[prototype]] da instancia
console.log("Object.getPrototypeOf(objPessoa) === Object.prototype?", Object.getPrototypeOf(objPessoa) === Object.prototype)
//console.log("objPessoa.prototype:", objPessoa.prototype);
console.log("objPessoa.__proto__:", objPessoa.__proto__);//ler e escreve na propriedade [[prototype]] da instancia
console.log("Object.getPrototypeOf(objPessoa) === objPessoa.__proto__:", Object.getPrototypeOf(objPessoa) === objPessoa.__proto__);
console.log("Object.prototype.isPrototypeOf(objPessoa):", Object.prototype.isPrototypeOf(objPessoa));


//criando objetos com create------------------------------------------
//Object.create();//EcmaScript 5
//Object.prototype; //
//Object.getPrototypeOf()//consulta o prototipo do objeto//EcmaScript 5
//.constructor
//.constructor.prototype//Verifica o prototipo do construtor
//objPessoa.isPrototypeOf(Object.prototype)//verifica se um objeto é prototipo de outro
/*Object.__prop__; //Desde o mozilla netscape esta propriedade expõe o prototipo do objeto e 
posibilita configurar o prototipo de qualquer objeto*/

//##############################################################################################################
//----------------------  
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes
//Hoisting não é possível com classes
//Classes foram defnidas no ECMAScript 2015
class Pedido{
    constructor(cliente, total){
        this.cliente = cliente;
        this.total = total;
    }

    liberarPedido(){
        return "Pedido liberado";
    }
}

class Eventos{
    constructor(){//omitir?
    }
    //qtdepessoas; Definir propriedades soltas

}

//--------------------------- classe com expressão
var classeAnonima = class{
    constructor(){
        }
    };
    
    var classeAnonima = class Ferias {
        constructor(){
            }
        };
    


//classe / protótipo-------------------------------------------------
class PessoaPai{
    constructor(nome){
        this.nome = nome;
    }
}

class ClienteFilho extends PessoaPai{
    constructor(limiteCredito){
        this.limiteCredito = limiteCredito
    }
}












