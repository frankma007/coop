//1.引入
import vue from '@vitejs/plugin-vue2'
import { resolve } from 'path'

//2.配置
export default {
  plugins: [vue()],

  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  }
}
