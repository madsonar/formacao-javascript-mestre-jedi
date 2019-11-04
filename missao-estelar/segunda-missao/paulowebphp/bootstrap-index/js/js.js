
//QUESTÃO 16
function preencherFormHtml(objDados)
{

    var formBootHandler = document.getElementById('formBoot');


    for (const item of formBootHandler) {

        //console.log(item.value);
        //console.log(objDados[item.name]);

        item.value = objDados[item.name];
    }

}


function recebeDadosFormBoot(objFormElementos)
{

    console.log(Object.prototype.toString.call(objFormElementos));

    var objDadosForm = new Object();

    for (const key of objFormElementos) {

        objDadosForm[key.name] = key.value;
        
    }

    console.log(objDadosForm);

    preencherFormHtml(objDadosForm);

}


