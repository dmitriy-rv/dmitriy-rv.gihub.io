$(".move").click(function(){
	var position = $(".utp1").offset().top;
	$('html,body').animate({scrollTop: position},'slow');
});

$(".show-popup").click(function(){
	$('.popup-wrap').addClass('flex');
	$('.big-wrap').addClass('blur');
});

$(".popup-wrap").click(function(){
	$('.popup-wrap').removeClass('flex');
	$('.big-wrap').removeClass('blur');
});

$(".popup-wrap .content").click(function(e) {
	e.stopImmediatePropagation();
});