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
