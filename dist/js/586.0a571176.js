"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[586],{8586:function(t,i,e){e.r(i),e.d(i,{default:function(){return u}});var s=function(){var t=this,i=t._self._c;return i("div",[i("nav-bar",{attrs:{title:"商品评价",border:!1}}),i("van-tabs",{model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},[i("van-tab",{attrs:{name:"-1",title:`全部(${t.commentTotal.all})`}}),i("van-tab",{attrs:{name:"10",title:`好评(${t.commentTotal.praise})`}}),i("van-tab",{attrs:{name:"20",title:`中评(${t.commentTotal.review})`}}),i("van-tab",{attrs:{name:"30",title:`差评(${t.commentTotal.negative})`}})],1),t.list.length>0?i("div",{ref:"listDom",staticClass:"list",on:{scroll:t.pageScroll}},[t._l(t.list,(function(e){return i("div",{key:e.comment_id,staticClass:"item"},[i("div",{staticClass:"top"},[i("div",{staticClass:"left"},[i("img",{attrs:{src:e.user.avatar_url||t.defaultAvatar,alt:""}}),i("div",{staticClass:"mobile"},[t._v(t._s(e.user.nick_name))]),i("van-rate",{attrs:{value:e.score%6+1,size:"16",color:"#F4A213"}})],1),i("div",{staticClass:"date"},[t._v(t._s(e.create_time))])]),i("div",{staticClass:"bot"},[i("div",{staticClass:"text"},[t._v(t._s(e.content))]),e.images.length>0?i("div",{staticClass:"imgs"},t._l(e.images,(function(s){return i("img",{key:s.image_id,attrs:{src:s.image_url,alt:""},on:{click:function(i){return t.imageChagange(i,e.images)}}})})),0):t._e()])])})),t.finished?i("div",{staticClass:"end"},[t._v("没有更多了")]):t._e()],2):i("div",{staticClass:"empty"},[i("van-empty",{attrs:{description:"暂无内容"}})],1),i("img",{class:{goTop:!0,"goTop-show":t.isShowGoTop},attrs:{src:t.goTopIcon,alt:""},on:{click:t.goTop}})],1)},o=[],a=(e(5739),e(6471)),n=(e(560),e(8478)),r=e(7154),h={name:"GoodsComment",mixins:[r.Z],data(){return{defaultAvatar:n,active:"-1",commentTotal:{},list:[],page:1,pageSize:15,pageTotal:1,imgs:[],imgIndex:0}},created(){this.getCommentTotal(),this.getList()},computed:{goodsId(){return this.$route.params.id||""}},watch:{active(){this.refresh(),this.getList()}},methods:{async getCommentTotal(){const{data:{total:t}}=await this.$api.goods.getCommentTotal(this.goodsId);this.commentTotal=t},async getList(){const{data:{list:t}}=await this.$api.goods.getCommentList(this.active,this.goodsId,this.page),i=this.list;this.list=i.concat(t.data),this.pageTotal=Math.ceil(t.total/this.pageSize),1===this.pageTotal&&(this.finished=!0)},imageChagange(t,i){const e=t.target.currentSrc;this.imgs=[],i.forEach(((t,i)=>{this.imgs.push(t.image_url),e===t.image_url&&(this.imgIndex=i)})),(0,a.Z)({images:this.imgs,startPosition:this.imgIndex})}}},l=h,c=e(3736),m=(0,c.Z)(l,s,o,!1,null,"1aa0d9ca",null),u=m.exports},6471:function(t,i,e){e.d(i,{Z:function(){return I}});var s=e(9299),o=e(6369),a=e(6786),n=(0,a.d)("image-preview"),r=n[0],h=n[1],l=e(7846),c=e(3969),m=e(5590),u=e(9858),g=e(9054),v=e(4535),d=e(5781),f=e(4639),p=e(4958),w=e(9387);function T(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var C,S={mixins:[c.D],props:{src:String,show:Boolean,active:Number,minZoom:[Number,String],maxZoom:[Number,String],rootWidth:Number,rootHeight:Number},data:function(){return{scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}},computed:{vertical:function(){var t=this.rootWidth,i=this.rootHeight,e=i/t;return this.imageRatio>e},imageStyle:function(){var t=this.scale,i={transitionDuration:this.zooming||this.moving?"0s":".3s"};if(1!==t){var e=this.moveX/t,s=this.moveY/t;i.transform="scale("+t+", "+t+") translate("+e+"px, "+s+"px)"}return i},maxMoveX:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight/this.imageRatio:this.rootWidth;return Math.max(0,(this.scale*t-this.rootWidth)/2)}return 0},maxMoveY:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight:this.rootWidth*this.imageRatio;return Math.max(0,(this.scale*t-this.rootHeight)/2)}return 0}},watch:{active:"resetScale",show:function(t){t||this.resetScale()}},mounted:function(){this.bindTouchEvent(this.$el)},methods:{resetScale:function(){this.setScale(1),this.moveX=0,this.moveY=0},setScale:function(t){t=(0,v.w6)(t,+this.minZoom,+this.maxZoom),t!==this.scale&&(this.scale=t,this.$emit("scale",{scale:this.scale,index:this.active}))},toggleScale:function(){var t=this.scale>1?1:2;this.setScale(t),this.moveX=0,this.moveY=0},onTouchStart:function(t){var i=t.touches,e=this.offsetX,s=void 0===e?0:e;this.touchStart(t),this.touchStartTime=new Date,this.fingerNum=i.length,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.moving=1===this.fingerNum&&1!==this.scale,this.zooming=2===this.fingerNum&&!s,this.zooming&&(this.startScale=this.scale,this.startDistance=T(t.touches))},onTouchMove:function(t){var i=t.touches;if(this.touchMove(t),(this.moving||this.zooming)&&(0,d.PF)(t,!0),this.moving){var e=this.deltaX+this.startMoveX,s=this.deltaY+this.startMoveY;this.moveX=(0,v.w6)(e,-this.maxMoveX,this.maxMoveX),this.moveY=(0,v.w6)(s,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===i.length){var o=T(i),a=this.startScale*o/this.startDistance;this.setScale(a)}},onTouchEnd:function(t){var i=!1;(this.moving||this.zooming)&&(i=!0,this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(i=!1),t.touches.length||(this.zooming&&(this.moveX=(0,v.w6)(this.moveX,-this.maxMoveX,this.maxMoveX),this.moveY=(0,v.w6)(this.moveY,-this.maxMoveY,this.maxMoveY),this.zooming=!1),this.moving=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale())),(0,d.PF)(t,i),this.checkTap(),this.resetTouchStatus()},checkTap:function(){var t=this;if(!(this.fingerNum>1)){var i=this.offsetX,e=void 0===i?0:i,s=this.offsetY,o=void 0===s?0:s,a=new Date-this.touchStartTime,n=250,r=5;e<r&&o<r&&a<n&&(this.doubleTapTimer?(clearTimeout(this.doubleTapTimer),this.doubleTapTimer=null,this.toggleScale()):this.doubleTapTimer=setTimeout((function(){t.$emit("close"),t.doubleTapTimer=null}),n))}},onLoad:function(t){var i=t.target,e=i.naturalWidth,s=i.naturalHeight;this.imageRatio=s/e}},render:function(){var t=arguments[0],i={loading:function(){return t(p.Z,{attrs:{type:"spinner"}})}};return t(w.Z,{class:h("swipe-item")},[t(f.Z,{attrs:{src:this.src,fit:"contain"},class:h("image",{vertical:this.vertical}),style:this.imageStyle,scopedSlots:i,on:{load:this.onLoad}})])}},A=r({mixins:[c.D,(0,l.e)({skipToggleEvent:!0}),(0,m.X)((function(t){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0)}))],props:{className:null,closeable:Boolean,asyncClose:Boolean,overlayStyle:Object,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},minZoom:{type:[Number,String],default:1/3},maxZoom:{type:[Number,String],default:3},transition:{type:String,default:"van-fade"},showIndex:{type:Boolean,default:!0},swipeDuration:{type:[Number,String],default:300},startPosition:{type:[Number,String],default:0},overlayClass:{type:String,default:h("overlay")},closeIcon:{type:String,default:"clear"},closeOnPopstate:{type:Boolean,default:!0},closeIconPosition:{type:String,default:"top-right"}},data:function(){return{active:0,rootWidth:0,rootHeight:0,doubleClickTimer:null}},mounted:function(){this.resize()},watch:{startPosition:"setActive",value:function(t){var i=this;t?(this.setActive(+this.startPosition),this.$nextTick((function(){i.resize(),i.$refs.swipe.swipeTo(+i.startPosition,{immediate:!0})}))):this.$emit("close",{index:this.active,url:this.images[this.active]})}},methods:{resize:function(){if(this.$el&&this.$el.getBoundingClientRect){var t=this.$el.getBoundingClientRect();this.rootWidth=t.width,this.rootHeight=t.height}},emitClose:function(){this.asyncClose||this.$emit("input",!1)},emitScale:function(t){this.$emit("scale",t)},setActive:function(t){t!==this.active&&(this.active=t,this.$emit("change",t))},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:h("index")},[this.slots("index",{index:this.active})||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,i=this.slots("cover");if(i)return t("div",{class:h("cover")},[i])},genImages:function(){var t=this,i=this.$createElement;return i(g.Z,{ref:"swipe",attrs:{lazyRender:!0,loop:this.loop,duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators,indicatorColor:"white"},class:h("swipe"),on:{change:this.setActive}},[this.images.map((function(e){return i(S,{attrs:{src:e,show:t.value,active:t.active,maxZoom:t.maxZoom,minZoom:t.minZoom,rootWidth:t.rootWidth,rootHeight:t.rootHeight},on:{scale:t.emitScale,close:t.emitClose}})}))])},genClose:function(){var t=this.$createElement;if(this.closeable)return t(u.Z,{attrs:{role:"button",name:this.closeIcon},class:h("close-icon",this.closeIconPosition),on:{click:this.emitClose}})},onClosed:function(){this.$emit("closed")},swipeTo:function(t,i){this.$refs.swipe&&this.$refs.swipe.swipeTo(t,i)}},render:function(){var t=arguments[0];return t("transition",{attrs:{name:this.transition},on:{afterLeave:this.onClosed}},[this.shouldRender?t("div",{directives:[{name:"show",value:this.value}],class:[h(),this.className]},[this.genClose(),this.genImages(),this.genIndex(),this.genCover()]):null])}}),x=e(3370),b={loop:!0,value:!0,images:[],maxZoom:3,minZoom:1/3,onClose:null,onChange:null,className:"",showIndex:!0,closeable:!1,closeIcon:"clear",asyncClose:!1,transition:"van-fade",getContainer:"body",overlayStyle:null,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"},y=function(){C=new(o.ZP.extend(A))({el:document.createElement("div")}),document.body.appendChild(C.$el),C.$on("change",(function(t){C.onChange&&C.onChange(t)})),C.$on("scale",(function(t){C.onScale&&C.onScale(t)}))},$=function(t,i){if(void 0===i&&(i=0),!x.sk){C||y();var e=Array.isArray(t)?{images:t,startPosition:i}:t;return(0,s.Z)(C,b,e),C.$once("input",(function(t){C.value=t})),C.$once("closed",(function(){C.images=[]})),e.onClose&&(C.$off("close"),C.$once("close",e.onClose)),C}};$.Component=A,$.install=function(){o.ZP.use(A)};var I=$},5739:function(t,i,e){e(1958),e(6196),e(3332),e(6742),e(7179),e(2666),e(2939),e(9137),e(1088)},7154:function(t,i,e){e.d(i,{Z:function(){return o}});var s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAJ1BMVEUAAACGhobFxcX6+vpubm6qqqqZmZng4ODY2Ni4uLguLi5SUlL///8JT6i7AAAADHRSTlNNeqb1b5CFx72bWGN+OwvvAAAAnElEQVRIx+3MsQ2CUBSF4WOChVbGxAG0cAEtKV7iAtpYWTmHI1gwAiOwAyFQ3KE4eaGABO7tSCD3r/988Dxv0E/61RgtHUwlRjte+p0xS8ktwOwhdxtKpQw2JKQsqJE/KQN6yYmUDlUbOXxIqdCT05aUCoETSKlQnEipUJxIFZhoRyhOpDJMtL+im/DNoRUn5tNKp0QC7N7wvIXUAut4SPYhibFYAAAAAElFTkSuQmCC",o={data(){return{finished:!1,goTopIcon:s,isShowGoTop:!1}},methods:{pageScroll(t){const i=t.target.scrollTop,e=t.target.clientHeight,s=t.target.scrollHeight;this.isShowGoTop=i>=2*e,i+e===s&&(this.page<this.pageTotal?(this.page++,this.getList()):this.finished=!0)},refresh(){this.page=1,this.list=[],this.finished=!1,this.isShowGoTop=!1,this.$refs.listDom&&(this.$refs.listDom.scrollTop=0)},goTop(){let t=this.$refs.listDom.scrollTop;if(t>0){const i=50,e=Math.floor(200/(t/i)),s=setInterval((()=>{if(t>0)return t-=i,void(this.$refs.listDom.scrollTop=t);clearInterval(s)}),e)}}}}}}]);
//# sourceMappingURL=586.0a571176.js.map