document.addEventListener("DOMContentLoaded", function(event) {
    carouselDimension();
    $('.mainHeader').vegas({
        slides: [
            { src: 'img/foto-6.jpg' },
            { src: 'img/foto-4.jpg' },
            { src: 'img/foto-3.jpg' }
        ]
    });
    $('#nav-scroll').onePageNav({offset: 25,currentClass: 'active'});
    //$('#footerMenu').onePageNav({offset: 25,currentClass: 'active'});

     var navMain = $("#navMain");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
        });
        
    /********************************************
     *              Footer Menu                 *
     * ******************************************/
     
     $('#footerMenu a').click(function(e) {
         e.preventDefault();
         $('#menuPrincipal').find('a[href="'+ e.target.attributes.href.textContent +'"]').click();
     })
    
});

var map1,map2;
function initMap() {
    map1 = new google.maps.Map(document.getElementById('map1'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    map2 = new google.maps.Map(document.getElementById('map2'), {
        center: {lat: 15.397, lng: 34.644},
        zoom: 8
      });
}


function carouselDimension() {
    var fixe    = $('.fixe').height();
    var win     = $(window).height();
    var heightInici = (win - fixe + 50) < 800 ? 800: (win - fixe + 50);
    $('#inici').height(heightInici);
}


$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 20);
});


(function() {
    'use strict';
    var docElem = document.documentElement,
        header = document.querySelector( '.fixe' ),
        didScroll = false,
        changeHeaderOn = 300;
 
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                scrollPage();
            }
        }, false );
    }
 
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            header.className = 'fixePetit row'
        }
        else {
            header.className = 'fixe row';
        }
        didScroll = false;
    }
 
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
    init();
})();