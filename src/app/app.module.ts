import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { VistaInicialComponent } from './vista-inicial/vista-inicial.component';
import { EstiloVidaComponent } from './estilo-vida/estilo-vida.component';
import { LactanciaComponent } from './lactancia/lactancia.component';
import { ViajesComponent } from './viajes/viajes.component';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { YogaComponent } from './yoga/yoga.component';
import { NutricionComponent } from './nutricion/nutricion.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
@NgModule({
  declarations: [
    AppComponent,
    EstiloVidaComponent,
    LactanciaComponent,
    ViajesComponent,
    AcercaDeMiComponent,
    HeaderComponent,
    DropdownDirective,
    YogaComponent,
    NutricionComponent,
    EjercicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    // AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
