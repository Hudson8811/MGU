
	// import '../../js/libs/GridLoadingEffects-master/AnimOnScroll.js'
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

	// var educationGalleryAlbum;
	// $('#grid').each(function(){
	// 	var slider=$(this) 
	// 	var educationGalleryAlbum = new AnimOnScroll(slider[0], {
	// 		minDuration : 0.4,
	// 		maxDuration : 0.7,
	// 		viewportFactor : 0.2
	// 	});
	// });
	// new AnimOnScroll( document.getElementById( 'grid' ), {
	// 	minDuration : 0.4,
	// 	maxDuration : 0.7,
	// 	viewportFactor : 0.2
	// } );
	// $('.grid').masonry({
	// 	// options
	// 	// columnWidth: '.grid-sizer',
	// 	itemSelector: '.grid-item',
	// 	horizontalOrder: true,
	// 	gutter: 10,
	// 	fitWidth: true,
	// });
	// $('.grid').masonry({
	// 	itemSelector: '.grid-item',
	// 	columnWidth: 160
	// });
	///tabs