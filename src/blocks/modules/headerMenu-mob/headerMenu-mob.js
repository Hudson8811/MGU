
let headerMenuMobtabNavsClose = document.querySelector(".headerMenuMob__overlay--close");
let headerMenuMobBG = document.querySelector(".headerMenuMob--menu-bg");
let headerMenuMob = document.querySelector(".headerMenuMob--menu");
let headerMenuMobButton = document.querySelector(".header__other__humb");
let headerMenuMobtabNavs = document.querySelectorAll(".headerMenuMob-tab");
let headerMenuMobtabPanes = document.querySelectorAll(".headerMenuMob-pane");
let headerMenuMobBack = document.querySelectorAll(".headerMenuMob__overlay--item__back");
let headerMenuMobBackTwo = document.querySelectorAll(".headerMenuMob__overlay--item__backTwo");
let headerMenuMobOverlayListStart = document.querySelector(".headerMenuMob__overlay--list__start");
let headerMenuMobTabNavsTwo = document.querySelectorAll(".headerMenuMob-tabTwo");
let headerMenuMobTabPanesTwo = document.querySelectorAll(".headerMenuMob-paneTwo");
let headerMenuMobButtonEducation = document.querySelector(".headerMenuMob--button");
let quickAccessEducation = document.querySelector(".quickAccessEducation");
let departmentsHome = document.querySelector(".departments__home");


headerMenuMobtabNavsClose.addEventListener("click", function () {
	headerMenuMob.classList.remove("headerMenuMob--menu--active");
	headerMenuMobNotclick()
	bodyYesScroll()
});
headerMenuMobBG.addEventListener("click", function () {
	headerMenuMob.classList.remove("headerMenuMob--menu--active");
	headerMenuMobNotclick()
	bodyYesScroll()
});
headerMenuMobButtonEducation.addEventListener("click", function () {
	let notActive = quickAccessEducation.classList.contains("notActive");
	headerMenuMobButtonEducation.classList.remove("active");
	headerMenuMobButtonEducation.classList.add("notActive");
	if (notActive == true) {
		quickAccessEducation.classList.remove("notActive");
	}
	quickAccessEducation.classList.add("active");

});
departmentsHome.addEventListener("click", function () {
	headerMenuMobButtonEducation.classList.remove("notActive");
	headerMenuMobButtonEducation.classList.add("active");

});

headerMenuMobBack.forEach((item) => {
	item.addEventListener("click", function () {
		headerMenuMobOverlayListStart.classList.remove("notActive");
		headerMenuMobOverlayListStart.classList.add("active");
		headerMenuMobNotclick()
	});
})
headerMenuMobBackTwo.forEach((item) => {
	item.addEventListener("click", function () {
		// headerMenuMobOverlayListStart.classList.remove("notActive");
		// headerMenuMobOverlayListStart.classList.add("active");
		headerMenuMobNotclickTwo()
	});
})



