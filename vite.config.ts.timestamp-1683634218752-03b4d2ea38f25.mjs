// vite.config.ts
import { defineConfig } from "file:///E:/webup/mall/mall-admin/node_modules/.pnpm/vite@4.3.5_cmc6haabys5lqkn6dgaljsdwoe/node_modules/vite/dist/node/index.js";
import vue from "file:///E:/webup/mall/mall-admin/node_modules/.pnpm/@vitejs+plugin-vue@4.2.1_vite@4.3.5+vue@3.2.47/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import WindiCSS from "file:///E:/webup/mall/mall-admin/node_modules/.pnpm/vite-plugin-windicss@1.8.10_vite@4.3.5/node_modules/vite-plugin-windicss/dist/index.mjs";
import AutoImport from "file:///E:/webup/mall/mall-admin/node_modules/.pnpm/unplugin-auto-import@0.15.3/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///E:/webup/mall/mall-admin/node_modules/.pnpm/unplugin-vue-components@0.24.1_vue@3.2.47/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///E:/webup/mall/mall-admin/node_modules/.pnpm/unplugin-vue-components@0.24.1_vue@3.2.47/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { createSvgIconsPlugin } from "file:///E:/webup/mall/mall-admin/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@4.3.5/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\webup\\mall\\mall-admin";
var vite_config_default = defineConfig({
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false
  },
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "./auto-imports.d.ts",
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      // icon存放的目录
      symbolId: "icon-[name]",
      // symbol的id
      inject: "body-last",
      // 插入的位置
      customDomId: "__svg__icons__dom__"
      // svg的id
    })
  ],
  resolve: {
    alias: {
      // 设置路径
      "~": path.resolve(__vite_injected_original_dirname, "./"),
      // 设置别名
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      find: "vue-i18n",
      replacement: "vue-i18n/dist/vue-i18n.cjs.js"
      //解决i8n警告
    }
    // https://cn.vitejs.dev/config/#resolve-extensions
    // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: '@import "./src/style/main.scss";'
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx3ZWJ1cFxcXFxtYWxsXFxcXG1hbGwtYWRtaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHdlYnVwXFxcXG1hbGxcXFxcbWFsbC1hZG1pblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovd2VidXAvbWFsbC9tYWxsLWFkbWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBXaW5kaUNTUyBmcm9tICd2aXRlLXBsdWdpbi13aW5kaWNzcydcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgZGVmaW5lOiB7XG4gICAgX19WVUVfSTE4Tl9GVUxMX0lOU1RBTExfXzogdHJ1ZSxcbiAgICBfX1ZVRV9JMThOX0xFR0FDWV9BUElfXzogZmFsc2UsXG4gICAgX19JTlRMSUZZX1BST0RfREVWVE9PTFNfXzogZmFsc2UsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBXaW5kaUNTUygpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgaW1wb3J0czogWyd2dWUnLCAndnVlLXJvdXRlciddLFxuICAgICAgZHRzOiAnLi9hdXRvLWltcG9ydHMuZC50cycsXG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XG4gICAgICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBcInNyYy9hc3NldHMvc3ZnXCIpXSwgLy8gaWNvblx1NUI1OFx1NjUzRVx1NzY4NFx1NzZFRVx1NUY1NVxuICAgICAgc3ltYm9sSWQ6IFwiaWNvbi1bbmFtZV1cIiwgLy8gc3ltYm9sXHU3Njg0aWRcbiAgICAgIGluamVjdDogXCJib2R5LWxhc3RcIiwgLy8gXHU2M0QyXHU1MTY1XHU3Njg0XHU0RjREXHU3RjZFXG4gICAgICBjdXN0b21Eb21JZDogXCJfX3N2Z19faWNvbnNfX2RvbV9fXCIgLy8gc3ZnXHU3Njg0aWRcbiAgICB9KVxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIC8vIFx1OEJCRVx1N0Y2RVx1OERFRlx1NUY4NFxuICAgICAgJ34nOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi8nKSxcbiAgICAgIC8vIFx1OEJCRVx1N0Y2RVx1NTIyQlx1NTQwRFxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICAgIGZpbmQ6ICd2dWUtaTE4bicsXG4gICAgICByZXBsYWNlbWVudDogJ3Z1ZS1pMThuL2Rpc3QvdnVlLWkxOG4uY2pzLmpzJywgLy9cdTg5RTNcdTUxQjNpOG5cdThCNjZcdTU0NEFcbiAgICB9LFxuICAgIC8vIGh0dHBzOi8vY24udml0ZWpzLmRldi9jb25maWcvI3Jlc29sdmUtZXh0ZW5zaW9uc1xuICAgIC8vIGV4dGVuc2lvbnM6IFsnLm1qcycsICcuanMnLCAnLnRzJywgJy5qc3gnLCAnLnRzeCcsICcuanNvbicsICcudnVlJ10sXG4gIH0sXG4gIGNzczoge1xuICAgIC8vIGNzc1x1OTg4NFx1NTkwNFx1NzQwNlx1NTY2OFxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgY2hhcnNldDogZmFsc2UsXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiAnQGltcG9ydCBcIi4vc3JjL3N0eWxlL21haW4uc2Nzc1wiOycsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrUSxTQUFTLG9CQUFvQjtBQUMvUixPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sY0FBYztBQUNyQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUNwQyxTQUFTLDRCQUE0QjtBQVByQyxJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTiwyQkFBMkI7QUFBQSxJQUMzQix5QkFBeUI7QUFBQSxJQUN6QiwyQkFBMkI7QUFBQSxFQUM3QjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsV0FBVztBQUFBLE1BQ1QsU0FBUyxDQUFDLE9BQU8sWUFBWTtBQUFBLE1BQzdCLEtBQUs7QUFBQSxNQUNMLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxJQUNELHFCQUFxQjtBQUFBLE1BQ25CLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7QUFBQTtBQUFBLE1BQ3hELFVBQVU7QUFBQTtBQUFBLE1BQ1YsUUFBUTtBQUFBO0FBQUEsTUFDUixhQUFhO0FBQUE7QUFBQSxJQUNmLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUE7QUFBQSxNQUVMLEtBQUssS0FBSyxRQUFRLGtDQUFXLElBQUk7QUFBQTtBQUFBLE1BRWpDLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNwQyxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUE7QUFBQSxJQUNmO0FBQUE7QUFBQTtBQUFBLEVBR0Y7QUFBQSxFQUNBLEtBQUs7QUFBQTtBQUFBLElBRUgscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osU0FBUztBQUFBLFFBQ1QsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
