$('.first').click(function(){
	console.log('click');
	$('.left').addClass('show');
	$('.right').addClass('show');
	$('.text').addClass('showText');
	$('.text2').addClass('showText2');
	$('img').addClass('showImg');
});

$('.second').click(function(){
	console.log('click');
	$('.move').addClass('show');
});

$('.for_me').click(function(){
	$('.wrap').addClass('wrap_for_me');
	$('.content').addClass('content_for_me');
});

$(window).scroll(function() {
	console.log($('.for_me').height());
	if ($('.for_me').offset().top - $(window).scrollTop() -$('.for_me').height()*0.6 < 0){
		$('.wrap').addClass('wrap_for_me');
		$('.content').addClass('content_for_me');
	}
});
