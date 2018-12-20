//array
var array = [];//literal
array[0] = 'teste';
array.push("teste 2");
//Array.prototype
console.log('array:', array);

var nomes = ['Paulo', 'João', 'Maria'];
console.log("nomes:", nomes);
console.log("nomes[0]", nomes[0]);
console.log("nomes[2]", nomes[2]);
console.log("nomes.length: ",nomes.length);

//construtor
var numeros = new Array();
var numeros = new Array(23, 24, 25, 28);
console.log('array', numeros);
var numeros2 = new Array(2);
console.log('array 2', numeros2);
console.log('numeros2[0]:', numeros2[0]);
console.log('numeros2[1]:', numeros2[1]);
console.log("numeros2.length", numeros2.length)
numeros2[0] = 2;
numeros2[1] = 3;
console.log(numeros2);

//criar um array com tipagem fraca
var numero = 33;
var arrayTipagemFraca = [
    "string",//0
    25.88,//1
    true,//2
    {livro: 'JS', detalhe: {pags:23, ativo:true}},//3
    [0,1,2,3,4,5,['a','b','c']],//4
    function(a,b){//5
        return a + b;
    },
    numero
];

console.log('array', arrayTipagemFraca);
console.log('arrayTipagemFraca[0]:', arrayTipagemFraca[0]);
console.log('arrayTipagemFraca[2]', arrayTipagemFraca[2])
console.log('arrayTipagemFraca[5]', arrayTipagemFraca[5](2,2))
console.log('arrayTipagemFraca[4][3]', arrayTipagemFraca[4][3])

console.log("-----------------------------------------------")
//como acessar elemento do array - o que são arrays com esparsos
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log('a', a);
console.log(a[0], a[1], a[10]);
var index = 4;
console.log(a[index]);
var existe1 = 5 in a;
var existe2 = 10 in a;
console.log("existe:", existe1, existe2);

console.log("-----------------------------------------------")
//array com esparsos
var arrayComEsparsos = ['teste', 'c',,,,true];
console.log(arrayComEsparsos);
console.log('arrayComEsparsos.length:', arrayComEsparsos.length);
console.log('arrayComEsparsos[2]:', arrayComEsparsos[2]);
console.log('arrayComEsparsos[0]:', arrayComEsparsos[0]);

arrayComEsparsos[15] = '15';
console.log(arrayComEsparsos);
console.log('arrayComEsparsos.length:', arrayComEsparsos.length)

console.log("----------------------------------------")
//adicionar itens ou elementos em um array
var t = [];
t[0] = 10;
t[1] = 20;
t.push(30)//adicionar um novo elemento ao final do array
console.log('array:', t);
var numero = 70;
t.push(40, 50, 60, numero);
console.log('array:', t);

//adicionando um novo elemento no array, na primeira posição
t.unshift(5);
console.log('array:', t);
console.log("t[0]:", t[0])
t.unshift(1, 2, 3, 4);
console.log('array:', t);

console.log("----------------------------------------")
//como excluir elemento de um array
var b = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log('array:', b);
console.log('b.length', b.length);
console.log('delete b[3]:', delete b[3]);
console.log('array:', b);
console.log('b.length', b.length);
console.log('b[3]', b[3]);
console.log('b.pop():', b.pop())//deleta a ultima posição do array
console.log('array:', b);
console.log('b.length', b.length);
console.log("b.shift():", b.shift());//deleta o primeiro elemento do array
console.log('array:', b);
console.log('b.length', b.length);
console.log('b.splice(2, 1):', b.splice(2, 1));//deleta um elemento de uma posiçaõ especifica do array (n)
console.log('array:', b);
console.log('b.length', b.length);
console.log('b.splice(3, 2):', b.splice(3, 2));//deleta um elemento de uma posiçaõ especifica do array (n)
console.log('array:', b);
console.log('b.length', b.length);


console.log("----------------------------------------")
//propriedade length - ela pode ser alterada seu valor
var x = [1,2,3,4,5,6,7,8,9];
console.log('array:', x);
console.log('x.length:', x.length);
console.log('x.length = 15: ', x.length = 15);
console.log('array:', x);
console.log('x.length:', x.length);
console.log('x.length = 5: ', x.length = 5);
console.log('array:', x);
console.log('x.length:', x.length);

