var nomeBootInputText = window.document.getElementById("nomeBoot");
var estadoselect = document.getElementById("estadoSelectHtml");


function visualizarcampos() {

console.log("typeof: " + typeof(nomeBootInputText));
console.log("Object call: " + Object.prototype.toString.call(nomeBootInputText));

console.log("Recuperar Valor com Value " + nomeBootInputText.value);


}


function visualizarcamposselect() {

    console.log("typeof: " + typeof(estadoselect));
    console.log("Object call: " + Object.prototype.toString.call(estadoselect));
    
    console.log("Recuperar Valor com Value " + estadoselect.value);
       
    }


    var emailPromocionalChecho = document.querySelector("#emailPromocionalCheckBoot");

    
function selecionarcampoemailcheck() {

    console.log("typeof: " + typeof(emailPromocionalChecho));
    console.log("Object call: " + Object.prototype.toString.call(emailPromocionalChecho));
    console.log('tagname: ' + emailPromocionalChecho.tagName);
    console.log('tagname type: ' + emailPromocionalChecho.type);
    console.log('Valor value: ' + emailPromocionalChecho.value);
    console.log('Checked: ' + emailPromocionalChecho.checked);
    
    }


    var formaContatoRadio = document.querySelector("[name=formaContatoRadioBoot]");


    function selecionarCampoRadio() {

        console.log("typeof: " + typeof(formaContatoRadio));
        console.log("Object call: " + Object.prototype.toString.call(formaContatoRadio));
        console.log('tagname: ' + formaContatoRadio.tagName);
        console.log('tagname type: ' + formaContatoRadio.type);
        console.log('Valor value: ' + formaContatoRadio.value);
        console.log('Checked: ' + formaContatoRadio.checked);
        
        }


    
    var radios = document.getElementsByName("formaContatoRadioBoot")


    
    function selecionarCamposRadios() {

        console.log("typeof: " + typeof(radios));
        console.log("Object call: " + Object.prototype.toString.call(radios));
        
        }

    var selectes = document.getElementsByTagName("select");


    var elementos = document.querySelectorAll("input[type=text]");

    var formulario = document.querySelector("#formBoot");

    function exibirDados(elemento){
        console.log(elemento);
    }

    


