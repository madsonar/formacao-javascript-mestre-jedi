export default class ConfigClass{
    constructor(){

    }

    static getUrlApi(){
        this.urlApi = "http://localhost:3000";
        return this.urlApi;
    }
}