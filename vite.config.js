import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ViteCompressionPlugin from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import importToCDN from 'vite-plugin-cdn-import'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/

export default defineConfig(({ mode }) => {
  //环境变量，控制是否输出console信息
  const isProduction = mode === 'production';

  return {
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8888',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    },

    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      ViteCompressionPlugin({
        filter: /\.(js|css)$/i, // 只压缩 js 和 css 文件
        threshold: 1024, // 只压缩大于 1KB 的文件
        algorithm: 'gzip', // 使用 gzip 算法
        ext: '.gz', // 压缩文件的扩展名
      }),
      importToCDN({
        modules: [
          {
            name: 'echarts',
            var: 'echarts',
            path: 'https://unpkg.com/echarts@5.4.3/dist/echarts.min.js',
          },
        ],
      }),
      visualizer() // 放到最后
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },

    build: {
      minify: isProduction ? 'terser' : false, // 使用 terser 进行压缩
      terserOptions: isProduction
        ? {
          compress: {
            drop_console: true, // 移除所有 console.log
            drop_debugger: true, // 移除 debugger
          },
        }
        : {},
    },
  };

})
