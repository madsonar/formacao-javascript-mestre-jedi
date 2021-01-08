// Segunda Missão Estelar JS

/*
  Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS! :)
*/

var missao = "Segunda Missão Estelar JS";
console.log("Valor.: " + missao, "/ Tipo.: " + typeof missao);

var hiperespaco = String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");
console.log("Valor.: " + hiperespaco, "/ Tipo.: " + typeof hiperespaco);

//--------------------------------------------------------
var nomeCliente = "Pedro";
var renda = 7200.00;
var dataNascimento = new Date('1984/04/17');
var ativo = false;

function exibirDados() {
  console.log("Nome do Cliente:", nomeCliente);
  console.log("Nome do Renda:", renda);
  console.log("Nome do Data de Nascimento:", dataNascimento);
  console.log("Nome do Ativo:", ativo?"Sim":"Não");
}

exibirDados();

//--------------------------------------------------------
var clienteArray = [["nomeCliente","Pedro"],["renda",7200.00],["dataNascimento",new Date('1984/04/17')],["Ativo",false]]

function exibirDadosClienteArray() {
  for (const cliente of clienteArray) {
    console.log(cliente[0], cliente[1]);    
  }
}

exibirDadosClienteArray();

//--------------------------------------------------------
var clienteObject = {nomeCliente: "Pedro","renda": 7200.00,"dataNascimento":new Date('1984/04/17'),"Ativo":false}
console.log(clienteObject, typeof clienteObject);

function exibirDadosClienteObjeto() {
  for (const key in clienteObject) {
    
    switch (key) {
      case "nomeCliente": 
        console.log("Nome do Cliente: ", clienteObject[key]);
        break;

      case "renda": 
        console.log("Renda: R$", clienteObject[key].toFixed(2));
        break;

      case "dataNascimento": 
        console.log("Data de Nascimento: ", clienteObject[key].toLocaleString("pt-br"));
        break;
      
        case "Ativo": 
        console.log("Ativo: ", clienteObject[key]?"Sim":"Não");
        break;
    
      default:
        break;
    }      
    
  }
}

exibirDadosClienteObjeto();

console.log("--------------------------------------------")
//--------------------------------------------------------
function retornaDataAtualFormatada(){ 
  var dataHoje = new Date();
  var dia = dataHoje.getDate();
  var mes = dataHoje.getMonth()+1;
  var ano = dataHoje.getFullYear();
  var dataRetorno = ""
  
  if (dia.toString().length == 1) {
    dataRetorno += "0" + dia.toString()
  } else {
    dataRetorno += dia.toString()
  }

  if (mes.toString().length == 1) {
    dataRetorno += "/0" + mes.toString()
  } else {
    dataRetorno += "/" + mes.toString()
  }

  dataRetorno += "/" + ano.toString()

  console.log(dataRetorno);

}

retornaDataAtualFormatada();

console.log("--------------------------------------------")
//--------------------------------------------------------

var hiperEspacoRegExp = new RegExp("Estelar");
var textoMissao = "‘Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)"

console.log("test", hiperEspacoRegExp.test(textoMissao));
console.log("exec", hiperEspacoRegExp.exec(textoMissao));

console.log("--------------------------------------------")
//--------------------------------------------------------

for (let index = 30; index > 0; index--) {  
  try {
    console.log(index);  
    
    if (index === 29) {
      throw new Error ("Erro de propósito", "Errinho");
    }
  } catch (error) {
    console.log("Nome do erro:", error.name);        
    console.log("Nome do erro:", error.message); 
  }
  
}

console.log("--------------------------------------------")
//--------------------------------------------------------

function recebeDadosFormBoot(objFormElementos) {
  console.log(Object.prototype.toString.call(objFormElementos)) 
  
  var objDadosForm = new Object();
  
  for (let index = 0; index < objFormElementos.length; index++) {
    if (objFormElementos[index].name == "formaContatoRadioBoot") {
      objDadosForm[objFormElementos[index].id] = objFormElementos[index].checked;
    } else if (objFormElementos[index].name == "emailPromocionalCheckBoot") {
      objDadosForm[objFormElementos[index].name] = objFormElementos[index].checked;
    } else {
      objDadosForm[objFormElementos[index].name] = objFormElementos[index].value;
    }    
  }
  
  console.log(objDadosForm);

  preencherFormHtml(objDadosForm);
  
}

function preencherFormHtml(objDados) {
  
  document.getElementById("nomeHtml").value = objDados.nomeBoot;
  document.getElementById("emailHtml").value = objDados.emailBoot;
  document.getElementById("emailPromocionalCheckHtml").checked = objDados.emailPromocionalCheckBoot;
  document.getElementById("formaContatoTelefoneRadioHtml").checked = objDados.formaContatoTelefoneRadioBoot;
  document.getElementById("formaContatoEmailRadioHtml").checked = objDados.formaContatoEmailRadioBoot;
  document.getElementById("estadoSelectHtml").value = objDados.estadoSelectBoot;  

}
  




