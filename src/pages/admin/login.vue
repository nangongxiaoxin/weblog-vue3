@ -1,32 +1,32 @@
<template>
    <div class="p-2">
        <h1>登录页</h1>
        <el-row class="mb-4">
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
            <el-button type="danger">Danger</el-button>
        </el-row>
	<!-- 使用 grid 网格布局，并指定列数为 2，高度占满全屏 -->
    <div class="grid grid-cols-2 h-screen">
	    <!-- 默认先适配移动端，占两列，order 用于指定排列顺序，md 用于适配非移动端（PC 端）；背景色为黑色 -->
        <div class="col-span-2 order-2 p-10 md:col-span-1 md:order-1 bg-black">
            <!-- 指定为 flex 布局，并设置为屏幕垂直水平居中，高度为 100% -->
            <div class="flex justify-center items-center h-full">
                左边栏                
            </div>
        </div>

        <el-row class="mb-4">
            <el-button plain>Plain</el-button>
            <el-button type="primary" plain>Primary</el-button>
            <el-button type="success" plain>Success</el-button>
            <el-button type="info" plain>Info</el-button>
            <el-button type="warning" plain>Warning</el-button>
            <el-button type="danger" plain>Danger</el-button>
        </el-row>

        <el-row class="mb-4">
            <el-button round>Round</el-button>
            <el-button type="primary" round>Primary</el-button>
            <el-button type="success" round>Success</el-button>
            <el-button type="info" round>Info</el-button>
            <el-button type="warning" round>Warning</el-button>
            <el-button type="danger" round>Danger</el-button>
        </el-row>

    </div>
        <div class="col-span-2 order-1 md:col-span-1 md:order-2 bg-white">
            <div class="flex justify-center items-center h-full flex-col">
                <h1>欢迎登录</h1>
                <div>账号密码登录</div>
                <!-- 引入 Element Plus 表单组件，移动端设置宽度为 5/6，PC 端设置为 2/5 -->
                 <el-form-item>
                    <!-- 用户名输入框组件 -->
                     <el-input size="large" placeholder="请输入用户名" :prefix-icon="User" clearable></el-input>
                 </el-form-item>
                 <el-form-item>
                    <!--  -->
                 </el-form-item>
            </div>"
        </div>
    </div> 
</template>

<script setup>
// 引入elementui组件 user、lock图标
import { User,Lock } from "@element-plus/icons-vue";
</script>