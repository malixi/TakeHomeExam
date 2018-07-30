$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('nav').addClass('white');
  }
  else{
    $('nav').removeClass('white');
  }
});

$(window).on('scroll', function(){

  $('.fadetoleft').each(function(){
    let pos = $(this).offset().top,
        height = $(this).height(),
        topOfWindow = $(window).scrollTop();

    if(pos < topOfWindow + height && pos + height > topOfWindow){
      $(this).addClass('fadeInLeft_animation');
    }
  });

});


$(document).ready(function() {
    $("body").backgroundCycle({
        imageUrls: [
            './images/bg-image1.jpg',
            './images/bg-image1.jpg',
            './images/bg-image1.jpg'
        ],
        fadeSpeed: 2000,
        duration: 5000,
        backgroundSize: SCALING_MODE_COVER
    });
});
