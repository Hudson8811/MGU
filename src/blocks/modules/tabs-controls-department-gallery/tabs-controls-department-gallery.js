
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
	});

	///tabs