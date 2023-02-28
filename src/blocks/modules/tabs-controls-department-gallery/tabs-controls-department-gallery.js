
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
					} else {
						tabNavsEG[j].classList.remove("active");
						tabPanesEG[j].classList.remove("active");
					}
				};
			});
		}
	}
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		gutter: 24,
		// gutter: '.gutter-sizer',
		percentPosition: true
	});


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
				'<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
				"</button>",

				arrowRight:
				'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
				'<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
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



/*
	Fancybox.bind(document.getElementById("galleryMasters"), "[data-fancybox]", {
		compact: false,
		idle: false,

		animated: false,
		showClass: false,
		hideClass: false,

		dragToClose: false,
		Thumbs: {
			type: "modern",
		},
		autoSize: true,
		Toolbar: {
			display: {
				left: ["infobar"],
				middle: [
				],
				right: ["close"],
			},
		},
	});*/

	///tabs