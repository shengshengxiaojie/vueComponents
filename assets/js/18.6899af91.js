(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{132:function(t,e,n){"use strict";var a=n(82);n.n(a).a},133:function(t,e,n){"use strict";var a=n(83);n.n(a).a},134:function(t,e,n){"use strict";var a=n(84);n.n(a).a},169:function(t,e,n){"use strict";n.r(e);var a=n(94),i=n(95),s=n(96),c={components:{GNav:a.a,GNavItem:i.a,GSubNav:s.a},data:function(){return{selected:"home"}},methods:{onChange:function(t){console.log("点击监听",t)}}},r=n(1),o=Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("g-nav",{staticStyle:{width:"200px","margin-top":"100px"},attrs:{selected:t.selected,vertical:""},on:{"update:selected":[function(e){t.selected=e},t.onChange]}},[n("g-nav-item",{attrs:{name:"home"}},[n("a",{attrs:{href:"//www.baidu.com",target:"_blank"}},[t._v("首页")])]),t._v(" "),n("g-sub-nav",{attrs:{name:"about"}},[n("template",{slot:"title"},[t._v("关于")]),t._v(" "),n("g-nav-item",{attrs:{name:"culture"}},[t._v("企业文化")]),t._v(" "),n("g-nav-item",{attrs:{name:"developers"}},[t._v("开发团队")]),t._v(" "),n("g-sub-nav",{attrs:{name:"contacts"}},[n("template",{slot:"title"},[t._v("联系方式")]),t._v(" "),n("g-nav-item",{attrs:{name:"wechat"}},[t._v("微信")]),t._v(" "),n("g-nav-item",{attrs:{name:"qq"}},[t._v("QQ")]),t._v(" "),n("g-sub-nav",{attrs:{name:"phone"}},[n("template",{slot:"title"},[t._v("手机")]),t._v(" "),n("g-nav-item",{attrs:{name:"cb"}},[t._v("移动")]),t._v(" "),n("g-nav-item",{attrs:{name:"cu"}},[t._v("联通")]),t._v(" "),n("g-nav-item",{attrs:{name:"cn"}},[t._v("电信")])],2)],2)],2),t._v(" "),n("g-nav-item",{attrs:{name:"hire"}},[t._v("招聘")])],1)],1)},[],!1,null,null,null);e.default=o.exports},82:function(t,e,n){},83:function(t,e,n){},84:function(t,e,n){},94:function(t,e,n){"use strict";n(36),n(39);var a={name:"GNav",provide:function(){return{root:this,vertical:this.vertical}},props:{selected:{type:String,default:void 0},multiple:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1}},data:function(){return{items:[],namePath:[]}},mounted:function(){this.updateChildren(),this.listenToChildren()},updated:function(){this.updateChildren()},methods:{addItem:function(t){this.items.push(t)},updateChildren:function(){var t=this;this.items.forEach(function(e){t.selected===e.name?e.selected=!0:e.selected=!1})},listenToChildren:function(){var t=this;this.items.forEach(function(e){e.$on("update:selected",function(e){t.$emit("update:selected",e)})})}}},i=(n(132),n(1)),s=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"g-nav",class:{vertical:this.vertical}},[this._t("default")],2)},[],!1,null,"90991bf4",null);e.a=s.exports},95:function(t,e,n){"use strict";n(36);var a={name:"GONavItem",inject:["root","vertical"],props:{name:{type:String,required:!0}},data:function(){return{selected:!1}},created:function(){this.root.addItem(this)},methods:{onClick:function(){this.root.namePath=[],this.$parent.updateNamePath&&this.$parent.updateNamePath(),this.$emit("update:selected",this.name)}}},i=(n(133),n(1)),s=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"g-nav-item",class:{selected:this.selected,vertical:this.vertical},attrs:{"data-name":this.name},on:{click:this.onClick}},[this._t("default")],2)},[],!1,null,"2f2faa72",null);e.a=s.exports},96:function(t,e,n){"use strict";n(36);var a=n(117),i={components:{GIcon:n(61).a},directives:{ClickOutside:a.a},name:"GOSubNav",inject:["root","vertical"],props:{name:{type:String,required:!0}},data:function(){return{open:!1}},computed:{active:function(){return this.root.namePath.indexOf(this.name)>=0}},methods:{enter:function(t,e){var n=t.getBoundingClientRect().height;t.style.height=0,t.getBoundingClientRect(),t.style.height="".concat(n,"px"),t.addEventListener("transitionend",function(){e()})},afterEnter:function(t){t.style.height="auto"},leave:function(t,e){var n=t.getBoundingClientRect().height;t.style.height="".concat(n,"px"),t.getBoundingClientRect(),t.style.height=0,t.addEventListener("transitionend",function(){e()})},afterLeave:function(t){t.style.height="auto"},onClick:function(){this.open=!this.open},close:function(){this.open=!1},updateNamePath:function(){this.root.namePath.unshift(this.name),this.$parent.updateNamePath&&this.$parent.updateNamePath()}}},s=(n(134),n(1)),c=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.close,expression:"close"}],staticClass:"g-sub-nav",class:{active:t.active,vertical:t.vertical}},[n("span",{staticClass:"g-sub-nav-label",on:{click:t.onClick}},[t._t("title"),t._v(" "),n("span",{staticClass:"g-sub-nav-icon",class:{open:t.open,vertical:t.vertical}},[n("g-icon",{attrs:{name:"right"}})],1)],2),t._v(" "),t.vertical?[n("transition",{on:{enter:t.enter,leave:t.leave,"after-leave":t.afterLeave,"after-enter":t.afterEnter}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"g-sub-nav-popover",class:{vertical:t.vertical}},[t._t("default")],2)])]:[n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"g-sub-nav-popover"},[t._t("default")],2)]],2)},[],!1,null,"d5719272",null);e.a=c.exports}}]);