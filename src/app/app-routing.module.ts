import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { EstiloVidaComponent } from './estilo-vida/estilo-vida.component';
import { LactanciaComponent } from './lactancia/lactancia.component';
import { ViajesComponent } from './viajes/viajes.component';
import { YogaComponent } from './yoga/yoga.component';
import { NutricionComponent } from './nutricion/nutricion.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';


const routes: Routes = [
  // { path: '', component: VistaInicialComponent },
  { path: '', redirectTo: '/estilo-de-vida', pathMatch: 'full' },
  { path: 'estilo-de-vida', component: EstiloVidaComponent},
  { path: 'yoga', component: YogaComponent },
  { path: 'nutricion', component: NutricionComponent},
  { path: 'ejercicios', component: EjercicioComponent },
  // yoga, ejercicios, nutricion
  { path: 'lactancia', component: LactanciaComponent },
  { path: 'viajes', component: ViajesComponent },
  { path: 'acerca-de-mi', component: AcercaDeMiComponent },
  // { path: 'not-found', component: PageNotFoundComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
