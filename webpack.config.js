module.exports = {
	resolve: {
		alias: {
			'@': require('path').resolve(__dirname, 'src'),
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					quiet: true
				},
			},
		],
	},
};
