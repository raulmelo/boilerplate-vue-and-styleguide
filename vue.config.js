const webpack = require('webpack')

module.exports = {
    filenameHashing: false, // adiciona uma hash contra cache na build
    pwa: {
      name: 'boilerplate-vue',
      themeColor: '#F8E71C',
      msTileColor: '#F8E71C'
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
