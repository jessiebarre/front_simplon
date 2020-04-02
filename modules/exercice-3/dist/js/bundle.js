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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product */ \"./src/js/product.js\");\n/* harmony import */ var _gui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gui */ \"./src/js/gui.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ \"./src/js/cart.js\");\n\r\n\r\n\r\n\r\nconst builder = new _gui__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n  new _cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"](),\r\n  new _product__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n);\r\n      // Initialisation de l'interface graphique.     \r\n  builder.initialize();\r\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/cart.js":
/*!************************!*\
  !*** ./src/js/cart.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CartManager; });\n// à exporter...\r\nclass CartManager {\r\n\r\n    constructor () {\r\n      this.cart = [];\r\n    }\r\n  \r\n    getCart () {\r\n      return this.cart;\r\n    }\r\n  \r\n    addItem (item) {\r\n      for (let i = 0; i < this.cart.length; i++) {\r\n        if (item === this.cart[i].item) {\r\n          this.cart[i].quantity++;\r\n          return;\r\n        }\r\n      }\r\n      this.cart.push({\r\n        quantity: 1,\r\n        item: item\r\n      });\r\n    }\r\n  \r\n    removeItem (item) {\r\n      for (let i = 0; i < this.cart.length; i++) {\r\n        this.cart.quantity = this.cart.quantity || 0;\r\n        if (item === this.cart[i].item) {\r\n          this.cart[i].quantity--;\r\n          if (this.cart[i].quantity < 1) {\r\n            this.cart.splice(i, 1);\r\n          }\r\n        }\r\n      }\r\n    }\r\n  \r\n  };\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/cart.js?");

/***/ }),

/***/ "./src/js/gui.js":
/*!***********************!*\
  !*** ./src/js/gui.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GuiBuilder; });\n// à exporter...\r\nclass GuiBuilder {\r\n\r\n    constructor (cartManager, productsRepository) {\r\n      this.containers = {};\r\n      this.cartManager = cartManager;\r\n      this.productsRepository = productsRepository;\r\n    }\r\n  \r\n    showProductLine (theProduct) {\r\n      const line = window.document.createElement(\"p\");\r\n  \r\n      const product = window.document.createElement(\"span\");\r\n      product.appendChild(\r\n        window.document.createTextNode(theProduct.name)\r\n      );\r\n      product.appendChild(\r\n        window.document.createTextNode(\" Prix unitaire : \")\r\n      );\r\n      product.appendChild(\r\n        window.document.createTextNode(theProduct.price)\r\n      );\r\n      product.appendChild(\r\n        window.document.createTextNode(\" Actions : \")\r\n      );\r\n      line.appendChild(product);\r\n  \r\n      const actions = window.document.createElement(\"span\");\r\n  \r\n      const more = window.document.createElement(\"a\");\r\n      more.appendChild(\r\n        window.document.createTextNode(\"Ajouter [ + ]\")\r\n      );\r\n      actions.appendChild(more);\r\n      actions.appendChild(\r\n        window.document.createTextNode(\"  \")\r\n      );\r\n  \r\n      const less = window.document.createElement(\"a\");\r\n      less.appendChild(\r\n        window.document.createTextNode(\"Retirer [ - ]\")\r\n      );\r\n      actions.appendChild(less);\r\n      actions.appendChild(\r\n        window.document.createTextNode(\"  \")\r\n      );\r\n  \r\n      line.appendChild(actions);\r\n  \r\n      more.addEventListener(\"click\", () => {\r\n        this.cartManager.addItem(theProduct);\r\n        this.showCart();\r\n      });\r\n  \r\n      less.addEventListener(\"click\", () => {\r\n        this.cartManager.removeItem(theProduct);\r\n        this.showCart();\r\n      });\r\n  \r\n      return line;\r\n    }\r\n  \r\n    showProducts () {\r\n      if (this.containers.products) {\r\n        this.containers.products\r\n          .parentNode\r\n          .removeChild(\r\n            this.containers.products\r\n          );\r\n      }\r\n      this.containers.products = window.document.createElement(\"div\");\r\n      const line = window.document.createElement(\"p\");\r\n      line.appendChild(\r\n        window.document.createTextNode(\"Produits :\")\r\n      );\r\n      this.containers.products.appendChild(line);\r\n  \r\n      const products = this.productsRepository.getProducts();\r\n      for (const product of products) {\r\n        const line = this.showProductLine(product);\r\n        this.containers.products.appendChild(line);\r\n      }\r\n  \r\n      window.document.body.appendChild(this.containers.products);\r\n    }\r\n  \r\n    showCart () {\r\n      if (this.containers.cart) {\r\n        this.containers.cart\r\n          .parentNode\r\n          .removeChild(\r\n            this.containers.cart\r\n          );\r\n      }\r\n      this.containers.cart = window.document.createElement(\"div\");\r\n      this.containers.cart.id = \"cart\";\r\n      const line = window.document.createElement(\"p\");\r\n      line.appendChild(\r\n        window.document.createTextNode(\"Panier :\")\r\n      );\r\n      this.containers.cart.appendChild(line);\r\n  \r\n      const cart = this.cartManager.getCart();\r\n      cart.forEach((inCart) => {\r\n        const line = window.document.createElement(\"p\");\r\n  \r\n        const product = window.document.createElement(\"span\");\r\n        product.appendChild(\r\n          window.document.createTextNode(inCart.item.name)\r\n        );\r\n        product.appendChild(\r\n          window.document.createTextNode(\" Quantité : \")\r\n        );\r\n        product.appendChild(\r\n          window.document.createTextNode(inCart.quantity)\r\n        );\r\n        product.appendChild(\r\n          window.document.createTextNode(\" Prix total : \")\r\n        );\r\n        product.appendChild(\r\n          window.document.createTextNode(inCart.item.price * inCart.quantity)\r\n        );\r\n  \r\n        line.appendChild(product);\r\n        this.containers.cart.appendChild(line);\r\n      });\r\n  \r\n      window.document.body.appendChild(this.containers.cart);\r\n    }\r\n  \r\n    show() {\r\n      this.showProducts();\r\n      this.showCart();\r\n    }\r\n  \r\n    initialize () {\r\n      if (window.document.body) {\r\n        this.show();\r\n      } else {\r\n        window.document.addEventListener(\"DOMContentLoaded\", () => {\r\n          this.show();\r\n        });\r\n      }\r\n    }\r\n  };\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/gui.js?");

/***/ }),

/***/ "./src/js/product.js":
/*!***************************!*\
  !*** ./src/js/product.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductsRepository; });\n\r\n// à exporter...\r\nclass ProductsRepository {\r\n\r\n    constructor () {\r\n      this.products = [{\r\n        id: 1,\r\n        name: \"Product 1\",\r\n        price: 100\r\n      }, {\r\n        id: 22,\r\n        name: \"Product 2\",\r\n        price: 140\r\n      }, {\r\n        id: 3,\r\n        name: \"Product 3\",\r\n        price: 125\r\n      }];\r\n    }\r\n  \r\n    getProduct (id) {\r\n      for (const product of this.products) {\r\n        if (id === product.id) {\r\n          return product;\r\n        }\r\n      }\r\n    }\r\n  \r\n    getProducts () {\r\n      return this.products;\r\n    }\r\n  };\r\n\n\n//# sourceURL=webpack:///./src/js/product.js?");

/***/ })

/******/ });