if (headerMenuMobButton !== null) {
	if (headerMenuMobtabNavs !== null & headerMenuMobtabPanes !== null) {
		headerMenuMobtabClick()
		headerMenuMobtabTwoClick()
	}
	// if(headheaderMenuMobTabNavsTwo !==null & headerMenuMobTabPanesTwo !==null) {

	// }
	function headerMenuMobtabClick() {
		for (var i = 0; i < headerMenuMobtabNavs.length; i++) {

			headerMenuMobtabNavs[i].addEventListener("click", function (e) {
				headerMenuMobButtonEducation.classList.remove("active");
				headerMenuMobButtonEducation.classList.add("notActive");
				e.preventDefault();
				var activeTabAttr = e.target.getAttribute("data-tab");

				for (var j = 0; j < headerMenuMobtabNavs.length; j++) {
					var contentAttr = headerMenuMobtabPanes[j].getAttribute("data-tab-content");

					if (activeTabAttr === contentAttr) {
						headerMenuMobOverlayListStart.classList.remove("active");
						headerMenuMobOverlayListStart.classList.add("notActive");
						headerMenuMobtabNavs[j].classList.remove("Active");
						headerMenuMobtabNavs[j].classList.add("notActive");
						// headerMenuMobtabPanes[j].classList.remove("notActive"); 
						headerMenuMobtabPanes[j].classList.add("active");
					} else {
						headerMenuMobtabNavs[j].classList.remove("notActive");
						headerMenuMobtabNavs[j].classList.add("Active");
						headerMenuMobtabPanes[j].classList.add("notActive");
						headerMenuMobtabPanes[j].classList.remove("active");
					}
				};
			});
		}
	}
	function headerMenuMobtabTwoClick() {
		for (var i = 0; i < headerMenuMobTabNavsTwo.length; i++) {

			headerMenuMobTabNavsTwo[i].addEventListener("click", function (e) {
				e.preventDefault();
				var activeTabAttr = e.target.getAttribute("data-tab-two");
				console.log(headerMenuMobTabPanesTwo)
				for (var j = 0; j < headerMenuMobTabNavsTwo.length; j++) {
					var contentAttr = headerMenuMobTabPanesTwo[j].getAttribute("data-tab-content-two");

					if (activeTabAttr === contentAttr) {
						headerMenuMobOverlayListStart.classList.remove("active");
						headerMenuMobOverlayListStart.classList.add("notActive");
						headerMenuMobTabNavsTwo[j].classList.remove("Active");
						headerMenuMobTabNavsTwo[j].classList.add("notActive");
						headerMenuMobTabPanesTwo[j].classList.add("active");
					} else {
						headerMenuMobTabNavsTwo[j].classList.remove("notActive");
						headerMenuMobTabNavsTwo[j].classList.add("Active");
						headerMenuMobTabPanesTwo[j].classList.add("notActive");
						headerMenuMobTabPanesTwo[j].classList.remove("active");
					}
				};
			});
		}
	}

	function headerMenuMobNotclick() {

		headerMenuMobOverlayListStart.classList.add("active");
		headerMenuMobButtonEducation.classList.remove("notActive");
		headerMenuMobButtonEducation.classList.add("active");
		for (var i = 0; i < headerMenuMobtabNavs.length; i++) {
			headerMenuMobtabNavs[i].classList.remove("active");
			headerMenuMobtabNavs[i].classList.remove("notActive");
		}
		for (var i = 0; i < headerMenuMobtabPanes.length; i++) {
			headerMenuMobtabPanes[i].classList.remove("active");
			headerMenuMobtabPanes[i].classList.remove("notActive");
		}
	}
	function headerMenuMobNotclickTwo() {
		// headerMenuMobOverlayListStart.classList.add("active");
		for (var i = 0; i < headerMenuMobTabNavsTwo.length; i++) {
			headerMenuMobTabNavsTwo[i].classList.remove("active");
			headerMenuMobTabNavsTwo[i].classList.remove("notActive");
		}
		for (var i = 0; i < headerMenuMobTabPanesTwo.length; i++) {
			headerMenuMobTabPanesTwo[i].classList.remove("active");
			headerMenuMobTabPanesTwo[i].classList.remove("notActive");
		}

	}


	headerMenuMobButton.addEventListener("click", function () {
		let bodyBodymotionless = document.querySelector('body')
		console.log(bodyBodymotionless)
		bodyBodymotionless.classList.add("Bodymotionless")
		headerMenuMob.classList.add("headerMenuMob--menu--active");
		headerMenuMobNotclick()
		// bodyNoScroll()

	});

}

// function bodyNoScroll() {
// 	let bodyBodymotionless = document.querySelector('body')
// 	bodyBodymotionless.classList.add("Bodymotionless")

// }
// function bodyYesScroll() {
// 	let bodyBodymotionless = document.querySelector('body')
// 	bodyBodymotionless.classList.remove("Bodymotionless")
// }

