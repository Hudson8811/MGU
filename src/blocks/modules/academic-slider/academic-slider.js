import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode, Thumbs } from 'swiper'
Swiper.use([Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode, Thumbs]);

const academicList  = new Swiper('.academic__list', {
	slidesPerView: 1.5,
	spaceBetween: 16,
	loop: false,
	pagination: true,
	autoHeight: true, 
	pagination: {
		el: '.main__swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	navigation: {
		nextEl: '.main__swiper-button-next',
		prevEl: '.main__swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 480px
		1200: {
			slidesPerView: 4,
			spaceBetween: 32
		},
		992: {
			slidesPerView: 3.5,
			spaceBetween: 24,
		}, 
		576: {
			slidesPerView: 2.5,
			spaceBetween: 24,
		}, 
	}

})