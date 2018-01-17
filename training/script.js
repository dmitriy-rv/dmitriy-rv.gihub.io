$( document ).ready(function() {
    $('.front').addClass('showFront');
    $('.main_logo').addClass('showFront');

    $(document).on("click",".toJoin", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 2000);
    });

});

$(window).scroll(function() {
	if ($('#list-3_1').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#list-3_1').addClass('show');
	}
	if ($('#list-3_2').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#list-3_2').addClass('show');
	}
	if ($('#list-3_3').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#list-3_3').addClass('show');
	}
	if ($('#list-3_4').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#list-3_4').addClass('show');
	}
	if ($('#list-3_5').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#list-3_5').addClass('show');
	}
	if ($('#button_first').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#button_first').addClass('show');
	}
	if ($('#who_are_foto').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#who_are_foto').addClass('show');
	}

	if ($('#who_are_text').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#who_are_text').addClass('show');
	}

		if ($('#button_how').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#button_how').addClass('show');
	}

	if ($('#block-4-1').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#block-4-1').addClass('show');
	}
	
	if ($('#block-4-2').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#block-4-2').addClass('show');
	}

	if ($('#price-1').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#price-1').addClass('show');
	}

	if ($('#price-2').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#price-2').addClass('show');
	}
});

$(".show-popup-offer").click(function(){
	$('.offer').addClass('flex');
});

$(".offer .close-button").click(function(){
	$('.offer').removeClass('flex');
});

$(".show-popup-pay").click(function(){
	$('.pay').addClass('flex');
});

$(".pay .close-button").click(function(){
	$('.pay').removeClass('flex');
});


$('#send-sing_up').click(function(){
	console.log($('#name-sing_up').val());
	console.log($('#phone-sing_up').val());
	console.log($('#email-sing_up').val());

	$.ajax({
      type: "GET", //Метод отправки
      url: "/send-sing_up.php", //путь до php фаила отправителя
      data: {
      	name:$('#name-sing_up').val(),
      	phone:$('#phone-sing_up').val(),
      	email:$('#email-sing_up').val()
      },
      success: function() {
        //код в этом блоке выполняется при успешной отправке сообщения
        console.log("Ваше сообщение отпрвлено!");
      }
    });
});