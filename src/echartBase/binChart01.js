import * as echarts from 'echarts'

class Binchart01 {
  constructor(type) {
    this.type = type
  }
  binRender01() {
    const chartDom = document.getElementById('binChart_box')
    var myChart = echarts.init(chartDom)
    var option
    var datas = [
      [
        {
          name: '一号',
          value: 313,
          itemStyle: { color: '#89cff0' },
          label: {
            rich: {
              time: {
                color: '#89cff0'
              }
            }
          }
        },
        {
          name: '二号',
          value: 32,
          itemStyle: { color: '#ff2052' },
          label: {
            rich: {
              time: {
                color: '#ff2052'
              }
            }
          }
        },
        {
          name: '三号',
          value: 32,
          itemStyle: { color: '#8a2be2' },
          label: {
            rich: {
              time: {
                color: '#8a2be2'
              }
            }
          }
        }
      ]
    ]
    option = {
      tooltip: {
        trigger: 'item'
      },
      //     graphic: [
      //       {
      //          type: 'group',
      //          left: 'center',
      //          bottom: 130,
      //          children: [
      //              {
      //                  type: 'text',
      //                  z: 100,
      //                  left: 'center',
      //                  top: 'middle',
      //                  style: {
      //                      fill: '#333',
      //                      text: [
      //                          '',

      //                      ].join('\n'),
      //                      font: '14px Microsoft YaHei'
      //                  }
      //              }
      //          ]
      //      }
      //  ],

      legend: {
        orient: 'vertical',
        // 图例
        top: 120,
        // bottom: 10,
        // left: 'center',
        // icon: "t",        //圆点形图例（默认是官网上的圆角矩形）
        itemWidth: 16, // 这几个是图例宽高位置等的设置
        itemHeight: 10,
        itemGap: 12,
        left: 20,
        textStyle: {
          fontSize: 12.5,
          color: '#000' // 图例字体颜色等
        }
      },
      series: datas.map(function(data, idx) {
        let height1, top
        if (idx === 0) {
          height1 = '72%'
          top = idx * 50
        } else {
          height1 = '90%'
          top = idx * 36
        }
        return {
          height: height1,
          type: 'pie',
          radius: [48, 73],
          top: top + '%',
          left: 'center',
          width: 900,
          itemStyle: {
            borderColor: '#ffffff',
            borderWidth: 1
          },
          grid: {},

          label: {
            normal: {
              alignTo: 'outside',
              formatter: '{time|{c} 户}',
              edgeDistance: 10,
              lineHeight: 10,
              rich: {
                time: {
                  fontSize: 14,
                  color: '#ffffff'
                }
              }
            }
          },
          labelLine: {
            normal: {
              show: true,
              length: 30,
              length2: 15,
              minSurfaceAngle: 90
            }
          },
          data: data
        }
      })
    }
    option && myChart.setOption(option)
  }
}

export default Binchart01
