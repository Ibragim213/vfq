const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Ваш бэкенд-сервер
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '' }, // Убираем префикс /api в запросах
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Указываем, что @ ссылается на папку src
      },
    },
  },
});