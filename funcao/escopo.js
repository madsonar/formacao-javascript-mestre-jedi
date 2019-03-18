/*O escopo no JavaScript define a abrangência no qual varáveis, valores, funções e objetos 
poderão ser referênciados e acessados.*/
/*No JavaScript tenho dois escopos:
- Global: Pertencente ao Objeto window que representa a janela do Browser
- Local: Nível de bloco que é usando pelas funções */

console.log('--------------------------------------')
//exemplo 1
var pessoa = 'Maria'//Escopo global

console.log('global pessoa:', pessoa);

function empresa(){
    var funcionario = 'Pedro';//Escopo local
    console.log('local pessoa:', pessoa);
    console.log('local funcionario:', funcionario);
}

empresa();
//console.log('global funcionario:', funcionario);//ReferenceError: funcionario is not defined

//var morador2;

console.log('--------------------------------------')
//exemplo 2
function casa(){
    var morador1 = 'José';
    morador2 = 'Francisca';//não uma boa prática, vai poluir o escopo global e gerar bugs
    console.log('local morador1:', morador1);
    console.log('local morador2:', morador2);
}

casa();
//console.log('global morador1:', morador1);//ReferenceError: morador1 is not defined
console.log('global morador2:', morador2);

console.log('--------------------------------------')
//exemplo 3
var aluno1 = 'Fernando';
var aluno2 = 'Érica';
console.log('global aluno1:', aluno1);
console.log('global aluno2:', aluno2);

function salaDeAula(aluno3){
    var aluno1 = 'Joana';
    aluno2 = 'Paula';//var
    console.log('local aluno1:', aluno1);
    console.log('local aluno2:', aluno2);
    console.log('local aluno3:', aluno3);
}

salaDeAula('Bruno');

console.log('global aluno1:', aluno1);
console.log('global aluno2:', aluno2);
//console.log('global aluno3:', aluno3);//ReferenceError: aluno3 is not defined

