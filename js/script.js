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

$(".close-button").click(function(){
	$('.popup-wrap').removeClass('flex');
	$('.big-wrap').removeClass('blur');
});

$(".popup-wrap .content").click(function(e) {
	e.stopImmediatePropagation();
});

$(".phone-click").click(function(){
	$('.phone-click').addClass('active');
	$('.email-click').removeClass('active');
	$('.vk-click').removeClass('active');

	$('.phone-form').show();
	$('.email-form').hide();
	$('.vk-form').hide();
});

$(".email-click").click(function(){
	$('.phone-click').removeClass('active');
	$('.email-click').addClass('active');
	$('.vk-click').removeClass('active');

	$('.phone-form').hide();
	$('.email-form').show();
	$('.vk-form').hide();
});

$(".vk-click").click(function(){
	$('.phone-click').removeClass('active');
	$('.email-click').removeClass('active');
	$('.vk-click').addClass('active');

	$('.phone-form').hide();
	$('.email-form').hide();
	$('.vk-form').show();
});

