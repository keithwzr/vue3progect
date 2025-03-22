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
<!--        右侧头像和用户名      -->
        <el-dropdown style="cursor: pointer;">
          <div style="padding-right: 20px; display: flex;align-items: center;">
            <img v-if="data.user.avatar" src="" alt="">
            <img v-else src="@/assets/img/avatar.png" alt="" style="width: 40px; height: 40px; ">
            <span style="margin-left: 5px">{{data.user?.name}}</span>
          </div>
          <template #deopdown>
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
      </div>

      <div class="manager-main-right">
        <!-- 内容区域 -->
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
</script>
<style scoped>
@import "@/assets/css/manager.css";
</style>
