webpackJsonp([13],{"3qlZ":function(t,e,a){"use strict";var n=a("mvHQ"),s=a.n(n);e.a={name:"demo",components:{},data:function(){return{disabled:!1,value:"m"}},methods:{setValue:function(){this.value="f"==this.value?"m":"f"},choose:function(t){console.log("返回数据----\x3e",s()(t))}},mounted:function(){}}},UW2Z:function(t,e,a){"use strict";function n(t){a("hfmA")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("3qlZ"),i=a("dl8g"),l=a("VU/8"),o=n,c=l(s.a,i.a,!1,o,"data-v-1a887bd3",null);e.default=c.exports},dl8g:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("n22-page",[a("mt-header",{attrs:{slot:"header",title:"性别",fixed:!0},slot:"header"},[a("mt-button",{attrs:{slot:"left",icon:"back"},nativeOn:{click:function(e){return t.back(e)}},slot:"left"})],1),t._v(" "),a("div",{staticClass:"show_code_main",attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"first"},[a("n22-field",{attrs:{label:"性别",need:"*"}},[a("n22-switch",{attrs:{slot:"choose",disabled:t.disabled,value:t.value},on:{"update:value":function(e){t.value=e}},slot:"choose"})],1),t._v(" "),a("br"),t._v(" "),a("div",[t._v("\n        "+t._s(t.value)),a("br"),t._v("\n        是否禁用："+t._s(t.disabled)+"\n      ")]),t._v(" "),a("div",{staticClass:"demo_page"},[a("br"),t._v(" "),a("br"),t._v(" "),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){t.setValue()}}},[t._v("塞入默认值")]),t._v(" "),a("br"),t._v(" "),a("mt-button",{attrs:{type:"primary",size:"large"},on:{click:function(e){t.disabled=!t.disabled}}},[t._v("禁用/解禁")])],1)],1),t._v(" "),a("div",{staticClass:"secend"},[a("n22-highlight",{attrs:{lang:"html"}},[t._v("\n      <n22-switch :disabled = 'disabled'\n                     :value.sync=\"value\">\n</n22-switch>\n      ")]),t._v(" "),a("br"),t._v(" "),a("n22-highlight",{attrs:{lang:"javascript"}},[t._v("\n           // 塞入默认值\nsetValue () {\n  this.value = this.value == 'f' ? 'm' : 'f'\n},\n      ")])],1)])],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},hfmA:function(t,e,a){var n=a("mDRL");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("b8218a0e",n,!0,{})},mDRL:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".demo_page[data-v-1a887bd3]{padding:10px;font-size:1.4rem}",""])}});