//tornando a propriedades length do objeto - somente leitura - congelamento
console.log('Object.defineProperty:', Object.defineProperty(x, 'length', {writable: false}));
console.log('x.length = 3: ', x.length = 3);
console.log('array:', x);
console.log('x.length:', x.length);

//x.push('z');
console.log('delete x[3]:', delete x[3]);
console.log('array:', x);
console.log('x.length:', x.length);
x.pop();
console.log('array:', x);
console.log('x.length:', x.length);
console.log(Object.getOwnPropertyDescriptors(x));
x.pop();
console.log('array:', x);
console.log('x.length:', x.length);
x.shift();
console.log('array:', x);
console.log('x.length:', x.length);
//x.unshift(12);

console.log("----------------------------------------")
//qual diferença entre propriedades e elementos de um array
var ax = [];
ax[0] = 0//index 0
ax.push(1);
console.log('array:', ax);
ax['2'] = 2;
console.log('array:', ax);
console.log('ax.length:', ax.length);
ax[-3] = -3;
ax['quatro'] = 4;
ax.tres = 3;
console.log('array:', ax);
console.log('ax.length:', ax.length);
console.log("----------------------------------------")
for(var index in ax){
    console.log("index: " + index + " = " + ax[index]);
}

Object.defineProperty(ax, '-3', {enumerable: false});
Object.defineProperty(ax, 'quatro', {enumerable: false});
Object.defineProperty(ax, 'tres', {enumerable: false});
console.log("----------------------------------------")

for(var index in ax){
    console.log("index: " + index + " = " + ax[index]);
}
console.log("----------------------------------------")
//---------------------------------------------------
var meuArray = [1,2,3,'a','b','c',[1,'a'],null,{nome:'maria'},true,2.2,undefined];
meuArray.teste = 'teste';
meuArray[-1] = 'teste 2';

//for tradicional
for (var index = 0; index < meuArray.length; index++) {
    console.log("index: "+index, 'valor: '+ meuArray[index]);    
    if(index == meuArray.length-1) console.log("qtde: "+meuArray.length);
}

console.log("meuArray[index] == null----------------------------------------")
for (var index = 0; index < meuArray.length; index++) {
    if(meuArray[index] == null || meuArray[index] == undefined) continue;
    console.log("index: "+index, 'valor: '+ meuArray[index]);    
    if(index == meuArray.length-1) console.log("qtde: "+meuArray.length);
}

console.log("!meuArray[index]----------------------------------------")
for (var index = 0; index < meuArray.length; index++) {
    //null, undefined, false, 0, '', NaN
    if(!meuArray[index]) continue;
    console.log("index: "+index, 'valor: '+ meuArray[index]);    
    if(index == meuArray.length-1) console.log("qtde: "+meuArray.length);
}

console.log("for in----------------------------------------")
for (var index in meuArray) {
    //o for in tb itera em propriedades herdadas
    if(!meuArray.hasOwnProperty(index)) continue;
    console.log('index: '+index, 'valor: '+meuArray[index]);
}

console.log("for in isNaN(index)----------------------------------------")
for (var index in meuArray) {
    //o for in tb itera em propriedades herdadas
    if(!meuArray.hasOwnProperty(index)) continue;
    if(isNaN(index) || index < 0) continue;
    console.log('index: '+index, 'valor: '+meuArray[index]);
}

console.log("forEach----------------------------------------")
//forEach método adicionado no ECMAScript 5 no Array.prototype

var totalVenda = 0;
var vendaItens = [
    {codigo: 1, preco: 2.2, qtde: 2},
    {codigo: 2, preco: 7.99, qtde: 5},
    {codigo: 3, preco: 12, qtde: 3}
];

vendaItens.forEach(function(item, index, array){
    var subtotal = item.qtde * item.preco; 
    totalVenda += subtotal;
    item.subtotal = subtotal;
});

console.log('total: R$',totalVenda);
console.log('itens subtotal:', vendaItens);

console.log("--------------------------------------------")
//array multidimensional
var arrayMulti = [[1,2,3],['a','b','c',['maria']]];
console.log(arrayMulti[0]);
console.log(arrayMulti[1]);

console.log(arrayMulti[0][0]);
console.log(arrayMulti[0][1]);
console.log(arrayMulti[0][2]);

console.log(arrayMulti[1][0]);
console.log(arrayMulti[1][1]);
console.log(arrayMulti[1][2]);
console.log(arrayMulti[1][3][0]);

