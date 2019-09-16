<template>
  <!-- 酒店首页 -->
  <div>
    <el-container>
      <!-- 头部 -->
      <div class="breadcrumb">
        <headComponent  :data='hoteldata[0].real_city'/>
      </div>

      <!-- 地图 -->
      <mainbody :data="hoteldata[0].scenic" :loading="loading" />

      <!-- 筛选 -->
      <el-main>
        <hotelFilters />
        <hotelList :loading="loading"/>
      </el-main>

      <!-- 酒店 -->
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
// 引入头部组件
import headComponent from "@/components/hotel/headComponent.vue";
// 引入地图组件
import mainbody from "@/components/hotel/mainbody.vue";
// 引入筛选组件
import hotelFilters from "@/components/hotel/hotelFilters.vue";
// 引入酒店组件
import hotelList from "@/components/hotel/hotelList.vue";

export default {
  data() {
    return {
      hoteldata: [{ scenic: [0] ,real_city:''}],
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
    console.log(this.$route.query, "11");
    setTimeout(() => {
      this.$axios({
        url: `/hotels?&city=${this.$route.query.city}`,
        baseURL: "http://157.122.54.189:9095"
      }).then(res => {
        if(res.data.total!=0){
          this.hoteldata = res.data.data;
       }
      });
    });
  },
  watch: {
    $route() {
      this.loading = true;
      setTimeout(() => {
      this.$axios({
        url:  `/hotels?&city=${this.$route.query.city}`,
        baseURL: "http://157.122.54.189:9095",
        params:{
            price_lt:this.$route.query.price_lt
        }
      }).then(res => {
       if(res.data.total!=0){
          this.hoteldata = res.data.data;
       }
      });
      this.loading = false;
      }, 1500);
    }
  },
  components: {
    headComponent,
    mainbody,
    hotelFilters,
    hotelList
  }
};
</script>

<style lang='less' scoped>
.el-container {
  width: 1000px;
  margin: 0 auto;
}

// .el-header,
// /deep/ .el-footer {
//   background-color: #b3c0d1;
//   color: #333;
//   height: 1330px !important;
// }
/deep/ .el-footer {
  height: 30px !important;
}
// .el-aside {
//   background-color: #d3dce6;
//   color: #333;
//   text-align: center;
//   line-height: 200px;
// }

.el-main {
  // background-color: #E9EEF3;
  // color: #333;
  // text-align: center;
  // line-height: 160px;
  width: 100%;
  padding: 0px;
}

// body > .el-container {
//   margin-bottom: 40px;
// }

// .el-container:nth-child(5) .el-aside,
// .el-container:nth-child(6) .el-aside {
//   line-height: 260px;
// }

// .el-container:nth-child(7) .el-aside {
//   line-height: 320px;
// }
</style>