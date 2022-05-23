import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example',
    name: 'Example',
    meta: { title: '示例展示', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'book',
        name: 'Book',
        component: () => import('@/views/example/search'),
        meta: { title: '组件：搜索框', icon: 'form' }
      },
      {
        path: 'binchart',
        name: 'chart',
        component: () => import('@/views/example/book'),
        meta: { title: '饼图', icon: 'form' }
      },
    ]
  },

  {
    path: '/demo',
    component: Layout,
    children: [
      {
        path: 'download',
        name: 'Form',
        component: () => import('@/views/download/download'),
        meta: { title: '后台下载demo', icon: 'form' }
      }
    ]
  },
  {
    path: '/demo2',
    component: Layout,
    meta: { title: "功能组件demo" },
    name:"功能组件demo",
    children: [
      {
        path: 'swiper',
        name: 'Form',
        component: () => import('@/views/download/swiper'),
        meta: { title: '轮播图demo', icon: 'form' }
      },
      {
        path: 'lazy_img',
        name: 'Form',
        component: () => import('@/views/download/lazy_img'),
        meta: { title: '图片懒加载', icon: 'form' }
      },
      {
        path: 'chat',
        name: 'chat',
        component: () => import('@/views/download/chat'),
        meta: { title: '聊天室', icon: 'form' }
      },
      {
        path: 'screen',
        name: 'chat',
        component: () => import('@/views/download/bigScreen'),
        meta: { title: '大屏', icon: 'form' }
      },
      {
        path: 'game01',
        name: "俄罗斯方块",
        component: () => import('@/views/download/game01.vue'),
        meta: { title: '俄罗斯方块', icon: 'form' }
      },
    ]
  },
  {
    path: '/menu1',
    component: Layout,
    name: 'echart',
    meta: { title: 'echart' },
    redirect: '/menu1/barchart',
    children: [
      {
        path: 'barchart',
        component: () => import('@/views/nested/menu1/barchart'),
        name: 'Menu1-1',
        meta: { title: '条形图' }
      },
      {
        path: 'dotchart',
        component: () => import('@/views/nested/menu1/dotchart'),
        name: 'Menu1-2',
        meta: { title: '折线图' }
      },
      {
        path: 'map',
        component: () => import('@/views/nested/menu1/map/index.vue'),
        name: 'Menu1-2',
        meta: { title: '中国地图' }
      },
      {
        path: 'huizhoumap',
        component: () => import('@/views/nested/menu1/hzMap/index.vue'),
        name: 'Menu1-2',
        meta: { title: '惠州地图' }
      }
    ]
  },
  {
    path: '/menu3',
    component: Layout,
    name: 'echart',
    meta: { title: '百度地图' },
    redirect: '/menu1/barchart',
    children: [
      {
        path: 'huizhou',
        component: () => import('@/views/baiduMap/setPosition.vue'),
        name: 'Menu1-1',
        meta: { title: '可定位' }
      },
      {
        path: 'guangdong',
        component: () => import('@/views/baiduMap/choosePoint.vue'),
        name: 'Menu1-1',
        meta: { title: '搜索列表' }
      },
    ]
  },
  {
    path: '/menu2',
    component: Layout,
    name: 'three3D',
    meta: { title: 'three3D' },
    redirect: '/menu1/barchart',
    children: [
      {
        path: 'cube',
        component: () => import('@/views/nested/three/cube'),
        name: 'Menu1-1',
        meta: { title: '立方体' }
      },
      {
        path: 'spot',
        component: () => import('@/views/nested/three/spot'),
        name: 'Menu1-1',
        meta: { title: '场景渲染' }
      },
    ]
  },


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
