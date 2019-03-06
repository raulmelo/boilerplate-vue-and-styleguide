const webpack = require('webpack')

module.exports = {
    pwa: {
        name: 'boilerplate-vue'
    },
    configureWebpack: {
        module: {
            rules: [{
                resourceQuery: /blockType=docs/,
                loader: 'null-loader'
            }]
        }
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
					@import "@/style/helpers/_variable.scss";
					@import "@/style/helpers/_medias.scss";
					@import "@/style/helpers/_mixin.scss";
				`
            }
        }
    }
}
