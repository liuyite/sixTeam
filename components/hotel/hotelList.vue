<template>
  <div class="hotel">
    <div class="container" v-loading="loadings">
      <el-row
        type="flex"
        justify="space-between"
        class="hotelItem"
        v-for="(item,index) in hotelData"
        :key="index"
      >
        <el-col class="images" :span="8">
          <img :src="item.photos" alt />
        </el-col>
        <el-col class="message" :span="10">
          <h4 class="hotel_cn-name">
            <nuxt-link :to="`/hotel/1?id=${item.id}`">{{item.name}}</nuxt-link>
          </h4>
          <div class="level" v-if="item.hotellevel">
            <span class="hotel_en_name">{{item.alias}}l</span>
            <span v-for="(item1,index1) in item.hotellevel.level" :key="index1">
              <el-tooltip
                class="item"
                effect="light"
                :content="item.hotellevel.name"
                placement="bottom"
              >
                <i
                  class="iconfont iconhuangguan"
                  v-if="index1>=0"
                  style="font-size:16px;line-height:21px;"
                ></i>
              </el-tooltip>
            </span>
            <span class="hotel_type">{{item.hoteltype.name}}</span>
          </div>
          <!-- 星星·评论·游记 -->
          <el-row type="flex" justify="space-between">
            <!-- 星星 -->
            <el-col class="startbox" :span="10">
              <el-rate v-model="item.stars" disabled show-score text-color="#ff9900"  score-template="{value} 分"></el-rate>
            </el-col>
            <!-- 评价 -->
            <el-col class="comment" :span="7">
              <i>{{item.Nall_remarks}}</i>
              <span>条评价</span>
            </el-col>
            <!-- 游记 -->
            <el-col class="notes" :span="7">
              <i>17</i>
              <span>篇游记</span>
            </el-col>
          </el-row>
          <!-- 位置 -->
          <el-row class="location">
            <i class="iconfont iconlocation">
              <span>{{item.address}}</span>
            </i>
          </el-row>
        </el-col>

        <!-- 右侧 -->
        <el-col class="web_price" :span="6">
          <div>
            <a :href="`https://hotels.ctrip.com/hotel/694679.html`"  v-for="(item2,index2) in item.products"
            :key="index2">
            <el-row class="recommend">
              <el-col :span="12">{{item2.name}}</el-col>
              <el-col :span="12">
                  <span style="color:orange;" class="hotel_price">￥{{item2.price}}</span>
                  起
              </el-col> 
            </el-row>
          </a>
          </div>
        </el-col>
      </el-row>
        <el-row class="block">
        <el-pagination
         prev-text=" < 上一页" 
         next-text="下一页 > " 
         layout="prev, pager, next" 
         :total="total" 
         class="paging  " 
        :page-sizes="[10]"
        :page-size="10"
        :current-page="pageIndex"
         @current-change="handleCurrentChange"
         ></el-pagination>
        </el-row>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loadings:'',
      // value: 3.5,
      productData: [],
      hotelData: [
        {
          hotellevel: {},
          hoteltype: {}
          // products:{}
        }
      ],
      //总条数
      total:0,
      //当前页
      pageIndex:1,
      urlObj:{}
    };
  },
  methods: {
    handleCurrentChange(val){
      // console.log(val)
      this.pageIndex = val
      this.init();
    },
    rowclick(val) {
      // console.log(val);
      this.$router.push(val);
    },
    init(){
      this.loadings = true;
      this.urlObj._start=10*(this.pageIndex-1);
      this.urlObj._limit=10;
      setTimeout(()=>{
      this.loadings = false;
      },1500)
      this.$axios({
        url: `hotels`,
         baseURL: "http://157.122.54.189:9095",
        method: "get",
        params:this.urlObj
      }).then(res => {
        this.hotelData = res.data.data;
        // console.log(this.hotelData)
        // console.log(this.hotelData[0]);
        this.productData = res.data.data.products;
        // console.log(res);
        this.total=res.data.total;
        // console.log(this.total)

      });
    }
  },
  watch:{
    $route(){
      this.urlObj = this.$route.query
      this.init();
    }
  },
  mounted() {
    // console.log("hotels?&city=this.$route.query.city")
    setTimeout(() => {
      this.loadings = this.loading
      this.init();
    }, 20);
  }
};
</script>

<style scoped lang="less">
.container {
  margin: 0 auto;
  width: 1000px;
}
.hotelItem {
  padding: 25px 0;
  border-bottom: 1px solid #eeeeee;
  .images {
    width: 320px;
    height: 210px;
    img {
      width: 320px;
      height: 210px;
    }
  }
}
.message {
  position: relative;
  margin-left: 20px;

  .hotel_cn-name {
    font-size: 24px;
    font-weight: normal;
  }
  .bright {
    .el-rate__item {
      cursor: auto;
    }
    position: absolute;
    left: 0;
    top: 52px;
    overflow: hidden;
    i {
      font-size: 18px;
    }
  }
}
.level {
  margin-bottom: 8px;
  .hotel_en_name {
    color: #999;
  }
  span {
    i {
      font-size: 18px;
      color: rgb(247, 186, 42);
    }
  }
}
.location {
  color: #666;
  span {
    font-size: 14px;
  }
}
.el-table__row {
  margin-top: 20px;
  /deep/.el-table_9_column_18 {
    color: #ff9900;
  }
}

.comment {
  > i {
    color: #ff9900;
  }
}
.notes {
  > i {
    color: #ff9900;
  }
}
/deep/.btn-prev {
  display: inline-block;
  line-height: 1;
  border: 1px solid #dcdfe6;
  background: #fff;
  color: #606266;
  border-radius: 3px;
  font-size: 12px;
  align-content: center;
}

/deep/.btn-next {
  display: inline-block;
  line-height: 1;
  border: 1px solid #dcdfe6;
  background: #fff;
  color: #606266;
  border-radius: 3px;
  font-size: 12px;
  align-content: center;
}
.block{
  display:block;
  width: 1000px;
  overflow: hidden;
  padding:20px 0 40px 0;
  position: relative;
  .paging{
    float: right;
  }
}
.recommend{
  padding: 12px 0;
  border-bottom: 1px solid #ebeef5;
}
</style>