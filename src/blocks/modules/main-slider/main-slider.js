

var mainSlider;
$('.js-main__slider').each(function(){
	var slider=$(this)
	var mainSlider = new Swiper(slider[0], {
		// watchOverflow: true,
		// watchSlidesVisibility: true,
		// watchSlidesProgress: true,
		// preventInteractionOnTransition: true,
		slidesPerView: 1,
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
		}
		// breakpoints: {
		//     // when window width is >= 480px
		//     992: {
		//         slidesPerView: 2.2,
		//         spaceBetween: 30
		//     },
		// }
	});
})
