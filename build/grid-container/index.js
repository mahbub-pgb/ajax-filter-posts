/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/grid-container/block.json":
/*!***************************************!*\
  !*** ./src/grid-container/block.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/grid-container","version":"0.1.0","title":"Grid Container","category":"grid","icon":"grid-view","description":"Create responsive grid layouts with multiple column options.","supports":{"html":false,"align":["wide","full"],"color":{"background":true,"text":true},"spacing":{"padding":true,"margin":true}},"attributes":{"layoutDirection":{"type":"string","default":"horizontal"},"layoutDirectionTablet":{"type":"string","default":"horizontal"},"layoutDirectionMobile":{"type":"string","default":"vertical"},"columns":{"type":"number","default":3},"columnsTablet":{"type":"number","default":2},"columnsMobile":{"type":"number","default":1},"columnGap":{"type":"number","default":20},"rowGap":{"type":"number","default":20},"alignItems":{"type":"string","default":"stretch"},"justifyItems":{"type":"string","default":"stretch"},"backgroundColor":{"type":"string","default":""},"paddingTop":{"type":"number","default":0},"paddingRight":{"type":"number","default":0},"paddingBottom":{"type":"number","default":0},"paddingLeft":{"type":"number","default":0},"marginTop":{"type":"number","default":0},"marginRight":{"type":"number","default":0},"marginBottom":{"type":"number","default":0},"marginLeft":{"type":"number","default":0},"borderColor":{"type":"string","default":""},"borderWidth":{"type":"number","default":0},"borderStyle":{"type":"string","default":"solid"},"borderRadius":{"type":"number","default":0},"boxShadow":{"type":"string","default":""}},"providesContext":{"gridContainer/columns":"columns"},"textdomain":"grid-master","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ }),

/***/ "./src/grid-container/edit.js":
/*!************************************!*\
  !*** ./src/grid-container/edit.js ***!
  \************************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/grid-container/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Edit({
  attributes,
  setAttributes
}) {
  const {
    layoutDirection,
    layoutDirectionTablet,
    layoutDirectionMobile,
    columns,
    columnsTablet,
    columnsMobile,
    columnGap,
    rowGap,
    alignItems,
    justifyItems,
    backgroundColor,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    borderColor,
    borderWidth,
    borderStyle,
    borderRadius,
    boxShadow
  } = attributes;

  // Reset functions
  const resetLayout = () => {
    setAttributes({
      layoutDirection: 'horizontal',
      layoutDirectionTablet: 'horizontal',
      layoutDirectionMobile: 'vertical',
      columns: 3,
      columnsTablet: 2,
      columnsMobile: 1,
      columnGap: 20,
      rowGap: 20,
      alignItems: 'stretch',
      justifyItems: 'stretch'
    });
  };
  const resetSpacing = () => {
    setAttributes({
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0
    });
  };
  const resetBorder = () => {
    setAttributes({
      borderColor: '',
      borderWidth: 0,
      borderStyle: 'solid',
      borderRadius: 0
    });
  };
  const resetAll = () => {
    resetLayout();
    resetSpacing();
    resetBorder();
    setAttributes({
      backgroundColor: '',
      boxShadow: ''
    });
  };

  // Build inline styles
  const containerStyles = {
    display: layoutDirection === 'vertical' ? 'flex' : 'grid',
    flexDirection: layoutDirection === 'vertical' ? 'column' : undefined,
    gridTemplateColumns: layoutDirection === 'horizontal' ? `repeat(${columns}, 1fr)` : undefined,
    columnGap: columnGap ? `${columnGap}px` : undefined,
    rowGap: rowGap ? `${rowGap}px` : undefined,
    gap: layoutDirection === 'vertical' ? `${rowGap}px` : undefined,
    alignItems: alignItems || undefined,
    justifyItems: justifyItems || undefined,
    backgroundColor: backgroundColor || undefined,
    paddingTop: paddingTop ? `${paddingTop}px` : undefined,
    paddingRight: paddingRight ? `${paddingRight}px` : undefined,
    paddingBottom: paddingBottom ? `${paddingBottom}px` : undefined,
    paddingLeft: paddingLeft ? `${paddingLeft}px` : undefined,
    marginTop: marginTop ? `${marginTop}px` : undefined,
    marginRight: marginRight ? `${marginRight}px` : undefined,
    marginBottom: marginBottom ? `${marginBottom}px` : undefined,
    marginLeft: marginLeft ? `${marginLeft}px` : undefined,
    borderColor: borderColor || undefined,
    borderWidth: borderWidth ? `${borderWidth}px` : undefined,
    borderStyle: borderStyle || undefined,
    borderRadius: borderRadius ? `${borderRadius}px` : undefined,
    boxShadow: boxShadow || undefined
  };
  const ALLOWED_BLOCKS = ['core/paragraph', 'core/heading', 'core/image', 'core/button', 'core/group'];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          isDestructive: true,
          variant: "secondary",
          onClick: resetAll,
          style: {
            width: '100%'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Reset All Settings', 'grid-master')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Grid Layout', 'grid-master'),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout Settings', 'grid-master')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isSmall: true,
            variant: "secondary",
            onClick: resetLayout,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Reset', 'grid-master')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
          className: "grid-responsive-tabs",
          activeClass: "is-active",
          tabs: [{
            name: 'desktop',
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Desktop', 'grid-master'),
            className: 'tab-desktop'
          }, {
            name: 'tablet',
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tablet', 'grid-master'),
            className: 'tab-tablet'
          }, {
            name: 'mobile',
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Mobile', 'grid-master'),
            className: 'tab-mobile'
          }],
          children: tab => {
            if (tab.name === 'desktop') {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout Direction', 'grid-master'),
                  value: layoutDirection,
                  options: [{
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Horizontal (Side by Side)', 'grid-master'),
                    value: 'horizontal'
                  }, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical (Stack)', 'grid-master'),
                    value: 'vertical'
                  }],
                  onChange: value => setAttributes({
                    layoutDirection: value
                  }),
                  help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Choose how content is displayed', 'grid-master')
                }), layoutDirection === 'horizontal' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                    style: {
                      marginBottom: '16px',
                      marginTop: '16px'
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
                      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Column Presets', 'grid-master')
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
                    style: {
                      marginBottom: '16px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px'
                    },
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                      variant: columns === 1 ? 'primary' : 'secondary',
                      onClick: () => setAttributes({
                        columns: 1
                      }),
                      children: "1"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                      variant: columns === 2 ? 'primary' : 'secondary',
                      onClick: () => setAttributes({
                        columns: 2
                      }),
                      children: "2"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                      variant: columns === 3 ? 'primary' : 'secondary',
                      onClick: () => setAttributes({
                        columns: 3
                      }),
                      children: "3"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                      variant: columns === 4 ? 'primary' : 'secondary',
                      onClick: () => setAttributes({
                        columns: 4
                      }),
                      children: "4"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                      variant: columns === 5 ? 'primary' : 'secondary',
                      onClick: () => setAttributes({
                        columns: 5
                      }),
                      children: "5"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                      variant: columns === 6 ? 'primary' : 'secondary',
                      onClick: () => setAttributes({
                        columns: 6
                      }),
                      children: "6"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Columns (Desktop)', 'grid-master'),
                    value: columns,
                    onChange: value => setAttributes({
                      columns: value
                    }),
                    min: 1,
                    max: 12,
                    step: 1
                  })]
                })]
              });
            } else if (tab.name === 'tablet') {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout Direction', 'grid-master'),
                  value: layoutDirectionTablet,
                  options: [{
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Horizontal (Side by Side)', 'grid-master'),
                    value: 'horizontal'
                  }, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical (Stack)', 'grid-master'),
                    value: 'vertical'
                  }],
                  onChange: value => setAttributes({
                    layoutDirectionTablet: value
                  }),
                  help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout for tablets (768px - 1024px)', 'grid-master')
                }), layoutDirectionTablet === 'horizontal' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Columns (Tablet)', 'grid-master'),
                  value: columnsTablet,
                  onChange: value => setAttributes({
                    columnsTablet: value
                  }),
                  min: 1,
                  max: 6,
                  step: 1,
                  help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Applies to screens 768px - 1024px', 'grid-master')
                })]
              });
            } else {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout Direction', 'grid-master'),
                  value: layoutDirectionMobile,
                  options: [{
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Horizontal (Side by Side)', 'grid-master'),
                    value: 'horizontal'
                  }, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical (Stack)', 'grid-master'),
                    value: 'vertical'
                  }],
                  onChange: value => setAttributes({
                    layoutDirectionMobile: value
                  }),
                  help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Layout for mobile (below 768px)', 'grid-master')
                }), layoutDirectionMobile === 'horizontal' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Columns (Mobile)', 'grid-master'),
                  value: columnsMobile,
                  onChange: value => setAttributes({
                    columnsMobile: value
                  }),
                  min: 1,
                  max: 3,
                  step: 1,
                  help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Applies to screens below 768px', 'grid-master')
                })]
              });
            }
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Column Gap', 'grid-master'),
          value: columnGap,
          onChange: value => setAttributes({
            columnGap: value
          }),
          min: 0,
          max: 100,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Row Gap', 'grid-master'),
          value: rowGap,
          onChange: value => setAttributes({
            rowGap: value
          }),
          min: 0,
          max: 100,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Align Items', 'grid-master'),
          value: alignItems,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stretch', 'grid-master'),
            value: 'stretch'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Start', 'grid-master'),
            value: 'start'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center', 'grid-master'),
            value: 'center'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('End', 'grid-master'),
            value: 'end'
          }],
          onChange: value => setAttributes({
            alignItems: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical alignment of grid items', 'grid-master')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Justify Items', 'grid-master'),
          value: justifyItems,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stretch', 'grid-master'),
            value: 'stretch'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Start', 'grid-master'),
            value: 'start'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center', 'grid-master'),
            value: 'center'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('End', 'grid-master'),
            value: 'end'
          }],
          onChange: value => setAttributes({
            justifyItems: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Horizontal alignment of grid items', 'grid-master')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Color', 'grid-master'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
          value: backgroundColor,
          onChange: value => setAttributes({
            backgroundColor: value
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Spacing', 'grid-master'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding & Margin', 'grid-master')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isSmall: true,
            variant: "secondary",
            onClick: resetSpacing,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Reset', 'grid-master')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding', 'grid-master')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top', 'grid-master'),
          value: paddingTop,
          onChange: value => setAttributes({
            paddingTop: value
          }),
          min: 0,
          max: 200
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'grid-master'),
          value: paddingRight,
          onChange: value => setAttributes({
            paddingRight: value
          }),
          min: 0,
          max: 200
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom', 'grid-master'),
          value: paddingBottom,
          onChange: value => setAttributes({
            paddingBottom: value
          }),
          min: 0,
          max: 200
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'grid-master'),
          value: paddingLeft,
          onChange: value => setAttributes({
            paddingLeft: value
          }),
          min: 0,
          max: 200
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin', 'grid-master')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top', 'grid-master'),
          value: marginTop,
          onChange: value => setAttributes({
            marginTop: value
          }),
          min: 0,
          max: 200
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'grid-master'),
          value: marginRight,
          onChange: value => setAttributes({
            marginRight: value
          }),
          min: 0,
          max: 200
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom', 'grid-master'),
          value: marginBottom,
          onChange: value => setAttributes({
            marginBottom: value
          }),
          min: 0,
          max: 200
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'grid-master'),
          value: marginLeft,
          onChange: value => setAttributes({
            marginLeft: value
          }),
          min: 0,
          max: 200
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border', 'grid-master'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Settings', 'grid-master')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isSmall: true,
            variant: "secondary",
            onClick: resetBorder,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Reset', 'grid-master')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Color', 'grid-master')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
          value: borderColor,
          onChange: value => setAttributes({
            borderColor: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Width', 'grid-master'),
          value: borderWidth,
          onChange: value => setAttributes({
            borderWidth: value
          }),
          min: 0,
          max: 20
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Style', 'grid-master'),
          value: borderStyle,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Solid', 'grid-master'),
            value: 'solid'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dashed', 'grid-master'),
            value: 'dashed'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dotted', 'grid-master'),
            value: 'dotted'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Double', 'grid-master'),
            value: 'double'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'grid-master'),
            value: 'none'
          }],
          onChange: value => setAttributes({
            borderStyle: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border Radius', 'grid-master'),
          value: borderRadius,
          onChange: value => setAttributes({
            borderRadius: value
          }),
          min: 0,
          max: 100
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Box Shadow', 'grid-master'),
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Shadow Preset', 'grid-master'),
          value: boxShadow,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('None', 'grid-master'),
            value: ''
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Small', 'grid-master'),
            value: '0 2px 4px rgba(0,0,0,0.1)'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Medium', 'grid-master'),
            value: '0 4px 6px rgba(0,0,0,0.1)'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Large', 'grid-master'),
            value: '0 10px 15px rgba(0,0,0,0.1)'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Extra Large', 'grid-master'),
            value: '0 20px 25px rgba(0,0,0,0.15)'
          }],
          onChange: value => setAttributes({
            boxShadow: value
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "grid-container",
        style: containerStyles,
        "data-layout-direction": layoutDirection,
        "data-layout-direction-tablet": layoutDirectionTablet,
        "data-layout-direction-mobile": layoutDirectionMobile,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
          allowedBlocks: ALLOWED_BLOCKS,
          template: [['core/paragraph', {
            placeholder: 'Add content here...'
          }], ['core/paragraph', {
            placeholder: 'Add content here...'
          }], ['core/paragraph', {
            placeholder: 'Add content here...'
          }]]
        })
      })
    })]
  });
}

/***/ }),

