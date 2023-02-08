
const menuBtn = $(".topMenu__item__department"),
      menu = $(".department__menu");

menuBtn.on("click", function () {
    if ($(this).hasClass("department__menu--active")) {
        $(this).removeClass("department__menu--active");
        menu.slideDown();
    } else {
        $(this).addClass("department__menu--active");
        menu.slideUp();
    }
});

$(document).click(function (e) {
    if (!menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
        menu.slideUp();
        menuBtn.removeClass("department__menu--active");
    };
});




const topMenu = $(".topMenu__item--owl"),
			topMenuoverlay = $(".topMenu__overlay"),
			topMenuOverlayClose = $(".topMenu__overlay--close");

	topMenu.hover(function () {
		topMenuoverlay.addClass("topMenu__overlay--active");
	});

$(document).click(function (e) {
    if (!topMenuoverlay.is(e.target) && !topMenuoverlay.is(e.target) && topMenuoverlay.has(e.target).length === 0) {
			topMenuoverlay.removeClass("topMenu__overlay--active");
			NotHover();
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