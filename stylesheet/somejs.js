function flicker(obj) {
      var timout = Math.floor(Math.random() * 2000) + 1;
      setTimeout(function(){
          obj.addClass("flicker");
      }, timout);
      var $removeinstagram = $(".instagram");
      setTimeout(function(){
          obj.removeClass("flicker");
      }, timout * 1.5);
}
function cycleImages(){
    var $active = $('#cycler .active');
    var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
    $next.css('z-index',2);//move the next image up the pile
    $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
    $next.css('z-index',3).addClass('active');//make the next image the top one
  });
}
//scroll listener
window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)
function setScrollVar ()  {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled = htmlElement.scrollTop /
    htmlElement.clientHeight
    console.log (Math.min(percentOfScreenHeightScrolled * 100, 100))
  htmlElement.style.setProperty(
      "--scroll",
    Math.min(percentOfScreenHeightScrolled * 100, 100)
  )
}
setScrollVar ()
// function swapImages() {
//
//       var timout = Math.floor(Math.random() * 2000) + 1;
//
//       var $instagram = $(".instagram");
//       setTimeout(function(){
//           $instagram.addClass("flicker");
//       }, timout);
//
//       var $removeinstagram = $(".instagram");
//       setTimeout(function(){
//           $removeinstagram.removeClass("flicker");
//       }, timout * 1.5);
// }
//
// function flickerfacebook() {
//
//       var timout = Math.floor(Math.random() * 2000) + 1;
//
//       var $facebook = $(".facebook");
//       setTimeout(function(){
//           $facebook.addClass("flicker");
//       }, timout);
//
//       var $removefacebook = $(".facebook");
//       setTimeout(function(){
//           $removefacebook.removeClass("flicker");
//       }, timout * 1.2);
// }
//
// function flickerlinkedin() {
//
//       var timout = Math.floor(Math.random() * 2000) + 1;
//
//       var $linkedin = $(".linkedin");
//       setTimeout(function(){
//           $linkedin.addClass("flicker");
//       }, timout);
//
//       var $removelinkedin = $(".linkedin");
//       setTimeout(function(){
//           $removelinkedin.removeClass("flicker");
//       }, timout * 1.5);
// }
function flickeremail() {
      var timout = Math.floor(Math.random() * 2000) + 2;
      var $email = $(".email");
      setTimeout(function(){
          $email.addClass("flicker");
      }, timout);
      var $removeemail = $(".email");
      setTimeout(function(){
          $removeemail.removeClass("flicker");
      }, timout * 1.5);
}
$(document).ready(function(){


// smooth scroll CV
  $('h2.right_right.button-row').click(function() {
      $('html, body').animate({
          scrollTop: $('#resume_pdf').offset().top
      }, 500);
    });
// smooth scoll portfolio
  $('h2.center.button-row').click(function() {
      $('html, body').animate({
          scrollTop: $('#Portfolio').offset().top
      }, 1200);
    });

  // smooth scoll MENU portfolio
    $('a.menu__item.portfoliome').click(function() {
        $('html, body').animate({
            scrollTop: $('#Portfolio').offset().top
        }, 1200);
      });

// smooth scroll contactme
  $('h2.left.button-row').click(function() {
      $('html, body').animate({
          scrollTop: $('#contact').offset().top
      }, 900);
    });

// smooth scroll MENU contactme
  $('a.menu__item.contactme').click(function() {
      $('html, body').animate({
          scrollTop: $('#contact').offset().top
      }, 900);
    });

  // smooth scroll BIO PICTURE contactme
    $('a.biopicture').click(function() {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 900);
      });

  // smooth scroll To Top
    $('.totop').click(function() {
        $('html, body').animate({
            scrollTop: $('#backtotop').offset().top
        }, 500);
      });


// smooth scroll quote
  $('h1.topname').click(function() {
      $('html, body').animate({
          scrollTop: $('#quoteelon').offset().top
      }, 1000);
    });
// smooth scroll rendezyou
  $('h2.right.button-row').click(function() {
      $('html, body').animate({
          scrollTop: $('#rendezlogo').offset().top
      }, 2000);
    });

// hint
  $('.titleHidden').removeAttr('title');
//fade in rendez
//  setInterval('cycleImages()', 4000);
// carousel
//  $('.carousel').carousel({
//    'interval': '6000'
//  });
//lights flicker instagram
setInterval(function() { flicker($('.email')); }, 2000);
setInterval(function() { flicker($('.instagram')); }, 3000);
setInterval(function() { flicker($('.facebook')); }, 2500);
setInterval(function() { flicker($('.linkedin')); }, 2750);
// //lights flicker facebook
// setInterval(function() { flickerfacebook(); }, 5000);
//
// //lights flicker linkedin
// setInterval(function() { flickerlinkedin(); }, 500);
//
// //lights flicker linkedin
// setInterval(function() { flickeremail(); }, 300);


//to top
  $(window).scroll(function() {
      if ($(this).scrollTop()) {
          $('#toTop').fadeIn();
      } else {
          $('#toTop').fadeOut();
      }
  });

 // smooth scroll totop
  $('#toTop').click(function() {
    $('html, body').animate({
        scrollTop: $('#backtotop').offset().top
    }, 2000);
  });



//touch same as hover
  $('body').bind('touchstart', function() {
  });
//carousel pause
  // $('.carousel').carousel({
  //     pause: "false"
  // });
});


