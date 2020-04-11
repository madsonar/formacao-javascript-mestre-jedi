
import ConfigClass from "../../ConfigClass"
const caminho = `${ConfigClass.getUrlApi().toString()}/portfolio`;

export default class PortfolioModel{
    constructor(){        
    }

    static getTodos(){
        return fetch(caminho).then(response =>{
            if(response.status >= 400){
                throw new Error('Erro server!!!');
            }
            return response.json();
        })
    }      
}