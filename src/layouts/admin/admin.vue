<template>
  <!-- 外层容器 -->
  <el-container>
    <!-- 左侧侧边栏 -->
    <el-aside>
      <AdminMenu></AdminMenu>
    </el-aside>

    <!-- 右侧主内容区域 -->
    <el-container>
      <!--顶部容器  -->
      <el-header>
        <AdminHeader></AdminHeader>
      </el-header>

      <!-- 主容器 -->
      <el-main>
        <!-- 标签导航栏 -->
        <AdminTagList></AdminTagList>

        <!-- 主内容（根据路由动态展示不同的页面） -->
        <router-view></router-view>
      </el-main>

      <!-- 底部容器 -->
      <el-footer>
        <AdminFooter></AdminFooter>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AdminFooter from "./components/adminFooter.vue";
import AdminHeader from "./components/AdminHeader.vue";
import AdminMenu from "./components/AdminMenu.vue";
import AdminTagList from "./components/AdminTagList.vue";
</script>

<style scoped>
    .el-header{
        padding: 0 !important;
    }
</style>
