<template>
    <div class="grid grid-cols-2 h-screen">
        <div class="col-span-2 order-2 p-10 md:col-span-1 md:order-1 bg-slate-900">
            <!-- 指定为flex布局，设置水平居中，高度100% -->
            <div class="flex justify-center items-center h-full flex-col">
                <h2 class="font-bold text-4xl mb-7 text-white">Weblog 博客登录</h2>
                <p class="text-white">一款由 Spring Boot + Mybaits Plus + Vue 3.2 + Vite 4 开发的前后端分离博客。</p>
                <!-- 图片为父级的1/2 -->
                <img src="@/assets/eatMelon.png" class="w-1/2">
            </div>
        </div>
        <!-- 分栏 -->
        <div class="col-span-2 order-1 md:col-span-1 md:order-2 bg-white animate__animated animate__bounceInRight animate__fast">
        	<!-- flex-col 用于指定子元素垂直排列 -->
            <div class="flex justify-center items-center h-full flex-col">
                <h1 class="font-bold text-4xl mb-5">欢迎回来</h1>
                <div class="flex items-center mb-7 justify-center space-x-2 text-gray-400">
                    <span class="h-[1px] w-16 bg-gray-200"></span>
                    <span>账号密码登录</span>
                    <span class="h-[1px] w-16 bg-gray-200"></span>
                </div>
                <!-- 引入 Element Plus 表单组件，移动端设置宽度为 5/6，PC 端设置为 2/5 -->
                <el-form class="w-5/6 md:w-2/5">
                    <el-form-item>
                    	<!-- 输入框组件 -->
                        <el-input size="large" placeholder="请输入用户名" :prefix-icon="User" clearable/>
                    </el-form-item>
                    <el-form-item>
	                    <!-- 密码框组件 -->
                        <el-input size="large" type="password" placeholder="请输入用户名" :prefix-icon="Lock" clearable/>
                    </el-form-item>
                    <el-form-item>
                    	<!-- 登录按钮，宽度设置为 100% -->
                        <el-button class="w-full" size="large" type="primary">登录</el-button>
                    </el-form-item>
                </el-form>
                
            </div>
        </div>
    </div>
</template>

<script setup>
// 引入 Element Plus 中的用户、锁图标
import { User, Lock } from '@element-plus/icons-vue'
import { isMemoSame } from 'vue';
</script>
