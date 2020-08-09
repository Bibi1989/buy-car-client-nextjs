module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/AllCars/AllCars.tsx":
/*!********************************************!*\
  !*** ./src/components/AllCars/AllCars.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_formatPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatPrice */ "./src/utils/formatPrice.ts");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\bibia\\Documents\\Nextjs Projects\\buy-car\\src\\components\\AllCars\\AllCars.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const bmw = "./assets/bmw.jpg";
const toyota = "./assets/toyota.jpg";
const honda = "./assets/honda.jpg";
const lexus = "./assets/lexus.jpg";

const AllCars = ({
  car: {
    _id,
    name,
    model,
    year,
    location,
    color,
    description,
    photo_url,
    price
  }
}) => {
  const {
    push
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const photo = () => {
    const img = photo_url ? photo_url : name === "bmw" ? bmw : name === "toyota" ? toyota : name === "honda" ? honda : lexus;
    return img;
  };

  const handleNav = id => {
    push(`/vehicle/${name}/${model}/${id}`);
  };

  return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [16, 16],
    style: {
      width: "100%"
    },
    align: "middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xxl: 12,
    xl: 12,
    lg: 12,
    md: 24,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(Image, {
    onClick: () => handleNav(_id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: photo_url || bmw,
    alt: "cars poster",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xxl: 12,
    xl: 12,
    lg: 12,
    md: 24,
    sm: 24,
    xs: 24,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(Content, {
    color: color.split(" ")[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "make",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, name.toUpperCase()), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  })), __jsx("h2", {
    className: "model",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Car Model: ", model), __jsx("p", {
    className: "year",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Manufacturing Year: ", year), __jsx("p", {
    className: "price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Car Price: \u20A6 ", Object(_utils_formatPrice__WEBPACK_IMPORTED_MODULE_3__["formatPrice"])(price)), __jsx("p", {
    className: "location",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "Location: ", location), __jsx("p", {
    className: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, `${description.slice(0, 50)}...`))));
};

/* harmony default export */ __webpack_exports__["default"] = (AllCars);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  margin-bottom: 2em;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.09);
`;
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2em;
  height: 300px;
`;
const Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  max-height: 100%;
  overflow: hidden;
  cursor: pointer;

  img {
    border-radius: 0.25em;
    width: 100%;
  }
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p,
  h2,
  h1 {
    margin-bottom: 5px;
  }

  .make {
    display: flex;
    align-items: center;

    span:last-child {
      display: block;
      width: 30px;
      height: 15px;
      background: ${({
  color
}) => color === "white" ? "#cccccc" : color ? color : "#aaaaaa"};
      margin-left: 1em;
      border-radius: 4px;
    }
  }
`; //  const Content = styled.div``

/***/ }),

/***/ "./src/components/Sidebar/Sidebar.tsx":
/*!********************************************!*\
  !*** ./src/components/Sidebar/Sidebar.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_formatPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/formatPrice */ "./src/utils/formatPrice.ts");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\bibia\\Documents\\Nextjs Projects\\buy-car\\src\\components\\Sidebar\\Sidebar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"];
const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_2__["Select"];

const Sidebar = ({
  setSelect,
  select,
  makes,
  models,
  total,
  nTotal
}) => {
  const {
    0: mod,
    1: setMod
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    query,
    push
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const prices = [500000, 1000000, 1500000, 2000000, 2500000, 3000000, 10000000, 20000000, 30000000, 40000000, 50000000];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getModels = async () => {
      const res = await fetch(`http://localhost:5000/api/v1/models/${select.make}`);
      let mods = await res.json(); // let k: any = new Set(mods.data ? mods.data.map((m) => m) : []);
      // let n = [...k];

      setMod(mods);
    };

    getModels();
  }, [select]);
  let newModels = mod ? mod : models; // console.log(models);

  const handleSearch = () => {
    push({
      pathname: "/",
      query: select
    });
  };

  const handleClick = () => {// push({
    //   pathname: "/",
    //   query: select,
    // });
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: false,
    type: "primary",
    shape: "round",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["KeyOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }),
    size: "large",
    style: {
      width: "100%",
      marginTop: "2em"
    },
    onClick: () => push("/"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, "All Cars (", total, ")"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    style: {
      width: "100%"
    },
    mode: "inline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx(SubMenu, {
    key: "sub1",
    title: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["QqOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 15
      }
    }), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }
    }, "Car Makes")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      padding: "1em",
      paddingLeft: "2em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    onChange: value => setSelect(_objectSpread(_objectSpread({}, select), {}, {
      make: value
    })),
    defaultValue: "Car Makes",
    style: {
      width: "100%"
    } // onChange={handleChange}
    ,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(Option, {
    value: query.make,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, query.make || " Select a make"), makes.map(make => __jsx(Option, {
    key: make.make,
    value: make.make,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, make.make, " (", make.count, ")"))))), __jsx(SubMenu, {
    key: "sub2",
    title: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["RadarChartOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 15
      }
    }), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 15
      }
    }, "Car Models")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      padding: "1em",
      paddingLeft: "2em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    onChange: value => setSelect(_objectSpread(_objectSpread({}, select), {}, {
      model: value
    })),
    defaultValue: "Car Model",
    style: {
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx(Option, {
    value: query.model,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, query.model || " Select a model"), newModels.data && newModels.data.map(model => __jsx(Option, {
    key: model.model,
    value: model.model,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 19
    }
  }, model.model, " (", model.count, ")"))))), __jsx(SubMenu, {
    key: "sub3",
    title: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["DollarOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 15
      }
    }), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 15
      }
    }, "Minimum Price")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      padding: "1em",
      paddingLeft: "2em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    onChange: value => setSelect(_objectSpread(_objectSpread({}, select), {}, {
      min: value
    })),
    defaultValue: "Car Minimum Price",
    style: {
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, __jsx(Option, {
    value: query.min,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }, query.min || "Minimum Prices"), prices.map(price => __jsx(Option, {
    key: price,
    value: price,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }, Object(_utils_formatPrice__WEBPACK_IMPORTED_MODULE_4__["formatPrice"])(price)))))), __jsx(SubMenu, {
    key: "sub4",
    title: __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 13
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["DollarOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 15
      }
    }), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 15
      }
    }, "Maximum Price")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      padding: "1em",
      paddingLeft: "2em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    onChange: value => setSelect(_objectSpread(_objectSpread({}, select), {}, {
      max: value
    })),
    defaultValue: "Car Maximum Price",
    style: {
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }, __jsx(Option, {
    value: query.max,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 15
    }
  }, query.max || "Maximum Prices"), prices.map(price => __jsx(Option, {
    key: price,
    value: price,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }, Object(_utils_formatPrice__WEBPACK_IMPORTED_MODULE_4__["formatPrice"])(price))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    loading: false,
    type: "primary",
    shape: "round",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["KeyOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 15
      }
    }),
    size: "large",
    style: {
      width: "100%",
      marginTop: "2em"
    },
    onClick: handleSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }
  }, "Search For Car"), __jsx("p", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, nTotal, " Cars Found!!!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1em;
  border-radius: 0.3em;

  h2 {
    padding: 1em 0;
    padding-top: 0;
  }
`;
const List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin-bottom: 1em;

  label {
    display: block;
    padding-bottom: 0.5em;
  }
`;
const Selects = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.select`
  width: 100%;
  padding: 10px 5px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #cccccc;
`;
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
  display: block;
  width: 100%;
  border: ${({
  background
}) => background ? "1px solid #cccccc" : "none"};
  outline: none;
  padding: 0.7em 1.5em;
  background: ${({
  background
}) => background ? background : "teal"};
  color: ${({
  background
}) => background ? "#333333" : "white"};
  border-radius: 4px;
  cursor: pointer;
`; // const Container = styled.div``;

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AllCars_AllCars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AllCars/AllCars */ "./src/components/AllCars/AllCars.tsx");
/* harmony import */ var _components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Sidebar/Sidebar */ "./src/components/Sidebar/Sidebar.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\bibia\\Documents\\Nextjs Projects\\buy-car\\src\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function IndexPage({
  cars,
  makes,
  models,
  makeFilters,
  makeModel,
  prices,
  count,
  total,
  all
}) {
  const {
    0: select,
    1: setSelect
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    make: "",
    model: "",
    location: "",
    min: 0,
    max: 0
  });
  const {
    push,
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const allCars = () => {
    let queryCars = all.length > 0 ? all : makeModel.length > 0 ? makeModel : makeFilters.length > 0 ? makeFilters : prices.length > 0 ? prices : cars;
    return queryCars;
  };

  console.log(allCars());
  let a = new Set(models.map(m => m));

  const prev = () => {
    let num = Number(query.page) ? Number(query.page) - 1 : 0;

    if (num <= 0) {
      num = count;
    }

    push(`/?page=${num}`);
  };

  const next = () => {
    let num = Number(query.page) ? Number(query.page) + 1 : 2;

    if (num > count) {
      num = 1;
    }

    push(`/?page=${num}`);
  };

  let nTotal = makeModel.length > 0 ? makeModel.length : makeFilters.length > 0 ? makeFilters.length : prices.length > 0 ? prices.length : total;
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    style: {
      width: "100%",
      paddingLeft: "1em"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "gutter-row",
    xxl: 6,
    xl: 6,
    lg: 8,
    md: 8,
    sm: 8,
    xs: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Affix"], {
    offsetTop: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    orientation: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, "Filter Cars"), __jsx(_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setSelect: setSelect,
    select: select,
    makes: makes,
    models: models,
    nTotal: nTotal,
    total: total,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    offset: 1,
    xxl: 17,
    xl: 17,
    lg: 15,
    md: 15,
    sm: 15,
    xs: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    orientation: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "Cars"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, allCars().length <= 0 && __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Empty"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 37
    }
  }), allCars().map(car => __jsx(_components_AllCars_AllCars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: car._id,
    car: car,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  })), allCars().length > 0 && __jsx(Ul, {
    className: "paginate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "arrow_left",
    onClick: prev,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "\u2190")), Array(count).fill(null).map((v, i) => __jsx("li", {
    key: i,
    className: Number(query.page) === i + 1 ? "active" : undefined,
    onClick: () => push(`/?page=${i + 1}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  }, i + 1)), __jsx("li", {
    className: "arrow_right",
    onClick: next,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, "\u2192"))))));
}

