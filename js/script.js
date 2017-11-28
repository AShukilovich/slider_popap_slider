jQuery(document).ready(function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },    
    });


    $("[data-fancybox]").fancybox();
})