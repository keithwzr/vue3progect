<template>
  <div class="manager-container">
<!--    头部开始    -->
    <div class="manager-header">
      <div class="manager-header-left">
<!--        标题和logo      -->
        <img src="@/assets/imgs/favicon.ico" alt="">
        <div class="title">团团乐管理后台</div>
      </div>
      <div class="manager-header-left">
<!--        面包屑      -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/manager/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{router.currentRoute.value.meta.name}}</el-breadcrumb-item>
        </el-breadcrumb>

      </div>
      <div class="manager-header-right">
        <!-- 右侧头像和用户名 -->
        <el-dropdown style="cursor: pointer;">
          <div style="padding-right: 20px; display: flex; align-items: center;">
            <img v-if="data.user.avatar" :src="data.user?.avatar" alt="" style="width: 40px; height: 40px; display: block; border-radius: 50%">
            <img v-else src="@/assets/imgs/avatar.png" alt="" style="width: 40px; height: 40px; display: block; border-radius: 50%">
            <span style="margin-left: 5px; color: white">{{ data.user?.name }}</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click.native="router.push('/manager/person')">个人资料</el-dropdown-item>
              <el-dropdown-item @click.native="router.push('/manager/password')">修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
<!--    头部结束      -->
<!--    主体区域开始   -->
    <div style="display: flex">
      <div class="manager-main-left">
        <!-- 菜单区域 -->
<!--        default-active 代表默认展开的路由-->
        <el-menu :default-active="router.currentRoute.value.path"
                 :default-openeds="['/manager/home', 'info']"
                 router>
          <el-menu-item index="/manager/home">
            <el-icon><home-filled /></el-icon>
            <span>系统首页</span>
          </el-menu-item>
          <el-sub-menu index="info">
            <template #title>
              <el-icon><UserFilled /></el-icon>
              <span>信息管理</span>
            </template>
            <el-menu-item index="">xxx信息</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </div>

      <div class="manager-main-right">
        <!-- 内容区域 -->
        <RouterView />
      </div>
    </div>
<!--    主体区域结束        -->
  </div>
</template>

<script>
export default {
  name: "Manager"
}
</script>
<script setup>
import router from "@/router/index.js"
import {reactive} from "vue";
const data = reactive({
  user:{ name:'zhangsan' }
})

</script>
<style scoped>
@import "@/assets/css/manager.css";
</style>
