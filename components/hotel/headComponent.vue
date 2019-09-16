<template>
  <!-- 主体 -->
  <div class="container">
    <!-- 面包屑 -->
    <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item class="el-breadcrumb">酒店</el-breadcrumb-item>
      <el-breadcrumb-item class="el-breadcrumb">{{form.departCity}}酒店预订</el-breadcrumb-item>
    </el-breadcrumb>

    <!--  查看价格 -->
    <div class="el-form--inline" style="width:100%">
      <!-- 目的地 -->
      <el-row type="flex" justify="space-between" class="el-form-item">
        <el-col :span="6" class="el-form-item__content">
          <el-form class="search-form-content" ref="form">
            <el-form-item>
              <!-- 文档地址：https://element.eleme.cn/#/zh-CN/component/input#yuan-cheng-sou-suo -->
              <!-- fetch-suggestions: 获取搜索建议，并且显示在输入框的下拉框中 -->
              <!-- select：在下拉框中选中时候时候触发的事件 -->
              <el-autocomplete
                :fetch-suggestions="queryDepartSearch"
                placeholder="目的地"
                @select="handleDepartSelect"
                class="el-autocomplete"
                v-model="form.departCity"
              ></el-autocomplete>
            </el-form-item>
          </el-form>
        </el-col>

        <!-- 入住时间 -->
        <el-col :span="10" class="el-form-item__content">
          <el-date-picker
            type="daterange"
            range-separator="-"
            start-placeholder="入住日期"
            end-placeholder="离店日期"
            v-model="value"
          ></el-date-picker>
        </el-col>

        <!-- 人数未定 -->
        <el-col :span="6" class="el-form-item__content">
          <el-form ref="form">
            <el-form-item>
              <el-input
                placeholder="人数为定"
                suffix-icon="el-icon-user-solid"
                style="padding-bottom:12px"
                @focus="isshow=!isshow"
                v-model="adultAndChildren"
              ></el-input>
            </el-form-item>

            <!-- 卡片 -->
            <el-card class="box-card" v-show="isshow">
              <div slot="header" class="clearfix" @click="handleCard">
                <span style="padding-left:5px;padding-right:30px;">每间:</span>
                <el-select
                  v-model="value1"
                  style="padding-left:5px;padding-right:5px;width:88px;"
                  size="mini"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in options1"
                    :key="item.value1"
                    :label="item.label1"
                    :value="item.value1"
                  >
                    <!-- 左边显示默认值 -->
                    <span style="float: left">{{ item.value1 }}</span>
                  </el-option>
                </el-select>

                <el-select
                  v-model="value2"
                  style="padding-left:5px;padding-right:5px;width:88px;"
                  size="mini"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in options2"
                    :key="item.value2"
                    :label="item.label2"
                    :value="item.value2"
                  >
                    <!-- 左边显示默认值 -->
                    <span style="float: left">{{ item.value2 }}</span>
                  </el-option>
                </el-select>
              </div>
              <!-- <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div> -->

              <!-- 下拉列表 -->
              <el-button
                size="mini"
                round
                style="background-color:#409eff;color:#fff;cursor: pointer;margin-left:200px"
                @click="handlebutton"
              >确认</el-button>
            </el-card>

            <!-- 人数 -->
          </el-form>
        </el-col>

        <!-- 查看价格 -->
        <el-col :span="2" class="el-form-item__content">
          <el-button type="primary">查看价格</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      form: {
        departCity: "",
        city: "" //出发城市
      },
      hotel: "",
      value: "",
      person: "",
      adultAndChildren: "",
      // 下拉菜单
      options1: [
        {
          value1: 1,
          label1: "1成人"
        },
        {
          value1: 2,
          label1: "2成人"
        },
        {
          value1: 3,
          label1: "3成人"
        },
        {
          value1: 4,
          label1: "4成人"
        },
        {
          value1: 5,
          label1: "5成人"
        },
        {
          value1: 6,
          label1: "6成人"
        }
      ],
      options2: [
        {
          value2: 0,
          label2: "0儿童"
        },
        {
          value2: 1,
          label2: "1儿童"
        },
        {
          value2: 2,
          label2: "2儿童"
        },
        {
          value2: 3,
          label2: "3儿童"
        },
        {
          value2: 4,
          label2: "4儿童"
        }
      ],
      value1: 1,
      value2: 0,
      isshow: false
    };
  },
  mounted() {
    setTimeout(() => {
      if (!this.data) {
        this.form.departCity = "南京市";
      } else {
        this.form.departCity = this.data;
      }
    }, 200);
  },
  methods: {
    //点击按钮
    handlebutton() {
      this.adultAndChildren = `${this.value1}成人`;
      this.person = this.value1;
      if (this.value2) {
        this.adultAndChildren += ` ${this.value2}儿童`;
        this.person = this.value2;
      }
      this.isshow = false;
    },
    // 卡片下拉
    handleCard() {},
    // 出发城市下拉时触发
    // Select-点击选中建议项时触发
    handleDepartSelect(item) {
      // console.log(item);
      //   出发地名字
      this.form.departCity = item.value;
      this.form.city = item.id;
      this.$router.push(`/hotel?city=${this.form.city}`);
      this.hotel = item.value;
    },
    queryDepartSearch(value, callback) {
      // 聚焦不会下拉列表
      // console.log(value);
      if (!value) {
        //空值不出现下拉
        callback([]);
        return;
      }
      //发送axios请求
      this.$axios({
        url: "/cities",
        // get发送
        params: { name: value }
      }).then(res => {
        // console.log(res);
        // 解构data

        // 遍历数组渲染
        // this.form = res.data;

        const { data } = res.data;
        // 构造新数组
        const newdata = [];
        // 遍历数组
        data.forEach(v => {
          // 添加value属性
          // 替换后面的市为空
          v.value = v.name;
          //带有value的属性加到data
          //推送到value
          newdata.push(v);
        });
        callback(newdata);
      });
    },
    // 出发--离开日期
    hanglehoteldate() {}
  }
};
</script>

<style lang='less' scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  // 面包屑内容
  .breadcrumb {
    overflow: hidden;
    padding: 20px 0;
  }
  .el-breadcrumb {
    font-size: 12px;
    line-height: 1;
  }
  .el-breadcrumb-item {
    float: left;
  }
  .el-breadcrumb__inner {
    color: #606266;
  }
  .el-breadcrumb__separator {
    margin: 0 6px;
    font-weight: 400;
  }
}
// 查看价格
.el-form--inline {
  margin: 0;
  padding: 0;
  .el-form-item {
    display: inline-block;
    margin-right: 10px;
    vertical-align: top;
  }
  .el-form-item__content {
    display: inline-block;
    vertical-align: top;
  }
  .el-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}
// 人数未定
/deep/ .el-card__body {
  margin-top: 10px;
  padding: 5px 0;
}
// 入住时间
.el-range-editor.el-input__inner {
  // display: inline-block;
  align-items: center;
  padding: 5px 10px;
}
// 卡片样式
.text {
  font-size: 12px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 300px;
  // padding-top:
  // z-index: 9999;
  position: absolute;
  z-index: 2001;
  // top: 154px;
  // left: 573px;
  // transform-origin: center top;
}
</style>