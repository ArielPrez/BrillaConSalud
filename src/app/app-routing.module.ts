import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { EstiloVidaComponent } from './estilo-vida/estilo-vida.component';
import { LactanciaComponent } from './lactancia/lactancia.component';
import { ViajesComponent } from './viajes/viajes.component';
import { VistaInicialComponent } from './vista-inicial/vista-inicial.component';


const routes: Routes = [
  // { path: '', component: VistaInicialComponent },
  { path: 'estilo-de-vida', component: EstiloVidaComponent },
  { path: 'lactancia', component: LactanciaComponent },
  { path: 'viajes', component: ViajesComponent },
  { path: 'acerca-de-mi', component: AcercaDeMiComponent },
  { path: '', redirectTo: '/estilo-de-vida', pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
