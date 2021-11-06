exports.ids = [5];
exports.modules = {

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("bad8e090", content, true, context)
};

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/image 2.6652531.png";

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Rectangle 12.1607193.png";

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.banner_box{\n  width:44%;\n  margin:0 auto\n}\n.banner_image_box{\n  margin-bottom:50px\n}\n.banner_text{\n  font-family:New York Extra Large;\n  font-weight:700;\n  font-size:54px;\n  line-height:100%\n}\n.banner_text,.banner_text_p{\n  margin-bottom:50px;\n  font-style:normal;\n  text-align:center;\n  color:#000\n}\n.banner_text_p{\n  font-family:SF Mono;\n  font-weight:400;\n  font-size:20px;\n  line-height:170%\n}\n.container{\n  width:44%;\n  margin:0 auto\n}\n.post_box{\n  border-top:2px solid #000;\n  margin-left:100px;\n  margin-right:100px;\n  padding-bottom:100px\n}\n.all_articles{\n  margin-top:50px;\n  margin-bottom:50px;\n  font-family:New York Extra Large;\n  font-weight:700;\n  font-size:44px;\n  line-height:53px\n}\n.all_articles,.post_title{\n  font-style:normal;\n  text-align:center;\n  color:#000\n}\n.post_title{\n  font-family:SF Pro Display;\n  font-weight:500;\n  font-size:22px;\n  line-height:120%;\n  text-transform:capitalize\n}\n@media screen and (max-width:540px){\n.banner_box{\n    width:100%\n}\n.banner_text{\n    font-family:New York Extra Large;\n    font-weight:700;\n    font-size:36px;\n    line-height:43px\n}\n.banner_text,.banner_text_p{\n    margin-bottom:30px;\n    font-style:normal;\n    text-align:center;\n    color:#000\n}\n.banner_text_p{\n    font-family:SF Mono;\n    font-weight:400;\n    font-size:16px;\n    line-height:170%\n}\n.all_articles{\n    font-family:New York Extra Large;\n    font-weight:700;\n    font-size:32px;\n    line-height:38px\n}\n.all_articles,.post_title{\n    font-style:normal;\n    text-align:center;\n    color:#000\n}\n.post_title{\n    font-family:SF Pro Display;\n    font-weight:500;\n    font-size:22px;\n    line-height:120%\n}\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=846a9d8a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home_page"},[_vm._ssrNode("<div class=\"banner_box\"><div class=\"banner_image_box\"><img"+(_vm._ssrAttr("src",__webpack_require__(48)))+" alt class=\"banner_image\"></div> <div class=\"banner_text_box\"><h1 class=\"banner_text\">\n        A few words about this blog platform, Ghost, and how this site was made\n      </h1> <p class=\"banner_text_p\">Why Ghost (&amp; Figma) instead of Medium, WordPress or other options?</p></div></div> "),_vm._ssrNode("<div class=\"container\" style=\"margin: 0 auto\">","</div>",[_vm._ssrNode("<div class=\"post_box text-center\">","</div>",[_vm._ssrNode("<h3 class=\"all_articles\">All Articles</h3> "),_vm._ssrNode("<div class=\"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8\">","</div>",_vm._l((_vm.posts),function(post,index){return _vm._ssrNode("<div class=\"text-center\">","</div>",[_c('NuxtLink',{attrs:{"to":("/post/" + (post.id))}},[_c('img',{staticClass:"hover:opacity-75 transition ease-in-out duration-150",attrs:{"src":__webpack_require__(49),"alt":"parasite"}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-2\">","</div>",[_c('NuxtLink',{staticClass:"post_title hover:text-gray-300 text-center",attrs:{"to":("/post/" + (post.id))}},[_vm._v(_vm._s(post.title))])],1)],2)}),0)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=846a9d8a&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  async asyncData() {
    const {
      data
    } = await external_axios_default.a.get('https://jsonplaceholder.typicode.com/posts');
    return {
      posts: data
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7eec096a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map