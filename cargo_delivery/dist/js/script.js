$(document).ready(function(){

        //Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function() {
        $('.overlay, #consultation').fadeOut('slow');
    });

        //Slaider
    $('.comment__slider').slick({
        autoplay: 'boolean',
        prevArrow: '<button type="button" class="slick-prev">  <img src="img/comment/arrow_left.png" </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="img/comment/arrow_right.png" </button>',
    });

        //menu
    const menu = document.querySelector('.nav'),
    menuItem = document.querySelectorAll('.promo__menu'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav_active');
        })
    })
});
