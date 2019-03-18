import ConfigClass from "../../ConfigClass";

let caminho = `${ConfigClass.getUrlApi().toString()}/portfolio/`;

export default class PortfolioModel {
  constructor() {
  }

  static getTodos() {
    return fetch(caminho).then(response => {
      if (response.status >= 400) {
        throw new Error("Erro server");
      }
      return response.json();
    })

  }


  static adicionar(portfolioClass) {

    return fetch(caminho,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(portfolioClass)
      }
    ).then(response => {
      if (response.status >= 400) {
        throw new Error("Erro server");
      }

      return response.json();
    });
  }


  static getId(id) {
    return fetch(`${caminho}/${id}`).then(response => {
      if (response.status >= 400) {
        throw new Error("Erro server");
      }
      return response.json();
    })
  }

  static editar(portfolioClass) {

    return fetch(caminho,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(portfolioClass)
      }
    ).then(response => {
      if (response.status >= 400) {
        throw new Error("Erro server");
      }

      return response.json();
    });
  }

  static deletar(id) {
    return fetch(`${caminho}/${id}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE"
      }).then(response => {
        if (response.status >= 400) {
          throw new Error("Erro server");
        }
        return response.json();
      })
  }

}