myID = document.getElementById("customID");
  var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 800) {
    myID.className = "totop show"
  } else {
    myID.className = "totop hide"
  }
  };

window.addEventListener("scroll", myScrollFunc);


// autoplay vid
//    document.getElementById('vid').play();
//$("videoID").get(0).play();
//for nav popup
//document.getElementById("test").style.display ="none";
//function openTest() {
//    document.getElementById("test").style.display = "block";
//}
//document.getElementById('btn').addEventListener('click', openTest);
//For resume animation on scrollY
//
//window.addEventListener("scroll", setScrollVar)
//window.addEventListener("resize", setScrollVar)
//
//function setScrollVar() {
//   const htmlElement = document.documentElement
//   const percentOfScreenHeightScrolled = htmlElement.scrollTop /
//   htmlElement.clientHeight
//   console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
//   htmlElement.style.setProperty("--scroll",
//   Math.min(percentOfScreenHeightScrolled * 100, 100)
// )
//}
//setScrollVar()
//side swipe motion:
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;
var yDown = null;
function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */
        } else {
            /* left swipe */
        }
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */
        } else {
            /* up swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};
//newamination
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
// When the user clicks on div, open the portfolio popups
function myFunction1() {
  var popup1 = document.getElementById("myPopup1");
  popup1.classList.toggle("show1");
}
function myFunction2() {
  var popup2 = document.getElementById("myPopup2");
  popup2.classList.toggle("show2");
}
function myFunction3() {
  var popup3 = document.getElementById("myPopup3");
  popup3.classList.toggle("show3");
}
function myFunction4() {
  var popup4 = document.getElementById("myPopup4");
  popup4.classList.toggle("show4");
}
function myFunction5() {
  var popup5 = document.getElementById("myPopup5");
  popup5.classList.toggle("show5");
}
function myFunction6() {
  var popup6 = document.getElementById("myPopup6");
  popup6.classList.toggle("show6");
}
function myFunction7() {
  var popup7 = document.getElementById("myPopup7");
  popup7.classList.toggle("show7");
}
function myFunction8() {
  var popup8 = document.getElementById("myPopup8");
  popup8.classList.toggle("show8");
}
function myFunction9() {
  var popup9 = document.getElementById("myPopup9");
  popup9.classList.toggle("show9");
}
function myFunction10() {
  var popup10 = document.getElementById("myPopup10");
  popup10.classList.toggle("show10");
}
function myFunction11() {
  var popup11 = document.getElementById("myPopup11");
  popup11.classList.toggle("show11");
}
function myFunction12() {
  var popup12 = document.getElementById("myPopup12");
  popup12.classList.toggle("show12");
}
function myFunction13() {
  var popup13 = document.getElementById("myPopup13");
  popup13.classList.toggle("show13");
}
function myFunction14() {
  var popup14 = document.getElementById("myPopup14");
  popup14.classList.toggle("show14");
}
function myFunction15() {
  var popup15 = document.getElementById("myPopup15");
  popup15.classList.toggle("show15");
}
function myFunction16() {
  var popup16 = document.getElementById("myPopup16");
  popup16.classList.toggle("show16");
}
function myFunction17() {
  var popup17 = document.getElementById("myPopup17");
  popup17.classList.toggle("show17");
}
function myFunction18() {
  var popup18 = document.getElementById("myPopup18");
  popup18.classList.toggle("show18");
}
function myFunction19() {
  var popup19 = document.getElementById("myPopup19");
  popup19.classList.toggle("show19");
}
function myFunction20() {
  var popup20 = document.getElementById("myPopup20");
  popup20.classList.toggle("show20");
}

// loading different divs at different times
$(".container_one.contactpage").hide();
setTimeout(function(){
	$(".container_one.contactpage").show();
},5000);


// making name animated inspect


// loading portfolio delay
$(".threecoloumntables").hide().delay(1800).fadeIn(1000);

// loading resume-prompt delay
$("p.resume-prompt").hide().delay(3850).slideDown(1750);

// loading hr delay
$("hr").hide().delay(4250).slideDown(750);

// loading hr delay
$(".threebythreegridaboutme").hide().delay(4250).slideDown(750);



//about-me-three rotate:

$(document).ready(function() {
    // Add the rotating class to the desired elements
    $('.about-me-thumbnails.three').addClass('aboutmethree');
});

// Intro Text animation Digital Designer

$(document).ready(function() {
    var text = "Edwin Au";
    var delay = 80; // Initial delay in milliseconds
    var index = 0; // Keeps track of the letter to be typed next

    function typeLetter() {
        if (index < text.length) {
            // Append next character to the div
            $('.introtitleedwinau').append(text.charAt(index));
            index++;
            // Wait for a bit before typing the next letter
            setTimeout(typeLetter, delay);

            // Increase the delay slightly for the next letter to simulate typing
            delay += 15;
        }
    }
    // Start typing
    typeLetter();
});

// Intro Text animation Digital Designer
$(".introtitledigitaldesign").hide().delay(50).slideDown(750);





// loading monitor slowly scale down delay
setTimeout(function() {
    // Select the element and scale it down by 0.9
    $(".portfolio-top-headline-td-width").animate({
        zoom: .55, // Scale down to 90% of its original width
    }, 3000); // Duration of animation: 1000 milliseconds (1 second)
}, 2800); // Start the animation after 1000 milliseconds (1 second)

// loading trapezoid delay
setTimeout(function() {
    // Select the element and scale it down by 0.9
    $("div.trapezoiddiv").animate({
        zoom: .98, // Scale down to 90% of its original width
        "margin-bottom": "30px"
    },
    1500); // Duration of animation: 1000 milliseconds (1 second)
}, 2800); // Start the animation after 1000 milliseconds (1 second)

setTimeout(function() {
    // Select the element and scale it down by 0.9
    $("h2.button-row").animate({
      'font-size': '2.75vw'
        },
    1500); // Duration of animation: 1000 milliseconds (1 second)
}, 3800); // Start the animation after 1000 milliseconds (1 second)


//CSS animate button width
setTimeout(function() {
    $("h2.button-row > a").addClass('animate');
}, 3300); // Start the animation after 3800 milliseconds (3.8 seconds)

//Turn Click on Images CTA into ALL caps

$(document).ready(function() {
    $('p.click-on-image-cta').each(function() {
        var text = $(this).text();
        $(this).text(text.toUpperCase());
    });
});

//Make Click on Image CTA fade in and fade out
$(document).ready(function() {
    // Select all current and future elements with the class .click-on-image-cta
    $('.click-on-image-cta').each(function() {
        // Start with the element hidden
        $(this).hide();

        // Fade in the element slowly
        $(this).fadeIn(1500, function() {
            // Wait for 3 seconds before starting to fade out
            setTimeout(() => {
                $(this).fadeOut(1500);
            }, 9000);
        });
    });
});

//$(".popup1").hide();
//setTimeout(function(){
//	$(".popup1").show();
//},200);
//$(".popup2").hide();
//setTimeout(function(){
//	$(".popup2").show();
//},200);
//$(".popup3").hide();
//setTimeout(function(){
//	$(".popup3").show();
//},500);
//$(".popup4").hide();
//setTimeout(function(){
//	$(".popup4").show();
//},500);
//$(".popup5").hide();
//setTimeout(function(){
//	$(".popup5").show();
//},500);
//$(".popup6").hide();
//setTimeout(function(){
//	$(".popup6").show();
//},400);
//$(".popup7").hide();
//setTimeout(function(){
//	$(".popup7").show();
//},400);
//$(".popup8").hide();
//setTimeout(function(){
//	$(".popup8").show();
//},500);
//$(".popup9").hide();
//setTimeout(function(){
//	$(".popup9").show();
//},500);
//$(".popup10").hide();
//setTimeout(function(){
//	$(".popup10").show();
//},600);
//$(".popup11").hide();
//setTimeout(function(){
//	$(".popup11").show();
//},700);
//$(".popup12").hide();
//setTimeout(function(){
//	$(".popup12").show();
//},700);
//$(".popup13").hide();
//setTimeout(function(){
//	$(".popup13").show();
//},800);
//$(".popup14").hide();
//setTimeout(function(){
//	$(".popup14").show();
//},800);
//$(".popup15").hide();
//setTimeout(function(){
//	$(".popup15").show();
//},800);
//$(".container_one.contactpage").hide();
//setTimeout(function(){
//	$(".container_one.contactpage").show();
//},900);
// animate scale element when it is in view
//  const observer = new IntersectionObserver(
//  (entries) => {
//      entries.forEach((entry) => {
//        if (entry.isIntersecting) {
//          entry.target.classList.add("animatedinviews")
//        } else {}
//      })
//    },
//    {
//      rootMargin: '0px',
//      threshold: [0, 0.1, 1],
//    },
//  )
//  const tags = document.querySelectorAll("p, img, iframe, hr")
//  tags.forEach((tag) => {
//    observer.observe(tag)
//  })

  // Get current date and time
  // create a function to update the date and time
  var span = $("#datetime, #datetime2");

  function time() {
      var d = new Date();
      var m = d.getMinutes();
      var h = (d.getHours() % 12 || 12).toString(); // Convert hour to single digit and convert to string
      var period = d.getHours() >= 12 ? "PM" : "AM";

      // If hour is single digit, remove leading zero
      if (h.length === 2 && h[0] === '0') {
          h = h[1];
      }

      span.text(h + ":" + ("0" + m).slice(-2) + " " + period);
  }

  setInterval(time, 1000);

  // create a phone function to update the date and time
  // Code the show current time
  let ct = $("#currentTime");

  setInterval(() => {
      let currentTime = new Date().getTime();
      let timeString = new Date(currentTime).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

      // Remove leading zero if present for single-digit hours
      if (timeString.startsWith("0")) {
          timeString = timeString.slice(1);
      }

      ct.text(timeString);
  }, 1000);



//adding collapsable to portfolio1 in

$(document).ready(function() {

  $('.content1, .fa-minus-circle.one').show(500); // Explicitly shows the content when the page loads
  $('.portfolio-tabs-blue1').css('opacity', 0.5);
  // Initially shows the plus icon and hides the minus icon and content
  $('.fa-plus-circle.one').hide(500); // Shows the plus icon

  $('.toggle-button1').click(function() {
      var $content1 = $('.content1');
      if ($content1.is(':visible')) {
          // If content is currently visible, slide it up and switch icons
          $content1.slideUp();
          $('.fa-plus-circle.one').show(500);  // Show plus icon
          $('.fa-minus-circle.one').hide(500); // Hide minus icon
          $('.portfolio-tabs-blue1').css('opacity', 0.5); // Change opacity of elements with class 'abc' to 0.5

      } else {
          // If content is currently hidden, slide it down and switch icons
          $content1.slideDown();
          $('.fa-minus-circle.one').show(500); // Show minus icon
          $('.fa-plus-circle.one').hide(500);  // Hide plus icon
          $('.portfolio-tabs-blue1').css('opacity', 1); // Change opacity of elements with class 'abc' to 0.5
      }
  });
$('.portfolio-tabs-blue1').hover(
  function() {
      $(this).css('opacity', 0.5); // On mouse enter, change opacity to 0.5
  },
  function() {
      $(this).css('opacity', 1); // On mouse leave, revert opacity back to 1
  }
);
});

//adding collapsable to portfolio2 Blakesin

$(document).ready(function() {

  $('.content2, .fa-minus-circle.two').show(500); // Explicitly shows the content when the page loads

  // Initially shows the plus icon and hides the minus icon and content
  $('.fa-plus-circle.two').hide(500); // Shows the plus icon

  $('.toggle-button2').click(function() {
      var $content2 = $('.content2');
      if ($content2.is(':visible')) {
          // If content is currently visible, slide it up and switch icons
          $content2.slideUp();
          $('.fa-plus-circle.two').show(500);  // Show plus icon
          $('.fa-minus-circle.two').hide(500); // Hide minus icon
          $('.portfolio-tabs-blue2').css('opacity', 0.5); // Change opacity of elements with class 'abc' to 0.5

      } else {
          // If content is currently hidden, slide it down and switch icons
          $content2.slideDown();
          $('.fa-minus-circle.two').show(500); // Show minus icon
          $('.fa-plus-circle.two').hide(500);  // Hide plus icon
          $('.portfolio-tabs-blue2').css('opacity', 1); // Change opacity of elements with class 'abc' to 0.5
      }
  });
  $('.portfolio-tabs-blue2').hover(
      function() {
          $(this).css('opacity', 0.5); // On mouse enter, change opacity to 0.5
      },
      function() {
          $(this).css('opacity', 1); // On mouse leave, revert opacity back to 1
      }
  );
});

//adding collapsable to portfolio3 ThinkWay in

$(document).ready(function() {

  $('.content3, .fa-minus-circle.three').show(500); // Explicitly shows the content when the page loads
  $('.portfolio-tabs-blue3').css('opacity', 0.5);

  // Initially shows the plus icon and hides the minus icon and content
  $('.fa-plus-circle.three').hide(500); // Shows the plus icon

  $('.toggle-button3').click(function() {
      var $content3 = $('.content3');
      if ($content3.is(':visible')) {
          // If content is currently visible, slide it up and switch icons
          $content3.slideUp();
          $('.fa-plus-circle.three').show(500);  // Show plus icon
          $('.fa-minus-circle.three').hide(500); // Hide minus icon
          $('.portfolio-tabs-blue3').css('opacity', 0.5); // Change opacity of elements with class 'abc' to 0.5

      } else {
          // If content is currently hidden, slide it down and switch icons
          $content3.slideDown();
          $('.fa-minus-circle.three').show(500); // Show minus icon
          $('.fa-plus-circle.three').hide(500);  // Hide plus icon
          $('.portfolio-tabs-blue3').css('opacity', 1); // Change opacity of elements with class 'abc' to 0.5
      }
  });
  $('.portfolio-tabs-blue3').hover(
      function() {
          $(this).css('opacity', 0.5); // On mouse enter, change opacity to 0.5
      },
      function() {
          $(this).css('opacity', 1); // On mouse leave, revert opacity back to 1
      }
  );
});

//adding collapsable to portfolio4 Disney in

$(document).ready(function() {

  $('.content4, .fa-minus-circle.four').show(500); // Explicitly shows the content when the page loads
  $('.portfolio-tabs-blue4').css('opacity', 0.5);

  // Initially shows the plus icon and hides the minus icon and content
  $('.fa-plus-circle.four').hide(500); // Shows the plus icon

  $('.toggle-button4').click(function() {
      var $content4 = $('.content4');
      if ($content4.is(':visible')) {
          // If content is currently visible, slide it up and switch icons
          $content4.slideUp();
          $('.fa-plus-circle.four').show(500);  // Show plus icon
          $('.fa-minus-circle.four').hide(500); // Hide minus icon
          $('.portfolio-tabs-blue4').css('opacity', 0.5); // Change opacity of elements with class 'abc' to 0.5

      } else {
          // If content is currently hidden, slide it down and switch icons
          $content4.slideDown();
          $('.fa-minus-circle.four').show(500); // Show minus icon
          $('.fa-plus-circle.four').hide(500);  // Hide plus icon
          $('.portfolio-tabs-blue4').css('opacity', 1); // Change opacity of elements with class 'abc' to 0.5
      }
  });
  $('.portfolio-tabs-blue4').hover(
      function() {
          $(this).css('opacity', 0.5); // On mouse enter, change opacity to 0.5
      },
      function() {
          $(this).css('opacity', 1); // On mouse leave, revert opacity back to 1
      }
  );
});

//adding collapsable to portfolio5 D&G Mredin

  $(document).ready(function() {

    $('.content5, .fa-minus-circle.five').show(500); // Explicitly shows the content when the page loads
    $('.portfolio-tabs-blue5').css('opacity', 0.5);
    // Initially shows the plus icon and hides the minus icon and content
    $('.fa-plus-circle.five').hide(500); // Shows the plus icon

    $('.toggle-button5').click(function() {
        var $content5 = $('.content5');
        if ($content5.is(':visible')) {
            // If content is currently visible, slide it up and switch icons
            $content5.slideUp();
            $('.fa-plus-circle.five').show(500);  // Show plus icon
            $('.fa-minus-circle.five').hide(500); // Hide minus icon
            $('.portfolio-tabs-blue5').css('opacity', 0.5); // Change opacity of elements with class 'abc' to 0.5

        } else {
            // If content is currently hidden, slide it down and switch icons
            $content5.slideDown();
            $('.fa-minus-circle.five').show(500); // Show minus icon
            $('.fa-plus-circle.five').hide(500);  // Hide plus icon
            $('.portfolio-tabs-blue5').css('opacity', 1); // Change opacity of elements with class 'abc' to 0.5
        }
    });

  // Add hover effect to change opacity to 0.5
$('.portfolio-tabs-blue5').hover(
    function() {
        $(this).css('opacity', 0.5); // On mouse enter, change opacity to 0.5
    },
    function() {
        $(this).css('opacity', 1); // On mouse leave, revert opacity back to 1
    }
);
});



//Speech-bubble
