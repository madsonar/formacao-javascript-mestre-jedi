var express = require('express');
var router = express.Router();
var PortfolioModel = require('../model/portfolio/PortfolioModel');
var RespostaClass = require('../model/RespostaClass');

router.get("/", function(req, res, next){

    PortfolioModel.getTodos(function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:', erro);
        }else{
            resposta.dados = retorno;
        }
        res.json(resposta);
    })
});

router.get("/:id?", function(req, res, next){

    PortfolioModel.getId(req.params.id ,function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:', erro);
        }else{
            resposta.dados = retorno;
        }
        res.json(resposta);
    })
})


router.post("/?", function(req, res, next){

    PortfolioModel.adicionar(req.body, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:', erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "cadastro realizado com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possível realizar a operação.'
            }
        }
        console.log('resp:', resposta);
        res.json(resposta);
    })
})

router.delete("/:id", function(req, res, next){

    PortfolioModel.deletar(req.params.id, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:', erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "Registro excluído com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possível excluir o resgistro.'
            }
        }
        console.log('resp:', resposta);
        res.json(resposta);
    })
})

router.put("/", function(req, res, next){

    PortfolioModel.editar(req.body, function(erro, retorno){
        let resposta = new RespostaClass();

        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro:', erro);
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = "Registro editado com sucesso.";
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possível editar o resgistro.'
            }
        }
        console.log('resp:', resposta);
        res.json(resposta);
    })
})

module.exports = router;