document.addEventListener("DOMContentLoaded", () => {
	$('body').append('<div class="footer__button--up"><img src="img/svg/button--up-1.svg" alt=""></div>');            
	$(window).scroll(function() {
		var $height = $(window).height()
			if ($(this).scrollTop() > $height) {
					$('.footer__button--up').css({
							bottom: '48px'
					});
					} else {
					$('.footer__button--up').css({
							bottom: '-100px'
					});
			}
	});
	$('.footer__button--up').on('click',function() {
			$('html, body').animate({
					scrollTop: 0
			}, 50);
			return false;
	});
});