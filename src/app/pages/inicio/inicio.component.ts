import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
      /*=============================================
          SCROLL UP
          =============================================*/

          $.scrollUp({
            scrollText: '',
            scrollSpeed: 2500,
            easingType: 'easeOutQuint',
          });
          $('#scrollUp').css({
            bottom: '20px',
            right: '20px',
            width: '50px',
            height: '50px',
            background: 'url(../assets/img/flecha.jpg)',
          });
      
          /*=============================================
                STICKY JS
                =============================================*/
      
          if (window.matchMedia('(min-width:991px)').matches) {
            $('#inicio').sticky({ topSpacing: 0, zIndex: 1000 });
          }
  }
   
      
          
      
}
