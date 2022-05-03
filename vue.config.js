const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: 'https://nf35205llj.execute-api.eu-central-1.amazonaws.com'}
    })
