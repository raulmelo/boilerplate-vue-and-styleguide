
const webpack = require('webpack')

module.exports = {
	lintOnSave: true,
	pwa: {
		name: 'Vue + Styleguide'
	},
	chainWebpack: config => {

		config.plugin('provide').use(webpack.ProvidePlugin, [
			{
				$: 'jquery',
				jquery: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery',
				moment: 'moment'
			}
		])
	},

	css: {
		loaderOptions: {
			sass: {
				data: `
					@import "@/style/helpers/_variables.scss";
					@import "@/style/helpers/_medias.scss";
					@import "@/style/helpers/mixins/_mixin.scss";
				`
			}
		}
	}
}