var produtos = [
    [{codigo: 28, nome: 'camisa 1'}, ['amarelo', 'azul', 'vermelho']],
    [{codigo: 52, nome: 'camisa 2'}, ['amarelo', 'preto', 'vermelho']]
];

console.log(produtos[0][0]['nome'], " - Cores: " + produtos[0][1].toString());

console.log("--------------------------------------------")
//Array.join(); para juntar elementos de um array e retornar uma string
var numeros = [1,2,3,4,5,6,7,8,9];
console.log(numeros);
console.log('numeros.join()',numeros.join());
console.log('numeros.join("-")', numeros.join("-"));
console.log('numeros.join("/")', numeros.join("/"));
console.log('umeros.join(" ")', numeros.join(" "));
console.log('numeros.join("")', numeros.join(""));
console.log('numeros.join("") typeof', typeof numeros.join(""));

//converter em string
var arrayAll = [1,'a',true,new Date()];
console.log(arrayAll);
console.log(arrayAll.toString());
console.log(arrayAll.join());
console.log(arrayAll.toLocaleString('pt-BR'));

console.log("--------------------------------------------")
//Array.reverse(), alterar o ordem dos elementos de um array - retorna o próprio array invertido
var numeros3 = [1,2,3,4,5,6,7,8,9];
console.log(numeros3);
console.log('reverse()', numeros3.reverse());
console.log(numeros3);

for (let index = 0; index < numeros3.length; index++) {
    console.log(numeros3[index]);    
}

var abc = ['a','b','c'];
console.log(abc);
console.log(abc.reverse());

console.log("--------------------------------------------")
//Array.sort() - este método ordena os elementos de um array convertendo para
//string e ordenando conforme a tabela unicode
//https://unicode-table.com/pt/

var alfabeto = ['q','a','b','c','w','z'];
console.log(alfabeto);
console.log(alfabeto.sort());

var numeros = [9,3,2,1,4,6,7,8];
console.log(numeros);
console.log(numeros.sort());

var alfabeto2 = ['q','a','b','c','w','B','z'];
console.log(alfabeto2);
console.log(alfabeto2.sort());

console.log("unicode b", 'b'.charCodeAt());
console.log("unicode B", 'B'.charCodeAt());
console.log("'b'<'B'", 'b' < 'B');


var numeros2 = [9,3,2,1,4,80,6,7,8];
console.log(numeros2);
console.log(numeros2.sort());
console.log("unicode 9", '9'.charCodeAt());
console.log("unicode 80", '80'.charCodeAt());
console.log("'9'<'80'", '9' < '80');

console.log('--->', numeros2.sort(function(x,y){
    return x - y;
}))
//(x - y) < 0 = y fica antes de x
//(x - y) > 0 = x fica antes de y
//(x - y) = 0 = fica como esta

console.log("--->>>", alfabeto2.sort(function(x, y){
    var temp1 = x.toLocaleLowerCase();
    var temp2 = y.toLocaleLowerCase();
    if(temp1 < temp2) return -1;
    if(temp1 > temp2) return 1;
    return 0;
}))

console.log("--------------------------------------------")
//Array.concat() - concatena os novos elementos passados por parametros com os elementos 
//existente no array, retornando um novo array sem alterar o original.
var arrayOriginal = [1,2,3,4,5];
console.log('arrayOriginal', arrayOriginal);
var arrayConcat = arrayOriginal.concat(6,7,8,9,10);
console.log('arrayConcat', arrayConcat);
console.log('arrayOriginal', arrayOriginal);

console.log('arrayConcat.concat([11,12,13,14,15])', arrayConcat.concat([11,12,13,14,15]));
console.log("arrayConcat.concat({teste: 'teste'})", arrayConcat.concat({teste: 'teste'}));
console.log('arrayConcat.concat(true, false', arrayConcat.concat(true, false));
console.log('retorno', arrayConcat.concat('a','b','c').concat(30,40,50));



console.log("--------------------------------------------")
//slice - método que retorna parte de um array, com base em um índice inicial e final;
//ele não modifica o array original, retornando um novo array.
var produtos = ['produto 1', 'produto 2', 'produto 3', 'produto 4', 'produto 5', 'produto 6'];
console.log(produtos);
console.log('produtos.slice(0, 3)', produtos.slice(0, 3));
console.log('produtos.slice(2, 4)', produtos.slice(2, 4));
console.log('produtos.slice()', produtos.slice());
console.log('produtos.slice(0, produtos.length)', produtos.slice(0, produtos.length));
console.log('produtos.slice(3, produtos.length)', produtos.slice(3, produtos.length));
console.log('produtos.slice(-2, 2)', produtos.slice(-2));



