// VUE3 原理 proxy
function reactive(obj) {
  const handler = {
    get(target, prop, receiver) {
      const value = Reflect.get(...arguments)
      if (typeof value === 'object') {
        return reactive(value)
      } else {
        return value
      }
    },
    set(target, key, value, receiver) {
      return Reflect.set(...arguments)
    }
  }
  return new Proxy(obj, handler)
}

const obj1 = {
  name: '小丽'
}
const proxy = reactive(obj1)
proxy.name = '小明'
proxy.list = []
console.log(obj1)
