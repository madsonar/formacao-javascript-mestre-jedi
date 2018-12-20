import PortfolioModel from "../models/portfolio/PortfolioModel";

let divPortfolios = window.document.getElementById("portfolios")
let objIndexController;

class IndexController {

 /**/ getTodosIndex(divPortfolios) {
    
        let promise = new Promise(function (resolve, reject) {
          let promiseFetch = PortfolioModel.getTodos()
          promiseFetch.then(response => {
            resolve(response)
            //return response;
          })
        });
    
        promise.then(response => {
    
          let dados = ""; 
    
          for (const servico of response.dados) {
    
            dados += `<div class="card text-white bg-primary">
              <div class="card-header">
              <h5 class="card-title">${servico.descricao}</h5>
              </div>
              <div class="card-body">            
                  <p class="card-text">${servico.detalhes}</p>            
              </div>
              </div> <br>`;
    
          }
    
          divPortfolios.innerHTML = dados;
    
        }).catch(response => {
          console.log('p.catch', response);
        });
   /**/   }
  
}

function main() {
  objIndexController = new IndexController();
  /**/objIndexController.getTodosIndex(divPortfolios);
}

window.onload = main;


