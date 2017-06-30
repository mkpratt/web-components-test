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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cb_menu_script_js__ = __webpack_require__(1);


// Menu


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_html__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__template_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__template_html__);




const ATTR_MENU_OPEN = 'menu-open';

class CBMenu extends HTMLElement {

    constructor() {
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = __WEBPACK_IMPORTED_MODULE_0__template_html___default.a;
    }

    connectedCallback() {
        this._addButtonListeners();
    }

    static get observedAttributes() {
        return [ATTR_MENU_OPEN];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
            case ATTR_MENU_OPEN:
                this._applyMenuOpen();
                return;
        }
    }

    get menuOpen() {
        return this.hasAttribute(ATTR_MENU_OPEN);
    }

    set menuOpen(val) {
        if (val) {
            this.setAttribute(ATTR_MENU_OPEN, '');
        } else {
            this.removeAttribute(ATTR_MENU_OPEN);
        }
    }

    _addButtonListeners() {
        let menuBtn = this.shadowRoot.querySelector('#cb-sandwich');
        menuBtn.addEventListener('click', () => this._toggleMenu());
    }

    _applyMenuOpen() {
        let menu = this.shadowRoot.querySelector("#cb-menu");
        this.shadowRoot.querySelector('#cb-sandwich').classList.remove("preload");

        if (this.menuOpen) {
            // Get # of children, set height to menu item pixel height * # of children
            // if # of children > 4, apply more menu item
            let nodes = menu.querySelectorAll('slot')[0].assignedNodes();
            // filter out non-htmlelement nodes
            let filteredNodes = nodes.filter(function (node) { return node instanceof HTMLElement });

            const length = filteredNodes.length;
            //menu.style.maxHeight = length * 24 + 'px';
            //menu.style.maxHeight = menu.scrollHeight + 'px';
            this.shadowRoot.querySelector("#cb-sandwich").classList.add("open");
        } else {
            //menu.style.maxHeight = null;
            this.shadowRoot.querySelector("#cb-sandwich").classList.remove("open");
        }
    }

    _toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }
}

window.customElements.define('cb-menu', CBMenu);
window.CBMenu = CBMenu;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>\n    " + __webpack_require__(3) + "\n</style>\n<div id=\"cb-sandwich\" class=\"preload cb-btn cb-sandwich\">\n    <span class=\"cb-bread\"></span>\n    <span class=\"cb-bread\"></span>\n</div>\n<div id=\"cb-menu\" class=\"cb-menu-item-container\">\n    <!-- Default slot -->\n    <slot class=\"cb-menu-items\"></slot>\n    <div class=\"cb-menu-more\">\n        <!-- if more than 4 menu items, more opens up \n             full page menu with all menu items -->\n        <!-- <slot name=\"more\"></slot>-->\n    </div>\n</div>\n";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ":host .cb-menu-item-container,:host .cb-menu-item-container ::slotted(*){height:0}:host([menu-open]) .cb-menu-item-container{height:100%}:host([menu-open]) .cb-menu-item-container ::slotted(*){height:auto!important;display:block!important;text-align:left!important;padding:18px 18px 18px 50px!important;width:100%;position:static;box-sizing:border-box;line-height:12px!important}.cb-btn,.cb-sandwich{cursor:pointer}.cb-sandwich{position:absolute;display:inline-block;z-index:1000}.cb-sandwich .cb-bread{display:block;width:28px;height:3px;background-color:#252525;margin:6px 0;border-radius:2px;-webkit-transition:-webkit-transform .25s cubic-bezier(.4,.01,.165,.99);transition:-webkit-transform .25s cubic-bezier(.4,.01,.165,.99);transition:transform .25s cubic-bezier(.4,.01,.165,.99);transition:transform .25s cubic-bezier(.4,.01,.165,.99),-webkit-transform .25s cubic-bezier(.4,.01,.165,.99)}.cb-sandwich .cb-bread:first-child{-webkit-animation:top-bread-reverse .68s forwards;animation:top-bread-reverse .68s forwards}.cb-sandwich .cb-bread:last-child{-webkit-animation:bottom-bread-reverse .68s forwards;animation:bottom-bread-reverse .68s forwards}.cb-sandwich.open .cb-bread:first-child{-webkit-animation:top-bread .68s forwards;animation:top-bread .68s forwards}.cb-sandwich.open .cb-bread:last-child{-webkit-animation:bottom-bread .68s forwards;animation:bottom-bread .68s forwards}.preload *{-webkit-animation:none!important;-moz-animation:none!important;-ms-animation:none!important;-o-animation:none!important;animation:none!important}.cb-menu-item-container{flex-direction:column;position:absolute;top:0;left:0;width:100%;z-index:100;text-align:center;color:#e8e8e8;-webkit-transition:-webkit-transform .68s cubic-bezier(.4,.01,.165,.99);transition:height .68s cubic-bezier(.4,.01,.165,.99);transition:height .68s cubic-bezier(.4,.01,.165,.99),-webkit-transform .68s cubic-bezier(.4,.01,.165,.99);background:#7b7b7b}.cb-menu-item-container ::slotted(*){cursor:pointer;display:block;overflow:hidden}.cb-menu-item-container ::slotted(:hover){color:red}.cb-menu-item-container .cb-menu-more{display:none}@keyframes top-bread{33%{transform:rotate(90deg) translate(8px,-5px)}66%{transform:rotate(90deg) translate(9px)}to{transform:rotate(135deg) translate(4px,-3px)}}@keyframes bottom-bread{33%{transform:rotate(90deg) translate(-1px,4px)}66%{transform:rotate(90deg) translate(0)}to{transform:rotate(45deg) translate(-3px,-2px)}}@keyframes top-bread-reverse{0%{transform:rotate(135deg) translate(4px,-3px)}50%{transform:rotate(180deg) translateY(-6px)}to{transform:rotate(180deg) translate(0)}}@keyframes bottom-bread-reverse{0%{transform:rotate(45deg) translate(-3px,-2px)}50%{transform:rotate(180deg) translateY(2px)}to{transform:rotate(180deg) translate(0)}}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })
/******/ ]);
//# sourceMappingURL=components.js.map