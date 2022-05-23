<template>
<div class="app-container">
<table class="table">
    <tr class="tr" v-for="(item,index1) in row" :key="index1">
        <td :ref="index1+'-'+index2" v-for="(item2,index2) in row" :key="index2" :class="'box'+index1+'-'+index2">

        </td>
    </tr>
    
</table>
<button @click="renderOnce(0)">生成</button>
</div>
</template>

<script>
import class1 from "./gameClass/eluosi"
export default {
  name: "login",
  // 注册组件
  components:{},
  created(){},
  mounted(){
     this.game = new class1
     let obj = this.game.init()
     this.row = obj.row
     this.col =obj.col
     this.renderOnce()
  },
  destroyed(){},
  data(){
   return{
       row:'',
       col:'',
       timer:0,
       renderArr:[]
     // 开关 open
     // 存储数据 table form
     //组件传值/引入值
   }
  },
  // 方法
  methods:{
    // 渲染方块
   renderOnce(timer) {
    const that = this  
    if(timer!==undefined){
        this.timer = timer
        this.game.reset()
        
    }
    let renderArr = this.game.renderRandom()
    this.game.renderblock(renderArr,0,that)
    setInterval(()=>{
        this.timer++
        // console.log(this.timer)
        //方块下降
        this.game.goDown(that)

     },1000)
  }
   // 处理数据 handleItem(){}
   // 提交数据 submitForm(){}
   // 公共方法引入 myFun(){}
   // 混入方法/组件方法发射器 emit(){}
  }
}
</script>

<style lang="scss" scoped>
.app-container{
    table{
       border-collapse: collapse;
       margin:0 auto 
    }
    td{
       border: 1px solid grey;
       width:20px;
       height: 22px; 
    }
// .outside{
//    width: 400px;
//    height: 25px;
//    border:1px solid grey;
//    display: flex;
//    flex-direction: row;
//     margin: auto;
//     justify-content: space-evenly;
//    .inside{
//        border:1px solid grey;
//       flex:1
//    }
// }
}
</style>