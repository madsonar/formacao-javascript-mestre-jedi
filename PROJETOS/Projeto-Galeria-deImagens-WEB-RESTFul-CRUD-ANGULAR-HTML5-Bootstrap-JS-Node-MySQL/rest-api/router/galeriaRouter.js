var express = require('express');
var router = express.Router();
var GaleriaModel = require('../model/galeria/GaleriaModel');
var RespostaClass = require('../model/RespostaClass');

var fs = require('fs');
var pastaPublica = "./public/imagens/";

router.get("/", function(req, resp, next){
    GaleriaModel.getTodos(function(erro, retorno){
        let resposta = new RespostaClass();
 
        if(erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro.";
            console.log('erro:', erro);
        }else{
            resposta.dados = retorno;
        }        
        resp.json(resposta);
    });
});

router.get("/:id?", function(req, resp, next){
    GaleriaModel.getId(req.params.id, function(erro, retorno){
        let resposta = new RespostaClass();
 
        if(erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro.";
            console.log('erro:', erro);
        }else{
            resposta.dados = retorno;
        }

        resp.json(resposta);
    });
});

router.post("/?", function(req, resp, next){
    let resposta = new RespostaClass();

    //verificando se recebeu uma imagem
    if(req.body.dados_imagem != null){

        //salvar a imagem
        //let bitmap = new Buffer(req.body.dados_imagem.imagem_base64, 'base64');
        //Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from()
        let bitmap = new Buffer.from(req.body.dados_imagem.imagem_base64, 'base64');

        let dataAtual = new Date().toLocaleString().replace(/\//g,'')
        .replace(/:/g,'').replace(/-/g,'').replace(/ /g,'');
        let nomeImagemCaminho = pastaPublica + dataAtual + req.body.dados_imagem.nome_arquivo;
        fs.writeFileSync(nomeImagemCaminho, bitmap);
        req.body.caminho = nomeImagemCaminho;

        GaleriaModel.adicionar(req.body, function(erro, retorno){

            if(erro){
                resposta.erro = true;
                resposta.msg = "Ocorreu um erro.";
                console.log('erro:', erro);
            }else{
                if(retorno.affectedRows > 0){
                    resposta.msg = "cadastro realizado com sucesso.";
                }else{
                    resposta.erro = true;
                    resposta.msg = "Não foi possível realizar a operação";
                    console.log('erro:', erro);
                }
            }
            console.log('resp:', resposta)
            resp.json(resposta);
        });
    }else{
        resposta.erro = true;
        resposta.msg = "Não foi enviado uma imagem.";
        console.log('erro:', resposta.msg);
        resp.json(resposta);
    }
});

    router.put("/", function(req, resp, next){
        let resposta = new RespostaClass();
        console.log('dados img: ', req.body.dados_imagem)
        //verificando se recebeu uma imagem
        if(req.body.dados_imagem != null){
    
            //salvar a imagem
            //let bitmap = new Buffer(req.body.dados_imagem.imagem_base64, 'base64');
            //Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from()
            let bitmap = new Buffer.from(req.body.dados_imagem.imagem_base64, 'base64');
    
            let dataAtual = new Date().toLocaleString().replace(/\//g,'')
            .replace(/:/g,'').replace(/-/g,'').replace(/ /g,'');
            let nomeImagemCaminho = pastaPublica + dataAtual + req.body.dados_imagem.nome_arquivo;
            fs.writeFileSync(nomeImagemCaminho, bitmap);
            req.body.caminho = nomeImagemCaminho;
        }

            GaleriaModel.editar(req.body, function(erro, retorno){
    
                if(erro){
                    resposta.erro = true;
                    resposta.msg = "Ocorreu um erro.";
                    console.log('erro:', erro);
                }else{
                    if(retorno.affectedRows > 0){
                        resposta.msg = "Registro alterado com sucesso.";
                    }else{
                        resposta.erro = true;
                        resposta.msg = "Não foi possível alterar o resgistro.";
                        console.log('erro:', erro);
                    }
                }
                console.log('resp:', resposta)
                resp.json(resposta);
            });            
});

router.delete("/:id?", function(req, resp, next){
    GaleriaModel.deletar(req.params.id, function(erro, retorno){
        let resposta = new RespostaClass();
 
        if(erro){
            resposta.erro = true;
            resposta.msg = "Ocorreu um erro.";
            console.log('erro:', erro);
        }else{

            if(retorno.affectedRows > 0){
                resposta.msg = "Registro excluído com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = "Não foi possível excluir registro.";
                console.log('erro:', erro);
            }

            resposta.dados = retorno;
        }

        resp.json(resposta);
    });
});

module.exports = router;