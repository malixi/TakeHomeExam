$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('nav').addClass('white');
  }
  else{
    $('nav').removeClass('white');
  }
});

var images=new Array('./images/slideshow1.jpg','./images/slideshow2.jpg','./images/slideshow3.jpg','./images/slideshow4.jpg','./images/slideshow5.jpg');
var nextimage=0;
slideshow();

function slideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('.section6')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn(3000,function(){
        setTimeout(slideshow,6000);
    });


}

function slideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('.main-page')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn(3000,function(){
        setTimeout(slideshow,6000);
    });




}
