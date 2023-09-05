import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../../../services/galeria.service';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent implements OnInit {
  public galeriaJson: any;
  public renderGaleria: boolean = true;
  constructor(private galeriaService: GaleriaService) {
    this.galeriaService.getGaleria().subscribe((respuesta) => {
      //console.log("Respuesta galeria:",respuesta);
      this.galeriaJson = respuesta;
    });
  }

  ngOnInit(): void {}

  callback() {
    if (this.renderGaleria) {
      this.renderGaleria = false;
      /*=============================================
        PINTEREST GRID
      =============================================*/

      $('.pinterest_grid').pinterest_grid({
        no_columns: 4, //Número de columnas
        padding_x: 10, //Márgenes internas horizontal
        padding_y: 10, //Márgenes internas vertical
        margin_bottom: 50, //Márgen externa inferor
        single_column_breakpoint: 769, //Punto de quiebre para una sola columna
      });
    }
  }
}
