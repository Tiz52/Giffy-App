module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'plugin:react/jsx-runtime'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'@typescript-eslint'
	],
	rules: {
		'no-tabs': ['error', { allowIndentationTabs: true }],
		indent: [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		semi: [
			'error',
			'always'
		],
		quotes: [
			'error',
			'single'
		]
	}
};
