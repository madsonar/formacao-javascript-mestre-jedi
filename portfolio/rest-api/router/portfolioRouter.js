var express = require('express');
var router = express.Router();
var PortfolioModel = require('../model/portfolio/PortfolioModel');
var RespostaClass = require('../model/RespostaClass');


router.get('/', function(req, resp, next) {
   
    PortfolioModel.getTodos(function(erro, dados){
        let respostaClass = new RespostaClass();

        if(erro){
            respostaClass.erro = true;
            respostaClass.msg = "Ocorreu um erro";
            respostaClass.dados = erro;
        }else{
            respostaClass.dados = dados;
        }
        
        resp.json(respostaClass);
    });
    
});

router.get('/:id?', function(req, resp, next) {
   
    PortfolioModel.getId(req.params.id, function(erro, dados){
        let respostaClass = new RespostaClass();

        if(erro){
            respostaClass.erro = true;
            respostaClass.msg = "Ocorreu um erro";
            respostaClass.dados = erro;
        }else{
            respostaClass.dados = dados;
        }
        
        resp.json(respostaClass);
    });
    
});

router.post('/?', function(req, resp, next) {
   
    PortfolioModel.adicionar(req.body, function(erro, dados){
        let respostaClass = new RespostaClass();

        if(erro){
            respostaClass.erro = true;
            respostaClass.msg = "Ocorreu um erro";
            respostaClass.dados = erro;
        }else{
            if(dados.affectedRows > 0){
                respostaClass.msg = "CADASTRO REALIZADO COM SUCESSO";
            }else{
                respostaClass.erro = true;
                respostaClass.msg = "ERRO AO TENTAR O CADASTRO";
            }
        }
        
        resp.json(respostaClass);
    });
    
});

router.delete('/:id?', function(req, resp, next) {
   
    PortfolioModel.excluir(req.params.id, function(erro, dados){
        let respostaClass = new RespostaClass();

        if(erro){
            respostaClass.erro = true;
            respostaClass.msg = "Ocorreu um erro";
            respostaClass.dados = erro;
        }else{
            if(dados.affectedRows > 0){
                respostaClass.msg = "EXCLUSÃO REALIZADA COM SUCESSO";
            }else{
                respostaClass.erro = true;
                respostaClass.msg = "ERRO AO TENTAR EXCLUIR";
            }
        }
        
        resp.json(respostaClass);
    });
    
});

router.put('/', function(req, resp, next) {
   
    PortfolioModel.editar(req.body, function(erro, dados){
        let respostaClass = new RespostaClass();

        if(erro){
            respostaClass.erro = true;
            respostaClass.msg = "Ocorreu um erro";
            respostaClass.dados = erro;
        }else{
            if(dados.affectedRows > 0){
                respostaClass.msg = "ALTERAÇÃO REALIZADA COM SUCESSO";
            }else{
                respostaClass.erro = true;
                respostaClass.msg = "ERRO AO TENTAR ALTERAR";
            }
        }
        
        resp.json(respostaClass);
    });
    
});

module.exports = router;