$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dotsEach: true,
        responsive:{
            0:{
                items:1,
                nav:false,
                loop: false
            },
            600:{
                items:2,
                nav:false,
                loop: false
            },
            768:{
                items:3,
                nav:false,
                loop: false
            },
            1100:{
                items:4,
                nav:false,
                loop:false,
                
            }
        }
    })});
