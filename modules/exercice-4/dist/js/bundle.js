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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar product_1 = __webpack_require__(/*! ./product */ \"./src/ts/product.ts\");\r\nvar gui_1 = __webpack_require__(/*! ./gui */ \"./src/ts/gui.ts\");\r\nvar cart_1 = __webpack_require__(/*! ./cart */ \"./src/ts/cart.ts\");\r\nvar builder = new gui_1[\"default\"](new cart_1[\"default\"](), new product_1[\"default\"]());\r\n// Initialisation de l'interface graphique.     \r\nbuilder.initialize();\r\n\n\n//# sourceURL=webpack:///./src/ts/app.ts?");

/***/ }),

/***/ "./src/ts/cart.ts":
/*!************************!*\
  !*** ./src/ts/cart.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\n// à exporter...\r\nvar CartManager = /** @class */ (function () {\r\n    function CartManager() {\r\n        this.cart = [];\r\n    }\r\n    CartManager.prototype.getCart = function () {\r\n        return this.cart;\r\n    };\r\n    CartManager.prototype.addItem = function (item) {\r\n        for (var i = 0; i < this.cart.length; i++) {\r\n            if (item === this.cart[i].item) {\r\n                this.cart[i].quantity++;\r\n                return;\r\n            }\r\n        }\r\n        this.cart.push({\r\n            quantity: 1,\r\n            item: item\r\n        });\r\n    };\r\n    CartManager.prototype.removeItem = function (item) {\r\n        for (var i = 0; i < this.cart.length; i++) {\r\n            this.cart.quantity = this.cart.quantity || 0;\r\n            if (item === this.cart[i].item) {\r\n                this.cart[i].quantity--;\r\n                if (this.cart[i].quantity < 1) {\r\n                    this.cart.splice(i, 1);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    return CartManager;\r\n}());\r\nexports[\"default\"] = CartManager;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/ts/cart.ts?");

/***/ }),

/***/ "./src/ts/gui.ts":
/*!***********************!*\
  !*** ./src/ts/gui.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// à exporter...\r\nexports.__esModule = true;\r\nvar GuiBuilder = /** @class */ (function () {\r\n    function GuiBuilder(cartManager, productsRepository) {\r\n        // @ts-ignore\r\n        this.containers = {};\r\n        this.cartManager = cartManager;\r\n        this.productsRepository = productsRepository;\r\n    }\r\n    GuiBuilder.prototype.showProductLine = function (theProduct) {\r\n        var _this = this;\r\n        var line = window.document.createElement(\"p\");\r\n        var product = window.document.createElement(\"span\");\r\n        product.appendChild(window.document.createTextNode(theProduct.name));\r\n        product.appendChild(window.document.createTextNode(\" Prix unitaire : \"));\r\n        product.appendChild(window.document.createTextNode(theProduct.price));\r\n        product.appendChild(window.document.createTextNode(\" Actions : \"));\r\n        line.appendChild(product);\r\n        var actions = window.document.createElement(\"span\");\r\n        var more = window.document.createElement(\"a\");\r\n        more.appendChild(window.document.createTextNode(\"Ajouter [ + ]\"));\r\n        actions.appendChild(more);\r\n        actions.appendChild(window.document.createTextNode(\"  \"));\r\n        var less = window.document.createElement(\"a\");\r\n        less.appendChild(window.document.createTextNode(\"Retirer [ - ]\"));\r\n        actions.appendChild(less);\r\n        actions.appendChild(window.document.createTextNode(\"  \"));\r\n        line.appendChild(actions);\r\n        more.addEventListener(\"click\", function () {\r\n            _this.cartManager.addItem(theProduct);\r\n            _this.showCart();\r\n        });\r\n        less.addEventListener(\"click\", function () {\r\n            _this.cartManager.removeItem(theProduct);\r\n            _this.showCart();\r\n        });\r\n        return line;\r\n    };\r\n    GuiBuilder.prototype.showProducts = function () {\r\n        if (this.containers.products) {\r\n            this.containers.products\r\n                .parentNode\r\n                .removeChild(this.containers.products);\r\n        }\r\n        this.containers.products = window.document.createElement(\"div\");\r\n        var line = window.document.createElement(\"p\");\r\n        line.appendChild(window.document.createTextNode(\"Produits :\"));\r\n        this.containers.products.appendChild(line);\r\n        var products = this.productsRepository.getProducts();\r\n        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {\r\n            var product = products_1[_i];\r\n            var line_1 = this.showProductLine(product);\r\n            this.containers.products.appendChild(line_1);\r\n        }\r\n        window.document.body.appendChild(this.containers.products);\r\n    };\r\n    GuiBuilder.prototype.showCart = function () {\r\n        var _this = this;\r\n        if (this.containers.cart) {\r\n            this.containers.cart\r\n                .parentNode\r\n                .removeChild(this.containers.cart);\r\n        }\r\n        this.containers.cart = window.document.createElement(\"div\");\r\n        this.containers.cart.id = \"cart\";\r\n        var line = window.document.createElement(\"p\");\r\n        line.appendChild(window.document.createTextNode(\"Panier :\"));\r\n        this.containers.cart.appendChild(line);\r\n        var cart = this.cartManager.getCart();\r\n        cart.forEach(function (inCart) {\r\n            var line = window.document.createElement(\"p\");\r\n            var product = window.document.createElement(\"span\");\r\n            product.appendChild(window.document.createTextNode(inCart.item.name));\r\n            product.appendChild(window.document.createTextNode(\" Quantité : \"));\r\n            product.appendChild(window.document.createTextNode(inCart.quantity));\r\n            product.appendChild(window.document.createTextNode(\" Prix total : \"));\r\n            product.appendChild(window.document.createTextNode(String(inCart.item.price * inCart.quantity)));\r\n            line.appendChild(product);\r\n            _this.containers.cart.appendChild(line);\r\n        });\r\n        window.document.body.appendChild(this.containers.cart);\r\n    };\r\n    GuiBuilder.prototype.show = function () {\r\n        this.showProducts();\r\n        this.showCart();\r\n    };\r\n    GuiBuilder.prototype.initialize = function () {\r\n        var _this = this;\r\n        if (window.document.body) {\r\n            this.show();\r\n        }\r\n        else {\r\n            window.document.addEventListener(\"DOMContentLoaded\", function () {\r\n                _this.show();\r\n            });\r\n        }\r\n    };\r\n    return GuiBuilder;\r\n}());\r\nexports[\"default\"] = GuiBuilder;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/ts/gui.ts?");

/***/ }),

/***/ "./src/ts/product.ts":
/*!***************************!*\
  !*** ./src/ts/product.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\n// à exporter...\r\nvar ProductsRepository = /** @class */ (function () {\r\n    function ProductsRepository() {\r\n        this.products = [{\r\n                id: 1,\r\n                name: \"Product 1\",\r\n                price: 100\r\n            }, {\r\n                id: 22,\r\n                name: \"Product 2\",\r\n                price: 140\r\n            }, {\r\n                id: 3,\r\n                name: \"Product 3\",\r\n                price: 125\r\n            }];\r\n    }\r\n    ProductsRepository.prototype.getProduct = function (id) {\r\n        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {\r\n            var product = _a[_i];\r\n            if (id === product.id) {\r\n                return product;\r\n            }\r\n        }\r\n    };\r\n    ProductsRepository.prototype.getProducts = function () {\r\n        return this.products;\r\n    };\r\n    return ProductsRepository;\r\n}());\r\nexports[\"default\"] = ProductsRepository;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/ts/product.ts?");

/***/ })

/******/ });