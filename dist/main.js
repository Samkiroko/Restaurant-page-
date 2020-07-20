/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return about; });\nfunction about() {\n  const aboutSelected = document.getElementById('about');\n  aboutSelected.classList.add('menu-item-selected');\n\n  const content = document.getElementById('content');\n\n  const aboutContainer = document.createElement('div');\n  aboutContainer.classList.add('inner-content');\n\n  const h1 = document.createElement('h1');\n  h1.textContent = 'About us';\n  aboutContainer.appendChild(h1);\n\n  const aboutText = document.createElement('p');\n  aboutText.textContent = `Wasabi's Sushi Bar serves a wide selection of sushi classics, \n                                such as sashimi, nigiri and maki sushi. In addition, our sushi\n                                chefs exhibit many modern interpretations and innovations of \n                                sushi dishes in our specialty signature rolls. We take pride \n                                and passion in serving this artistic culinary form. The exclusive \n                                use of high quality and fresh ingredients is our top priority.`;\n  aboutText.style.padding = '0 20%';\n  aboutContainer.appendChild(aboutText);\n\n  const img = document.createElement('img');\n  img.src = 'images/kitchen.jpeg';\n  img.classList.add('about-img');\n  aboutContainer.appendChild(img);\n\n  content.appendChild(aboutContainer);\n}\n\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/foodMenu.js":
/*!*************************!*\
  !*** ./src/foodMenu.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return foodMenu; });\nfunction foodMenu() {\n  const products = ['Sushi', 'Sashimi', 'Rolls', 'Sets', 'Drinks', 'Desserts'];\n  const productsUrls = [\n    'images/sushi.jpeg',\n    'images/sashimi.jpeg',\n    'images/rolls.jpeg',\n    'images/sets.jpg',\n    'images/drinks.jpg',\n    'images/dessert.jpeg',\n  ];\n\n  const menuSelected = document.getElementById('menu');\n  menuSelected.classList.add('menu-item-selected');\n\n  const content = document.getElementById('content');\n\n  const menuContainer = document.createElement('div');\n  menuContainer.classList.add('inner-content');\n\n  const h1 = document.createElement('h1');\n  h1.textContent = 'Our Menu';\n  menuContainer.appendChild(h1);\n\n  for (let i = 0; i < products.length; i++) {\n    const productItem = document.createElement('div');\n    productItem.classList.add('product-item');\n\n    const productPicture = document.createElement('div');\n    productPicture.classList.add('product-picture');\n    productPicture.style.backgroundImage = `url('${productsUrls[i]}')`;\n\n    const productName = document.createElement('h2');\n    productName.classList.add('product-name');\n    productName.innerHTML = products[i];\n\n    productItem.appendChild(productPicture);\n    productItem.appendChild(productName);\n    menuContainer.appendChild(productItem);\n  }\n\n  content.appendChild(menuContainer);\n}\n\n\n//# sourceURL=webpack:///./src/foodMenu.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return header; });\nfunction header() {\n  const content = document.getElementById('content');\n\n  const header = document.createElement('div');\n  header.classList.add('header');\n\n  const logo = document.createElement('div');\n  logo.classList.add('logo');\n  header.appendChild(logo);\n\n  const bounce = document.createElement('div');\n  bounce.classList.add('bounce');\n\n  const arrowDown = document.createElement('p');\n  arrowDown.classList.add('arrowDown');\n  bounce.appendChild(arrowDown);\n\n  header.appendChild(bounce);\n\n  content.appendChild(header);\n\n  const nav = document.createElement('nav');\n\n  const menu = document.createElement('ul');\n  menu.classList.add('menu');\n\n  const li1 = document.createElement('li');\n  li1.classList.add('menu-item');\n  li1.id = 'about';\n  li1.textContent = 'About';\n  menu.appendChild(li1);\n\n  const li2 = document.createElement('li');\n  li2.classList.add('menu-item');\n  li2.id = 'menu';\n  li2.textContent = 'Menu';\n  menu.appendChild(li2);\n\n  const li3 = document.createElement('li');\n  li3.classList.add('menu-item');\n  li3.id = 'location';\n  li3.textContent = 'Map';\n  menu.appendChild(li3);\n\n  nav.appendChild(menu);\n\n  content.appendChild(nav);\n}\n\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _foodMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foodMenu.js */ \"./src/foodMenu.js\");\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.js */ \"./src/location.js\");\n\n\n\n\n\nObject(_header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_about_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nfunction clearNavSelection() {\n  document\n    .querySelectorAll('.menu-item')\n    .forEach((menuItem) => menuItem.classList.remove('menu-item-selected'));\n}\n\ndocument.querySelectorAll('.menu-item').forEach((button) =>\n  button.addEventListener('click', function (e) {\n    clearNavSelection();\n    document\n      .getElementById('content')\n      .removeChild(document.querySelector('.inner-content'));\n    switch (e.target.id) {\n      case 'about':\n        Object(_about_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        break;\n      case 'menu':\n        Object(_foodMenu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        break;\n      case 'location':\n        Object(_location_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        break;\n    }\n  })\n);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return location; });\nfunction location() {\n  const locationSelected = document.getElementById('location');\n  locationSelected.classList.add('menu-item-selected');\n\n  const content = document.getElementById('content');\n\n  const locationContainer = document.createElement('div');\n  locationContainer.classList.add('inner-content');\n\n  const h1 = document.createElement('h1');\n  h1.textContent = 'Find us on the map!';\n  locationContainer.appendChild(h1);\n\n  const map = document.createElement('div');\n  map.id = 'map';\n  map.innerHTML =\n    '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.129669844545!2d-94.1660027847306!3d36.06594118010639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c96ed98726d917%3A0xd48b5b4c4cd62b42!2s313%20W%20Dickson%20St%20%23105%2C%20Fayetteville%2C%20AR%2072701!5e0!3m2!1sen!2sus!4v1569348521761!5m2!1sen!2sus\" width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>';\n  locationContainer.appendChild(map);\n\n  const h3 = document.createElement('h3');\n  h3.textContent = 'Hours';\n  locationContainer.appendChild(h3);\n\n  const MTWR = document.createElement('p');\n  MTWR.textContent = 'Monday - Thursday: 11:30am - 9pm';\n  locationContainer.appendChild(MTWR);\n\n  const FS = document.createElement('p');\n  FS.textContent = 'Friday - Saturday: 11:30am - 10pm';\n  locationContainer.appendChild(FS);\n\n  const U = document.createElement('p');\n  U.textContent = 'Sunday: 12pm - 9pm';\n  locationContainer.appendChild(U);\n\n  content.appendChild(locationContainer);\n}\n\n\n//# sourceURL=webpack:///./src/location.js?");

/***/ })

/******/ });