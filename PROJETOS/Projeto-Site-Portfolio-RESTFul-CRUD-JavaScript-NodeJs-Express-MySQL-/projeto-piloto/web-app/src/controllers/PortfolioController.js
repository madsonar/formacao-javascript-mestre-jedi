import PortfolioModel from "../models/portfolio/PortfolioModel";
import PortfolioClass from "../models/portfolio/PortfolioClass";

let divPortfolios = window.document.getElementById("portfolios");
let divMsg = window.document.getElementById("msg");
let formulario = window.document.getElementById("form");

let objPortfolioController;

class PortfolioController {

    getTodosTable(divPortfolios) {

        let promise = new Promise(function (resolve, reject) {
            let promiseFetch = PortfolioModel.getTodos()
            promiseFetch.then(response => {
                resolve(response)
            })
        });

        promise.then(response => {

            if (response.erro) {
                this.exibirMsgAlert(response.msg, 'erro');
            } else {

                let dados = ` <div class="table-responsive">
                  <table class="table table-striped table-bordered table-hover table-sm">
                      <thead class="thead-dark">
                          <tr>
                              <th>Id</th>
                              <th>Descrição</th>         
                              <th></th>
                              <th></th>
                          </tr>
                      </thead>
                      <tbody>`;

                for (const servico of response.dados) {
                    dados += `<tr>
                        <td>${servico.id_portfolio}</td>
                        <td>${servico.descricao}</td>
                        <td><button type="button" class="btn btn-primary btn-editar" 
                        data-id='${servico.id_portfolio}'
                        >Editar</button></td>
                        <td><button type="button" class="btn btn-primary btn-excluir"
                        data-id='${servico.id_portfolio}'
                        >Excluir</button></td>
                    </tr>`
                }

                dados += `</tbody> </table> </div>`
                divPortfolios.innerHTML = dados;

                let btnsEditar = window.document.querySelectorAll(".btn-editar");
                let btnsExcuir = window.document.querySelectorAll(".btn-excluir");

                btnsEditar.forEach(function (item) {
                    item.addEventListener("click", event => {
                        objPortfolioController.limparMsgAlert();
                        let id = event.target.getAttribute('data-id')
                        objPortfolioController.prepararEditar(id);
                    });
                });

                btnsExcuir.forEach(function (item) {
                    item.addEventListener("click", event => {
                        objPortfolioController.limparMsgAlert();
                        let id = event.target.getAttribute('data-id')
                        objPortfolioController.deletar(id);
                    });
                });
            }

        }).catch(response => {
            console.log('p.catch', response);
        });
    }


    adicionar(from) {

        let descricao, detalhes;
        descricao = form.descricao.value;
        detalhes = form.detalhes.value;

        if (descricao || detalhes) {
            let objPortfolioClass = new PortfolioClass(
                null, descricao, detalhes);

            let promise = new Promise(function (resolve, reject) {
                let promiseFetch = PortfolioModel.adicionar(objPortfolioClass)
                promiseFetch.then(response => {
                    resolve(response)
                })
            });

            promise.then(response => {

                if (response.erro) {
                    this.exibirMsgAlert(response.msg, 'erro');
                } else {
                    this.getTodosTable(divPortfolios);
                    this.exibirMsgAlert(response.msg, 'sucesso');
                    objPortfolioController.ocultarElemento("formulario");
                    objPortfolioController.exibirElemento("listagem");
                    this.limparCamposForm(form);
                }

            }).catch(response => {
                console.log('catch erro:', response);
                this.exibirMsgAlert(response, 'erro');
            });

        } else {
            this.exibirMsgAlert('Favor preencher todos os campos.', 'erro');
            console.log('erro:', response);
        }

    }

