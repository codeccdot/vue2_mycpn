<template>
  <div class="app-container">
    <div class="chatBox">
      <div class="friend">
        <p style="margin: 20px">好友列表</p>
        <ul>
          <li data-val="小李" ref="val" @click="chooseObj()">小李</li>
        </ul>
      </div>
      <div class="box">
        <div class="record" ref="record">
          <p v-if="chatObj != ''">正在和{{ chatObj }}聊天</p>
          <div  v-show="message" v-for="(item,index) in message" :key="index">
             <p>{{item.name}}:</p>
             <p style="position:relative;left:10px" v-html="item.value">{{item.value}}</p>
          </div>
        </div>
        <div class="speak">
           <quill-editor
            ref="myTextEditor"
            v-model="chatVal"
            :options="editorOption"
            style="height:150px"
          ></quill-editor>
        </div>
        <div>
              <el-button type="primary" size="small" class="bt" @click="sendMsg">发送</el-button>
        </div>
       
    
      </div>
    </div>
    <!-- <div class="sjx"></div> -->
  </div>
</template>

<script>
import {getId} from "../../utils/auth"
export default {
  name: "login",
  // 注册组件
  components: {},
  created() {},
  computed:()=>{
   
  },
  mounted() {
    console.log(this.$refs.record)
    this.id = getId()
    this.$socket.emit("connection", 1);
  },
  destroyed() {},
  data() {
    return {
      context:"",
      id:'',
      chatObj: "",
      chatVal: "",
      message: [],
       editorOption: {}
      // 开关 open
      // 存储数据 table form
      //组件传值/引入值
    };
  },

  // 方法
   sockets: {
      // user 名字，与服务端保持一致，data 后台返回数据
      user(data) {
        // 执行的操作
        this.message.push(data)
        // this.message.splice(this.message, 0, data);
      },
      userList(data){

      }
  },
  methods: {
    //选择聊天对象
    chooseObj(val) {
      this.chatObj = this.$refs.val.dataset.val;
    },
    sendMsg() {
      this.$socket.emit("chatmessage", { name: this.id, value: this.chatVal });
      this.chatVal = "";
    },
   
  }
};
</script>

<style lang="scss" scoped>
.app-container {
  .bt{
    margin-left:30px ;
    position: relative;
    top:40px;
    left:20px
  }  
  height: 1000px;
  li {
    list-style: none;
  }
  .chatBox {
    margin-left: 10%;
    height: 700px;
    width: 80%;
    border: 2px solid grey;
    border-radius: 20px;
    display: grid;
    grid-template-columns: 2fr 5fr;
    .friend {
      border-right: 2px solid gray;
      // background-color: bisque;
    }
    .box {
      display: grid;
      height: 100%;
      grid-template-rows: 10fr  5fr 2fr;
      .speak {
        display: flex;
        border-top: 2px solid grey;
        input {
          border: none;
        }
      }
      .record {
        height:340px ;
        max-width:100%;
        overflow-x:hidden ;
        padding-left: 10px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .sjx {
    margin-top: 50px;
    width: 0;
    height: 0;
    border-bottom: 100px solid black;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
  }
}
</style>
