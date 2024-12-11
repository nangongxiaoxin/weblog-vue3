<template>
  <div class="bg-slate-800 h-screen text-white menu-container transition-all" :style="{ width: menuStore.menuWidth }">
    <!-- 顶部logo 指定高度为64px 和右边的header头保持同样高度 -->
    <div class="flex items-center justify-center h-[64px]">
      <img v-if="menuStore.menuWidth == '250px'" src="@/assets/weblog-log.png" class="h-[60px]" />
      <img v-else src="@/assets/weblog-log-mini.png" class="h-[60px]" />
    </div>

    <!-- 下方菜单 -->
    <el-menu :default-active="defaultActive" @select="handleSelect" :collapse="isCollapse" :collapse-transition="false">
      <template v-for="(item, index) in menus" :key="index">
        <el-menu-item :index="item.path">
          <!-- 图标 -->
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <!-- 标题 -->
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { useMenuStore } from "@/stores/menu";
import { ref,computed } from "vue";
import { useRoute,useRouter } from "vue-router";

const menus = [
  {
    name: "仪表盘",
    icon: "Monitor",
    path: "/admin/index",
  },
  {
    name: "文章管理",
    icon: "Document",
    path: "/admin/article/list",
  },
  {
    name: "分类管理",
    icon: "FolderOpened",
    path: "/admin/category/list",
  },
  {
    name: "标签管理",
    icon: "PriceTag",
    path: "/admin/tag/list",
  },
  {
    name: "博客设置",
    icon: "Setting",
    path: "/admin/blog/setting",
  },
];

//根据路由地址判断被选中的
const route = useRoute();
const router = useRouter();
const defaultActive = ref(route.path);
const menuStore = useMenuStore();
//菜单选择
const handleSelect = (path) => {
  router.push(path);
};

//是否折叠
const isCollapse = computed(() => {return !(menuStore.menuWidth == '250px')});
</script>

<style>
.el-menu {
  background-color: rgb(30 41 59 / 1);
  border-right: 0;
}

.el-sub-menu__title {
  color: #fff;
}

.el-sub-menu__title:hover {
  background-color: #ffffff10;
}

.el-menu-item.is-active {
  background-color: var(--el-color-primary);
  color: #fff;
}

.el-menu-item.is-active:hover {
  background-color: var(--el-color-primary);
}

.el-menu-item {
  color: #fff;
}

.el-menu-item:hover {
  background-color: #ffffff10;
}
</style>