    prepararEditar(id) {

        let promise = new Promise(function (resolve, reject) {
            let promiseFetch = PortfolioModel.getId(id)
            promiseFetch.then(response => {
                resolve(response)
            })
        });

        promise.then(response => {

            if (response.erro) {
                this.exibirMsgAlert(response.msg, 'erro');
            } else {
                const portfolio = new PortfolioClass(
                    response.dados[0].id_portfolio,
                    response.dados[0].descricao,
                    response.dados[0].detalhes)

                formulario.id.value = portfolio.id_portfolio;
                formulario.descricao.value = portfolio.descricao;
                formulario.detalhes.value = portfolio.detalhes;

                objPortfolioController.ocultarElemento("listagem");
                objPortfolioController.exibirElemento("formulario");
            }
        }).catch(response => {
            console.log('catch erro:', response);
            this.exibirMsgAlert(response, 'erro');
        });

    }


    editar(from) {

        let id, descricao, detalhes;
        id = form.id.value;
        descricao = form.descricao.value;
        detalhes = form.detalhes.value;

        if (id || descricao || detalhes) {
            let objPortfolioClass = new PortfolioClass(
                id, descricao, detalhes);

            let promise = new Promise(function (resolve, reject) {
                let promiseFetch = PortfolioModel.editar(objPortfolioClass)
                promiseFetch.then(response => {
                    resolve(response)
                })
            });

            promise.then(response => {

                if (response.erro) {
                    this.exibirMsgAlert(response.msg, 'erro');
                } else {
                    this.getTodosTable(divPortfolios);
                    this.exibirMsgAlert(response.msg, 'sucesso');
                    objPortfolioController.ocultarElemento("formulario");
                    objPortfolioController.exibirElemento("listagem");
                    this.limparCamposForm(form);
                }

            }).catch(response => {
                console.log('catch erro:', response);
                this.exibirMsgAlert(response, 'erro');
            });


        } else {
            this.exibirMsgAlert('Favor preencher todos os campos.', 'erro');
            console.log('erro:', response);
        }

    }

    deletar(id) {

        let promise = new Promise(function (resolve, reject) {
            let promiseFetch = PortfolioModel.deletar(id)
            promiseFetch.then(response => {
                resolve(response)
            })
        });

        promise.then(response => {

            if (response.erro) {
                this.exibirMsgAlert(response.msg, 'erro');
            } else {
                this.getTodosTable(divPortfolios);
                this.exibirMsgAlert(response.msg, 'sucesso');
            }

        }).catch(response => {
            console.log('catch erro:', response);
            this.exibirMsgAlert(response, 'erro');
        });
    }


    ocultarElemento(elemento) {
        document.getElementById(elemento).style.display = "none";
    }

    exibirElemento(elemento) {
        document.getElementById(elemento).style.display = "block";
    }

    limparCamposForm(from) {
        form.id.value = "";
        form.descricao.value = "";
        form.detalhes.value = "";
    }

    exibirElemento(elemento) {
        document.getElementById(elemento).style.display = "block";
    }

    exibirMsgAlert(msg, tipo) {//tipo = 'erro' ou 'sucesso'  
        let dados = "";
        if (tipo == 'sucesso') {
            dados = `<div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>${msg}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>`
        } else if (tipo == 'erro') {
            dados = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>${msg}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>`
        }

        divMsg.innerHTML = dados;
    }

    limparMsgAlert() {
        divMsg.innerHTML = "";
    }

    registrarEvents() {
        document.getElementById("btn-exibir-formulario").addEventListener("click", function () {
            objPortfolioController.limparMsgAlert();
            objPortfolioController.ocultarElemento("listagem");
            objPortfolioController.exibirElemento("formulario");
        });

        document.getElementById("btn-cadastrar-portfolio").addEventListener("click", function (event) {
            event.preventDefault();
            //let form = document.getElementById("form");
            objPortfolioController.limparMsgAlert();
            if (formulario.id.value)
                objPortfolioController.editar(formulario);
            else
                objPortfolioController.adicionar(formulario);
        });

        document.getElementById("btn-cancelar-operacao").addEventListener("click", function () {
            objPortfolioController.limparMsgAlert();
            objPortfolioController.limparCamposForm();
            objPortfolioController.ocultarElemento("formulario");
            objPortfolioController.exibirElemento("listagem");
        });
    }
}

function main() {
    objPortfolioController = new PortfolioController();
    objPortfolioController.ocultarElemento("formulario");
    objPortfolioController.getTodosTable(divPortfolios);
    /**/objPortfolioController.registrarEvents();
}

window.onload = main;
