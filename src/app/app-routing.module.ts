import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { EstiloVidaComponent } from './estilo-vida/estilo-vida.component';
import { LactanciaComponent } from './lactancia/lactancia.component';
import { ViajesComponent } from './viajes/viajes.component';


const routes: Routes = [
  // { path: '', component: VistaInicialComponent },
  { path: 'estilo-de-vida', component: EstiloVidaComponent },
  // yoga, ejercicios, nutricion
  { path: 'lactancia', component: LactanciaComponent },
  { path: 'viajes', component: ViajesComponent },
  { path: 'acerca-de-mi', component: AcercaDeMiComponent },
  { path: '', redirectTo: '/estilo-de-vida', pathMatch: 'full' },
  // { path: 'not-found', component: PageNotFoundComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
