function flicker(obj) {

      var timout = Math.floor(Math.random() * 2000) + 1;

      setTimeout(function(){
          obj.addClass("flicker");
      }, timout);

      var $removeinstagram1 = $(".instagram1");
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
      }, 2000);
    });

// smooth scroll quote
  $('h1.topname').click(function() {
      $('html, body').animate({
          scrollTop: $('#quoteelon').offset().top
      }, 2000);
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
    'interval': '5000'

  });

//lights flicker instagram
setInterval(function() { flicker($('.email')); }, 2000);
setInterval(function() { flicker($('.instagram1')); }, 3000);
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
