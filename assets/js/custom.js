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
/*  $(document).ready(function () {
	$("html").niceScroll({
	  scrollspeed: "150",
	  cursorcolor: "#a085a1",
	  cursorborder: "3px solid #a085a1",
	});

}); */

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