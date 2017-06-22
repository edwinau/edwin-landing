$(document).ready(function(){

  $('h2.left.button-row').click(function() {
      $('html, body').animate({
          scrollTop: $('#hello').offset().top
      }, 1000);
    });
});
