
import { renderblock } from '../json/block._json'

// class gameBase {
//   constructor() {
//     this.block = renderblock()
//   }
// }

class Game_eluosi {
  // eslint-disable-next-line constructor-super
  constructor() {
    this.row = 20 // 行
    this.col = 12 // 列
    this.typeList = ['S', 'T', 'J', 'O']
    this.renderArr = [] // 每次生成存储的方块
    this.timer = 0
    this.block = renderblock()
    this.init()
    this.flag = false // 阈值
    // this.chooseRandom()
  }
  // 初始化渲染
  init() {
    const obj = {
      row: this.row,
      col: this.col
    }
    return obj
  }
  // 获取随机方块参数
  chooseRandom() {
    let random = this.typeList[parseInt(this.typeList.length * Math.random())]
    random = String(random)
    return random
  }
  renderRandom() {
    // eslint-disable-next-line prefer-const
    let renderArr = []
    // eslint-disable-next-line prefer-const
    let block = this.block // 方块渲染参数
    // eslint-disable-next-line prefer-const
    let type = this.chooseRandom()
    let num
    // eslint-disable-next-line prefer-const
    for (let key in block) {
      if (key === type) {
        num = block[type][parseInt(block[type].length * Math.random())]
      }
    }
    const colCount = parseInt((this.col - 4) * Math.random())
    for (let i = 0; i < num.length; i++) {
      for (let j = 0; j < num[i].length; j++) {
        if (num[i][j] !== 0) {
          console.log(i, j)
          renderArr.push({ row: i, col: j + colCount })
        }
      }
    }
    return renderArr
  }
  // 渲染方块
  renderblock(renderArr, timer = 0, that) {
    console.log(renderArr, '存储')
    this.exRef = []
    this.renderArr = renderArr
    let row = ''
    let col = ''
    for (let i = 0; i < renderArr.length; i++) {
      row = renderArr[i].row + timer
      if (row > 20) {
        row = 20
      }
      col = renderArr[i].col // 初始随机第一行位置
      const ref = 'box' + row + '-' + col
      console.log(ref, '索引')
      that.$nextTick(() => {
        document.querySelector(`.${ref}`).setAttribute('style', 'background-color: red;')
      })
    }
  }
  clearBlock(renderArr, timer = 0, that) {
    // console.log(renderArr, '存储')
    this.exRef = []
    this.renderArr = renderArr
    let row = ''
    let col = ''
    if (row > 20) {
      row = 20
    }
    for (let i = 0; i < renderArr.length; i++) {
      row = renderArr[i].row + timer - 2
      col = renderArr[i].col // 初始随机第一行位置
      const ref = 'box' + row + '-' + col
      console.log(ref, '上一次索引')
      that.$nextTick(() => {
        document.querySelector(`.${ref}`).setAttribute('style', 'background-color: white;')
      })
    }
  }
  // 设置定时器 进行移动
  goDown(that) {
    const maxRow = this.getRowMax(this.renderArr, 'row', this.timer)
    if (maxRow >= 20) {
      return false
    }
    console.log(maxRow, 'row')
    this.timer = this.timer + 1
    this.flag = true
    if (this.flag === true) {
      this.clearBlock(this.renderArr, this.timer, that)
    }
    this.renderblock(this.renderArr, this.timer, that)
  }
  // 获得方块row渲染最大值
  getRowMax(renderArr, key, timer) {
    const max = Math.max(...renderArr.map((item) => { return item[key] + timer + 1 }))
    return max
  }
  reset() {
    this.renderArr = []
    this.flag = false // 阈值
    this.timer = 0
  }
}

export default Game_eluosi
// const a = new Game_eluosi()
// a.renderRandom()

