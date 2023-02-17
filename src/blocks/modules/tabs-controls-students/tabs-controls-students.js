	///tabs
	var tabNavsSt = document.querySelectorAll(".tabControl--students");
	var tabPanesSt = document.querySelectorAll(".educationStudents__photoAlbums");
  if(tabNavsSt !==null & tabPanesSt !==null) {
		tabClickSt() 
	}
	function tabClickSt() {
		for (var i = 0; i < tabNavsSt.length; i++) {
			console.log("click")
			tabNavsSt[i].addEventListener("click", function(e){
				e.preventDefault();
				var activeTabAttr = e.target.getAttribute("data-tab");
	
				for (var j = 0; j < tabNavsSt.length; j++) {
					var contentAttr = tabPanesSt[j].getAttribute("data-tab-content");
	
					if (activeTabAttr === contentAttr) {
						tabNavsSt[j].classList.add("active");
						tabPanesSt[j].classList.add("active"); 
					} else {
						tabNavsSt[j].classList.remove("active");
						tabPanesSt[j].classList.remove("active");
					}
				};
			});
		}
	}
	///tabs