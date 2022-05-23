<template>
  <div class="app-container">
 <canvas id="three"></canvas>
  </div>
</template>

<script>
import * as Three from "three";

export default {
  name: "login",
  // 注册组件
  components: {},
  created() {},
  mounted() {
    this.Render3D()
  },
  destroyed() {},
  data() {
    return {
      // 开关 open
      // 存储数据 table form
      //组件传值/引入值
    };
  },
  // 方法
  methods: {

    Render3D() {
    // 1、创建场景和摄像机    
    const scene = new Three.Scene()
   
    // 2、创建摄像机 PerspectiveCamera('视角', '指定投影窗口长宽比', '从距离摄像机多远开始渲染', '截止多远停止渲染100')
    const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 2, 1000)
    const canvas = document.querySelector('#three')
    // 3、创建ThreeJs 渲染器
   const renderer = new Three.WebGLRenderer({ canvas, antialias: true })
    // 设置渲染器场景大小
    renderer.setSize(window.innerWidth/3, window.innerHeight/3)
    // document.body.appendChild(renderer.domElement)  //主体渲染 不建议    
    // 创建几何模型 BoxGeometry('x轴', '轴', 'z轴')
    const geometry = new Three.BoxGeometry(2, 2, 2)
    // 创建纹理贴图
    // 添加材质
    const material = new Three.MeshBasicMaterial({ color: 0x00ff00 })
    // const material = new Three.MeshBasicMaterial({ map: texture })

    // 创建网格对象
    const cube = new Three.Mesh(geometry, material)
    // 添加到场景中去
    scene.add(cube)
  // 点光源
    var point = new Three.PointLight(0xffffff)
    point.position.set(400, 250, 300) // 点光源位置
    scene.add(point) // 点光源添加到场景中
    // 环境光
    var ambient = new Three.AmbientLight(0x22222)
    scene.add(ambient) // 环境光添加到场景中
    // 添加帧渲染
    const animate = () => {
      requestAnimationFrame(animate)

      // 网格旋转
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      // 渲染场景
      renderer.render(scene, camera)
    }

    animate()
    // 摄影机空间Z轴
    camera.position.z = 5

    // 自适应
    window.addEventListener('resize', () => {
      // 初始化摄像机
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      // 初始化渲染器尺寸
      renderer.setSize(window.innerWidth, window.innerHeight)
    })
  }
}
    // 数据获取 getItem(){}
    // 处理数据 handleItem(){}
    // 提交数据 submitForm(){}
    // 公共方法引入 myFun(){}
    // 混入方法/组件方法发射器 emit(){}
  
};
</script>

<style lang="scss" scoped>
.app-container {
}
</style>
