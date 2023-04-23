jQuery(document).ready(function(){
    
    $('#videolink').magnificPopup({
        type:'inline',
        midClick:true
        
    });
    
 
    
});

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,         
        responsive: {            
            0: {
                items: 1
            },             
            480: {
                items: 2
            }
        }
    });
});

$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
    
    
}); 
 

   $(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

          
    
     $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
      $('.gallery').isotope({
      // options
      itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

}); 

  $(document).ready(function(){
      $("#testimonial-slider").owlCarousel({
         items:1,
          itemsDesktop:[1000,1],
          itemsDesktopSmall:[979,1],
          itemsTablet:[768,1],
          pagination:true,
          autoPlay:false
          
      });     
     $('.count').counterUp({
                delay: 10,
                time: 4000
            });
  });




$(function(){
    $("#clients-list").owlCarousel({
       items:6,
        autoPlay:false,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true,
        nav:false,
        dots:false,
        
        responsive:{
            0:{
                items:2
            },
            
             480:{
                items:3
            },
            
             768:{
                items:6
            }
         
        }
    });
  
    $("#news-slider").owlCarousel({
        items:3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[1000,2],
        itemsMobile:[600,1],
        pagination:false,
        navigationText:false,
        autoPlay:true
       
        
    });
   
 
});

jQuery(document).ready(function(){
   $(window).scroll(function() {

    if ($(window).scrollTop() > 80) {
        $('.main_header').addClass('sticky');
    } else {
        $('.main_header').removeClass('sticky');
    }
});

 
$('.mobile-toggle').click(function() {
    if ($('.main_header').hasClass('open-nav')) {
        $('.main_header').removeClass('open-nav');
    } else {
        $('.main_header').addClass('open-nav');
    }
});
    
    
    
    

$('.main_header li a').click(function() {
    if ($('.main_header').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_header').removeClass('open-nav');
    }
});

 
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 0;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 600);
    event.preventDefault();
});
  
new WOW().init();
});









