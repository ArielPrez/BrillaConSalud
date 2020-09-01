import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaInicialComponent } from './vista-inicial/vista-inicial.component';


export const routes: Routes = [
  // { path: '', component: VistaInicialComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