async function getServerSideProps(ctx) {
  let make = ctx.query.make ? ctx.query.make : null;
  let mod = ctx.query.model ? ctx.query.model : null;
  let min = ctx.query.min ? ctx.query.min : null;
  let max = ctx.query.max ? ctx.query.max : null;
  let page = Number(ctx.query.page) || 1;
  let limit = Number(ctx.query.limit) || 4;
  const count_url = `http://localhost:5000/api/v1/count`;
  const url = `http://localhost:5000/api/v1/cars?page=${page}&limit=${limit}`;
  const make_url = `http://localhost:5000/api/v1/makes`;
  const price_url = `http://localhost:5000/api/v1/prices?min=${min}&max=${max}`;
  const all_url = `http://localhost:5000/api/v1/prices?min=${min}&max=${max}&make=${make}&model=${mod}`;
  const base_on_make_url = `http://localhost:5000/api/v1/cars/make/${make}`;
  const model_url = `http://localhost:5000/api/v1/models/${make}`;
  const make_model_url = `http://localhost:5000/api/v1/cars/model/make?make=${make}&model=${mod}`;
  const [res, filter, model, base_make, makmod, price, length, all] = await Promise.all([fetch(url), fetch(make_url), fetch(model_url), fetch(base_on_make_url), fetch(make_model_url), fetch(price_url), fetch(count_url), fetch(all_url)]);
  const cars = await res.json();
  const makes = await filter.json();
  const prices = await price.json();
  const models = await model.json();
  const baseMake = await base_make.json();
  const makeModel = await makmod.json();
  let count = await length.json();
  let all_query = await all.json();
  return {
    props: {
      cars: cars.data,
      makes: makes.data,
      models: models.data,
      makeFilters: baseMake.data,
      makeModel: makeModel.data,
      prices: prices.data,
      count: Math.ceil(count.data / limit),
      total: count.data,
      all: all_query.data
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  padding: 0% 10px;
`;
const Ul = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0;

  li {
    /* padding: 0 1em; */
    width: 20px;
    height: 20px;
    background: #ddd;
    margin-right: 1em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &.active {
      background: teal;
      color: white;
      width: 25px;
      height: 25px;
    }
  }

  .arrow_right,
  .arrow_left {
    width: 30px;
    height: 30px;
    background: teal;
    color: white;
  }
`;
const Grid = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  width: calc(100% - 2em);
  padding: 10px;
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 2em;

  .paginate {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 0;

    li {
      /* padding: 0 1em; */
      width: 20px;
      height: 20px;
      background: #ddd;
      margin-right: 1em;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.5s ease-in-out;

      &.active {
        background: teal;
        color: white;
        width: 25px;
        height: 25px;
      }
    }

    .arrow_right,
    .arrow_left {
      width: 30px;
      height: 30px;
      background: teal;
      color: white;
    }
  }

  .sidebar {
    position: -webkit-sticky;
    position: sticky !important;
    top: 20vh;
  }

  .count {
    padding: 1em 0;
    text-align: end;
  }
`;

/***/ }),

/***/ "./src/utils/formatPrice.ts":
/*!**********************************!*\
  !*** ./src/utils/formatPrice.ts ***!
  \**********************************/
/*! exports provided: formatPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return formatPrice; });
const formatPrice = price => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  return formatter.format(price).slice(1, -3);
};

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxsQ2Fycy9BbGxDYXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Zvcm1hdFByaWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImJtdyIsInRveW90YSIsImhvbmRhIiwibGV4dXMiLCJBbGxDYXJzIiwiY2FyIiwiX2lkIiwibmFtZSIsIm1vZGVsIiwieWVhciIsImxvY2F0aW9uIiwiY29sb3IiLCJkZXNjcmlwdGlvbiIsInBob3RvX3VybCIsInByaWNlIiwicHVzaCIsInVzZVJvdXRlciIsInBob3RvIiwiaW1nIiwiaGFuZGxlTmF2IiwiaWQiLCJ3aWR0aCIsInNwbGl0IiwidG9VcHBlckNhc2UiLCJmb3JtYXRQcmljZSIsInNsaWNlIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiR3JpZCIsIkltYWdlIiwiQ29udGVudCIsIlN1Yk1lbnUiLCJNZW51IiwiT3B0aW9uIiwiU2VsZWN0IiwiU2lkZWJhciIsInNldFNlbGVjdCIsInNlbGVjdCIsIm1ha2VzIiwibW9kZWxzIiwidG90YWwiLCJuVG90YWwiLCJtb2QiLCJzZXRNb2QiLCJ1c2VTdGF0ZSIsInF1ZXJ5IiwicHJpY2VzIiwidXNlRWZmZWN0IiwiZ2V0TW9kZWxzIiwicmVzIiwiZmV0Y2giLCJtYWtlIiwibW9kcyIsImpzb24iLCJuZXdNb2RlbHMiLCJoYW5kbGVTZWFyY2giLCJwYXRobmFtZSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luVG9wIiwicGFkZGluZyIsInBhZGRpbmdMZWZ0IiwibWFwIiwiY291bnQiLCJkYXRhIiwibWluIiwibWF4IiwiTGlzdCIsIlNlbGVjdHMiLCJCdXR0b25zIiwiYnV0dG9uIiwiYmFja2dyb3VuZCIsIkluZGV4UGFnZSIsImNhcnMiLCJtYWtlRmlsdGVycyIsIm1ha2VNb2RlbCIsImFsbCIsImFsbENhcnMiLCJxdWVyeUNhcnMiLCJsZW5ndGgiLCJhIiwiU2V0IiwibSIsInByZXYiLCJudW0iLCJOdW1iZXIiLCJwYWdlIiwibmV4dCIsIkFycmF5IiwiZmlsbCIsInYiLCJpIiwidW5kZWZpbmVkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwibGltaXQiLCJjb3VudF91cmwiLCJ1cmwiLCJtYWtlX3VybCIsInByaWNlX3VybCIsImFsbF91cmwiLCJiYXNlX29uX21ha2VfdXJsIiwibW9kZWxfdXJsIiwibWFrZV9tb2RlbF91cmwiLCJmaWx0ZXIiLCJiYXNlX21ha2UiLCJtYWttb2QiLCJQcm9taXNlIiwiYmFzZU1ha2UiLCJhbGxfcXVlcnkiLCJwcm9wcyIsIk1hdGgiLCJjZWlsIiwiVWwiLCJ1bCIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FB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O0FBRWNRLHdFQUFmO0FBRUEsTUFBTWxELFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTs7Q0FBN0I7QUFJQSxNQUFNeUYsRUFBRSxHQUFHMUYsd0RBQU0sQ0FBQzJGLEVBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXJCO0FBcUNBLE1BQU16RixJQUFJLEdBQUdGLHdEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF4QixDOzs7Ozs7Ozs7Ozs7QUNsUUE7QUFBQTtBQUFPLE1BQU1KLFdBQVcsR0FBSVYsS0FBRCxJQUFXO0FBQ3BDLFFBQU15RyxTQUFTLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQy9DQyxTQUFLLEVBQUUsVUFEd0M7QUFFL0NDLFlBQVEsRUFBRTtBQUZxQyxHQUEvQixDQUFsQjtBQUtBLFNBQU9KLFNBQVMsQ0FBQ0ssTUFBVixDQUFpQjlHLEtBQWpCLEVBQXdCVyxLQUF4QixDQUE4QixDQUE5QixFQUFpQyxDQUFDLENBQWxDLENBQVA7QUFDRCxDQVBNLEM7Ozs7Ozs7Ozs7O0FDQVAsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXRQcmljZVwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBibXcgPSBcIi4vYXNzZXRzL2Jtdy5qcGdcIjtcclxuY29uc3QgdG95b3RhID0gXCIuL2Fzc2V0cy90b3lvdGEuanBnXCI7XHJcbmNvbnN0IGhvbmRhID0gXCIuL2Fzc2V0cy9ob25kYS5qcGdcIjtcclxuY29uc3QgbGV4dXMgPSBcIi4vYXNzZXRzL2xleHVzLmpwZ1wiO1xyXG5cclxuY29uc3QgQWxsQ2FycyA9ICh7XHJcbiAgY2FyOiB7XHJcbiAgICBfaWQsXHJcbiAgICBuYW1lLFxyXG4gICAgbW9kZWwsXHJcbiAgICB5ZWFyLFxyXG4gICAgbG9jYXRpb24sXHJcbiAgICBjb2xvcixcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgcGhvdG9fdXJsLFxyXG4gICAgcHJpY2UsXHJcbiAgfSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcGhvdG8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbWcgPSBwaG90b191cmxcclxuICAgICAgPyBwaG90b191cmxcclxuICAgICAgOiBuYW1lID09PSBcImJtd1wiXHJcbiAgICAgID8gYm13XHJcbiAgICAgIDogbmFtZSA9PT0gXCJ0b3lvdGFcIlxyXG4gICAgICA/IHRveW90YVxyXG4gICAgICA6IG5hbWUgPT09IFwiaG9uZGFcIlxyXG4gICAgICA/IGhvbmRhXHJcbiAgICAgIDogbGV4dXM7XHJcbiAgICByZXR1cm4gaW1nO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5hdiA9IChpZCkgPT4ge1xyXG4gICAgcHVzaChgL3ZlaGljbGUvJHtuYW1lfS8ke21vZGVsfS8ke2lkfWApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IGFsaWduPSdtaWRkbGUnPlxyXG4gICAgICA8Q29sIHh4bD17MTJ9IHhsPXsxMn0gbGc9ezEyfSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICA8SW1hZ2Ugb25DbGljaz17KCkgPT4gaGFuZGxlTmF2KF9pZCl9PlxyXG4gICAgICAgICAgPGltZyBzcmM9e3Bob3RvX3VybCB8fCBibXd9IGFsdD0nY2FycyBwb3N0ZXInIC8+XHJcbiAgICAgICAgPC9JbWFnZT5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgeHhsPXsxMn0geGw9ezEyfSBsZz17MTJ9IG1kPXsyNH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgIDxDb250ZW50IGNvbG9yPXtjb2xvci5zcGxpdChcIiBcIilbMF19PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nbWFrZSc+XHJcbiAgICAgICAgICAgIDxzcGFuPntuYW1lLnRvVXBwZXJDYXNlKCl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbW9kZWwnPkNhciBNb2RlbDoge21vZGVsfTwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3llYXInPk1hbnVmYWN0dXJpbmcgWWVhcjoge3llYXJ9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdwcmljZSc+Q2FyIFByaWNlOiDigqYge2Zvcm1hdFByaWNlKHByaWNlKX08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xvY2F0aW9uJz5Mb2NhdGlvbjoge2xvY2F0aW9ufTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPntgJHtkZXNjcmlwdGlvbi5zbGljZSgwLCA1MCl9Li4uYH08L3A+XHJcbiAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICA8L0NvbD5cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxDYXJzO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG5gO1xyXG5jb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ2FwOiAyZW07XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuYDtcclxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2PHsgY29sb3I6IHN0cmluZyB9PmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIHAsXHJcbiAgaDIsXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuXHJcbiAgLm1ha2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgY29sb3IgfSkgPT5cclxuICAgICAgICBjb2xvciA9PT0gXCJ3aGl0ZVwiID8gXCIjY2NjY2NjXCIgOiBjb2xvciA/IGNvbG9yIDogXCIjYWFhYWFhXCJ9O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4vLyAgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgYFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIE1lbnUsIFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXRQcmljZVwiO1xyXG5pbXBvcnQge1xyXG4gIFJhZGFyQ2hhcnRPdXRsaW5lZCxcclxuICBRcU91dGxpbmVkLFxyXG4gIERvbGxhck91dGxpbmVkLFxyXG4gIEtleU91dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG5jb25zdCB7IE9wdGlvbiB9OiBhbnkgPSBTZWxlY3Q7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKHsgc2V0U2VsZWN0LCBzZWxlY3QsIG1ha2VzLCBtb2RlbHMsIHRvdGFsLCBuVG90YWwgfSkgPT4ge1xyXG4gIGNvbnN0IFttb2QsIHNldE1vZF0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xyXG4gIGNvbnN0IHsgcXVlcnksIHB1c2ggfTogeyBxdWVyeTogYW55OyBwdXNoOiBhbnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHByaWNlcyA9IFtcclxuICAgIDUwMDAwMCxcclxuICAgIDEwMDAwMDAsXHJcbiAgICAxNTAwMDAwLFxyXG4gICAgMjAwMDAwMCxcclxuICAgIDI1MDAwMDAsXHJcbiAgICAzMDAwMDAwLFxyXG4gICAgMTAwMDAwMDAsXHJcbiAgICAyMDAwMDAwMCxcclxuICAgIDMwMDAwMDAwLFxyXG4gICAgNDAwMDAwMDAsXHJcbiAgICA1MDAwMDAwMCxcclxuICBdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0TW9kZWxzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9tb2RlbHMvJHtzZWxlY3QubWFrZX1gXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBtb2RzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgLy8gbGV0IGs6IGFueSA9IG5ldyBTZXQobW9kcy5kYXRhID8gbW9kcy5kYXRhLm1hcCgobSkgPT4gbSkgOiBbXSk7XHJcbiAgICAgIC8vIGxldCBuID0gWy4uLmtdO1xyXG4gICAgICBzZXRNb2QobW9kcyk7XHJcbiAgICB9O1xyXG4gICAgZ2V0TW9kZWxzKCk7XHJcbiAgfSwgW3NlbGVjdF0pO1xyXG5cclxuICBsZXQgbmV3TW9kZWxzID0gbW9kID8gbW9kIDogbW9kZWxzO1xyXG4gIC8vIGNvbnNvbGUubG9nKG1vZGVscyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIHB1c2goe1xyXG4gICAgICBwYXRobmFtZTogXCIvXCIsXHJcbiAgICAgIHF1ZXJ5OiBzZWxlY3QsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgLy8gcHVzaCh7XHJcbiAgICAvLyAgIHBhdGhuYW1lOiBcIi9cIixcclxuICAgIC8vICAgcXVlcnk6IHNlbGVjdCxcclxuICAgIC8vIH0pO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xyXG4gICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgbG9hZGluZz17ZmFsc2V9XHJcbiAgICAgICAgdHlwZT0ncHJpbWFyeSdcclxuICAgICAgICBzaGFwZT0ncm91bmQnXHJcbiAgICAgICAgaWNvbj17PEtleU91dGxpbmVkIC8+fVxyXG4gICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiBcIjJlbVwiIH19XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcHVzaChcIi9cIil9XHJcbiAgICAgID5cclxuICAgICAgICBBbGwgQ2FycyAoe3RvdGFsfSlcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDxNZW51IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSBtb2RlPSdpbmxpbmUnPlxyXG4gICAgICAgIDxTdWJNZW51XHJcbiAgICAgICAgICBrZXk9J3N1YjEnXHJcbiAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxRcU91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Q2FyIE1ha2VzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFlbVwiLCBwYWRkaW5nTGVmdDogXCIyZW1cIiB9fT5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAuLi5zZWxlY3QsXHJcbiAgICAgICAgICAgICAgICAgIG1ha2U6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPSdDYXIgTWFrZXMnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e3F1ZXJ5Lm1ha2V9PlxyXG4gICAgICAgICAgICAgICAge3F1ZXJ5Lm1ha2UgfHwgXCIgU2VsZWN0IGEgbWFrZVwifVxyXG4gICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIHttYWtlcy5tYXAoKG1ha2U6IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e21ha2UubWFrZX0gdmFsdWU9e21ha2UubWFrZX0+XHJcbiAgICAgICAgICAgICAgICAgIHttYWtlLm1ha2V9ICh7bWFrZS5jb3VudH0pXHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgPFN1Yk1lbnVcclxuICAgICAgICAgIGtleT0nc3ViMidcclxuICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPFJhZGFyQ2hhcnRPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkNhciBNb2RlbHM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMWVtXCIsIHBhZGRpbmdMZWZ0OiBcIjJlbVwiIH19PlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdCh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdCxcclxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPSdDYXIgTW9kZWwnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtxdWVyeS5tb2RlbH0+XHJcbiAgICAgICAgICAgICAgICB7cXVlcnkubW9kZWwgfHwgXCIgU2VsZWN0IGEgbW9kZWxcIn1cclxuICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICB7bmV3TW9kZWxzLmRhdGEgJiZcclxuICAgICAgICAgICAgICAgIG5ld01vZGVscy5kYXRhLm1hcCgobW9kZWw6IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17bW9kZWwubW9kZWx9IHZhbHVlPXttb2RlbC5tb2RlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAge21vZGVsLm1vZGVsfSAoe21vZGVsLmNvdW50fSlcclxuICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgPFN1Yk1lbnVcclxuICAgICAgICAgIGtleT0nc3ViMydcclxuICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPERvbGxhck91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+TWluaW11bSBQcmljZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxZW1cIiwgcGFkZGluZ0xlZnQ6IFwiMmVtXCIgfX0+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0KHtcclxuICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0LFxyXG4gICAgICAgICAgICAgICAgICBtaW46IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPSdDYXIgTWluaW11bSBQcmljZSdcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e3F1ZXJ5Lm1pbn0+e3F1ZXJ5Lm1pbiB8fCBcIk1pbmltdW0gUHJpY2VzXCJ9PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAge3ByaWNlcy5tYXAoKHByaWNlOiBudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtwcmljZX0gdmFsdWU9e3ByaWNlfT5cclxuICAgICAgICAgICAgICAgICAge2Zvcm1hdFByaWNlKHByaWNlKX1cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICA8U3ViTWVudVxyXG4gICAgICAgICAga2V5PSdzdWI0J1xyXG4gICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8RG9sbGFyT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5NYXhpbXVtIFByaWNlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFlbVwiLCBwYWRkaW5nTGVmdDogXCIyZW1cIiB9fT5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAuLi5zZWxlY3QsXHJcbiAgICAgICAgICAgICAgICAgIG1heDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9J0NhciBNYXhpbXVtIFByaWNlJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17cXVlcnkubWF4fT57cXVlcnkubWF4IHx8IFwiTWF4aW11bSBQcmljZXNcIn08L09wdGlvbj5cclxuICAgICAgICAgICAgICB7cHJpY2VzLm1hcCgocHJpY2U6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e3ByaWNlfSB2YWx1ZT17cHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgICB7Zm9ybWF0UHJpY2UocHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICA8L01lbnU+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBsb2FkaW5nPXtmYWxzZX1cclxuICAgICAgICB0eXBlPSdwcmltYXJ5J1xyXG4gICAgICAgIHNoYXBlPSdyb3VuZCdcclxuICAgICAgICBpY29uPXs8S2V5T3V0bGluZWQgLz59XHJcbiAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMmVtXCIgfX1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9XHJcbiAgICAgID5cclxuICAgICAgICBTZWFyY2ggRm9yIENhclxyXG4gICAgICA8L0J1dHRvbj5cclxuXHJcbiAgICAgIDxwIGNsYXNzTmFtZT0nY291bnQnPntuVG90YWx9IENhcnMgRm91bmQhISE8L3A+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xyXG5cclxuICBoMiB7XHJcbiAgICBwYWRkaW5nOiAxZW0gMDtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxuYDtcclxuY29uc3QgTGlzdCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFNlbGVjdHMgPSBzdHlsZWQuc2VsZWN0YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbmA7XHJcbmNvbnN0IEJ1dHRvbnMgPSBzdHlsZWQuYnV0dG9uPHsgYmFja2dyb3VuZDogc3RyaW5nIH0+YFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogJHsoeyBiYWNrZ3JvdW5kIH0pID0+IChiYWNrZ3JvdW5kID8gXCIxcHggc29saWQgI2NjY2NjY1wiIDogXCJub25lXCIpfTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDAuN2VtIDEuNWVtO1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgYmFja2dyb3VuZCB9KSA9PiAoYmFja2dyb3VuZCA/IGJhY2tncm91bmQgOiBcInRlYWxcIil9O1xyXG4gIGNvbG9yOiAkeyh7IGJhY2tncm91bmQgfSkgPT4gKGJhY2tncm91bmQgPyBcIiMzMzMzMzNcIiA6IFwid2hpdGVcIil9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcbi8vIGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgYDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBBbGxDYXJzIGZyb20gXCIuLi9jb21wb25lbnRzL0FsbENhcnMvQWxsQ2Fyc1wiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wsIERpdmlkZXIsIEVtcHR5LCBBZmZpeCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbnRlcmZhY2UgQ2FySW50ZXJmYWNlIHtcclxuICBfaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbW9kZWw6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHByaWNlOiBzdHJpbmc7XHJcbiAgZGlzdGFuY2U6IHN0cmluZztcclxuICBmdWVsX3R5cGU6IHN0cmluZztcclxuICBwaG90b191cmw6IHN0cmluZztcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIHllYXI6IHN0cmluZztcclxuICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VsZWN0UHJvcHMge1xyXG4gIG1ha2U6IHN0cmluZztcclxuICBtb2RlbDogc3RyaW5nO1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgbWluOiBudW1iZXI7XHJcbiAgbWF4OiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEluZGV4UGFnZSh7XHJcbiAgY2FycyxcclxuICBtYWtlcyxcclxuICBtb2RlbHMsXHJcbiAgbWFrZUZpbHRlcnMsXHJcbiAgbWFrZU1vZGVsLFxyXG4gIHByaWNlcyxcclxuICBjb3VudCxcclxuICB0b3RhbCxcclxuICBhbGwsXHJcbn06IHtcclxuICBjYXJzPzogQ2FySW50ZXJmYWNlW107XHJcbiAgbWFrZXM/OiBhbnlbXTtcclxuICBwcmljZXM/OiBhbnlbXTtcclxuICBtb2RlbHM/OiBhbnlbXTtcclxuICBtYWtlRmlsdGVycz86IGFueVtdO1xyXG4gIGFsbD86IGFueVtdO1xyXG4gIG1ha2VNb2RlbD86IGFueVtdO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbiAgdG90YWw6IG51bWJlcjtcclxufSkge1xyXG4gIGNvbnN0IFtzZWxlY3QsIHNldFNlbGVjdF0gPSB1c2VTdGF0ZTxTZWxlY3RQcm9wcz4oe1xyXG4gICAgbWFrZTogXCJcIixcclxuICAgIG1vZGVsOiBcIlwiLFxyXG4gICAgbG9jYXRpb246IFwiXCIsXHJcbiAgICBtaW46IDAsXHJcbiAgICBtYXg6IDAsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHsgcHVzaCwgcXVlcnkgfTogYW55ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGFsbENhcnMgPSAoKSA9PiB7XHJcbiAgICBsZXQgcXVlcnlDYXJzID1cclxuICAgICAgYWxsLmxlbmd0aCA+IDBcclxuICAgICAgICA/IGFsbFxyXG4gICAgICAgIDogbWFrZU1vZGVsLmxlbmd0aCA+IDBcclxuICAgICAgICA/IG1ha2VNb2RlbFxyXG4gICAgICAgIDogbWFrZUZpbHRlcnMubGVuZ3RoID4gMFxyXG4gICAgICAgID8gbWFrZUZpbHRlcnNcclxuICAgICAgICA6IHByaWNlcy5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBwcmljZXNcclxuICAgICAgICA6IGNhcnM7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXJ5Q2FycztcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhhbGxDYXJzKCkpO1xyXG5cclxuICBsZXQgYTogYW55ID0gbmV3IFNldChtb2RlbHMubWFwKChtKSA9PiBtKSk7XHJcblxyXG4gIGNvbnN0IHByZXYgPSAoKSA9PiB7XHJcbiAgICBsZXQgbnVtID0gTnVtYmVyKHF1ZXJ5LnBhZ2UpID8gTnVtYmVyKHF1ZXJ5LnBhZ2UpIC0gMSA6IDA7XHJcbiAgICBpZiAobnVtIDw9IDApIHtcclxuICAgICAgbnVtID0gY291bnQ7XHJcbiAgICB9XHJcbiAgICBwdXNoKGAvP3BhZ2U9JHtudW19YCk7XHJcbiAgfTtcclxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xyXG4gICAgbGV0IG51bSA9IE51bWJlcihxdWVyeS5wYWdlKSA/IE51bWJlcihxdWVyeS5wYWdlKSArIDEgOiAyO1xyXG4gICAgaWYgKG51bSA+IGNvdW50KSB7XHJcbiAgICAgIG51bSA9IDE7XHJcbiAgICB9XHJcbiAgICBwdXNoKGAvP3BhZ2U9JHtudW19YCk7XHJcbiAgfTtcclxuXHJcbiAgbGV0IG5Ub3RhbCA9XHJcbiAgICBtYWtlTW9kZWwubGVuZ3RoID4gMFxyXG4gICAgICA/IG1ha2VNb2RlbC5sZW5ndGhcclxuICAgICAgOiBtYWtlRmlsdGVycy5sZW5ndGggPiAwXHJcbiAgICAgID8gbWFrZUZpbHRlcnMubGVuZ3RoXHJcbiAgICAgIDogcHJpY2VzLmxlbmd0aCA+IDBcclxuICAgICAgPyBwcmljZXMubGVuZ3RoXHJcbiAgICAgIDogdG90YWw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Um93IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ0xlZnQ6IFwiMWVtXCIgfX0+XHJcbiAgICAgIDxDb2wgY2xhc3NOYW1lPSdndXR0ZXItcm93JyB4eGw9ezZ9IHhsPXs2fSBsZz17OH0gbWQ9ezh9IHNtPXs4fSB4cz17MjR9PlxyXG4gICAgICAgIDxBZmZpeCBvZmZzZXRUb3A9ezEwfT5cclxuICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPSdjZW50ZXInPkZpbHRlciBDYXJzPC9EaXZpZGVyPlxyXG4gICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgc2V0U2VsZWN0PXtzZXRTZWxlY3R9XHJcbiAgICAgICAgICAgIHNlbGVjdD17c2VsZWN0fVxyXG4gICAgICAgICAgICBtYWtlcz17bWFrZXN9XHJcbiAgICAgICAgICAgIG1vZGVscz17bW9kZWxzfVxyXG4gICAgICAgICAgICBuVG90YWw9e25Ub3RhbH1cclxuICAgICAgICAgICAgdG90YWw9e3RvdGFsfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0FmZml4PlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBvZmZzZXQ9ezF9IHh4bD17MTd9IHhsPXsxN30gbGc9ezE1fSBtZD17MTV9IHNtPXsxNX0geHM9ezI0fT5cclxuICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj0nbGVmdCc+Q2FyczwvRGl2aWRlcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2FsbENhcnMoKS5sZW5ndGggPD0gMCAmJiA8RW1wdHkgLz59XHJcbiAgICAgICAgICB7YWxsQ2FycygpLm1hcCgoY2FyOiBDYXJJbnRlcmZhY2UpID0+IChcclxuICAgICAgICAgICAgPEFsbENhcnMga2V5PXtjYXIuX2lkfSBjYXI9e2Nhcn0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAge2FsbENhcnMoKS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPFVsIGNsYXNzTmFtZT0ncGFnaW5hdGUnPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Fycm93X2xlZnQnIG9uQ2xpY2s9e3ByZXZ9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+JiM4NTkyOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIHtBcnJheShjb3VudClcclxuICAgICAgICAgICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgICAgICAgICAubWFwKCh2LCBpOiBudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIocXVlcnkucGFnZSkgPT09IGkgKyAxID8gXCJhY3RpdmVcIiA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwdXNoKGAvP3BhZ2U9JHtpICsgMX1gKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpICsgMX1cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Fycm93X3JpZ2h0JyBvbkNsaWNrPXtuZXh0fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiYjODU5NDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9VbD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcclxuICBsZXQgbWFrZSA9IGN0eC5xdWVyeS5tYWtlID8gY3R4LnF1ZXJ5Lm1ha2UgOiBudWxsO1xyXG4gIGxldCBtb2QgPSBjdHgucXVlcnkubW9kZWwgPyBjdHgucXVlcnkubW9kZWwgOiBudWxsO1xyXG4gIGxldCBtaW4gPSBjdHgucXVlcnkubWluID8gY3R4LnF1ZXJ5Lm1pbiA6IG51bGw7XHJcbiAgbGV0IG1heCA9IGN0eC5xdWVyeS5tYXggPyBjdHgucXVlcnkubWF4IDogbnVsbDtcclxuXHJcbiAgbGV0IHBhZ2UgPSBOdW1iZXIoY3R4LnF1ZXJ5LnBhZ2UpIHx8IDE7XHJcbiAgbGV0IGxpbWl0ID0gTnVtYmVyKGN0eC5xdWVyeS5saW1pdCkgfHwgNDtcclxuXHJcbiAgY29uc3QgY291bnRfdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvY291bnRgO1xyXG4gIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL2NhcnM/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YDtcclxuICBjb25zdCBtYWtlX3VybCA9IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL21ha2VzYDtcclxuICBjb25zdCBwcmljZV91cmwgPSBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9wcmljZXM/bWluPSR7bWlufSZtYXg9JHttYXh9YDtcclxuICBjb25zdCBhbGxfdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvcHJpY2VzP21pbj0ke21pbn0mbWF4PSR7bWF4fSZtYWtlPSR7bWFrZX0mbW9kZWw9JHttb2R9YDtcclxuICBjb25zdCBiYXNlX29uX21ha2VfdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvY2Fycy9tYWtlLyR7bWFrZX1gO1xyXG4gIGNvbnN0IG1vZGVsX3VybCA9IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL21vZGVscy8ke21ha2V9YDtcclxuICBjb25zdCBtYWtlX21vZGVsX3VybCA9IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL2NhcnMvbW9kZWwvbWFrZT9tYWtlPSR7bWFrZX0mbW9kZWw9JHttb2R9YDtcclxuICBjb25zdCBbXHJcbiAgICByZXMsXHJcbiAgICBmaWx0ZXIsXHJcbiAgICBtb2RlbCxcclxuICAgIGJhc2VfbWFrZSxcclxuICAgIG1ha21vZCxcclxuICAgIHByaWNlLFxyXG4gICAgbGVuZ3RoLFxyXG4gICAgYWxsLFxyXG4gIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICBmZXRjaCh1cmwpLFxyXG4gICAgZmV0Y2gobWFrZV91cmwpLFxyXG4gICAgZmV0Y2gobW9kZWxfdXJsKSxcclxuICAgIGZldGNoKGJhc2Vfb25fbWFrZV91cmwpLFxyXG4gICAgZmV0Y2gobWFrZV9tb2RlbF91cmwpLFxyXG4gICAgZmV0Y2gocHJpY2VfdXJsKSxcclxuICAgIGZldGNoKGNvdW50X3VybCksXHJcbiAgICBmZXRjaChhbGxfdXJsKSxcclxuICBdKTtcclxuICBjb25zdCBjYXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zdCBtYWtlcyA9IGF3YWl0IGZpbHRlci5qc29uKCk7XHJcbiAgY29uc3QgcHJpY2VzID0gYXdhaXQgcHJpY2UuanNvbigpO1xyXG4gIGNvbnN0IG1vZGVscyA9IGF3YWl0IG1vZGVsLmpzb24oKTtcclxuICBjb25zdCBiYXNlTWFrZSA9IGF3YWl0IGJhc2VfbWFrZS5qc29uKCk7XHJcbiAgY29uc3QgbWFrZU1vZGVsID0gYXdhaXQgbWFrbW9kLmpzb24oKTtcclxuICBsZXQgY291bnQgPSBhd2FpdCBsZW5ndGguanNvbigpO1xyXG4gIGxldCBhbGxfcXVlcnkgPSBhd2FpdCBhbGwuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY2FyczogY2Fycy5kYXRhLFxyXG4gICAgICBtYWtlczogbWFrZXMuZGF0YSxcclxuICAgICAgbW9kZWxzOiBtb2RlbHMuZGF0YSxcclxuICAgICAgbWFrZUZpbHRlcnM6IGJhc2VNYWtlLmRhdGEsXHJcbiAgICAgIG1ha2VNb2RlbDogbWFrZU1vZGVsLmRhdGEsXHJcbiAgICAgIHByaWNlczogcHJpY2VzLmRhdGEsXHJcbiAgICAgIGNvdW50OiBNYXRoLmNlaWwoY291bnQuZGF0YSAvIGxpbWl0KSxcclxuICAgICAgdG90YWw6IGNvdW50LmRhdGEsXHJcbiAgICAgIGFsbDogYWxsX3F1ZXJ5LmRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMCUgMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IFVsID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMWVtIDA7XHJcblxyXG4gIGxpIHtcclxuICAgIC8qIHBhZGRpbmc6IDAgMWVtOyAqL1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXJyb3dfcmlnaHQsXHJcbiAgLmFycm93X2xlZnQge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyZW0pO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XHJcbiAgZ2FwOiAyZW07XHJcblxyXG4gIC5wYWdpbmF0ZSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAvKiBwYWRkaW5nOiAwIDFlbTsgKi9cclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFycm93X3JpZ2h0LFxyXG4gICAgLmFycm93X2xlZnQge1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhciB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDIwdmg7XHJcbiAgfVxyXG5cclxuICAuY291bnQge1xyXG4gICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgfVxyXG5gO1xyXG4iLCJleHBvcnQgY29uc3QgZm9ybWF0UHJpY2UgPSAocHJpY2UpID0+IHtcclxuICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCB7XHJcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgY3VycmVuY3k6IFwiVVNEXCIsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KHByaWNlKS5zbGljZSgxLCAtMyk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==