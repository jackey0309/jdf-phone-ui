webpackJsonp([30],{"3evA":function(e,n,a){var t=a("DInH");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);a("rjj0")("61b343d8",t,!0,{})},DInH:function(e,n,a){n=e.exports=a("FZ+f")(!1),n.push([e.i,".demo_page_main[data-v-67058980]{text-align:center;width:100vw;max-width:500px}.demo_page_main .demo_main_header[data-v-67058980]{height:45px}",""])},VY7V:function(e,n,a){"use strict";function t(e){a("3evA")}Object.defineProperty(n,"__esModule",{value:!0});var l=a("fVdz"),m=a("ZF6X"),r=a("VU/8"),o=t,s=r(l.a,m.a,!1,o,"data-v-67058980",null);n.default=s.exports},ZF6X:function(e,n,a){"use strict";var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("n22-page",{staticClass:"demo_page_main",attrs:{"has-header":e.hasHeader},on:{scroll:e.scroll}},[a("mt-header",{style:{opacity:e.opacity},attrs:{slot:"header",fixed:!0,title:"组件列表"},slot:"header"}),e._v(" "),a("div",{staticClass:"demo_page",staticStyle:{"padding-top":"20px"},attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"demo_main_header"},[a("h2",[e._v("组件列表")]),e._v(" "),a("a",{staticClass:"gitDiv",attrs:{href:"https://github.com/jdfdcc/n22-phone-ui"}})]),e._v(" "),e._l(e.components,function(e,n){return a("mt-cell",{key:n,attrs:{title:n+1+"、"+e.name,to:e.url,"is-link":"",value:"点击查看"}})}),e._v(" "),a("div",{staticClass:"demo_main_header"},[a("h2",[e._v("公共方法utils")])]),e._v(" "),e._l(e.componentTwo,function(e,n){return a("mt-cell",{key:n+20,attrs:{title:n+1+"、"+e.name,to:e.url,"is-link":"",value:"点击查看"}})}),e._v(" "),a("div",{staticClass:"demo_main_header"},[a("h2",[e._v("demo页面设计")])]),e._v(" "),e._l(e.componentThree,function(e,n){return a("mt-cell",{key:n+30,attrs:{title:n+1+"、"+e.name,to:e.url,"is-link":"",value:"点击查看"}})}),e._v(" "),a("div",{staticStyle:{"font-size":"1.5rem",margin:"20px 0px",color:"gray"}},[e._v("\n      @请用chome的手机调试模式查看\n      "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/style-guide/"}},[e._v("开发指南")])])],2)],1)},l=[],m={render:t,staticRenderFns:l};n.a=m},fVdz:function(e,n,a){"use strict";n.a={name:"demo",components:{},data:function(){return{hasHeader:!1,opacity:0,components:[{name:"开发模板",url:{name:"n22Template"}},{name:"Field组件",url:{name:"n22Field"}},{name:"地址组件",url:{name:"n22Address"}},{name:"地图",url:{name:"n22Map"}},{name:"性别组件",url:{name:"n22Switch"}},{name:"日历组件",url:{name:"n22Calendar"}},{name:"输入组件",url:{name:"n22Input"}},{name:"缩放组件",url:{name:"n22Zoom"}},{name:"Tab组件",url:{name:"n22Tab"}},{name:"日期组件",url:{name:"n22DatePicker"}},{name:"自定义轮播图",url:{name:"n22Touch"}},{name:"语法高亮",url:{name:"n22Highlight"}},{name:"列表",url:{name:"n22List"}},{name:"视频",url:{name:"n22Video"}},{name:"签字",url:{name:"n22Sign"}},{name:"滑动列表",url:{name:"n22CellSwipe"}},{name:"select",url:{name:"n22Picker"}}],componentTwo:[{name:"公共方法",url:{name:"n22Utils"}},{name:"原生交互方法",url:{name:"n22Native"}},{name:"微信调用方法",url:{name:"n22WeChat"}},{name:"动画",url:{name:"n22Animate"}},{name:"欢迎页",url:{name:"n22SplashScreen"}},{name:"版本管理",url:{name:"n22Version"}},{name:"极光推送",url:{name:"n22JPush"}}],componentThree:[{name:"渲染组件",url:{name:"n22Render"}},{name:"搜索页面",url:{name:"n22Search"}},{name:"canvas动画",url:{name:"n22Canvas"}},{name:"植物大战僵尸",url:{name:"n22Zombi"}}]}},methods:{scroll:function(e){this.opacity=e.top/90},scrollTo:function(){var e=document.getElementsByClassName("scroll-content");console.log(e),console.log(e[0]),alert(e[0].scrollTo),e[0].scrollTop=100}},computed:{},mounted:function(){}}}});