<template>
  <div class="bDiv">
    <baidu-map
      class="bm-view"
      :center="center"
      :zoom="zoom"
      :dragging="true"
      :scroll-wheel-zoom="true"
      @ready="handler"
      @click="getClickInfo"
      :key="timeKey"
    >
      <!--        //地理位置的搜索功能-->
      <!--        <bm-local-search-->
      <!--          :keyword="keyword"-->
      <!--          :auto-viewport="true"-->
      <!--          :location="location"-->
      <!--        ></bm-local-search>-->
      <!--        //缩放比例尺的展示-->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <!--        //定位-->
      <!--        <bm-geolocation-->
      <!--          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"-->
      <!--          :showAddressBar="true"-->
      <!--          :autoLocation="true"-->
      <!--        ></bm-geolocation>-->
      <!--        //添加一个小红点的，并将当前的经纬度写入数据中-->
      <!--        <bm-marker :position="{lng:center.lng, lat: center.lat}"></bm-marker>-->
      <bm-control :offset="{width: '10px', height: '10px'}">
        <bm-auto-complete v-if="autoComplete" v-model="keyword" :sugStyle="{zIndex: 999999}" @confirm="handleConfirm" :key="`${timeKey}-BaiduMap`">
          <input type="text" placeholder="请输入搜索关键字" class="serachinput">
        </bm-auto-complete>
      </bm-control>
      <bm-marker :key="marker.id" v-for="marker of markers" :position="{lng: marker.lng, lat: marker.lat}"></bm-marker>
    </baidu-map>
  </div>
</template>
<script>
import moment from 'moment'
import { BaiduMap, BmScale, BmControl, BmAutoComplete, BmGeolocation, BmlMarkerClusterer } from 'vue-baidu-map'
export default {
  components: {
    BaiduMap,
    BmControl,
    BmAutoComplete,
    BmScale,
    BmGeolocation,
    BmlMarkerClusterer
  },
  data () {
    return {
      baidumapSwitch: false,
      autoComplete: true,
      center: { lng: 116.404, lat: 39.915 },
      zoom: 14,
      location: '惠州市',
      keyword: '请输入搜索关键词',
      markers: [],
      position: {},
      timeKey: ''
    }
  },
  created () {
    this.timeKey = moment().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss')
  },
  methods: {
    handleConfirm ({ item }) {
      this.queryString = `${item.value.city}${item.value.district}${item.value.business}`
      this.querySearch(this.queryString)
    },
    querySearch (queryString, cb) {
      var that = this
      /* global BMap */
      var myGeo = new BMap.Geocoder()
      myGeo.getPoint(queryString, function (point) {
        if (point) {
          that.point = point
        }
      }, this.locationCity)
      setTimeout(function () {
        that.show(that.point.lng, that.point.lat)
      }, 500)
    },
    show (gpsLongitude, gpsLatitude) {
      if (gpsLongitude === undefined || (gpsLongitude === 0 && gpsLatitude === 0)) {
        gpsLongitude = 116.40355
        gpsLatitude = 39.914003
      }
      const position = { id: Math.random() * 40, lng: gpsLongitude, lat: gpsLatitude }
      this.center = { lng: gpsLongitude, lat: gpsLatitude }
      this.markers = []
      this.markers.push(position)
      this.position = position
    },
    // 百度地图初始化（这个一定要！否则地图回加载不出来）
    handler ({ BMap, map }) {
      //百度地图主题默认为白色，如上图所示
      //百度地图使用黑色主题
      //[百度地图更多主题](https://lbsyun.baidu.com/custom/list.htm)
      var mapStyle = { style: 'dark' }
      map.setMapStyle(mapStyle)
    },
    // 点击获取到当前经纬度
    getClickInfo (e) {
      const position = { id: Math.random() * 40, lng: e.point.lng, lat: e.point.lat }
      this.markers = []
      this.markers.push(position)
      this.position = position
    }
  }
}
</script>
<style lang="scss" scoped>
  .bDiv{
    height: 600px;
  }
  .bm-view {
    /*https://dafrok.github.io/vue-baidu-map/#/zh/start/usage*/
    /*https://blog.csdn.net/weixin_38136817/article/details/88213380*/
    width: calc(100%);
    height: 600px;
    float: left;
  }
</style>
