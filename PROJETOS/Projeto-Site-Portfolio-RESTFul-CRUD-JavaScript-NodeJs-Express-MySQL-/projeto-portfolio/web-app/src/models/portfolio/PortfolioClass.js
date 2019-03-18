export default class PortfolioClass{
    constructor(id, descricao, detalhes){
        if(id!=null) this.id_portfolio = id;
        this.descricao = descricao;
        this.detalhes = detalhes;
    }
}