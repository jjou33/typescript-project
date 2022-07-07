module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		// "eslint:recommended",
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'no-console': 1,
		// "no-loops/no-loops": 2,
		'@typescript-eslint/no-inferrable-types': 'off',
		'prettier/prettier': [
			'error',
			{
				parser: 'typescript',
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx', '.js'],
		},
		'import/resolver': {
			typescript: './tsconfig.json',
		},
	},
};
