$(document).ready(() => { // DOM готов к взаимодейтсвию

	const onScrollHeader = () => {

		const header = $('.section__header')

		let prevScroll = $(window).scrollTop()
		let windowHeight = $(window).height();
		let currentScroll

		$(window).scroll(() => {

			currentScroll = $(window).scrollTop()

			const headerHidden = () => header.hasClass('header_hidden')

			if (currentScroll > 0 && currentScroll > prevScroll && headerHidden()) {
				header.removeClass('header_hidden')
			}
			if (currentScroll < prevScroll && !headerHidden()) {

				header.addClass('header_hidden')
			}
			if (currentScroll < 1 && currentScroll < prevScroll && headerHidden()) {

				header.removeClass('header_hidden')
			}

			prevScroll = currentScroll

		})

	}

	onScrollHeader()


	const onScrollHeaderMenu = () => {

		const header = $('.section__topMenu')

		let prevScroll = $(window).scrollTop()
		let windowHeight = $(window).height();

		let currentScroll

		$(window).scroll(() => {

			currentScroll = $(window).scrollTop()

			const headerHidden = () => header.hasClass('header__menu--hidden')

			if (currentScroll > 0 && currentScroll > prevScroll && headerHidden()) {
				header.removeClass('header__menu--hidden')
			}
			if (currentScroll < prevScroll && !headerHidden()) {

				header.addClass('header__menu--hidden')
			}
			if (currentScroll < 1 && currentScroll < prevScroll && headerHidden()) {

				header.removeClass('header__menu--hidden')
			}

			prevScroll = currentScroll

		})

	}

	onScrollHeaderMenu()

})


const menuBtn = $(".topMenu__item__department"),
	menu = $(".department__menu");

$(document).click(function (e) {
	if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
		menu.removeClass("department__menu--active");
	};
});
var delaymenuBtn;
menuBtn.mouseenter(function () {
	topMenuNotHover()
	NotHover();
	bodyYesScroll()
	searchWrap.removeClass("active");
	delaymenuBtn = setTimeout(function () {
		menu.addClass("department__menu--active");

	}, 200);
});
menuBtn.mouseleave(function () {
	window.clearTimeout(delaymenuBtn);
});
menu.mouseleave(function () {
	menu.removeClass("department__menu--active");
	NotHover();
	topMenuNotHover()
});



const topMenu = $(".topMenu__item--owl"),
	topMenuoverlay = $(".topMenu__overlay"),
	topMenuOverlayBgClose = $(".topMenu__overlay__bg "),
	topMenuOverlayClose = $(".topMenu__overlay--close");

// $(document).click(function (e) {
// 	if (!topMenuoverlay.is(e.target) && !topMenuoverlay.is(e.target) && topMenuoverlay.has(e.target).length === 0) {
// 		topMenuoverlay.removeClass("topMenu__overlay--active");
// 		NotHover();
// 		topMenuNotHover()
// 		// bodyYesScroll()
// 	};
// });

topMenuOverlayClose.on("click", function () {
	topMenuoverlay.removeClass("topMenu__overlay--active");
	NotHover();
	topMenuNotHover()
	bodyYesScroll()
});
topMenuOverlayBgClose.on("click", function () {
	topMenuoverlay.removeClass("topMenu__overlay--active");
	NotHover();
	topMenuNotHover()
	bodyYesScroll()
});



var tabNavs = document.querySelectorAll(".menu-tab");
var tabPanes = document.querySelectorAll(".menu-pane");

