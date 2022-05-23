<template>
  <div class="search_container">
    <div class="search_border">
      <div class="input_box">
        <input class="input"
         type="text" 
        :placeholder="title" 
        v-model="value"
        v-show="isInput" 
        @blur="unInput"
        @focus="inInput" />
        <div class="icon">
            <svg t="1650905766362" @click="linkInto" class="icon01" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2448" width="48" height="48"><path d="M967.9234 816.206954l-147.416093-192.48379c52.29229-49.884092 85.146985-119.721821 85.146985-197.472199 0-150.684361-122.990089-273.330422-274.018478-273.330422-151.200403 0-274.018478 122.646061-274.018478 273.330422s122.990089 273.330422 274.018478 273.330422c48.679993 0 94.263733-12.901058 133.998992-35.090879l147.932135 193.171846c6.70855 8.77272 16.857383 13.417101 27.350244 13.417101 7.224593 0 14.621199-2.236183 20.641693-7.052579C976.524105 852.501932 979.448345 831.172182 967.9234 816.206954L967.9234 816.206954zM421.090543 426.250966c0-115.765496 94.435747-209.857215 210.545271-209.857215s210.545271 94.091718 210.545271 209.857215-94.435747 209.857215-210.545271 209.857215S421.090543 542.016462 421.090543 426.250966L421.090543 426.250966zM288.467663 288.811692 83.254829 288.811692c-18.921552 0-34.230808-15.309256-34.230808-34.058794s15.309256-34.058794 34.230808-34.058794l205.212834 0c18.921552 0 34.230808 15.309256 34.230808 34.058794C322.698471 273.502436 307.389216 288.811692 288.467663 288.811692L288.467663 288.811692zM280.210986 626.131362 83.254829 626.131362c-18.921552 0-34.230808-15.309256-34.230808-34.058794s15.309256-34.058794 34.230808-34.058794l196.956157 0c18.921552 0 34.230808 15.309256 34.230808 34.058794C314.441794 610.822107 299.132538 626.131362 280.210986 626.131362L280.210986 626.131362zM239.78767 457.041492l-156.532841 0c-18.921552 0-34.230808-15.309256-34.230808-34.230808 0-18.921552 15.309256-34.230808 34.230808-34.230808l156.532841 0c18.921552 0 34.230808 15.309256 34.230808 34.230808C273.846464 441.732236 258.537208 457.041492 239.78767 457.041492L239.78767 457.041492zM460.137746 801.241727 83.254829 801.241727c-18.921552 0-34.230808-15.309256-34.230808-34.230808s15.309256-34.230808 34.230808-34.230808l376.882916 0c18.921552 0 34.230808 15.309256 34.230808 34.230808C494.368554 785.932471 479.059298 801.241727 460.137746 801.241727L460.137746 801.241727z" p-id="2449"></path></svg>
        </div>    
      </div>
    </div>
    <div class="queryBox" v-show="isShow">
        <div class="history">
          <h4>历史记录:</h4> 
         <span class="his_item" v-for="(item,index) in historyList" :key="index" @click="gethis(item)">
           {{item.value}}
         </span>
        </div>
        <div class="item" v-for="(item,index) in itemList" :key="index" @click="linkInto">
       123
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mySearch",
  components: {},
  //title:未输入标题  是否输出isInput 搜索到的结果itemList 是否展开搜索项isShow
  props: {
    // 搜索关键词
    title: {
      type: String,
      default: "请输入搜索关键词",
    },
    isInput:{
      type: Boolean,
      default: true,
    },
    itemList:{
      type: Array,
      default: 10,
    },
    isShow:{
      type: Boolean,
      default: false,
    },
    upInput:{
      type: Boolean,
      default: false,
    },
  },
  created() {
    // localStorage.setItem("search_index",JSON.stringify([]) )
    this.historyList = JSON.parse(localStorage.getItem("search_index")) 
  
  },
  mounted() {},
  destroyed() {},
  data() {
    return {
      historyList:[],
      value:''
    };
  },
  // 方法   linkinto为搜索事件主函数 
  methods: {
    //输入时展开
    inInput(){
      this.isShow = true
    },
    //焦点失去则隐藏
    unInput(){
      this.isShow = false
    },
    gethis(item){
      console.log(item)
      this.value = item
      this.linkInto()
    },
    //传值事件
    linkInto(){
    // this.$emit('link',this.value)
    this.historyList.push({id:this.historyList.length,value:this.value})
    console.log(this.historyList,"111")
    localStorage.setItem("search_index",this.historyList)
    this.historyList = JSON.parse(localStorage.getItem("search_index")) 
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
.input {
  margin: 1px 4px;  
  width: 350px;
  border: 0 none;
  background-color: transparent;
  outline:none;

}

.search_container {
  display: flex;
  flex-direction: column;
//   background-color: rgb(202, 181, 181);
  width: 400px;
  height: 420px;
  .search_border{
  display: flex;
  align-items: center;
//   background-color: aquamarine;
  border:1px solid lavender;
  border-radius:5px ;
  width: 100%;
  height: 45px;
  position: relative;
  //输入框
  .input_box{
     margin-left: 20px;
     .input{
        font-size: 17px; 
     }
  }
  .icon{
      position:absolute;
      width: 40px;
      height:40.79px;
      right:0;
      top:0;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .icon01{
      width: 25px;
      height:25px;
  }
  .icon:hover{
      background-color: rgb(145, 141, 141);
  }
  }
  .queryBox{
    .history{
      font-size: 13px;
      height: 16px;
      padding: 15px 12px;
      display: flex;
      align-items: center;
     .his_item{
      //  border: 1px solid gray;
       margin-left:12px;
     }
    }
//    background-color: aquamarine;
   border:1.5px solid lavender;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
   
    .item{
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      // margin-right:10px;
       padding-right:10px ;
    }
    .item:hover{
      width: 100%;
      height: 21px;
      background-color: lightgray;
    }
  }
}
</style>
