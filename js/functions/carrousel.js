import {selector} from "../index.js";

window.addEventListener('load', function() {
    let carrousel = selector('.carousel-List');
    new Glider(carrousel, {
        // Mobile-first defaults
        slidesToShow: 1,
        dots: '.carrousel-indicador',
        draggable: false,
        arrows: {
            prev: '.carousel-anterior',
            next: '.carousel-siguiente'
        },
           responsive: [
            {
                breakpoint: 400,
                settings: {
                    draggable: true,
                    slidesToShow: 1,
                    itemWidth: 50,
                    duration: 0.45
                }
            }, 
            {
                // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 1,
                    itemWidth: 150,
                    duration: 0.45
                }
            },{
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 1,
                    itemWidth: 150,
                    duration: 0.45
                }
            }
        ] 
    });
});