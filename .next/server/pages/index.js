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

  const image = JSON.parse(photo_url)[0];
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    gutter: [16, 16],
    style: {
      width: "100%"
    },
    align: "middle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(Image, {
    onClick: () => handleNav(_id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: image || bmw,
    alt: "cars poster",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(Content, {
    color: color.split(" ")[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "make",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, name.toUpperCase()), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })), __jsx("h2", {
    className: "model",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, "Car Model: ", model), __jsx("p", {
    className: "year",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "Manufacturing Year: ", year), __jsx("p", {
    className: "price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "Car Price: \u20A6 ", Object(_utils_formatPrice__WEBPACK_IMPORTED_MODULE_3__["formatPrice"])(price)), __jsx("p", {
    className: "location",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, "Location: ", location), __jsx("p", {
    className: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxsQ2Fycy9BbGxDYXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Zvcm1hdFByaWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImJtdyIsInRveW90YSIsImhvbmRhIiwibGV4dXMiLCJBbGxDYXJzIiwiY2FyIiwiX2lkIiwibmFtZSIsIm1vZGVsIiwieWVhciIsImxvY2F0aW9uIiwiY29sb3IiLCJkZXNjcmlwdGlvbiIsInBob3RvX3VybCIsInByaWNlIiwicHVzaCIsInVzZVJvdXRlciIsInBob3RvIiwiaW1nIiwiaGFuZGxlTmF2IiwiaWQiLCJpbWFnZSIsIkpTT04iLCJwYXJzZSIsIndpZHRoIiwic3BsaXQiLCJ0b1VwcGVyQ2FzZSIsImZvcm1hdFByaWNlIiwic2xpY2UiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJHcmlkIiwiSW1hZ2UiLCJDb250ZW50IiwiU3ViTWVudSIsIk1lbnUiLCJPcHRpb24iLCJTZWxlY3QiLCJTaWRlYmFyIiwic2V0U2VsZWN0Iiwic2VsZWN0IiwibWFrZXMiLCJtb2RlbHMiLCJ0b3RhbCIsIm5Ub3RhbCIsIm1vZCIsInNldE1vZCIsInVzZVN0YXRlIiwicXVlcnkiLCJwcmljZXMiLCJ1c2VFZmZlY3QiLCJnZXRNb2RlbHMiLCJyZXMiLCJmZXRjaCIsIm1ha2UiLCJtb2RzIiwianNvbiIsIm5ld01vZGVscyIsImhhbmRsZVNlYXJjaCIsInBhdGhuYW1lIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwicGFkZGluZ0xlZnQiLCJtYXAiLCJjb3VudCIsImRhdGEiLCJtaW4iLCJtYXgiLCJMaXN0IiwiU2VsZWN0cyIsIkJ1dHRvbnMiLCJidXR0b24iLCJiYWNrZ3JvdW5kIiwiSW5kZXhQYWdlIiwiY2FycyIsIm1ha2VGaWx0ZXJzIiwibWFrZU1vZGVsIiwiYWxsIiwiYWxsQ2FycyIsInF1ZXJ5Q2FycyIsImxlbmd0aCIsImEiLCJTZXQiLCJtIiwicHJldiIsIm51bSIsIk51bWJlciIsInBhZ2UiLCJuZXh0IiwiQXJyYXkiLCJmaWxsIiwidiIsImkiLCJ1bmRlZmluZWQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJsaW1pdCIsImNvdW50X3VybCIsInVybCIsIm1ha2VfdXJsIiwicHJpY2VfdXJsIiwiYWxsX3VybCIsImJhc2Vfb25fbWFrZV91cmwiLCJtb2RlbF91cmwiLCJtYWtlX21vZGVsX3VybCIsImZpbHRlciIsImJhc2VfbWFrZSIsIm1ha21vZCIsIlByb21pc2UiLCJiYXNlTWFrZSIsImFsbF9xdWVyeSIsInByb3BzIiwiTWF0aCIsImNlaWwiLCJVbCIsInVsIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEdBQUcsR0FBRyxrQkFBWjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxxQkFBZjtBQUNBLE1BQU1DLEtBQUssR0FBRyxvQkFBZDtBQUNBLE1BQU1DLEtBQUssR0FBRyxvQkFBZDs7QUFFQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQztBQUNmQyxLQUFHLEVBQUU7QUFDSEMsT0FERztBQUVIQyxRQUZHO0FBR0hDLFNBSEc7QUFJSEMsUUFKRztBQUtIQyxZQUxHO0FBTUhDLFNBTkc7QUFPSEMsZUFQRztBQVFIQyxhQVJHO0FBU0hDO0FBVEc7QUFEVSxDQUFELEtBWVY7QUFDSixRQUFNO0FBQUVDO0FBQUYsTUFBV0MsNkRBQVMsRUFBMUI7O0FBQ0EsUUFBTUMsS0FBSyxHQUFHLE1BQU07QUFDbEIsVUFBTUMsR0FBRyxHQUFHTCxTQUFTLEdBQ2pCQSxTQURpQixHQUVqQk4sSUFBSSxLQUFLLEtBQVQsR0FDQVAsR0FEQSxHQUVBTyxJQUFJLEtBQUssUUFBVCxHQUNBTixNQURBLEdBRUFNLElBQUksS0FBSyxPQUFULEdBQ0FMLEtBREEsR0FFQUMsS0FSSjtBQVNBLFdBQU9lLEdBQVA7QUFDRCxHQVhEOztBQWFBLFFBQU1DLFNBQVMsR0FBSUMsRUFBRCxJQUFRO0FBQ3hCTCxRQUFJLENBQUUsWUFBV1IsSUFBSyxJQUFHQyxLQUFNLElBQUdZLEVBQUcsRUFBakMsQ0FBSjtBQUNELEdBRkQ7O0FBR0EsUUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1YsU0FBWCxFQUFzQixDQUF0QixDQUFkO0FBQ0EsU0FDRSxNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBYjtBQUF1QixTQUFLLEVBQUU7QUFBRVcsV0FBSyxFQUFFO0FBQVQsS0FBOUI7QUFBaUQsU0FBSyxFQUFDLFFBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdDQUFEO0FBQUssT0FBRyxFQUFFLEVBQVY7QUFBYyxNQUFFLEVBQUUsRUFBbEI7QUFBc0IsTUFBRSxFQUFFLEVBQTFCO0FBQThCLE1BQUUsRUFBRSxFQUFsQztBQUFzQyxNQUFFLEVBQUUsRUFBMUM7QUFBOEMsTUFBRSxFQUFFLEVBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUUsTUFBTUwsU0FBUyxDQUFDYixHQUFELENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRWUsS0FBSyxJQUFJckIsR0FBbkI7QUFBd0IsT0FBRyxFQUFDLGFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFNRSxNQUFDLHdDQUFEO0FBQUssT0FBRyxFQUFFLEVBQVY7QUFBYyxNQUFFLEVBQUUsRUFBbEI7QUFBc0IsTUFBRSxFQUFFLEVBQTFCO0FBQThCLE1BQUUsRUFBRSxFQUFsQztBQUFzQyxNQUFFLEVBQUUsRUFBMUM7QUFBOEMsTUFBRSxFQUFFLEVBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBUyxTQUFLLEVBQUVXLEtBQUssQ0FBQ2MsS0FBTixDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT2xCLElBQUksQ0FBQ21CLFdBQUwsRUFBUCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRTtBQUFJLGFBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWtDbEIsS0FBbEMsQ0FMRixFQU1FO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBeUNDLElBQXpDLENBTkYsRUFPRTtBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQW1Da0Isc0VBQVcsQ0FBQ2IsS0FBRCxDQUE5QyxDQVBGLEVBUUU7QUFBRyxhQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFtQ0osUUFBbkMsQ0FSRixFQVNFO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QixHQUFFRSxXQUFXLENBQUNnQixLQUFaLENBQWtCLENBQWxCLEVBQXFCLEVBQXJCLENBQXlCLEtBQXhELENBVEYsQ0FERixDQU5GLENBREY7QUFzQkQsQ0FyREQ7O0FBdURleEIsc0VBQWY7QUFFQSxNQUFNeUIsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJOzs7Q0FBN0I7QUFJQSxNQUFNQyxJQUFJLEdBQUdGLHdEQUFNLENBQUNDLEdBQUk7Ozs7O0NBQXhCO0FBTUEsTUFBTUUsS0FBSyxHQUFHSCx3REFBTSxDQUFDQyxHQUFJOzs7Ozs7Ozs7Q0FBekI7QUFVQSxNQUFNRyxPQUFPLEdBQUdKLHdEQUFNLENBQUNDLEdBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQW1CMUIsQ0FBQztBQUFFcEI7QUFBRixDQUFELEtBQ1pBLEtBQUssS0FBSyxPQUFWLEdBQW9CLFNBQXBCLEdBQWdDQSxLQUFLLEdBQUdBLEtBQUgsR0FBVyxTQUFVOzs7OztDQXBCbEUsQyxDQTBCQSxnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLE1BQU07QUFBRXdCO0FBQUYsSUFBY0MseUNBQXBCO0FBQ0EsTUFBTTtBQUFFQztBQUFGLElBQWtCQywyQ0FBeEI7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQyxRQUFiO0FBQXFCQyxPQUFyQjtBQUE0QkMsUUFBNUI7QUFBb0NDLE9BQXBDO0FBQTJDQztBQUEzQyxDQUFELEtBQXlEO0FBQ3ZFLFFBQU07QUFBQSxPQUFDQyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQkMsc0RBQVEsQ0FBTSxJQUFOLENBQTlCO0FBQ0EsUUFBTTtBQUFFQyxTQUFGO0FBQVNsQztBQUFULE1BQTZDQyw2REFBUyxFQUE1RDtBQUNBLFFBQU1rQyxNQUFNLEdBQUcsQ0FDYixNQURhLEVBRWIsT0FGYSxFQUdiLE9BSGEsRUFJYixPQUphLEVBS2IsT0FMYSxFQU1iLE9BTmEsRUFPYixRQVBhLEVBUWIsUUFSYSxFQVNiLFFBVGEsRUFVYixRQVZhLEVBV2IsUUFYYSxDQUFmO0FBY0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLFNBQVMsR0FBRyxZQUFZO0FBQzVCLFlBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQ3BCLHNEQUFxRGIsTUFBTSxDQUFDYyxJQUFLLEVBRDdDLENBQXZCO0FBR0EsVUFBSUMsSUFBSSxHQUFHLE1BQU1ILEdBQUcsQ0FBQ0ksSUFBSixFQUFqQixDQUo0QixDQUs1QjtBQUNBOztBQUNBVixZQUFNLENBQUNTLElBQUQsQ0FBTjtBQUNELEtBUkQ7O0FBU0FKLGFBQVM7QUFDVixHQVhRLEVBV04sQ0FBQ1gsTUFBRCxDQVhNLENBQVQ7QUFhQSxNQUFJaUIsU0FBUyxHQUFHWixHQUFHLEdBQUdBLEdBQUgsR0FBU0gsTUFBNUIsQ0E5QnVFLENBK0J2RTs7QUFFQSxRQUFNZ0IsWUFBWSxHQUFHLE1BQU07QUFDekI1QyxRQUFJLENBQUM7QUFDSDZDLGNBQVEsRUFBRSxHQURQO0FBRUhYLFdBQUssRUFBRVI7QUFGSixLQUFELENBQUo7QUFJRCxHQUxEOztBQU1BLFFBQU1vQixXQUFXLEdBQUcsTUFBTSxDQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBTEQ7O0FBT0EsV0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLFlBQVdGLEtBQU0sRUFBOUI7QUFDRDs7QUFDRCxTQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUNFLFdBQU8sRUFBRSxLQURYO0FBRUUsUUFBSSxFQUFDLFNBRlA7QUFHRSxTQUFLLEVBQUMsT0FIUjtBQUlFLFFBQUksRUFBRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKUjtBQUtFLFFBQUksRUFBQyxPQUxQO0FBTUUsU0FBSyxFQUFFO0FBQUV2QyxXQUFLLEVBQUUsTUFBVDtBQUFpQjBDLGVBQVMsRUFBRTtBQUE1QixLQU5UO0FBT0UsV0FBTyxFQUFFLE1BQU1uRCxJQUFJLENBQUMsR0FBRCxDQVByQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVNhNkIsS0FUYixNQURGLEVBWUUsTUFBQyx5Q0FBRDtBQUFNLFNBQUssRUFBRTtBQUFFcEIsV0FBSyxFQUFFO0FBQVQsS0FBYjtBQUFnQyxRQUFJLEVBQUMsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUNFLE9BQUcsRUFBQyxNQUROO0FBRUUsU0FBSyxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsQ0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0U7QUFBSyxTQUFLLEVBQUU7QUFBRTJDLGFBQU8sRUFBRSxLQUFYO0FBQWtCQyxpQkFBVyxFQUFFO0FBQS9CLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFDRSxZQUFRLEVBQUdMLEtBQUQsSUFDUnZCLFNBQVMsaUNBQ0pDLE1BREk7QUFFUGMsVUFBSSxFQUFFUTtBQUZDLE9BRmI7QUFPRSxnQkFBWSxFQUFDLFdBUGY7QUFRRSxTQUFLLEVBQUU7QUFBRXZDLFdBQUssRUFBRTtBQUFULEtBUlQsQ0FTRTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXRSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUV5QixLQUFLLENBQUNNLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sS0FBSyxDQUFDTSxJQUFOLElBQWMsZ0JBRGpCLENBWEYsRUFjR2IsS0FBSyxDQUFDMkIsR0FBTixDQUFXZCxJQUFELElBQ1QsTUFBQyxNQUFEO0FBQVEsT0FBRyxFQUFFQSxJQUFJLENBQUNBLElBQWxCO0FBQXdCLFNBQUssRUFBRUEsSUFBSSxDQUFDQSxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLElBQUksQ0FBQ0EsSUFEUixRQUNnQkEsSUFBSSxDQUFDZSxLQURyQixNQURELENBZEgsQ0FERixDQVRGLENBREYsRUFpQ0UsTUFBQyxPQUFEO0FBQ0UsT0FBRyxFQUFDLE1BRE47QUFFRSxTQUFLLEVBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixDQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRTtBQUFLLFNBQUssRUFBRTtBQUFFSCxhQUFPLEVBQUUsS0FBWDtBQUFrQkMsaUJBQVcsRUFBRTtBQUEvQixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQ0UsWUFBUSxFQUFHTCxLQUFELElBQ1J2QixTQUFTLGlDQUNKQyxNQURJO0FBRVBqQyxXQUFLLEVBQUV1RDtBQUZBLE9BRmI7QUFPRSxnQkFBWSxFQUFDLFdBUGY7QUFRRSxTQUFLLEVBQUU7QUFBRXZDLFdBQUssRUFBRTtBQUFULEtBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLE1BQUMsTUFBRDtBQUFRLFNBQUssRUFBRXlCLEtBQUssQ0FBQ3pDLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3lDLEtBQUssQ0FBQ3pDLEtBQU4sSUFBZSxpQkFEbEIsQ0FWRixFQWFHa0QsU0FBUyxDQUFDYSxJQUFWLElBQ0NiLFNBQVMsQ0FBQ2EsSUFBVixDQUFlRixHQUFmLENBQW9CN0QsS0FBRCxJQUNqQixNQUFDLE1BQUQ7QUFBUSxPQUFHLEVBQUVBLEtBQUssQ0FBQ0EsS0FBbkI7QUFBMEIsU0FBSyxFQUFFQSxLQUFLLENBQUNBLEtBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FBSyxDQUFDQSxLQURULFFBQ2tCQSxLQUFLLENBQUM4RCxLQUR4QixNQURGLENBZEosQ0FERixDQVRGLENBakNGLEVBaUVFLE1BQUMsT0FBRDtBQUNFLE9BQUcsRUFBQyxNQUROO0FBRUUsU0FBSyxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsQ0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0U7QUFBSyxTQUFLLEVBQUU7QUFBRUgsYUFBTyxFQUFFLEtBQVg7QUFBa0JDLGlCQUFXLEVBQUU7QUFBL0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUNFLFlBQVEsRUFBR0wsS0FBRCxJQUNSdkIsU0FBUyxpQ0FDSkMsTUFESTtBQUVQK0IsU0FBRyxFQUFFVDtBQUZFLE9BRmI7QUFPRSxnQkFBWSxFQUFDLG1CQVBmO0FBUUUsU0FBSyxFQUFFO0FBQUV2QyxXQUFLLEVBQUU7QUFBVCxLQVJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUV5QixLQUFLLENBQUN1QixHQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJCdkIsS0FBSyxDQUFDdUIsR0FBTixJQUFhLGdCQUF4QyxDQVZGLEVBV0d0QixNQUFNLENBQUNtQixHQUFQLENBQVl2RCxLQUFELElBQ1YsTUFBQyxNQUFEO0FBQVEsT0FBRyxFQUFFQSxLQUFiO0FBQW9CLFNBQUssRUFBRUEsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHYSxzRUFBVyxDQUFDYixLQUFELENBRGQsQ0FERCxDQVhILENBREYsQ0FURixDQWpFRixFQThGRSxNQUFDLE9BQUQ7QUFDRSxPQUFHLEVBQUMsTUFETjtBQUVFLFNBQUssRUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLENBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFO0FBQUssU0FBSyxFQUFFO0FBQUVxRCxhQUFPLEVBQUUsS0FBWDtBQUFrQkMsaUJBQVcsRUFBRTtBQUEvQixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQ0UsWUFBUSxFQUFHTCxLQUFELElBQ1J2QixTQUFTLGlDQUNKQyxNQURJO0FBRVBnQyxTQUFHLEVBQUVWO0FBRkUsT0FGYjtBQU9FLGdCQUFZLEVBQUMsbUJBUGY7QUFRRSxTQUFLLEVBQUU7QUFBRXZDLFdBQUssRUFBRTtBQUFULEtBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVFLE1BQUMsTUFBRDtBQUFRLFNBQUssRUFBRXlCLEtBQUssQ0FBQ3dCLEdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkJ4QixLQUFLLENBQUN3QixHQUFOLElBQWEsZ0JBQXhDLENBVkYsRUFXR3ZCLE1BQU0sQ0FBQ21CLEdBQVAsQ0FBWXZELEtBQUQsSUFDVixNQUFDLE1BQUQ7QUFBUSxPQUFHLEVBQUVBLEtBQWI7QUFBb0IsU0FBSyxFQUFFQSxLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dhLHNFQUFXLENBQUNiLEtBQUQsQ0FEZCxDQURELENBWEgsQ0FERixDQVRGLENBOUZGLENBWkYsRUF3SUUsTUFBQywyQ0FBRDtBQUNFLFdBQU8sRUFBRSxLQURYO0FBRUUsUUFBSSxFQUFDLFNBRlA7QUFHRSxTQUFLLEVBQUMsT0FIUjtBQUlFLFFBQUksRUFBRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKUjtBQUtFLFFBQUksRUFBQyxPQUxQO0FBTUUsU0FBSyxFQUFFO0FBQUVVLFdBQUssRUFBRSxNQUFUO0FBQWlCMEMsZUFBUyxFQUFFO0FBQTVCLEtBTlQ7QUFPRSxXQUFPLEVBQUVQLFlBUFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkF4SUYsRUFvSkU7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCZCxNQUF0QixtQkFwSkYsQ0FERjtBQXdKRCxDQXpNRDs7QUEyTWVOLHNFQUFmO0FBRUEsTUFBTVYsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJOzs7Ozs7Ozs7Q0FBN0I7QUFVQSxNQUFNMkMsSUFBSSxHQUFHNUMsd0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7OztDQUF4QjtBQVFBLE1BQU00QyxPQUFPLEdBQUc3Qyx3REFBTSxDQUFDVyxNQUFPOzs7Ozs7Q0FBOUI7QUFPQSxNQUFNbUMsT0FBTyxHQUFHOUMsd0RBQU0sQ0FBQytDLE1BQStCOzs7WUFHMUMsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBcUJBLFVBQVUsR0FBRyxtQkFBSCxHQUF5QixNQUFROzs7Z0JBRzVELENBQUM7QUFBRUE7QUFBRixDQUFELEtBQXFCQSxVQUFVLEdBQUdBLFVBQUgsR0FBZ0IsTUFBUTtXQUM1RCxDQUFDO0FBQUVBO0FBQUYsQ0FBRCxLQUFxQkEsVUFBVSxHQUFHLFNBQUgsR0FBZSxPQUFTOzs7Q0FQbEUsQyxDQVdBLGtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXlCQSxTQUFTQyxTQUFULENBQW1CO0FBQ2pCQyxNQURpQjtBQUVqQnRDLE9BRmlCO0FBR2pCQyxRQUhpQjtBQUlqQnNDLGFBSmlCO0FBS2pCQyxXQUxpQjtBQU1qQmhDLFFBTmlCO0FBT2pCb0IsT0FQaUI7QUFRakIxQixPQVJpQjtBQVNqQnVDO0FBVGlCLENBQW5CLEVBb0JHO0FBQ0QsUUFBTTtBQUFBLE9BQUMxQyxNQUFEO0FBQUEsT0FBU0Q7QUFBVCxNQUFzQlEsc0RBQVEsQ0FBYztBQUNoRE8sUUFBSSxFQUFFLEVBRDBDO0FBRWhEL0MsU0FBSyxFQUFFLEVBRnlDO0FBR2hERSxZQUFRLEVBQUUsRUFIc0M7QUFJaEQ4RCxPQUFHLEVBQUUsQ0FKMkM7QUFLaERDLE9BQUcsRUFBRTtBQUwyQyxHQUFkLENBQXBDO0FBUUEsUUFBTTtBQUFFMUQsUUFBRjtBQUFRa0M7QUFBUixNQUF1QmpDLDZEQUFTLEVBQXRDOztBQUVBLFFBQU1vRSxPQUFPLEdBQUcsTUFBTTtBQUNwQixRQUFJQyxTQUFTLEdBQ1hGLEdBQUcsQ0FBQ0csTUFBSixHQUFhLENBQWIsR0FDSUgsR0FESixHQUVJRCxTQUFTLENBQUNJLE1BQVYsR0FBbUIsQ0FBbkIsR0FDQUosU0FEQSxHQUVBRCxXQUFXLENBQUNLLE1BQVosR0FBcUIsQ0FBckIsR0FDQUwsV0FEQSxHQUVBL0IsTUFBTSxDQUFDb0MsTUFBUCxHQUFnQixDQUFoQixHQUNBcEMsTUFEQSxHQUVBOEIsSUFUTjtBQVdBLFdBQU9LLFNBQVA7QUFDRCxHQWJEOztBQWVBLE1BQUlFLENBQU0sR0FBRyxJQUFJQyxHQUFKLENBQVE3QyxNQUFNLENBQUMwQixHQUFQLENBQVlvQixDQUFELElBQU9BLENBQWxCLENBQVIsQ0FBYjs7QUFFQSxRQUFNQyxJQUFJLEdBQUcsTUFBTTtBQUNqQixRQUFJQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQzNDLEtBQUssQ0FBQzRDLElBQVAsQ0FBTixHQUFxQkQsTUFBTSxDQUFDM0MsS0FBSyxDQUFDNEMsSUFBUCxDQUFOLEdBQXFCLENBQTFDLEdBQThDLENBQXhEOztBQUNBLFFBQUlGLEdBQUcsSUFBSSxDQUFYLEVBQWM7QUFDWkEsU0FBRyxHQUFHckIsS0FBTjtBQUNEOztBQUNEdkQsUUFBSSxDQUFFLFVBQVM0RSxHQUFJLEVBQWYsQ0FBSjtBQUNELEdBTkQ7O0FBT0EsUUFBTUcsSUFBSSxHQUFHLE1BQU07QUFDakIsUUFBSUgsR0FBRyxHQUFHQyxNQUFNLENBQUMzQyxLQUFLLENBQUM0QyxJQUFQLENBQU4sR0FBcUJELE1BQU0sQ0FBQzNDLEtBQUssQ0FBQzRDLElBQVAsQ0FBTixHQUFxQixDQUExQyxHQUE4QyxDQUF4RDs7QUFDQSxRQUFJRixHQUFHLEdBQUdyQixLQUFWLEVBQWlCO0FBQ2ZxQixTQUFHLEdBQUcsQ0FBTjtBQUNEOztBQUNENUUsUUFBSSxDQUFFLFVBQVM0RSxHQUFJLEVBQWYsQ0FBSjtBQUNELEdBTkQ7O0FBUUEsTUFBSTlDLE1BQU0sR0FDUnFDLFNBQVMsQ0FBQ0ksTUFBVixHQUFtQixDQUFuQixHQUNJSixTQUFTLENBQUNJLE1BRGQsR0FFSUwsV0FBVyxDQUFDSyxNQUFaLEdBQXFCLENBQXJCLEdBQ0FMLFdBQVcsQ0FBQ0ssTUFEWixHQUVBcEMsTUFBTSxDQUFDb0MsTUFBUCxHQUFnQixDQUFoQixHQUNBcEMsTUFBTSxDQUFDb0MsTUFEUCxHQUVBMUMsS0FQTjtBQVNBLFNBQ0UsTUFBQyx3Q0FBRDtBQUFLLFNBQUssRUFBRTtBQUFFcEIsV0FBSyxFQUFFLE1BQVQ7QUFBaUI0QyxpQkFBVyxFQUFFO0FBQTlCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0NBQUQ7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUE0QixPQUFHLEVBQUUsQ0FBakM7QUFBb0MsTUFBRSxFQUFFLENBQXhDO0FBQTJDLE1BQUUsRUFBRSxDQUEvQztBQUFrRCxNQUFFLEVBQUUsQ0FBdEQ7QUFBeUQsTUFBRSxFQUFFLENBQTdEO0FBQWdFLE1BQUUsRUFBRSxFQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyw0Q0FBRDtBQUFTLGVBQVcsRUFBQyxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLEVBR0UsTUFBQyxtRUFBRDtBQUNFLGFBQVMsRUFBRTVCLFNBRGI7QUFFRSxVQUFNLEVBQUVDLE1BRlY7QUFHRSxTQUFLLEVBQUVDLEtBSFQ7QUFJRSxVQUFNLEVBQUVDLE1BSlY7QUFLRSxVQUFNLEVBQUVFLE1BTFY7QUFNRSxTQUFLLEVBQUVELEtBTlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsRUFjRSxNQUFDLHdDQUFEO0FBQUssVUFBTSxFQUFFLENBQWI7QUFBZ0IsT0FBRyxFQUFFLEVBQXJCO0FBQXlCLE1BQUUsRUFBRSxFQUE3QjtBQUFpQyxNQUFFLEVBQUUsRUFBckM7QUFBeUMsTUFBRSxFQUFFLEVBQTdDO0FBQWlELE1BQUUsRUFBRSxFQUFyRDtBQUF5RCxNQUFFLEVBQUUsRUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNENBQUQ7QUFBUyxlQUFXLEVBQUMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHd0MsT0FBTyxHQUFHRSxNQUFWLElBQW9CLENBQXBCLElBQXlCLE1BQUMsMENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQ1QixFQUVHRixPQUFPLEdBQUdmLEdBQVYsQ0FBZWhFLEdBQUQsSUFDYixNQUFDLG1FQUFEO0FBQVMsT0FBRyxFQUFFQSxHQUFHLENBQUNDLEdBQWxCO0FBQXVCLE9BQUcsRUFBRUQsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBRkgsRUFLRytFLE9BQU8sR0FBR0UsTUFBVixHQUFtQixDQUFuQixJQUNDLE1BQUMsRUFBRDtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQTJCLFdBQU8sRUFBRUksSUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQURGLEVBSUdLLEtBQUssQ0FBQ3pCLEtBQUQsQ0FBTCxDQUNFMEIsSUFERixDQUNPLElBRFAsRUFFRTNCLEdBRkYsQ0FFTSxDQUFDNEIsQ0FBRCxFQUFJQyxDQUFKLEtBQ0g7QUFDRSxPQUFHLEVBQUVBLENBRFA7QUFFRSxhQUFTLEVBQ1BOLE1BQU0sQ0FBQzNDLEtBQUssQ0FBQzRDLElBQVAsQ0FBTixLQUF1QkssQ0FBQyxHQUFHLENBQTNCLEdBQStCLFFBQS9CLEdBQTBDQyxTQUg5QztBQUtFLFdBQU8sRUFBRSxNQUFNcEYsSUFBSSxDQUFFLFVBQVNtRixDQUFDLEdBQUcsQ0FBRSxFQUFqQixDQUxyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dBLENBQUMsR0FBRyxDQVBQLENBSEgsQ0FKSCxFQWlCRTtBQUFJLGFBQVMsRUFBQyxhQUFkO0FBQTRCLFdBQU8sRUFBRUosSUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQWpCRixDQU5KLENBRkYsQ0FkRixDQURGO0FBaUREOztBQUVNLGVBQWVNLGtCQUFmLENBQWtDQyxHQUFsQyxFQUF1QztBQUM1QyxNQUFJOUMsSUFBSSxHQUFHOEMsR0FBRyxDQUFDcEQsS0FBSixDQUFVTSxJQUFWLEdBQWlCOEMsR0FBRyxDQUFDcEQsS0FBSixDQUFVTSxJQUEzQixHQUFrQyxJQUE3QztBQUNBLE1BQUlULEdBQUcsR0FBR3VELEdBQUcsQ0FBQ3BELEtBQUosQ0FBVXpDLEtBQVYsR0FBa0I2RixHQUFHLENBQUNwRCxLQUFKLENBQVV6QyxLQUE1QixHQUFvQyxJQUE5QztBQUNBLE1BQUlnRSxHQUFHLEdBQUc2QixHQUFHLENBQUNwRCxLQUFKLENBQVV1QixHQUFWLEdBQWdCNkIsR0FBRyxDQUFDcEQsS0FBSixDQUFVdUIsR0FBMUIsR0FBZ0MsSUFBMUM7QUFDQSxNQUFJQyxHQUFHLEdBQUc0QixHQUFHLENBQUNwRCxLQUFKLENBQVV3QixHQUFWLEdBQWdCNEIsR0FBRyxDQUFDcEQsS0FBSixDQUFVd0IsR0FBMUIsR0FBZ0MsSUFBMUM7QUFFQSxNQUFJb0IsSUFBSSxHQUFHRCxNQUFNLENBQUNTLEdBQUcsQ0FBQ3BELEtBQUosQ0FBVTRDLElBQVgsQ0FBTixJQUEwQixDQUFyQztBQUNBLE1BQUlTLEtBQUssR0FBR1YsTUFBTSxDQUFDUyxHQUFHLENBQUNwRCxLQUFKLENBQVVxRCxLQUFYLENBQU4sSUFBMkIsQ0FBdkM7QUFFQSxRQUFNQyxTQUFTLEdBQUksbURBQW5CO0FBQ0EsUUFBTUMsR0FBRyxHQUFJLHlEQUF3RFgsSUFBSyxVQUFTUyxLQUFNLEVBQXpGO0FBQ0EsUUFBTUcsUUFBUSxHQUFJLG1EQUFsQjtBQUNBLFFBQU1DLFNBQVMsR0FBSSwwREFBeURsQyxHQUFJLFFBQU9DLEdBQUksRUFBM0Y7QUFDQSxRQUFNa0MsT0FBTyxHQUFJLDBEQUF5RG5DLEdBQUksUUFBT0MsR0FBSSxTQUFRbEIsSUFBSyxVQUFTVCxHQUFJLEVBQW5IO0FBQ0EsUUFBTThELGdCQUFnQixHQUFJLHlEQUF3RHJELElBQUssRUFBdkY7QUFDQSxRQUFNc0QsU0FBUyxHQUFJLHNEQUFxRHRELElBQUssRUFBN0U7QUFDQSxRQUFNdUQsY0FBYyxHQUFJLG9FQUFtRXZELElBQUssVUFBU1QsR0FBSSxFQUE3RztBQUNBLFFBQU0sQ0FDSk8sR0FESSxFQUVKMEQsTUFGSSxFQUdKdkcsS0FISSxFQUlKd0csU0FKSSxFQUtKQyxNQUxJLEVBTUpuRyxLQU5JLEVBT0p3RSxNQVBJLEVBUUpILEdBUkksSUFTRixNQUFNK0IsT0FBTyxDQUFDL0IsR0FBUixDQUFZLENBQ3BCN0IsS0FBSyxDQUFDa0QsR0FBRCxDQURlLEVBRXBCbEQsS0FBSyxDQUFDbUQsUUFBRCxDQUZlLEVBR3BCbkQsS0FBSyxDQUFDdUQsU0FBRCxDQUhlLEVBSXBCdkQsS0FBSyxDQUFDc0QsZ0JBQUQsQ0FKZSxFQUtwQnRELEtBQUssQ0FBQ3dELGNBQUQsQ0FMZSxFQU1wQnhELEtBQUssQ0FBQ29ELFNBQUQsQ0FOZSxFQU9wQnBELEtBQUssQ0FBQ2lELFNBQUQsQ0FQZSxFQVFwQmpELEtBQUssQ0FBQ3FELE9BQUQsQ0FSZSxDQUFaLENBVFY7QUFtQkEsUUFBTTNCLElBQUksR0FBRyxNQUFNM0IsR0FBRyxDQUFDSSxJQUFKLEVBQW5CO0FBQ0EsUUFBTWYsS0FBSyxHQUFHLE1BQU1xRSxNQUFNLENBQUN0RCxJQUFQLEVBQXBCO0FBQ0EsUUFBTVAsTUFBTSxHQUFHLE1BQU1wQyxLQUFLLENBQUMyQyxJQUFOLEVBQXJCO0FBQ0EsUUFBTWQsTUFBTSxHQUFHLE1BQU1uQyxLQUFLLENBQUNpRCxJQUFOLEVBQXJCO0FBQ0EsUUFBTTBELFFBQVEsR0FBRyxNQUFNSCxTQUFTLENBQUN2RCxJQUFWLEVBQXZCO0FBQ0EsUUFBTXlCLFNBQVMsR0FBRyxNQUFNK0IsTUFBTSxDQUFDeEQsSUFBUCxFQUF4QjtBQUNBLE1BQUlhLEtBQUssR0FBRyxNQUFNZ0IsTUFBTSxDQUFDN0IsSUFBUCxFQUFsQjtBQUNBLE1BQUkyRCxTQUFTLEdBQUcsTUFBTWpDLEdBQUcsQ0FBQzFCLElBQUosRUFBdEI7QUFFQSxTQUFPO0FBQ0w0RCxTQUFLLEVBQUU7QUFDTHJDLFVBQUksRUFBRUEsSUFBSSxDQUFDVCxJQUROO0FBRUw3QixXQUFLLEVBQUVBLEtBQUssQ0FBQzZCLElBRlI7QUFHTDVCLFlBQU0sRUFBRUEsTUFBTSxDQUFDNEIsSUFIVjtBQUlMVSxpQkFBVyxFQUFFa0MsUUFBUSxDQUFDNUMsSUFKakI7QUFLTFcsZUFBUyxFQUFFQSxTQUFTLENBQUNYLElBTGhCO0FBTUxyQixZQUFNLEVBQUVBLE1BQU0sQ0FBQ3FCLElBTlY7QUFPTEQsV0FBSyxFQUFFZ0QsSUFBSSxDQUFDQyxJQUFMLENBQVVqRCxLQUFLLENBQUNDLElBQU4sR0FBYStCLEtBQXZCLENBUEY7QUFRTDFELFdBQUssRUFBRTBCLEtBQUssQ0FBQ0MsSUFSUjtBQVNMWSxTQUFHLEVBQUVpQyxTQUFTLENBQUM3QztBQVRWO0FBREYsR0FBUDtBQWFEO0FBRWNRLHdFQUFmO0FBRUEsTUFBTWxELFNBQVMsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTs7Q0FBN0I7QUFJQSxNQUFNeUYsRUFBRSxHQUFHMUYsd0RBQU0sQ0FBQzJGLEVBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXJCO0FBcUNBLE1BQU16RixJQUFJLEdBQUdGLHdEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF4QixDOzs7Ozs7Ozs7Ozs7QUNoUUE7QUFBQTtBQUFPLE1BQU1KLFdBQVcsR0FBSWIsS0FBRCxJQUFXO0FBQ3BDLFFBQU00RyxTQUFTLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQy9DQyxTQUFLLEVBQUUsVUFEd0M7QUFFL0NDLFlBQVEsRUFBRTtBQUZxQyxHQUEvQixDQUFsQjtBQUtBLFNBQU9KLFNBQVMsQ0FBQ0ssTUFBVixDQUFpQmpILEtBQWpCLEVBQXdCYyxLQUF4QixDQUE4QixDQUE5QixFQUFpQyxDQUFDLENBQWxDLENBQVA7QUFDRCxDQVBNLEM7Ozs7Ozs7Ozs7O0FDQVAsOEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXRQcmljZVwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBibXcgPSBcIi4vYXNzZXRzL2Jtdy5qcGdcIjtcclxuY29uc3QgdG95b3RhID0gXCIuL2Fzc2V0cy90b3lvdGEuanBnXCI7XHJcbmNvbnN0IGhvbmRhID0gXCIuL2Fzc2V0cy9ob25kYS5qcGdcIjtcclxuY29uc3QgbGV4dXMgPSBcIi4vYXNzZXRzL2xleHVzLmpwZ1wiO1xyXG5cclxuY29uc3QgQWxsQ2FycyA9ICh7XHJcbiAgY2FyOiB7XHJcbiAgICBfaWQsXHJcbiAgICBuYW1lLFxyXG4gICAgbW9kZWwsXHJcbiAgICB5ZWFyLFxyXG4gICAgbG9jYXRpb24sXHJcbiAgICBjb2xvcixcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgcGhvdG9fdXJsLFxyXG4gICAgcHJpY2UsXHJcbiAgfSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcGhvdG8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbWcgPSBwaG90b191cmxcclxuICAgICAgPyBwaG90b191cmxcclxuICAgICAgOiBuYW1lID09PSBcImJtd1wiXHJcbiAgICAgID8gYm13XHJcbiAgICAgIDogbmFtZSA9PT0gXCJ0b3lvdGFcIlxyXG4gICAgICA/IHRveW90YVxyXG4gICAgICA6IG5hbWUgPT09IFwiaG9uZGFcIlxyXG4gICAgICA/IGhvbmRhXHJcbiAgICAgIDogbGV4dXM7XHJcbiAgICByZXR1cm4gaW1nO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5hdiA9IChpZCkgPT4ge1xyXG4gICAgcHVzaChgL3ZlaGljbGUvJHtuYW1lfS8ke21vZGVsfS8ke2lkfWApO1xyXG4gIH07XHJcbiAgY29uc3QgaW1hZ2UgPSBKU09OLnBhcnNlKHBob3RvX3VybClbMF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3cgZ3V0dGVyPXtbMTYsIDE2XX0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IGFsaWduPSdtaWRkbGUnPlxyXG4gICAgICA8Q29sIHh4bD17MTJ9IHhsPXsxMn0gbGc9ezEyfSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fT5cclxuICAgICAgICA8SW1hZ2Ugb25DbGljaz17KCkgPT4gaGFuZGxlTmF2KF9pZCl9PlxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlIHx8IGJtd30gYWx0PSdjYXJzIHBvc3RlcicgLz5cclxuICAgICAgICA8L0ltYWdlPlxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCB4eGw9ezEyfSB4bD17MTJ9IGxnPXsxMn0gbWQ9ezI0fSBzbT17MjR9IHhzPXsyNH0+XHJcbiAgICAgICAgPENvbnRlbnQgY29sb3I9e2NvbG9yLnNwbGl0KFwiIFwiKVswXX0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdtYWtlJz5cclxuICAgICAgICAgICAgPHNwYW4+e25hbWUudG9VcHBlckNhc2UoKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtb2RlbCc+Q2FyIE1vZGVsOiB7bW9kZWx9PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0neWVhcic+TWFudWZhY3R1cmluZyBZZWFyOiB7eWVhcn08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3ByaWNlJz5DYXIgUHJpY2U6IOKCpiB7Zm9ybWF0UHJpY2UocHJpY2UpfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbG9jYXRpb24nPkxvY2F0aW9uOiB7bG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+e2Ake2Rlc2NyaXB0aW9uLnNsaWNlKDAsIDUwKX0uLi5gfTwvcD5cclxuICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbENhcnM7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XHJcbmA7XHJcbmNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBnYXA6IDJlbTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG5gO1xyXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXY8eyBjb2xvcjogc3RyaW5nIH0+YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgcCxcclxuICBoMixcclxuICBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICAubWFrZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgYmFja2dyb3VuZDogJHsoeyBjb2xvciB9KSA9PlxyXG4gICAgICAgIGNvbG9yID09PSBcIndoaXRlXCIgPyBcIiNjY2NjY2NcIiA6IGNvbG9yID8gY29sb3IgOiBcIiNhYWFhYWFcIn07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbi8vICBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBgXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgTWVudSwgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdFByaWNlXCI7XHJcbmltcG9ydCB7XHJcbiAgUmFkYXJDaGFydE91dGxpbmVkLFxyXG4gIFFxT3V0bGluZWQsXHJcbiAgRG9sbGFyT3V0bGluZWQsXHJcbiAgS2V5T3V0bGluZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcbmNvbnN0IHsgT3B0aW9uIH06IGFueSA9IFNlbGVjdDtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoeyBzZXRTZWxlY3QsIHNlbGVjdCwgbWFrZXMsIG1vZGVscywgdG90YWwsIG5Ub3RhbCB9KSA9PiB7XHJcbiAgY29uc3QgW21vZCwgc2V0TW9kXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XHJcbiAgY29uc3QgeyBxdWVyeSwgcHVzaCB9OiB7IHF1ZXJ5OiBhbnk7IHB1c2g6IGFueSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcHJpY2VzID0gW1xyXG4gICAgNTAwMDAwLFxyXG4gICAgMTAwMDAwMCxcclxuICAgIDE1MDAwMDAsXHJcbiAgICAyMDAwMDAwLFxyXG4gICAgMjUwMDAwMCxcclxuICAgIDMwMDAwMDAsXHJcbiAgICAxMDAwMDAwMCxcclxuICAgIDIwMDAwMDAwLFxyXG4gICAgMzAwMDAwMDAsXHJcbiAgICA0MDAwMDAwMCxcclxuICAgIDUwMDAwMDAwLFxyXG4gIF07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRNb2RlbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2J1eXlvdXJjYXItYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL21vZGVscy8ke3NlbGVjdC5tYWtlfWBcclxuICAgICAgKTtcclxuICAgICAgbGV0IG1vZHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAvLyBsZXQgazogYW55ID0gbmV3IFNldChtb2RzLmRhdGEgPyBtb2RzLmRhdGEubWFwKChtKSA9PiBtKSA6IFtdKTtcclxuICAgICAgLy8gbGV0IG4gPSBbLi4ua107XHJcbiAgICAgIHNldE1vZChtb2RzKTtcclxuICAgIH07XHJcbiAgICBnZXRNb2RlbHMoKTtcclxuICB9LCBbc2VsZWN0XSk7XHJcblxyXG4gIGxldCBuZXdNb2RlbHMgPSBtb2QgPyBtb2QgOiBtb2RlbHM7XHJcbiAgLy8gY29uc29sZS5sb2cobW9kZWxzKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgcHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiBcIi9cIixcclxuICAgICAgcXVlcnk6IHNlbGVjdCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAvLyBwdXNoKHtcclxuICAgIC8vICAgcGF0aG5hbWU6IFwiL1wiLFxyXG4gICAgLy8gICBxdWVyeTogc2VsZWN0LFxyXG4gICAgLy8gfSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBsb2FkaW5nPXtmYWxzZX1cclxuICAgICAgICB0eXBlPSdwcmltYXJ5J1xyXG4gICAgICAgIHNoYXBlPSdyb3VuZCdcclxuICAgICAgICBpY29uPXs8S2V5T3V0bGluZWQgLz59XHJcbiAgICAgICAgc2l6ZT0nbGFyZ2UnXHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMmVtXCIgfX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBwdXNoKFwiL1wiKX1cclxuICAgICAgPlxyXG4gICAgICAgIEFsbCBDYXJzICh7dG90YWx9KVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPE1lbnUgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IG1vZGU9J2lubGluZSc+XHJcbiAgICAgICAgPFN1Yk1lbnVcclxuICAgICAgICAgIGtleT0nc3ViMSdcclxuICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgPFFxT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5DYXIgTWFrZXM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMWVtXCIsIHBhZGRpbmdMZWZ0OiBcIjJlbVwiIH19PlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdCh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdCxcclxuICAgICAgICAgICAgICAgICAgbWFrZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9J0NhciBNYWtlcydcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17cXVlcnkubWFrZX0+XHJcbiAgICAgICAgICAgICAgICB7cXVlcnkubWFrZSB8fCBcIiBTZWxlY3QgYSBtYWtlXCJ9XHJcbiAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAge21ha2VzLm1hcCgobWFrZTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17bWFrZS5tYWtlfSB2YWx1ZT17bWFrZS5tYWtlfT5cclxuICAgICAgICAgICAgICAgICAge21ha2UubWFrZX0gKHttYWtlLmNvdW50fSlcclxuICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICA8U3ViTWVudVxyXG4gICAgICAgICAga2V5PSdzdWIyJ1xyXG4gICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8UmFkYXJDaGFydE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+Q2FyIE1vZGVsczwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxZW1cIiwgcGFkZGluZ0xlZnQ6IFwiMmVtXCIgfX0+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0KHtcclxuICAgICAgICAgICAgICAgICAgLi4uc2VsZWN0LFxyXG4gICAgICAgICAgICAgICAgICBtb2RlbDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9J0NhciBNb2RlbCdcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e3F1ZXJ5Lm1vZGVsfT5cclxuICAgICAgICAgICAgICAgIHtxdWVyeS5tb2RlbCB8fCBcIiBTZWxlY3QgYSBtb2RlbFwifVxyXG4gICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIHtuZXdNb2RlbHMuZGF0YSAmJlxyXG4gICAgICAgICAgICAgICAgbmV3TW9kZWxzLmRhdGEubWFwKChtb2RlbDogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXttb2RlbC5tb2RlbH0gdmFsdWU9e21vZGVsLm1vZGVsfT5cclxuICAgICAgICAgICAgICAgICAgICB7bW9kZWwubW9kZWx9ICh7bW9kZWwuY291bnR9KVxyXG4gICAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICA8U3ViTWVudVxyXG4gICAgICAgICAga2V5PSdzdWIzJ1xyXG4gICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8RG9sbGFyT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5NaW5pbXVtIFByaWNlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFlbVwiLCBwYWRkaW5nTGVmdDogXCIyZW1cIiB9fT5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAuLi5zZWxlY3QsXHJcbiAgICAgICAgICAgICAgICAgIG1pbjogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9J0NhciBNaW5pbXVtIFByaWNlJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17cXVlcnkubWlufT57cXVlcnkubWluIHx8IFwiTWluaW11bSBQcmljZXNcIn08L09wdGlvbj5cclxuICAgICAgICAgICAgICB7cHJpY2VzLm1hcCgocHJpY2U6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e3ByaWNlfSB2YWx1ZT17cHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgICB7Zm9ybWF0UHJpY2UocHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgIDxTdWJNZW51XHJcbiAgICAgICAgICBrZXk9J3N1YjQnXHJcbiAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxEb2xsYXJPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPk1heGltdW0gUHJpY2U8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMWVtXCIsIHBhZGRpbmdMZWZ0OiBcIjJlbVwiIH19PlxyXG4gICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdCh7XHJcbiAgICAgICAgICAgICAgICAgIC4uLnNlbGVjdCxcclxuICAgICAgICAgICAgICAgICAgbWF4OiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT0nQ2FyIE1heGltdW0gUHJpY2UnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtxdWVyeS5tYXh9PntxdWVyeS5tYXggfHwgXCJNYXhpbXVtIFByaWNlc1wifTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIHtwcmljZXMubWFwKChwcmljZTogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17cHJpY2V9IHZhbHVlPXtwcmljZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtmb3JtYXRQcmljZShwcmljZSl9XHJcbiAgICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgIDwvTWVudT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGxvYWRpbmc9e2ZhbHNlfVxyXG4gICAgICAgIHR5cGU9J3ByaW1hcnknXHJcbiAgICAgICAgc2hhcGU9J3JvdW5kJ1xyXG4gICAgICAgIGljb249ezxLZXlPdXRsaW5lZCAvPn1cclxuICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpblRvcDogXCIyZW1cIiB9fVxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgPlxyXG4gICAgICAgIFNlYXJjaCBGb3IgQ2FyXHJcbiAgICAgIDwvQnV0dG9uPlxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPSdjb3VudCc+e25Ub3RhbH0gQ2FycyBGb3VuZCEhITwvcD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XHJcblxyXG4gIGgyIHtcclxuICAgIHBhZGRpbmc6IDFlbSAwO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBMaXN0ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gIH1cclxuYDtcclxuY29uc3QgU2VsZWN0cyA9IHN0eWxlZC5zZWxlY3RgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuYDtcclxuY29uc3QgQnV0dG9ucyA9IHN0eWxlZC5idXR0b248eyBiYWNrZ3JvdW5kOiBzdHJpbmcgfT5gXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAkeyh7IGJhY2tncm91bmQgfSkgPT4gKGJhY2tncm91bmQgPyBcIjFweCBzb2xpZCAjY2NjY2NjXCIgOiBcIm5vbmVcIil9O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMC43ZW0gMS41ZW07XHJcbiAgYmFja2dyb3VuZDogJHsoeyBiYWNrZ3JvdW5kIH0pID0+IChiYWNrZ3JvdW5kID8gYmFja2dyb3VuZCA6IFwidGVhbFwiKX07XHJcbiAgY29sb3I6ICR7KHsgYmFja2dyb3VuZCB9KSA9PiAoYmFja2dyb3VuZCA/IFwiIzMzMzMzM1wiIDogXCJ3aGl0ZVwiKX07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuLy8gY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBgO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEFsbENhcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWxsQ2Fycy9BbGxDYXJzXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCwgRGl2aWRlciwgRW1wdHksIEFmZml4IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmludGVyZmFjZSBDYXJJbnRlcmZhY2Uge1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBtb2RlbDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpY2U6IHN0cmluZztcclxuICBkaXN0YW5jZTogc3RyaW5nO1xyXG4gIGZ1ZWxfdHlwZTogc3RyaW5nO1xyXG4gIHBob3RvX3VybDogc3RyaW5nO1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgeWVhcjogc3RyaW5nO1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTZWxlY3RQcm9wcyB7XHJcbiAgbWFrZTogc3RyaW5nO1xyXG4gIG1vZGVsOiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxuICBtaW46IG51bWJlcjtcclxuICBtYXg6IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gSW5kZXhQYWdlKHtcclxuICBjYXJzLFxyXG4gIG1ha2VzLFxyXG4gIG1vZGVscyxcclxuICBtYWtlRmlsdGVycyxcclxuICBtYWtlTW9kZWwsXHJcbiAgcHJpY2VzLFxyXG4gIGNvdW50LFxyXG4gIHRvdGFsLFxyXG4gIGFsbCxcclxufToge1xyXG4gIGNhcnM/OiBDYXJJbnRlcmZhY2VbXTtcclxuICBtYWtlcz86IGFueVtdO1xyXG4gIHByaWNlcz86IGFueVtdO1xyXG4gIG1vZGVscz86IGFueVtdO1xyXG4gIG1ha2VGaWx0ZXJzPzogYW55W107XHJcbiAgYWxsPzogYW55W107XHJcbiAgbWFrZU1vZGVsPzogYW55W107XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICB0b3RhbDogbnVtYmVyO1xyXG59KSB7XHJcbiAgY29uc3QgW3NlbGVjdCwgc2V0U2VsZWN0XSA9IHVzZVN0YXRlPFNlbGVjdFByb3BzPih7XHJcbiAgICBtYWtlOiBcIlwiLFxyXG4gICAgbW9kZWw6IFwiXCIsXHJcbiAgICBsb2NhdGlvbjogXCJcIixcclxuICAgIG1pbjogMCxcclxuICAgIG1heDogMCxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBwdXNoLCBxdWVyeSB9OiBhbnkgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgYWxsQ2FycyA9ICgpID0+IHtcclxuICAgIGxldCBxdWVyeUNhcnMgPVxyXG4gICAgICBhbGwubGVuZ3RoID4gMFxyXG4gICAgICAgID8gYWxsXHJcbiAgICAgICAgOiBtYWtlTW9kZWwubGVuZ3RoID4gMFxyXG4gICAgICAgID8gbWFrZU1vZGVsXHJcbiAgICAgICAgOiBtYWtlRmlsdGVycy5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBtYWtlRmlsdGVyc1xyXG4gICAgICAgIDogcHJpY2VzLmxlbmd0aCA+IDBcclxuICAgICAgICA/IHByaWNlc1xyXG4gICAgICAgIDogY2FycztcclxuXHJcbiAgICByZXR1cm4gcXVlcnlDYXJzO1xyXG4gIH07XHJcblxyXG4gIGxldCBhOiBhbnkgPSBuZXcgU2V0KG1vZGVscy5tYXAoKG0pID0+IG0pKTtcclxuXHJcbiAgY29uc3QgcHJldiA9ICgpID0+IHtcclxuICAgIGxldCBudW0gPSBOdW1iZXIocXVlcnkucGFnZSkgPyBOdW1iZXIocXVlcnkucGFnZSkgLSAxIDogMDtcclxuICAgIGlmIChudW0gPD0gMCkge1xyXG4gICAgICBudW0gPSBjb3VudDtcclxuICAgIH1cclxuICAgIHB1c2goYC8/cGFnZT0ke251bX1gKTtcclxuICB9O1xyXG4gIGNvbnN0IG5leHQgPSAoKSA9PiB7XHJcbiAgICBsZXQgbnVtID0gTnVtYmVyKHF1ZXJ5LnBhZ2UpID8gTnVtYmVyKHF1ZXJ5LnBhZ2UpICsgMSA6IDI7XHJcbiAgICBpZiAobnVtID4gY291bnQpIHtcclxuICAgICAgbnVtID0gMTtcclxuICAgIH1cclxuICAgIHB1c2goYC8/cGFnZT0ke251bX1gKTtcclxuICB9O1xyXG5cclxuICBsZXQgblRvdGFsID1cclxuICAgIG1ha2VNb2RlbC5sZW5ndGggPiAwXHJcbiAgICAgID8gbWFrZU1vZGVsLmxlbmd0aFxyXG4gICAgICA6IG1ha2VGaWx0ZXJzLmxlbmd0aCA+IDBcclxuICAgICAgPyBtYWtlRmlsdGVycy5sZW5ndGhcclxuICAgICAgOiBwcmljZXMubGVuZ3RoID4gMFxyXG4gICAgICA/IHByaWNlcy5sZW5ndGhcclxuICAgICAgOiB0b3RhbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3cgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nTGVmdDogXCIxZW1cIiB9fT5cclxuICAgICAgPENvbCBjbGFzc05hbWU9J2d1dHRlci1yb3cnIHh4bD17Nn0geGw9ezZ9IGxnPXs4fSBtZD17OH0gc209ezh9IHhzPXsyNH0+XHJcbiAgICAgICAgey8qIDxBZmZpeCBvZmZzZXRUb3A9ezEwfT4gKi99XHJcbiAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249J2NlbnRlcic+RmlsdGVyIENhcnM8L0RpdmlkZXI+XHJcbiAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgIHNldFNlbGVjdD17c2V0U2VsZWN0fVxyXG4gICAgICAgICAgc2VsZWN0PXtzZWxlY3R9XHJcbiAgICAgICAgICBtYWtlcz17bWFrZXN9XHJcbiAgICAgICAgICBtb2RlbHM9e21vZGVsc31cclxuICAgICAgICAgIG5Ub3RhbD17blRvdGFsfVxyXG4gICAgICAgICAgdG90YWw9e3RvdGFsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIDwvQWZmaXg+ICovfVxyXG4gICAgICA8L0NvbD5cclxuICAgICAgPENvbCBvZmZzZXQ9ezF9IHh4bD17MTd9IHhsPXsxN30gbGc9ezE1fSBtZD17MTV9IHNtPXsxNX0geHM9ezI0fT5cclxuICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj0nbGVmdCc+Q2FyczwvRGl2aWRlcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2FsbENhcnMoKS5sZW5ndGggPD0gMCAmJiA8RW1wdHkgLz59XHJcbiAgICAgICAgICB7YWxsQ2FycygpLm1hcCgoY2FyOiBDYXJJbnRlcmZhY2UpID0+IChcclxuICAgICAgICAgICAgPEFsbENhcnMga2V5PXtjYXIuX2lkfSBjYXI9e2Nhcn0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAge2FsbENhcnMoKS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgPFVsIGNsYXNzTmFtZT0ncGFnaW5hdGUnPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Fycm93X2xlZnQnIG9uQ2xpY2s9e3ByZXZ9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+JiM4NTkyOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIHtBcnJheShjb3VudClcclxuICAgICAgICAgICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgICAgICAgICAubWFwKCh2LCBpOiBudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIocXVlcnkucGFnZSkgPT09IGkgKyAxID8gXCJhY3RpdmVcIiA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwdXNoKGAvP3BhZ2U9JHtpICsgMX1gKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpICsgMX1cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Fycm93X3JpZ2h0JyBvbkNsaWNrPXtuZXh0fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiYjODU5NDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9VbD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcclxuICBsZXQgbWFrZSA9IGN0eC5xdWVyeS5tYWtlID8gY3R4LnF1ZXJ5Lm1ha2UgOiBudWxsO1xyXG4gIGxldCBtb2QgPSBjdHgucXVlcnkubW9kZWwgPyBjdHgucXVlcnkubW9kZWwgOiBudWxsO1xyXG4gIGxldCBtaW4gPSBjdHgucXVlcnkubWluID8gY3R4LnF1ZXJ5Lm1pbiA6IG51bGw7XHJcbiAgbGV0IG1heCA9IGN0eC5xdWVyeS5tYXggPyBjdHgucXVlcnkubWF4IDogbnVsbDtcclxuXHJcbiAgbGV0IHBhZ2UgPSBOdW1iZXIoY3R4LnF1ZXJ5LnBhZ2UpIHx8IDE7XHJcbiAgbGV0IGxpbWl0ID0gTnVtYmVyKGN0eC5xdWVyeS5saW1pdCkgfHwgNDtcclxuXHJcbiAgY29uc3QgY291bnRfdXJsID0gYGh0dHBzOi8vYnV5eW91cmNhci1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvY291bnRgO1xyXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2J1eXlvdXJjYXItYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2NhcnM/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YDtcclxuICBjb25zdCBtYWtlX3VybCA9IGBodHRwczovL2J1eXlvdXJjYXItYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL21ha2VzYDtcclxuICBjb25zdCBwcmljZV91cmwgPSBgaHR0cHM6Ly9idXl5b3VyY2FyLWFwaS5oZXJva3VhcHAuY29tL2FwaS92MS9wcmljZXM/bWluPSR7bWlufSZtYXg9JHttYXh9YDtcclxuICBjb25zdCBhbGxfdXJsID0gYGh0dHBzOi8vYnV5eW91cmNhci1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvcHJpY2VzP21pbj0ke21pbn0mbWF4PSR7bWF4fSZtYWtlPSR7bWFrZX0mbW9kZWw9JHttb2R9YDtcclxuICBjb25zdCBiYXNlX29uX21ha2VfdXJsID0gYGh0dHBzOi8vYnV5eW91cmNhci1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvdjEvY2Fycy9tYWtlLyR7bWFrZX1gO1xyXG4gIGNvbnN0IG1vZGVsX3VybCA9IGBodHRwczovL2J1eXlvdXJjYXItYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL21vZGVscy8ke21ha2V9YDtcclxuICBjb25zdCBtYWtlX21vZGVsX3VybCA9IGBodHRwczovL2J1eXlvdXJjYXItYXBpLmhlcm9rdWFwcC5jb20vYXBpL3YxL2NhcnMvbW9kZWwvbWFrZT9tYWtlPSR7bWFrZX0mbW9kZWw9JHttb2R9YDtcclxuICBjb25zdCBbXHJcbiAgICByZXMsXHJcbiAgICBmaWx0ZXIsXHJcbiAgICBtb2RlbCxcclxuICAgIGJhc2VfbWFrZSxcclxuICAgIG1ha21vZCxcclxuICAgIHByaWNlLFxyXG4gICAgbGVuZ3RoLFxyXG4gICAgYWxsLFxyXG4gIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICBmZXRjaCh1cmwpLFxyXG4gICAgZmV0Y2gobWFrZV91cmwpLFxyXG4gICAgZmV0Y2gobW9kZWxfdXJsKSxcclxuICAgIGZldGNoKGJhc2Vfb25fbWFrZV91cmwpLFxyXG4gICAgZmV0Y2gobWFrZV9tb2RlbF91cmwpLFxyXG4gICAgZmV0Y2gocHJpY2VfdXJsKSxcclxuICAgIGZldGNoKGNvdW50X3VybCksXHJcbiAgICBmZXRjaChhbGxfdXJsKSxcclxuICBdKTtcclxuICBjb25zdCBjYXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zdCBtYWtlcyA9IGF3YWl0IGZpbHRlci5qc29uKCk7XHJcbiAgY29uc3QgcHJpY2VzID0gYXdhaXQgcHJpY2UuanNvbigpO1xyXG4gIGNvbnN0IG1vZGVscyA9IGF3YWl0IG1vZGVsLmpzb24oKTtcclxuICBjb25zdCBiYXNlTWFrZSA9IGF3YWl0IGJhc2VfbWFrZS5qc29uKCk7XHJcbiAgY29uc3QgbWFrZU1vZGVsID0gYXdhaXQgbWFrbW9kLmpzb24oKTtcclxuICBsZXQgY291bnQgPSBhd2FpdCBsZW5ndGguanNvbigpO1xyXG4gIGxldCBhbGxfcXVlcnkgPSBhd2FpdCBhbGwuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY2FyczogY2Fycy5kYXRhLFxyXG4gICAgICBtYWtlczogbWFrZXMuZGF0YSxcclxuICAgICAgbW9kZWxzOiBtb2RlbHMuZGF0YSxcclxuICAgICAgbWFrZUZpbHRlcnM6IGJhc2VNYWtlLmRhdGEsXHJcbiAgICAgIG1ha2VNb2RlbDogbWFrZU1vZGVsLmRhdGEsXHJcbiAgICAgIHByaWNlczogcHJpY2VzLmRhdGEsXHJcbiAgICAgIGNvdW50OiBNYXRoLmNlaWwoY291bnQuZGF0YSAvIGxpbWl0KSxcclxuICAgICAgdG90YWw6IGNvdW50LmRhdGEsXHJcbiAgICAgIGFsbDogYWxsX3F1ZXJ5LmRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMCUgMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IFVsID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMWVtIDA7XHJcblxyXG4gIGxpIHtcclxuICAgIC8qIHBhZGRpbmc6IDAgMWVtOyAqL1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXJyb3dfcmlnaHQsXHJcbiAgLmFycm93X2xlZnQge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyZW0pO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XHJcbiAgZ2FwOiAyZW07XHJcblxyXG4gIC5wYWdpbmF0ZSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAvKiBwYWRkaW5nOiAwIDFlbTsgKi9cclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFycm93X3JpZ2h0LFxyXG4gICAgLmFycm93X2xlZnQge1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhciB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDIwdmg7XHJcbiAgfVxyXG5cclxuICAuY291bnQge1xyXG4gICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgfVxyXG5gO1xyXG4iLCJleHBvcnQgY29uc3QgZm9ybWF0UHJpY2UgPSAocHJpY2UpID0+IHtcclxuICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCB7XHJcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgY3VycmVuY3k6IFwiVVNEXCIsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KHByaWNlKS5zbGljZSgxLCAtMyk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==