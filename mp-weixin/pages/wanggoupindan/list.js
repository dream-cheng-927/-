(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wanggoupindan/list"],{2424:function(e,n,t){},"38ed":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,o){try{var s=e[i](o),c=s.value}catch(u){return void t(u)}s.done?n(c):Promise.resolve(c).then(r,a)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function s(e){i(o,r,a,s,c,"next",e)}function c(e){i(o,r,a,s,c,"throw",e)}s(void 0)}))}}var s={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"商品名称"},{queryName:"商品类别"}],sactiveItem:{padding:"0 28rpx",boxShadow:"0 0 12rpx rgba(0,0,0,.3)",margin:"0 12rpx",borderColor:"rgba(0,0,0,1)",backgroundColor:"rgba(58, 235, 241, 1)",color:"#fff",borderRadius:"8rpx",borderWidth:"0",width:"auto",lineHeight:"68rpx",fontSize:"28rpx",borderStyle:"solid"},sitem:{padding:"0 20rpx",boxShadow:"0 0 12rpx rgba(0,0,0,.3)",margin:"0 12rpx",borderColor:"rgba(0,0,0,1)",backgroundColor:"#fff",color:"#333",borderRadius:"8rpx",borderWidth:"0",width:"auto",lineHeight:"68rpx",fontSize:"28rpx",borderStyle:"solid"},queryIndex:0,list:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},categoryList:[],categoryName:"全部",CustomBar:"0"}},onShow:function(){var e=this;return o(r.default.mark((function n(){var t;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.btnColor=e.btnColor.sort((function(){return.5-Math.random()})),n.next=3,e.$api.list("shangpinfenlei",{page:1,limit:100});case 3:t=n.sent,t.data.list.splice(0,0,{id:0,shangpinleibie:"全部"}),e.categoryList=t.data.list,e.hasNext=!0,e.mescroll&&e.mescroll.resetUpScroll();case 8:case"end":return n.stop()}}),n)})))()},onLoad:function(){this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{queryChange:function(e){this.queryIndex=e.detail.value,this.searchForm.shangpinmingcheng="",this.searchForm.shangpinleibie=""},categoryClick:function(e){this.categoryName=e,this.mescroll.resetUpScroll()},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(e){var n=this;return o(r.default.mark((function t(){var a,i;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={page:e.num,limit:e.size},"全部"!=n.categoryName&&(a.shangpinleibie="%"+n.categoryName+"%"),t.next=4,n.$api.list("wanggoupindan",a);case 4:i=t.sent,1==e.num&&(n.list=[]),n.list=n.list.concat(i.data.list),0==i.data.list.length&&(n.hasNext=!1),e.endSuccess(e.size,n.hasNext);case 9:case"end":return t.stop()}}),t)})))()},onDetailTap:function(e){this.$utils.jump("./detail?id=".concat(e.id))},onUpdateTap:function(e){this.$utils.jump("./add-or-update?id=".concat(e))},onAddTap:function(){this.$utils.jump("./add-or-update")},onDeleteTap:function(n){var t=this;e.showModal({title:"提示",content:"是否确认删除",success:function(){var e=o(r.default.mark((function e(a){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a.confirm){e.next=5;break}return e.next=3,t.$api.del("wanggoupindan",JSON.stringify([n]));case 3:t.hasNext=!0,t.mescroll.resetUpScroll();case 5:case"end":return e.stop()}}),e)})));function a(n){return e.apply(this,arguments)}return a}()})},search:function(){var e=this;return o(r.default.mark((function n(){var t,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.mescroll.num=1,t={page:e.mescroll.num,limit:e.mescroll.size},e.searchForm.shangpinmingcheng&&(t["shangpinmingcheng"]="%"+e.searchForm.shangpinmingcheng+"%"),e.searchForm.shangpinleibie&&(t["shangpinleibie"]="%"+e.searchForm.shangpinleibie+"%"),n.next=6,e.$api.list("wanggoupindan",t);case 6:a=n.sent,1==e.mescroll.num&&(e.list=[]),e.list=e.list.concat(a.data.list),0==a.data.list.length&&(e.hasNext=!1),e.mescroll.endSuccess(e.mescroll.size,e.hasNext);case 11:case"end":return n.stop()}}),n)})))()}}};n.default=s}).call(this,t("543d")["default"])},"551d":function(e,n,t){"use strict";t.r(n);var r=t("38ed"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},"72b4":function(e,n,t){"use strict";t.r(n);var r=t("dc4f"),a=t("551d");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("9332");var o,s=t("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);n["default"]=c.exports},9332:function(e,n,t){"use strict";var r=t("2424"),a=t.n(r);a.a},dc4f:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([t.e("common/vendor"),t.e("components/mescroll-uni/mescroll-uni")]).then(t.bind(null,"f5cf"))}},a=function(){var e=this,n=e.$createElement,t=(e._self._c,e.isAuth("wanggoupindan","修改")),r=e.isAuth("wanggoupindan","删除"),a=e.__map(e.list,(function(n,t){var r=e.__get_orig(n),a=n.tupian?n.tupian.split(","):null;return{$orig:r,g0:a}})),i=e.isAuth("wanggoupindan","新增");e.$mp.data=Object.assign({},{$root:{m0:t,m1:r,l0:a,m2:i}})},i=[]},f1b8:function(e,n,t){"use strict";(function(e){t("f544");r(t("66fd"));var n=r(t("72b4"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["f1b8","common/runtime","common/vendor"]]]);