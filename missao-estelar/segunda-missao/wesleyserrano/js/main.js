//Segunda Missão Estelar JS

/**
 * Apertem os cintos para adentrarmos o hiper-espaço 
 * rumo  a uma nova Missão Estelar JS!:)
*/

var missao = "Segunda Missão Estelar JS";
console.log(missao, typeof missao);

var hiperespaco = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";
console.log(hiperespaco, typeof hiperespaco);

var nomeCliente = "Pedro", renda = 2000, dataNascimento = new Date("1990-03-14"), ativo = true;

function exibirDadosClientesVariaveis()
{
  console.log(nomeCliente, renda, dataNascimento, ativo?"sim":"não");    
}
exibirDadosClientesVariaveis();

var clienteArray = [["nomeCliente","Pedro"],["renda",2000],["dataNascimento",new Date("1990-03-14")],["ativo",true]]

function exibirDadosClienteArray()
{
    for(var dado of clienteArray)
    {
        if(dado[0] == "ativo") console.log(dado[0],": ", dado[1]?"Sim":"Não");
        else console.log(dado[0],": ", dado[1]);
    }
}
exibirDadosClienteArray()

var clienteObject = {'nomeCliente':"Pedro",'renda':2000,'dataNascimento':new Date("1990-03-14"),'ativo':true}
function exibirDadosClienteObjeto()
{
    for(var p in clienteObject)
    {
        switch(p)
        {
            case("ativo"):
            
                if(clienteObject[p] == true) console.log(p, ": ", "Sim");
                else console.log(p, ": ", "Não");
                break;
            
            default:
                console.log(p,": ",clienteObject[p]);           
        }
     
    }
}
exibirDadosClienteObjeto();

function retornaDataAtualFormatada()
{
    var data = new Date();

    var dia = data.getDate();
    var mes = data.getUTCMonth() + 1;
    var ano = data.getFullYear();
    
    if(dia< 10) dia = "0" + dia;
    if(mes<10) mes = "0"+mes;

    var dataFormatada = new String(dia + "/" + mes + "/" + ano);

    return dataFormatada.toString();
}
console.log(retornaDataAtualFormatada());

var hiperEspacoRegExp = new RegExp('Estelar');
var textoMissao = 'Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)';
console.log('Teste: ', hiperEspacoRegExp.test(textoMissao));
console.log('Índice da pesquisa: ', hiperEspacoRegExp.exec(textoMissao));

try
{
    var threshold = 29
    var iteracao = 0;
    for(var contador = 30; contador>= 0; contador--)
    {
      iteracao++;
      console.log(contador);
      if(iteracao == threshold) 
      {
        throw new Error("Iteração 29. Um erro foi gerado");
      }
    }
}
catch (erro) 
{
    console.log(erro.message);
    console.log(erro.name);
    console.log(erro.stack);
}
finally
{
    console.log("Finally");
}

function preencherFormHtml(objDados)
{
  var propertyRegexp = new RegExp('Check|Radio');
 
  var nomesCampos = Object.getOwnPropertyNames(objDados);
  
  var formHTMLName = '#formHtml';

  for(var campo of nomesCampos)
  {
    var propriedadeComValor = propertyRegexp.test(campo)? 'checked' :'value';
    var campoHtml = campo.replace('Boot','Html');
    
    document.querySelector(formHTMLName + ' #'+campoHtml)[propriedadeComValor] = objDados[campo];
  }
}

function recebeDadosFormBoot(objFormElementos)
{
   console.log('Tipo do objeto do formulário: ',Object.prototype.toString.call(objFormElementos))
   var objDadosForm = new Object();
   
   var nomesCampos = ['nomeBoot','emailBoot','emailPromocionalCheckBoot','formaContatoTelefoneRadioBoot','formaContatoEmailRadioBoot','estadoSelectBoot']
   
   var propertyRegexp = new RegExp('Check|Radio');
   for(var campo of nomesCampos)
   {
       var propriedadeComValor = propertyRegexp.test(campo)? 'checked' :'value';
       console.log(campo, objFormElementos[campo][propriedadeComValor]);
       objDadosForm[campo] = objFormElementos[campo][propriedadeComValor];
   }

   preencherFormHtml(objDadosForm);
}
