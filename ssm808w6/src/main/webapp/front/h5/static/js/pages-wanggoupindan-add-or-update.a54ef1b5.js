(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wanggoupindan-add-or-update"],{"0f06":function(e,r,i){"use strict";i.r(r);var t=i("4fed"),n=i("92cc");for(var a in n)"default"!==a&&function(e){i.d(r,e,(function(){return n[e]}))}(a);i("eb10");var o,s=i("f0c5"),l=Object(s["a"])(n["default"],t["b"],t["c"],!1,null,"0a2ce888",null,!1,t["a"],o);r["default"]=l.exports},"2cdd":function(e,r,i){var t=i("24fb");r=t(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-0a2ce888]{padding:%?20?%}.content[data-v-0a2ce888]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-0a2ce888]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-0a2ce888]{width:%?180?%}.avator[data-v-0a2ce888]{width:%?150?%;height:%?60?%}.right-input[data-v-0a2ce888]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-0a2ce888]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-0a2ce888]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-0a2ce888]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-0a2ce888]{border:0}.cu-form-group uni-input[data-v-0a2ce888]{padding:0 %?30?%}.uni-input[data-v-0a2ce888]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-0a2ce888]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-0a2ce888]::after{line-height:%?88?%}.select .uni-input[data-v-0a2ce888]{line-height:%?88?%}.input .right-input[data-v-0a2ce888]{line-height:%?88?%}',""]),e.exports=r},"4fed":function(e,r,i){"use strict";var t,n=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("商品名称")]),i("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.shangpinmingcheng,placeholder:"商品名称"},model:{value:e.ruleForm.shangpinmingcheng,callback:function(r){e.$set(e.ruleForm,"shangpinmingcheng",r)},expression:"ruleForm.shangpinmingcheng"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(252, 252, 252, 1)",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(21, 20, 20, 1)",textAlign:"left"}},[e._v("商品类别")]),i("v-uni-picker",{attrs:{value:e.shangpinleibieIndex,range:e.shangpinleibieOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.shangpinleibieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(20, 19, 19, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.shangpinleibie?e.ruleForm.shangpinleibie:"请选择商品类别"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("品牌")]),i("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.pinpai,placeholder:"品牌"},model:{value:e.ruleForm.pinpai,callback:function(r){e.$set(e.ruleForm,"pinpai",r)},expression:"ruleForm.pinpai"}})],1),i("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.tupianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(23, 22, 22, 1)",textAlign:"left"}},[e._v("图片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.tupian?i("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.tupian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("原价")]),i("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.yuanjia,placeholder:"原价"},model:{value:e.ruleForm.yuanjia,callback:function(r){e.$set(e.ruleForm,"yuanjia",r)},expression:"ruleForm.yuanjia"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("拼单折后价")]),i("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.pindanzhehoujia,placeholder:"拼单折后价"},model:{value:e.ruleForm.pindanzhehoujia,callback:function(r){e.$set(e.ruleForm,"pindanzhehoujia",r)},expression:"ruleForm.pindanzhehoujia"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("学号")]),i("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.xuehao,placeholder:"学号"},model:{value:e.ruleForm.xuehao,callback:function(r){e.$set(e.ruleForm,"xuehao",r)},expression:"ruleForm.xuehao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("姓名")]),i("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(r){e.$set(e.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(41, 40, 40, 1)",textAlign:"left"}},[e._v("联系方式")]),i("v-uni-input",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(40, 38, 38, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.lianxifangshi,placeholder:"联系方式"},model:{value:e.ruleForm.lianxifangshi,callback:function(r){e.$set(e.ruleForm,"lianxifangshi",r)},expression:"ruleForm.lianxifangshi"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"",backgroundColor:"rgba(255, 255, 255, 0.56)",borderColor:"#ccc",margin:"",borderWidth:"0",borderStyle:"solid",height:"308rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(28, 27, 27, 1)",textAlign:"left"}},[e._v("商品介绍")]),i("v-uni-textarea",{style:{boxShadow:"0 0 16rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 22, 22, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"商品介绍"},model:{value:e.ruleForm.shangpinjieshao,callback:function(r){e.$set(e.ruleForm,"shangpinjieshao",r)},expression:"ruleForm.shangpinjieshao"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"40rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},a=[];i.d(r,"b",(function(){return n})),i.d(r,"c",(function(){return a})),i.d(r,"a",(function(){return t}))},"92cc":function(e,r,i){"use strict";i.r(r);var t=i("fd7d"),n=i.n(t);for(var a in t)"default"!==a&&function(e){i.d(r,e,(function(){return t[e]}))}(a);r["default"]=n.a},cb93:function(e,r,i){var t=i("2cdd");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var n=i("4f06").default;n("2388db89",t,!0,{sourceMap:!1,shadowMode:!1})},eb10:function(e,r,i){"use strict";var t=i("cb93"),n=i.n(t);n.a},fd7d:function(e,r,i){"use strict";var t=i("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,i("ac6a"),i("96cf");var n=t(i("3b8d")),a=t(i("e2b1")),o={data:function(){return{ruleForm:{shangpinmingcheng:"",shangpinleibie:"",pinpai:"",tupian:"",yuanjia:"",pindanzhehoujia:"",xuehao:"",xingming:"",lianxifangshi:"",shangpinjieshao:""},shangpinleibieOptions:[],shangpinleibieIndex:0,user:{},ro:{shangpinmingcheng:!1,shangpinleibie:!1,pinpai:!1,tupian:!1,yuanjia:!1,pindanzhehoujia:!1,xuehao:!1,xingming:!1,lianxifangshi:!1,shangpinjieshao:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var i,t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:return t=e.sent,this.user=t.data,e.next=7,this.$api.option("shangpinfenlei","shangpinleibie",{});case 7:if(t=e.sent,this.shangpinleibieOptions=t.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=17;break}return this.ruleForm.id=r.id,e.next=15,this.$api.info("wanggoupindan",this.ruleForm.id);case 15:t=e.sent,this.ruleForm=t.data;case 17:if(!r.cross){e.next=64;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 20:if((e.t1=e.t0()).done){e.next=64;break}if(a=e.t1.value,"shangpinmingcheng"!=a){e.next=26;break}return this.ruleForm.shangpinmingcheng=n[a],this.ro.shangpinmingcheng=!0,e.abrupt("continue",20);case 26:if("shangpinleibie"!=a){e.next=30;break}return this.ruleForm.shangpinleibie=n[a],this.ro.shangpinleibie=!0,e.abrupt("continue",20);case 30:if("pinpai"!=a){e.next=34;break}return this.ruleForm.pinpai=n[a],this.ro.pinpai=!0,e.abrupt("continue",20);case 34:if("tupian"!=a){e.next=38;break}return this.ruleForm.tupian=n[a],this.ro.tupian=!0,e.abrupt("continue",20);case 38:if("yuanjia"!=a){e.next=42;break}return this.ruleForm.yuanjia=n[a],this.ro.yuanjia=!0,e.abrupt("continue",20);case 42:if("pindanzhehoujia"!=a){e.next=46;break}return this.ruleForm.pindanzhehoujia=n[a],this.ro.pindanzhehoujia=!0,e.abrupt("continue",20);case 46:if("xuehao"!=a){e.next=50;break}return this.ruleForm.xuehao=n[a],this.ro.xuehao=!0,e.abrupt("continue",20);case 50:if("xingming"!=a){e.next=54;break}return this.ruleForm.xingming=n[a],this.ro.xingming=!0,e.abrupt("continue",20);case 54:if("lianxifangshi"!=a){e.next=58;break}return this.ruleForm.lianxifangshi=n[a],this.ro.lianxifangshi=!0,e.abrupt("continue",20);case 58:if("shangpinjieshao"!=a){e.next=62;break}return this.ruleForm.shangpinjieshao=n[a],this.ro.shangpinjieshao=!0,e.abrupt("continue",20);case 62:e.next=20;break;case 64:this.styleChange();case 65:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shangpinleibieChange:function(e){this.shangpinleibieIndex=e.target.value,this.ruleForm.shangpinleibie=this.shangpinleibieOptions[this.shangpinleibieIndex]},tupianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.tupian=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.yuanjia||this.$validate.isNumber(this.ruleForm.yuanjia)){e.next=3;break}return this.$utils.msg("原价应输入数字"),e.abrupt("return");case 3:if(!this.ruleForm.pindanzhehoujia||this.$validate.isNumber(this.ruleForm.pindanzhehoujia)){e.next=6;break}return this.$utils.msg("拼单折后价应输入数字"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("wanggoupindan",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("wanggoupindan",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,i=r.getFullYear(),t=r.getMonth()+1,n=r.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,n=n>9?n:"0"+n,"".concat(i,"-").concat(t,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=o}}]);