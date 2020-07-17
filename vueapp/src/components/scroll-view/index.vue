<template>
<div class="wm-scroll_html" ref="body" @touchmove.prevent  @click.prevent>
  <!-- 左拉/下拉 -->
  <div ref="upper" v-show="upperLoad" class="wm-scroll_load_body" :style="{backgroundColor:upperBg}">
    <div class="wm-scroll_load">
      <i :class="upperIcon" :style="{color:upperColor}"></i>
    </div>
  </div>
  <!-- 滑动内容 -->
  <div class="wm-scroll_body" ref="scroll" @touchstart="start" @touchmove="move" @touchend="end">
    <slot></slot>
  </div>
  <!-- 右拉/上拉 -->
  <div ref="lower" v-show="lowerLoad" class="wm-scroll_load_body" :style="{backgroundColor:lowerBg}">
    <div class="wm-scroll_load">
      <i :class="lowerIcon" :style="{color:lowerColor}"></i>
    </div>
  </div>
</div>
</template>

<style scoped>
.wm-scroll_html{position: relative;}
.wm-scroll_body{position: absolute;}

.wm-scroll_load_body{position: absolute; opacity: 1;}
@keyframes loading { 0% {transform: rotate(0deg);} 50% {transform: rotate(180deg);} 100% {transform: rotate(360deg);} }
.wm-scroll_load{position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);}
.wm-scroll_load i{position: absolute; margin: -12px 0 0 -12px; font-size: 24px; color: #6FB737; animation: loading 2s linear 0s infinite;}
</style>

<script>
export default {
  name: 'ScrollView',
  props: {
    scroll: {type: Boolean, default: true},
    scrollX: {type: Boolean, default: false},
    scrollY: {type: Boolean, default: true},
    upper: {type: Number, default: 50},
    lower: {type: Number, default: 50},
    upperLoad: {type: Boolean, default: true},
    lowerLoad: {type: Boolean, default: true},
    upperIcon: {type: String, default: 'ui ui_loading'},
    lowerIcon: {type: String, default: 'ui ui_loading'},
    upperBg: {type: String, default: ''},
    lowerBg: {type: String, default: ''},
    upperColor: {type: String, default: ''},
    lowerColor: {type: String, default: ''},
  },
  data(){
    return {
      sp:'', //滑动方向
      obj: null,  //滑动对象
      body: {w:'',h:''}, //容器-宽高
      bodyObj: {w:'',h:''}, //内容-宽高
      bodyMax: {w:0,h:0},  //最大-宽高
      startPage: {x:0,y:0}, //开始-坐标
      movePage: {x:0,y:0},  //移动-坐标
      tmpPage: {x:0,y:0},  //滑动-坐标
      page: {x:0,y:0},  //当前-坐标
      startTime: 0, //开始时间
      limit: 60,  //最小距离
      cubicBezier: '0.25,0.46,0.45,0.94',
      isMove: false,  //是否滑动
    }
  },
  mounted(){
    /* 滑动方向 */
    this.sp = this.scrollX?'x':'y';
    /* 加载动画 */
    this.refUpper = this.$refs.upper;
    this.refLower = this.$refs.lower;
    /* 对象 */
    this.obj = this.$refs.scroll;
    /* 默认值 */
    if(this.scrollX){
      // 左
      this.refUpper.style.left = 0;
      this.refUpper.style.width = this.upper+'px';
      this.refUpper.style.height = '100%';
      this.refUpper.style.transform = 'translate(-'+this.upper+'px,0)';
      // 中
      this.obj.style.minWidth = '100%';
      this.obj.style.height = '100%';
      // 右
      this.refLower.style.right = 0;
      this.refLower.style.width = this.lower+'px';
      this.refLower.style.height = '100%';
      this.refLower.style.transform = 'translate('+this.lower+'px,0)';
    }else{
      // 上
      this.refUpper.style.top = 0;
      this.refUpper.style.width = '100%';
      this.refUpper.style.height = this.upper+'px';
      this.refUpper.style.transform = 'translate(0,-'+this.upper+'px)';
      // 中
      this.obj.style.minHeight = '100%';
      this.obj.style.width = '100%';
      // 下
      this.refLower.style.bottom = 0;
      this.refLower.style.width = '100%';
      this.refLower.style.height = this.lower+'px';
      this.refLower.style.transform = 'translate(0,'+this.lower+'px)';
    }
  },
  methods:{

    /* 返回 */
    res(){
      const data = {
        body: this.body,
        client: this.bodyMax,
        page: this.page,
        move: this.movePage,
      }
      return data;
    },

    /* 初始化 */
    init(){
      /* 容器 */
      let body = this.$refs.body;
      // 容器-宽高
      this.body.w = body.offsetWidth;
      this.body.h = body.offsetHeight;
      // 对象-宽高、最大
      if(this.scrollX){
        this.bodyObj.w = this.obj.children[0].offsetWidth;
        this.bodyMax.w = -(this.bodyObj.w-this.body.w);
      }else{
        this.bodyObj.h = this.obj.offsetHeight;
        this.bodyMax.h = -(this.bodyObj.h-this.body.h);
      }
    },

    /* 开始 */
    start(e){
      if(!this.scroll) return false;
      let touch = e.touches?e.touches[0]:e;
      // 初始化
      this.init();
      // 开始时间
      this.startTime = e.timeStamp;
      // 开始坐标
      this.movePage.x = 0;
      this.movePage.y = 0;
      this.startPage.x = touch.clientX;
      this.startPage.y = touch.clientY;
      // 重置动画
      this.isMove = false;
      window.cancelAnimationFrame(this.animation);
      clearInterval(this.timeMove);
      clearTimeout(this.timeEnd);
      this.translate(this.page[this.sp],600);
    },

    /* 移动 */
    move(e){
      this.isMove = true;
      // 开始
      let touch = e.touches?e.touches[0]:e;
      this.movePage.x = parseInt((touch.clientX-this.startPage.x)*100)/100;
      this.movePage.y = parseInt((touch.clientY-this.startPage.y)*100)/100;
      // 移动距离
      this.tmpPage[this.sp] = parseInt((this.page[this.sp]+this.movePage[this.sp])*100)/100;
      // 方向
      if(this.tmpPage[this.sp]>0){
        // 控制上限
        let x = this.upper-this.tmpPage[this.sp];
        if(x<-this.upper) this.tmpPage[this.sp] = this.upper*2;
        // 加载
        this._translateUpper(x>0?x:0);
      }else{
        // 控制下限
        let y = this.lower+(this.tmpPage[this.sp]-this.bodyMax[this.sp=='x'?'w':'h']);
        if(y<-this.lower) this.tmpPage[this.sp] = this.bodyMax[this.sp=='x'?'w':'h']-this.lower*2;
        // 加载
        this._translateLower(y>0?y:0);
      }
      // 位置
      this.translate(this.tmpPage[this.sp],100);
      // 事项
      if(this.scrollX) this.$emit('scroll',{x:this.tmpPage[this.sp],y:0});
      else this.$emit('scroll',{x:0,y:this.tmpPage[this.sp]});
    },

    /* 结束 */
    end(e){
      if(!this.isMove) return false;
      // 方向
      if(this.movePage.x>this.limit) this.$emit('swipe','left');
      if(this.movePage.x<-this.limit) this.$emit('swipe','right');
      if(this.movePage.y>this.limit) this.$emit('swipe','down');
      if(this.movePage.y<-this.limit) this.$emit('swipe','up');
      // 加速-比例
      let time = parseInt(e.timeStamp-this.startTime);
      let n = Math.abs(this.movePage[this.sp]/time);
      // n = n<0.2?0:n;
      let move = parseInt(n*100000)/100;
      let t = parseInt(move*2);
      // 加速-距离
      move = this.movePage[this.sp]>0?move:-move;
      this.tmpPage[this.sp] = parseInt((this.tmpPage[this.sp]+move)*100)/100;
      // 控制上限、下限
      if(this.tmpPage[this.sp]>0){
        // 触发-左拉、下拉
        if(this.tmpPage[this.sp]>=this.upper){
          if(this.scrollX) this.$emit('left',this.res());
          else this.$emit('down',this.res());
        }
        // 限制距离
        t = t-this.tmpPage[this.sp]*2;
        t = t<=0?300:t;
        this.tmpPage[this.sp] = 0;
        this._translateUpper(this.upper);
      }else if(this.tmpPage[this.sp]<this.bodyMax[this.sp=='x'?'w':'h']){
        // 触发-右拉、上拉
        if(this.tmpPage[this.sp]<=this.bodyMax[this.sp=='x'?'w':'h']-this.lower){
          if(this.scrollX) this.$emit('right',this.res());
          else this.$emit('up',this.res());
        }
        // 限制距离
        t = t-(this.bodyMax[this.sp=='x'?'w':'h']-this.tmpPage[this.sp])*2;
        t = t<=0?300:t;
        this.tmpPage[this.sp] = this.bodyMax[this.sp=='x'?'w':'h'];
        this._translateLower(this.lower);
      }
      // 加速-位置
      this.translate(this.tmpPage[this.sp],t);
      // 加速-实时
      this.progress = 1;
      this.t = t/20;
      this.animation = window.requestAnimationFrame(this.render);
    },

    /* 动画时间 */
    render(){
      this.progress += 1;
      // 位置
      this.page[this.sp] = this.getTranslate();
      // 事项
      if(this.scrollX) this.$emit('scroll',{x:this.page[this.sp],y:0});
      else this.$emit('scroll',{x:0,y:this.page[this.sp]});
      if(this.progress < this.t){
        this.animation = window.requestAnimationFrame(this.render);
      }
    },

    /* 滚动-位置 */
    translate(xy,time){
      if(this.scrollX) this.obj.style.transform = 'translate('+xy+'px,0)';
      else this.obj.style.transform = 'translate(0,'+xy+'px)';
      if(time){
        this.obj.style.transitionDuration = time+'ms';
        this.obj.style.transitionTimingFunction = 'cubic-bezier('+this.cubicBezier+')';
      }
    },
    /* 实时位置 */
    getTranslate(){
      const xy = this.scrollX?4:5;
      let v = window.getComputedStyle(this.obj).transform;
      v = parseInt(parseFloat(v.substring(7).split(',')[xy])*100)/100;
      return v;
    },
    /* 滚动-指定位置 */
    scrollTo(xy,time){
      // 初始化
      this.init();
      // 参数
      xy = xy || 0;
      if(xy=='max') xy=this.bodyMax[this.sp=='x'?'w':'h'];
      time = time || 600;
      // 位置
      this.translate(xy,time);
      this.page[this.sp] = xy;
    },
    
    /* 加载-左/上 */
    _translateUpper(n){
      this.refUpper.style.opacity = (100-n/this.upper*100)/100;
      if(this.scrollX) this.refUpper.style.transform = 'translate(-'+n+'px,0)';
      else this.refUpper.style.transform = 'translate(0,-'+n+'px)';
    },
    /* 加载-右/下 */
    _translateLower(n){
      this.refLower.style.opacity = (100-n/this.lower*100)/100;
      if(this.scrollX) this.refLower.style.transform = 'translate('+n+'px,0)';
      else this.refLower.style.transform = 'translate(0,'+n+'px)';
    },
  }
}
</script>