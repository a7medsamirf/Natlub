/*************************************

Template Name: Natlub | Professional Template
Author: Ahmed Samir
Author URI: https://www.facebook.com/a7med.samir.f
Description: Natlub | Professional  Template
Version: 1.0

NOTE: This is active js file of the template.

****************************************/
/* 

/*global $ , alert, console*/


/* ==================================
      preloder
===================================== */
$(document).ready(function () {
  $(".sk-folding-cube").fadeOut(1000, function () {
    $(this).parent().slideUp(1000, function () {
      $(this).remove();
    });
  });
});

/* ==================================
      Start niceScroll
===================================== */

/* $(document).ready(function () {
  $("body").niceScroll({
    scrollspeed: "90",
    cursorcolor: "#a085a1",
    cursorborder: "3px solid #a085a1",
    cursorborderradius: 0,
    sensitiverail: true,
    horizrailenabled: false,
    cursorfixedheight: 250
  });
});
 */

/* ==================================
      Check the scroll position
===================================== */
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    event.preventDefault();
    $(".scrollToTop").css({
      'transform': 'translate(0px, 0px)'
    });
  } else {
    $(".scrollToTop").css({
      'transform': 'translate(80px, 0px)'
    });
  }
});
/* ==================================
     Click and scrolls top effect
===================================== */
$('.scrollToTop').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});

/* ==================================
    Lightbox Init
===================================== */

$('[data-fancybox="images"]').fancybox({
  afterLoad : function(instance, current) {
      var pixelRatio = window.devicePixelRatio || 1;

      if ( pixelRatio > 1.5 ) {
          current.width  = current.width  / pixelRatio;
          current.height = current.height / pixelRatio;
      }
  }
});

/* ==================================
    search
===================================== */

function searchToggle(obj, evt) {
  var container = $(obj).closest('.search-wrapper');
  if (!container.hasClass('active')) {
    container.addClass('active');
    evt.preventDefault();
  } else if (container.hasClass('active') && $(obj).closest('.input-holder').length == 0) {
    container.removeClass('active');
    // clear input
    container.find('.search-input').val('');
  }
}

/* ==================================
      Start progress bar
===================================== */
$(document).ready(function ($) {
  function animateElements() {
      $('.progressbar').each(function () {
          var elementPos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          var percent = $(this).find('.circle').attr('data-percent');
          var animate = $(this).data('animate');
          if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
              $(this).data('animate', true);
              $(this).find('.circle').circleProgress({

                  value: percent / 100,
                  size : 140,
                  thickness: 10,
                  fill: {
                      color: '#e2a841'
                  }
              }).on('circle-animation-progress', function (event, progress, stepValue) {
                  $(this).find('.progress-value').text((stepValue*100).toFixed(0) + "k");
              }).stop();
          }
      });
  }

  animateElements();
  $(window).scroll(animateElements);
});

/* ==================================
      Start NProgress
===================================== */
NProgress.start(); // start    
NProgress.set(0.4); // To set a progress percentage, call .set(n), where n is a number between 0..1
NProgress.inc(); // To increment the progress bar, just use .inc(). This increments it with a random amount. This will never get to 100%: use it for every image load (or similar).If you want to increment by a specific value, you can pass that as a parameter
NProgress.configure({ ease: 'ease', speed: 1000 }); // Adjust animation settings using easing (a CSS easing string) and speed (in ms). (default: ease and 200)
NProgress.configure({trickleSpeed: 800 }); //Adjust how often to trickle/increment, in ms.
NProgress.configure({ showSpinner: false });//Turn off loading spinner by setting it to false. (default: true)
NProgress.configure({ parent: '#container' });//specify this to change the parent container. (default: body)
NProgress.done(); // end




/* ==================================
      Start slider
===================================== */

$('.customers').slick({
  dots: false,
  arrows: true,
  autoplay: true,
  infinite: true,
  rtl: true,
  speed: 600,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    
  ]
});

