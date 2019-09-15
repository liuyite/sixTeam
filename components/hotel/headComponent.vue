<template>
  <!-- 主体 -->
  <div class="container">
    <!-- 面包屑 -->
    <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item class="el-breadcrumb">酒店</el-breadcrumb-item>
      <el-breadcrumb-item class="el-breadcrumb">南京市酒店预订</el-breadcrumb-item>
    </el-breadcrumb>

    <!--  查看价格 -->
    <div class="el-form--inline" style="width:100%">
      <!-- 目的地 -->
      <el-row type="flex" justify="space-between" class="el-form-item">
        <el-col :span="6" class="el-form-item__content">
          <el-form ref="form">
            <el-form-item>
              <el-input placeholder="目的地"></el-input>
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
          ></el-date-picker>
        </el-col>

        <!-- 人数未定 -->
        <el-col :span="6" class="el-form-item__content">
          <el-form ref="form">
            <el-form-item>
              <el-input placeholder="人数为定" suffix-icon="el-icon-user-solid"></el-input>
            </el-form-item>

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
export default {};
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
.el-card__body {
  margin-top: 10px;
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
  width: 280px;
}
</style>