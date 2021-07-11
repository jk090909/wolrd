$(function(){
  
    $('.nav').hover(function(){
      $(this).find('.local').stop().slideDown();
    }, function(){
      $(this).find('.local').stop().slideUp();
    });

    setInterval (mySlide, 3000);

    function mySlide(){
        $('.slider').animate({'left':'-350px'}, 1000, function(){
        $('.slider:first-child').clone().appendTo('.slider');
        $('.slider:first-child').remove();
        $('.slider').css('left', 0);
        });
      };
  });

