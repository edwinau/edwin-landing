$(document).ready(function(){

// smooth scroll CV
  $('h2.left.button-row').click(function() {
      $('html, body').animate({
          scrollTop: $('#resume_pdf').offset().top
      }, 500);
    });

// smooth scoll portfolio
  $('h2.center.button-row').click(function() {
    $('html, body').animate({
        scrollTop: $('#quoteelon').offset().top
      }, 1500);

      $('html, body').animate({
          scrollTop: $('#quoteelon').offset().top
        }, 1250);
      $('html, body').animate({
          scrollTop: $('#carousel').offset().top
      }, 1750);
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
    'interval': '3000', 'pause': 'false'

  });

//lights flicker
var divs = $('.container_contacts');

for(var i = 0; i < divs.length; i++){
    var thisDiv = divs[i]; // element

    var $thisDiv = $(divs[i]);
      var $post = $(".email");
      setTimeout(function(){
          $post.addClass("flicker");
      }, 50);
      var $removelinkedin = $(".email");
      setTimeout(function(){
          $removelinkedin.removeClass("flicker");
      }, 100);
      var $post = $(".email");
      setTimeout(function(){
          $post.addClass("flicker");
      }, 500);
      var $removelinkedin = $(".email");
      setTimeout(function(){
          $removelinkedin.removeClass("flicker");
      }, 550);
      var $post = $(".email");
      setTimeout(function(){
          $post.addClass("flicker");
      }, 2500);
      var $removelinkedin = $(".email");
      setTimeout(function(){
          $removelinkedin.removeClass("flicker");
      }, 2550);
      var $post = $(".email");
      setTimeout(function(){
          $post.addClass("flicker");
      }, 8700);
      var $removelinkedin = $(".email");
      setTimeout(function(){
          $removelinkedin.removeClass("flicker");
      }, 8750);


      var $email = $(".linkedin");
      setInterval(function(){
          $email.addClass("flicker");
      }, 400);
      var $removeemail = $(".linkedin");
      setInterval(function(){
          $removeemail.removeClass("flicker");
      }, 450);
      var $removeemail = $(".linkedin");
      setTimeout(function(){
          $removeemail.removeClass("flicker");
      }, 9000);

      var $facebook = $(".facebook");
      setTimeout(function(){
          $facebook.addClass("flicker");
      }, 1000);
      var $removefacebook = $(".facebook");
      setTimeout(function(){
          $removefacebook.removeClass("flicker");
      }, 1200);


      var $instagram = $(".instagram");
      setTimeout(function(){
          $instagram.addClass("flicker");
      }, 2000);
      var $removeinstagram = $(".instagram");
      setTimeout(function(){
          $removeinstagram.removeClass("flicker");
      }, 2200);
      var $instagram = $(".instagram");
      setTimeout(function(){
          $instagram.addClass("flicker");
      }, 5700);
      var $removeinstagram = $(".instagram");
      setTimeout(function(){
          $removeinstagram.removeClass("flicker");
      }, 5750);
  }

});
