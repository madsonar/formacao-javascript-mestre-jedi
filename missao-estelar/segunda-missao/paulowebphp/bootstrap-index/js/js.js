
//QUESTÃO 16
function preencherFormHtml(objDados)
{

    var formBootHandler = document.getElementById('formHtml');

    //console.log(formBootHandler);
    //console.log(objDados);

    var i = 0;

    for (const item in objDados) {

        //console.log(objDados[item]);
        //console.log(formBootHandler[i]);

        if (
            
            formBootHandler[i].type != 'radio'
            &&
            formBootHandler[i].type != 'checkbox'
        )
        {

            //item.value = objDados[item.id];
            formBootHandler[i].value = objDados[item];
        }
        else
        {

            formBootHandler[i].checked = objDados[item];

        }
        
        i++;

    }

}


function recebeDadosFormBoot(objFormElementos)
{

    console.log(Object.prototype.toString.call(objFormElementos));

    var objDadosForm = new Object();

    for (const item of objFormElementos) {

        //console.log(item.id);
        //console.log(item.value);
        //console.log(item.checked);

        if (
            
            item.type != 'radio'
            &&
            item.type != 'checkbox'
        )
        {

            objDadosForm[item.id] = item.value;

        }
        else
        {

            objDadosForm[item.id] = item.checked;

        }
        
        
    }

    console.log(objDadosForm);

    preencherFormHtml(objDadosForm);

}


