<template>
  <div class="hello">
    <div ref="mapbox" style=";width:60vw; height: 100vh; margin: 0 auto"></div>
    <!-- 初始化echarts需要有个宽高的盒子 -->
  </div>
</template>

<script>
import "@/utils/china";
import * as echarts from 'echarts'
const option = {
  title: {
    // 标题内容
    text: "全国疫情图",
    link: "https://baidu.com",
    subtext: "百度知道",
    sublink: "https://baidu.com",
  },
  series: [
    {
      name: "确诊人数",
      type: "map", // 告诉echarts渲染一个地图
      map: "china", // 告诉echarts渲染中国地图
      label: {
        // 设置地区汉字
        show: true,
        color: "#333",
        fontSize: 10,
      },
      itemStyle: {
        // 地图区域样式
        areaColor: "#eee",
      },
      roam: true, // 鼠标滚轮效果
      zoom: 1.2, // 地图放大缩小
      emphasis: {
        // 鼠标经过地图和字体样式
        label: {
          color: "#fff",
          fontSize: 12,
        },
        itemStyle: {
          areaColor: "#ccc",
        },
      },
      data:[], // 展示后台给的数据，必须格式（name:xxx;value:xxx）
    },
  ],
  visualMap: [
    {
      // 区域显示颜色
      type: "piecewise",
      show: true, // splitNumber: 4
      pieces: [
        { min: 10000 },
        { min: 1000, max: 9999 },
        { min: 100, max: 999 },
        { min: 10, max: 99 },
        { min: 1, max: 9 },
        { max: 0 },
      ],
      inRange: {
        // 区域图标样式
        symbol: "rect",
        color: [
          "#FFFFFF",
          "#FFAA85",
          "#FF7B69",
          "#CC2929",
          "#8C0D0D",
          "#660208",
        ],
      },
    },
  ],
  tooltip: {
    // 鼠标放上去显示内容
    trigger: "item",
  },
  toolbox: {
    // 下载
    show: true,
    orient: "vertical",
    left: "right",
    top: "center",
    feature: {
      dataView: { readyOnly: false },
      restore: {},
      saveAsImage: {},
    },
  },
};

export default {
  name: "demo",
  data(){
    return{
        dataList:[
              {name: '南海诸岛', value: 0},
              {name: '北京', value: 2170.7},
              {name: '天津', value: 1559.6},
              {name: '上海', value: 2423.78},
              {name: '重庆', value: 3048.43},
              {name: '河北', value: 7556.3},
              {name: '河南', value: 9605},
              {name: '云南', value: 4800.5},
              {name: '辽宁', value: 4359.3},
              {name: '黑龙江', value: 3788.7},
              {name: '湖南', value: 6860.2},
              {name: '安徽', value: 6323.6},
              {name: '山东', value: 10047.2},
              {name: '新疆', value: 2444.67},
              {name: '江苏', value: 8029.3},
              {name: '浙江', value: 5737},
              {name: '江西', value: 4622.1},
              {name: '湖北', value: 5917},
              {name: '广西', value: 4885},
              {name: '甘肃', value: 2625.71},
              {name: '山西', value: 3702.35},
              {name: '内蒙古', value: 2534},
              {name: '陕西', value: 3835.44},
              {name: '吉林', value: 2717.43},
              {name: '福建', value: 3941},
              {name: '贵州', value: 3580},
              {name: '广东', value: 13},
              {name: '青海', value: 3983.8},
              {name: '西藏', value: 3371.5},
              {name: '四川', value: 8341},
              {name: '宁夏', value: 681.79},
              {name: '海南', value: 925.76},
              {name: '台湾', value: 2369},
              {name: '香港', value: 748.25},
              {name: '澳门', value: 63.2}
]
    }
  },
  mounted() {
    this.getData();
    this.mycharts = echarts.init(this.$refs.mapbox); // 初始化echarts
    this.mycharts.setOption(option);
  },
  methods: {
    getData() {
      option.series[0].data = this.dataList
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
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
