
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
// We execute the same script as before
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
});



let menuDeparttabNavsClose = document.querySelector(".menuDepartMob__overlay--close");
let menuDepartBG = document.querySelector(".menuDepartMob--menu-bg");
let menuDepartMob = document.querySelector(".menuDepartMob--menu");
let menuDepartButton = document.querySelector(".menuDepartMob--button");
let menuDeparttabNavs = document.querySelectorAll(".menuDepartMob-tab");
let menuDeparttabPanes = document.querySelectorAll(".menuDepartMob-pane");
let menuDepartBack = document.querySelectorAll(".menuDepartMob__overlay--item__back");
let menuDepartOverlayListStart = document.querySelector(".menuDepartMob__overlay--list__start");

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
						menuDeparttabNavs[j].classList.remove("active");
						menuDeparttabNavs[j].classList.add("notActive");
						menuDeparttabPanes[j].classList.add("active");
						menuDepartOverlayListStart.classList.remove("active");
						menuDepartOverlayListStart.classList.add("notActive");
						// headerMenuMobtabNavs[j].classList.remove("Active");
						// headerMenuMobtabNavs[j].classList.add("notActive");
						// // headerMenuMobtabPanes[j].classList.remove("notActive"); 
						// headerMenuMobtabPanes[j].classList.add("active"); 
					} else {
						menuDeparttabNavs[j].classList.remove("notActive");
						menuDeparttabNavs[j].classList.add("active");
						menuDeparttabPanes[j].classList.remove("active");
						menuDeparttabPanes[j].classList.add("notActive");
						// headerMenuMobtabNavs[j].classList.remove("notActive");
						// headerMenuMobtabNavs[j].classList.add("Active");
						// headerMenuMobtabPanes[j].classList.add("notActive");
						// headerMenuMobtabPanes[j].classList.remove("active");
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

	$('body').append('<div class="depart-mobmenu-btn-scroll"><div class="depart-mobmenu-btn-scroll__burger"> <span></span></div></div>');

	$(window).on('scroll',function(){
		if($(window).scrollTop()>=window.innerHeight/2){
			$('.depart-mobmenu-btn-scroll').addClass('depart-mobmenu-btn-scroll--active');
		}
		else{
			$('.depart-mobmenu-btn-scroll').removeClass('depart-mobmenu-btn-scroll--active');
		}
	});
	$('.depart-mobmenu-btn-scroll').on('click', function(){
		$(menuDepartButton).trigger('click');
	});
	
	menuDeparttabNavsClose.addEventListener("click", function () {
		menuDepartMob.classList.remove("menuDepartMob--menu--active");
		menuDepartNotclick()
		bodyYesScroll()
	});
	menuDepartBG.addEventListener("click", function () {
		menuDepartMob.classList.remove("menuDepartMob--menu--active");
		menuDepartNotclick()
		bodyYesScroll()
	});
	
	menuDepartBack.forEach((item) => {
		item.addEventListener("click", function () {
			menuDepartOverlayListStart.classList.remove("notActive");
			menuDepartOverlayListStart.classList.add("active");
			menuDepartNotclick()
		});
	})
	menuDepartButton.addEventListener("click", function () {
		menuDepartMob.classList.add("menuDepartMob--menu--active");
		menuDepartNotclick()
		bodyNoScroll() 
	});
	
	// function bodyNoScroll() {
	// 	let bodyBodymotionless = document.querySelector('body')
	// 	bodyBodymotionless.classList.add("Bodymotionless")
		
	// }
	// function bodyYesScroll() {
	// 	let bodyBodymotionless = document.querySelector('body')
	// 	bodyBodymotionless.classList.remove("Bodymotionless")	
	// }
	
}


// $(document).click(function (e) {
// 	if (!menuDepartButton.is(e.target) && !menuDepartMob.is(e.target) && menuDepartMob.has(e.target).length === 0) {
			
// 	};
// });
