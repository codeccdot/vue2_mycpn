<template>
<div class="app_container">
<search/>  
</div>
</template>

<script>
import search from "../../myComponent/search.vue"
export default {
  name: "login",
  // 注册组件
  components:{search},
  created(){},
  mounted(){},
  destroyed(){},
  data(){
   return{
     // 开关 open
     // 存储数据 table form
     //组件传值/引入值
   }
  },
  // 方法
  methods:{
   // 数据获取 getItem(){}
   // 处理数据 handleItem(){}
   // 提交数据 submitForm(){}
   // 公共方法引入 myFun(){}
   // 混入方法/组件方法发射器 emit(){}
  }
}
</script>

<style lang="scss" scoped>
.app_container{
   margin: 40px 40px;
}
</style>