/***/ "./src/grid-container/editor.scss":
/*!****************************************!*\
  !*** ./src/grid-container/editor.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/grid-container/index.js":
/*!*************************************!*\
  !*** ./src/grid-container/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/grid-container/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/grid-container/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/grid-container/block.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: ({
    attributes
  }) => {
    const {
      layoutDirection,
      layoutDirectionTablet,
      layoutDirectionMobile,
      columns,
      columnsTablet,
      columnsMobile,
      columnGap,
      rowGap,
      alignItems,
      justifyItems,
      backgroundColor,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      borderColor,
      borderWidth,
      borderStyle,
      borderRadius,
      boxShadow
    } = attributes;
    const containerStyles = {
      display: layoutDirection === 'vertical' ? 'flex' : 'grid',
      flexDirection: layoutDirection === 'vertical' ? 'column' : undefined,
      gridTemplateColumns: layoutDirection === 'horizontal' ? `repeat(${columns}, 1fr)` : undefined,
      columnGap: columnGap ? `${columnGap}px` : undefined,
      rowGap: rowGap ? `${rowGap}px` : undefined,
      gap: layoutDirection === 'vertical' ? `${rowGap}px` : undefined,
      alignItems: alignItems || undefined,
      justifyItems: justifyItems || undefined,
      backgroundColor: backgroundColor || undefined,
      paddingTop: paddingTop ? `${paddingTop}px` : undefined,
      paddingRight: paddingRight ? `${paddingRight}px` : undefined,
      paddingBottom: paddingBottom ? `${paddingBottom}px` : undefined,
      paddingLeft: paddingLeft ? `${paddingLeft}px` : undefined,
      marginTop: marginTop ? `${marginTop}px` : undefined,
      marginRight: marginRight ? `${marginRight}px` : undefined,
      marginBottom: marginBottom ? `${marginBottom}px` : undefined,
      marginLeft: marginLeft ? `${marginLeft}px` : undefined,
      borderColor: borderColor || undefined,
      borderWidth: borderWidth ? `${borderWidth}px` : undefined,
      borderStyle: borderStyle || undefined,
      borderRadius: borderRadius ? `${borderRadius}px` : undefined,
      boxShadow: boxShadow || undefined
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "grid-container",
      style: containerStyles,
      "data-layout-direction": layoutDirection,
      "data-layout-direction-tablet": layoutDirectionTablet,
      "data-layout-direction-mobile": layoutDirectionMobile,
      "data-columns": columns,
      "data-columns-tablet": columnsTablet,
      "data-columns-mobile": columnsMobile,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, {})
    });
  }
});

/***/ }),

/***/ "./src/grid-container/style.scss":
/*!***************************************!*\
  !*** ./src/grid-container/style.scss ***!
  \***************************************/
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
/******/ 			"grid-container/index": 0,
/******/ 			"grid-container/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["grid-container/style-index"], () => (__webpack_require__("./src/grid-container/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map