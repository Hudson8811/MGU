import $ from "jquery"
import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode, Thumbs } from 'swiper'
Swiper.use([Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller, Autoplay, FreeMode, Thumbs]);

var academicList;
$('.js-academic__list').each(function(){
	var slider=$(this)
	var academicList = new Swiper(slider[0], {
		// watchOverflow: true,
		// watchSlidesVisibility: true,
		// watchSlidesProgress: true,
		// preventInteractionOnTransition: true,
		slidesPerView: 1.5,
		spaceBetween: 16,
		loop: false,
		pagination: false,
		autoHeight: true, 
		navigation: {
				nextEl: slider.find('.swiper-button-next')[0],
				prevEl: slider.find('.swiper-button-prev')[0]
		},
		// thumbs: {
		// 		swiper: galleryThumbs
		// },
		pagination: {
				el: slider.find('.swiper-pagination')[0],
				type: 'bullets',
				clickable: true
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
	});
})
