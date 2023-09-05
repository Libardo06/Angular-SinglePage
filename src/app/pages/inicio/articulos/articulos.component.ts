import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';


@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent {

  public articulosJson:any;
  constructor(private articulosService: ArticulosService){

    this.articulosService.getArticulos()
    .subscribe(respuesta=>{
      //console.log("Respuesta Articulos: ",respuesta);
      this.articulosJson=respuesta;
    })
  }

}
