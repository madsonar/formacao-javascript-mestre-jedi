var missao = "Missão Estelar"

console.log(typeof missao + " var missão: " + missao )

var hiperespaco = new String("Missão Estelar = Hiperespaço")

console.log(typeof hiperespaco + " var missão: " + hiperespaco)  


var nomeCliente = "Luciano";
var rendaCliente = 2500;
var dataNascimento = new Date('1979-10-19');
var ativo = false;


function exibirDadosClienteVariareis(){

        console.log('Nome : '+nomeCliente);
        console.log('Renda: '+rendaCliente);
        console.log('Data de Nascimento: '+dataNascimento);
        console.log('Ativo :'+ (ativo == true ? ' SIM' : ' NÃO'));
}

console.log("----------------------------");
exibirDadosClienteVariareis();

console.log("----------------------------");

var clienteArray = [
    ['Nome:', 'Viviane'],
    ['Renda:', 2570],
    ['Data de Nascimento:', new Date('1982-10-04')],
    ['Ativo:', true]
]


function exibirDadosClientesArray() {

    for(var array of clienteArray){
        if(array[0] == 'Ativo:'){
            console.log(array[0], array[1] == true ? 'SIM': NÃO)

        }else{
            console.log(array[0], array[1])
        }
        
    }

    
}

exibirDadosClientesArray();

console.log("------------------------------");

var clienteObj = {nomeCliente: 'Felipe', rendaCliente: 5000, dataNascimento: new Date('2015-04-18'), ativo: true};


for(var item in clienteObj){
    switch (item) {
        case 'nomeCliente':
              console.log('Nome: ', clienteObj[item]);
        break;

        case 'rendaCliente':
            console.log('Renda: ', clienteObj[item]);
        break;
        
        case 'dataNascimento':
             console.log('Data de Nascimento: ', clienteObj[item]);
        break; 
        
        case 'ativo':
              console.log("Ativo: ", clienteObj[item] == true ? ' SIM' : 'NÃO')    
        default:
            break;
    }
}

