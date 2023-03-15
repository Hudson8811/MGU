const searchBtn = $(".header__other__search "),
			searchClose = $(".search-header__close  "),
      searchOverlay = $(".search-header__overlay"),
      search = $(".search-header ");
const searchCheckboxButtonPage = $(".search-checkbox__button--page "),
			searchCheckboxButtonOverlay = $(".search-checkbox__button--overlay"),
			searchCheckbox = $(".search-checkbox");

// $( "search-checkbox__button--page" ).each(function( index ) {
//   console.log( index + ": " + $( this ).text() );
// });
searchCheckboxButtonPage.on("click", function () {
	searchOverlay.addClass("active");
	searchCheckbox.addClass("active");
	searchCheckboxButtonOverlay.addClass("hidden")
	bodyNoScroll() 
});
searchBtn.on("click", function () {
	searchOverlay.addClass("active");
	bodyNoScroll() 
});
searchClose.on("click", function () {
	searchOverlay.removeClass("active");
	searchCheckbox.removeClass("active");
	searchCheckboxButtonOverlay.removeClass("hidden")
	bodyYesScroll()
});
