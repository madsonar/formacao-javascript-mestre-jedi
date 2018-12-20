/*********Protótipo em JavaScript***************/
/*### JavaScript é uma linguagem orientada a objetos e protótipos;*/
/*### Entenda protótipo como sendo algo pré-pronto em termo de propriedades e métodos no um 
objeto instanciado poder herdar de seu protótipo e usar normalmente como se fosse dele;*/
/*### No JavaScript todos os objetos criados descendem/herdam diretamente de 'Object', que é a 
função construtora base para criação de objetos/instancias;*/
/*### 'Object' tem uma propriedade especial chamada 'prototype', que tem como objetivo servir  
como um protótipo possibilitando a criação de novos objetos no qual podem herdar propriedades 
e métodos deste protótipo via propriedade prototype;*/
/*### Em toda função construtora tem a propriedade 'prototype', no qual podemos definir 
propriedades e métodos a serem herdados pelos objetos instanciados a partir desta função;*/
/*### Um objeto instanciado/criado tem uma propriedade especial chamada '[[Prototype]]' 
que aponta para seu objeto prototipo no qual herda. Também tem outra propriedade chamada
'__proto__', esta propriedade também funciona como métodos assessores get e set para que se 
possa alterar [[Prototype]] e informar o objeto no qual se deve herdar.*/

console.log(typeof Object);
var obj = {teste: 'teste'}
console.log(obj);
console.log('typeof obj:', typeof obj);
console.log('obj instanceof Object:', obj instanceof Object);
console.log(obj.__proto__);
console.log(Object.prototype);
console.log(obj.__proto__ == Object.prototype);

function Pessoa(){
   //... 
}

console.log(typeof Pessoa);
console.log(Pessoa instanceof Object);
console.log(Pessoa.prototype);
console.log(Pessoa.__proto__);
var p = new Pessoa('madson', '123');
console.log(Object.getPrototypeOf(p) == Pessoa.prototype);

