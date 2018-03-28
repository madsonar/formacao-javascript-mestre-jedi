//funcional
function sejaBemVindo(){
    console.log("Seja bem vindo a Formação JavaScript Mestre Jedi!!!");
}

console.log("Chamando a função seja bem vindo sejaBemVindo():");
sejaBemVindo();

//POO
var objProfessor = {
    nome: "Prof. Madson Aguiar",
    curso: "Formação JavaScript Mestre Jedi!!! :)",
    mistrarAula: function(){
        console.log("Ministrando aula de JavaScript!");
    }
};

console.log("objeto Professor");
console.log(objProfessor);

console.log("acessando propriedades do objeto: objProfessor.nome");
console.log(objProfessor.nome);
console.log(objProfessor.curso);

console.log("chamando o método do objeto professor: objProfessor.mistrarAula()");
objProfessor.mistrarAula();






