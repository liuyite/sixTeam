<template>
  <div class="filters">
    <!-- 筛选 -->
    <el-row type="flex" justify="space-between" class="filters-top">
      <!-- 滑块 -->
      <el-col
        :span="8"
        class="htb-title"
        style="padding-left:20px;padding-right:20px;border-right: 1px solid #ddd;"
        v-model="prices"
      >
        <div class="hotel_num">
          <span>价格</span>
          <span>¥0-{{prices}}</span>
        </div>
        <el-slider v-model="prices" :max="4000" @change="changeSlider" @input="inputSlider"></el-slider>
      </el-col>

      <!-- 等级 -->
      <el-col :span="6" style="padding-left:20px;padding-right:20px;border-right: 1px solid #ddd;">
        <div class="htb_text">住宿等级</div>
        <div>
          <el-dropdown>
            <span class="el-dropdown-link">
              不限
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" v-model="grade" @click="handlehotle_grade"></el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>

      <!-- 类型 -->
      <el-col :span="6" style="padding-left:20px;padding-right:20px;border-right: 1px solid #ddd;">
        <div class="htb_text">住宿类型</div>
        <div>
          <el-dropdown>
            <span class="el-dropdown-link">
              不限
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" v-model="type" @change="handlehotel_type"></el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>

      <!-- 设施 -->
      <el-col :span="6" style="padding-left:20px;padding-right:20px;border-right: 1px solid #ddd;">
        <div class="htb_text">住宿设施</div>
        <div>
          <el-dropdown>
            <span class="el-dropdown-link">
              不限
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" v-model="facility" @change="handlehotel_facility"></el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>

      <!-- 品牌 -->
      <el-col :span="6" style="padding-left:20px;padding-right:20px;">
        <div class="htb_text">住宿品牌</div>
        <div>
          <el-dropdown>
            <span class="el-dropdown-link">
              不限
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" v-model="brand" @click="handlehotel_brand"></el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prices: 4000,
      grade: "", //等级
      type: "", //类型
      facility: "", //设施
      brand: "" //品牌
    };
  },
  methods: {
    // 实时过程改变
    inputSlider(val) {
      this.prices = val;
    },
    //失去焦点时触发
    changeSlider(val) {
      this.$router.push(`/hotel?city=74&price_lt=${this.prices}`);
    },
    //住宿等级
    handlehotle_grade(value) {
      this.$axios({
        url: "/hotels",
        baseURL: "http://157.122.54.189:9095"
      }).then(res => {
        console.log(res,'123');
      });
    },
    //住宿类型
    handlehotel_type() {},
    // 住宿设施
    handlehotel_facility() {},
    // 住宿品牌
    handlehotel_brand() {}
  }
};
</script>

<style lang='less' scoped>
.filters {
  border: 1px solid #ddd;
  color: #666;
  padding: 5px 0;
  //   height: 80px;
  //   width: 1000px;
  //   margin: 0 auto;
}
.htb-title {
  margin-bottom: 10px;
  //   font-size: 14px;
  //   height: 3px;
  //   background-color: #dec0e0;
  //   border: 0;
  //   float: right;
}
.htb_text {
  margin-bottom: 10px;
  font-size: 14px;
  //border-right: 1px solid #ddd;
}
.hotel_num {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
.el-dropdown-link {
  flex: 1;
  font-size: 13px;
}
</style>