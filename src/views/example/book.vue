<template>
  <div class="app-container">
     <div id="binChart_box"></div>
     <div id="barChart_box"></div>
  </div>
</template>

<script>
import binClass from "../../echartBase/binChart01"
import barClass from "../../echartBase/barChart01"
export default {
  name: "login",
  // 注册组件
  components: {},
  created() {},
  mounted() {
    const a = new binClass
    const b = new barClass
    a.binRender01()
    b.barRender01()
  },
  destroyed() {},
  data() {
    return {
    
    }
  },
  // 方法
  methods: {
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
  display: flex;
  flex-direction: row;
 #binChart_box{
   width: 500px;
   height: 500px;
 }
  #barChart_box{
   width: 500px;
   height: 500px;
 }
}
</style>
