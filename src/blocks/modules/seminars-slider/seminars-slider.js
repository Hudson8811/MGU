import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode, Thumbs } from 'swiper'
Swiper.use([Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode, Thumbs]);

var seminarsSlider;
$('.js-seminars').each(function(){
	var slider=$(this)
	var seminarsSlider = new Swiper(slider[0], {
		slidesPerView: 1.2,
		spaceBetween: 16,
		loop: false,
		pagination: true,
		autoHeight: true, 
		navigation: {
				nextEl: slider.find('.swiper-button-next')[0],
				prevEl: slider.find('.swiper-button-prev')[0]
		},
		pagination: {
				el: slider.find('.swiper-pagination')[0],
				type: 'bullets',
				clickable: true
		},
		breakpoints: {
			// when window width is >= 480px
			1200: {
				slidesPerView: 3,
				spaceBetween: 32
			},
			992: {
				slidesPerView: 2.5,
				spaceBetween: 24,
			}, 
			768: {
				slidesPerView: 1.5,
				spaceBetween: 24,
			}, 
			576: {
				slidesPerView: 1.5,
				spaceBetween: 24,
			}, 
		}
	});
})