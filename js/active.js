$(document) .ready(function() {


jQuery('#mobile-menu').meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu'
});


    // slider-active
    $('.slider-active').owlCarousel({
        loop:true,
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // slider end
    // project-active
    $('.project-active').owlCarousel({
        loop:true,
        nav:false,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:4
            }

        }
    })

     // project-active
     $('.blog-active').owlCarousel({
        loop:true,
        nav:true,
        items: 1,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    $('.brand-active').owlCarousel({
        loop:true,
        nav:false,
        margin:50,
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            767:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:6
            }
        }
    })

    // project-active end

    // vedio popup
    $('.vedio-pupup').magnificPopup({
        type: 'image'
        // other options
      });




})