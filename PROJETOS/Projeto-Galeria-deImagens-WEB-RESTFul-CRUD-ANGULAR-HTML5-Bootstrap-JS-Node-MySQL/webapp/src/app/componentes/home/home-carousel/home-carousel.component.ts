import { Component, OnInit } from '@angular/core';

import { GaleriaService } from '../../../servicos/galeria/galeria.service';
import { ConfigClass } from '../../../classes/config-class'

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {

  listImgGaleria: any;

  server: String = ConfigClass.getUrlApi().toString();

  constructor(private galeriaService: GaleriaService) { }

  ngOnInit() {
    this.galeriaService.getTodos().subscribe(resp => {
      this.listImgGaleria = resp.body.dados.map(function(objeto){
        return { id_galeria: objeto.id_galeria,
        titulo: objeto.titulo,
        caminho: this + (objeto.caminho ? objeto.caminho.substring(1) :objeto.caminho)
       }
      }, this.server);
    });

    console.log("dados: ", this.listImgGaleria);
  }

}
