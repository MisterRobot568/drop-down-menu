/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/revealer.js":
/*!*************************!*\
  !*** ./src/revealer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// JS class that takes an element class name or ID as an input
class Revealer {
    constructor(elementID) {
        this.element = document.getElementById(elementID);
        this.children = this.element.children;
        // this.element.style.color = 'blue';
        // this.element.style.opacity = 0;
        this.toggleStyles(0);

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        // inside of the event listener, the context of 'this' changes.
        // when the methods are invoked, 'this' might refer to something other
        // than the 'Revealer' instance. To ensure that 'this' refers to the 'Revealer'
        // instance within the listener methods, you can bind them in the constructor
        this.setupEventListeners();
    }

    handleMouseOver() {
        // dynamically create css code here that would reveal the dropdown menu
        console.log('Moused Over');
        this.toggleStyles(1);
    }

    handleMouseOut() {
        console.log('Moused Out');
        this.toggleStyles(0);
        // dynamically create css code here that would hide the dropdown menu
    }

    // next we add an event listener to listen for clicks or hovers. Let's try hovers
    setupEventListeners() {
        this.element.addEventListener('mouseover', this.handleMouseOver);
        this.element.addEventListener('mouseout', this.handleMouseOut);
    }

    toggleStyles(opacity) {
        for (let i = 0; i < this.children.length; i += 1) {
            const child = this.children[i];
            child.style.transition = 'opacity 0.3s ease';
            child.style.opacity = opacity;

            child.style.visibility = opacity === 0 ? 'hidden' : 'visible';
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Revealer);


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _revealer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./revealer.js */ "./src/revealer.js");


const revealerTest = new _revealer_js__WEBPACK_IMPORTED_MODULE_0__["default"]('drop-down-1');
const revealerTest2 = new _revealer_js__WEBPACK_IMPORTED_MODULE_0__["default"]('drop-down-2');
const revealerTest3 = new _revealer_js__WEBPACK_IMPORTED_MODULE_0__["default"]('div');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQy9DeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQzs7QUFFckMseUJBQXlCLG9EQUFRO0FBQ2pDLDBCQUEwQixvREFBUTtBQUNsQywwQkFBMEIsb0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3JldmVhbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEpTIGNsYXNzIHRoYXQgdGFrZXMgYW4gZWxlbWVudCBjbGFzcyBuYW1lIG9yIElEIGFzIGFuIGlucHV0XG5jbGFzcyBSZXZlYWxlciB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudElEKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJRCk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmVsZW1lbnQuY2hpbGRyZW47XG4gICAgICAgIC8vIHRoaXMuZWxlbWVudC5zdHlsZS5jb2xvciA9ICdibHVlJztcbiAgICAgICAgLy8gdGhpcy5lbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLnRvZ2dsZVN0eWxlcygwKTtcblxuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlT3ZlciA9IHRoaXMuaGFuZGxlTW91c2VPdmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlTW91c2VPdXQgPSB0aGlzLmhhbmRsZU1vdXNlT3V0LmJpbmQodGhpcyk7XG4gICAgICAgIC8vIGluc2lkZSBvZiB0aGUgZXZlbnQgbGlzdGVuZXIsIHRoZSBjb250ZXh0IG9mICd0aGlzJyBjaGFuZ2VzLlxuICAgICAgICAvLyB3aGVuIHRoZSBtZXRob2RzIGFyZSBpbnZva2VkLCAndGhpcycgbWlnaHQgcmVmZXIgdG8gc29tZXRoaW5nIG90aGVyXG4gICAgICAgIC8vIHRoYW4gdGhlICdSZXZlYWxlcicgaW5zdGFuY2UuIFRvIGVuc3VyZSB0aGF0ICd0aGlzJyByZWZlcnMgdG8gdGhlICdSZXZlYWxlcidcbiAgICAgICAgLy8gaW5zdGFuY2Ugd2l0aGluIHRoZSBsaXN0ZW5lciBtZXRob2RzLCB5b3UgY2FuIGJpbmQgdGhlbSBpbiB0aGUgY29uc3RydWN0b3JcbiAgICAgICAgdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VPdmVyKCkge1xuICAgICAgICAvLyBkeW5hbWljYWxseSBjcmVhdGUgY3NzIGNvZGUgaGVyZSB0aGF0IHdvdWxkIHJldmVhbCB0aGUgZHJvcGRvd24gbWVudVxuICAgICAgICBjb25zb2xlLmxvZygnTW91c2VkIE92ZXInKTtcbiAgICAgICAgdGhpcy50b2dnbGVTdHlsZXMoMSk7XG4gICAgfVxuXG4gICAgaGFuZGxlTW91c2VPdXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNb3VzZWQgT3V0Jyk7XG4gICAgICAgIHRoaXMudG9nZ2xlU3R5bGVzKDApO1xuICAgICAgICAvLyBkeW5hbWljYWxseSBjcmVhdGUgY3NzIGNvZGUgaGVyZSB0aGF0IHdvdWxkIGhpZGUgdGhlIGRyb3Bkb3duIG1lbnVcbiAgICB9XG5cbiAgICAvLyBuZXh0IHdlIGFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBsaXN0ZW4gZm9yIGNsaWNrcyBvciBob3ZlcnMuIExldCdzIHRyeSBob3ZlcnNcbiAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdGhpcy5oYW5kbGVNb3VzZU92ZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLmhhbmRsZU1vdXNlT3V0KTtcbiAgICB9XG5cbiAgICB0b2dnbGVTdHlsZXMob3BhY2l0eSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNoaWxkLnN0eWxlLnRyYW5zaXRpb24gPSAnb3BhY2l0eSAwLjNzIGVhc2UnO1xuICAgICAgICAgICAgY2hpbGQuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XG5cbiAgICAgICAgICAgIGNoaWxkLnN0eWxlLnZpc2liaWxpdHkgPSBvcGFjaXR5ID09PSAwID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJldmVhbGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUmV2ZWFsZXIgZnJvbSAnLi9yZXZlYWxlci5qcyc7XG5cbmNvbnN0IHJldmVhbGVyVGVzdCA9IG5ldyBSZXZlYWxlcignZHJvcC1kb3duLTEnKTtcbmNvbnN0IHJldmVhbGVyVGVzdDIgPSBuZXcgUmV2ZWFsZXIoJ2Ryb3AtZG93bi0yJyk7XG5jb25zdCByZXZlYWxlclRlc3QzID0gbmV3IFJldmVhbGVyKCdkaXYnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==