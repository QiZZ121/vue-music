webpackJsonp([0],{IYjl:function(t,s){},kvay:function(t,s,e){"use strict";var i=e("Dd8w"),a=e.n(i),l=e("qwAB"),n=e("y/jF"),r=e("ZV4u"),o=e("3Q4o"),c=e("F4+m"),g=e("NYxO"),h=Object(o.c)("transform"),d=Object(o.c)("backdrop-filter"),f={mixins:[c.b],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:a()({handlePlaylist:function(t){var s=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=s,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,s){this.selectPlay({list:this.songs,index:s})},random:function(){this.randomPlay({list:this.songs})}},Object(g.b)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var s=Math.max(this.minTransalteY,t),e=1,i=0,a=0,l=Math.abs(t/this.imageHeight);t>0?(e=1+l,i=10):a=Math.min(20,20*l),this.$refs.layer.style[h]="translate3d(0,"+s+"px,0)",this.$refs.filter.style[d]="blur("+a+"px)",t<this.minTransalteY?(i=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[h]="scale("+e+")",this.$refs.bgImage.style.zIndex=i}},components:{Scroll:l.a,Loading:n.a,SongList:r.a}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"music-list"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{staticClass:"play-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"text"},[t._v("随机播放全部")])])]),t._v(" "),e("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),e("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("song-list",{attrs:{rank:t.rank,songs:t.songs},on:{select:t.selectItem}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[e("loading")],1)])],1)},staticRenderFns:[]};var m=e("VU/8")(f,p,!1,function(t){e("IYjl")},"data-v-260b4f1e",null);s.a=m.exports}});
//# sourceMappingURL=0.986de2222eb2eeba0f7c.js.map