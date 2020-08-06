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
    push(`/car/${id}`);
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
  models
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
  }, "Search For Car"));
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
/* harmony import */ var _components_AllCars_AllCars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AllCars/AllCars */ "./src/components/AllCars/AllCars.tsx");
/* harmony import */ var _components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar/Sidebar */ "./src/components/Sidebar/Sidebar.tsx");
var _jsxFileName = "C:\\Users\\bibia\\Documents\\Nextjs Projects\\buy-car\\src\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function IndexPage({
  cars,
  makes,
  models,
  makeFilters,
  makeModel,
  prices
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
  let queryCars = makeModel.length > 0 ? makeModel : makeFilters.length > 0 ? makeFilters : prices.length > 0 ? prices : cars; // console.log({ cars, makes, models, makeFilters, makeModel, prices });
  // console.log(cars);

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(Grid, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx(_components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setSelect: setSelect,
    select: select,
    makes: makes,
    models: models,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx("p", {
    className: "count",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, queryCars.length, " Cars Found!!!"), queryCars.map(car => __jsx(_components_AllCars_AllCars__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: car._id,
    car: car,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }))))));
}

async function getServerSideProps(ctx) {
  let make = ctx.query.make ? ctx.query.make : null;
  let mod = ctx.query.model ? ctx.query.model : null;
  let min = ctx.query.min ? ctx.query.min : null;
  let max = ctx.query.max ? ctx.query.max : null;
  const url = "http://localhost:5000/api/v1/cars";
  const make_url = `http://localhost:5000/api/v1/makes`;
  const price_url = `http://localhost:5000/api/v1/prices?min=${min}&max=${max}`;
  const base_on_make_url = `http://localhost:5000/api/v1/cars/make/${make}`;
  const model_url = `http://localhost:5000/api/v1/models/${make}`;
  const make_model_url = `http://localhost:5000/api/v1/cars/model/make?make=${make}&model=${mod}`;
  const [res, filter, model, base_make, makmod, price] = await Promise.all([fetch(url), fetch(make_url), fetch(model_url), fetch(base_on_make_url), fetch(make_model_url), fetch(price_url)]);
  const cars = await res.json();
  const makes = await filter.json();
  const prices = await price.json();
  const models = await model.json();
  const baseMake = await base_make.json();
  const makeModel = await makmod.json();
  return {
    props: {
      cars: cars.data,
      makes: makes.data,
      models: models.data,
      makeFilters: baseMake.data,
      makeModel: makeModel.data,
      prices: prices.data
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWxsQ2Fycy9BbGxDYXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Zvcm1hdFByaWNlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbImJtdyIsInRveW90YSIsImhvbmRhIiwibGV4dXMiLCJBbGxDYXJzIiwiY2FyIiwiX2lkIiwibmFtZSIsIm1vZGVsIiwieWVhciIsImxvY2F0aW9uIiwiY29sb3IiLCJkZXNjcmlwdGlvbiIsInBob3RvX3VybCIsInByaWNlIiwicHVzaCIsInVzZVJvdXRlciIsInBob3RvIiwiaW1nIiwiaGFuZGxlTmF2IiwiaWQiLCJzcGxpdCIsInRvVXBwZXJDYXNlIiwiZm9ybWF0UHJpY2UiLCJzbGljZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkdyaWQiLCJJbWFnZSIsIkNvbnRlbnQiLCJsb2NhdGlvbnMiLCJ2YWx1ZSIsImxhYmVsIiwiU2lkZWJhciIsInNldFNlbGVjdCIsInNlbGVjdCIsIm1ha2VzIiwibW9kZWxzIiwibW9kIiwic2V0TW9kIiwidXNlU3RhdGUiLCJxdWVyeSIsInByaWNlcyIsInVzZUVmZmVjdCIsImdldE1vZGVscyIsInJlcyIsImZldGNoIiwibWFrZSIsIm1vZHMiLCJqc29uIiwiZGF0YSIsIm5ld01vZGVscyIsImhhbmRsZVNlYXJjaCIsInBhdGhuYW1lIiwibWluIiwibWF4IiwidGFyZ2V0IiwibWFwIiwiY291bnQiLCJMaXN0IiwiU2VsZWN0IiwiQnV0dG9uIiwiYnV0dG9uIiwiYmFja2dyb3VuZCIsIkluZGV4UGFnZSIsImNhcnMiLCJtYWtlRmlsdGVycyIsIm1ha2VNb2RlbCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeUNhcnMiLCJsZW5ndGgiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJ1cmwiLCJtYWtlX3VybCIsInByaWNlX3VybCIsImJhc2Vfb25fbWFrZV91cmwiLCJtb2RlbF91cmwiLCJtYWtlX21vZGVsX3VybCIsImZpbHRlciIsImJhc2VfbWFrZSIsIm1ha21vZCIsIlByb21pc2UiLCJhbGwiLCJiYXNlTWFrZSIsInByb3BzIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZB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YyxJQUZSO0FBR0xiLFlBQU0sRUFBRUEsTUFBTSxDQUFDYSxJQUhWO0FBSUxnQixpQkFBVyxFQUFFbUIsUUFBUSxDQUFDbkMsSUFKakI7QUFLTGlCLGVBQVMsRUFBRUEsU0FBUyxDQUFDakIsSUFMaEI7QUFNTFIsWUFBTSxFQUFFQSxNQUFNLENBQUNRO0FBTlY7QUFERixHQUFQO0FBVUQ7QUFFY2Msd0VBQWY7QUFFQSxNQUFNeEMsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJOztDQUE3QjtBQUlBLE1BQU1DLElBQUksR0FBR0Ysd0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBeEIsQzs7Ozs7Ozs7Ozs7O0FDdElBO0FBQUE7QUFBTyxNQUFNSixXQUFXLEdBQUlULEtBQUQsSUFBVztBQUNwQyxRQUFNMEUsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUMvQ0MsU0FBSyxFQUFFLFVBRHdDO0FBRS9DQyxZQUFRLEVBQUU7QUFGcUMsR0FBL0IsQ0FBbEI7QUFLQSxTQUFPSixTQUFTLENBQUNLLE1BQVYsQ0FBaUIvRSxLQUFqQixFQUF3QlUsS0FBeEIsQ0FBOEIsQ0FBOUIsRUFBaUMsQ0FBQyxDQUFsQyxDQUFQO0FBQ0QsQ0FQTSxDOzs7Ozs7Ozs7OztBQ0FQLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZm9ybWF0UHJpY2VcIjtcclxuXHJcbmNvbnN0IGJtdyA9IFwiLi9hc3NldHMvYm13LmpwZ1wiO1xyXG5jb25zdCB0b3lvdGEgPSBcIi4vYXNzZXRzL3RveW90YS5qcGdcIjtcclxuY29uc3QgaG9uZGEgPSBcIi4vYXNzZXRzL2hvbmRhLmpwZ1wiO1xyXG5jb25zdCBsZXh1cyA9IFwiLi9hc3NldHMvbGV4dXMuanBnXCI7XHJcblxyXG5jb25zdCBBbGxDYXJzID0gKHtcclxuICBjYXI6IHtcclxuICAgIF9pZCxcclxuICAgIG5hbWUsXHJcbiAgICBtb2RlbCxcclxuICAgIHllYXIsXHJcbiAgICBsb2NhdGlvbixcclxuICAgIGNvbG9yLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBwaG90b191cmwsXHJcbiAgICBwcmljZSxcclxuICB9LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyBwdXNoIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwaG90byA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltZyA9IHBob3RvX3VybFxyXG4gICAgICA/IHBob3RvX3VybFxyXG4gICAgICA6IG5hbWUgPT09IFwiYm13XCJcclxuICAgICAgPyBibXdcclxuICAgICAgOiBuYW1lID09PSBcInRveW90YVwiXHJcbiAgICAgID8gdG95b3RhXHJcbiAgICAgIDogbmFtZSA9PT0gXCJob25kYVwiXHJcbiAgICAgID8gaG9uZGFcclxuICAgICAgOiBsZXh1cztcclxuICAgIHJldHVybiBpbWc7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmF2ID0gKGlkKSA9PiB7XHJcbiAgICBwdXNoKGAvY2FyLyR7aWR9YCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEdyaWQ+XHJcbiAgICAgICAgPEltYWdlIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5hdihfaWQpfT5cclxuICAgICAgICAgIDxpbWcgc3JjPXtwaG90b191cmwgfHwgYm13fSBhbHQ9J2NhcnMgcG9zdGVyJyAvPlxyXG4gICAgICAgIDwvSW1hZ2U+XHJcbiAgICAgICAgPENvbnRlbnQgY29sb3I9e2NvbG9yLnNwbGl0KFwiIFwiKVswXX0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdtYWtlJz5cclxuICAgICAgICAgICAgPHNwYW4+e25hbWUudG9VcHBlckNhc2UoKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtb2RlbCc+Q2FyIE1vZGVsOiB7bW9kZWx9PC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0neWVhcic+TWFudWZhY3R1cmluZyBZZWFyOiB7eWVhcn08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3ByaWNlJz5DYXIgUHJpY2U6IOKCpiB7Zm9ybWF0UHJpY2UocHJpY2UpfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbG9jYXRpb24nPkxvY2F0aW9uOiB7bG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdkZXNjcmlwdGlvbic+e2Ake2Rlc2NyaXB0aW9uLnNsaWNlKDAsIDUwKX0uLi5gfTwvcD5cclxuICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbGxDYXJzO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbmA7XHJcbmNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBnYXA6IDJlbTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG5gO1xyXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXY8eyBjb2xvcjogc3RyaW5nIH0+YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgcCxcclxuICBoMixcclxuICBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICAubWFrZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBzcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgYmFja2dyb3VuZDogJHsoeyBjb2xvciB9KSA9PlxyXG4gICAgICAgIGNvbG9yID09PSBcIndoaXRlXCIgPyBcIiNjY2NjY2NcIiA6IGNvbG9yID8gY29sb3IgOiBcIiNhYWFhYWFcIn07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbi8vICBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBgXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwicmVhY3QtZHJvcGRvd25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG4vLyBjb25zdCBtYWtlcyA9IFtcclxuLy8gICB7IHZhbHVlOiBcImJtd1wiLCBsYWJlbDogXCJCbXdcIiB9LFxyXG4vLyAgIHsgdmFsdWU6IFwidG95b3RhXCIsIGxhYmVsOiBcIlRveW90YVwiIH0sXHJcbi8vICAgeyB2YWx1ZTogXCJob25kYVwiLCBsYWJlbDogXCJIb25kYVwiIH0sXHJcbi8vICAgeyB2YWx1ZTogXCJsZXh1c1wiLCBsYWJlbDogXCJMZXh1c1wiIH0sXHJcbi8vIF07XHJcbi8vIGNvbnN0IG1vZGVscyA9IFtcclxuLy8gICB7IHZhbHVlOiBcIng1XCIsIGxhYmVsOiBcIlg1XCIgfSxcclxuLy8gICB7IHZhbHVlOiBcIng2XCIsIGxhYmVsOiBcIlg2XCIgfSxcclxuLy8gICB7IHZhbHVlOiBcIng3XCIsIGxhYmVsOiBcIlg3XCIgfSxcclxuLy8gICB7IHZhbHVlOiBcIng4XCIsIGxhYmVsOiBcIlg4XCIgfSxcclxuLy8gXTtcclxuY29uc3QgbG9jYXRpb25zID0gW1xyXG4gIHsgdmFsdWU6IFwibGFnb3NcIiwgbGFiZWw6IFwiTGFnb3NcIiB9LFxyXG4gIHsgdmFsdWU6IFwiYWJ1amFcIiwgbGFiZWw6IFwiQWJ1amFcIiB9LFxyXG4gIHsgdmFsdWU6IFwiYmF5ZWxzYVwiLCBsYWJlbDogXCJCYXllbHNhXCIgfSxcclxuICB7IHZhbHVlOiBcInBvcnQgaGFyY291cnRcIiwgbGFiZWw6IFwiUG9ydCBIYXJjb3VydFwiIH0sXHJcbl07XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKHsgc2V0U2VsZWN0LCBzZWxlY3QsIG1ha2VzLCBtb2RlbHMgfSkgPT4ge1xyXG4gIGNvbnN0IFttb2QsIHNldE1vZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCB7IHF1ZXJ5LCBwdXNoIH06IHsgcXVlcnk6IGFueTsgcHVzaDogYW55IH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwcmljZXMgPSBbXHJcbiAgICA1MDAwMDAsXHJcbiAgICAxMDAwMDAwLFxyXG4gICAgMTUwMDAwMCxcclxuICAgIDIwMDAwMDAsXHJcbiAgICAyNTAwMDAwLFxyXG4gICAgMzAwMDAwMCxcclxuICAgIDEwMDAwMDAwLFxyXG4gICAgMjAwMDAwMDAsXHJcbiAgICAzMDAwMDAwMCxcclxuICAgIDQwMDAwMDAwLFxyXG4gICAgNTAwMDAwMDAsXHJcbiAgXTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldE1vZGVscyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvbW9kZWxzLyR7c2VsZWN0Lm1ha2V9YFxyXG4gICAgICApO1xyXG4gICAgICBsZXQgbW9kcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHNldE1vZChtb2RzLmRhdGEpO1xyXG4gICAgfTtcclxuICAgIGdldE1vZGVscygpO1xyXG4gIH0sIFtzZWxlY3RdKTtcclxuXHJcbiAgbGV0IG5ld01vZGVscyA9IG1vZCA/IG1vZCA6IG1vZGVscztcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgcHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiBcIi9cIixcclxuICAgICAgcXVlcnk6IHNlbGVjdCxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIDxsYWJlbD5BbGwgQ2FyczwvbGFiZWw+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgYmFja2dyb3VuZD0nd2hpdGUnXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3Qoe1xyXG4gICAgICAgICAgICAgIG1ha2U6IFwiXCIsXHJcbiAgICAgICAgICAgICAgbW9kZWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgbG9jYXRpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgIG1heDogMCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFsbFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0xpc3Q+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIDxsYWJlbD5NYWtlczwvbGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbmFtZT0nbWFrZSdcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PlxyXG4gICAgICAgICAgICBzZXRTZWxlY3Qoe1xyXG4gICAgICAgICAgICAgIC4uLnNlbGVjdCxcclxuICAgICAgICAgICAgICBtYWtlOiB2YWx1ZSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtxdWVyeS5tYWtlfT57cXVlcnkubWFrZSB8fCBcIiBTZWxlY3QgYSBtYWtlXCJ9PC9vcHRpb24+XHJcbiAgICAgICAgICB7bWFrZXMubWFwKChtYWtlOiBhbnkpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e21ha2UubWFrZX0gdmFsdWU9e21ha2UubWFrZX0+XHJcbiAgICAgICAgICAgICAge21ha2UubWFrZX0gKHttYWtlLmNvdW50fSlcclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICA8bGFiZWw+TW9kZWxzPC9sYWJlbD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBuYW1lPSdtb2RlbCdcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PlxyXG4gICAgICAgICAgICBzZXRTZWxlY3Qoe1xyXG4gICAgICAgICAgICAgIC4uLnNlbGVjdCxcclxuICAgICAgICAgICAgICBtb2RlbDogdmFsdWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cXVlcnkubW9kZWx9PlxyXG4gICAgICAgICAgICB7cXVlcnkubW9kZWwgfHwgXCIgU2VsZWN0IGEgbW9kZWxcIn1cclxuICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAge25ld01vZGVscy5tYXAoKG1vZGVsOiBhbnkpID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e21vZGVsLm1vZGVsfSB2YWx1ZT17bW9kZWwubW9kZWx9PlxyXG4gICAgICAgICAgICAgIHttb2RlbC5tb2RlbH1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgICA8TGlzdD5cclxuICAgICAgICA8bGFiZWw+TWluaW11bSBQcmljZTwvbGFiZWw+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgbmFtZT0nbWluJ1xyXG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+XHJcbiAgICAgICAgICAgIHNldFNlbGVjdCh7XHJcbiAgICAgICAgICAgICAgLi4uc2VsZWN0LFxyXG4gICAgICAgICAgICAgIG1pbjogdmFsdWUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17cXVlcnkubWlufT57cXVlcnkubWluIHx8IFwiTWluaW11bSBQcmljZXNcIn08L29wdGlvbj5cclxuICAgICAgICAgIHtwcmljZXMubWFwKChwcmljZTogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwcmljZX0gdmFsdWU9e3ByaWNlfT5cclxuICAgICAgICAgICAgICB7cHJpY2V9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgIDwvTGlzdD5cclxuICAgICAgPExpc3Q+XHJcbiAgICAgICAgPGxhYmVsPk1heGltdW0gUHJpY2U8L2xhYmVsPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIG5hbWU9J21heCdcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PlxyXG4gICAgICAgICAgICBzZXRTZWxlY3Qoe1xyXG4gICAgICAgICAgICAgIC4uLnNlbGVjdCxcclxuICAgICAgICAgICAgICBtYXg6IHZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3F1ZXJ5Lm1heH0+e3F1ZXJ5Lm1heCB8fCBcIk1heGltdW0gUHJpY2VzXCJ9PC9vcHRpb24+XHJcbiAgICAgICAgICB7cHJpY2VzLm1hcCgocHJpY2U6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17cHJpY2V9IHZhbHVlPXtwcmljZX0+XHJcbiAgICAgICAgICAgICAge3ByaWNlfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICA8L0xpc3Q+XHJcblxyXG4gICAgICA8QnV0dG9uIGJhY2tncm91bmQ9J3RlYWwnIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0+XHJcbiAgICAgICAgU2VhcmNoIEZvciBDYXJcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbi8qIHBvc2l0aW9uOiBzdGlja3k7XHJcbnRvcDogMDsgKi9cclxuYDtcclxuY29uc3QgTGlzdCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFNlbGVjdCA9IHN0eWxlZC5zZWxlY3RgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuYDtcclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbjx7IGJhY2tncm91bmQ6IHN0cmluZyB9PmBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6ICR7KHsgYmFja2dyb3VuZCB9KSA9PiAoYmFja2dyb3VuZCA/IFwiMXB4IHNvbGlkICNjY2NjY2NcIiA6IFwibm9uZVwiKX07XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAwLjdlbSAxLjVlbTtcclxuICBiYWNrZ3JvdW5kOiAkeyh7IGJhY2tncm91bmQgfSkgPT4gKGJhY2tncm91bmQgPyBiYWNrZ3JvdW5kIDogXCJ0ZWFsXCIpfTtcclxuICBjb2xvcjogJHsoeyBiYWNrZ3JvdW5kIH0pID0+IChiYWNrZ3JvdW5kID8gXCIjMzMzMzMzXCIgOiBcIndoaXRlXCIpfTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG4vLyBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBBbGxDYXJzIGZyb20gXCIuLi9jb21wb25lbnRzL0FsbENhcnMvQWxsQ2Fyc1wiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBDYXJJbnRlcmZhY2Uge1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBtb2RlbDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgcHJpY2U6IHN0cmluZztcclxuICBkaXN0YW5jZTogc3RyaW5nO1xyXG4gIGZ1ZWxfdHlwZTogc3RyaW5nO1xyXG4gIHBob3RvX3VybDogc3RyaW5nO1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgeWVhcjogc3RyaW5nO1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBTZWxlY3RQcm9wcyB7XHJcbiAgbWFrZTogc3RyaW5nO1xyXG4gIG1vZGVsOiBzdHJpbmc7XHJcbiAgbG9jYXRpb246IHN0cmluZztcclxuICBtaW46IG51bWJlcjtcclxuICBtYXg6IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gSW5kZXhQYWdlKHtcclxuICBjYXJzLFxyXG4gIG1ha2VzLFxyXG4gIG1vZGVscyxcclxuICBtYWtlRmlsdGVycyxcclxuICBtYWtlTW9kZWwsXHJcbiAgcHJpY2VzLFxyXG59OiB7XHJcbiAgY2Fycz86IENhckludGVyZmFjZVtdO1xyXG4gIG1ha2VzPzogYW55W107XHJcbiAgcHJpY2VzPzogYW55W107XHJcbiAgbW9kZWxzPzogYW55W107XHJcbiAgbWFrZUZpbHRlcnM/OiBhbnlbXTtcclxuICBtYWtlTW9kZWw/OiBhbnlbXTtcclxufSkge1xyXG4gIGNvbnN0IFtzZWxlY3QsIHNldFNlbGVjdF0gPSB1c2VTdGF0ZTxTZWxlY3RQcm9wcz4oe1xyXG4gICAgbWFrZTogXCJcIixcclxuICAgIG1vZGVsOiBcIlwiLFxyXG4gICAgbG9jYXRpb246IFwiXCIsXHJcbiAgICBtaW46IDAsXHJcbiAgICBtYXg6IDAsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHsgcHJpY2VzIH0pO1xyXG5cclxuICBsZXQgcXVlcnlDYXJzID1cclxuICAgIG1ha2VNb2RlbC5sZW5ndGggPiAwXHJcbiAgICAgID8gbWFrZU1vZGVsXHJcbiAgICAgIDogbWFrZUZpbHRlcnMubGVuZ3RoID4gMFxyXG4gICAgICA/IG1ha2VGaWx0ZXJzXHJcbiAgICAgIDogcHJpY2VzLmxlbmd0aCA+IDBcclxuICAgICAgPyBwcmljZXNcclxuICAgICAgOiBjYXJzO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyh7IGNhcnMsIG1ha2VzLCBtb2RlbHMsIG1ha2VGaWx0ZXJzLCBtYWtlTW9kZWwsIHByaWNlcyB9KTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2coY2Fycyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NpZGViYXInPlxyXG4gICAgICAgICAgICA8U2lkZWJhclxyXG4gICAgICAgICAgICAgIHNldFNlbGVjdD17c2V0U2VsZWN0fVxyXG4gICAgICAgICAgICAgIHNlbGVjdD17c2VsZWN0fVxyXG4gICAgICAgICAgICAgIG1ha2VzPXttYWtlc31cclxuICAgICAgICAgICAgICBtb2RlbHM9e21vZGVsc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjb3VudCc+e3F1ZXJ5Q2Fycy5sZW5ndGh9IENhcnMgRm91bmQhISE8L3A+XHJcbiAgICAgICAgICAgIHtxdWVyeUNhcnMubWFwKChjYXI6IENhckludGVyZmFjZSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxBbGxDYXJzIGtleT17Y2FyLl9pZH0gY2FyPXtjYXJ9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcbiAgbGV0IG1ha2UgPSBjdHgucXVlcnkubWFrZSA/IGN0eC5xdWVyeS5tYWtlIDogbnVsbDtcclxuICBsZXQgbW9kID0gY3R4LnF1ZXJ5Lm1vZGVsID8gY3R4LnF1ZXJ5Lm1vZGVsIDogbnVsbDtcclxuICBsZXQgbWluID0gY3R4LnF1ZXJ5Lm1pbiA/IGN0eC5xdWVyeS5taW4gOiBudWxsO1xyXG4gIGxldCBtYXggPSBjdHgucXVlcnkubWF4ID8gY3R4LnF1ZXJ5Lm1heCA6IG51bGw7XHJcbiAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL2NhcnNcIjtcclxuICBjb25zdCBtYWtlX3VybCA9IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL21ha2VzYDtcclxuICBjb25zdCBwcmljZV91cmwgPSBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92MS9wcmljZXM/bWluPSR7bWlufSZtYXg9JHttYXh9YDtcclxuICBjb25zdCBiYXNlX29uX21ha2VfdXJsID0gYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdjEvY2Fycy9tYWtlLyR7bWFrZX1gO1xyXG4gIGNvbnN0IG1vZGVsX3VybCA9IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL21vZGVscy8ke21ha2V9YDtcclxuICBjb25zdCBtYWtlX21vZGVsX3VybCA9IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3YxL2NhcnMvbW9kZWwvbWFrZT9tYWtlPSR7bWFrZX0mbW9kZWw9JHttb2R9YDtcclxuICBjb25zdCBbcmVzLCBmaWx0ZXIsIG1vZGVsLCBiYXNlX21ha2UsIG1ha21vZCwgcHJpY2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgZmV0Y2godXJsKSxcclxuICAgIGZldGNoKG1ha2VfdXJsKSxcclxuICAgIGZldGNoKG1vZGVsX3VybCksXHJcbiAgICBmZXRjaChiYXNlX29uX21ha2VfdXJsKSxcclxuICAgIGZldGNoKG1ha2VfbW9kZWxfdXJsKSxcclxuICAgIGZldGNoKHByaWNlX3VybCksXHJcbiAgXSk7XHJcbiAgY29uc3QgY2FycyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc3QgbWFrZXMgPSBhd2FpdCBmaWx0ZXIuanNvbigpO1xyXG4gIGNvbnN0IHByaWNlcyA9IGF3YWl0IHByaWNlLmpzb24oKTtcclxuICBjb25zdCBtb2RlbHMgPSBhd2FpdCBtb2RlbC5qc29uKCk7XHJcbiAgY29uc3QgYmFzZU1ha2UgPSBhd2FpdCBiYXNlX21ha2UuanNvbigpO1xyXG4gIGNvbnN0IG1ha2VNb2RlbCA9IGF3YWl0IG1ha21vZC5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjYXJzOiBjYXJzLmRhdGEsXHJcbiAgICAgIG1ha2VzOiBtYWtlcy5kYXRhLFxyXG4gICAgICBtb2RlbHM6IG1vZGVscy5kYXRhLFxyXG4gICAgICBtYWtlRmlsdGVyczogYmFzZU1ha2UuZGF0YSxcclxuICAgICAgbWFrZU1vZGVsOiBtYWtlTW9kZWwuZGF0YSxcclxuICAgICAgcHJpY2VzOiBwcmljZXMuZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAwJSAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJlbSk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcclxuICBnYXA6IDJlbTtcclxuXHJcbiAgLnNpZGViYXIge1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAyMHZoO1xyXG4gIH1cclxuXHJcbiAgLmNvdW50IHtcclxuICAgIHBhZGRpbmc6IDFlbSAwO1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIH1cclxuYDtcclxuIiwiZXhwb3J0IGNvbnN0IGZvcm1hdFByaWNlID0gKHByaWNlKSA9PiB7XHJcbiAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KFwiZW4tVVNcIiwge1xyXG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChwcmljZSkuc2xpY2UoMSwgLTMpO1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9