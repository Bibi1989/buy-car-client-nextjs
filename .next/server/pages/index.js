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
      const res = await fetch(`https://buyyourcar-api.herokuapp.com/api/v1/models/${select.make}`);
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
      lineNumber: 104,
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
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Affix"], {
    offsetTop: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    orientation: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
      lineNumber: 108,
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
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    orientation: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, "Cars"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, allCars().length <= 0 && __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Empty"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 37
    }
  }), allCars().map(car => __jsx(_components_AllCars_AllCars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: car._id,
    car: car,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  })), allCars().length > 0 && __jsx(Ul, {
    className: "paginate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "arrow_left",
    onClick: prev,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, "\u2190")), Array(count).fill(null).map((v, i) => __jsx("li", {
    key: i,
    className: Number(query.page) === i + 1 ? "active" : undefined,
    onClick: () => push(`/?page=${i + 1}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 19
    }
  }, i + 1)), __jsx("li", {
    className: "arrow_right",
    onClick: next,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
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
  const count_url = `https://buyyourcar-api.herokuapp.com/api/v1/count`;
  const url = `https://buyyourcar-api.herokuapp.com/api/v1/cars?page=${page}&limit=${limit}`;
  const make_url = `https://buyyourcar-api.herokuapp.com/api/v1/makes`;
  const price_url = `https://buyyourcar-api.herokuapp.com/api/v1/prices?min=${min}&max=${max}`;
  const all_url = `https://buyyourcar-api.herokuapp.com/api/v1/prices?min=${min}&max=${max}&make=${make}&model=${mod}`;
  const base_on_make_url = `https://buyyourcar-api.herokuapp.com/api/v1/cars/make/${make}`;
  const model_url = `https://buyyourcar-api.herokuapp.com/api/v1/models/${make}`;
  const make_model_url = `https://buyyourcar-api.herokuapp.com/api/v1/cars/model/make?make=${make}&model=${mod}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxsQ2Fycy9BbGxDYXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Zvcm1hdFByaWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImJtdyIsInRveW90YSIsImhvbmRhIiwibGV4dXMiLCJBbGxDYXJzIiwiY2FyIiwiX2lkIiwibmFtZSIsIm1vZGVsIiwieWVhciIsImxvY2F0aW9uIiwiY29sb3IiLCJkZXNjcmlwdGlvbiIsInBob3RvX3VybCIsInByaWNlIiwicHVzaCIsInVzZVJvdXRlciIsInBob3RvIiwiaW1nIiwiaGFuZGxlTmF2IiwiaWQiLCJ3aWR0aCIsInNwbGl0IiwidG9VcHBlckNhc2UiLCJmb3JtYXRQcmljZSIsInNsaWNlIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiR3JpZCIsIkltYWdlIiwiQ29udGVudCIsIlN1Yk1lbnUiLCJNZW51IiwiT3B0aW9uIiwiU2VsZWN0IiwiU2lkZWJhciIsInNldFNlbGVjdCIsInNlbGVjdCIsIm1ha2VzIiwibW9kZWxzIiwidG90YWwiLCJuVG90YWwiLCJtb2QiLCJzZXRNb2QiLCJ1c2VTdGF0ZSIsInF1ZXJ5IiwicHJpY2VzIiwidXNlRWZmZWN0IiwiZ2V0TW9kZWxzIiwicmVzIiwiZmV0Y2giLCJtYWtlIiwibW9kcyIsImpzb24iLCJuZXdNb2RlbHMiLCJoYW5kbGVTZWFyY2giLCJwYXRobmFtZSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luVG9wIiwicGFkZGluZyIsInBhZGRpbmdMZWZ0IiwibWFwIiwiY291bnQiLCJkYXRhIiwibWluIiwibWF4IiwiTGlzdCIsIlNlbGVjdHMiLCJCdXR0b25zIiwiYnV0dG9uIiwiYmFja2dyb3VuZCIsIkluZGV4UGFnZSIsImNhcnMiLCJtYWtlRmlsdGVycyIsIm1ha2VNb2RlbCIsImFsbCIsImFsbENhcnMiLCJxdWVyeUNhcnMiLCJsZW5ndGgiLCJhIiwiU2V0IiwibSIsInByZXYiLCJudW0iLCJOdW1iZXIiLCJwYWdlIiwibmV4dCIsIkFycmF5IiwiZmlsbCIsInYiLCJpIiwidW5kZWZpbmVkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwibGltaXQiLCJjb3VudF91cmwiLCJ1cmwiLCJtYWtlX3VybCIsInByaWNlX3VybCIsImFsbF91cmwiLCJiYXNlX29uX21ha2VfdXJsIiwibW9kZWxfdXJsIiwibWFrZV9tb2RlbF91cmwiLCJmaWx0ZXIiLCJiYXNlX21ha2UiLCJtYWttb2QiLCJQcm9taXNlIiwiYmFzZU1ha2UiLCJhbGxfcXVlcnkiLCJwcm9wcyIsIk1hdGgiLCJjZWlsIiwiVWwiLCJ1bCIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FB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LENBQUNDLEdBQUk7O0NBQTdCO0FBSUEsTUFBTXlGLEVBQUUsR0FBRzFGLHdEQUFNLENBQUMyRixFQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFyQjtBQXFDQSxNQUFNekYsSUFBSSxHQUFHRix3REFBTSxDQUFDQyxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBeEIsQzs7Ozs7Ozs7Ozs7O0FDaFFBO0FBQUE7QUFBTyxNQUFNSixXQUFXLEdBQUlWLEtBQUQsSUFBVztBQUNwQyxRQUFNeUcsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUMvQ0MsU0FBSyxFQUFFLFVBRHdDO0FBRS9DQyxZQUFRLEVBQUU7QUFGcUMsR0FBL0IsQ0FBbEI7QUFLQSxTQUFPSixTQUFTLENBQUNLLE1BQVYsQ0FBaUI5RyxLQUFqQixFQUF3QlcsS0FBeEIsQ0FBOEIsQ0FBOUIsRUFBaUMsQ0FBQyxDQUFsQyxDQUFQO0FBQ0QsQ0FQTSxDOzs7Ozs7Ozs7OztBQ0FQLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZm9ybWF0UHJpY2VcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgYm13ID0gXCIuL2Fzc2V0cy9ibXcuanBnXCI7XHJcbmNvbnN0IHRveW90YSA9IFwiLi9hc3NldHMvdG95b3RhLmpwZ1wiO1xyXG5jb25zdCBob25kYSA9IFwiLi9hc3NldHMvaG9uZGEuanBnXCI7XHJcbmNvbnN0IGxleHVzID0gXCIuL2Fzc2V0cy9sZXh1cy5qcGdcIjtcclxuXHJcbmNvbnN0IEFsbENhcnMgPSAoe1xyXG4gIGNhcjoge1xyXG4gICAgX2lkLFxyXG4gICAgbmFtZSxcclxuICAgIG1vZGVsLFxyXG4gICAgeWVhcixcclxuICAgIGxvY2F0aW9uLFxyXG4gICAgY29sb3IsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIHBob3RvX3VybCxcclxuICAgIHByaWNlLFxyXG4gIH0sXHJcbn0pID0+IHtcclxuICBjb25zdCB7IHB1c2ggfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBob3RvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW1nID0gcGhvdG9fdXJsXHJcbiAgICAgID8gcGhvdG9fdXJsXHJcbiAgICAgIDogbmFtZSA9PT0gXCJibXdcIlxyXG4gICAgICA/IGJtd1xyXG4gICAgICA6IG5hbWUgPT09IFwidG95b3RhXCJcclxuICAgICAgPyB0b3lvdGFcclxuICAgICAgOiBuYW1lID09PSBcImhvbmRhXCJcclxuICAgICAgPyBob25kYVxyXG4gICAgICA6IGxleHVzO1xyXG4gICAgcmV0dXJuIGltZztcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVOYXYgPSAoaWQpID0+IHtcclxuICAgIHB1c2goYC92ZWhpY2xlLyR7bmFtZX0vJHttb2RlbH0vJHtpZH1gKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Um93IGd1dHRlcj17WzE2LCAxNl19IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSBhbGlnbj0nbWlkZGxlJz5cclxuICAgICAgPENvbCB4eGw9ezEyfSB4bD17MTJ9IGxnPXsxMn0gbWQ9ezI0fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgPEltYWdlIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdihfaWQpfT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtwaG90b191cmwgfHwgYm13fSBhbHQ9J2NhcnMgcG9zdGVyJyAvPlxyXG4gICAgICAgIDwvSW1hZ2U+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgICA8Q29sIHh4bD17MTJ9IHhsPXsxMn0gbGc9ezEyfSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICA8Q29udGVudCBjb2xvcj17Y29sb3Iuc3BsaXQoXCIgXCIpWzBdfT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J21ha2UnPlxyXG4gICAgICAgICAgICA8c3Bhbj57bmFtZS50b1VwcGVyQ2FzZSgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J21vZGVsJz5DYXIgTW9kZWw6IHttb2RlbH08L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd5ZWFyJz5NYW51ZmFjdHVyaW5nIFllYXI6IHt5ZWFyfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncHJpY2UnPkNhciBQcmljZTog4oKmIHtmb3JtYXRQcmljZShwcmljZSl9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsb2NhdGlvbic+TG9jYXRpb246IHtsb2NhdGlvbn08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2Rlc2NyaXB0aW9uJz57YCR7ZGVzY3JpcHRpb24uc2xpY2UoMCwgNTApfS4uLmB9PC9wPlxyXG4gICAgICAgIDwvQ29udGVudD5cclxuICAgICAgPC9Db2w+XHJcbiAgICA8L1Jvdz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxsQ2FycztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcclxuYDtcclxuY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdhcDogMmVtO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbmA7XHJcbmNvbnN0IEltYWdlID0gc3R5bGVkLmRpdmBcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdjx7IGNvbG9yOiBzdHJpbmcgfT5gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBwLFxyXG4gIGgyLFxyXG4gIGgxIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcblxyXG4gIC5tYWtlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7IGNvbG9yIH0pID0+XHJcbiAgICAgICAgY29sb3IgPT09IFwid2hpdGVcIiA/IFwiI2NjY2NjY1wiIDogY29sb3IgPyBjb2xvciA6IFwiI2FhYWFhYVwifTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuLy8gIGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YGBcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBNZW51LCBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZm9ybWF0UHJpY2VcIjtcclxuaW1wb3J0IHtcclxuICBSYWRhckNoYXJ0T3V0bGluZWQsXHJcbiAgUXFPdXRsaW5lZCxcclxuICBEb2xsYXJPdXRsaW5lZCxcclxuICBLZXlPdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuY29uc3QgeyBPcHRpb24gfTogYW55ID0gU2VsZWN0O1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICh7IHNldFNlbGVjdCwgc2VsZWN0LCBtYWtlcywgbW9kZWxzLCB0b3RhbCwgblRvdGFsIH0pID0+IHtcclxuICBjb25zdCBbbW9kLCBzZXRNb2RdID0gdXNlU3RhdGU8YW55PihudWxsKTtcclxuICBjb25zdCB7IHF1ZXJ5LCBwdXNoIH06IHsgcXVlcnk6IGFueTsgcHVzaDogYW55IH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwcmljZXMgPSBbXHJcbiAgICA1MDAwMDAsXHJcbiAgICAxMDAwMDAwLFxyXG4gICAgMTUwMDAwMCxcclxuICAgIDIwMDAwMDAsXHJcbiAgICAyNTAwMDAwLFxyXG4gICAgMzAwMDAwMCxcclxuICAgIDEwMDAwMDAwLFxyXG4gICAgMjAwMDAwMDAsXHJcbiAgICAzMDAwMDAwMCxcclxuICAgIDQwMDAwMDAwLFxyXG4gICAgNTAwMDAwMDAsXHJcbiAgXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldE1vZGVscyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYnV5eW91cmNhci1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvbW9kZWxzLyR7c2VsZWN0Lm1ha2V9YFxyXG4gICAgICApO1xyXG4gICAgICBsZXQgbW9kcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIC8vIGxldCBrOiBhbnkgPSBuZXcgU2V0KG1vZHMuZGF0YSA/IG1vZHMuZGF0YS5tYXAoKG0pID0+IG0pIDogW10pO1xyXG4gICAgICAvLyBsZXQgbiA9IFsuLi5rXTtcclxuICAgICAgc2V0TW9kKG1vZHMpO1xyXG4gICAgfTtcclxuICAgIGdldE1vZGVscygpO1xyXG4gIH0sIFtzZWxlY3RdKTtcclxuXHJcbiAgbGV0IG5ld01vZGVscyA9IG1vZCA/IG1vZCA6IG1vZGVscztcclxuICAvLyBjb25zb2xlLmxvZyhtb2RlbHMpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBwdXNoKHtcclxuICAgICAgcGF0aG5hbWU6IFwiL1wiLFxyXG4gICAgICBxdWVyeTogc2VsZWN0LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIC8vIHB1c2goe1xyXG4gICAgLy8gICBwYXRobmFtZTogXCIvXCIsXHJcbiAgICAvLyAgIHF1ZXJ5OiBzZWxlY3QsXHJcbiAgICAvLyB9KTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcclxuICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZCAke3ZhbHVlfWApO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGxvYWRpbmc9e2ZhbHNlfVxyXG4gICAgICAgIHR5cGU9J3ByaW1hcnknXHJcbiAgICAgICAgc2hhcGU9J3JvdW5kJ1xyXG4gICAgICAgIGljb249ezxLZXlPdXRsaW5lZCAvPn1cclxuICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpblRvcDogXCIyZW1cIiB9fVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHB1c2goXCIvXCIpfVxyXG4gICAgICA+XHJcbiAgICAgICAgQWxsIENhcnMgKHt0b3RhbH0pXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8TWVudSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gbW9kZT0naW5saW5lJz5cclxuICAgICAgICA8U3ViTWVudVxyXG4gICAgICAgICAga2V5PSdzdWIxJ1xyXG4gICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8UXFPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPkNhciBNYWtlczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxZW1cIiwgcGFkZGluZ0xlZnQ6IFwiMmVtXCIgfX0+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0KHtcclxuICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0LFxyXG4gICAgICAgICAgICAgICAgICBtYWtlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT0nQ2FyIE1ha2VzJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtxdWVyeS5tYWtlfT5cclxuICAgICAgICAgICAgICAgIHtxdWVyeS5tYWtlIHx8IFwiIFNlbGVjdCBhIG1ha2VcIn1cclxuICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICB7bWFrZXMubWFwKChtYWtlOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXttYWtlLm1ha2V9IHZhbHVlPXttYWtlLm1ha2V9PlxyXG4gICAgICAgICAgICAgICAgICB7bWFrZS5tYWtlfSAoe21ha2UuY291bnR9KVxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgIDxTdWJNZW51XHJcbiAgICAgICAgICBrZXk9J3N1YjInXHJcbiAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxSYWRhckNoYXJ0T3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5DYXIgTW9kZWxzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFlbVwiLCBwYWRkaW5nTGVmdDogXCIyZW1cIiB9fT5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAuLi5zZWxlY3QsXHJcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT0nQ2FyIE1vZGVsJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17cXVlcnkubW9kZWx9PlxyXG4gICAgICAgICAgICAgICAge3F1ZXJ5Lm1vZGVsIHx8IFwiIFNlbGVjdCBhIG1vZGVsXCJ9XHJcbiAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAge25ld01vZGVscy5kYXRhICYmXHJcbiAgICAgICAgICAgICAgICBuZXdNb2RlbHMuZGF0YS5tYXAoKG1vZGVsOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e21vZGVsLm1vZGVsfSB2YWx1ZT17bW9kZWwubW9kZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIHttb2RlbC5tb2RlbH0gKHttb2RlbC5jb3VudH0pXHJcbiAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgIDxTdWJNZW51XHJcbiAgICAgICAgICBrZXk9J3N1YjMnXHJcbiAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxEb2xsYXJPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPk1pbmltdW0gUHJpY2U8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMWVtXCIsIHBhZGRpbmdMZWZ0OiBcIjJlbVwiIH19PlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdCh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdCxcclxuICAgICAgICAgICAgICAgICAgbWluOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT0nQ2FyIE1pbmltdW0gUHJpY2UnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtxdWVyeS5taW59PntxdWVyeS5taW4gfHwgXCJNaW5pbXVtIFByaWNlc1wifTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIHtwcmljZXMubWFwKChwcmljZTogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17cHJpY2V9IHZhbHVlPXtwcmljZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtmb3JtYXRQcmljZShwcmljZSl9XHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgPFN1Yk1lbnVcclxuICAgICAgICAgIGtleT0nc3ViNCdcclxuICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPERvbGxhck91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+TWF4aW11bSBQcmljZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxZW1cIiwgcGFkZGluZ0xlZnQ6IFwiMmVtXCIgfX0+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0KHtcclxuICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0LFxyXG4gICAgICAgICAgICAgICAgICBtYXg6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPSdDYXIgTWF4aW11bSBQcmljZSdcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e3F1ZXJ5Lm1heH0+e3F1ZXJ5Lm1heCB8fCBcIk1heGltdW0gUHJpY2VzXCJ9PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAge3ByaWNlcy5tYXAoKHByaWNlOiBudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtwcmljZX0gdmFsdWU9e3ByaWNlfT5cclxuICAgICAgICAgICAgICAgICAge2Zvcm1hdFByaWNlKHByaWNlKX1cclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgPC9NZW51PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgbG9hZGluZz17ZmFsc2V9XHJcbiAgICAgICAgdHlwZT0ncHJpbWFyeSdcclxuICAgICAgICBzaGFwZT0ncm91bmQnXHJcbiAgICAgICAgaWNvbj17PEtleU91dGxpbmVkIC8+fVxyXG4gICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWFyZ2luVG9wOiBcIjJlbVwiIH19XHJcbiAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNofVxyXG4gICAgICA+XHJcbiAgICAgICAgU2VhcmNoIEZvciBDYXJcclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9J2NvdW50Jz57blRvdGFsfSBDYXJzIEZvdW5kISEhPC9wPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcclxuXHJcbiAgaDIge1xyXG4gICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IExpc3QgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTZWxlY3RzID0gc3R5bGVkLnNlbGVjdGBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG5gO1xyXG5jb25zdCBCdXR0b25zID0gc3R5bGVkLmJ1dHRvbjx7IGJhY2tncm91bmQ6IHN0cmluZyB9PmBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6ICR7KHsgYmFja2dyb3VuZCB9KSA9PiAoYmFja2dyb3VuZCA/IFwiMXB4IHNvbGlkICNjY2NjY2NcIiA6IFwibm9uZVwiKX07XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAwLjdlbSAxLjVlbTtcclxuICBiYWNrZ3JvdW5kOiAkeyh7IGJhY2tncm91bmQgfSkgPT4gKGJhY2tncm91bmQgPyBiYWNrZ3JvdW5kIDogXCJ0ZWFsXCIpfTtcclxuICBjb2xvcjogJHsoeyBiYWNrZ3JvdW5kIH0pID0+IChiYWNrZ3JvdW5kID8gXCIjMzMzMzMzXCIgOiBcIndoaXRlXCIpfTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG4vLyBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQWxsQ2FycyBmcm9tIFwiLi4vY29tcG9uZW50cy9BbGxDYXJzL0FsbENhcnNcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdywgQ29sLCBEaXZpZGVyLCBFbXB0eSwgQWZmaXggfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW50ZXJmYWNlIENhckludGVyZmFjZSB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG1vZGVsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBwcmljZTogc3RyaW5nO1xyXG4gIGRpc3RhbmNlOiBzdHJpbmc7XHJcbiAgZnVlbF90eXBlOiBzdHJpbmc7XHJcbiAgcGhvdG9fdXJsOiBzdHJpbmc7XHJcbiAgY29sb3I6IHN0cmluZztcclxuICB5ZWFyOiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxuICBjcmVhdGVkQXQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFNlbGVjdFByb3BzIHtcclxuICBtYWtlOiBzdHJpbmc7XHJcbiAgbW9kZWw6IHN0cmluZztcclxuICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gIG1pbjogbnVtYmVyO1xyXG4gIG1heDogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbmRleFBhZ2Uoe1xyXG4gIGNhcnMsXHJcbiAgbWFrZXMsXHJcbiAgbW9kZWxzLFxyXG4gIG1ha2VGaWx0ZXJzLFxyXG4gIG1ha2VNb2RlbCxcclxuICBwcmljZXMsXHJcbiAgY291bnQsXHJcbiAgdG90YWwsXHJcbiAgYWxsLFxyXG59OiB7XHJcbiAgY2Fycz86IENhckludGVyZmFjZVtdO1xyXG4gIG1ha2VzPzogYW55W107XHJcbiAgcHJpY2VzPzogYW55W107XHJcbiAgbW9kZWxzPzogYW55W107XHJcbiAgbWFrZUZpbHRlcnM/OiBhbnlbXTtcclxuICBhbGw/OiBhbnlbXTtcclxuICBtYWtlTW9kZWw/OiBhbnlbXTtcclxuICBjb3VudDogbnVtYmVyO1xyXG4gIHRvdGFsOiBudW1iZXI7XHJcbn0pIHtcclxuICBjb25zdCBbc2VsZWN0LCBzZXRTZWxlY3RdID0gdXNlU3RhdGU8U2VsZWN0UHJvcHM+KHtcclxuICAgIG1ha2U6IFwiXCIsXHJcbiAgICBtb2RlbDogXCJcIixcclxuICAgIGxvY2F0aW9uOiBcIlwiLFxyXG4gICAgbWluOiAwLFxyXG4gICAgbWF4OiAwLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IHB1c2gsIHF1ZXJ5IH06IGFueSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBhbGxDYXJzID0gKCkgPT4ge1xyXG4gICAgbGV0IHF1ZXJ5Q2FycyA9XHJcbiAgICAgIGFsbC5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBhbGxcclxuICAgICAgICA6IG1ha2VNb2RlbC5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBtYWtlTW9kZWxcclxuICAgICAgICA6IG1ha2VGaWx0ZXJzLmxlbmd0aCA+IDBcclxuICAgICAgICA/IG1ha2VGaWx0ZXJzXHJcbiAgICAgICAgOiBwcmljZXMubGVuZ3RoID4gMFxyXG4gICAgICAgID8gcHJpY2VzXHJcbiAgICAgICAgOiBjYXJzO1xyXG5cclxuICAgIHJldHVybiBxdWVyeUNhcnM7XHJcbiAgfTtcclxuXHJcbiAgbGV0IGE6IGFueSA9IG5ldyBTZXQobW9kZWxzLm1hcCgobSkgPT4gbSkpO1xyXG5cclxuICBjb25zdCBwcmV2ID0gKCkgPT4ge1xyXG4gICAgbGV0IG51bSA9IE51bWJlcihxdWVyeS5wYWdlKSA/IE51bWJlcihxdWVyeS5wYWdlKSAtIDEgOiAwO1xyXG4gICAgaWYgKG51bSA8PSAwKSB7XHJcbiAgICAgIG51bSA9IGNvdW50O1xyXG4gICAgfVxyXG4gICAgcHVzaChgLz9wYWdlPSR7bnVtfWApO1xyXG4gIH07XHJcbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcclxuICAgIGxldCBudW0gPSBOdW1iZXIocXVlcnkucGFnZSkgPyBOdW1iZXIocXVlcnkucGFnZSkgKyAxIDogMjtcclxuICAgIGlmIChudW0gPiBjb3VudCkge1xyXG4gICAgICBudW0gPSAxO1xyXG4gICAgfVxyXG4gICAgcHVzaChgLz9wYWdlPSR7bnVtfWApO1xyXG4gIH07XHJcblxyXG4gIGxldCBuVG90YWwgPVxyXG4gICAgbWFrZU1vZGVsLmxlbmd0aCA+IDBcclxuICAgICAgPyBtYWtlTW9kZWwubGVuZ3RoXHJcbiAgICAgIDogbWFrZUZpbHRlcnMubGVuZ3RoID4gMFxyXG4gICAgICA/IG1ha2VGaWx0ZXJzLmxlbmd0aFxyXG4gICAgICA6IHByaWNlcy5sZW5ndGggPiAwXHJcbiAgICAgID8gcHJpY2VzLmxlbmd0aFxyXG4gICAgICA6IHRvdGFsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJvdyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmdMZWZ0OiBcIjFlbVwiIH19PlxyXG4gICAgICA8Q29sIGNsYXNzTmFtZT0nZ3V0dGVyLXJvdycgeHhsPXs2fSB4bD17Nn0gbGc9ezh9IG1kPXs4fSBzbT17OH0geHM9ezI0fT5cclxuICAgICAgICA8QWZmaXggb2Zmc2V0VG9wPXsxMH0+XHJcbiAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj0nY2VudGVyJz5GaWx0ZXIgQ2FyczwvRGl2aWRlcj5cclxuICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgIHNldFNlbGVjdD17c2V0U2VsZWN0fVxyXG4gICAgICAgICAgICBzZWxlY3Q9e3NlbGVjdH1cclxuICAgICAgICAgICAgbWFrZXM9e21ha2VzfVxyXG4gICAgICAgICAgICBtb2RlbHM9e21vZGVsc31cclxuICAgICAgICAgICAgblRvdGFsPXtuVG90YWx9XHJcbiAgICAgICAgICAgIHRvdGFsPXt0b3RhbH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9BZmZpeD5cclxuICAgICAgPC9Db2w+XHJcbiAgICAgIDxDb2wgb2Zmc2V0PXsxfSB4eGw9ezE3fSB4bD17MTd9IGxnPXsxNX0gbWQ9ezE1fSBzbT17MTV9IHhzPXsyNH0+XHJcbiAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249J2xlZnQnPkNhcnM8L0RpdmlkZXI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHthbGxDYXJzKCkubGVuZ3RoIDw9IDAgJiYgPEVtcHR5IC8+fVxyXG4gICAgICAgICAge2FsbENhcnMoKS5tYXAoKGNhcjogQ2FySW50ZXJmYWNlKSA9PiAoXHJcbiAgICAgICAgICAgIDxBbGxDYXJzIGtleT17Y2FyLl9pZH0gY2FyPXtjYXJ9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIHthbGxDYXJzKCkubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgIDxVbCBjbGFzc05hbWU9J3BhZ2luYXRlJz5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdhcnJvd19sZWZ0JyBvbkNsaWNrPXtwcmV2fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiYjODU5Mjs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICB7QXJyYXkoY291bnQpXHJcbiAgICAgICAgICAgICAgICAuZmlsbChudWxsKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgodiwgaTogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHF1ZXJ5LnBhZ2UpID09PSBpICsgMSA/IFwiYWN0aXZlXCIgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHVzaChgLz9wYWdlPSR7aSArIDF9YCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aSArIDF9XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdhcnJvd19yaWdodCcgb25DbGljaz17bmV4dH0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4mIzg1OTQ7PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvVWw+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbD5cclxuICAgIDwvUm93PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcbiAgbGV0IG1ha2UgPSBjdHgucXVlcnkubWFrZSA/IGN0eC5xdWVyeS5tYWtlIDogbnVsbDtcclxuICBsZXQgbW9kID0gY3R4LnF1ZXJ5Lm1vZGVsID8gY3R4LnF1ZXJ5Lm1vZGVsIDogbnVsbDtcclxuICBsZXQgbWluID0gY3R4LnF1ZXJ5Lm1pbiA/IGN0eC5xdWVyeS5taW4gOiBudWxsO1xyXG4gIGxldCBtYXggPSBjdHgucXVlcnkubWF4ID8gY3R4LnF1ZXJ5Lm1heCA6IG51bGw7XHJcblxyXG4gIGxldCBwYWdlID0gTnVtYmVyKGN0eC5xdWVyeS5wYWdlKSB8fCAxO1xyXG4gIGxldCBsaW1pdCA9IE51bWJlcihjdHgucXVlcnkubGltaXQpIHx8IDQ7XHJcblxyXG4gIGNvbnN0IGNvdW50X3VybCA9IGBodHRwczovL2J1eXlvdXJjYXItYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2NvdW50YDtcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9idXl5b3VyY2FyLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9jYXJzP3BhZ2U9JHtwYWdlfSZsaW1pdD0ke2xpbWl0fWA7XHJcbiAgY29uc3QgbWFrZV91cmwgPSBgaHR0cHM6Ly9idXl5b3VyY2FyLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9tYWtlc2A7XHJcbiAgY29uc3QgcHJpY2VfdXJsID0gYGh0dHBzOi8vYnV5eW91cmNhci1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvcHJpY2VzP21pbj0ke21pbn0mbWF4PSR7bWF4fWA7XHJcbiAgY29uc3QgYWxsX3VybCA9IGBodHRwczovL2J1eXlvdXJjYXItYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL3ByaWNlcz9taW49JHttaW59Jm1heD0ke21heH0mbWFrZT0ke21ha2V9Jm1vZGVsPSR7bW9kfWA7XHJcbiAgY29uc3QgYmFzZV9vbl9tYWtlX3VybCA9IGBodHRwczovL2J1eXlvdXJjYXItYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2NhcnMvbWFrZS8ke21ha2V9YDtcclxuICBjb25zdCBtb2RlbF91cmwgPSBgaHR0cHM6Ly9idXl5b3VyY2FyLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9tb2RlbHMvJHttYWtlfWA7XHJcbiAgY29uc3QgbWFrZV9tb2RlbF91cmwgPSBgaHR0cHM6Ly9idXl5b3VyY2FyLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9jYXJzL21vZGVsL21ha2U/bWFrZT0ke21ha2V9Jm1vZGVsPSR7bW9kfWA7XHJcbiAgY29uc3QgW1xyXG4gICAgcmVzLFxyXG4gICAgZmlsdGVyLFxyXG4gICAgbW9kZWwsXHJcbiAgICBiYXNlX21ha2UsXHJcbiAgICBtYWttb2QsXHJcbiAgICBwcmljZSxcclxuICAgIGxlbmd0aCxcclxuICAgIGFsbCxcclxuICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgZmV0Y2godXJsKSxcclxuICAgIGZldGNoKG1ha2VfdXJsKSxcclxuICAgIGZldGNoKG1vZGVsX3VybCksXHJcbiAgICBmZXRjaChiYXNlX29uX21ha2VfdXJsKSxcclxuICAgIGZldGNoKG1ha2VfbW9kZWxfdXJsKSxcclxuICAgIGZldGNoKHByaWNlX3VybCksXHJcbiAgICBmZXRjaChjb3VudF91cmwpLFxyXG4gICAgZmV0Y2goYWxsX3VybCksXHJcbiAgXSk7XHJcbiAgY29uc3QgY2FycyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc3QgbWFrZXMgPSBhd2FpdCBmaWx0ZXIuanNvbigpO1xyXG4gIGNvbnN0IHByaWNlcyA9IGF3YWl0IHByaWNlLmpzb24oKTtcclxuICBjb25zdCBtb2RlbHMgPSBhd2FpdCBtb2RlbC5qc29uKCk7XHJcbiAgY29uc3QgYmFzZU1ha2UgPSBhd2FpdCBiYXNlX21ha2UuanNvbigpO1xyXG4gIGNvbnN0IG1ha2VNb2RlbCA9IGF3YWl0IG1ha21vZC5qc29uKCk7XHJcbiAgbGV0IGNvdW50ID0gYXdhaXQgbGVuZ3RoLmpzb24oKTtcclxuICBsZXQgYWxsX3F1ZXJ5ID0gYXdhaXQgYWxsLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGNhcnM6IGNhcnMuZGF0YSxcclxuICAgICAgbWFrZXM6IG1ha2VzLmRhdGEsXHJcbiAgICAgIG1vZGVsczogbW9kZWxzLmRhdGEsXHJcbiAgICAgIG1ha2VGaWx0ZXJzOiBiYXNlTWFrZS5kYXRhLFxyXG4gICAgICBtYWtlTW9kZWw6IG1ha2VNb2RlbC5kYXRhLFxyXG4gICAgICBwcmljZXM6IHByaWNlcy5kYXRhLFxyXG4gICAgICBjb3VudDogTWF0aC5jZWlsKGNvdW50LmRhdGEgLyBsaW1pdCksXHJcbiAgICAgIHRvdGFsOiBjb3VudC5kYXRhLFxyXG4gICAgICBhbGw6IGFsbF9xdWVyeS5kYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDAlIDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBVbCA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDFlbSAwO1xyXG5cclxuICBsaSB7XHJcbiAgICAvKiBwYWRkaW5nOiAwIDFlbTsgKi9cclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFycm93X3JpZ2h0LFxyXG4gIC5hcnJvd19sZWZ0IHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMmVtKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xyXG4gIGdhcDogMmVtO1xyXG5cclxuICAucGFnaW5hdGUge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgLyogcGFkZGluZzogMCAxZW07ICovXHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hcnJvd19yaWdodCxcclxuICAgIC5hcnJvd19sZWZ0IHtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIge1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAyMHZoO1xyXG4gIH1cclxuXHJcbiAgLmNvdW50IHtcclxuICAgIHBhZGRpbmc6IDFlbSAwO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIH1cclxuYDtcclxuIiwiZXhwb3J0IGNvbnN0IGZvcm1hdFByaWNlID0gKHByaWNlKSA9PiB7XHJcbiAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xyXG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChwcmljZSkuc2xpY2UoMSwgLTMpO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=