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
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
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

  return __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 68,
      columnNumber: 9
    }
  }, "All Cars (", total, ")")), __jsx(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: query.make,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, query.make || " Select a make"), makes.map(make => __jsx("option", {
    key: make.make,
    value: make.make,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, make.make, " (", make.count, ")")))), __jsx(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: query.model,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, query.model || " Select a model"), newModels.data && newModels.data.map(model => __jsx("option", {
    key: model.model,
    value: model.model,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 15
    }
  }, model.model, " (", model.count, ")")))), __jsx(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
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
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: query.min,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, query.min || "Minimum Prices"), prices.map(price => __jsx("option", {
    key: price,
    value: price,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, price)))), __jsx(List, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
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
      lineNumber: 146,
      columnNumber: 9
    }
  }, __jsx("option", {
    value: query.max,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, query.max || "Maximum Prices"), prices.map(price => __jsx("option", {
    key: price,
    value: price,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, price)))), __jsx(Button, {
    background: "teal",
    onClick: handleSearch,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, "Search For Car"), __jsx("p", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, nTotal, " Cars Found!!!"));
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
  count,
  total
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
  let queryCars = makeModel.length > 0 ? makeModel : makeFilters.length > 0 ? makeFilters : prices.length > 0 ? prices : cars;
  const {
    push,
    query
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
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
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx(Grid, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, __jsx(_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setSelect: setSelect,
    select: select,
    makes: makes,
    models: models,
    nTotal: nTotal,
    total: total,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, queryCars.map(car => __jsx(_components_AllCars_AllCars__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: car._id,
    car: car,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  })), __jsx("ul", {
    className: "paginate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "arrow_left",
    onClick: prev,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, "\u2190")), Array(count).fill(null).map((v, i) => __jsx("li", {
    key: i,
    className: Number(query.page) === i + 1 ? "active" : undefined,
    onClick: () => push(`/?page=${i + 1}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  }, i + 1)), __jsx("li", {
    className: "arrow_right",
    onClick: next,
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
      count: Math.ceil(count.data / limit),
      total: count.data
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxsQ2Fycy9BbGxDYXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Zvcm1hdFByaWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImJtdyIsInRveW90YSIsImhvbmRhIiwibGV4dXMiLCJBbGxDYXJzIiwiY2FyIiwiX2lkIiwibmFtZSIsIm1vZGVsIiwieWVhciIsImxvY2F0aW9uIiwiY29sb3IiLCJkZXNjcmlwdGlvbiIsInBob3RvX3VybCIsInByaWNlIiwicHVzaCIsInVzZVJvdXRlciIsInBob3RvIiwiaW1nIiwiaGFuZGxlTmF2IiwiaWQiLCJzcGxpdCIsInRvVXBwZXJDYXNlIiwiZm9ybWF0UHJpY2UiLCJzbGljZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkdyaWQiLCJJbWFnZSIsIkNvbnRlbnQiLCJsb2NhdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwiU2lkZWJhciIsInNldFNlbGVjdCIsInNlbGVjdCIsIm1ha2VzIiwibW9kZWxzIiwidG90YWwiLCJuVG90YWwiLCJtb2QiLCJzZXRNb2QiLCJ1c2VTdGF0ZSIsInF1ZXJ5IiwicHJpY2VzIiwidXNlRWZmZWN0IiwiZ2V0TW9kZWxzIiwicmVzIiwiZmV0Y2giLCJtYWtlIiwibW9kcyIsImpzb24iLCJuZXdNb2RlbHMiLCJoYW5kbGVTZWFyY2giLCJwYXRobmFtZSIsIm1pbiIsIm1heCIsInRhcmdldCIsIm1hcCIsImNvdW50IiwiZGF0YSIsIkxpc3QiLCJTZWxlY3QiLCJCdXR0b24iLCJidXR0b24iLCJiYWNrZ3JvdW5kIiwiSW5kZXhQYWdlIiwiY2FycyIsIm1ha2VGaWx0ZXJzIiwibWFrZU1vZGVsIiwicXVlcnlDYXJzIiwibGVuZ3RoIiwiYSIsIlNldCIsIm0iLCJwcmV2IiwibnVtIiwiTnVtYmVyIiwicGFnZSIsIm5leHQiLCJBcnJheSIsImZpbGwiLCJ2IiwiaSIsInVuZGVmaW5lZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsImxpbWl0IiwiY291bnRfdXJsIiwidXJsIiwibWFrZV91cmwiLCJwcmljZV91cmwiLCJiYXNlX29uX21ha2VfdXJsIiwibW9kZWxfdXJsIiwibWFrZV9tb2RlbF91cmwiLCJmaWx0ZXIiLCJiYXNlX21ha2UiLCJtYWttb2QiLCJQcm9taXNlIiwiYWxsIiwiYmFzZU1ha2UiLCJwcm9wcyIsIk1hdGgiLCJjZWlsIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBC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cUMsR0FBL0IsQ0FBbEI7QUFLQSxTQUFPSixTQUFTLENBQUNLLE1BQVYsQ0FBaUJoRyxLQUFqQixFQUF3QlUsS0FBeEIsQ0FBOEIsQ0FBOUIsRUFBaUMsQ0FBQyxDQUFsQyxDQUFQO0FBQ0QsQ0FQTSxDOzs7Ozs7Ozs7OztBQ0FQLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZm9ybWF0UHJpY2VcIjtcclxuXHJcbmNvbnN0IGJtdyA9IFwiLi9hc3NldHMvYm13LmpwZ1wiO1xyXG5jb25zdCB0b3lvdGEgPSBcIi4vYXNzZXRzL3RveW90YS5qcGdcIjtcclxuY29uc3QgaG9uZGEgPSBcIi4vYXNzZXRzL2hvbmRhLmpwZ1wiO1xyXG5jb25zdCBsZXh1cyA9IFwiLi9hc3NldHMvbGV4dXMuanBnXCI7XHJcblxyXG5jb25zdCBBbGxDYXJzID0gKHtcclxuICBjYXI6IHtcclxuICAgIF9pZCxcclxuICAgIG5hbWUsXHJcbiAgICBtb2RlbCxcclxuICAgIHllYXIsXHJcbiAgICBsb2NhdGlvbixcclxuICAgIGNvbG9yLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBwaG90b191cmwsXHJcbiAgICBwcmljZSxcclxuICB9LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyBwdXNoIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwaG90byA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltZyA9IHBob3RvX3VybFxyXG4gICAgICA/IHBob3RvX3VybFxyXG4gICAgICA6IG5hbWUgPT09IFwiYm13XCJcclxuICAgICAgPyBibXdcclxuICAgICAgOiBuYW1lID09PSBcInRveW90YVwiXHJcbiAgICAgID8gdG95b3RhXHJcbiAgICAgIDogbmFtZSA9PT0gXCJob25kYVwiXHJcbiAgICAgID8gaG9uZGFcclxuICAgICAgOiBsZXh1cztcclxuICAgIHJldHVybiBpbWc7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmF2ID0gKGlkKSA9PiB7XHJcbiAgICBwdXNoKGAvdmVoaWNsZS8ke25hbWV9LyR7bW9kZWx9LyR7aWR9YCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEltYWdlIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdihfaWQpfT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtwaG90b191cmwgfHwgYm13fSBhbHQ9J2NhcnMgcG9zdGVyJyAvPlxyXG4gICAgICAgIDwvSW1hZ2U+XHJcbiAgICAgICAgPENvbnRlbnQgY29sb3I9e2NvbG9yLnNwbGl0KFwiIFwiKVswXX0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdtYWtlJz5cclxuICAgICAgICAgICAgPHNwYW4+e25hbWUudG9VcHBlckNhc2UoKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtb2RlbCc+Q2FyIE1vZGVsOiB7bW9kZWx9PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0neWVhcic+TWFudWZhY3R1cmluZyBZZWFyOiB7eWVhcn08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3ByaWNlJz5DYXIgUHJpY2U6IOKCpiB7Zm9ybWF0UHJpY2UocHJpY2UpfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbG9jYXRpb24nPkxvY2F0aW9uOiB7bG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+e2Ake2Rlc2NyaXB0aW9uLnNsaWNlKDAsIDUwKX0uLi5gfTwvcD5cclxuICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxDYXJzO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbmA7XHJcbmNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBnYXA6IDJlbTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG5gO1xyXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXY8eyBjb2xvcjogc3RyaW5nIH0+YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgcCxcclxuICBoMixcclxuICBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICAubWFrZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgYmFja2dyb3VuZDogJHsoeyBjb2xvciB9KSA9PlxyXG4gICAgICAgIGNvbG9yID09PSBcIndoaXRlXCIgPyBcIiNjY2NjY2NcIiA6IGNvbG9yID8gY29sb3IgOiBcIiNhYWFhYWFcIn07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbi8vICBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBgXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwicmVhY3QtZHJvcGRvd25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vLyBjb25zdCBtYWtlcyA9IFtcclxuLy8gICB7IHZhbHVlOiBcImJtd1wiLCBsYWJlbDogXCJCbXdcIiB9LFxyXG4vLyAgIHsgdmFsdWU6IFwidG95b3RhXCIsIGxhYmVsOiBcIlRveW90YVwiIH0sXHJcbi8vICAgeyB2YWx1ZTogXCJob25kYVwiLCBsYWJlbDogXCJIb25kYVwiIH0sXHJcbi8vICAgeyB2YWx1ZTogXCJsZXh1c1wiLCBsYWJlbDogXCJMZXh1c1wiIH0sXHJcbi8vIF07XHJcbi8vIGNvbnN0IG1vZGVscyA9IFtcclxuLy8gICB7IHZhbHVlOiBcIng1XCIsIGxhYmVsOiBcIlg1XCIgfSxcclxuLy8gICB7IHZhbHVlOiBcIng2XCIsIGxhYmVsOiBcIlg2XCIgfSxcclxuLy8gICB7IHZhbHVlOiBcIng3XCIsIGxhYmVsOiBcIlg3XCIgfSxcclxuLy8gICB7IHZhbHVlOiBcIng4XCIsIGxhYmVsOiBcIlg4XCIgfSxcclxuLy8gXTtcclxuY29uc3QgbG9jYXRpb25zID0gW1xyXG4gIHsgdmFsdWU6IFwibGFnb3NcIiwgbGFiZWw6IFwiTGFnb3NcIiB9LFxyXG4gIHsgdmFsdWU6IFwiYWJ1amFcIiwgbGFiZWw6IFwiQWJ1amFcIiB9LFxyXG4gIHsgdmFsdWU6IFwiYmF5ZWxzYVwiLCBsYWJlbDogXCJCYXllbHNhXCIgfSxcclxuICB7IHZhbHVlOiBcInBvcnQgaGFyY291cnRcIiwgbGFiZWw6IFwiUG9ydCBIYXJjb3VydFwiIH0sXHJcbl07XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKHsgc2V0U2VsZWN0LCBzZWxlY3QsIG1ha2VzLCBtb2RlbHMsIHRvdGFsLCBuVG90YWwgfSkgPT4ge1xyXG4gIGNvbnN0IFttb2QsIHNldE1vZF0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xyXG4gIGNvbnN0IHsgcXVlcnksIHB1c2ggfTogeyBxdWVyeTogYW55OyBwdXNoOiBhbnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHByaWNlcyA9IFtcclxuICAgIDUwMDAwMCxcclxuICAgIDEwMDAwMDAsXHJcbiAgICAxNTAwMDAwLFxyXG4gICAgMjAwMDAwMCxcclxuICAgIDI1MDAwMDAsXHJcbiAgICAzMDAwMDAwLFxyXG4gICAgMTAwMDAwMDAsXHJcbiAgICAyMDAwMDAwMCxcclxuICAgIDMwMDAwMDAwLFxyXG4gICAgNDAwMDAwMDAsXHJcbiAgICA1MDAwMDAwMCxcclxuICBdO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0TW9kZWxzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9tb2RlbHMvJHtzZWxlY3QubWFrZX1gXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBtb2RzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgLy8gbGV0IGs6IGFueSA9IG5ldyBTZXQobW9kcy5kYXRhID8gbW9kcy5kYXRhLm1hcCgobSkgPT4gbSkgOiBbXSk7XHJcbiAgICAgIC8vIGxldCBuID0gWy4uLmtdO1xyXG4gICAgICBzZXRNb2QobW9kcyk7XHJcbiAgICB9O1xyXG4gICAgZ2V0TW9kZWxzKCk7XHJcbiAgfSwgW3NlbGVjdF0pO1xyXG5cclxuICBsZXQgbmV3TW9kZWxzID0gbW9kID8gbW9kIDogbW9kZWxzO1xyXG4gIC8vIGNvbnNvbGUubG9nKG1vZGVscyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9ICgpID0+IHtcclxuICAgIHB1c2goe1xyXG4gICAgICBwYXRobmFtZTogXCIvXCIsXHJcbiAgICAgIHF1ZXJ5OiBzZWxlY3QsXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICA8bGFiZWw+QWxsIENhcnM8L2xhYmVsPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGJhY2tncm91bmQ9J3doaXRlJ1xyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBwdXNoKFwiL1wiKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0KHtcclxuICAgICAgICAgICAgICBtYWtlOiBcIlwiLFxyXG4gICAgICAgICAgICAgIG1vZGVsOiBcIlwiLFxyXG4gICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgICBtYXg6IDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBbGwgQ2FycyAoe3RvdGFsfSlcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICA8bGFiZWw+TWFrZXM8L2xhYmVsPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIG5hbWU9J21ha2UnXHJcbiAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT5cclxuICAgICAgICAgICAgc2V0U2VsZWN0KHtcclxuICAgICAgICAgICAgICAuLi5zZWxlY3QsXHJcbiAgICAgICAgICAgICAgbWFrZTogdmFsdWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cXVlcnkubWFrZX0+e3F1ZXJ5Lm1ha2UgfHwgXCIgU2VsZWN0IGEgbWFrZVwifTwvb3B0aW9uPlxyXG4gICAgICAgICAge21ha2VzLm1hcCgobWFrZTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXttYWtlLm1ha2V9IHZhbHVlPXttYWtlLm1ha2V9PlxyXG4gICAgICAgICAgICAgIHttYWtlLm1ha2V9ICh7bWFrZS5jb3VudH0pXHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAgPGxhYmVsPk1vZGVsczwvbGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbmFtZT0nbW9kZWwnXHJcbiAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT5cclxuICAgICAgICAgICAgc2V0U2VsZWN0KHtcclxuICAgICAgICAgICAgICAuLi5zZWxlY3QsXHJcbiAgICAgICAgICAgICAgbW9kZWw6IHZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3F1ZXJ5Lm1vZGVsfT5cclxuICAgICAgICAgICAge3F1ZXJ5Lm1vZGVsIHx8IFwiIFNlbGVjdCBhIG1vZGVsXCJ9XHJcbiAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgIHtuZXdNb2RlbHMuZGF0YSAmJlxyXG4gICAgICAgICAgICBuZXdNb2RlbHMuZGF0YS5tYXAoKG1vZGVsOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17bW9kZWwubW9kZWx9IHZhbHVlPXttb2RlbC5tb2RlbH0+XHJcbiAgICAgICAgICAgICAgICB7bW9kZWwubW9kZWx9ICh7bW9kZWwuY291bnR9KVxyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICA8bGFiZWw+TWluaW11bSBQcmljZTwvbGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbmFtZT0nbWluJ1xyXG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+XHJcbiAgICAgICAgICAgIHNldFNlbGVjdCh7XHJcbiAgICAgICAgICAgICAgLi4uc2VsZWN0LFxyXG4gICAgICAgICAgICAgIG1pbjogdmFsdWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cXVlcnkubWlufT57cXVlcnkubWluIHx8IFwiTWluaW11bSBQcmljZXNcIn08L29wdGlvbj5cclxuICAgICAgICAgIHtwcmljZXMubWFwKChwcmljZTogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwcmljZX0gdmFsdWU9e3ByaWNlfT5cclxuICAgICAgICAgICAgICB7cHJpY2V9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAgPGxhYmVsPk1heGltdW0gUHJpY2U8L2xhYmVsPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIG5hbWU9J21heCdcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PlxyXG4gICAgICAgICAgICBzZXRTZWxlY3Qoe1xyXG4gICAgICAgICAgICAgIC4uLnNlbGVjdCxcclxuICAgICAgICAgICAgICBtYXg6IHZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3F1ZXJ5Lm1heH0+e3F1ZXJ5Lm1heCB8fCBcIk1heGltdW0gUHJpY2VzXCJ9PC9vcHRpb24+XHJcbiAgICAgICAgICB7cHJpY2VzLm1hcCgocHJpY2U6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17cHJpY2V9IHZhbHVlPXtwcmljZX0+XHJcbiAgICAgICAgICAgICAge3ByaWNlfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICA8L0xpc3Q+XHJcblxyXG4gICAgICA8QnV0dG9uIGJhY2tncm91bmQ9J3RlYWwnIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgU2VhcmNoIEZvciBDYXJcclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9J2NvdW50Jz57blRvdGFsfSBDYXJzIEZvdW5kISEhPC9wPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC8qIHBvc2l0aW9uOiBzdGlja3k7XHJcbnRvcDogMDsgKi9cclxuYDtcclxuY29uc3QgTGlzdCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFNlbGVjdCA9IHN0eWxlZC5zZWxlY3RgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuYDtcclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbjx7IGJhY2tncm91bmQ6IHN0cmluZyB9PmBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6ICR7KHsgYmFja2dyb3VuZCB9KSA9PiAoYmFja2dyb3VuZCA/IFwiMXB4IHNvbGlkICNjY2NjY2NcIiA6IFwibm9uZVwiKX07XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAwLjdlbSAxLjVlbTtcclxuICBiYWNrZ3JvdW5kOiAkeyh7IGJhY2tncm91bmQgfSkgPT4gKGJhY2tncm91bmQgPyBiYWNrZ3JvdW5kIDogXCJ0ZWFsXCIpfTtcclxuICBjb2xvcjogJHsoeyBiYWNrZ3JvdW5kIH0pID0+IChiYWNrZ3JvdW5kID8gXCIjMzMzMzMzXCIgOiBcIndoaXRlXCIpfTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG4vLyBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQWxsQ2FycyBmcm9tIFwiLi4vY29tcG9uZW50cy9BbGxDYXJzL0FsbENhcnNcIjtcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ2FySW50ZXJmYWNlIHtcclxuICBfaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbW9kZWw6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHByaWNlOiBzdHJpbmc7XHJcbiAgZGlzdGFuY2U6IHN0cmluZztcclxuICBmdWVsX3R5cGU6IHN0cmluZztcclxuICBwaG90b191cmw6IHN0cmluZztcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIHllYXI6IHN0cmluZztcclxuICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VsZWN0UHJvcHMge1xyXG4gIG1ha2U6IHN0cmluZztcclxuICBtb2RlbDogc3RyaW5nO1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgbWluOiBudW1iZXI7XHJcbiAgbWF4OiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEluZGV4UGFnZSh7XHJcbiAgY2FycyxcclxuICBtYWtlcyxcclxuICBtb2RlbHMsXHJcbiAgbWFrZUZpbHRlcnMsXHJcbiAgbWFrZU1vZGVsLFxyXG4gIHByaWNlcyxcclxuICBjb3VudCxcclxuICB0b3RhbCxcclxufToge1xyXG4gIGNhcnM/OiBDYXJJbnRlcmZhY2VbXTtcclxuICBtYWtlcz86IGFueVtdO1xyXG4gIHByaWNlcz86IGFueVtdO1xyXG4gIG1vZGVscz86IGFueVtdO1xyXG4gIG1ha2VGaWx0ZXJzPzogYW55W107XHJcbiAgbWFrZU1vZGVsPzogYW55W107XHJcbiAgY291bnQ6IG51bWJlcjtcclxuICB0b3RhbDogbnVtYmVyO1xyXG59KSB7XHJcbiAgY29uc3QgW3NlbGVjdCwgc2V0U2VsZWN0XSA9IHVzZVN0YXRlPFNlbGVjdFByb3BzPih7XHJcbiAgICBtYWtlOiBcIlwiLFxyXG4gICAgbW9kZWw6IFwiXCIsXHJcbiAgICBsb2NhdGlvbjogXCJcIixcclxuICAgIG1pbjogMCxcclxuICAgIG1heDogMCxcclxuICB9KTtcclxuXHJcbiAgbGV0IHF1ZXJ5Q2FycyA9XHJcbiAgICBtYWtlTW9kZWwubGVuZ3RoID4gMFxyXG4gICAgICA/IG1ha2VNb2RlbFxyXG4gICAgICA6IG1ha2VGaWx0ZXJzLmxlbmd0aCA+IDBcclxuICAgICAgPyBtYWtlRmlsdGVyc1xyXG4gICAgICA6IHByaWNlcy5sZW5ndGggPiAwXHJcbiAgICAgID8gcHJpY2VzXHJcbiAgICAgIDogY2FycztcclxuXHJcbiAgY29uc3QgeyBwdXNoLCBxdWVyeSB9OiBhbnkgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgbGV0IGE6IGFueSA9IG5ldyBTZXQobW9kZWxzLm1hcCgobSkgPT4gbSkpO1xyXG5cclxuICBjb25zdCBwcmV2ID0gKCkgPT4ge1xyXG4gICAgbGV0IG51bSA9IE51bWJlcihxdWVyeS5wYWdlKSA/IE51bWJlcihxdWVyeS5wYWdlKSAtIDEgOiAwO1xyXG4gICAgaWYgKG51bSA8PSAwKSB7XHJcbiAgICAgIG51bSA9IGNvdW50O1xyXG4gICAgfVxyXG4gICAgcHVzaChgLz9wYWdlPSR7bnVtfWApO1xyXG4gIH07XHJcbiAgY29uc3QgbmV4dCA9ICgpID0+IHtcclxuICAgIGxldCBudW0gPSBOdW1iZXIocXVlcnkucGFnZSkgPyBOdW1iZXIocXVlcnkucGFnZSkgKyAxIDogMjtcclxuICAgIGlmIChudW0gPiBjb3VudCkge1xyXG4gICAgICBudW0gPSAxO1xyXG4gICAgfVxyXG4gICAgcHVzaChgLz9wYWdlPSR7bnVtfWApO1xyXG4gIH07XHJcblxyXG4gIGxldCBuVG90YWwgPVxyXG4gICAgbWFrZU1vZGVsLmxlbmd0aCA+IDBcclxuICAgICAgPyBtYWtlTW9kZWwubGVuZ3RoXHJcbiAgICAgIDogbWFrZUZpbHRlcnMubGVuZ3RoID4gMFxyXG4gICAgICA/IG1ha2VGaWx0ZXJzLmxlbmd0aFxyXG4gICAgICA6IHByaWNlcy5sZW5ndGggPiAwXHJcbiAgICAgID8gcHJpY2VzLmxlbmd0aFxyXG4gICAgICA6IHRvdGFsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzaWRlYmFyJz5cclxuICAgICAgICAgICAgPFNpZGViYXJcclxuICAgICAgICAgICAgICBzZXRTZWxlY3Q9e3NldFNlbGVjdH1cclxuICAgICAgICAgICAgICBzZWxlY3Q9e3NlbGVjdH1cclxuICAgICAgICAgICAgICBtYWtlcz17bWFrZXN9XHJcbiAgICAgICAgICAgICAgbW9kZWxzPXttb2RlbHN9XHJcbiAgICAgICAgICAgICAgblRvdGFsPXtuVG90YWx9XHJcbiAgICAgICAgICAgICAgdG90YWw9e3RvdGFsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cXVlcnlDYXJzLm1hcCgoY2FyOiBDYXJJbnRlcmZhY2UpID0+IChcclxuICAgICAgICAgICAgICA8QWxsQ2FycyBrZXk9e2Nhci5faWR9IGNhcj17Y2FyfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0ncGFnaW5hdGUnPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Fycm93X2xlZnQnIG9uQ2xpY2s9e3ByZXZ9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+JiM4NTkyOzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIHtBcnJheShjb3VudClcclxuICAgICAgICAgICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgICAgICAgICAubWFwKCh2LCBpOiBudW1iZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIocXVlcnkucGFnZSkgPT09IGkgKyAxID8gXCJhY3RpdmVcIiA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwdXNoKGAvP3BhZ2U9JHtpICsgMX1gKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpICsgMX1cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Fycm93X3JpZ2h0JyBvbkNsaWNrPXtuZXh0fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPiYjODU5NDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xyXG4gIGxldCBtYWtlID0gY3R4LnF1ZXJ5Lm1ha2UgPyBjdHgucXVlcnkubWFrZSA6IG51bGw7XHJcbiAgbGV0IG1vZCA9IGN0eC5xdWVyeS5tb2RlbCA/IGN0eC5xdWVyeS5tb2RlbCA6IG51bGw7XHJcbiAgbGV0IG1pbiA9IGN0eC5xdWVyeS5taW4gPyBjdHgucXVlcnkubWluIDogbnVsbDtcclxuICBsZXQgbWF4ID0gY3R4LnF1ZXJ5Lm1heCA/IGN0eC5xdWVyeS5tYXggOiBudWxsO1xyXG5cclxuICBsZXQgcGFnZSA9IE51bWJlcihjdHgucXVlcnkucGFnZSkgfHwgMTtcclxuICBsZXQgbGltaXQgPSBOdW1iZXIoY3R4LnF1ZXJ5LmxpbWl0KSB8fCA0O1xyXG5cclxuICBjb25zdCBjb3VudF91cmwgPSBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9jb3VudGA7XHJcbiAgY29uc3QgdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvY2Fycz9wYWdlPSR7cGFnZX0mbGltaXQ9JHtsaW1pdH1gO1xyXG4gIGNvbnN0IG1ha2VfdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbWFrZXNgO1xyXG4gIGNvbnN0IHByaWNlX3VybCA9IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL3ByaWNlcz9taW49JHttaW59Jm1heD0ke21heH1gO1xyXG4gIGNvbnN0IGJhc2Vfb25fbWFrZV91cmwgPSBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9jYXJzL21ha2UvJHttYWtlfWA7XHJcbiAgY29uc3QgbW9kZWxfdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbW9kZWxzLyR7bWFrZX1gO1xyXG4gIGNvbnN0IG1ha2VfbW9kZWxfdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvY2Fycy9tb2RlbC9tYWtlP21ha2U9JHttYWtlfSZtb2RlbD0ke21vZH1gO1xyXG4gIGNvbnN0IFtcclxuICAgIHJlcyxcclxuICAgIGZpbHRlcixcclxuICAgIG1vZGVsLFxyXG4gICAgYmFzZV9tYWtlLFxyXG4gICAgbWFrbW9kLFxyXG4gICAgcHJpY2UsXHJcbiAgICBsZW5ndGgsXHJcbiAgXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgIGZldGNoKHVybCksXHJcbiAgICBmZXRjaChtYWtlX3VybCksXHJcbiAgICBmZXRjaChtb2RlbF91cmwpLFxyXG4gICAgZmV0Y2goYmFzZV9vbl9tYWtlX3VybCksXHJcbiAgICBmZXRjaChtYWtlX21vZGVsX3VybCksXHJcbiAgICBmZXRjaChwcmljZV91cmwpLFxyXG4gICAgZmV0Y2goY291bnRfdXJsKSxcclxuICBdKTtcclxuICBjb25zdCBjYXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zdCBtYWtlcyA9IGF3YWl0IGZpbHRlci5qc29uKCk7XHJcbiAgY29uc3QgcHJpY2VzID0gYXdhaXQgcHJpY2UuanNvbigpO1xyXG4gIGNvbnN0IG1vZGVscyA9IGF3YWl0IG1vZGVsLmpzb24oKTtcclxuICBjb25zdCBiYXNlTWFrZSA9IGF3YWl0IGJhc2VfbWFrZS5qc29uKCk7XHJcbiAgY29uc3QgbWFrZU1vZGVsID0gYXdhaXQgbWFrbW9kLmpzb24oKTtcclxuICBsZXQgY291bnQgPSBhd2FpdCBsZW5ndGguanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgY2FyczogY2Fycy5kYXRhLFxyXG4gICAgICBtYWtlczogbWFrZXMuZGF0YSxcclxuICAgICAgbW9kZWxzOiBtb2RlbHMuZGF0YSxcclxuICAgICAgbWFrZUZpbHRlcnM6IGJhc2VNYWtlLmRhdGEsXHJcbiAgICAgIG1ha2VNb2RlbDogbWFrZU1vZGVsLmRhdGEsXHJcbiAgICAgIHByaWNlczogcHJpY2VzLmRhdGEsXHJcbiAgICAgIGNvdW50OiBNYXRoLmNlaWwoY291bnQuZGF0YSAvIGxpbWl0KSxcclxuICAgICAgdG90YWw6IGNvdW50LmRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMCUgMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyZW0pO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XHJcbiAgZ2FwOiAyZW07XHJcblxyXG4gIC5wYWdpbmF0ZSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAvKiBwYWRkaW5nOiAwIDFlbTsgKi9cclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdGVhbDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFycm93X3JpZ2h0LFxyXG4gICAgLmFycm93X2xlZnQge1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0ZWFsO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhciB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IDIwdmg7XHJcbiAgfVxyXG5cclxuICAuY291bnQge1xyXG4gICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgfVxyXG5gO1xyXG4iLCJleHBvcnQgY29uc3QgZm9ybWF0UHJpY2UgPSAocHJpY2UpID0+IHtcclxuICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCB7XHJcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgY3VycmVuY3k6IFwiVVNEXCIsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KHByaWNlKS5zbGljZSgxLCAtMyk7XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=