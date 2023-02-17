
const menuBtn = $(".topMenu__item__department"),
      menu = $(".department__menu");

$(document).click(function (e) {
    if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
			menu.removeClass("department__menu--active");
    };
});
	menuBtn.mouseenter(function () {
		menu.addClass("department__menu--active");
		topMenuNotHover()
		NotHover();
	});
	menu.mouseleave(function () {
		menu.removeClass("department__menu--active");
	});



const topMenu = $(".topMenu__item--owl"),
			topMenuoverlay = $(".topMenu__overlay"),
			topMenuOverlayClose = $(".topMenu__overlay--close");

$(document).click(function (e) {
    if (!topMenuoverlay.is(e.target) && !topMenuoverlay.is(e.target) && topMenuoverlay.has(e.target).length === 0) {
			topMenuoverlay.removeClass("topMenu__overlay--active");
			NotHover();
			topMenuNotHover()
    };
});

topMenuOverlayClose.on("click", function () {
	topMenuoverlay.removeClass("topMenu__overlay--active");
	NotHover();
});



var tabNavs = document.querySelectorAll(".menu-tab");
var tabPanes = document.querySelectorAll(".menu-pane");

if(tabNavs !==null & tabPanes !==null) {
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

		tabNavs[i].addEventListener("mouseover", function(e){
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
			};
		});
	}
}
var topMenutabNavs = document.querySelectorAll(".topMenu-tab");
var topMenutabPanes = document.querySelectorAll(".topMenu-pane");

if(topMenutabNavs !==null & topMenutabPanes !==null) {
	topMenutabHover() 
}
function topMenuNotHover() {
	for (var i = 0; i < topMenutabNavs.length; i++) {
		topMenutabNavs[i].classList.remove("active");
		topMenutabNavs[i].classList.remove("notActive");
	}
	for (var i = 0; i < topMenutabPanes.length; i++) {
		topMenutabPanes[i].classList.remove("active");
		topMenutabPanes[i].classList.remove("notActive");
	}
}
function topMenutabHover() {
	for (var i = 0; i < topMenutabNavs.length; i++) {

		topMenutabNavs[i].addEventListener("mouseover", function(e){
			e.preventDefault();
			var activeTabAttr = e.target.getAttribute("data-tab");

			for (var j = 0; j < topMenutabNavs.length; j++) {
				var contentAttr = topMenutabPanes[j].getAttribute("data-tab-content");

				if (activeTabAttr === contentAttr) {
					topMenutabNavs[j].classList.add("active");
					topMenutabPanes[j].classList.add("topMenu__overlay--active"); 
					// topMenutabNavs[j].classList.remove("notActive");
					// topMenutabPanes[j].classList.remove("topMenu__overlay--active");
				} else {
					// topMenutabNavs[j].classList.add("notActive");
					// topMenutabPanes[j].classList.add("notActive"); 
					topMenutabNavs[j].classList.remove("active");
					topMenutabPanes[j].classList.remove("topMenu__overlay--active");
					
				}
			};
		});
	}
}