window.onload=function(){
    $('.slider').slick({
        autoplay:true,
        dots: true,
        infinite: true,
        autoplaySpeed: Math.random()*10000,
        arrows:true,
        slidesToShow:1,
        slidesToScroll: 1
    });
};