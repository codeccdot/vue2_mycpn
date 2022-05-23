<template>
  <div>
    <el-card style="height: 89vh; width: 80%">
      <el-input
        placeholder="请输入地址"
        v-model="input3"
        class="input-with-select"
      >
        <el-button slot="append" icon="el-icon-search" @click="inputfz"
          >搜索</el-button
        >
      </el-input>
      <!-- 
    scroll-wheel-zoom是是否可以缩放
    @ready是图加载完后触发事件
    center是位置定位
    zoom是缩放大小限制
    inertial-dragging是允许惯性拖拽
   -->
      <baidu-map
        class="bm-view"
        :zoom="15"
        :center="center"
        inertial-dragging
        @ready="mapReady"
        :scroll-wheel-zoom="true"
      >
        <!-- 定位控件   anchor="BMAP_ANCHOR_BOTTOM_RIGHT"代表放在右下角 -->
        <bm-geolocation
          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
          :showAddressBar="true"
          :autoLocation="true"
        ></bm-geolocation>
        <!-- 地区检索  keyword：关键字搜索   @searchcomplete：检索完成后的回调函数   auto-viewport：检索结束后是否自动调整地图事业  -->
        <bm-local-search
          :keyword="keyword"
          @searchcomplete="search"
          :auto-viewport="true"
          class="search"
        ></bm-local-search>
        <!-- 缩放控件   anchor代表控件停靠位置   anchor="BMAP_ANCHOR_TOP_RIGHT"代表放在右上角-->
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      </baidu-map>
    </el-card>
  </div>
</template>

<script>
   //创建标注点并添加到地图中
   function addMarker(points) {
      //循环建立标注点
      for (var i = 0, pointsLen = points.length; i < pointsLen; i++) {
        var point = new BMap.Point(points[i].lng, points[i].lat); //将标注点转化成地图上的点
        var marker = new BMap.Marker(point); //将点转化成标注点
        map.addOverlay(marker); //将标注点添加到地图上
        //添加监听事件
        (function () {
          var thePoint = points[i];
          marker.addEventListener("click", function () {
            showInfo(this, thePoint);
          });
        })();
      }
    }
//引入组件
import {
  BaiduMap,
  BmControl,
  BmView,
  BmAutoComplete,
  BmLocalSearch,
  BmMarker,
  BmGeolocation,
} from "vue-baidu-map";
export default {
  data() {
    return {
      //定位位置信息
      center: {},
      //检索关键字
      keyword: "",
      //输入框input值
      input3: "",
    };
  },
  //需要引入的组件
  components: {
    BaiduMap,
    BmControl,
    BmView,
    BmAutoComplete,
    BmLocalSearch,
    BmMarker,
    BmGeolocation,
  },
  mounted() {
    this.printRoad();
  },
  methods: {
    //输入框
    inputfz() {
      this.keyword = this.input3;
    },
    //地图加载后的回调
    mapReady({ BMap, map }) {
      //保存this指向，因为在百度的回调中this不指向vue
      const _this = this;
      var geolocation = new BMap.Geolocation();
      // 获取逆解析方法实例
      this.myGeo = new BMap.Geocoder();
      // 获取自动定位获取的坐标信息
      geolocation.getCurrentPosition(
        function (r) {
          _this.center = {
            lng: r.point.lng,
            lat: r.point.lat,
          };
          _this.point = {
            lng: r.point.lng,
            lat: r.point.lat,
          };
        },
        { enableHighAccuracy: true }
      );
    },
  },
};
</script>

<style scoped>
/* 给个宽高 */
.bm-view {
  height: 70vh;
  width: 70vw;
}
.input-with-select {
  width: 400px;
  margin-bottom: 5px;
}
.search {
  height: 300px;
  overflow: auto;
}
</style>
