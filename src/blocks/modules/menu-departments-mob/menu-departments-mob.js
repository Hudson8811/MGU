
let menuDeparttabNavsClose = document.querySelector(".menuDepartMob__overlay--close");
let menuDepartMob = document.querySelector(".menuDepartMob--menu");
let menuDepartButton = document.querySelector(".menuDepartMob--button");
let menuDeparttabNavs = document.querySelectorAll(".menuDepartMob-tab");
let menuDeparttabPanes = document.querySelectorAll(".menuDepartMob-pane");
let menuDepartBack = document.querySelectorAll(".menuDepartMob__overlay--item__back");

if(menuDepartButton !== null) {
	if(menuDeparttabNavs !==null & menuDeparttabPanes !==null) {
		menuDeparttabClick()
	}
	function menuDeparttabClick() {
		for (var i = 0; i < menuDeparttabNavs.length; i++) {
	
			menuDeparttabNavs[i].addEventListener("click", function(e){
				e.preventDefault();
				var activeTabAttr = e.target.getAttribute("data-tab");
	
				for (var j = 0; j < menuDeparttabNavs.length; j++) {
					var contentAttr = menuDeparttabPanes[j].getAttribute("data-tab-content");
	
					if (activeTabAttr === contentAttr) {
						menuDeparttabNavs[j].classList.add("active");
						menuDeparttabPanes[j].classList.add("active"); 
					} else {
						menuDeparttabNavs[j].classList.remove("active");
						menuDeparttabPanes[j].classList.remove("active");
					}
				};
			});
		}
	}
	function menuDepartNotclick() {
		for (var i = 0; i < menuDeparttabNavs.length; i++) {
		menuDeparttabNavs[i].classList.remove("active");
		menuDeparttabNavs[i].classList.remove("notActive");
		}
		for (var i = 0; i < menuDeparttabPanes.length; i++) {
		menuDeparttabPanes[i].classList.remove("active");
		menuDeparttabPanes[i].classList.remove("notActive");
		}
	}
	
	menuDeparttabNavsClose.addEventListener("click", function () {
		menuDepartMob.classList.remove("menuDepartMob--menu--active");
		menuDepartNotclick()
		bodyYesScroll()
	});
	
	menuDepartBack.forEach((item) => {
		item.addEventListener("click", function () {
			menuDepartNotclick()
		});
	})
	menuDepartButton.addEventListener("click", function () {
		menuDepartMob.classList.add("menuDepartMob--menu--active");
		menuDepartNotclick()
		bodyNoScroll() 
	});
	
	function bodyNoScroll() {
		let bodyBodymotionless = document.querySelector('body')
		bodyBodymotionless.classList.add("Bodymotionless")
		
	}
	function bodyYesScroll() {
		let bodyBodymotionless = document.querySelector('body')
		bodyBodymotionless.classList.remove("Bodymotionless")	
	}
	
}


// $(document).click(function (e) {
// 	if (!menuDepartButton.is(e.target) && !menuDepartMob.is(e.target) && menuDepartMob.has(e.target).length === 0) {
			
// 	};
// });
