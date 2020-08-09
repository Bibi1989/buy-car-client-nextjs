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
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    orientation: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
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
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxsQ2Fycy9BbGxDYXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Zvcm1hdFByaWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImJtdyIsInRveW90YSIsImhvbmRhIiwibGV4dXMiLCJBbGxDYXJzIiwiY2FyIiwiX2lkIiwibmFtZSIsIm1vZGVsIiwieWVhciIsImxvY2F0aW9uIiwiY29sb3IiLCJkZXNjcmlwdGlvbiIsInBob3RvX3VybCIsInByaWNlIiwicHVzaCIsInVzZVJvdXRlciIsInBob3RvIiwiaW1nIiwiaGFuZGxlTmF2IiwiaWQiLCJ3aWR0aCIsInNwbGl0IiwidG9VcHBlckNhc2UiLCJmb3JtYXRQcmljZSIsInNsaWNlIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiR3JpZCIsIkltYWdlIiwiQ29udGVudCIsIlN1Yk1lbnUiLCJNZW51IiwiT3B0aW9uIiwiU2VsZWN0IiwiU2lkZWJhciIsInNldFNlbGVjdCIsInNlbGVjdCIsIm1ha2VzIiwibW9kZWxzIiwidG90YWwiLCJuVG90YWwiLCJtb2QiLCJzZXRNb2QiLCJ1c2VTdGF0ZSIsInF1ZXJ5IiwicHJpY2VzIiwidXNlRWZmZWN0IiwiZ2V0TW9kZWxzIiwicmVzIiwiZmV0Y2giLCJtYWtlIiwibW9kcyIsImpzb24iLCJuZXdNb2RlbHMiLCJoYW5kbGVTZWFyY2giLCJwYXRobmFtZSIsImhhbmRsZUNsaWNrIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luVG9wIiwicGFkZGluZyIsInBhZGRpbmdMZWZ0IiwibWFwIiwiY291bnQiLCJkYXRhIiwibWluIiwibWF4IiwiTGlzdCIsIlNlbGVjdHMiLCJCdXR0b25zIiwiYnV0dG9uIiwiYmFja2dyb3VuZCIsIkluZGV4UGFnZSIsImNhcnMiLCJtYWtlRmlsdGVycyIsIm1ha2VNb2RlbCIsImFsbCIsImFsbENhcnMiLCJxdWVyeUNhcnMiLCJsZW5ndGgiLCJhIiwiU2V0IiwibSIsInByZXYiLCJudW0iLCJOdW1iZXIiLCJwYWdlIiwibmV4dCIsIkFycmF5IiwiZmlsbCIsInYiLCJpIiwidW5kZWZpbmVkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwibGltaXQiLCJjb3VudF91cmwiLCJ1cmwiLCJtYWtlX3VybCIsInByaWNlX3VybCIsImFsbF91cmwiLCJiYXNlX29uX21ha2VfdXJsIiwibW9kZWxfdXJsIiwibWFrZV9tb2RlbF91cmwiLCJmaWx0ZXIiLCJiYXNlX21ha2UiLCJtYWttb2QiLCJQcm9taXNlIiwiYmFzZU1ha2UiLCJhbGxfcXVlcnkiLCJwcm9wcyIsIk1hdGgiLCJjZWlsIiwiVWwiLCJ1bCIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBckI7QUFxQ0EsTUFBTXpGLElBQUksR0FBR0Ysd0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXhCLEM7Ozs7Ozs7Ozs7OztBQ2hRQTtBQUFBO0FBQU8sTUFBTUosV0FBVyxHQUFJVixLQUFELElBQVc7QUFDcEMsUUFBTXlHLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDL0NDLFNBQUssRUFBRSxVQUR3QztBQUUvQ0MsWUFBUSxFQUFFO0FBRnFDLEdBQS9CLENBQWxCO0FBS0EsU0FBT0osU0FBUyxDQUFDSyxNQUFWLENBQWlCOUcsS0FBakIsRUFBd0JXLEtBQXhCLENBQThCLENBQTlCLEVBQWlDLENBQUMsQ0FBbEMsQ0FBUDtBQUNELENBUE0sQzs7Ozs7Ozs7Ozs7QUNBUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdFByaWNlXCI7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IGJtdyA9IFwiLi9hc3NldHMvYm13LmpwZ1wiO1xyXG5jb25zdCB0b3lvdGEgPSBcIi4vYXNzZXRzL3RveW90YS5qcGdcIjtcclxuY29uc3QgaG9uZGEgPSBcIi4vYXNzZXRzL2hvbmRhLmpwZ1wiO1xyXG5jb25zdCBsZXh1cyA9IFwiLi9hc3NldHMvbGV4dXMuanBnXCI7XHJcblxyXG5jb25zdCBBbGxDYXJzID0gKHtcclxuICBjYXI6IHtcclxuICAgIF9pZCxcclxuICAgIG5hbWUsXHJcbiAgICBtb2RlbCxcclxuICAgIHllYXIsXHJcbiAgICBsb2NhdGlvbixcclxuICAgIGNvbG9yLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBwaG90b191cmwsXHJcbiAgICBwcmljZSxcclxuICB9LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyBwdXNoIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwaG90byA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltZyA9IHBob3RvX3VybFxyXG4gICAgICA/IHBob3RvX3VybFxyXG4gICAgICA6IG5hbWUgPT09IFwiYm13XCJcclxuICAgICAgPyBibXdcclxuICAgICAgOiBuYW1lID09PSBcInRveW90YVwiXHJcbiAgICAgID8gdG95b3RhXHJcbiAgICAgIDogbmFtZSA9PT0gXCJob25kYVwiXHJcbiAgICAgID8gaG9uZGFcclxuICAgICAgOiBsZXh1cztcclxuICAgIHJldHVybiBpbWc7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmF2ID0gKGlkKSA9PiB7XHJcbiAgICBwdXNoKGAvdmVoaWNsZS8ke25hbWV9LyR7bW9kZWx9LyR7aWR9YCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdyBndXR0ZXI9e1sxNiwgMTZdfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gYWxpZ249J21pZGRsZSc+XHJcbiAgICAgIDxDb2wgeHhsPXsxMn0geGw9ezEyfSBsZz17MTJ9IG1kPXsyNH0gc209ezI0fSB4cz17MjR9PlxyXG4gICAgICAgIDxJbWFnZSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOYXYoX2lkKX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz17cGhvdG9fdXJsIHx8IGJtd30gYWx0PSdjYXJzIHBvc3RlcicgLz5cclxuICAgICAgICA8L0ltYWdlPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCB4eGw9ezEyfSB4bD17MTJ9IGxnPXsxMn0gbWQ9ezI0fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgPENvbnRlbnQgY29sb3I9e2NvbG9yLnNwbGl0KFwiIFwiKVswXX0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdtYWtlJz5cclxuICAgICAgICAgICAgPHNwYW4+e25hbWUudG9VcHBlckNhc2UoKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtb2RlbCc+Q2FyIE1vZGVsOiB7bW9kZWx9PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0neWVhcic+TWFudWZhY3R1cmluZyBZZWFyOiB7eWVhcn08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3ByaWNlJz5DYXIgUHJpY2U6IOKCpiB7Zm9ybWF0UHJpY2UocHJpY2UpfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbG9jYXRpb24nPkxvY2F0aW9uOiB7bG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+e2Ake2Rlc2NyaXB0aW9uLnNsaWNlKDAsIDUwKX0uLi5gfTwvcD5cclxuICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbENhcnM7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XHJcbmA7XHJcbmNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBnYXA6IDJlbTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG5gO1xyXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXY8eyBjb2xvcjogc3RyaW5nIH0+YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgcCxcclxuICBoMixcclxuICBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICAubWFrZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgYmFja2dyb3VuZDogJHsoeyBjb2xvciB9KSA9PlxyXG4gICAgICAgIGNvbG9yID09PSBcIndoaXRlXCIgPyBcIiNjY2NjY2NcIiA6IGNvbG9yID8gY29sb3IgOiBcIiNhYWFhYWFcIn07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbi8vICBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBgXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTWVudSwgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdFByaWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgUmFkYXJDaGFydE91dGxpbmVkLFxyXG4gIFFxT3V0bGluZWQsXHJcbiAgRG9sbGFyT3V0bGluZWQsXHJcbiAgS2V5T3V0bGluZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcbmNvbnN0IHsgT3B0aW9uIH06IGFueSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoeyBzZXRTZWxlY3QsIHNlbGVjdCwgbWFrZXMsIG1vZGVscywgdG90YWwsIG5Ub3RhbCB9KSA9PiB7XHJcbiAgY29uc3QgW21vZCwgc2V0TW9kXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XHJcbiAgY29uc3QgeyBxdWVyeSwgcHVzaCB9OiB7IHF1ZXJ5OiBhbnk7IHB1c2g6IGFueSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcHJpY2VzID0gW1xyXG4gICAgNTAwMDAwLFxyXG4gICAgMTAwMDAwMCxcclxuICAgIDE1MDAwMDAsXHJcbiAgICAyMDAwMDAwLFxyXG4gICAgMjUwMDAwMCxcclxuICAgIDMwMDAwMDAsXHJcbiAgICAxMDAwMDAwMCxcclxuICAgIDIwMDAwMDAwLFxyXG4gICAgMzAwMDAwMDAsXHJcbiAgICA0MDAwMDAwMCxcclxuICAgIDUwMDAwMDAwLFxyXG4gIF07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRNb2RlbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2J1eXlvdXJjYXItYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL21vZGVscy8ke3NlbGVjdC5tYWtlfWBcclxuICAgICAgKTtcclxuICAgICAgbGV0IG1vZHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAvLyBsZXQgazogYW55ID0gbmV3IFNldChtb2RzLmRhdGEgPyBtb2RzLmRhdGEubWFwKChtKSA9PiBtKSA6IFtdKTtcclxuICAgICAgLy8gbGV0IG4gPSBbLi4ua107XHJcbiAgICAgIHNldE1vZChtb2RzKTtcclxuICAgIH07XHJcbiAgICBnZXRNb2RlbHMoKTtcclxuICB9LCBbc2VsZWN0XSk7XHJcblxyXG4gIGxldCBuZXdNb2RlbHMgPSBtb2QgPyBtb2QgOiBtb2RlbHM7XHJcbiAgLy8gY29uc29sZS5sb2cobW9kZWxzKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgcHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiBcIi9cIixcclxuICAgICAgcXVlcnk6IHNlbGVjdCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAvLyBwdXNoKHtcclxuICAgIC8vICAgcGF0aG5hbWU6IFwiL1wiLFxyXG4gICAgLy8gICBxdWVyeTogc2VsZWN0LFxyXG4gICAgLy8gfSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBsb2FkaW5nPXtmYWxzZX1cclxuICAgICAgICB0eXBlPSdwcmltYXJ5J1xyXG4gICAgICAgIHNoYXBlPSdyb3VuZCdcclxuICAgICAgICBpY29uPXs8S2V5T3V0bGluZWQgLz59XHJcbiAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMmVtXCIgfX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBwdXNoKFwiL1wiKX1cclxuICAgICAgPlxyXG4gICAgICAgIEFsbCBDYXJzICh7dG90YWx9KVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPE1lbnUgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IG1vZGU9J2lubGluZSc+XHJcbiAgICAgICAgPFN1Yk1lbnVcclxuICAgICAgICAgIGtleT0nc3ViMSdcclxuICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPFFxT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5DYXIgTWFrZXM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMWVtXCIsIHBhZGRpbmdMZWZ0OiBcIjJlbVwiIH19PlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdCh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdCxcclxuICAgICAgICAgICAgICAgICAgbWFrZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9J0NhciBNYWtlcydcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17cXVlcnkubWFrZX0+XHJcbiAgICAgICAgICAgICAgICB7cXVlcnkubWFrZSB8fCBcIiBTZWxlY3QgYSBtYWtlXCJ9XHJcbiAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAge21ha2VzLm1hcCgobWFrZTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17bWFrZS5tYWtlfSB2YWx1ZT17bWFrZS5tYWtlfT5cclxuICAgICAgICAgICAgICAgICAge21ha2UubWFrZX0gKHttYWtlLmNvdW50fSlcclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICA8U3ViTWVudVxyXG4gICAgICAgICAga2V5PSdzdWIyJ1xyXG4gICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8UmFkYXJDaGFydE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Q2FyIE1vZGVsczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxZW1cIiwgcGFkZGluZ0xlZnQ6IFwiMmVtXCIgfX0+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0KHtcclxuICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0LFxyXG4gICAgICAgICAgICAgICAgICBtb2RlbDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9J0NhciBNb2RlbCdcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e3F1ZXJ5Lm1vZGVsfT5cclxuICAgICAgICAgICAgICAgIHtxdWVyeS5tb2RlbCB8fCBcIiBTZWxlY3QgYSBtb2RlbFwifVxyXG4gICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIHtuZXdNb2RlbHMuZGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgbmV3TW9kZWxzLmRhdGEubWFwKChtb2RlbDogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXttb2RlbC5tb2RlbH0gdmFsdWU9e21vZGVsLm1vZGVsfT5cclxuICAgICAgICAgICAgICAgICAgICB7bW9kZWwubW9kZWx9ICh7bW9kZWwuY291bnR9KVxyXG4gICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICA8U3ViTWVudVxyXG4gICAgICAgICAga2V5PSdzdWIzJ1xyXG4gICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8RG9sbGFyT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5NaW5pbXVtIFByaWNlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFlbVwiLCBwYWRkaW5nTGVmdDogXCIyZW1cIiB9fT5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAuLi5zZWxlY3QsXHJcbiAgICAgICAgICAgICAgICAgIG1pbjogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9J0NhciBNaW5pbXVtIFByaWNlJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17cXVlcnkubWlufT57cXVlcnkubWluIHx8IFwiTWluaW11bSBQcmljZXNcIn08L09wdGlvbj5cclxuICAgICAgICAgICAgICB7cHJpY2VzLm1hcCgocHJpY2U6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e3ByaWNlfSB2YWx1ZT17cHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgICB7Zm9ybWF0UHJpY2UocHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgIDxTdWJNZW51XHJcbiAgICAgICAgICBrZXk9J3N1YjQnXHJcbiAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxEb2xsYXJPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPk1heGltdW0gUHJpY2U8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMWVtXCIsIHBhZGRpbmdMZWZ0OiBcIjJlbVwiIH19PlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdCh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdCxcclxuICAgICAgICAgICAgICAgICAgbWF4OiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT0nQ2FyIE1heGltdW0gUHJpY2UnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtxdWVyeS5tYXh9PntxdWVyeS5tYXggfHwgXCJNYXhpbXVtIFByaWNlc1wifTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIHtwcmljZXMubWFwKChwcmljZTogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17cHJpY2V9IHZhbHVlPXtwcmljZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtmb3JtYXRQcmljZShwcmljZSl9XHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgIDwvTWVudT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGxvYWRpbmc9e2ZhbHNlfVxyXG4gICAgICAgIHR5cGU9J3ByaW1hcnknXHJcbiAgICAgICAgc2hhcGU9J3JvdW5kJ1xyXG4gICAgICAgIGljb249ezxLZXlPdXRsaW5lZCAvPn1cclxuICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpblRvcDogXCIyZW1cIiB9fVxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgPlxyXG4gICAgICAgIFNlYXJjaCBGb3IgQ2FyXHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPSdjb3VudCc+e25Ub3RhbH0gQ2FycyBGb3VuZCEhITwvcD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XHJcblxyXG4gIGgyIHtcclxuICAgIHBhZGRpbmc6IDFlbSAwO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBMaXN0ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gIH1cclxuYDtcclxuY29uc3QgU2VsZWN0cyA9IHN0eWxlZC5zZWxlY3RgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuYDtcclxuY29uc3QgQnV0dG9ucyA9IHN0eWxlZC5idXR0b248eyBiYWNrZ3JvdW5kOiBzdHJpbmcgfT5gXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAkeyh7IGJhY2tncm91bmQgfSkgPT4gKGJhY2tncm91bmQgPyBcIjFweCBzb2xpZCAjY2NjY2NjXCIgOiBcIm5vbmVcIil9O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMC43ZW0gMS41ZW07XHJcbiAgYmFja2dyb3VuZDogJHsoeyBiYWNrZ3JvdW5kIH0pID0+IChiYWNrZ3JvdW5kID8gYmFja2dyb3VuZCA6IFwidGVhbFwiKX07XHJcbiAgY29sb3I6ICR7KHsgYmFja2dyb3VuZCB9KSA9PiAoYmFja2dyb3VuZCA/IFwiIzMzMzMzM1wiIDogXCJ3aGl0ZVwiKX07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuLy8gY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBgO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEFsbENhcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWxsQ2Fycy9BbGxDYXJzXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgRGl2aWRlciwgRW1wdHksIEFmZml4IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmludGVyZmFjZSBDYXJJbnRlcmZhY2Uge1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBtb2RlbDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpY2U6IHN0cmluZztcclxuICBkaXN0YW5jZTogc3RyaW5nO1xyXG4gIGZ1ZWxfdHlwZTogc3RyaW5nO1xyXG4gIHBob3RvX3VybDogc3RyaW5nO1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgeWVhcjogc3RyaW5nO1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTZWxlY3RQcm9wcyB7XHJcbiAgbWFrZTogc3RyaW5nO1xyXG4gIG1vZGVsOiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxuICBtaW46IG51bWJlcjtcclxuICBtYXg6IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gSW5kZXhQYWdlKHtcclxuICBjYXJzLFxyXG4gIG1ha2VzLFxyXG4gIG1vZGVscyxcclxuICBtYWtlRmlsdGVycyxcclxuICBtYWtlTW9kZWwsXHJcbiAgcHJpY2VzLFxyXG4gIGNvdW50LFxyXG4gIHRvdGFsLFxyXG4gIGFsbCxcclxufToge1xyXG4gIGNhcnM/OiBDYXJJbnRlcmZhY2VbXTtcclxuICBtYWtlcz86IGFueVtdO1xyXG4gIHByaWNlcz86IGFueVtdO1xyXG4gIG1vZGVscz86IGFueVtdO1xyXG4gIG1ha2VGaWx0ZXJzPzogYW55W107XHJcbiAgYWxsPzogYW55W107XHJcbiAgbWFrZU1vZGVsPzogYW55W107XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICB0b3RhbDogbnVtYmVyO1xyXG59KSB7XHJcbiAgY29uc3QgW3NlbGVjdCwgc2V0U2VsZWN0XSA9IHVzZVN0YXRlPFNlbGVjdFByb3BzPih7XHJcbiAgICBtYWtlOiBcIlwiLFxyXG4gICAgbW9kZWw6IFwiXCIsXHJcbiAgICBsb2NhdGlvbjogXCJcIixcclxuICAgIG1pbjogMCxcclxuICAgIG1heDogMCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBwdXNoLCBxdWVyeSB9OiBhbnkgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgYWxsQ2FycyA9ICgpID0+IHtcclxuICAgIGxldCBxdWVyeUNhcnMgPVxyXG4gICAgICBhbGwubGVuZ3RoID4gMFxyXG4gICAgICAgID8gYWxsXHJcbiAgICAgICAgOiBtYWtlTW9kZWwubGVuZ3RoID4gMFxyXG4gICAgICAgID8gbWFrZU1vZGVsXHJcbiAgICAgICAgOiBtYWtlRmlsdGVycy5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBtYWtlRmlsdGVyc1xyXG4gICAgICAgIDogcHJpY2VzLmxlbmd0aCA+IDBcclxuICAgICAgICA/IHByaWNlc1xyXG4gICAgICAgIDogY2FycztcclxuXHJcbiAgICByZXR1cm4gcXVlcnlDYXJzO1xyXG4gIH07XHJcblxyXG4gIGxldCBhOiBhbnkgPSBuZXcgU2V0KG1vZGVscy5tYXAoKG0pID0+IG0pKTtcclxuXHJcbiAgY29uc3QgcHJldiA9ICgpID0+IHtcclxuICAgIGxldCBudW0gPSBOdW1iZXIocXVlcnkucGFnZSkgPyBOdW1iZXIocXVlcnkucGFnZSkgLSAxIDogMDtcclxuICAgIGlmIChudW0gPD0gMCkge1xyXG4gICAgICBudW0gPSBjb3VudDtcclxuICAgIH1cclxuICAgIHB1c2goYC8/cGFnZT0ke251bX1gKTtcclxuICB9O1xyXG4gIGNvbnN0IG5leHQgPSAoKSA9PiB7XHJcbiAgICBsZXQgbnVtID0gTnVtYmVyKHF1ZXJ5LnBhZ2UpID8gTnVtYmVyKHF1ZXJ5LnBhZ2UpICsgMSA6IDI7XHJcbiAgICBpZiAobnVtID4gY291bnQpIHtcclxuICAgICAgbnVtID0gMTtcclxuICAgIH1cclxuICAgIHB1c2goYC8/cGFnZT0ke251bX1gKTtcclxuICB9O1xyXG5cclxuICBsZXQgblRvdGFsID1cclxuICAgIG1ha2VNb2RlbC5sZW5ndGggPiAwXHJcbiAgICAgID8gbWFrZU1vZGVsLmxlbmd0aFxyXG4gICAgICA6IG1ha2VGaWx0ZXJzLmxlbmd0aCA+IDBcclxuICAgICAgPyBtYWtlRmlsdGVycy5sZW5ndGhcclxuICAgICAgOiBwcmljZXMubGVuZ3RoID4gMFxyXG4gICAgICA/IHByaWNlcy5sZW5ndGhcclxuICAgICAgOiB0b3RhbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3cgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nTGVmdDogXCIxZW1cIiB9fT5cclxuICAgICAgPENvbCBjbGFzc05hbWU9J2d1dHRlci1yb3cnIHh4bD17Nn0geGw9ezZ9IGxnPXs4fSBtZD17OH0gc209ezh9IHhzPXsyNH0+XHJcbiAgICAgICAgey8qIDxBZmZpeCBvZmZzZXRUb3A9ezEwfT4gKi99XHJcbiAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249J2NlbnRlcic+RmlsdGVyIENhcnM8L0RpdmlkZXI+XHJcbiAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgIHNldFNlbGVjdD17c2V0U2VsZWN0fVxyXG4gICAgICAgICAgc2VsZWN0PXtzZWxlY3R9XHJcbiAgICAgICAgICBtYWtlcz17bWFrZXN9XHJcbiAgICAgICAgICBtb2RlbHM9e21vZGVsc31cclxuICAgICAgICAgIG5Ub3RhbD17blRvdGFsfVxyXG4gICAgICAgICAgdG90YWw9e3RvdGFsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIDwvQWZmaXg+ICovfVxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBvZmZzZXQ9ezF9IHh4bD17MTd9IHhsPXsxN30gbGc9ezE1fSBtZD17MTV9IHNtPXsxNX0geHM9ezI0fT5cclxuICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj0nbGVmdCc+Q2FyczwvRGl2aWRlcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2FsbENhcnMoKS5sZW5ndGggPD0gMCAmJiA8RW1wdHkgLz59XHJcbiAgICAgICAgICB7YWxsQ2FycygpLm1hcCgoY2FyOiBDYXJJbnRlcmZhY2UpID0+IChcclxuICAgICAgICAgICAgPEFsbENhcnMga2V5PXtjYXIuX2lkfSBjYXI9e2Nhcn0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAge2FsbENhcnMoKS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPFVsIGNsYXNzTmFtZT0ncGFnaW5hdGUnPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Fycm93X2xlZnQnIG9uQ2xpY2s9e3ByZXZ9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+JiM4NTkyOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIHtBcnJheShjb3VudClcclxuICAgICAgICAgICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgICAgICAgICAubWFwKCh2LCBpOiBudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIocXVlcnkucGFnZSkgPT09IGkgKyAxID8gXCJhY3RpdmVcIiA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwdXNoKGAvP3BhZ2U9JHtpICsgMX1gKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpICsgMX1cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Fycm93X3JpZ2h0JyBvbkNsaWNrPXtuZXh0fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiYjODU5NDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9VbD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcclxuICBsZXQgbWFrZSA9IGN0eC5xdWVyeS5tYWtlID8gY3R4LnF1ZXJ5Lm1ha2UgOiBudWxsO1xyXG4gIGxldCBtb2QgPSBjdHgucXVlcnkubW9kZWwgPyBjdHgucXVlcnkubW9kZWwgOiBudWxsO1xyXG4gIGxldCBtaW4gPSBjdHgucXVlcnkubWluID8gY3R4LnF1ZXJ5Lm1pbiA6IG51bGw7XHJcbiAgbGV0IG1heCA9IGN0eC5xdWVyeS5tYXggPyBjdHgucXVlcnkubWF4IDogbnVsbDtcclxuXHJcbiAgbGV0IHBhZ2UgPSBOdW1iZXIoY3R4LnF1ZXJ5LnBhZ2UpIHx8IDE7XHJcbiAgbGV0IGxpbWl0ID0gTnVtYmVyKGN0eC5xdWVyeS5saW1pdCkgfHwgNDtcclxuXHJcbiAgY29uc3QgY291bnRfdXJsID0gYGh0dHBzOi8vYnV5eW91cmNhci1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvY291bnRgO1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2J1eXlvdXJjYXItYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2NhcnM/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YDtcclxuICBjb25zdCBtYWtlX3VybCA9IGBodHRwczovL2J1eXlvdXJjYXItYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL21ha2VzYDtcclxuICBjb25zdCBwcmljZV91cmwgPSBgaHR0cHM6Ly9idXl5b3VyY2FyLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9wcmljZXM/bWluPSR7bWlufSZtYXg9JHttYXh9YDtcclxuICBjb25zdCBhbGxfdXJsID0gYGh0dHBzOi8vYnV5eW91cmNhci1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvcHJpY2VzP21pbj0ke21pbn0mbWF4PSR7bWF4fSZtYWtlPSR7bWFrZX0mbW9kZWw9JHttb2R9YDtcclxuICBjb25zdCBiYXNlX29uX21ha2VfdXJsID0gYGh0dHBzOi8vYnV5eW91cmNhci1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvY2Fycy9tYWtlLyR7bWFrZX1gO1xyXG4gIGNvbnN0IG1vZGVsX3VybCA9IGBodHRwczovL2J1eXlvdXJjYXItYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL21vZGVscy8ke21ha2V9YDtcclxuICBjb25zdCBtYWtlX21vZGVsX3VybCA9IGBodHRwczovL2J1eXlvdXJjYXItYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2NhcnMvbW9kZWwvbWFrZT9tYWtlPSR7bWFrZX0mbW9kZWw9JHttb2R9YDtcclxuICBjb25zdCBbXHJcbiAgICByZXMsXHJcbiAgICBmaWx0ZXIsXHJcbiAgICBtb2RlbCxcclxuICAgIGJhc2VfbWFrZSxcclxuICAgIG1ha21vZCxcclxuICAgIHByaWNlLFxyXG4gICAgbGVuZ3RoLFxyXG4gICAgYWxsLFxyXG4gIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICBmZXRjaCh1cmwpLFxyXG4gICAgZmV0Y2gobWFrZV91cmwpLFxyXG4gICAgZmV0Y2gobW9kZWxfdXJsKSxcclxuICAgIGZldGNoKGJhc2Vfb25fbWFrZV91cmwpLFxyXG4gICAgZmV0Y2gobWFrZV9tb2RlbF91cmwpLFxyXG4gICAgZmV0Y2gocHJpY2VfdXJsKSxcclxuICAgIGZldGNoKGNvdW50X3VybCksXHJcbiAgICBmZXRjaChhbGxfdXJsKSxcclxuICBdKTtcclxuICBjb25zdCBjYXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zdCBtYWtlcyA9IGF3YWl0IGZpbHRlci5qc29uKCk7XHJcbiAgY29uc3QgcHJpY2VzID0gYXdhaXQgcHJpY2UuanNvbigpO1xyXG4gIGNvbnN0IG1vZGVscyA9IGF3YWl0IG1vZGVsLmpzb24oKTtcclxuICBjb25zdCBiYXNlTWFrZSA9IGF3YWl0IGJhc2VfbWFrZS5qc29uKCk7XHJcbiAgY29uc3QgbWFrZU1vZGVsID0gYXdhaXQgbWFrbW9kLmpzb24oKTtcclxuICBsZXQgY291bnQgPSBhd2FpdCBsZW5ndGguanNvbigpO1xyXG4gIGxldCBhbGxfcXVlcnkgPSBhd2FpdCBhbGwuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY2FyczogY2Fycy5kYXRhLFxyXG4gICAgICBtYWtlczogbWFrZXMuZGF0YSxcclxuICAgICAgbW9kZWxzOiBtb2RlbHMuZGF0YSxcclxuICAgICAgbWFrZUZpbHRlcnM6IGJhc2VNYWtlLmRhdGEsXHJcbiAgICAgIG1ha2VNb2RlbDogbWFrZU1vZGVsLmRhdGEsXHJcbiAgICAgIHByaWNlczogcHJpY2VzLmRhdGEsXHJcbiAgICAgIGNvdW50OiBNYXRoLmNlaWwoY291bnQuZGF0YSAvIGxpbWl0KSxcclxuICAgICAgdG90YWw6IGNvdW50LmRhdGEsXHJcbiAgICAgIGFsbDogYWxsX3F1ZXJ5LmRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMCUgMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IFVsID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMWVtIDA7XHJcblxyXG4gIGxpIHtcclxuICAgIC8qIHBhZGRpbmc6IDAgMWVtOyAqL1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXJyb3dfcmlnaHQsXHJcbiAgLmFycm93X2xlZnQge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyZW0pO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XHJcbiAgZ2FwOiAyZW07XHJcblxyXG4gIC5wYWdpbmF0ZSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAvKiBwYWRkaW5nOiAwIDFlbTsgKi9cclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFycm93X3JpZ2h0LFxyXG4gICAgLmFycm93X2xlZnQge1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhciB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDIwdmg7XHJcbiAgfVxyXG5cclxuICAuY291bnQge1xyXG4gICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgfVxyXG5gO1xyXG4iLCJleHBvcnQgY29uc3QgZm9ybWF0UHJpY2UgPSAocHJpY2UpID0+IHtcclxuICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCB7XHJcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgY3VycmVuY3k6IFwiVVNEXCIsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KHByaWNlKS5zbGljZSgxLCAtMyk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==