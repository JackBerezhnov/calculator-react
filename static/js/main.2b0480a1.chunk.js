(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Jack_Desktop_ReactProjects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_Calculator_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(14),_Calculator_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_Calculator_css__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_result_Result__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),_buttonDisplay_ButtonDisplay__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__),Calculator=function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=Object(C_Users_Jack_Desktop_ReactProjects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),result=_useState2[0],setResult=_useState2[1];function onClick(_){console.log(_),"="===_?calculate():"C"===_?reset():"CE"===_?backspace():setResult(result+_)}function calculate(){var checkResult="";checkResult=result.includes("--")?result.replace("--","+"):result;try{setResult(eval(checkResult)||"")}catch(e){setResult("error")}}function reset(){setResult("")}function backspace(){setResult(result.slice(0,-1))}return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_result_Result__WEBPACK_IMPORTED_MODULE_3__.a,{result:result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_buttonDisplay_ButtonDisplay__WEBPACK_IMPORTED_MODULE_4__.a,{onClick:onClick})]})};__webpack_exports__.a=Calculator},function(_,e,t){"use strict";t(15);var c=t(0);e.a=function(_){return Object(c.jsx)("div",{className:"result",children:Object(c.jsx)("input",{value:_.result,placeholder:"0"})})}},,function(_,e,t){"use strict";t(17),t(18);var c=t(0),n=function(_){return Object(c.jsx)("button",{className:"button",name:_.name,onClick:function(e){return _.onClick(e.target.name)},children:_.name})};e.a=function(_){return Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)(n,{name:"C",onClick:_.onClick}),Object(c.jsx)(n,{name:"CE",onClick:_.onClick}),Object(c.jsx)(n,{name:"/",onClick:_.onClick}),Object(c.jsx)(n,{name:"*",onClick:_.onClick}),Object(c.jsx)(n,{name:"1",onClick:_.onClick}),Object(c.jsx)(n,{name:"2",onClick:_.onClick}),Object(c.jsx)(n,{name:"3",onClick:_.onClick}),Object(c.jsx)(n,{name:"+",onClick:_.onClick}),Object(c.jsx)(n,{name:"4",onClick:_.onClick}),Object(c.jsx)(n,{name:"5",onClick:_.onClick}),Object(c.jsx)(n,{name:"6",onClick:_.onClick}),Object(c.jsx)(n,{name:"-",onClick:_.onClick}),Object(c.jsx)(n,{name:"7",onClick:_.onClick}),Object(c.jsx)(n,{name:"8",onClick:_.onClick}),Object(c.jsx)(n,{name:"9",onClick:_.onClick}),Object(c.jsx)(n,{name:".",onClick:_.onClick}),Object(c.jsx)(n,{className:"btn-zero",name:"0",onClick:_.onClick}),Object(c.jsx)(n,{name:"=",onClick:_.onClick})]})}},,,,,function(_,e,t){},function(_,e,t){},function(_,e,t){},function(_,e,t){},,function(_,e,t){},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var c=t(1),n=t.n(c),a=t(3),s=t.n(a),l=(t(12),t(13),t(4)),r=t(0);var u=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(l.a,{})})},o=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(e){var t=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,s=e.getTTFB;t(_),c(_),n(_),a(_),s(_)}))};s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),o()}],[[19,1,2]]]);
//# sourceMappingURL=main.2b0480a1.chunk.js.map