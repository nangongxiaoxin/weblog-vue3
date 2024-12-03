@ -1,10 +1,28 @@
//导入main.css样式
import '@/assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { createApp } from 'vue'
import App from '@/App.vue'
// 导入路由
import router from '@/router'



for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}











const app = createApp(App)

// 应用路由
