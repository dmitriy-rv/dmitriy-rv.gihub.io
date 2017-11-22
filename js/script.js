(function($){
    $(window).on("load",function(){
        $(".scroll-wrap").mCustomScrollbar();
    });
})(jQuery);

$(".move").click(function(){
	var position = $(".utp1").offset().top;
	$('html,body').animate({scrollTop: position},'slow');
});

$(".show-popup-feedback").click(function(){
	$('.feedback').addClass('flex');
	$('.big-wrap').addClass('blur');
});

$(".popup-wrap").click(function(){
	$('.feedback').removeClass('flex');
	$('.big-wrap').removeClass('blur');
});

$(".feedback .close-button").click(function(){
	$('.feedback').removeClass('flex');
	$('.big-wrap').removeClass('blur');
});

$(".show-popup-offer").click(function(){
	$('.offer').addClass('flex');
	$('.big-wrap').addClass('blur');
});

$(".popup-wrap").click(function(){
	$('.offer').removeClass('flex');
	$('.big-wrap').removeClass('blur');
});

$(".offer .close-button").click(function(){
	$('.offer').removeClass('flex');
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
	$('.success-email').hide();
	$('.success-phone').hide();
	$('.error-form').hide();
});

$(".email-click").click(function(){
	$('.phone-click').removeClass('active');
	$('.email-click').addClass('active');
	$('.vk-click').removeClass('active');

	$('.phone-form').hide();
	$('.email-form').show();
	$('.vk-form').hide();
	$('.success-email').hide();
	$('.success-phone').hide();
	$('.error-form').hide();
});

$(".vk-click").click(function(){
	$('.phone-click').removeClass('active');
	$('.email-click').removeClass('active');
	$('.vk-click').addClass('active');

	$('.phone-form').hide();
	$('.email-form').hide();
	$('.vk-form').show();
	$('.success-email').hide();
	$('.success-phone').hide();
	$('.error-form').hide();
});

$('#send-email').click(function(){
	console.log($('#name-email').val());
	console.log($('#answer-email').val());

	$.ajax({
      type: "GET", //Метод отправки
      url: "/send-mail.php", //путь до php фаила отправителя
      data: {
      	name:$('#name-email').val(),
      	email:$('#answer-email').val()
      },
      success: function() {
        //код в этом блоке выполняется при успешной отправке сообщения
        console.log("Ваше сообщение отпрвлено!");
        $('.phone-form').hide();
		$('.email-form').hide();
		$('.vk-form').hide();
		$('.success-email').show();
		$('.success-phone').hide();
		$('.error-form').hide();
      }
    });
});

$('#send-phone').click(function(){
	console.log($('#name-phone').val());
	console.log($('#answer-phone').val());

	$.ajax({
      type: "GET", //Метод отправки
      url: "/send-phone.php", //путь до php фаила отправителя
      data: {
      	name:$('#name-phone').val(),
      	phone:$('#answer-phone').val()
      },
      success: function() {
        //код в этом блоке выполняется при успешной отправке сообщения
        console.log("Ваше сообщение отпрвлено!");
        $('.phone-form').hide();
		$('.email-form').hide();
		$('.vk-form').hide();
		$('.success-email').hide();
		$('.success-phone').show();
		$('.error-form').hide();
      }
    });
});