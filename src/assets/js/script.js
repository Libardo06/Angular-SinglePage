



/*=============================================
EKKO LIGHTBOX
=============================================*/

$(document).on("click", "[data-toggle='lightbox']", function(e){

	e.preventDefault(); //Quitar eventos que vengan por defecto en el navegador
	$(this).ekkoLightbox(); //Activar la acción del plugin Ekko Lightbox

})



/*=============================================
NAVEGACIÓN SCROLL
=============================================*/

$(".nav-link").click(function(e){

	e.preventDefault();

	var target = $(this).attr("href");
	
	$("html, body").animate({

		scrollTop: $(target).offset().top

	},1500, "easeOutBack")

})


/*=============================================
SUPER SCROLLOGRAMA
=============================================*/

/*var controller = $.superscrollorama();

    controller.addTween(
      '#articulos .container',
      TweenMax.from($('#articulos .container'), 0.25, {
        css: { marginLeft: '-100%' },
        ease: Quad.easeInOut,
      })
    );*/
	
