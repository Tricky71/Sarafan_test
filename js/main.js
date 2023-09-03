'use strict';

document.addEventListener('DOMContentLoaded', function() {
  

  const menuBtn = document.querySelector('.header__top-button');
  const menuBottom = document.querySelector('.header__bottom');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('header__top-button--active');
    menuBottom.classList.toggle('header__bottom--active');
  });

  $(".slider").slick({
    variableWidth: true,
    slidesToShow: 3,
    infinite: true,
    dots: true,
    arrows: true,
    responsive: [{
      breakpoint: 1800,
      settings: {
        variableWidth: false,
      }
    },{
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '60px',
        
      }
    },{
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        
      }
    }],
  })
})



