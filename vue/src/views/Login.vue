<template>
  <div class="login-container">
    <div class="login-box">
      <div style="font-weight: bold; font-size: 24px; text-align: center; margin-bottom: 30px; color: #EA5455">欢 迎 登 录</div>
      <el-form :model="data.form"  ref="formRef" :rules="data.rules">
        <el-form-item prop="username">
          <el-input :prefix-icon="User" size="large" v-model="data.form.username" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input :prefix-icon="Lock" size="large" v-model="data.form.password" placeholder="请输入密码" show-password />
        </el-form-item>
        <el-form-item prop="code">
          <div style="display: flex; align-items: center; grid-gap: 5px">
            <el-input style="width: 150px" :prefix-icon="CircleCheck" size="large" v-model="data.form.code" placeholder="请输入验证码" show-password />
            <div style="flex: 1">
              <img @click="getCaptchaImage" style="width: 100%; height: 40px; display: block" :src="data.captchaImage" alt="" v-if="data.captchaImage">
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button size="large" type="primary" style="width: 100%; background-color: #EA5455; border-color: #EA5455" @click="login">登 录</el-button>
        </el-form-item>
      </el-form>
      <div style="text-align: right;">
        还没有账号？请 <a style="color: orangered" href="/register">注册</a>
      </div>
    </div>

  </div>
</template>

<script setup>

// 双向绑定 ref 绑定基础类型    reactive 绑定对象
import { reactive, ref } from 'vue'
import {User,Lock} from "@element-plus/icons-vue";
const data = reactive({
  form:{},
  rules:{
    username:[
      {required:true, message:'请输入账号',trigger:'blur',}
    ],
    password:[
      {required:true, message:'请输入密码',trigger:'blur',}
    ]
  }
})
const formRef = ref()

const login = () =>{
  formRef.value.validate((valid) => {
    if (valid) { //vaild 是 true表示表单验证通过
      console.log('登录成功!')
    } else {
      console.log('登陆失败')
    }
  })
}


</script>

<style scoped>
.login-container {
  height: 100vh;
  overflow:hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient( 135deg, #FEB692 10%, #EA5455 100%);
}
.login-box {
  width: 350px;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0,.1);
  background-color: rgba(255, 255, 255, .5);
}
</style>