
//slideshow
{
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
}
//slideshow bg-image
{
var images=new Array('./images/slideshow1.jpg','./images/slideshow2.jpg','./images/slideshow3.jpg','./images/slideshow4.jpg','./images/slideshow5.jpg');
var nextimage=0;
bgslideshow();

function bgslideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('.main-page')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn('slow',function(){
        setTimeout(bgslideshow,6000);
    });


}
}

//scroll top

$('.footer-btn').click(function(){
   $('html, body').animate({scrollTop:0}, 'slow');
 });

//scroll down
 $(window).on('scroll', function(){
   if($(window).scrollTop()){
     $('nav').addClass('white');
   }
   else{
     $('nav').removeClass('white');
   }
 });

//fadeInLeft

 var content_left = 'animate fadeToLeft';

	(function($, win) {
		$.fn.inViewport = function(cb) {
			return this.each(function(i,el) {
				function visPx() {
					var H = $(this).height(),
					r = el.getBoundingClientRect(),
					t = r.top,
					b = r.bottom;
					return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
				}
				visPx();
			$(win).on("resize scroll", visPx);
			});
		};
	}(jQuery, window));

	$(".rightToLeft").inViewport(function(px) {
		if(px) $(this).addClass(content_left);
	});

//fadeInRight
  var content_right = 'animate fadeToRight';

	(function($, win) {
		$.fn.inViewport = function(cb) {
			return this.each(function(i,el) {
				function visPx() {
					var H = $(this).height(),
					r = el.getBoundingClientRect(),
					t = r.top,
					b = r.bottom;
					return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
				}
				visPx();
			$(win).on("resize scroll", visPx);
			});
		};
	}(jQuery, window));

	$(".leftToRight").inViewport(function(px) {
		if(px) $(this).addClass(content_right);
	});
