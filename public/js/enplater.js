

document.addEventListener("DOMContentLoaded", function(event) {
    carouselDimension();
    $('.mainHeader').vegas({
        slides: [
            { src: 'img/foto-6.jpg' },
            { src: 'img/foto-4.jpg' },
            { src: 'img/foto-3.jpg' }
        ]
    });
    	$('#nav-scroll').onePageNav({offset: 135,currentClass: 'active'});
    	
    
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
    $('#inici').height(win - fixe + 50);
}

/*$(window).resize(function() {
    
    location.reload(false);
    console.log('hola');
})*/

$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 20);
});