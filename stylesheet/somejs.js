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
  $('h2.left.button-row').click(function() {
      $('html, body').animate({
          scrollTop: $('#resume_pdf').offset().top
      }, 500);
    });

// smooth scoll portfolio
  $('h2.center.button-row').click(function() {
    // $('html, body').animate({
    //     scrollTop: $('#quoteelon').offset().top
    //   }, 1500);
    //
    //   $('html, body').animate({
    //       scrollTop: $('#quoteelon').offset().top
    //     }, 2750);
      $('html, body').animate({
          scrollTop: $('#carousel').offset().top
      }, 1500);
    });

// smooth scroll contactme
  $('h2.right_right.button-row').click(function() {
      $('html, body').animate({
          scrollTop: $('#contactme').offset().top
      }, 1000);
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
  setInterval('cycleImages()', 4000);




// carousel
  $('.carousel').carousel({
    'interval': '6000'

  });

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
  $('body').bind('touchstart', function() {});

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

    document.getElementById('vid').play();

$("videoID").get(0).play();

//for nav popup

document.getElementById("test").style.display ="none";

function openTest() {
    document.getElementById("test").style.display = "block";
}

document.getElementById('btn').addEventListener('click', openTest);


//for resumemobile movement
function reveal() {
  var reveals = document.querySelectorAll(".resumepdf");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function myFunctiontwo() {
  var popuptwo = document.getElementById("myPopuptwo");
  popuptwo.classList.toggle("showtwo");
}

function myFunctionthree() {
  var popupthree = document.getElementById("myPopupthree");
  popupthree.classList.toggle("showthree");
}

function myFunctionfour() {
  var popupfour = document.getElementById("myPopupfour");
  popupfour.classList.toggle("showfour");
}

function myFunctionfive() {
  var popupfive = document.getElementById("myPopupfive");
  popupfive.classList.toggle("showfive");
}

function myFunctionsix() {
  var popupsix = document.getElementById("myPopupsix");
  popupsix.classList.toggle("showsix");
}

function myFunctionseven() {
  var popupseven = document.getElementById("myPopupseven");
  popupseven.classList.toggle("showseven");
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
