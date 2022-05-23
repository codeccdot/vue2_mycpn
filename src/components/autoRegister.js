// 自动注册
import Vue from 'vue'

const requireComponent = require.context(
// 全局组件自动加载注册：在components / 新建global文件夹（放置全局组件）
  './global',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\.vue$/
)

requireComponent.keys().forEach(fileName => {
// 获取组件配置
  const componentConfig = requireComponent(fileName)

  // 全局注册组件
  Vue.component(
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default.name || componentConfig.name,
    componentConfig.default || componentConfig
  )
})

