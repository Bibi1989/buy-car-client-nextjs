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

  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(Grid, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(Image, {
    onClick: () => handleNav(_id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: photo_url || bmw,
    alt: "cars poster",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  })), __jsx(Content, {
    color: color.split(" ")[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "make",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, name.toUpperCase()), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })), __jsx("h2", {
    className: "model",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "Car Model: ", model), __jsx("p", {
    className: "year",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, "Manufacturing Year: ", year), __jsx("p", {
    className: "price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "Car Price: \u20A6 ", Object(_utils_formatPrice__WEBPACK_IMPORTED_MODULE_3__["formatPrice"])(price)), __jsx("p", {
    className: "location",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Location: ", location), __jsx("p", {
    className: "description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, `${description.slice(0, 50)}...`))));
};

/* harmony default export */ __webpack_exports__["default"] = (AllCars);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  margin-bottom: 2em;
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\bibia\\Documents\\Nextjs Projects\\buy-car\\src\\components\\Sidebar\\Sidebar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // const makes = [
//   { value: "bmw", label: "Bmw" },
//   { value: "toyota", label: "Toyota" },
//   { value: "honda", label: "Honda" },
//   { value: "lexus", label: "Lexus" },
// ];
// const models = [
//   { value: "x5", label: "X5" },
//   { value: "x6", label: "X6" },
//   { value: "x7", label: "X7" },
//   { value: "x8", label: "X8" },
// ];

const locations = [{
  value: "lagos",
  label: "Lagos"
}, {
  value: "abuja",
  label: "Abuja"
}, {
  value: "bayelsa",
  label: "Bayelsa"
}, {
  value: "port harcourt",
  label: "Port Harcourt"
}];

const Sidebar = ({
  setSelect,
  select,
  makes,
  models,
  queryCars
}) => {
  const {
    0: mod,
    1: setMod
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    query,
    push
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const prices = [500000, 1000000, 1500000, 2000000, 2500000, 3000000, 10000000, 20000000, 30000000, 40000000, 50000000];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getModels = async () => {
      const res = await fetch(`http://localhost:5000/api/v1/models/${select.make}`);
      let mods = await res.json();
      setMod(mods.data);
    };

    getModels();
  }, [select]);
  let newModels = mod ? mod : models;

  const handleSearch = () => {
    push({
      pathname: "/",
      query: select
    });
  };

  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, "All Cars"), __jsx(Button, {
    background: "white",
    onClick: () => {
      push("/");
      setSelect({
        make: "",
        model: "",
        location: "",
        min: 0,
        max: 0
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "All")), __jsx(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, "Makes"), __jsx(Select, {
    name: "make",
    onChange: ({
      target: {
        value
      }
    }) => setSelect(_objectSpread(_objectSpread({}, select), {}, {
      make: value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: query.make,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, query.make || " Select a make"), makes.map(make => __jsx("option", {
    key: make.make,
    value: make.make,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, make.make, " (", make.count, ")")))), __jsx(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "Models"), __jsx(Select, {
    name: "model",
    onChange: ({
      target: {
        value
      }
    }) => setSelect(_objectSpread(_objectSpread({}, select), {}, {
      model: value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: query.model,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, query.model || " Select a model"), newModels.map(model => __jsx("option", {
    key: model.model,
    value: model.model,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, model.model)))), __jsx(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "Minimum Price"), __jsx(Select, {
    name: "min",
    onChange: ({
      target: {
        value
      }
    }) => setSelect(_objectSpread(_objectSpread({}, select), {}, {
      min: value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: query.min,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, query.min || "Minimum Prices"), prices.map(price => __jsx("option", {
    key: price,
    value: price,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, price)))), __jsx(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, "Maximum Price"), __jsx(Select, {
    name: "max",
    onChange: ({
      target: {
        value
      }
    }) => setSelect(_objectSpread(_objectSpread({}, select), {}, {
      max: value
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: query.max,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, query.max || "Maximum Prices"), prices.map(price => __jsx("option", {
    key: price,
    value: price,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 13
    }
  }, price)))), __jsx(Button, {
    background: "teal",
    onClick: handleSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }, "Search For Car"), __jsx("p", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, queryCars.length, " Cars Found!!!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  /* position: sticky;
top: 0; */
`;
const List = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin-bottom: 1em;

  label {
    display: block;
    padding-bottom: 0.5em;
  }
`;
const Select = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.select`
  width: 100%;
  padding: 10px 5px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #cccccc;
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`
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
var _jsxFileName = "C:\\Users\\bibia\\Documents\\Nextjs Projects\\buy-car\\src\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function IndexPage({
  cars,
  makes,
  models,
  makeFilters,
  makeModel,
  prices,
  count
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
  console.log({
    prices
  });
  let queryCars = makeModel.length > 0 ? makeModel : makeFilters.length > 0 ? makeFilters : prices.length > 0 ? prices : cars;
  const {
    push,
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(); // console.log({ cars, makes, models, makeFilters, makeModel, prices });

  console.log(typeof Number(query.page));

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

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx(Grid, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx(_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setSelect: setSelect,
    select: select,
    makes: makes,
    models: models,
    queryCars: queryCars,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, queryCars.map(car => __jsx(_components_AllCars_AllCars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: car._id,
    car: car,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  })), __jsx("ul", {
    className: "paginate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "arrow_left",
    onClick: prev,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, "\u2190")), Array(count).fill(null).map((v, i) => __jsx("li", {
    key: i,
    className: Number(query.page) === i + 1 && "active",
    onClick: () => push(`/?page=${i + 1}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }, i + 1)), __jsx("li", {
    className: "arrow_right",
    onClick: next,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, "\u2192")))))));
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
  const base_on_make_url = `http://localhost:5000/api/v1/cars/make/${make}`;
  const model_url = `http://localhost:5000/api/v1/models/${make}`;
  const make_model_url = `http://localhost:5000/api/v1/cars/model/make?make=${make}&model=${mod}`;
  const [res, filter, model, base_make, makmod, price, length] = await Promise.all([fetch(url), fetch(make_url), fetch(model_url), fetch(base_on_make_url), fetch(make_model_url), fetch(price_url), fetch(count_url)]);
  const cars = await res.json();
  const makes = await filter.json();
  const prices = await price.json();
  const models = await model.json();
  const baseMake = await base_make.json();
  const makeModel = await makmod.json();
  let count = await length.json();
  return {
    props: {
      cars: cars.data,
      makes: makes.data,
      models: models.data,
      makeFilters: baseMake.data,
      makeModel: makeModel.data,
      prices: prices.data,
      count: Math.ceil(count.data / limit)
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  padding: 0% 10px;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxsQ2Fycy9BbGxDYXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Zvcm1hdFByaWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImJtdyIsInRveW90YSIsImhvbmRhIiwibGV4dXMiLCJBbGxDYXJzIiwiY2FyIiwiX2lkIiwibmFtZSIsIm1vZGVsIiwieWVhciIsImxvY2F0aW9uIiwiY29sb3IiLCJkZXNjcmlwdGlvbiIsInBob3RvX3VybCIsInByaWNlIiwicHVzaCIsInVzZVJvdXRlciIsInBob3RvIiwiaW1nIiwiaGFuZGxlTmF2IiwiaWQiLCJzcGxpdCIsInRvVXBwZXJDYXNlIiwiZm9ybWF0UHJpY2UiLCJzbGljZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkdyaWQiLCJJbWFnZSIsIkNvbnRlbnQiLCJsb2NhdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwiU2lkZWJhciIsInNldFNlbGVjdCIsInNlbGVjdCIsIm1ha2VzIiwibW9kZWxzIiwicXVlcnlDYXJzIiwibW9kIiwic2V0TW9kIiwidXNlU3RhdGUiLCJxdWVyeSIsInByaWNlcyIsInVzZUVmZmVjdCIsImdldE1vZGVscyIsInJlcyIsImZldGNoIiwibWFrZSIsIm1vZHMiLCJqc29uIiwiZGF0YSIsIm5ld01vZGVscyIsImhhbmRsZVNlYXJjaCIsInBhdGhuYW1lIiwibWluIiwibWF4IiwidGFyZ2V0IiwibWFwIiwiY291bnQiLCJsZW5ndGgiLCJMaXN0IiwiU2VsZWN0IiwiQnV0dG9uIiwiYnV0dG9uIiwiYmFja2dyb3VuZCIsIkluZGV4UGFnZSIsImNhcnMiLCJtYWtlRmlsdGVycyIsIm1ha2VNb2RlbCIsImNvbnNvbGUiLCJsb2ciLCJOdW1iZXIiLCJwYWdlIiwicHJldiIsIm51bSIsIm5leHQiLCJBcnJheSIsImZpbGwiLCJ2IiwiaSIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsImxpbWl0IiwiY291bnRfdXJsIiwidXJsIiwibWFrZV91cmwiLCJwcmljZV91cmwiLCJiYXNlX29uX21ha2VfdXJsIiwibW9kZWxfdXJsIiwibWFrZV9tb2RlbF91cmwiLCJmaWx0ZXIiLCJiYXNlX21ha2UiLCJtYWttb2QiLCJQcm9taXNlIiwiYWxsIiwiYmFzZU1ha2UiLCJwcm9wcyIsIk1hdGgiLCJjZWlsIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFl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LENBQUNjLElBSFY7QUFJTGlCLGlCQUFXLEVBQUU0QixRQUFRLENBQUM3QyxJQUpqQjtBQUtMa0IsZUFBUyxFQUFFQSxTQUFTLENBQUNsQixJQUxoQjtBQU1MUixZQUFNLEVBQUVBLE1BQU0sQ0FBQ1EsSUFOVjtBQU9MUSxXQUFLLEVBQUV1QyxJQUFJLENBQUNDLElBQUwsQ0FBVXhDLEtBQUssQ0FBQ1IsSUFBTixHQUFhZ0MsS0FBdkI7QUFQRjtBQURGLEdBQVA7QUFXRDtBQUVjakIsd0VBQWY7QUFFQSxNQUFNMUMsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJOztDQUE3QjtBQUlBLE1BQU1DLElBQUksR0FBR0Ysd0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQXhCLEM7Ozs7Ozs7Ozs7OztBQzVMQTtBQUFBO0FBQU8sTUFBTUosV0FBVyxHQUFJVCxLQUFELElBQVc7QUFDcEMsUUFBTXVGLFNBQVMsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDL0NDLFNBQUssRUFBRSxVQUR3QztBQUUvQ0MsWUFBUSxFQUFFO0FBRnFDLEdBQS9CLENBQWxCO0FBS0EsU0FBT0osU0FBUyxDQUFDSyxNQUFWLENBQWlCNUYsS0FBakIsRUFBd0JVLEtBQXhCLENBQThCLENBQTlCLEVBQWlDLENBQUMsQ0FBbEMsQ0FBUDtBQUNELENBUE0sQzs7Ozs7Ozs7Ozs7QUNBUCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdFByaWNlXCI7XHJcblxyXG5jb25zdCBibXcgPSBcIi4vYXNzZXRzL2Jtdy5qcGdcIjtcclxuY29uc3QgdG95b3RhID0gXCIuL2Fzc2V0cy90b3lvdGEuanBnXCI7XHJcbmNvbnN0IGhvbmRhID0gXCIuL2Fzc2V0cy9ob25kYS5qcGdcIjtcclxuY29uc3QgbGV4dXMgPSBcIi4vYXNzZXRzL2xleHVzLmpwZ1wiO1xyXG5cclxuY29uc3QgQWxsQ2FycyA9ICh7XHJcbiAgY2FyOiB7XHJcbiAgICBfaWQsXHJcbiAgICBuYW1lLFxyXG4gICAgbW9kZWwsXHJcbiAgICB5ZWFyLFxyXG4gICAgbG9jYXRpb24sXHJcbiAgICBjb2xvcixcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgcGhvdG9fdXJsLFxyXG4gICAgcHJpY2UsXHJcbiAgfSxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcGhvdG8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbWcgPSBwaG90b191cmxcclxuICAgICAgPyBwaG90b191cmxcclxuICAgICAgOiBuYW1lID09PSBcImJtd1wiXHJcbiAgICAgID8gYm13XHJcbiAgICAgIDogbmFtZSA9PT0gXCJ0b3lvdGFcIlxyXG4gICAgICA/IHRveW90YVxyXG4gICAgICA6IG5hbWUgPT09IFwiaG9uZGFcIlxyXG4gICAgICA/IGhvbmRhXHJcbiAgICAgIDogbGV4dXM7XHJcbiAgICByZXR1cm4gaW1nO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5hdiA9IChpZCkgPT4ge1xyXG4gICAgcHVzaChgL3ZlaGljbGUvJHtuYW1lfS8ke21vZGVsfS8ke2lkfWApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxHcmlkPlxyXG4gICAgICAgIDxJbWFnZSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOYXYoX2lkKX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz17cGhvdG9fdXJsIHx8IGJtd30gYWx0PSdjYXJzIHBvc3RlcicgLz5cclxuICAgICAgICA8L0ltYWdlPlxyXG4gICAgICAgIDxDb250ZW50IGNvbG9yPXtjb2xvci5zcGxpdChcIiBcIilbMF19PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0nbWFrZSc+XHJcbiAgICAgICAgICAgIDxzcGFuPntuYW1lLnRvVXBwZXJDYXNlKCl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nbW9kZWwnPkNhciBNb2RlbDoge21vZGVsfTwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3llYXInPk1hbnVmYWN0dXJpbmcgWWVhcjoge3llYXJ9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdwcmljZSc+Q2FyIFByaWNlOiDigqYge2Zvcm1hdFByaWNlKHByaWNlKX08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xvY2F0aW9uJz5Mb2NhdGlvbjoge2xvY2F0aW9ufTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nZGVzY3JpcHRpb24nPntgJHtkZXNjcmlwdGlvbi5zbGljZSgwLCA1MCl9Li4uYH08L3A+XHJcbiAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWxsQ2FycztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG5gO1xyXG5jb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ2FwOiAyZW07XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuYDtcclxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2PHsgY29sb3I6IHN0cmluZyB9PmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIHAsXHJcbiAgaDIsXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuXHJcbiAgLm1ha2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgY29sb3IgfSkgPT5cclxuICAgICAgICBjb2xvciA9PT0gXCJ3aGl0ZVwiID8gXCIjY2NjY2NjXCIgOiBjb2xvciA/IGNvbG9yIDogXCIjYWFhYWFhXCJ9O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4vLyAgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgYFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcInJlYWN0LWRyb3Bkb3duXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8gY29uc3QgbWFrZXMgPSBbXHJcbi8vICAgeyB2YWx1ZTogXCJibXdcIiwgbGFiZWw6IFwiQm13XCIgfSxcclxuLy8gICB7IHZhbHVlOiBcInRveW90YVwiLCBsYWJlbDogXCJUb3lvdGFcIiB9LFxyXG4vLyAgIHsgdmFsdWU6IFwiaG9uZGFcIiwgbGFiZWw6IFwiSG9uZGFcIiB9LFxyXG4vLyAgIHsgdmFsdWU6IFwibGV4dXNcIiwgbGFiZWw6IFwiTGV4dXNcIiB9LFxyXG4vLyBdO1xyXG4vLyBjb25zdCBtb2RlbHMgPSBbXHJcbi8vICAgeyB2YWx1ZTogXCJ4NVwiLCBsYWJlbDogXCJYNVwiIH0sXHJcbi8vICAgeyB2YWx1ZTogXCJ4NlwiLCBsYWJlbDogXCJYNlwiIH0sXHJcbi8vICAgeyB2YWx1ZTogXCJ4N1wiLCBsYWJlbDogXCJYN1wiIH0sXHJcbi8vICAgeyB2YWx1ZTogXCJ4OFwiLCBsYWJlbDogXCJYOFwiIH0sXHJcbi8vIF07XHJcbmNvbnN0IGxvY2F0aW9ucyA9IFtcclxuICB7IHZhbHVlOiBcImxhZ29zXCIsIGxhYmVsOiBcIkxhZ29zXCIgfSxcclxuICB7IHZhbHVlOiBcImFidWphXCIsIGxhYmVsOiBcIkFidWphXCIgfSxcclxuICB7IHZhbHVlOiBcImJheWVsc2FcIiwgbGFiZWw6IFwiQmF5ZWxzYVwiIH0sXHJcbiAgeyB2YWx1ZTogXCJwb3J0IGhhcmNvdXJ0XCIsIGxhYmVsOiBcIlBvcnQgSGFyY291cnRcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICh7IHNldFNlbGVjdCwgc2VsZWN0LCBtYWtlcywgbW9kZWxzLCBxdWVyeUNhcnMgfSkgPT4ge1xyXG4gIGNvbnN0IFttb2QsIHNldE1vZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCB7IHF1ZXJ5LCBwdXNoIH06IHsgcXVlcnk6IGFueTsgcHVzaDogYW55IH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwcmljZXMgPSBbXHJcbiAgICA1MDAwMDAsXHJcbiAgICAxMDAwMDAwLFxyXG4gICAgMTUwMDAwMCxcclxuICAgIDIwMDAwMDAsXHJcbiAgICAyNTAwMDAwLFxyXG4gICAgMzAwMDAwMCxcclxuICAgIDEwMDAwMDAwLFxyXG4gICAgMjAwMDAwMDAsXHJcbiAgICAzMDAwMDAwMCxcclxuICAgIDQwMDAwMDAwLFxyXG4gICAgNTAwMDAwMDAsXHJcbiAgXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldE1vZGVscyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbW9kZWxzLyR7c2VsZWN0Lm1ha2V9YFxyXG4gICAgICApO1xyXG4gICAgICBsZXQgbW9kcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHNldE1vZChtb2RzLmRhdGEpO1xyXG4gICAgfTtcclxuICAgIGdldE1vZGVscygpO1xyXG4gIH0sIFtzZWxlY3RdKTtcclxuXHJcbiAgbGV0IG5ld01vZGVscyA9IG1vZCA/IG1vZCA6IG1vZGVscztcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgcHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiBcIi9cIixcclxuICAgICAgcXVlcnk6IHNlbGVjdCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIDxsYWJlbD5BbGwgQ2FyczwvbGFiZWw+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgYmFja2dyb3VuZD0nd2hpdGUnXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3Qoe1xyXG4gICAgICAgICAgICAgIG1ha2U6IFwiXCIsXHJcbiAgICAgICAgICAgICAgbW9kZWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgbG9jYXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgIG1heDogMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFsbFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIDxsYWJlbD5NYWtlczwvbGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbmFtZT0nbWFrZSdcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PlxyXG4gICAgICAgICAgICBzZXRTZWxlY3Qoe1xyXG4gICAgICAgICAgICAgIC4uLnNlbGVjdCxcclxuICAgICAgICAgICAgICBtYWtlOiB2YWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtxdWVyeS5tYWtlfT57cXVlcnkubWFrZSB8fCBcIiBTZWxlY3QgYSBtYWtlXCJ9PC9vcHRpb24+XHJcbiAgICAgICAgICB7bWFrZXMubWFwKChtYWtlOiBhbnkpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e21ha2UubWFrZX0gdmFsdWU9e21ha2UubWFrZX0+XHJcbiAgICAgICAgICAgICAge21ha2UubWFrZX0gKHttYWtlLmNvdW50fSlcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICA8bGFiZWw+TW9kZWxzPC9sYWJlbD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBuYW1lPSdtb2RlbCdcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PlxyXG4gICAgICAgICAgICBzZXRTZWxlY3Qoe1xyXG4gICAgICAgICAgICAgIC4uLnNlbGVjdCxcclxuICAgICAgICAgICAgICBtb2RlbDogdmFsdWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cXVlcnkubW9kZWx9PlxyXG4gICAgICAgICAgICB7cXVlcnkubW9kZWwgfHwgXCIgU2VsZWN0IGEgbW9kZWxcIn1cclxuICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAge25ld01vZGVscy5tYXAoKG1vZGVsOiBhbnkpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e21vZGVsLm1vZGVsfSB2YWx1ZT17bW9kZWwubW9kZWx9PlxyXG4gICAgICAgICAgICAgIHttb2RlbC5tb2RlbH1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICA8bGFiZWw+TWluaW11bSBQcmljZTwvbGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbmFtZT0nbWluJ1xyXG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+XHJcbiAgICAgICAgICAgIHNldFNlbGVjdCh7XHJcbiAgICAgICAgICAgICAgLi4uc2VsZWN0LFxyXG4gICAgICAgICAgICAgIG1pbjogdmFsdWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cXVlcnkubWlufT57cXVlcnkubWluIHx8IFwiTWluaW11bSBQcmljZXNcIn08L29wdGlvbj5cclxuICAgICAgICAgIHtwcmljZXMubWFwKChwcmljZTogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwcmljZX0gdmFsdWU9e3ByaWNlfT5cclxuICAgICAgICAgICAgICB7cHJpY2V9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAgPGxhYmVsPk1heGltdW0gUHJpY2U8L2xhYmVsPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIG5hbWU9J21heCdcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PlxyXG4gICAgICAgICAgICBzZXRTZWxlY3Qoe1xyXG4gICAgICAgICAgICAgIC4uLnNlbGVjdCxcclxuICAgICAgICAgICAgICBtYXg6IHZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3F1ZXJ5Lm1heH0+e3F1ZXJ5Lm1heCB8fCBcIk1heGltdW0gUHJpY2VzXCJ9PC9vcHRpb24+XHJcbiAgICAgICAgICB7cHJpY2VzLm1hcCgocHJpY2U6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17cHJpY2V9IHZhbHVlPXtwcmljZX0+XHJcbiAgICAgICAgICAgICAge3ByaWNlfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICA8L0xpc3Q+XHJcblxyXG4gICAgICA8QnV0dG9uIGJhY2tncm91bmQ9J3RlYWwnIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgU2VhcmNoIEZvciBDYXJcclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9J2NvdW50Jz57cXVlcnlDYXJzLmxlbmd0aH0gQ2FycyBGb3VuZCEhITwvcD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAvKiBwb3NpdGlvbjogc3RpY2t5O1xyXG50b3A6IDA7ICovXHJcbmA7XHJcbmNvbnN0IExpc3QgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBTZWxlY3QgPSBzdHlsZWQuc2VsZWN0YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbmA7XHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b248eyBiYWNrZ3JvdW5kOiBzdHJpbmcgfT5gXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAkeyh7IGJhY2tncm91bmQgfSkgPT4gKGJhY2tncm91bmQgPyBcIjFweCBzb2xpZCAjY2NjY2NjXCIgOiBcIm5vbmVcIil9O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMC43ZW0gMS41ZW07XHJcbiAgYmFja2dyb3VuZDogJHsoeyBiYWNrZ3JvdW5kIH0pID0+IChiYWNrZ3JvdW5kID8gYmFja2dyb3VuZCA6IFwidGVhbFwiKX07XHJcbiAgY29sb3I6ICR7KHsgYmFja2dyb3VuZCB9KSA9PiAoYmFja2dyb3VuZCA/IFwiIzMzMzMzM1wiIDogXCJ3aGl0ZVwiKX07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuLy8gY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBgO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEFsbENhcnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWxsQ2Fycy9BbGxDYXJzXCI7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXIvU2lkZWJhclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIENhckludGVyZmFjZSB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG1vZGVsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBwcmljZTogc3RyaW5nO1xyXG4gIGRpc3RhbmNlOiBzdHJpbmc7XHJcbiAgZnVlbF90eXBlOiBzdHJpbmc7XHJcbiAgcGhvdG9fdXJsOiBzdHJpbmc7XHJcbiAgY29sb3I6IHN0cmluZztcclxuICB5ZWFyOiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxuICBjcmVhdGVkQXQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFNlbGVjdFByb3BzIHtcclxuICBtYWtlOiBzdHJpbmc7XHJcbiAgbW9kZWw6IHN0cmluZztcclxuICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gIG1pbjogbnVtYmVyO1xyXG4gIG1heDogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbmRleFBhZ2Uoe1xyXG4gIGNhcnMsXHJcbiAgbWFrZXMsXHJcbiAgbW9kZWxzLFxyXG4gIG1ha2VGaWx0ZXJzLFxyXG4gIG1ha2VNb2RlbCxcclxuICBwcmljZXMsXHJcbiAgY291bnQsXHJcbn06IHtcclxuICBjYXJzPzogQ2FySW50ZXJmYWNlW107XHJcbiAgbWFrZXM/OiBhbnlbXTtcclxuICBwcmljZXM/OiBhbnlbXTtcclxuICBtb2RlbHM/OiBhbnlbXTtcclxuICBtYWtlRmlsdGVycz86IGFueVtdO1xyXG4gIG1ha2VNb2RlbD86IGFueVtdO1xyXG4gIGNvdW50OiBudW1iZXI7XHJcbn0pIHtcclxuICBjb25zdCBbc2VsZWN0LCBzZXRTZWxlY3RdID0gdXNlU3RhdGU8U2VsZWN0UHJvcHM+KHtcclxuICAgIG1ha2U6IFwiXCIsXHJcbiAgICBtb2RlbDogXCJcIixcclxuICAgIGxvY2F0aW9uOiBcIlwiLFxyXG4gICAgbWluOiAwLFxyXG4gICAgbWF4OiAwLFxyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZyh7IHByaWNlcyB9KTtcclxuXHJcbiAgbGV0IHF1ZXJ5Q2FycyA9XHJcbiAgICBtYWtlTW9kZWwubGVuZ3RoID4gMFxyXG4gICAgICA/IG1ha2VNb2RlbFxyXG4gICAgICA6IG1ha2VGaWx0ZXJzLmxlbmd0aCA+IDBcclxuICAgICAgPyBtYWtlRmlsdGVyc1xyXG4gICAgICA6IHByaWNlcy5sZW5ndGggPiAwXHJcbiAgICAgID8gcHJpY2VzXHJcbiAgICAgIDogY2FycztcclxuXHJcbiAgY29uc3QgeyBwdXNoLCBxdWVyeSB9OiBhbnkgPSB1c2VSb3V0ZXIoKTtcclxuICAvLyBjb25zb2xlLmxvZyh7IGNhcnMsIG1ha2VzLCBtb2RlbHMsIG1ha2VGaWx0ZXJzLCBtYWtlTW9kZWwsIHByaWNlcyB9KTtcclxuXHJcbiAgY29uc29sZS5sb2codHlwZW9mIE51bWJlcihxdWVyeS5wYWdlKSk7XHJcblxyXG4gIGNvbnN0IHByZXYgPSAoKSA9PiB7XHJcbiAgICBsZXQgbnVtID0gTnVtYmVyKHF1ZXJ5LnBhZ2UpID8gTnVtYmVyKHF1ZXJ5LnBhZ2UpIC0gMSA6IDA7XHJcbiAgICBpZiAobnVtIDw9IDApIHtcclxuICAgICAgbnVtID0gY291bnQ7XHJcbiAgICB9XHJcbiAgICBwdXNoKGAvP3BhZ2U9JHtudW19YCk7XHJcbiAgfTtcclxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xyXG4gICAgbGV0IG51bSA9IE51bWJlcihxdWVyeS5wYWdlKSA/IE51bWJlcihxdWVyeS5wYWdlKSArIDEgOiAyO1xyXG4gICAgaWYgKG51bSA+IGNvdW50KSB7XHJcbiAgICAgIG51bSA9IDE7XHJcbiAgICB9XHJcbiAgICBwdXNoKGAvP3BhZ2U9JHtudW19YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhcic+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgICAgICAgc2V0U2VsZWN0PXtzZXRTZWxlY3R9XHJcbiAgICAgICAgICAgICAgc2VsZWN0PXtzZWxlY3R9XHJcbiAgICAgICAgICAgICAgbWFrZXM9e21ha2VzfVxyXG4gICAgICAgICAgICAgIG1vZGVscz17bW9kZWxzfVxyXG4gICAgICAgICAgICAgIHF1ZXJ5Q2Fycz17cXVlcnlDYXJzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cXVlcnlDYXJzLm1hcCgoY2FyOiBDYXJJbnRlcmZhY2UpID0+IChcclxuICAgICAgICAgICAgICA8QWxsQ2FycyBrZXk9e2Nhci5faWR9IGNhcj17Y2FyfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0ncGFnaW5hdGUnPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Fycm93X2xlZnQnIG9uQ2xpY2s9e3ByZXZ9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+JiM4NTkyOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIHtBcnJheShjb3VudClcclxuICAgICAgICAgICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgICAgICAgICAubWFwKCh2LCBpOiBudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17TnVtYmVyKHF1ZXJ5LnBhZ2UpID09PSBpICsgMSAmJiBcImFjdGl2ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHB1c2goYC8/cGFnZT0ke2kgKyAxfWApfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2kgKyAxfVxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nYXJyb3dfcmlnaHQnIG9uQ2xpY2s9e25leHR9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+JiM4NTk0Ozwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcbiAgbGV0IG1ha2UgPSBjdHgucXVlcnkubWFrZSA/IGN0eC5xdWVyeS5tYWtlIDogbnVsbDtcclxuICBsZXQgbW9kID0gY3R4LnF1ZXJ5Lm1vZGVsID8gY3R4LnF1ZXJ5Lm1vZGVsIDogbnVsbDtcclxuICBsZXQgbWluID0gY3R4LnF1ZXJ5Lm1pbiA/IGN0eC5xdWVyeS5taW4gOiBudWxsO1xyXG4gIGxldCBtYXggPSBjdHgucXVlcnkubWF4ID8gY3R4LnF1ZXJ5Lm1heCA6IG51bGw7XHJcblxyXG4gIGxldCBwYWdlID0gTnVtYmVyKGN0eC5xdWVyeS5wYWdlKSB8fCAxO1xyXG4gIGxldCBsaW1pdCA9IE51bWJlcihjdHgucXVlcnkubGltaXQpIHx8IDQ7XHJcblxyXG4gIGNvbnN0IGNvdW50X3VybCA9IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL2NvdW50YDtcclxuICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9jYXJzP3BhZ2U9JHtwYWdlfSZsaW1pdD0ke2xpbWl0fWA7XHJcbiAgY29uc3QgbWFrZV91cmwgPSBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9tYWtlc2A7XHJcbiAgY29uc3QgcHJpY2VfdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvcHJpY2VzP21pbj0ke21pbn0mbWF4PSR7bWF4fWA7XHJcbiAgY29uc3QgYmFzZV9vbl9tYWtlX3VybCA9IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL2NhcnMvbWFrZS8ke21ha2V9YDtcclxuICBjb25zdCBtb2RlbF91cmwgPSBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9tb2RlbHMvJHttYWtlfWA7XHJcbiAgY29uc3QgbWFrZV9tb2RlbF91cmwgPSBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9jYXJzL21vZGVsL21ha2U/bWFrZT0ke21ha2V9Jm1vZGVsPSR7bW9kfWA7XHJcbiAgY29uc3QgW1xyXG4gICAgcmVzLFxyXG4gICAgZmlsdGVyLFxyXG4gICAgbW9kZWwsXHJcbiAgICBiYXNlX21ha2UsXHJcbiAgICBtYWttb2QsXHJcbiAgICBwcmljZSxcclxuICAgIGxlbmd0aCxcclxuICBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgZmV0Y2godXJsKSxcclxuICAgIGZldGNoKG1ha2VfdXJsKSxcclxuICAgIGZldGNoKG1vZGVsX3VybCksXHJcbiAgICBmZXRjaChiYXNlX29uX21ha2VfdXJsKSxcclxuICAgIGZldGNoKG1ha2VfbW9kZWxfdXJsKSxcclxuICAgIGZldGNoKHByaWNlX3VybCksXHJcbiAgICBmZXRjaChjb3VudF91cmwpLFxyXG4gIF0pO1xyXG4gIGNvbnN0IGNhcnMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnN0IG1ha2VzID0gYXdhaXQgZmlsdGVyLmpzb24oKTtcclxuICBjb25zdCBwcmljZXMgPSBhd2FpdCBwcmljZS5qc29uKCk7XHJcbiAgY29uc3QgbW9kZWxzID0gYXdhaXQgbW9kZWwuanNvbigpO1xyXG4gIGNvbnN0IGJhc2VNYWtlID0gYXdhaXQgYmFzZV9tYWtlLmpzb24oKTtcclxuICBjb25zdCBtYWtlTW9kZWwgPSBhd2FpdCBtYWttb2QuanNvbigpO1xyXG4gIGxldCBjb3VudCA9IGF3YWl0IGxlbmd0aC5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjYXJzOiBjYXJzLmRhdGEsXHJcbiAgICAgIG1ha2VzOiBtYWtlcy5kYXRhLFxyXG4gICAgICBtb2RlbHM6IG1vZGVscy5kYXRhLFxyXG4gICAgICBtYWtlRmlsdGVyczogYmFzZU1ha2UuZGF0YSxcclxuICAgICAgbWFrZU1vZGVsOiBtYWtlTW9kZWwuZGF0YSxcclxuICAgICAgcHJpY2VzOiBwcmljZXMuZGF0YSxcclxuICAgICAgY291bnQ6IE1hdGguY2VpbChjb3VudC5kYXRhIC8gbGltaXQpLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmc6IDAlIDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBHcmlkID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMmVtKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xyXG4gIGdhcDogMmVtO1xyXG5cclxuICAucGFnaW5hdGUge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgLyogcGFkZGluZzogMCAxZW07ICovXHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hcnJvd19yaWdodCxcclxuICAgIC5hcnJvd19sZWZ0IHtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZGViYXIge1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAyMHZoO1xyXG4gIH1cclxuXHJcbiAgLmNvdW50IHtcclxuICAgIHBhZGRpbmc6IDFlbSAwO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIH1cclxuYDtcclxuIiwiZXhwb3J0IGNvbnN0IGZvcm1hdFByaWNlID0gKHByaWNlKSA9PiB7XHJcbiAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xyXG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChwcmljZSkuc2xpY2UoMSwgLTMpO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9