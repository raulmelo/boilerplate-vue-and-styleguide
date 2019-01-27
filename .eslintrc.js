module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-trailing-spaces': [0, { skipBlankLines: true }],
    'no-multiple-empty-lines': ['error', { max: 8, maxEOF: 1 }],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    indent: 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    disallowTabs: true,
    'no-tabs': 0,
    ignoreComments: 0,
    skipBlankLines: 0,
    semi: 0,
    'no-mixed-spaces-and-tabs': [0]
  },
	globals: {
		$: true,
		jQuery: true,
	},
	  parserOptions: {
	  	parser: 'babel-eslint',
	  },
}
