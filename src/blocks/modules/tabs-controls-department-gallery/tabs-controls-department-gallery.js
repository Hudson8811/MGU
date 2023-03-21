
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		gutter: 24,
		// gutter: '.gutter-sizer',
		transitionDuration: 0,
		percentPosition: true
	});

	///tabs
	var tabNavsEG = document.querySelectorAll(".tabControl--educationGallery");
	var tabPanesEG = document.querySelectorAll(".tabContent--educationGallery");
  if(tabNavsEG !==null & tabPanesEG !==null) {
		tabClickEG()
	}
	function tabClickEG() {
		for (var i = 0; i < tabNavsEG.length; i++) {
			console.log("click")
			tabNavsEG[i].addEventListener("click", function(e){
				e.preventDefault();
				var activeTabAttr = e.target.getAttribute("data-tab");

				for (var j = 0; j < tabNavsEG.length; j++) {
					var contentAttr = tabPanesEG[j].getAttribute("data-tab-content");

					if (activeTabAttr === contentAttr) {
						tabNavsEG[j].classList.add("active");
						tabPanesEG[j].classList.add("active");
						$(tabPanesEG[j]).find(".grid").masonry();
					} else {
						tabNavsEG[j].classList.remove("active");
						tabPanesEG[j].classList.remove("active");
					}
				};
			});
		}
	}



	$('.js-fancy-custom-gallery[data-fancybox]').fancybox({
		// Custom CSS class for layout
		baseClass: "fancybox-customized-gallery",
		toolbar  : false,

		//animationDuration: 366,
		backFocus: false,
		animationEffect: "fade",
		clickContent: 'close',
		// Base template for layout
		baseTpl:
		  '<div class="fancybox-container" role="dialog" tabindex="-1">' +
		  '<div class="fancybox-bg"></div>' +
		  '<div class="fancybox-inner">' +
			'<div class="fancybox-inner2">' +
				'<div class="fancybox-custom-topbar"><span class="fancybox-custom-topbar__title"></span><div  data-fancybox-close class="fancybox-custom-topbar__close" ><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 24L14 14.1149L4 4" stroke="#031B4B"/><path d="M24 4L14 13.8851L24 24" stroke="#031B4B"/></svg></div> </div>'+
				'<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
				'<div class="fancybox-toolbar">{{buttons}}</div>' +
				'<div class="fancybox-navigation">{{arrows}}</div>' +
				'<div class="fancybox-stage-wrap">' +
					'<div class="fancybox-stage"></div>' +
				'</div>' +
				'<div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>' +
			'</div>' +
		  '</div>' +
		  '</div>',


			btnTpl: {
				// Arrows
				arrowLeft:
				'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
				'<div><svg width="11" height="18" viewBox="0 0 11 18" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L2 8.90805L10 17" stroke="#004ABA" stroke-width="1.5"/></svg></div>' +
				"</button>",

				arrowRight:
				'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
				'<div><svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.5 17L9.5 9.09195L1.5 1" stroke="#004ABA" stroke-width="1.5"/></svg></div>' +
				"</button>",

			},

		beforeShow: function( instance, slide ) {
			var title=slide.$thumb.closest('.grid-item').attr('data-title');
			if(!(typeof(title)==='string' && title.length>1)){
				title='';
			}

			instance.current.$slide.closest('.fancybox-inner').find('.fancybox-custom-topbar__title').html(title);
		}
	});





	///tabs