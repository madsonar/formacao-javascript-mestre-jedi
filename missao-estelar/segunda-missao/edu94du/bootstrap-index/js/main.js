// ‘Segunda Missão Estelar JS’ //

/*
    ‘Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)
*/ 

var missao = `Segunda Missão Estelar JS`;
    console.log(typeof missao);
    console.log(missao);
var hiperespaco = new String(`Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)`);
    console.log(typeof hiperespaco);
    console.log(hiperespaco);

var nomeCliente = `Eduardo`;
var renda = 2000;
var dataNascimento = new Date('1994-07-15');
var ativo = true; 

    function exibirDadosCliente() {
        console.log(`Nome do Cliente: ${nomeCliente}`);
        console.log(`Renda do Cliente: ${renda}`);
        console.log(`Data de Nascimento: ${dataNascimento}`);
        console.log(ativo == true ? `Ativo` : `Desativado`);
    } 
        //exibirDadosCliente();

var clienteArray = [[`Nome Cliente:`,`Eduardo`],
                    [`Renda:`,2000],
                    [`Data nascimento:`, new Date('1994-07-15')],
                    [`Ativo:`,true]
];

    function exibirDadosClienteArray() {
        for (var valor of clienteArray) {
            if(valor[0] == `Ativo`) {
                console.log(valor[0], valor[1] == true ? `Ativo` : `Não`)
            }else {
                console.log(valor[0], valor[1] == true ? `Ativo` : `Não`)
            }
                console.log(valor[0],valor[1]);
        }
    }
        //exibirDadosClienteArray();

var clienteObj = {
    nome:`Eduardo`,
    renda:2000,
    dataNascimento: new Date(`1994-07-15`),
    ativo: true
}
    function exibirDadosClienteObjeto() {
        for (const valor in clienteObj) {
            switch (valor) {
                case `nome`:
                        console.log(`Nome do Cliente:`,clienteObj[valor]);
                    break;
                case `renda`:
                        console.log(`Renda do Cliente:`,clienteObj[valor]);
                    break;
                case `dataNasmento`:
                        console.log(`Data de Nascimento:`,clienteObj[valor]);
                    break;
                case `ativo`:
                        console.log(`Status do Cliente;`,clienteObj[valor] == true ? `Sim` : `Não`);
                    break;
                default: 
                
                    break;
            }
        }
    }
        //exibirDadosClienteObjeto();

    function retornaDataAtualFormatada() {
        var dataAtual = new Date();
        var dia = dataAtual.getDate();
        var mes = dataAtual.getMonth() + 1;
        var ano = dataAtual.getFullYear();
        var dataFormatada = "";

            if(dia.toString().length == 1) {
                dataFormatada += "0" + dia.toString();
            }else {
                dataFormatada += dia.toString();
            }

            if(dia.toString().length == 1) {
                dataFormatada += "/" + mes.toString();
            }else {
                dataFormatada += mes.toString();
            }

            if(dia.toString().length == 1) {
                dataFormatada += "/" + ano.toString();
            }else {
                dataFormatada += ano.toString();
            }
            return dataFormatada;
    }
        console.log(`data atual`, retornaDataAtualFormatada());

var hiperEspacoRegExp = new RegExp(/Estrelar/);
var textMissao = `Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)`;
    console.log(`Teste:`, hiperEspacoRegExp.test(textMissao)); 
    console.log(`Pesquisa:`, hiperEspacoRegExp.exec(textMissao));

try {
    for(var i = 30, c = 0; i >= 0; i--, c++){
        console.log(i, " - "+ c);
        if(c == 29){
            throw new Error(`error` +c);
        }
    }
} catch (error) {
    console.log(error.nome);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log(`Chegou no bloco FINALLY, sempre será executado`);
}

    function recebeDadosFormBoot(objFormElementos) {
        console.log(`Tipo de Objeto`, Object.prototype.toString.call((objFormElementos)));
  
    var objDadosForm = new Object();

        console.log(`nomeBoot`, objFormElementos.nomeBoot.value);
            objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;
    
        console.log(`emailBoot`,objFormElementos.emailBoot.value);
            objDadosForm.emailBoot = objFormElementos.emailBoot.value;
    
        console.log(`emailPromocionalCheckBoot`,objFormElementos.emailPromocionalCheckBoot.checked);
            objFormElementos.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;
    
        console.log(`formaContatoTelefoneRadioBoot`,objFormElementos.formaContatoTelefoneRadioBoot.checked);
            objFormElementos.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;
    
        console.log(`formaContatoEmailRadioBoot`,objFormElementos.formaContatoEmailRadioBoot.checked);
            objFormElementos.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;
    
        console.log(`estadoSelectBoot`,objFormElementos.estadoSelectBoot.value);
            objFormElementos.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;
        
        console.log(objDadosForm);
}

    function preencherFormHtml(objDados) {
        var formHtml = document.querySelector('#formHtml');
            console.log(formHtml);
            
            formHtml.nomeHtml.value = objDados.nomeBoot;
            formHtml.email.Html.value = objDados.emailBoot;
            formHtml.emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot;
            formHtml.formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelefoneRadioBoot;
            formHtml.formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioBoot;
            formHtml.estadoSelectHtml.value = objDados.estadoSelectBoot;

    }

    preencherFormHtml();