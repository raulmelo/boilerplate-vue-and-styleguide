const path = require('path')
module.exports = {
	webpackConfig: {
		resolve: {
			extensions: ['.js', '.json', '.vue', '.ts', '.css', '.scss'],
			alias: {
				'~': path.resolve(__dirname, 'src'),
				'@': path.resolve(__dirname, 'src'),
			},
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader',
				},
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
			],
		},
	},
	title: 'Guia de estilo Start',
	defaultExample: false,
	theme: {
		maxWidth: '100%',
		sidebarWidth: 240,
		fontFamily: {
			base: ["'Lato'", 'Helvetica', 'Arial', 'sans-serif'],
			monospace: ['Consolas', "'Liberation Mono'", 'Menlo', 'monospace']
		}
	},
	editorConfig: {
		theme: 'night'
	},
	require: [
		path.join(__dirname, 'docs/docs.css'),
		path.join(__dirname, 'src/style/main.scss')
	],
	styleguideDir: './dist/docs',
	sections: [{
		name: 'Start do projeto',
		content: './docs/pages/start/start.md',
		sectionDepth: 2,
		exampleMode: 'hide',
		components: () => [
			'docs/pages/start/Intro.vue',
			'docs/pages/start/Images.vue',
			'docs/pages/start/Color.vue',
			'docs/pages/start/Typography.vue'

		]
	},
	{
		defaultExample: false,
		name: 'Componentes',
		exampleMode: 'hide',
		usageMode: 'expand',
		components: './src/components/**/[A-Z]*.vue'
	}
	]
}
