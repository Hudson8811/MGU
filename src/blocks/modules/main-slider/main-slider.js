import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode, Thumbs } from 'swiper'
Swiper.use([Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode, Thumbs]);

const mainSlider = new Swiper('.main__slider', {
	slidesPerView: 1,
	// spaceBetween: 20,
	loop: false,
	pagination: true,
	pagination: {
		el: '.main__swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	navigation: {
		nextEl: '.main__swiper-button-next',
		prevEl: '.main__swiper-button-prev',
	},
	// breakpoints: {
	// 	// when window width is >= 480px
	// 	1200: {
	// 		slidesPerView: 4,
	// 		spaceBetween: 30
	// 	},
	// }

})