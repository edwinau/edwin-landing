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
      }, 2750);
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

// hint
  $('.titleHidden').removeAttr('title');

// carousel
  $('.carousel').carousel({
    'interval': '5000'

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

// smooth scroll quote
  $('#toTop').click(function() {
    $('html, body').animate({
        scrollTop: $('#backtotop').offset().top
    }, 2000);
  });



//touch same as hover
  $('body').bind('touchstart', function() {});


});
