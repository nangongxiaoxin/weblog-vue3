import '@/assets/main.css'
import 'animate.css'
import 'nprogress/nprogress.css'
// 图片点击放大
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'


import { createApp } from 'vue'
import App from '@/App.vue'
// 导入路由
import router from '@/router'
//导入全局路由守卫
import '@/permission'
// 导入 Element Plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

//引入全局状态管理
import pinia from '@/stores'
// 应用路由
app.use(router);

//应用Pinia
app.use(pinia);

app.use(VueViewer)
// 引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
