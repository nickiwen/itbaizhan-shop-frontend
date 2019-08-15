module.exports = {
    // publicPath: process.env.NODE_ENV === 'production'
    //     ? ''
    //     : '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.1.102:9030',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true
            },
            '/search_api': {
                target: 'http://192.168.1.102:9100',
                pathRewrite: {
                    '^/search_api': ''
                },
                changeOrigin: true
            },
            '/shopcar_api': {
                target: 'http://192.168.1.102:9040',
                pathRewrite: {
                    '^/shopcar_api': ''
                },
                changeOrigin: true
            },
            "/payment_api": {
                target: 'http://192.168.1.102:9111',
                pathRewrite: {
                    '^/payment_api': ''
                },
                changeOrigin: true
            },
            "/sxt": {
                target: 'http://192.168.1.116:3001',
                pathRewrite: {
                    '^/sxt': ''
                },
                changeOrigin: true
            },
            "/register_api": {
                target: 'http://192.168.1.102:9090',
                pathRewrite: {
                    '^/register_api': ''
                },
                changeOrigin: true
            }
        }
    }
}