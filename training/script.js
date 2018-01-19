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
	if ($('#button_first').offset().top - $(window).height() - $(window).scrollTop() < 0){
		$('#button_first').addClass('show');
	}
	if ($('#who_are_foto').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#who_are_foto').addClass('show');
	}

	if ($('#who_are_text').offset().top+100 - $(window).height() - $(window).scrollTop() < 0){
		$('#who_are_text').addClass('show');
	}

	if ($('#button_how').offset().top - $(window).height() - $(window).scrollTop() < 0){
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

	$.ajax({
      type: "GET", //Метод отправки
      url: "/send-sing_up.php", //путь до php фаила отправителя
      data: {
      	date:$('#select-profession').val(),
      	name:$('#name-sing_up').val(),
      	phone:$('#phone-sing_up').val(),
      	email:$('#email-sing_up').val()
      },
      success: function() {
        //код в этом блоке выполняется при успешной отправке сообщения

		$('.wrap_form_sucsess').show();
		$('.wrap_form_input').hide();

		$('.change').html($('#select-profession').val());
        console.log("Ваше сообщение отпрвлено!");
      }
    });
});

		$('.sel').each(function() {
		  $(this).children('select').css('display', 'none');
		  
		  var $current = $(this);
		  
		  $(this).find('option').each(function(i) {
		    if (i == 0) {
		      $current.prepend($('<div>', {
		        class: $current.attr('class').replace(/sel/g, 'sel__box')
		      }));
		      
		      var placeholder = $(this).text();
		      $current.prepend($('<span>', {
		        class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
		        text: placeholder,
		        'data-placeholder': placeholder
		      }));
		      
		      return;
		    }
		    
		    $current.children('div').append($('<span>', {
		      class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
		      text: $(this).text()
		    }));
		  });
		});

		// Toggling the `.active` state on the `.sel`.
		$('.sel').click(function() {
		  $(this).toggleClass('active');
		});

		// Toggling the `.selected` state on the options.
		$('.sel__box__options').click(function() {
		  var txt = $(this).text();
		  var index = $(this).index();
		  
		  $(this).siblings('.sel__box__options').removeClass('selected');
		  $(this).addClass('selected');
		  
		  var $currentSel = $(this).closest('.sel');
		  $currentSel.children('.sel__placeholder').text(txt);
		  $currentSel.children('select').prop('selectedIndex', index + 1);
		});