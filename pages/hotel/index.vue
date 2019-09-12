<template>
  <!-- 酒店首页 -->
  <div>
    <el-container>
      <!-- 头部 -->
      <div class="breadcrumb">
        <headComponent />
      </div>

      <!-- 地图 -->
        <mainbody/>

      <!-- 筛选 -->
      <el-main>Main</el-main>

      <!-- 酒店 -->
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// 引入头部组件
import headComponent from "@/components/hotel/headComponent.vue";
// 引入地图组件
import mainbody from '@/components/hotel/mainbody.vue'

export default {
  data() {
    return {};
  },

  components: {
    headComponent,mainbody
  }
};
</script>

<style lang='less' scoped>




  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>