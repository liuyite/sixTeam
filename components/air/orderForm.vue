<template>
    <div class="main">
        <div class="air-column">
            <h2>乘机人</h2>
            <el-form class="member-info">
                <div class="member-info-item" v-for="(item,index) in users" :key="index">
                    <el-form-item label="乘机人类型">
                        <el-input
                            placeholder="姓名"
                            class="input-with-select"
                            v-model="item.username"
                        >
                            <el-select slot="prepend" value="1" placeholder="请选择">
                                <el-option label="成人" value="1"></el-option>
                            </el-select>
                        </el-input>
                    </el-form-item>

                    <el-form-item label="证件类型">
                        <el-input placeholder="证件号码" class="input-with-select" v-model="item.id">
                            <el-select slot="prepend" value="1" placeholder="请选择">
                                <el-option label="身份证" value="1" :checked="true"></el-option>
                            </el-select>
                        </el-input>
                    </el-form-item>

                    <span class="delete-user" @click="handleDeleteUser(index)">-</span>
                </div>
            </el-form>

            <el-button class="add-member" type="primary" @click="handleAddUsers">添加乘机人</el-button>
        </div>

        <div class="air-column">
            <h2>保险</h2>
            <div>
                <div
                    class="insurance-item"
                    v-for="(item, index) in formData.insurances"
                    :key="index"
                >
                    <el-checkbox
                        :label="`${item.type}：￥${item.price}/份×1  最高赔付${item.compensation}`"
                        border
                        @change="insuranceChange(item.id)"
                    ></el-checkbox>
                </div>
            </div>
        </div>

        <div class="air-column">
            <span v-show="false">{{allprice}}</span>
            <h2>联系人</h2>
            <div class="contact">
                <el-form label-width="60px">
                    <el-form-item label="姓名">
                        <el-input v-model="contactName"></el-input>
                    </el-form-item>

                    <el-form-item label="手机">
                        <el-input placeholder="请输入内容" v-model="contactPhone">
                            <template slot="append">
                                <el-button @click="handleSendCaptcha">发送验证码</el-button>
                            </template>
                        </el-input>
                    </el-form-item>

                    <el-form-item label="验证码">
                        <el-input v-model="captcha"></el-input>
                    </el-form-item>
                </el-form>
                <el-button type="warning" class="submit" @click="handleSubmit">提交订单</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                seat_infos: {}
            },
            users: [
                {
                    username: "",
                    id: ""
                }
            ],
            insurances: [],
            contactName: "",
            contactPhone: "",
            invoice: false,
            captcha: ""
        };
    },
    computed: {
        allprice() {
            let price = this.formData.seat_infos.org_settle_price;
            price += 30 * this.insurances.length;
            price += this.formData.airport_tax_audlet;
            price *= this.users.length;
            this.$store.commit("air/setAllPrice", price);
        }
    },
    mounted() {
        let { id, seat_xid } = this.$route.query;
        this.$axios({
            url: `/airs/${id}`,
            params: { seat_xid }
        }).then(res => {
            if (res.status === 200) {
                console.log(res);
                this.formData = res.data;
                this.$store.commit("air/setFormData", res.data);
            }
        });
    },
    methods: {
        //点击保险功能
        insuranceChange(id) {
            let index = this.insurances.indexOf(id);
            if (index < 0) {
                this.insurances.push(id);
            } else {
                this.insurances.splice(index, 1);
            }
        },
        // 添加乘机人
        handleAddUsers() {
            this.users.push({ username: "", id: "" });
        },

        // 移除乘机人
        handleDeleteUser(index) {
            this.users.splice(index, 1);
            console.log(this.users);
        },

        // 发送手机验证码
        handleSendCaptcha() {
            this.$axios({
                url: "/captchas",
                method: "post",
                data: { tel: this.contactPhone }
            }).then(res => {
                console.log(res);
                this.$message.success(res.data.code);
            });
        },

        // 提交订单
        handleSubmit() {
            if (this.users[0].username === "" || this.users[0].id === "") {
                this.$message.error("乘车人信息不能为空");
                return false;
            } else if (this.contactName === "") {
                this.$message.error("联系人姓名不能为空");
                return false;
            } else if (this.contactPhone === "") {
                this.$message.error("联系人手机不能为空");
                return false;
            } else if (this.captcha === "") {
                this.$message.error("验证码不能为空");
                return false;
            }
            let { id, seat_xid } = this.$route.query;
            const data = {
                users: this.users,
                insurances: this.insurances,
                contactName: this.contactName,
                contactPhone: this.contactPhone,
                invoice: this.invoice,
                captcha: this.captcha,
                seat_xid: seat_xid,
                air: id
            };
            this.$axios({
                url: "/airorders",
                method: "post",
                headers: {
                    Authorization: `Bearer ${this.$store.state.user.userInfo.token}`
                },
                data
            })
                .then(res => {
                    if (res.status === 200) {
                        this.$message.success("提交成功！");
                        this.$router.push(`/air/pay?id=${res.data.data.id}`);
                    }
                })
                .catch(() => {
                    this.$message.error("请先登录！！！");
                });
        }
    }
};
</script>

<style scoped lang="less">
.air-column {
    border-bottom: 1px #ddd dashed;
    padding-bottom: 20px;
    margin-bottom: 20px;
}

.air-column h2 {
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: normal;
}

/deep/ .el-select .el-input {
    width: 130px;
}

.input-with-select {
    width: 590px;
}

.input-with-select /deep/ .el-input-group__prepend {
    background-color: #fff;
}
.member-info /deep/ .el-form-item {
    margin-bottom: 0;
}

.member-info-item {
    border-bottom: 1px #eee dashed;
    padding-bottom: 20px;
    position: relative;

    &:first-child {
        .delete-user {
            display: none;
        }
    }
}

.add-member {
    margin-top: 20px;
}

.delete-user {
    display: block;
    background: #ddd;
    width: 16px;
    height: 16px;
    font-size: 14px;
    text-align: center;
    line-height: 16px;
    color: #fff;
    cursor: pointer;
    border-radius: 50px;
    position: absolute;
    right: -30px;
    top: 50%;
}

.insurance {
    > div {
        margin-top: 10px;
    }
}

.insurance-item {
    margin-bottom: 20px;
}

.contact {
    /deep/ .el-input {
        width: 50%;
    }
}

.submit {
    margin: 50px auto;
    display: block;
    width: 250px;
    height: 50px;
}
</style>