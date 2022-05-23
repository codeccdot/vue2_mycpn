<template>
 <div class="app-container">
    <el-row><h3>导出文件类型</h3></el-row>
    <el-button @click="sendWord" type="primary" >下载word</el-button>
    <el-button @click="sendExcel" type="primary" >下载excel</el-button> 
    <el-row><h3>导出文件代码</h3></el-row>
    <el-button @click="isexported">导出demo</el-button>
    <el-dialog
    title="导出代码"
    :visible.sync="exportOpen"
    width="60%"
    :before-close="handleClose">
    <span class="key-word">导出需求为:可以根据后台的文件名定义文件名,根据blob来修改文件接受类型</span>
    <p>代码如下</p>
    <pre>
    handleUpload() {
      let obj = {
        startTime: this.queryParams.startTime,
        endTime: this.queryParams.startTime
      };
      const url = '/api/returnExcel'
      this.$confirm('是否确认导出下列所有标签?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        axios.get(url, obj, {
          responseType: 'arraybuffer',
          xsrfHeaderName: 'Authorization',
          headers: {
            'Content-Type': 'application/json',
            'token': getToken()
          },
        }).then(res => {
          // const fileNameEncode = res.headers.get('content-disposition').split('filename=')[1]
          // const fileName = decodeURIComponent(fileNameEncode)
          let fileName = res.headers['content-disposition'].split('filename=')[1];
          fileName = decodeURIComponent(fileName)
          console.log(fileName)
          const blob = new Blob([res.data], {
             type: `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8` 
          })
          const file = `${fileName}`
          const link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = file
          link.click()
           Message.success({
            message: '导出成功！'
          })
          window.URL.revokeObjectURL(link.href)
        })
      }).catch(err => {
        Message.error({
          message: err+"请重新选择！"
        })
        that.exportOpen = false
      })
    }
    </pre>

   </el-dialog>
 
  </div>
</template>

<script>
export default {
  data() {
    return {
      exportOpen:false,
      filterText: "",
      
  }
  },
  watch: {
    filterText(val) {
      this.$refs.tree2.filter(val);
    },
  },

  methods: {
    sendWord() {
      window.location.href = "http://localhost:8081/api/bdz_tem/exportWord"
      // this.$Axios.get("http://localhost:8081/api/bdz_tem/exportWord").then(
      //   (res) => {
      //     console.log(res)
      //     var blob = new Blob([res.data], {
      //       type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8",
      //     }); //application/vnd.openxmlformats-officedocument.wordprocessingml.document这里表示doc类型
      //     var downloadElement = document.createElement("a");
      //     var href = window.URL.createObjectURL(blob); //创建下载的链接
      //     downloadElement.href = href;
      //     downloadElement.download = "11" + ".docx"; //下载后文件名
      //     document.body.appendChild(downloadElement);
      //     downloadElement.click(); //点击下载
      //     document.body.removeChild(downloadElement); //下载完成移除元素
      //     window.URL.revokeObjectURL(href); //释放掉blob对象
      //   }
      // );
    },
    sendExcel(){
      // window.location.href = "http://localhost:8081/api/bdz_tem/exportWord"
    },
    isexported(){
       this.exportOpen = true
    }
    
    
  },
};
</script>

<style lang="scss" scoped>
.key-word{
  color:red
}
</style>
