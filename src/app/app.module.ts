import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactameComponent } from './components/contactame/contactame.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactameComponent,
    CursosComponent,
    EstudiantesComponent,
    FooterComponent,
    NavbarComponent,
    NosotrosComponent,
    ProfesoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
