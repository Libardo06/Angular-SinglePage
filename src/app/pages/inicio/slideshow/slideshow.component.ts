import { Component, OnInit } from '@angular/core';
import { SlideshowService } from '../../../services/slideshow.service';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit{
  //VARIALES PUBLICAS O GLOBALES
  public slideJson:any;
  public renderSlide:boolean = true;
  constructor(private slideService: SlideshowService){

    /* RECIBIENDO DATOS DINAMICOS*/

    this.slideService.getSlideshow()
    .subscribe(respuesta=>{
      //console.log("Respuesta", respuesta);
      this.slideJson=respuesta;
    })
  }

  ngOnInit(): void {
      /*=============================================
    JD SLIDER
    =============================================*/

    
  }

  callback(){

    if(this.renderSlide){
      this.renderSlide = false;
      $('.slideshow').jdSlider({
        wrap: '.slide-inner', //Especificar el slide que vamos a usar
        isAuto: true, //Inicia la animación automáticamente
        isLoop: true, //Al finalizar vuelve a comenzar
        interval: 7000, //Tiempo por cada slide
        isCursor: true, //Pausar animación con el mouse
      });
    }
  }

}


