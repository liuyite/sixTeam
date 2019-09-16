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
          <el-select v-model="hotelLevel" placeholder="不限" @change="handlehotle_levels">
            <el-option
              v-for="(item,index) in form.levels"
              :key="index"
              :label="item.name"
              :value="item.level"
            ></el-option>
          </el-select>
        </div>
      </el-col>

      <!-- 类型 -->
      <el-col :span="6" style="padding-left:20px;padding-right:20px;border-right: 1px solid #ddd;">
        <div class="htb_text">住宿类型</div>
        <div>
          <el-select v-model="hotelTypes" placeholder="不限" @change="handlehotel_type">
            <el-option
              v-for="(item,index) in form.types"
              :key="index"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
      </el-col>

      <!-- 设施 -->
      <el-col :span="6" style="padding-left:20px;padding-right:20px;border-right: 1px solid #ddd;">
        <div class="htb_text">住宿设施</div>
        <div>
          <el-select v-model="hotelAssets" placeholder="不限" @change="handlehotel_assets">
            <el-option
              v-for="(item,index) in form.assets"
              :key="index"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
      </el-col>

      <!-- 品牌 -->
      <el-col :span="6" style="padding-left:20px;padding-right:20px;">
        <div class="htb_text">住宿品牌</div>
        <div>
          <el-select v-model="hotelBrands" placeholder="不限" @change="handlehotel_brands">
            <el-option
              v-for="(item,index) in form.brands"
              :key="index"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
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

      hotelLevel: "",
      hotelTypes: "",
      hotelAssets: "",
      hotelBrands: "",
      form: {
        // levels: [], // 酒店等级
        // types: [], // 酒店类型
        // assets: [], // 酒店设施
        // brands: [] // 酒店品牌
      },
      hotelForm: {}
    };
  },
  methods: {
    // 实时过程改变
    inputSlider(val) {
      this.prices = val;
    },
    //失去焦点时触发
    changeSlider(val) {
      this.hotelForm.price_lt = this.prices;
      this.$router.push({
        url: "/hotel",
        query: this.hotelForm
      });
    },
    //住宿等级
    handlehotle_levels(value) {
      this.hotelForm.hotellevel = value;
      this.$router.push({
        url: "/hotel",
        query: this.hotelForm
      });
    },
    //住宿类型
    handlehotel_type(value) {
      this.hotelForm.hoteltype = value;
      this.$router.push({
        url: "/hotel",
        query: this.hotelForm
      });
    },
    // 住宿设施
    handlehotel_assets(value) {
      this.hotelForm.hotelasset = value;
      this.$router.push({
        url: "/hotel",
        query: this.hotelForm
      });
    },
    // 住宿品牌
    handlehotel_brands(value) {
      this.hotelForm.hotelbrand = value;
      this.$router.push({
        url: "/hotel",
        query: this.hotelForm
      });
    }
  },

  mounted() {
    // 发送axios请求
    //获取筛选
    this.hotelForm.city = this.$route.query.city;
    this.$axios({
      url: "/hotels/options"
    }).then(res => {
      // console.log(res, 11);
      // const { hotelassets, hotelbrand, hotellevel, hoteltype } = res.data.data;
      this.form = res.data.data;
      // console.log(this.form, 234);
    });
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
  text-align: center;
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
.handleselect {
  border: 1px solid #fff;
}
</style>