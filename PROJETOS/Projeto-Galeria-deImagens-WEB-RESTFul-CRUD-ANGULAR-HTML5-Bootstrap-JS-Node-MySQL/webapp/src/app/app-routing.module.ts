import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCarouselComponent } from './componentes/home/home-carousel/home-carousel.component'
import { ManterGaleriaComponent } from './componentes/galeria/manter-galeria/manter-galeria.component'

const routes: Routes = [
  { path: 'home/home-carousel', component: HomeCarouselComponent},
  { path: 'galeria/manter-galeria', component: ManterGaleriaComponent},
  { path: 'galeria/manter-galeria/:id', component: ManterGaleriaComponent},
  { path: '', component: HomeCarouselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
