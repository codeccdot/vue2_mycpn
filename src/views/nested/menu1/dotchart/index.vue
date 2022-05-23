<template>
  <div class="app-container" >
   <card id="chart1" :width="width" :height="height" :colorful="true" ></card>
    <card id="chart2" :width="width" :height="height2" :colorful="true" ></card>
   </div>
</template>

<script>
import chart1 from "./chart1.js"
import chart2 from "./chart2.js"
export default {
  name: 'Login',
  // 注册组件
  components: {},
  data() {
    return {
      // 开关 open
      // 存储数据 table form   
      // 组件传值/引入值
      width:"500px",
      height:"500px",
      height2:"300px",
      colorful:true
    }
  },
  created() {},
  mounted(){
    chart1()
    chart2()
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
  display: flex;
  flex-direction: row;
#chart1{
  padding: 15px;
  margin-right: 10px;
}
#chart2{
  padding: 2px;
}
}
</style>
