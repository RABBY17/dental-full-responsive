/*======owl carousel slider=====*/

$('.owl-one').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed:1000,
})

$('.owl-two').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:3,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed:1000,

    })


/*=========counter up==========*/
$('.counter').counterUp({
    delay: 10,
    time: 1500,
});