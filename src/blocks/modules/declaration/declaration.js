import $ from "jquery"
$(window).on('load', () => {
	console.log("привет")
	$('.declaration__item__button').click(function() {
		if ($(this).text() == 'читать объявление полностью') {
				 $(this).text('скрыть');
		}
		else {
				$(this).text('читать объявление полностью');
		}	
		console.log($(this).parent())
		console.log($(this).text())
		$(this).parent().find(".block__textTwo__hidden").toggle();
	});
});
