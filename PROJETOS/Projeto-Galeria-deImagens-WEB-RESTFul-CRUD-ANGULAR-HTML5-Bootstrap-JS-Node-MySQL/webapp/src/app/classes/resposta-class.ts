export class RespostaClass {
    erro: boolean;
    msg: string;
    dados: any;

    constructor(erro: boolean, msg: string, dados: any){
        this.erro = erro;
        this.msg = msg;
        this.dados = dados;
    }
}
