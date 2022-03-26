$(() => {
    $('.new-card').slice(0,4).show()
    $('.load-more').click(function(e){
        e.preventDefault()
        $('.new-card:hidden').slice(0,4).slideDown()
    })
})


$(document).ready(function(){
    $('.nav-link').click(function(){
       $('.nav-link').removeClass('active')
       $(this).addClass('active')
    })
})


var swiper = new Swiper(".mySwiperPopuler", {
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: false,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".bxs-chevron-right-circle",
        prevEl: ".bxs-chevron-left-circle",
    },
});

var swiper2 = new Swiper(".mySwiperBlog", {
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: false,
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
  });


//   AOS
AOS.init();
