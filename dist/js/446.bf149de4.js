"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[446],{9446:function(t,s,e){e.r(s),e.d(s,{default:function(){return u}});var o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("nav-bar",{attrs:{title:"商品列表",border:!1}}),s("div",{staticClass:"head-box"},[s("div",{staticClass:"search-box"},[s("van-search",{attrs:{value:t.goodsName||"搜索商品",placeholder:"请输入您搜索的商品"},on:{click:function(s){return t.$router.replace("/search")}}}),s("van-icon",{attrs:{name:"apps-o",size:"25"},on:{click:function(s){return t.$router.replace("/category")}}})],1),s("van-row",{staticClass:"menu-box"},[s("van-col",{class:{menu:!0,active:"all"===t.sortType},attrs:{span:"8"},on:{click:function(s){return t.menuClick("all")}}},[s("span",[t._v("综合")])]),s("van-col",{class:{menu:!0,active:"sales"===t.sortType},attrs:{span:"8"},on:{click:function(s){return t.menuClick("sales")}}},[s("span",[t._v("销量")])]),s("van-col",{class:{menu:!0,active:"price"===t.sortType},attrs:{span:"8"},on:{click:function(s){return t.menuClick("price")}}},[s("span",[t._v("价格")]),s("div",{staticClass:"icon-box"},[s("van-icon",{staticClass:"up",attrs:{name:"play",size:"10px",color:1===t.sortPrice?"#c21401":""}}),s("van-icon",{staticClass:"down",attrs:{name:"play",size:"10px",color:0===t.sortPrice?"#c21401":""}})],1)])],1)],1),s("div",{staticClass:"content"},[t.goodsList.length>0?s("div",{staticClass:"goods-list"},t._l(t.goodsList,(function(t){return s("GoodsItem",{key:t.goods_id,attrs:{goods:t}})})),1):s("van-empty",{attrs:{image:"search",description:"没有找到相关商品"}})],1)],1)},a=[],r=e(5673),i={name:"SearchList",components:{GoodsItem:r.Z},data(){return{sortType:"all",sortPrice:null,goodsList:[],page:1}},computed:{goodsName(){return this.$route.query.goods}},created(){this.getGoodsList()},methods:{async getGoodsList(){const t={sortType:this.sortType,sortPrice:this.sortPrice,categoryId:this.$route.query.categoryId||null,goodsName:this.goodsName,page:this.page},{data:{list:s}}=await this.$api.goods.getGoodsList(t);0!==s.data.length&&(this.goodsList=s.data)},menuClick(t){this.sortType=t,"price"===t?1===this.sortPrice?this.sortPrice=0:this.sortPrice=1:this.sortPrice=null,this.getGoodsList()}}},c=i,n=e(3736),l=(0,n.Z)(c,o,a,!1,null,"0a59b1bc",null),u=l.exports}}]);
//# sourceMappingURL=446.bf149de4.js.map