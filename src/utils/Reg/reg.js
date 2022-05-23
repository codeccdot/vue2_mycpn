
/**
 * 正则表达式
 * 当前内容 手机检验 邮箱检验
*/

class RegController {
  constructor() {
    this.regText = 'none'
  }
  // 检验函数类型type，检验数据data，条件condition
  entrance(type, data, condition = null) {
    switch (type) {
      case 'phone':
        this.phone(data, condition = null)
        break
      case 'email':
        this.checkEmail(data, condition = null)
        break
    }
  }
  // 检验num位电话有效性
  phone(data, condition) {
    // 默认13位，可自行设置
    if (condition !== null) {
      const { num } = condition
      if (data.length !== num) {
        return '号码位数不合法'
      }
    } else {
      const num = 11
      if (data.length !== num) {
        return '号码位数不合法'
      }
    }
    const reg = /^(13[0-9]|14[01,4-9]|15[0-3,5-9]|16[5-7]|17[0135678]|18[0-9]|19[189])\d{8}$/
    const res = reg.test(data)
    if (res === true) {
      console.log('合法手机号')
    //   return '合法手机号'
    } else {
      console.log('手机号不合法,请检验正确性')
    }
  }
  checkEmail(data, condition) {
    // 默认13位，可自行设置
    console.log(data)
    const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    const res = reg.test(data)
    if (res === true) {
      console.log('合法邮箱')
    } else {
      console.log('邮箱不合法,请检验正确性')
    }
  }
}

class BaseReg {
  constructor() {
    this.BaseReg = 'num'
  }
  AllNumber(data) {
    const reg = /^[0-9]*$/
    const res = reg.test(reg)
    console.log(res)
  }
}

module.exports = new RegController()
// const a = new RegController()
// const b = new BaseReg()
// const res = b.AllNumber(111111)

