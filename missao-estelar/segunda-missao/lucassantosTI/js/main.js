// Segunda Missão Estelar JS
/*
Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)
*/

console.log("******************* exercicio ", 8);
var missao = "Segunda Missão Estelar JS";
console.log("missao type: ", typeof missao);
console.log("missao value: ", missao);

console.log("******************* exercicio ", 9);
var hiperespaco = new String(
  "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)"
);
console.log("hiperespaco type: ", typeof hiperespaco);
console.log("hiperespaco value: ", hiperespaco.toString());

console.log("******************* exercicio ", 10);
var nomeCliente = "Fulano da Silva Sauro";
var renda = 1000000;
var dataNascimento = new Date("1986-01-01");
var ativo = true;
function exibirDadosClienteVariaveis() {
  console.log("nomeCliente: ", nomeCliente);
  console.log("renda: ", renda);
  console.log("dataNascimento: ", dataNascimento);
  console.log("ativo: ", ativo ? "Sim" : "Não");
}
exibirDadosClienteVariaveis();

console.log("******************* exercicio ", 11);
var clienteArray = [
  ["nomeCliente", "Ciclano da Silva Sauro"],
  ["renda", 500000],
  ["dataNascimento", new Date("1986-01-01")],
  ["ativo", false]
];
function exibirDadosClienteArray() {
  for (var cliArrayItem of clienteArray) {
    for (var cliArrayProp of cliArrayItem) {
      if (typeof cliArrayProp === "boolean") {
        console.log(cliArrayProp ? "Sim" : "Não");
      } else {
        console.log(cliArrayProp);
      }
    }
  }
}
exibirDadosClienteArray();

console.log("******************* exercicio ", 12);
var clienteObject = {
  nomeCliente: "Beltrano da Silva Sauro",
  renda: 1500000,
  dataNascimento: new Date("1985-01-01"),
  ativo: true
};
function exibirDadosClienteObjeto() {
  for (var key in clienteObject) {
    switch (key) {
      case "nomeCliente":
        console.log("Nome do Cliente");
        break;
      case "renda":
        console.log("Renda (R$)");
        break;
      case "dataNascimento":
        console.log("Data de Nascimento");
        break;
      default:
        console.log("Ativo?");
        break;
    }

    if (typeof clienteObject[key] === "boolean") {
      console.log(clienteObject[key] ? "Sim" : "Não");
    } else {
      console.log(clienteObject[key]);
    }
  }
}
exibirDadosClienteObjeto();

console.log("******************* exercicio ", 13);
function retornaDataAtualFormatada() {
  var dataAtual = new Date();

  var ano = dataAtual.getFullYear();
  var mes = dataAtual.getMonth();
  var dia = dataAtual.getDate() + 1;

  var dataRetorno = "";
  if (dia < 10) {
    dataRetorno += "0";
    dataRetorno += dia.toString();
  } else {
    dataRetorno += dia.toString();
  }
  dataRetorno += "/";
  if (mes < 10) {
    dataRetorno += "0";
  }
  dataRetorno += mes.toString();
  dataRetorno += "/";
  dataRetorno += ano.toString();

  return dataRetorno;
}
console.log("dataAtualFormatada: ", retornaDataAtualFormatada());

console.log("******************* exercicio ", 14);
var hiperEspacoRegExp = new RegExp("Estelar");
var textoMissao =
  "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";
console.log(
  "hiperEspacoRegExp test textoMissao: ",
  hiperEspacoRegExp.test(textoMissao)
);
console.log(
  "hiperEspacoRegExp exec textoMissao: ",
  hiperEspacoRegExp.exec(textoMissao)
);

console.log("******************* exercicio ", 15);
for (var num = 30; num >= 0; num--) {
  try {
    if (num === 29) {
      throw new Error("This is a error test on printing 29 value!");
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log(num);
  }
}

console.log("******************* exercicio ", 16);
function recebeDadosFormBoot(objFormElementos) {
  var obj = new Object();
  Object.prototype.constructor.call;
  console.log(
    "objFormElementos type: ",
    Object.prototype.toString.call(objFormElementos)
  );

  var objDadosForm = new Object();
  for (
    var elementIndex = 0;
    elementIndex < objFormElementos.elements.length;
    elementIndex++
  ) {
    var elemento = objFormElementos.elements[elementIndex];

    if (elemento.type !== "button") {
      if (elemento.type === "checkbox") {
        objDadosForm[elemento.name] = elemento.checked;
        console.log(elemento.name, elemento.checked);
      } else if (elemento.type === "radio") {
        if (!objDadosForm[elemento.name]) {
          objDadosForm[elemento.name] = [];
        }

        objDadosForm[elemento.name].push([elemento.id, elemento.checked]);
        console.log(elemento.id, elemento.checked);
      } else {
        objDadosForm[elemento.name] = elemento.value;
        console.log(elemento.name, elemento.value);
      }
    }
  }

  for (var key in objDadosForm) {
    if (objDadosForm[key] instanceof Array) {
      console.log(key);
      for (var arrayItem of objDadosForm[key]) {
        console.log("   " + arrayItem);
      }
    } else {
      console.log(key, objDadosForm[key]);
    }
  }

  preencherFormHtml(objDadosForm);
}

function preencherFormHtml(objDados) {
  if (objDados) {
    for (var key in objDados) {
      if (objDados[key] instanceof Array) {
        for (var arrayItem of objDados[key]) {
          var elemento = document.getElementById(
            arrayItem[0].replace("Boot", "Html")
          );
          elemento.checked = arrayItem[1];
        }
      } else {
        var elemento = document.querySelector(
          "[name=" + key.replace("Boot", "Html") + "]"
        );

        if (elemento.type === "checkbox") {
          elemento.checked = objDados[key];
        } else {
          elemento.value = objDados[key];
        }
      }
    }
  }
}
