<template>
  <div class="hello">
    <div ref="mapbox" id="main" style=";width:60vw; height: 100vh; margin: 0 auto"></div>
    <!-- 初始化echarts需要有个宽高的盒子 -->
  </div>
</template>

<script>
import Map from "./render.js"
export default {
  name: "demo",
  data(){
    return{
       
    }
  },
  created(){
   console.log(document.body.clientWidth ,document.body.clientHeight )
  },
  mounted() { 
     const a = new Map()
     a.init(this)
  },
  methods: {
   
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
 
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
}
h1,
 h2  {
    font-weight: normal;
}
ul  {
    list-style-type: none;
    padding: 0;
}
li  {
    display: inline-block;
    margin: 0 10px;
}
a  {
    color: #42b983;
}
</style>
