webpackHotUpdate("static\\development\\pages\\users.js",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BaseLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BaseLayout */ "./components/BaseLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Index = function Index(props) {
  return __jsx(_components_BaseLayout__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx("title", {
    className: "jsx-2495926694"
  }, "Users Title")), __jsx("h1", {
    className: "jsx-2495926694"
  }, "List User"), __jsx("ul", {
    className: "jsx-2495926694"
  }, props.users.map(function (user) {
    return __jsx("li", {
      key: user.id,
      className: "jsx-2495926694"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      as: "/user/".concat(user.id),
      href: "user?id=".concat(user.id)
    }, __jsx("a", {
      className: "jsx-2495926694"
    }, user.username)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2495926694"
  }, "a.jsx-2495926694{color:green;}a.jsx-2495926694:hover{color:#313131;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxCZWxhamFyXFxuZXh0anNcXHJvdXRpbmdcXHBhZ2VzXFx1c2Vycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmtCLEFBSVEsQUFHQSxZQUhDLEVBR0EiLCJmaWxlIjoiRDpcXEJlbGFqYXJcXG5leHRqc1xccm91dGluZ1xccGFnZXNcXHVzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQmFzZUxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9CYXNlTGF5b3V0XCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4gKCBcclxuICA8QmFzZUxheW91dD5cclxuICAgIDxIZWFkPiBcclxuICAgICAgPHRpdGxlPlVzZXJzIFRpdGxlPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICAgIDxoMT5MaXN0IFVzZXI8L2gxPlxyXG4gICAgPHVsPlxyXG4gICAgICB7cHJvcHMudXNlcnMubWFwKCAodXNlcikgPT4gKFxyXG4gICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgPExpbmsgYXM9e2AvdXNlci8ke3VzZXIuaWR9YH0gaHJlZj17YHVzZXI/aWQ9JHt1c2VyLmlkfWB9PlxyXG4gICAgICAgICAgICA8YT57dXNlci51c2VybmFtZX08L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSApfVxyXG4gICAgPC91bD5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6IGdyZWVuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICMzMTMxMzFcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICA8L0Jhc2VMYXlvdXQ+XHJcbilcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgcmV0dXJuIHt1c2VyczogZGF0YX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=D:\\\\Belajar\\\\nextjs\\\\routing\\\\pages\\\\users.js */"));
};

Index.getInitialProps = function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://jsonplaceholder.typicode.com/users'));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            users: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=users.js.b79390b449fec4e467d9.hot-update.js.map