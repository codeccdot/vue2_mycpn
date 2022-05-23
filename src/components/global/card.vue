<template>
  <div
    class="card-container"
    :style="{width:width,height:height,
             background:colorful?gray:null}"
  ></div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    width: {
      type: String,
      default: '100px'
    },
    height: {
      type: String,
      default: '100px'
    },
    colorful: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 开关 open
      gray: 'rgb(223, 221, 230)'
      // 存储数据 table form
      // 组件传值/引入值
    }
  },
  created() {
  },
  mounted() {},
  destroyed() {},
  // 方法
  methods: {
    // 数据获取 getItem(){}

    // 处理数据 handleItem(){}
    // 提交数据 submitForm(){}
    // 公共方法引入 myFun(){}
    // 混入方法/组件方法发射器 emit(){}
  }
}
</script>

<style lang="scss" scoped>
.card-container{

}
</style>
