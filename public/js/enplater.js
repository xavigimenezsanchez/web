

document.addEventListener("DOMContentLoaded", function(event) {
    $('.mainHeader').vegas({
        slides: [
            { src: 'img/foto-6.jpg' },
            { src: 'img/foto-4.jpg' },
            { src: 'img/foto-3.jpg' }
        ]
    });
    	$('#nav-scroll').onePageNav({offset: 200});
  });
  
  //{offset: $('.fixe').outerHeight()+50}