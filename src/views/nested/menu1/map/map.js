import * as echarts from 'echarts'

class Render {
  randomData() {
    return Math.round(Math.random() * 500)
  }
  constructor() {
    this.mydata = [
      { name: '北京', value: this.randomData() }, { name: '天津', value: this.this.randomData() },
      { name: '上海', value: this.randomData() }, { name: '重庆', value: this.randomData() },
      { name: '河北', value: this.randomData() }, { name: '河南', value: this.randomData() },
      { name: '云南', value: this.randomData() }, { name: '辽宁', value: this.randomData() },
      { name: '黑龙江', value: this.randomData() }, { name: '湖南', value: this.randomData() },
      { name: '安徽', value: this.randomData() }, { name: '山东', value: this.randomData() },
      { name: '新疆', value: this.randomData() }, { name: '江苏', value: this.randomData() },
      { name: '浙江', value: this.randomData() }, { name: '江西', value: this.randomData() },
      { name: '湖北', value: this.randomData() }, { name: '广西', value: this.randomData() },
      { name: '甘肃', value: this.randomData() }, { name: '山西', value: this.randomData() },
      { name: '内蒙古', value: this.randomData() }, { name: '陕西', value: this.randomData() },
      { name: '吉林', value: this.randomData() }, { name: '福建', value: this.randomData() },
      { name: '贵州', value: this.randomData() }, { name: '广东', value: this.randomData() },
      { name: '青海', value: this.randomData() }, { name: '西藏', value: this.randomData() },
      { name: '四川', value: this.randomData() }, { name: '宁夏', value: this.randomData() },
      { name: '海南', value: this.randomData() }, { name: '台湾', value: this.randomData() },
      { name: '香港', value: this.randomData() }, { name: '澳门', value: this.randomData() }]

    this.option = {
      backgroundColor: '#FFFFFF',
      title: {
        text: '全国地图',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      visualMap: {
        show: false,
        x: 'left',
        y: 'bottom',
        splitList: [
          { start: 500, end: 600 }, { start: 400, end: 500 },
          { start: 300, end: 400 }, { start: 200, end: 300 },
          { start: 100, end: 200 }, { start: 0, end: 100 }
        ],
        color: ['#66CC33', '#00FF00', '#66FF33', '#339900', '#33CC00', '#00CC00']
      },
      series: [{
        name: '随机数据',
        type: 'map',
        mapType: 'china',
        roam: true,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        data: this.mydata
      }]
    }
  }
  getOption() {
    return this.option
  }
}

module.exports = new Render()
