var nomeBootInputText = window.document.getElementById("nomeBoot");
var estadoSelect = document.getElementById("estadoSelectBoot");

function selecionarCampoInputText() {
    console.log("typeof: " + typeof nomeBootInputText);
    console.log("object call: " + Object.prototype.toString.call(nomeBootInputText));
    //alert(nomeBootInputText)
    console.log("recuperar valor com value: " + nomeBootInputText.value);
    //nomeBootInputText.disabled = true;
    console.log("disabled: nomeBootInputText.disabled = true;" );
    //nomeBootInputText.readOnly = true;
    console.log("readOnly: nomeBootInputText.readOnly = true;" )
    console.log("tagName: " + nomeBootInputText.tagName);
    console.log("tagName type: " + nomeBootInputText.type);
    nomeBootInputText.value = "Pedro";
}

function selecionarCampoSelect() {
    console.log("object call: " + Object.prototype.toString.call(estadoSelect));
    console.log("estadoSelect.value "+estadoSelect.value)
    console.log("estadoSelect.selectedIndex "+estadoSelect.selectedIndex)
    console.log("tagName: " + estadoSelect.tagName);
    console.log("tagName type: " + estadoSelect.type);
    console.log("estadoSelect.options: " + estadoSelect.options);
    console.log("estadoSelect.selectedOptions: " + estadoSelect.selectedOptions);
    console.log("estadoSelect.selectedOptions.item(0): " + estadoSelect.selectedOptions.item(0));
    console.log("estadoSelect.selectedOptions[1]: " + estadoSelect.selectedOptions[1]);
    console.log("estadoSelect.length" + estadoSelect.length);
    estadoSelect.disabled = true ;
    console.log("estadoSelect.disabled = true ");
}

var emailPromocionalCheck = document.querySelector("#emailPromocionalCheckBoot");
//var ele = document.querySelector("input[type=checkbox]"); Seletores CSS

function selecionarCampoEmailCheck() {
    console.log("Object call tipo: ", Object.prototype.toString.call(emailPromocionalCheck));
    console.log("tagName: " + emailPromocionalCheck.tagName);
    console.log("tagName type: " + emailPromocionalCheck.type);
    console.log("Valor value: " + emailPromocionalCheck.value);
    console.log("Valor checked(marcado): " + emailPromocionalCheck.checked);

}

var formaContatoRadio = document.querySelector("[name=formaContatoRadioBoot]");

function selecionarCampoRadio(){

    console.log("Object call tipo: ", Object.prototype.toString.call(formaContatoRadio));
    console.log("tagName: " + formaContatoRadio.tagName);
    console.log("tagName type: " + formaContatoRadio.type);
    console.log("Valor value: " + formaContatoRadio.value);
    console.log("Valor checked(marcado): " + formaContatoRadio.checked);
}

var radios = document.getElementsByName("formaContatoRadioBoot");


function selecionarCamposRadios(){

    console.log("Object call tipo: ", Object.prototype.toString.call(radios));   
}

var checkeds = document.getElementsByClassName("checkbox");

var selects = document.getElementsByTagName("select");

var elementos = document.querySelectorAll("input[type=text]");

var formulario = document.querySelector("#formBoot");

console.log("form tipo: ", Object.prototype.toString.call(formulario));

function exibirDados(elemento){
    console.log(elemento);
}