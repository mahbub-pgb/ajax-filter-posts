/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/grid-style/block.json":
/*!***********************************!*\
  !*** ./src/grid-style/block.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/grid-style","version":"0.1.0","title":"Grid Style","category":"grid","icon":"grid-view","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false,"color":{"background":true,"text":true,"gradients":true,"link":true},"spacing":{"padding":true,"margin":true,"blockGap":true},"typography":{"fontSize":true,"lineHeight":true,"fontWeight":true,"fontStyle":true,"textTransform":true,"letterSpacing":true},"border":{"color":true,"radius":true,"style":true,"width":true},"shadow":true,"align":true,"alignWide":true},"attributes":{"sectionTitle":{"type":"string","default":"Section Title"},"titleColor":{"type":"string","default":"#000000"},"titleFontSize":{"type":"number","default":24},"titleFontWeight":{"type":"string","default":"bold"},"backgroundColor":{"type":"string","default":""},"textColor":{"type":"string","default":""},"borderColor":{"type":"string","default":""},"borderWidth":{"type":"number","default":1},"borderStyle":{"type":"string","default":"solid"},"borderRadius":{"type":"number","default":0},"paddingTop":{"type":"number","default":2},"paddingRight":{"type":"number","default":2},"paddingBottom":{"type":"number","default":2},"paddingLeft":{"type":"number","default":2},"marginTop":{"type":"number","default":0},"marginBottom":{"type":"number","default":0},"boxShadow":{"type":"string","default":""},"alignment":{"type":"string","default":"left"}},"textdomain":"grid-style","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ }),

/***/ "./src/grid-style/edit.js":
/*!********************************!*\
  !*** ./src/grid-style/edit.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/grid-style/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Edit({
  attributes,
  setAttributes
}) {
  const {
    sectionTitle,
    titleColor,
    titleFontSize,
    titleFontWeight,
    backgroundColor,
    textColor,
    borderColor,
    borderWidth,
    borderStyle,
    borderRadius,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginBottom,
    boxShadow,
    alignment
  } = attributes;

  // Build inline styles
  const sectionStyles = {
    backgroundColor: backgroundColor || undefined,
    color: textColor || undefined,
    borderColor: borderColor || undefined,
    borderWidth: borderWidth ? `${borderWidth}px` : undefined,
    borderStyle: borderStyle || undefined,
    borderRadius: borderRadius ? `${borderRadius}px` : undefined,
    paddingTop: paddingTop ? `${paddingTop}px` : undefined,
    paddingRight: paddingRight ? `${paddingRight}px` : undefined,
    paddingBottom: paddingBottom ? `${paddingBottom}px` : undefined,
    paddingLeft: paddingLeft ? `${paddingLeft}px` : undefined,
    marginTop: marginTop ? `${marginTop}px` : undefined,
    marginBottom: marginBottom ? `${marginBottom}px` : undefined,
    boxShadow: boxShadow || undefined,
    textAlign: alignment || undefined
  };
  const titleStyles = {
    color: titleColor || undefined,
    fontSize: titleFontSize ? `${titleFontSize}px` : undefined,
    fontWeight: titleFontWeight || undefined
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentToolbar, {
        value: alignment,
        onChange: value => setAttributes({
          alignment: value
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content Settings', 'grid-style'),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Section Title', 'grid-style'),
          value: sectionTitle,
          onChange: value => setAttributes({
            sectionTitle: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter the title for this section', 'grid-style')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Styling', 'grid-style'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Color', 'grid-style')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
          value: titleColor,
          onChange: value => setAttributes({
            titleColor: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Font Size', 'grid-style'),
          value: titleFontSize,
          onChange: value => setAttributes({
            titleFontSize: value
          }),
          min: 12,
          max: 72,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Font Weight', 'grid-style'),
          value: titleFontWeight,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'grid-style'),
            value: 'normal'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bold', 'grid-style'),
            value: 'bold'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('100 - Thin', 'grid-style'),
            value: '100'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('200 - Extra Light', 'grid-style'),
            value: '200'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('300 - Light', 'grid-style'),
            value: '300'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('400 - Normal', 'grid-style'),
            value: '400'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('500 - Medium', 'grid-style'),
            value: '500'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('600 - Semi Bold', 'grid-style'),
            value: '600'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('700 - Bold', 'grid-style'),
            value: '700'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('800 - Extra Bold', 'grid-style'),
            value: '800'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('900 - Black', 'grid-style'),
            value: '900'
          }],
          onChange: value => setAttributes({
            titleFontWeight: value
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Colors', 'grid-style'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Color', 'grid-style')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
          value: backgroundColor,
          onChange: value => setAttributes({
            backgroundColor: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'grid-style')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
          value: textColor,
          onChange: value => setAttributes({
            textColor: value
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border', 'grid-style'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Color', 'grid-style')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
          value: borderColor,
          onChange: value => setAttributes({
            borderColor: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Width', 'grid-style'),
          value: borderWidth,
          onChange: value => setAttributes({
            borderWidth: value
          }),
          min: 0,
          max: 20,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Style', 'grid-style'),
          value: borderStyle,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Solid', 'grid-style'),
            value: 'solid'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dashed', 'grid-style'),
            value: 'dashed'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dotted', 'grid-style'),
            value: 'dotted'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Double', 'grid-style'),
            value: 'double'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Groove', 'grid-style'),
            value: 'groove'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Ridge', 'grid-style'),
            value: 'ridge'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inset', 'grid-style'),
            value: 'inset'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Outset', 'grid-style'),
            value: 'outset'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'grid-style'),
            value: 'none'
          }],
          onChange: value => setAttributes({
            borderStyle: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Radius', 'grid-style'),
          value: borderRadius,
          onChange: value => setAttributes({
            borderRadius: value
          }),
          min: 0,
          max: 100,
          step: 1
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding', 'grid-style'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding Top', 'grid-style'),
          value: paddingTop,
          onChange: value => setAttributes({
            paddingTop: value
          }),
          min: 0,
          max: 200,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding Right', 'grid-style'),
          value: paddingRight,
          onChange: value => setAttributes({
            paddingRight: value
          }),
          min: 0,
          max: 200,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding Bottom', 'grid-style'),
          value: paddingBottom,
          onChange: value => setAttributes({
            paddingBottom: value
          }),
          min: 0,
          max: 200,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding Left', 'grid-style'),
          value: paddingLeft,
          onChange: value => setAttributes({
            paddingLeft: value
          }),
          min: 0,
          max: 200,
          step: 1
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin', 'grid-style'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin Top', 'grid-style'),
          value: marginTop,
          onChange: value => setAttributes({
            marginTop: value
          }),
          min: 0,
          max: 200,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin Bottom', 'grid-style'),
          value: marginBottom,
          onChange: value => setAttributes({
            marginBottom: value
          }),
          min: 0,
          max: 200,
          step: 1
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Box Shadow', 'grid-style'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow Preset', 'grid-style'),
          value: boxShadow,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'grid-style'),
            value: ''
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Small', 'grid-style'),
            value: '0 2px 4px rgba(0,0,0,0.1)'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Medium', 'grid-style'),
            value: '0 4px 6px rgba(0,0,0,0.1)'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Large', 'grid-style'),
            value: '0 10px 15px rgba(0,0,0,0.1)'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Extra Large', 'grid-style'),
            value: '0 20px 25px rgba(0,0,0,0.15)'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inner', 'grid-style'),
            value: 'inset 0 2px 4px rgba(0,0,0,0.1)'
          }],
          onChange: value => setAttributes({
            boxShadow: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom Shadow', 'grid-style'),
          value: boxShadow,
          onChange: value => setAttributes({
            boxShadow: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter custom CSS box-shadow value', 'grid-style'),
          placeholder: "0 4px 6px rgba(0,0,0,0.1)"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
        className: "grid-style-section",
        style: sectionStyles,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "section-title",
          style: titleStyles,
          children: sectionTitle
        })
      })
    })]
  });
}

/***/ }),

/***/ "./src/grid-style/editor.scss":
/*!************************************!*\
  !*** ./src/grid-style/editor.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/grid-style/index.js":
/*!*********************************!*\
  !*** ./src/grid-style/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/grid-style/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/grid-style/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/grid-style/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/grid-style/style.scss":
/*!***********************************!*\
  !*** ./src/grid-style/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"grid-style/index": 0,
/******/ 			"grid-style/style-index": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkgrid_master"] = globalThis["webpackChunkgrid_master"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["grid-style/style-index"], () => (__webpack_require__("./src/grid-style/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map