const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Ваш бэкенд-сервер
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '', // Убираем префикс /api в запросах
        },
      },
    },
  },
};
