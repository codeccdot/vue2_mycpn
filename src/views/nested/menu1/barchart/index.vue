<template>
  <div class="app-container">
    <!-- 条形图 -->
    <div>
      <card id="barChart1" :width="width" :height="height" :colorful="true" ></card>
       chart1
     </div>
  
    <card id="barChart2" :width="width2" :height="height" :colorful="true" ></card>
    <card id="barChart3" :width="width2" :height="height" :colorful="true" ></card>
  </div>
</template>

<script>
import chart1 from "./chart1.js"
import chart2 from "./chart2.js"
import chart3 from "./chart3.js"
export default {
  name: 'Login',
  // 注册组件
  components: {},
  data() {
    return {
      width: '400px',
      width2: '500px',
      height: '300px'
      // 开关 open
      // 存储数据 table form
      // 组件传值/引入值
    }
  },
  mounted() {
  chart1()
  chart2()
  chart3()
  },

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
.app-container{
display: grid;
grid-template-columns: 1fr 1fr;
#barChart1{
width: 100%;
height: 100%;
margin-bottom: 20px;
margin-left: 30px;
}

}
</style>
