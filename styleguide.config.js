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
			exampleMode: 'hide',
			usageMode: 'hide',
			components: () => [
				'./docs/pages/start/color.vue',
				'./docs/pages/start/Typography.vue'
				// './docs/pages/start/intro.vue'
				// "../docs/components/tokens/FontSize.vue",
				// "../docs/components/tokens/Spacing.vue",
				// "../docs/components/tokens/All.vue",
			]
		}
		// {
		//   /**
		//    * Private components have to be loaded into the documentation as well,
		//    * otherwise anything using them will be broken. We’re loading them in
		//    * their own section, which then gets hidden in docs/docs.styles.scss
		//    */
		//   name: 'Componentes',
		//   components: './src/components/**/[A-Z]*.vue'
		// }
	]
}
