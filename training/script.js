// $('.first').click(function(){
// 	console.log('click');
// 	$('.left').addClass('show');
// 	$('.right').addClass('show');
// 	$('.text').addClass('showText');
// 	$('.text2').addClass('showText2');
// 	$('img').addClass('showImg');
// });

// $('.second').click(function(){
// 	console.log('click');
// 	$('.move').addClass('show');
// });

// $('.for_me').click(function(){
// 	$('.wrap').addClass('wrap_for_me');
// 	$('.content').addClass('content_for_me');
// });

// $(window).scroll(function() {
// 	console.log($('.for_me').height());
// 	if ($('.for_me').offset().top - $(window).scrollTop() -$('.for_me').height()*0.6 < 0){
// 		$('.wrap').addClass('wrap_for_me');
// 		$('.content').addClass('content_for_me');
// 	}
// });

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

	// if ($('#who_are_foto').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
	// 	$('#who_are_foto').addClass('show');
	// }

	if ($('#who_are_text').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#who_are_text').addClass('show');
		$('#who_are_foto').addClass('show');
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