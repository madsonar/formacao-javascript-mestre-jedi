import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { GaleriaService } from '../../../servicos/galeria/galeria.service';
import { ConfigClass } from '../../../classes/config-class'

@Component({
  selector: 'app-manter-galeria',
  templateUrl: './manter-galeria.component.html',
  styleUrls: ['./manter-galeria.component.css']
})
export class ManterGaleriaComponent implements OnInit {

  exibirListagemForm: boolean = false;
  listImgGaleria: any;
  mensagem: any;
  imagemUrl: any;

  galeriaFormGroup: any;
  registro: any = {};

  server: String = ConfigClass.getUrlApi().toString();

  constructor(private galeriaService: GaleriaService, private formBuilder: FormBuilder) { }

  ngOnInit() {    
    this.galeriaFormGroup = this.formBuilder.group({
      id_galeria: [],
      titulo: [],
      dados_imagem: null
    });

    this.listar();
  }

  prepararFormCadastro(){
    this.limparMsgAlert();
    this.exibirListagemForm = true;
  }

  cancelarOperacao(){
    this.limparForm();
    this.exibirListagemForm = false;
  }

  deletar(id: number): void{
    console.log('delatar id: ', id);
    this.galeriaService.deletar(id).subscribe(resp => {
      if(!this.verificarRetornoHttp(resp)){
        this.listar();
      }
    })
  }

  onSubmit() {
    console.log('salvando dados...');
    console.log(this.galeriaFormGroup.value);
    console.log(this.galeriaFormGroup);

    this.cadastrar(this.galeriaFormGroup.value);
    //verificar a operação
    if(this.registro.id_galeria){
      this.editar(this.galeriaFormGroup.value);
    } else{
      this.cadastrar(this.galeriaFormGroup.value);
    }

  }

  editar(dados: any){
    this.galeriaService.editar(dados).subscribe(resp => {
        if(!this.verificarRetornoHttp(resp)){
          this.limparForm();
          this.listar();
          this.exibirListagemForm = false;
        }
      }
    );
  }

  cadastrar(dados: any){
    this.galeriaService.cadastrar(dados).subscribe(resp => {
        if(!this.verificarRetornoHttp(resp)){
          this.limparForm();
          this.listar();
          this.exibirListagemForm = false;
        }
      }
    );
  }

  prepararFormEditar(id: number): void{
    console.log('id', id);
    this.exibirListagemForm = true;

    this.galeriaService.getId(id).subscribe(resp => {
      if(!this.verificarRetornoHttp(resp)){
        this.registro.id_galeria = resp.body.dados[0].id_galeria;
        this.registro.titulo = resp.body.dados[0].titulo;
        if(resp.body.dados[0].caminho != null){
          this.imagemUrl = this.server + resp.body.dados[0].caminho.substring(1);
          console.log('img: ', this.server + resp.body.dados[0].caminho.substring(1));
        }
      }
    });
  }

  limparForm() {
    this.galeriaFormGroup.reset();
    let formHTML = <HTMLFormElement>document.getElementById('galeriaForm');
    formHTML.reset();
    this.imagemUrl = null;
  }

  carregarImagem(event){
    console.log('carregando a imagem');
    //verificar se a imagem foi selecionada
    if(event.target.files.length > 0){
      let campoUploadImagem = event.target;
      const leitor = new FileReader();
      const arquivo = campoUploadImagem.files[0];
      leitor.readAsDataURL(arquivo);
      leitor.onload = () => {
        const dataUrl = leitor.result;
        this.imagemUrl = dataUrl;
        console.log("dados img: ", this.imagemUrl);

        this.galeriaFormGroup.get('dados_imagem').setValue({
          nome_arquivo: arquivo.name,
          tipo_arquivo: arquivo.type,
          imagem_base64: leitor.result.toString().split(',')[1]
        });
        console.log('dados cad: ', this.galeriaFormGroup.value);
      }
    }
  }

  verificarRetornoHttp(resp){
    if(resp.status >= 400){
      this.exibirMsgAlert("Erro ao realizar a requisião!", "erro");
      return true;
    }else{
      if(resp.body.erro) {
        this.exibirMsgAlert(resp.body.msg, "erro");
        return true;
      } else{
        if(resp.body.msg != null){
          this.exibirMsgAlert(resp.body.msg, "sucesso");
          return false;
        }        
      }
    }
    return false;
  }

  exibirMsgAlert(msg, tipo){
    let dados = "";
    if(tipo == "sucesso"){
      dados = `<div class='alert alert-success' role='alert'>
        <strong>${msg}</strong>
      </div>`
    } else if(tipo == "erro"){
      dados = `<div class='alert alert-danger' role='alert'>
        <strong>${msg}</strong>
      </div>`
    }
    this.mensagem = dados;
  }

  limparMsgAlert(){
    this.mensagem = "";
  }

  listar(): void {
    this.galeriaService.getTodos().subscribe(resp => {

      if(!this.verificarRetornoHttp(resp)) {
        this.listImgGaleria = resp.body.dados.map(function(objeto){
          return { id_galeria: objeto.id_galeria,
          titulo: objeto.titulo,
          caminho: this + (objeto.caminho ? objeto.caminho.substring(1) :objeto.caminho)
         }
        }, this.server);
        console.log('resposta: ', resp);
        console.log('listImgGaleria: ', this.listImgGaleria);
      }          
    });
  }

}