if (tabNavs !== null & tabPanes !== null) {
	tabHover()
}
function NotHover() {
	for (var i = 0; i < tabNavs.length; i++) {
		tabNavs[i].classList.remove("active");
		tabNavs[i].classList.remove("notActive");
	}
	for (var i = 0; i < tabPanes.length; i++) {
		tabPanes[i].classList.remove("active");
		tabPanes[i].classList.remove("notActive");
	}
}
function tabHover() {
	for (var i = 0; i < tabNavs.length; i++) {

		tabNavs[i].addEventListener("mouseover", function (e) {
			e.preventDefault();
			var activeTabAttr = e.target.getAttribute("data-tab");

			for (var j = 0; j < tabNavs.length; j++) {
				var contentAttr = tabPanes[j].getAttribute("data-tab-content");

				if (activeTabAttr === contentAttr) {
					tabNavs[j].classList.add("active");
					tabPanes[j].classList.add("active");
					tabNavs[j].classList.remove("notActive");
					tabPanes[j].classList.remove("notActive");

				} else {
					tabNavs[j].classList.add("notActive");
					tabPanes[j].classList.add("notActive");
					tabNavs[j].classList.remove("active");
					tabPanes[j].classList.remove("active");
				}
				// maxHeightMenuPane()
			};

		});

	}

}
var topMenutabNavs = document.querySelectorAll(".topMenu-tab");
var topMenutabPanes = document.querySelectorAll(".topMenu-pane");
var departmentMenu = document.querySelector(".department__menu");
let searchHeaderWrap = document.querySelector(".search-header__wrap");
var topMenuOverlayBg = document.querySelector(".topMenu__overlay__bg");
var topMenuOverlayBgWhite = document.querySelector(".topMenu__overlay__bg--white");

if (topMenutabNavs !== null & topMenutabPanes !== null) {
	topMenutabHover()
}
function topMenuNotHover() {
	if (topMenutabNavs !== null & topMenutabPanes !== null) {
		// bodyYesScroll()
		topMenuOverlayBg.classList.remove("active");
		topMenuOverlayBgWhite.classList.remove("active");
		for (var i = 0; i < topMenutabNavs.length; i++) {
			topMenutabNavs[i].classList.remove("active");
			topMenutabNavs[i].classList.remove("notActive");
		}
		for (var i = 0; i < topMenutabPanes.length; i++) {
			topMenutabPanes[i].classList.remove("topMenu__overlay--active");
			topMenutabNavs[i].classList.remove("notActive");
		}
	}
}

function topMenutabHover() {
	for (var i = 0; i < topMenutabNavs.length; i++) {
		var delayTopMenutabNavs;
		topMenutabNavs[i].addEventListener("mouseover", function (e) {
			e.preventDefault();
			NotHover();
			// bodyNoScroll()

			var activeTabAttr = e.target.getAttribute("data-tab");
			var activeTab = e.target;
			delayTopMenutabNavs = setTimeout(function () {
				for (var j = 0; j < topMenutabNavs.length; j++) {
					var contentAttr = topMenutabPanes[j].getAttribute("data-tab-content");

					if (activeTabAttr === contentAttr) {
						searchHeaderWrap.classList.remove("active");
						topMenutabNavs[j].classList.add("active");
						topMenutabPanes[j].classList.add("topMenu__overlay--active");
						topMenuOverlayBg.classList.add("active");
						topMenuOverlayBgWhite.classList.add("active");
						departmentMenu.classList.remove("department__menu--active")
						// topMenutabNavs[j].classList.remove("notActive");
						// topMenutabPanes[j].classList.remove("topMenu__overlay--active");
					} else {
						// topMenutabNavs[j].classList.add("notActive");
						// topMenutabPanes[j].classList.add("notActive");
						topMenutabNavs[j].classList.remove("active");
						topMenutabPanes[j].classList.remove("topMenu__overlay--active");

					}
					maxHeightMenuPane()
					bodyNoScroll()
				};
			}, 200);

		});
		topMenutabNavs[i].addEventListener("mouseout", function (e) {
			e.preventDefault();
			window.clearTimeout(delayTopMenutabNavs);
		});
	}
}

function maxHeightMenuPane() {
	var heights = $(".topMenu__overlay.topMenu-pane" + '.topMenu__overlay--active' + " .topMenu__overlay--list__wrap .topMenu__overlay--list").map(function () {
		var f = $(this).height();
		// console.log(f)
		return $(this).height();

	}).get();
	// var heights = $(".topMenu__overlay.topMenu-pane.topMenu__overlay--active .topMenu__overlay--list__wrap .topMenu__overlay--list").map().height()
	//  var heights = $(".topMenu__overlay.topMenu-pane.topMenu__overlay--active .topMenu__overlay--list__wrap").height()

	maxHeight = Math.max.apply(null, heights);
	// $(".topMenu__overlay__bg--white").height(heights + 200);
	$(".topMenu__overlay__bg--white").height(maxHeight + $('.section__topMenu').height() + $('.section__header').height() + 150);

}
maxHeightMenuPane();
$(window).on('resize', function () {
	maxHeightMenuPane();
})