(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{449:function(t,e,n){"use strict";var i=n(3),a=n(134).trim;i({target:"String",proto:!0,forced:n(452)("trim")},{trim:function(){return a(this)}})},452:function(t,e,n){var i=n(6),a=n(135);t.exports=function(t){return i((function(){return!!a[t]()||"​᠎"!="​᠎"[t]()||a[t].name!==t}))}},479:function(t,e,n){},524:function(t,e,n){"use strict";n(479)},559:function(t,e,n){"use strict";n.r(e);var i=n(45),a=n(89),r=(n(240),n(449),n(93),n(63),n(33),n(97),n(94),new(function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(i.a)(this,t),this.status=e,this.options=n}return Object(a.a)(t,[{key:"validator",value:function(){var t=!0;if(this.status&&(t=this.options.every((function(t){var e;return!(null===(e=t.path)||void 0===e||!e.trim())}))),!t)throw new Error("options每一项中必须包含 path 属性");return t}}]),t}())),u=["card","underline"],o={name:"HjSwitchTable",props:{type:{type:String,default:"card",validator:function(t){return u.includes(t)}},keepStatus:{type:Boolean,default:!1,validator:function(t){return r.status=t,!0}},options:{type:Array,default:function(){return[{key:1,title:"个人文章"},{key:2,title:"企业文章"}]},validator:function(t){return r.options=t,r.validator()}},defaultKey:{type:[Number,String],default:function(){return 0}},emitType:{type:String,default:function(){return"key"}},isWatchRoute:{type:Boolean,default:!0}},data:function(){return{setKey:this.defaultKey,activeClassName:""}},computed:{availableOptions:function(){var t=this;return this.options.filter((function(e){return!e.role||t.$tool.hasRole(e.role)}))},currentKey:{set:function(t){this.setKey=t},get:function(){return this.setKey||this.availableOptions[0].key}}},watch:{defaultKey:function(t){t&&(this.setKey=t)},$route:function(t){this.isWatchRoute&&this.handleRouteChange()}},mounted:function(){this.keepStatus&&this.initData(),this.activeClassName="".concat(this.type).concat("-active-item")},methods:{handleChangeKey:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e||t.key!==this.currentKey){if(this.currentKey=t.key,this.keepStatus&&this.$route.fullPath!==t.path){var n=t.path;this.$route.query.guideToOpenFlag&&(n=n+"&guideToOpenFlag="+this.$route.query.guideToOpenFlag),this.$route.fullPath!==n&&this.$router.push(n)}"origin"!==this.emitType?this.$emit("switchTableChange",t.key):this.$emit("switchTableChange",t)}},initData:function(){var t=this.$route.fullPath,e=this.availableOptions.filter((function(e){return t.includes(e.path)}))[0];e||(e=this.availableOptions[0]),this.handleChangeKey(e,!0)},handleRouteChange:function(){var t=this.$route.fullPath;console.log(t);var e=this.availableOptions.filter((function(e){return t.includes(e.path)}))[0];e&&this.handleChangeKey(e,!0)}}},s=(n(524),n(2)),l=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"switch-table-component"},t._l(t.availableOptions,(function(e){var i;return n("div",{key:e.key,on:{click:function(n){return t.handleChangeKey(e)}}},[n("span",{class:["switch-item",(i={},i[t.activeClassName]=t.currentKey===e.key,i)]},[t._v(t._s(e.title))])])})),0)}),[],!1,null,"066a7ea9",null);e.default=l.exports}}]);