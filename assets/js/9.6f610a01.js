(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{475:function(t,e,a){},520:function(t,e,a){"use strict";a(475)},554:function(t,e,a){"use strict";a.r(e);a(93),a(94),a(145),a(517);var i=a(518),n={name:"HjDragSort",components:{vuedraggable:a.n(i).a},model:{prop:"value",event:"change"},props:{value:{type:Array,default:function(){return[]}},canDrag:{type:Boolean,default:function(){return!0}},opration:{type:Boolean,default:!1},beforeDelete:{type:Function,default:function(){return!0}}},data:function(){return{oprationOptions:[{id:1,name:"上移",type:"up",icon:"icon iconfont iconchuangjianbianji-xiangshang"},{id:2,name:"下移",type:"down",icon:"icon iconfont iconchuangjianbianji-xiangxia"},{id:4,name:"删除",type:"delete",icon:"icon iconfont iconchuangjianbianji-shanchu"}],checkedItem:{},checkedIndex:-1,dataList:[],valueLength:0,clickFlag:!0}},watch:{value:{deep:!0,handler:function(t){this.dataList=t}}},mounted:function(){this.opration&&this.dispatchEvent()},created:function(){this.dataList=JSON.parse(JSON.stringify(this.value)),this.valueLength=this.dataList.length},methods:{dispatchEvent:function(t){var e=this,a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0),document.dispatchEvent(a);document.addEventListener("click",(function(t){e.getParentClass(t.target)||(e.checkedItem={},e.checkedIndex=-1)}))},getParentClass:function(t){return"app"!==t.id&&(!(!t.className||"string"!=typeof t.className||!t.className.includes("drag-sort-mask"))||!!t.parentNode&&this.getParentClass(t.parentNode))},getDrag:function(t){var e=this;if(this.$emit("change",this.dataList),this.$emit("dataChange","order",t),this.$emit("drag-change",this.dataList),this.checkedIndex>=0&&(t.moved.oldIndex===this.checkedIndex||t.moved.newIndex===this.checkedIndex)){for(var a,i,n=0;n<this.dataList.length;n++)if(this.checkedItem.ngUuid===this.dataList[n].ngUuid){a=this.dataList[n],i=n;break}setTimeout((function(){e.checkItem(a,i)}),10)}},checkItem:function(t,e){this.checkedItem=t,this.checkedIndex=e,this.$emit("on-select",t,e)},optionClick:function(t,e,a){var i=this;this.clickFlag=!1;var n=0;switch(t.id){case 1:0!==a&&(this.dataList.splice(a,1),this.dataList.splice(a-1,0,e),setTimeout((function(){i.clickFlag=!0,i.checkItem(e,a-1)}),10));break;case 2:a!==this.dataList.length-1&&(this.dataList.splice(a,1),this.dataList.splice(a+1,0,e),setTimeout((function(){i.clickFlag=!0,i.checkItem(e,a+1)}),10));break;case 3:this.dataList.splice(a,0,e),setTimeout((function(){i.clickFlag=!0,i.checkItem(e,a)}),10);break;case 4:this.beforeDelete(e,a)&&(this.dataList.splice(a,1),this.dataList.length===a?n=a-1:this.dataList.length>a&&(n=a),n>=0?setTimeout((function(){i.clickFlag=!0,i.checkItem(i.dataList[n],n)}),0):setTimeout((function(){i.clickFlag=!0,i.checkItem({},n)}),0));break;default:this.$message("操作错误","error")}this.$emit("change",this.dataList),this.$emit("dataChange",t.type,e,a)},mouseover:function(t,e){this.$set(t,"hover",!0),this.$emit("dataChange","mouseover",t,e,this.dataList)},mouseleave:function(t,e){this.$set(t,"hover",!1),this.$emit("dataChange","mouseleave",t,e,this.dataList)}}},s=(a(520),a(2)),c=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vuedraggable",{staticClass:"drag-sort-wrapper",attrs:{tag:"ul",sort:t.canDrag},on:{change:t.getDrag},model:{value:t.dataList,callback:function(e){t.dataList=e},expression:"dataList"}},[a("transition-group",t._l(t.dataList,(function(e,i){return a("li",{key:"transition"+i,staticClass:"drag-sort-item",class:{"drag-sort-item-checked":t.checkedIndex===i,"drag-sort-item-no-opration":!t.opration},on:{click:function(a){return t.checkItem(e,i)},mouseover:function(a){return t.mouseover(e,i)},mouseleave:function(a){return t.mouseleave(e,i)}}},[t.opration?a("ul",{directives:[{name:"show",rawName:"v-show",value:t.checkedIndex===i,expression:"checkedIndex === index"}],staticClass:"drag-sort-opration"},t._l(t.oprationOptions,(function(n,s){return a("li",{key:s,staticClass:"drag-sort-opration-li",attrs:{title:n.name},on:{click:function(a){return t.optionClick(n,e,i)}}},[a("span",{class:n.icon})])})),0):t._e(),t._v(" "),t.opration?a("div",{directives:[{name:"show",rawName:"v-show",value:t.checkedIndex===i,expression:"checkedIndex === index"}],staticClass:"drag-sort-opration-move drag-sort-mask"},[a("div",{staticClass:"drag-sort-opration-li"},[a("span",{staticClass:"icon iconfont iconyidong"})])]):t._e(),t._v(" "),t.opration?a("div",{staticClass:"drag-sort-mask"}):t._e(),t._v(" "),t._t("default",null,{data:t.dataList[i],index:i})],2)})),0)],1)}),[],!1,null,"34703d4e",null);e.default=c.exports}}]);