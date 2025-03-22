<script setup>

</script>

<template>
  <div class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </div>
  <div class="manager-container">
    <div class="manager-header">
      <div class="manager-header-left">
        <img src="@/assets/imgs/favicon.ico" alt="">
        <div class="title">团团乐管理后台</div>
      </div>
      <div class="manager-header-left">

      </div>
      <div class="manager-header-right">

      </div>
    </div>
    <div style="display: flex">
      <div class="manager-main-left">
        <!-- 菜单区域 -->
      </div>

      <div class="manager-main-right">
        <!-- 内容区域 -->
      </div>
    </div>

  </div>

</template>

<script setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

</script>