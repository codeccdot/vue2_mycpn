<template>
  <div class="app-container">
    <div
      class="box"
      ref="box"
      style="width: 100px; height: 100px; background-color: blue;margin-bottom:10px"
      @mousemove="getPosition($event)"
    ></div>
    <div class="drag" ref="drag" @mouseup="handlEnter($event)" @mousedown="handleout($event)" style="width: 100px; height: 100px; background-color: blue"></div>
    <!-- <div class="kongtiaojifang" style="margin-top:100px" ref="kongtiao"   @mousedown="mouseDownHandleelse($event)" @mouseup="mouseUpHandleelse($event)"> -->
<!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "login",
  // 注册组件
  components: {},
  created() {},
  mounted() {},
  destroyed() {},
  data() {
    return {
      moveX:"",
      moveY:"",
       moveDataelse: {
        x: null,
        y: null
      }

      // 开关 open
      // 存储数据 table form
      //组件传值/引入值
    };
  },
  // 方法
  methods: {
    getPosition(e) {
    //   const a = this.debounce(function () {
         console.log(this.$refs.box.offsetLeft,"X") 
          console.log(this.$refs.box.offsetTop,"Y") 
          console.log(e.pageY,"pageY") 
            console.log(e.pageX,"pageX") 
    //  }, 2000);
    //   a()
    },
    debounce(fn, delay) {
      let t = null;

      return function () {
        if (t !== null) {
          clearTimeout(t);
        }
        t = setTimeout(() => {
          let value = 1
          fn.apply(this);
          console.log(value);
        }, delay);
      };
    },
     mouseDownHandleelse (event) {
      this.moveDataelse.x = event.pageX - this.$refs.kongtiao.offsetLeft
      this.moveDataelse.y = event.pageY - this.$refs.kongtiao.offsetTop
      event.currentTarget.style.cursor = 'move'
      window.onmousemove = this.mouseMoveHandleelse
    },
    mouseMoveHandleelse (event) {
      let moveLeft = event.pageX - this.moveDataelse.x + 'px'
      let moveTop = event.pageY - this.moveDataelse.y + 'px'
      this.$refs.kongtiao.style.left = moveLeft
      this.$refs.kongtiao.style.top = moveTop
    },
    mouseUpHandleelse (event) {
      window.onmousemove = null
      event.currentTarget.style.cursor = 'move'
      console.log('鼠标松开了')
    }
    // 数据获取 getItem(){}
    // 处理数据 handleItem(){}
    // 提交数据 submitForm(){}
    // 公共方法引入 myFun(){}
    // 混入方法/组件方法发射器 emit(){}
  },
};
</script>

<style lang="scss" scoped>
.app-container {
}

 .kongtiaojifang{
    background-color: aquamarine;
    height: 200px;
    width: 400px;
    position: fixed;
    top: 150px;
    left: 550px;
    cursor: pointer;
  }

</style>
