//importamos la clase component para recopilar metadatos de configuracion de componentes.
import { Component, OnInit } from '@angular/core';

declare var jQuery:any;
declare var $:any;

//decorador de la clase component
@Component({
  // el selector es  la etiqueta personalizada que nos permite crear Angular en el HTML y donde se va a visualizar
  //este componente
  selector: 'app-root',
  //template url es la ruta de la vista HTML que va a imprimir este componente
  templateUrl: './app.component.html',
  //
  styleUrls: ['./app.component.css'],
})
//Exportamos  la clase con el nombre  que nosotros declaramos en el APP MODULE
export class AppComponent implements OnInit {
  ngOnInit() {
   

}

}
