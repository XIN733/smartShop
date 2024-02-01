"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[685],{7357:function(t,i,s){s.d(i,{Z:function(){return l}});var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"coupon-item",on:{click:function(i){return t.couponClick({price:t.coupon.reduce_price,id:t.coupon.user_coupon_id})}}},[i("div",{class:{"coupon-wrapper":!0,"color-gray":t.coupon.is_receive||"已使用"===t.coupon.state.text,"color-blue":t.index%2!==0&&!t.coupon.is_receive&&"已使用"!==t.coupon.state.text}},[i("div",{staticClass:"coupon-type"},[t._v("满减券")]),i("div",{staticClass:"left"},[i("div",{staticClass:"price-box"},[i("span",[t._v("￥")]),i("span",{staticClass:"price"},[t._v(t._s(t.coupon.reduce_price))])]),i("div",{staticClass:"text"},[t._v("满"+t._s(t.coupon.min_price)+"元可用")])]),i("div",{staticClass:"split-line"}),i("div",{staticClass:"right"},[i("div",{staticClass:"top"},[t._v(t._s(t.coupon.name))]),i("div",{staticClass:"bot"},["coupon1"===t.type?i("div",{staticClass:"l"},[t._v("领取"+t._s(t.coupon.expire_day)+"天内有效")]):t._e(),"coupon2"===t.type||"coupon3"===t.type?i("div",{staticClass:"l"},[t._v(t._s(t.coupon.start_time+"~"+t.coupon.end_time))]):t._e(),i("div",{staticClass:"r"},["coupon1"!==t.type||t.coupon.is_receive?t._e():i("button",{staticClass:"btn",on:{click:function(i){return t.receiveCoupon(t.coupon.coupon_id)}}},[t._v("立即领取")]),"coupon1"===t.type&&t.coupon.is_receive?i("div",{staticClass:"text"},[t._v("已领取")]):t._e(),"coupon2"===t.type?i("div",{staticClass:"text"},[t._v(t._s(t.coupon.state.text))]):t._e()])])])])])},o=[],a={props:{coupon:Object,index:Number,type:String},methods:{receiveCoupon(t){this.$emit("receiveCoupon",t)},couponClick(t){this.$emit("couponClick",t)}}},n=a,c=s(3736),p=(0,c.Z)(n,e,o,!1,null,"2553d7a3",null),l=p.exports},9685:function(t,i,s){s.r(i),s.d(i,{default:function(){return u}});var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"container"},[i("nav-bar",{attrs:{title:"我的优惠券",border:!1}}),i("van-tabs",{model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},[i("van-tab",{attrs:{name:"isUnused",title:"未使用"}}),i("van-tab",{attrs:{name:"isUse",title:"已使用"}}),i("van-tab",{attrs:{name:"isExpire",title:"已过期"}})],1),t.list.length>0?i("div",{staticClass:"list"},[t._l(t.list,(function(t,s){return i("coupon-item",{key:t.user_coupon_id,attrs:{coupon:t,index:s,type:"coupon2"}})})),t.finished?i("div",{staticClass:"end"},[t._v("没有更多了")]):t._e()],2):i("div",{staticClass:"empty"},[i("van-empty",{attrs:{description:"暂无内容"}})],1),i("img",{class:{goTop:!0,"goTop-show":t.isShowGoTop},attrs:{src:t.goTopIcon,alt:""},on:{click:t.goTop}})],1)},o=[],a=s(7357),n=s(7154),c={name:"MyCoupon",components:{CouponItem:a.Z},mixins:[n.Z],data(){return{active:"isUnused",list:[],page:1,pageSize:15,pageTotal:1}},created(){this.getList()},watch:{active(){this.refresh(),this.getList()}},methods:{async getList(){const{data:{list:t}}=await this.$api.coupon.getMyCoupon(this.active,this.page),i=this.list;this.list=i.concat(t.data),this.pageTotal=Math.ceil(t.total/this.pageSize),1===this.pageTotal&&(this.finished=!0)}}},p=c,l=s(3736),r=(0,l.Z)(p,e,o,!1,null,"478e5970",null),u=r.exports},7154:function(t,i,s){s.d(i,{Z:function(){return o}});var e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAJ1BMVEUAAACGhobFxcX6+vpubm6qqqqZmZng4ODY2Ni4uLguLi5SUlL///8JT6i7AAAADHRSTlNNeqb1b5CFx72bWGN+OwvvAAAAnElEQVRIx+3MsQ2CUBSF4WOChVbGxAG0cAEtKV7iAtpYWTmHI1gwAiOwAyFQ3KE4eaGABO7tSCD3r/988Dxv0E/61RgtHUwlRjte+p0xS8ktwOwhdxtKpQw2JKQsqJE/KQN6yYmUDlUbOXxIqdCT05aUCoETSKlQnEipUJxIFZhoRyhOpDJMtL+im/DNoRUn5tNKp0QC7N7wvIXUAut4SPYhibFYAAAAAElFTkSuQmCC",o={data(){return{finished:!1,goTopIcon:e,isShowGoTop:!1}},methods:{pageScroll(t){const i=t.target.scrollTop,s=t.target.clientHeight,e=t.target.scrollHeight;this.isShowGoTop=i>=2*s,i+s===e&&(this.page<this.pageTotal?(this.page++,this.getList()):this.finished=!0)},refresh(){this.page=1,this.list=[],this.finished=!1,this.isShowGoTop=!1,this.$refs.listDom&&(this.$refs.listDom.scrollTop=0)},goTop(){let t=this.$refs.listDom.scrollTop;if(t>0){const i=50,s=Math.floor(200/(t/i)),e=setInterval((()=>{if(t>0)return t-=i,void(this.$refs.listDom.scrollTop=t);clearInterval(e)}),s)}}}}}}]);
//# sourceMappingURL=685.d67cf47b.js.map