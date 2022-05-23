/**
 *params 数组去重
 */
class UniqueArr {
  /* 暴力破解*/
  unique01(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1)
          j--
        }
      }
    }
    return arr
  }

  unique02(arr) {
    const res = []
    arr.forEach((item) => {
      if (!res.includes(item)) {
        res.push(item)
      }
    })
    return res
  }

  unique03(arr) {
    const res = Array.from(new Set(arr))
    return res
  }

  unique04(arr) {
    const map = new Map()
    for (const n of arr) map.set(n)
    const res = Array.from(map).map((item) => item[0])
    console.log(res)
    return res
  }

  unique05(array) {
    return array.filter((item, index, arr) => arr.indexOf(item) === index)
  }

  unique06(arr) {
    return arr.reduce((res, item, index, arr) => {
      if (!res.includes(item)) res.push(item)
      return res
    }, [])
  }
}

module.exports = new UniqueArr()
