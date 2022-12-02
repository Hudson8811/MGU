import $ from "jquery"
$(window).on('load', () => {
	console.log("привет")
	$('.declaration__button__one').click(function() {
		if ($(this).text() == 'читать объявление полностью') {
				 $(this).text('скрыть');
		}
		else {
				$(this).text('читать объявление полностью');
		}	
		$(this).parent().find(".block__textTwo__hidden").toggle();
		$(this).parent().find(".declaration__button__two").toggle()
		var btnTwo = $(this).parent().find(".declaration__button__two")
		if ($(btnTwo).text() == 'читать объявление полностью') {
			$(btnTwo).text('скрыть');
		}
		else {
				$(btnTwo).text('читать объявление полностью');
		}

	});
	$('.declaration__button__two').click(function() {
		if ($(this).text() == 'читать объявление полностью') {
				 $(this).text('скрыть');
		}
		else {
				$(this).text('читать объявление полностью');
		}	
		$(this).parent().find(".block__textTwo__hidden").toggle();
		$(this).parent().find(".declaration__button__one").toggle()
		var btnOne = $(this).parent().find(".declaration__button__one")
		if ($(btnOne).text() == 'читать объявление полностью') {
			$(btnOne).text('скрыть');
		}
		else {
				$(btnOne).text('читать объявление полностью');
		}

	});
});
