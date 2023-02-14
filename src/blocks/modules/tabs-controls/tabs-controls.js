	///tabs
	var tabNavsMat = document.querySelectorAll(".tabControl--mat");
	var tabPanesMat = document.querySelectorAll(".tabControl--mat-content");
  if(tabNavsMat !==null & tabPanesMat !==null) {
		tabClick() 
	}
	function tabClick() {
		for (var i = 0; i < tabNavsMat.length; i++) {
			console.log("click")
			tabNavsMat[i].addEventListener("click", function(e){
				e.preventDefault();
				var activeTabAttr = e.target.getAttribute("data-tab");
	
				for (var j = 0; j < tabNavsMat.length; j++) {
					var contentAttr = tabPanesMat[j].getAttribute("data-tab-content");
	
					if (activeTabAttr === contentAttr) {
						tabNavsMat[j].classList.add("active");
						tabPanesMat[j].classList.add("active"); 
					} else {
						tabNavsMat[j].classList.remove("active");
						tabPanesMat[j].classList.remove("active");
					}
				};
			});
		}
	}
	///tabs