console.log("--------------------------------------------")
//splice - este método permite adicionar novos elementos em um array ao mesmo tempo que remove 
//elementos antigos.
//:parâmetros (três) 
//1 - índice para iniciar a inserção de novos elementos
//2 - qtde de elementos a serem removidos
//3... - os novos elementos
//obs: o método altera o array original e retorna apenas os elementos removidos

var numSplice = [1,2,3,4,5];
console.log("->",numSplice);
console.log('numSplice.splice():',numSplice.splice());
console.log("->",numSplice);

console.log('numSplice.splice(2):',numSplice.splice(2));//remove elementos
console.log("->",numSplice);

numSplice = [1,2,3,4,5,6,7];
console.log('numSplice.splice(3,3):',numSplice.splice(3,3));
console.log("->",numSplice);

numSplice = [1,2,3,4,5,6,7];
console.log('numSplice.splice(0,0,"a","b","c"):',numSplice.splice(0,0,"a","b","c"));
console.log("->",numSplice);

console.log('numSplice.splice(numSplice.length,0,"s","r","z"):',numSplice.splice(numSplice.length,0,"s","r","z"));
console.log("->",numSplice);

numSplice = [1,2,3,4,5,6,7];
console.log('numSplice.splice(3,0,"a","b","c"):',numSplice.splice(3,0,"a","b","c"));
console.log("->",numSplice);

numSplice = [1,2,3,4,5,6,7];
console.log('numSplice.splice(3,0,"a","b","c"):',numSplice.splice(3,2,"a","b","c"));
console.log("->",numSplice);

console.log("numSplice.splice(2,1,['a','b','c']):",numSplice.splice(2,1,['a','b','c']));
console.log("->",numSplice);

console.log("numSplice.splice(2,1,{teste:'teste'}):",numSplice.splice(2,1,{teste:'teste'}));
console.log("->",numSplice);


console.log("--------------------------------------------")
//ECMAScript 5
/*Map - Este método itera por todos os elementos de um array com valores atribuídos 
e que não sejam undefined*/
//recebe uma função (callback) por parâmetro no qual é chamada para cada item/elemento do array
//a função pode receber até três parâmetros 
//1- valor - elemento array
//2- índice do elemento
//3- o próprio array
/*Em cada iteração a função de callback irá retornar um valor que irá compor um novo array 
retornado pelo map*/
//não modifica o array original
/*Para que o map itere no array, ele faz uma espécie de cópia temporária, caso seja adicionado 
ou removidos item do depois do laço do map iniciar tais elementos não serão visíveis pelo map*/

var numeros = [2, 4, 8, 10, 12];

console.log("array original: ", numeros);
var dobro = numeros.map(function(valorElementoArray, indiceDoArray, array){
    console.log("valores: " + valorElementoArray + ' - ' + indiceDoArray);
    return valorElementoArray * 2;    
});
console.log("novo array dobro: ", dobro);
console.log("array original: ", numeros);




console.log("--------------------------------------------")
//ECMAScript 5
//Filter - Este método itera por todos os elementos com valores atribuídos que não seja undefined;
//Filter retorna um novo array com base em um retorno booleano (true) de cada iteração;
//Recebe uma função (callback) por parâmetro no qual é chamada para cada elemento do array;
//A função pode receber até três parâmetros:
//1- valor (elemento array)
//2- índice do elemento no array
//3- o próprio array

var nomes = ['Maria', 'João', 'Pedro', 'José', 'Flávio', 'Marta', 'Fernanda'];
var numeros = [2,9,5,4,3,1,0,7,6,15];

console.log('números', numeros);
var subConjuntoNumeros = numeros.filter(function(valor, indice, array){
    return valor > 5;
});
console.log('resultado filtro', subConjuntoNumeros);
console.log('números', numeros);

//pesquisa
console.log('nomes', nomes);
var regExp = new RegExp("Ma", "ig");

var resultadoNomes = nomes.filter(function(valor){
    return regExp.test(valor);
});

console.log("resultado nomes pesquisa", resultadoNomes);
console.log('nomes', nomes);



