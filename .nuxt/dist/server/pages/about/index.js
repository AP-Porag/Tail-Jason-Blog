exports.ids = [3];
exports.modules = {

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0e731732", content, true, context)
};

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about-hero.685ac8c.png";

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38d33c68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38d33c68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38d33c68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38d33c68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38d33c68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(40);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(41);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.about-page[data-v-38d33c68]{\n  padding-top:70px;\n  box-sizing:border-box;\n  width:100%;\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position:center -250px;\n  background-repeat:no-repeat;\n  position:relative;\n  top:0;\n  left:0;\n  z-index:2\n}\n.content[data-v-38d33c68]{\n  color:#494949;\n  padding:20px 0 70px;\n  width:800px;\n  margin:0 auto;\n  text-align:center\n}\n.content h2[data-v-38d33c68]{\n  height:233px;\n  line-height:233px;\n  font-family:\"Shrikhand\",cursive;\n  font-size:10em;\n  font-weight:400;\n  text-transform:capitalize\n}\n.content h2[data-v-38d33c68],.content img[data-v-38d33c68]{\n  position:relative;\n  top:0;\n  left:0\n}\n.content img[data-v-38d33c68]{\n  margin-top:-140px;\n  width:710px\n}\n.content h3[data-v-38d33c68]{\n  font-size:4em;\n  margin-top:40px;\n  margin-bottom:20px;\n  font-weight:700;\n  text-transform:capitalize\n}\n@media (min-width:320px) and (max-width:575px){\n.content[data-v-38d33c68]{\n    width:auto\n}\n.content h2[data-v-38d33c68]{\n    font-size:5em\n}\n.content h3[data-v-38d33c68]{\n    font-size:1em\n}\n.content .image[data-v-38d33c68]{\n    width:335px;\n    height:auto\n}\n}\n@media (min-width:576px) and (max-width:767px){\n.content[data-v-38d33c68]{\n    width:auto\n}\n.content h2[data-v-38d33c68]{\n    font-size:7em\n}\n.content h3[data-v-38d33c68]{\n    font-size:2em\n}\n.content .image[data-v-38d33c68]{\n    width:610px;\n    height:auto\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/about-bg.12b085a.svg";

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=template&id=38d33c68&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about-page"},[_vm._ssrNode("<div class=\"container mx-auto px-4\" data-v-38d33c68><div data-v-38d33c68><div class=\"image-box\" data-v-38d33c68><div class=\"content\" data-v-38d33c68><h2 data-v-38d33c68>Hi there,</h2> <img"+(_vm._ssrAttr("src",__webpack_require__(37)))+" class=\"image\" data-v-38d33c68> <h3 data-v-38d33c68>Let's talk about this app</h3></div></div> <div class=\"info-box\" data-v-38d33c68><div class=\"info bg-white shadow-sm rounded-sm px-4 py-4 mb-6\" data-v-38d33c68><h1 class=\"section-header text-xl text-blue-500 mb-4\" data-v-38d33c68>Project Name</h1> <p data-v-38d33c68><a href=\"https://tail-blog.asrafporag.me/\" data-v-38d33c68>Tail-Jason-Blog</a></p></div> <div class=\"info info bg-white shadow-sm rounded-sm px-4 py-4 mb-6\" data-v-38d33c68><h1 class=\"section-header text-xl text-blue-500 mb-4\" data-v-38d33c68>Project Description</h1> <p data-v-38d33c68>The Tail Blog is a application for blogging.This website design with Tailwind CSS.I used Nuxt Js for frontend framework.All element are design by Tailwind CSS.</p></div> <div class=\"pt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pb-16 info bg-white shadow-sm rounded-sm px-4 py-4\" data-v-38d33c68><div class=\"item\" data-v-38d33c68><h1 class=\"section-header text-xl text-blue-500 mb-4\" data-v-38d33c68>Framework</h1> <div data-v-38d33c68><ul data-v-38d33c68><li data-v-38d33c68><p data-v-38d33c68>Nuxt js (Frontend)</p></li></ul></div></div> <div class=\"item\" data-v-38d33c68><h1 class=\"section-header text-xl text-blue-500 mb-4\" data-v-38d33c68>Document Object Model (DOM)</h1> <div data-v-38d33c68><ul data-v-38d33c68><li data-v-38d33c68><p data-v-38d33c68>HTML5</p></li> <li data-v-38d33c68><p data-v-38d33c68>CSS3</p></li> <li data-v-38d33c68><p data-v-38d33c68>Javascript</p></li> <li data-v-38d33c68><p data-v-38d33c68>Tailwind CSS</p></li></ul></div></div> <div class=\"item\" data-v-38d33c68><h1 class=\"section-header text-xl text-blue-500 mb-4\" data-v-38d33c68>Hosting</h1> <div data-v-38d33c68><ul data-v-38d33c68><li data-v-38d33c68><p data-v-38d33c68>Cpanel</p></li></ul></div></div> <div class=\"item\" data-v-38d33c68><h1 class=\"section-header text-xl text-blue-500 mb-4\" data-v-38d33c68>API</h1> <div data-v-38d33c68><ul data-v-38d33c68><li data-v-38d33c68><p data-v-38d33c68>JSONPlaceholder</p></li></ul></div></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=template&id=38d33c68&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  name: "index"
});
// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "38d33c68",
  "71ecaaee"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map