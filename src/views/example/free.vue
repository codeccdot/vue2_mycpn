<template>
  <el-table :data="tableData"
            :span-method="objectSpanMethodAuto"
            border
            style="width: 100%">
    <el-table-column prop="date"
                     label="日期"
                     width="180">
    </el-table-column>
    <el-table-column prop="name"
                     label="姓名"
                     width="180">
    </el-table-column>
    <el-table-column prop="address"
                     label="地址">
    </el-table-column>
  </el-table>
</template>
 
<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      rowIndexArr: []//存储合并单元格的开始位置
    }
  },
  methods: {
    // 假如我们现在要把相同日期的单元格合并，默认数据按照时间排序好
    objectSpanMethod ({ rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        // 里边的判断需要覆盖所有显示出来的单元格
        if (rowIndex === 0) {
          return {
            rowspan: 3,// 合并几列
            colspan: 1// 合并几行
          };
        }
        if (rowIndex === 3) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else if (rowIndex === 5) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else { // 这个是处理不显示的单元格（也就是删除的单元格），将他们删除掉，也可以说是删除占位，不写这个会把这些元素挤到其他位置，造成布局错乱
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    // 但是实际项目中，我们不可能知道每次需要合并的单元格的索引，就需要通过程序动态进行单元格合并
    objectSpanMethodAuto ({ rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        // 此时rowIndexArr存储了所有合并开始的点的索引，两个索引的差值，就是合并的项数
        if (this.rowIndexArr.includes(rowIndex)) {
          return {
            rowspan: this.rowIndexArr[this.rowIndexArr.indexOf(rowIndex) + 1] - rowIndex,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    getData () {
      // 模拟获取数据方法
      let res = this.tableData
      //获取到数据后，处理数据
      res.reduce((result, currentVal, currentIndex) => {
        // 将单元格合并的起始位0放到数组中
        // 每次出现两个日期不相等时，说明之前的日期是相等的，此时需要合并，保存这个拐点的index，作为下一个合并的开始位置
        if (result == 0 || result != currentVal.date) {
          this.rowIndexArr.push(currentIndex)
        }
        return currentVal.date
      }, 0)
      // 最后将数据的长度保存起来，目的是最后一次合并时，知道要合并多少条数据
      this.rowIndexArr.push(res.length)
      console.log(this.rowIndexArr)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>