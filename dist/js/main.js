/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/period-select/period-select.js":
/*!**************************************************************!*\
  !*** ./src/blocks/components/period-select/period-select.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_select2_dist_js_select2_full_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../node_modules/select2/dist/js/select2.full.min.js */ "./node_modules/select2/dist/js/select2.full.min.js");
/* harmony import */ var _node_modules_select2_dist_js_select2_full_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_select2_dist_js_select2_full_min_js__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', function () {
  console.log("привет");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-example-responsive').select2({
    theme: "custom-theme",
    language: 'ru',
    minimumResultsForSearch: Infinity,
    dropdownAutoWidth: true
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-example-responsive').select2({
    theme: "custom-theme",
    language: 'ru',
    minimumResultsForSearch: Infinity
    // placeholder: 'Select an option'
  });
});

/***/ }),

/***/ "./src/blocks/modules/academic-slider/academic-slider.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/academic-slider/academic-slider.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


swiper__WEBPACK_IMPORTED_MODULE_1__.Swiper.use([swiper__WEBPACK_IMPORTED_MODULE_1__.Parallax, swiper__WEBPACK_IMPORTED_MODULE_1__.Mousewheel, swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_1__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Controller, swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_1__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_1__.Thumbs]);
var academicList;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-academic__list').each(function () {
  var _Swiper;
  var slider = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  var academicList = new swiper__WEBPACK_IMPORTED_MODULE_1__.Swiper(slider[0], (_Swiper = {
    // watchOverflow: true,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
    // preventInteractionOnTransition: true,
    slidesPerView: 1.5,
    spaceBetween: 16,
    loop: false,
    pagination: false,
    autoHeight: true,
    navigation: {
      nextEl: slider.find('.swiper-button-next')[0],
      prevEl: slider.find('.swiper-button-prev')[0]
    }
  }, _defineProperty(_Swiper, "pagination", {
    el: slider.find('.swiper-pagination')[0],
    type: 'bullets',
    clickable: true
  }), _defineProperty(_Swiper, "breakpoints", {
    // when window width is >= 480px
    1200: {
      slidesPerView: 4,
      spaceBetween: 32
    },
    992: {
      slidesPerView: 3.5,
      spaceBetween: 24
    },
    576: {
      slidesPerView: 2.5,
      spaceBetween: 24
    }
  }), _Swiper));
});

/***/ }),

/***/ "./src/blocks/modules/declaration/declaration.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/declaration/declaration.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('load', function () {
  console.log("привет");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.declaration__button__one').click(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text() == 'читать объявление полностью') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text('скрыть');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text('читать объявление полностью');
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find(".block__textTwo__hidden").toggle();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find(".declaration__button__two").toggle();
    var btnTwo = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find(".declaration__button__two");
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(btnTwo).text() == 'читать объявление полностью') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(btnTwo).text('скрыть');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(btnTwo).text('читать объявление полностью');
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.declaration__button__two').click(function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text() == 'читать объявление полностью') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text('скрыть');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text('читать объявление полностью');
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find(".block__textTwo__hidden").toggle();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find(".declaration__button__one").toggle();
    var btnOne = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().find(".declaration__button__one");
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(btnOne).text() == 'читать объявление полностью') {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(btnOne).text('скрыть');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(btnOne).text('читать объявление полностью');
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/main-slider/main-slider.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/main-slider/main-slider.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");


swiper__WEBPACK_IMPORTED_MODULE_1__.Swiper.use([swiper__WEBPACK_IMPORTED_MODULE_1__.Parallax, swiper__WEBPACK_IMPORTED_MODULE_1__.Mousewheel, swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_1__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Controller, swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_1__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_1__.Thumbs]);
var mainSlider;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-main__slider').each(function () {
  var slider = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  var mainSlider = new swiper__WEBPACK_IMPORTED_MODULE_1__.Swiper(slider[0], {
    // watchOverflow: true,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
    // preventInteractionOnTransition: true,
    slidesPerView: 1,
    navigation: {
      nextEl: slider.find('.swiper-button-next')[0],
      prevEl: slider.find('.swiper-button-prev')[0]
    },
    // thumbs: {
    // 		swiper: galleryThumbs
    // },
    pagination: {
      el: slider.find('.swiper-pagination')[0],
      type: 'bullets',
      clickable: true
    }
    // breakpoints: {
    //     // when window width is >= 480px
    //     992: {
    //         slidesPerView: 2.2,
    //         spaceBetween: 30
    //     },
    // }
  });
});

/***/ }),

/***/ "./src/blocks/modules/seminars-slider/seminars-slider.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/seminars-slider/seminars-slider.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


swiper__WEBPACK_IMPORTED_MODULE_1__.Swiper.use([swiper__WEBPACK_IMPORTED_MODULE_1__.Parallax, swiper__WEBPACK_IMPORTED_MODULE_1__.Mousewheel, swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_1__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_1__.Controller, swiper__WEBPACK_IMPORTED_MODULE_1__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_1__.FreeMode, swiper__WEBPACK_IMPORTED_MODULE_1__.Thumbs]);
var seminarsSlider;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-seminars').each(function () {
  var _Swiper;
  var slider = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  var seminarsSlider = new swiper__WEBPACK_IMPORTED_MODULE_1__.Swiper(slider[0], (_Swiper = {
    // watchOverflow: true,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
    // preventInteractionOnTransition: true,
    slidesPerView: 1.5,
    spaceBetween: 16,
    loop: false,
    pagination: false,
    autoHeight: true,
    navigation: {
      nextEl: slider.find('.swiper-button-next')[0],
      prevEl: slider.find('.swiper-button-prev')[0]
    }
  }, _defineProperty(_Swiper, "pagination", {
    el: slider.find('.swiper-pagination')[0],
    type: 'bullets',
    clickable: true
  }), _defineProperty(_Swiper, "breakpoints", {
    // when window width is >= 480px
    1200: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 24
    },
    576: {
      slidesPerView: 2.5,
      spaceBetween: 24
    }
  }), _Swiper));
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_components_period_select_period_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../blocks/components/period-select/period-select */ "./src/blocks/components/period-select/period-select.js");


/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_declaration_declaration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/declaration/declaration */ "./src/blocks/modules/declaration/declaration.js");
/* harmony import */ var _modules_main_slider_main_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/main-slider/main-slider */ "./src/blocks/modules/main-slider/main-slider.js");
/* harmony import */ var _modules_academic_slider_academic_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/academic-slider/academic-slider */ "./src/blocks/modules/academic-slider/academic-slider.js");
/* harmony import */ var _modules_seminars_slider_seminars_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/seminars-slider/seminars-slider */ "./src/blocks/modules/seminars-slider/seminars-slider.js");







/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_pug"] = self["webpackChunkgulp_pug"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map