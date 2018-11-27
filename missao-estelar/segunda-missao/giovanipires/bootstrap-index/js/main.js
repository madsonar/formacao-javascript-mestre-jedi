//Tarefa 6
//Segunda Missão Estelar JS

//Tarefa 7
/*
Apertem os cintos para adentramos
ao hiper-espaço rumo a uma nova
Missão Estelar JS!:)
*/

//Tarefa 8
var missao = "Segunda Missão Estelar JS";
console.log("var missao é = " + missao + "do tipo " + typeof missao);

//Tarefa 9
var hiperespaco = new String('Aperte os cintos para adentrarmos ao hiper-espaço rumo a uma nova Missão estelar JS! :)');
console.log("var hiperespaco: " + hiperespaco.toString() + " - Tipo: " + typeof missao);

//Tarefa 10
var nomeCliente = "Maria";
var renda = 1500.00;
var dataNascimento = new Date('1990-09-10');
var ativo = true;

function exibirDadosClienteVariáveis() {
    console.log("Nome: " + nomeCliente);
    console.log("Renda: R$" + renda);
    console.log("Data de nascimento: " + dataNascimento);
    console.log("Ativo: ", ativo == true ? "Sim" : "Não");
}

exibirDadosClienteVariáveis();

//Tarefa 11
var clienteArray = [
    ['Nome: ', 'Maria'],
    ['Renda: R$ ', 1500.00],
    ['Data de nascimento: ', new Date('1990-09-10')],
    ['Ativo: ', true]
];

function exibirDadosClienteArray() {
    for(var i of clienteArray) {
        if(i[0] == 'Ativo: ') {
            console.log(i[0], i[1] == true ? 'Sim' : 'Não');
        } else {
            console.log(i[0], i[1]);
        }
    }
}

exibirDadosClienteArray();

//Tarefa 12
var clienteObject = {
    nome: "Maria",
    renda: 1500.00,
    dataNascimento: new Date('1990-09-10'),
    ativo: true
};

function exibirDadosCienteObjeto() {
    for(var key in clienteObject) {
        switch (key) {
            case "nome":
                console.log("Nome: ", clienteObject[key]);
                break;
            case "renda":
                console.log("Renda: R$ ", clienteObject[key].toString().replace(".",","));
                break;
            case "dataNascimento: "
                console.log("Data de nascimento: ", clienteObject[key]);
                break;
            case "ativo":
                console.log("Ativo: ", clienteObject[key] == true ? 'Sim' : 'Não');
                break;
            default:
                console.log(key, ": ", clienteObject[key]);
                break;
        }
    }
}

exibirDadosCienteObjeto();
