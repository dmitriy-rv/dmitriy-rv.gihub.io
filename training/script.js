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