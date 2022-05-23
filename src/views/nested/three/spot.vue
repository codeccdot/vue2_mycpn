<template>
  <v-app id="tags-view-container">
    <el-row style="color: white; float: left">
      <el-dropdown @command="add">
        <el-button type="primary">添加<i class="el-icon-arrow-down el-icon--right"/></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="box">立方体</el-dropdown-item>
          <el-dropdown-item command="sphere">球体</el-dropdown-item>
          <el-dropdown-item command="cylinder">圆柱</el-dropdown-item>
          <el-dropdown-item command="octahedron">正八面体</el-dropdown-item>
          <el-dropdown-item command="dodecahedron">正十二面体</el-dropdown-item>
          <el-dropdown-item command="icosahedron">正二十面体</el-dropdown-item>
          <el-dropdown-item command="customize">自定义</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-row>
    <div id="content"/>
  </v-app>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
export default {
  name: 'threejs',
  data() {
    return {
      scene: null, // 场景
      mesh: null, // 材质
      camera: null, // 相机
      renderer: null, // 渲染器
      controls: null, // 控件
      axesHelper: null, // 辅助三维坐标系
      materialColor: 0xffffff, // 材质对象颜色
      materialOpacity: 1, // 材质对象透明度
      clearColor: 0xDDDDDD // 背景色

    }
  },
  mounted() {
    // 初始化
    this.init()
    // 监听鼠标事件
    this.eventListener()
  },
  methods: {
    init() {
      // 创建场景
      this.createScene()

      // 创建光源
      this.createLight()

      // 创建相机对象
      this.createCamera()

      // 创建渲染器
      this.createRender()

      // 创建控件
      this.createControls()

      // 添加辅助坐标系、地面网格
      this.addHelper()

      // 执行渲染操作
      this.render()
    },

    /**
     * 创建场景
     */
    createScene() {
      this.scene = new THREE.Scene()
    },

    /**
     * 创建光源
     */
    createLight() {
      // 点光源
      var point = new THREE.PointLight(0xffffff)
      point.position.set(400, 250, 300) // 点光源位置
      this.scene.add(point) // 点光源添加到场景中
      // 环境光
      var ambient = new THREE.AmbientLight(0x444444)
      this.scene.add(ambient) // 环境光添加到场景中
    },

    /**
     * 创建相机
     */
    createCamera() {
      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
      this.camera.position.set(400, 300, 400) // 设置相机位置
      this.camera.lookAt(this.scene.position) // 设置相机方向(指向的场景对象)
    },

    /**
     * 创建渲染器
     */
    createRender() {
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight) // 设置渲染区域尺寸
      this.renderer.setClearColor(this.clearColor, 1) // 设置背景颜色
      document.getElementById('content').appendChild(this.renderer.domElement) // 元素中插入canvas对象
    },

    /**
     * 创建控件
     */
    createControls() {
      // 创建控件对象
      this.controls = new OrbitControls(this.camera, this.renderer.domElement)
      // 监听鼠标、键盘事件
      this.controls.addEventListener('change', this.render)
    },

    /**
     * 添加地面网格、辅助坐标系等...
     */
    addHelper() {
      // 辅助坐标系  参数表示坐标系大小，可以根据场景大小去设置
      this.axesHelper = new THREE.AxesHelper(250)
      this.scene.add(this.axesHelper)

      // 添加地面网格
      var gridHelper = new THREE.GridHelper(1000, 50, 0xb7b7b7, 0xababab)
      gridHelper.position.y = 0
      gridHelper.position.x = 0
      this.scene.add(gridHelper)
    },

    /**
     * 执行渲染操作
     */
    render() {
      this.renderer.render(this.scene, this.camera) // 执行渲染操作
    },

    /**
     * 增加几何体
     * @param type
     */
    add(type) {
      console.log('add ...')

      let geometry = null
      // 材质对象
      let material = material = new THREE.MeshLambertMaterial({
        color: this.materialColor,
        opacity: this.materialOpacity,
        transparent: true
      })

      // 立方体
      if (type === 'box') {
        geometry = new THREE.BoxGeometry(50, 50, 50)
        // 网格模型对象
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.translateY(50 / 2)
      }
      // 球体
      if (type === 'sphere') {
        geometry = new THREE.SphereGeometry(60, 40, 40)
        // 网格模型对象
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.translateY(40 / 2)
      }
      // 圆柱
      if (type === 'cylinder') {
        geometry = new THREE.CylinderGeometry(50, 50, 100, 25)
        // 网格模型对象
        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.translateY(100 / 2)
      }

      // 网格模型添加到场景中
      this.scene.add(this.mesh)
      this.render()
    },

    /**
     * 鼠标键盘监听事件
     */
    eventListener() {
      window.addEventListener('click', () => {
        console.log('on click')
      })
    }

  }
}
</script>

<style scoped>
#tags-view-container{
  padding: 10px;
  margin: 0;
}
</style>

