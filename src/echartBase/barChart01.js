import * as echarts from 'echarts'

class Barchart01 {
  constructor(type) {
    this.type = type
  }
  barRender01() {
    const chartDom = document.getElementById('barChart_box')
    var myChart = echarts.init(chartDom)
    var option

    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#000'
        },
        // 看这里，看这里，看这里，看这里，看这里，看这里，看这里，看这里，看这里，看这里，看这里，看这里，看这里，看这里，
        // ----------------------通过name属性加单位，也可以通过nameTextStyle设置对应单位文字样式-----------------------
        name: '数量',
        nameTextStyle: {
          padding: [10, 40, 10, 10],
          color: '#000',
          nameLocation: 'start'
        }
      },
      series: [
        {
          name: 'Direct',
          type: 'bar',
          stack: 'total',
          //   label: {
          //     show: true
          //   },
          emphasis: {
            focus: 'series'
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
          name: 'Mail Ad',
          type: 'bar',
          stack: 'total',
          //   label: {
          //     show: true
          //   },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Affiliate Ad',
          type: 'bar',
          stack: 'total',
          //   label: {
          //     show: true
          //   },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    }

    option && myChart.setOption(option)
  }
}

export default Barchart01
