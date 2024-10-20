
// Swapper Slide 
var swiper = new Swiper(".swap_slideer", {
    pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
    clickable:true,
    },
    autoplay:{
        delay:2500,
    },
    loop:true,
});

//swapper product with precent
var swiper = new Swiper(".slae_sec", {
    // pagination: {
    // el: ".swiper-pagination",
    // dynamicBullests: true,
    // clickable:true,
    // },
    slidesPerView :5,
    spaceBetween:30,
    autoplay:{
        delay:3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    loop:true,
    breakpoints:{
        1600:{
            slidesPerView:5,
        },
        1200:{
            slidesPerView:4,
            spaceBetween:30,
        },
        700:{
            
            slidesPerView:3,
            spaceBetween:15,
        },
        0:{
            
            slidesPerView:2,
            spaceBetween:10,
        },
    }
});

// swapper product [Computer & Desktop ]

var swiper = new Swiper(".product_swap", {
    // pagination: {
    // el: ".swiper-pagination",
    // dynamicBullests: true,
    // clickable:true,
    // },
    slidesPerView :4,
    spaceBetween:30,
    autoplay:{
        delay:3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    loop:true,
    breakpoints:{
        1500:{
            slidesPerView:4,
        },
        1200:{
            slidesPerView:3,
            spaceBetween:30,
        },
        900:{
            slidesPerView:2,
        },
        700:{
            
            slidesPerView:3,
            spaceBetween:15,
        },
        0:{
            
            slidesPerView:2,
            spaceBetween:10,
        },
    }
});

