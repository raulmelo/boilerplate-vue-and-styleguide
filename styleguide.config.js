const path = require('path')
module.exports = {
	title: 'Guia de estilo Start',
	defaultExample: true,

	theme: {
		maxWidth: '100%',
		sidebarWidth: 240,
		fontFamily: {
			base: ["'Fira Sans'", 'Helvetica', 'Arial', 'sans-serif'],
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
	sections: [
		{
			name: 'Start do projeto',
			content: './docs/pages/start/start.md',
			sectionDepth: 1,
			exampleMode: 'show',
			usageMode: 'show',
			components: () => [
				'./docs/pages/start/color.vue',
				'./docs/pages/start/Typography.vue'
			]
		},
		{
			name: 'Componentes',
		   	components: './src/components/**/[A-Z]*.vue'
		}
	]
}
