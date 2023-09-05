import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-mouse-parallax',
  templateUrl: './mouse-parallax.component.html',
  styleUrls: ['./mouse-parallax.component.css']
})
export class MouseParallaxComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
      
    /*=============================================
          MOUSE PARALLAX EFFECT - JQUERY
          =============================================*/

          var mouseParallax = $('.mouseParallax');

          $('.mouseParallax').mousemove(function (e: any) {
            var posX = e.offsetX;
            var posY = e.offsetY;
      
            for (var i = 0; i < mouseParallax.length; i++) {
              $(mouseParallax[i]).css({
                width: '110%',
                left: -posX / (i * 250) + '%',
                top: posY / (i * 250) + '%',
              });
            }
      
            $(mouseParallax[0]).css({ width: '100%' });
          });
  }

}
