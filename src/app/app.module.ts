//aqui se importa la clase NgModule que es el modulo raiz
import { NgModule } from '@angular/core';
//aqui se importa la clase BrowserModule , para buscar modulos de angular
import { BrowserModule } from '@angular/platform-browser';
//aqui importamos los modulos de ruta cuando se va a trabajar con las rutas de angular 
import { AppRoutingModule } from './app-routing.module';
//App component es el componente  principal de angular que viene por defecto

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/inicio/header/header/header.component';
import { SlideshowComponent } from './pages/inicio/slideshow/slideshow.component';
import { GaleriaComponent } from './pages/inicio/galeria/galeria.component';
import { MouseParallaxComponent } from './pages/inicio/mouse-parallax/mouse-parallax/mouse-parallax.component';
import { ArticulosComponent } from './pages/inicio/articulos/articulos.component';
import { FormularioComponent } from './pages/inicio/formulario/formulario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { FormsModule } from '@angular/forms';
//los decoradores son funciones que modifican clases de JavaScript
@NgModule({
  //las declaraciones son las clases de vistas que pertenecen a este modulo
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideshowComponent,
    GaleriaComponent,
    MouseParallaxComponent,
    ArticulosComponent,
    FormularioComponent,
    InicioComponent,
    ArticuloComponent
  ],
  // importamos otros modulos cuyas clases exportadas sean necesarias para las plantillas de componentes
  // declaradas en este modulo
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  /*los proovedores son los creadores de servicios que este modulo contribuye a la recoleccion global de
  servicios; Se vuelven accesibles en todas las partes de la aplicacion. Esto lo habilitamos cuando invocamos
   servicios desde una base de datos */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
