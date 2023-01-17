

var seminarsSlider;
$('.js-students-timetable-ochre').each(function(){
	var slider=$(this)
	var seminarsSlider = new Swiper(slider[0], {
		slidesPerView: "auto",
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
			1200: {
				slidesPerView: 3,
				spaceBetween: 32
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			768: {
				// slidesPerView: 1.5,
				spaceBetween: 16,
			},
			// 576: {
			// 	// slidesPerView: 1.5,
			// 	spaceBetween: 24,
			// },
		}
	});
})