console.log("--------------------------------------------")
//ECMAScript 5
/*Every - Este método testa se todos os elementos do array passam pelo teste implementado pela
função fornecida*/
//Retorna true ou false, sendo que irá retorna true SOMENTE SE todos os teste retornarem 'true'
//Recebe uma função (callback) por parâmetro no qual é chamada para cada elemento do array;
//A função pode receber até três parâmetros:
//1- valor (elemento array)
//2- índice do elemento no array
//3- o próprio array

var numeros = [2,9,5,4,3,1,0,7,6,15];

console.log('números', numeros);

var retorno1 = numeros.every(function(item, indice, array){
    return item < 20;
});

console.log('retorno1 (item < 20)', retorno1);

var retorno2 = numeros.every(function(item, indice, array){
    return item < 10;
});

console.log('retorno2 (item < 10)', retorno2);



console.log("--------------------------------------------")
//ECMAScript 5
/*Some - Este método testa se alguns dos elementos no array passam no teste implementado pela 
função atribuída.*/
/*Retorna true ou false, sendo que irá retornar true SE pelo menos um elemento do array passar no
 teste.*/
//Recebe uma função (callback) por parâmetro no qual é chamada para cada elemento do array;
//A função pode receber até três parâmetros:
//1- valor (elemento array)
//2- índice do elemento no array
//3- o próprio array

var numeros = [2,9,5,4,3,1,0,7,6,15];

console.log('números', numeros);

var retorno1 = numeros.some(function(item, indice, arrayAll){
    return item > 10;
});

console.log('retorno1 (item > 10)', retorno1);

var retorno2 = numeros.some(function(item, indice, arrayAll){
    return item > 20;
});

console.log('retorno2 (item > 20)', retorno2);


console.log("--------------------------------------------")
//ECMAScript 5
/*Reduce/ReduceRight - Este método itera por todos os elementos de um array, tendo como objetivo 
principal reduzir tudo a um único valor no qual será o retorno da função*/
//Recebe uma função (callback) e um valor inicial para seu acumulador
//A função callback recebe quatro parâmetros no qual é chamada para cada elemento do array;
//1- Acumulador, no qual irá reter o valor oriundo do retorno de cada iteração.
//2- valor (elemento array)
//3- índice do elemento no array
//4- o próprio array
/*OBS: O valor inicial do acumulador na iteração pode ser um valor especifico que deve ser passado
como segundo parâmetro junto a função call-back para o método recude, caso não seja informado, ele
assumira como valor inicial o valor presente no primeiro elemento da iteração;
OBS2: ReduceRight irá fazer o mesmo que reduce, porém irá iniciar a iteração na ordem inversa 
do array, do último elemento para o primeiro*/
var testeReduce = [1,2,3,4,5];
console.log('array', testeReduce)

console.log('reduce-------------------');
var retornoReduce = testeReduce.reduce(function(acumulador, valorEleArray, indice, array){
    console.log('acumulador:', acumulador);
    console.log('valorEleArray:', valorEleArray);
    console.log('indice:', indice);  
    console.log('>--------------------');  
    return acumulador + valorEleArray;
},0)
console.log('retornoReduce:', retornoReduce);

console.log('reduceRight-------------------');
var valorInicial = 2;
var retornoReduce = testeReduce.reduceRight(function(acumulador, valorEleArray, indice, array){
    console.log('valorInicial:', valorInicial);
    console.log('acumulador:', acumulador);
    console.log('valorEleArray:', valorEleArray);
    console.log('indice:', indice);  
    console.log('>--------------------');  
    return acumulador + valorEleArray;
},valorInicial)
console.log('retornoReduce:', retornoReduce);

console.log('IndexOf e lastIndexOf-------------------');
//IndexOf e lastIndexOf
//Procurando um valor especifico em um array e retornam seu índice

var valores = ['maria', 'josé','fernanda', 'paulo'];

console.log('array:', valores);

var retorno1 = valores.indexOf('fernanda');
console.log('retorno1:', retorno1);

var retorno2 = valores.indexOf('joão');
console.log('retorno2:', retorno2);

var retorno3 = valores.lastIndexOf('maria');
console.log('retorno3:', retorno3);

function pesquisarNome(nome){
    var retornoPesq = valores.indexOf(nome);
    if(retornoPesq == -1){
        return 'não foi encontrado';
    }else{
        return retornoPesq + " - " + valores[retornoPesq];
    }
}

var retorno4 = pesquisarNome('paulo');
console.log('retorno4:', retorno4);

var retorno5 = valores.indexOf('josé', 1);
console.log('retorno5:', retorno5);
