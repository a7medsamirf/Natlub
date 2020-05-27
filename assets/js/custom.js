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

 $(document).ready(function () {
  $("body").niceScroll({
    scrollspeed: "110",
    cursorcolor: "#e2a841",
    cursorborder: "5px solid #e2a841",
    cursorborderradius: 0,
    horizrailenabled: false,
    cursorfixedheight: 250
  });
});
 
/* ==================================
      Loading btn
===================================== */
$(document).ready(function() {
  $('#Loading').on('click', function() {
    var $this = $(this);
    var loadingText = '<span class="spinner-border spinner-border-sm ml-2" role="status" aria-hidden="true"></span> جارى التحميل...';
    if ($(this).html() !== loadingText) {
      $this.data('original-text', $(this).html());
      $this.html(loadingText);
    }
    setTimeout(function() {
      $this.html($this.data('original-text'));
    }, 1000);
  });
})

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
  rtl: true,
  afterLoad: function (instance, current) {
    var pixelRatio = window.devicePixelRatio || 1;

    if (pixelRatio > 1.5) {
      current.width = current.width / pixelRatio;
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
          size: 140,
          thickness: 10,
          fill: {
            color: '#c11a6f'
          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('.progress-value').text((stepValue * 100).toFixed(0) + "k");
        }).stop();
        $(this).find('.second').circleProgress({
          value: percent / 100,
          size: 140,
          thickness: 10,
          fill: {
            color: '#00ff00'
          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('.progress-value').text((stepValue * 100).toFixed(0) + "k");
        }).stop();
        $(this).find('.Third').circleProgress({
          value: percent / 100,
          size: 140,
          thickness: 10,
          fill: {
            color: '#678fff'
          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('.progress-value').text((stepValue * 100).toFixed(0) + "k");
        }).stop();
        $(this).find('.Four').circleProgress({
          value: percent / 100,
          size: 140,
          thickness: 10,
          fill: {
            color: '#d82f4e'
          }
        }).on('circle-animation-progress', function (event, progress, stepValue) {
          $(this).find('.progress-value').text((stepValue * 100).toFixed(0) + "k");
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
NProgress.set(0.1); // To set a progress percentage, call .set(n), where n is a number between 0..1
NProgress.inc(); // To increment the progress bar, just use .inc(). This increments it with a random amount. This will never get to 100%: use it for every image load (or similar).If you want to increment by a specific value, you can pass that as a parameter
NProgress.configure({
  ease: 'ease',
  speed: 2000
}); // Adjust animation settings using easing (a CSS easing string) and speed (in ms). (default: ease and 200)
NProgress.configure({
  trickleSpeed: 1000
}); //Adjust how often to trickle/increment, in ms.
NProgress.configure({
  showSpinner: true
}); //Turn off loading spinner by setting it to false. (default: true)
NProgress.configure({
  parent: 'body'
}); //specify this to change the parent container. (default: body)
NProgress.done(); // end

/* ==================================
      Start mdbRange
===================================== */

$(document).ready(function ($) {

$('#multi13').mdbRange({
  single: {
    active: true,
    counting: true,
    countingTarget: '#ex'
  }
});
});


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
  responsive: [{
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
        slidesToScroll: 1,
        arrows: false,
      }
    },

    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },

  ]
});


var timezone = [
  {
    "value": "Dateline Standard Time",
    "abbr": "DST",
    "offset": -12,
    "isdst": false,
    "text": "(UTC-12:00) International Date Line West",
    "utc": [
      "Etc/GMT+12"
    ]
  },
  {
    "value": "UTC-11",
    "abbr": "U",
    "offset": -11,
    "isdst": false,
    "text": "(UTC-11:00) Coordinated Universal Time-11",
    "utc": [
      "Etc/GMT+11",
      "Pacific/Midway",
      "Pacific/Niue",
      "Pacific/Pago_Pago"
    ]
  },
  {
    "value": "Eastern Standard Time",
    "abbr": "EDT",
    "offset": -4,
    "isdst": true,
    "text": "(UTC-05:00) Eastern Time (US & Canada)",
    "utc": [
      "America/Detroit",
      "America/Havana",
      "America/Indiana/Petersburg",
      "America/Indiana/Vincennes",
      "America/Indiana/Winamac",
      "America/Iqaluit",
      "America/Kentucky/Monticello",
      "America/Louisville",
      "America/Montreal",
      "America/Nassau",
      "America/New_York",
      "America/Nipigon",
      "America/Pangnirtung",
      "America/Port-au-Prince",
      "America/Thunder_Bay",
      "America/Toronto",
      "EST5EDT"
    ]
  },

  {
    "value": "Arab Standard Time",
    "abbr": "AST",
    "offset": 3,
    "isdst": false,
    "text": "(UTC+03:00) Kuwait, Riyadh",
    "utc": [
      "Asia/Aden",
      "Asia/Bahrain",
      "Asia/Kuwait",
      "Asia/Qatar",
      "Asia/Riyadh"
    ]
  },
];


// plugin start from here
(function($){

    $.fn.worldClock = function(){
        clockInit(this);
    }

    var clockInit = function(obj){
        obj.each(function(){
            var t = getTimezoneArray( $(this).attr("data-timezone") );
            runClock( $(this), t );
        });
    }

    var runClock = function( el, timezone ){
        setInterval(function(){
            var clockArray = getClock(timezone);
            setClockHTML( el, clockArray );
        }, 1000);
    }

    var getDegree = function(c, m){
        return c/m*360;
    }

    var setClockHTML = function( clock, clockArray ){

        var secondsDegree   = getDegree(clockArray[2], 60);
        var minutesDegree   = getDegree(clockArray[1], 60);
        var hoursDegree     = getDegree(clockArray[0], 12);

        if ( clockArray[0] >= 12 ){
            clock.find(".apm").html("PM");
        } else{
            clock.find(".apm").html("AM");
        }

        clock.find(".seconds").css({
            "-webkit-transform": "rotateZ("+secondsDegree+"deg)",
            "-ms-transform": "rotateZ("+secondsDegree+"deg)",
            "transform": "rotateZ("+secondsDegree+"deg)"
        });

        minutesDegree = minutesDegree+clockArray[2]/60*6;

        clock.find(".minutes").css({
            "-webkit-transform": "rotateZ("+minutesDegree+"deg)",
            "-ms-transform": "rotateZ("+minutesDegree+"deg)",
            "transform": "rotateZ("+minutesDegree+"deg)"
        });

        hoursDegree = hoursDegree+clockArray[1]/60*30;

        clock.find(".hours").css({
            "-webkit-transform": "rotateZ("+hoursDegree+"deg)",
            "-ms-transform": "rotateZ("+hoursDegree+"deg)",
            "transform": "rotateZ("+hoursDegree+"deg)"
        });
    }

    var getClock = function( timezone ){

        var d = new Date();
        if ( timezone != undefined ){
            var utcTimeOffset = parseFloat(timezone.offset)*60*60*1000;

            var utcTime = d.getTime() + (d.getTimezoneOffset()*60*1000); // perfect utc timestamp
            d = new Date(utcTime + utcTimeOffset);
        }


        var getHours    = d.getHours();
        var getMinutes  = d.getMinutes();
        var getSeconds  = d.getSeconds();

        return [getHours, getMinutes, getSeconds];
    }

    var getTimezoneArray = function( tz ){
        if ( tz == undefined ){
            return tz;
        }
        var timezoneArray = undefined;
        $.each(timezone, function(){
            if ( this['utc'].toString().indexOf(tz) != -1 ){
                timezoneArray = this;
                return true;
            }
        });
        return timezoneArray;
    }

})(jQuery);

$(".clock").worldClock();