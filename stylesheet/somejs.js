$(document).ready(function(){

  $(h2.left.button-row).on('click', 'a', function(event){
      event.preventDefault();

    $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
  });

});
