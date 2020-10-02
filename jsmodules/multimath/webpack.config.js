module.exports = {
	// entry: './js/webpack/app.js',
	entry: ['./js/webpack/utils.js', './js/webpack/app.js'],
	output: {
		filename: 'build/bundles/bundle.js'
	},
	watch: true,
	devServer: {
		historyApiFallback: true,
		contentBase: './',
		port: 3000
	},
	module: {
		/*preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint-loader'
			}
		],*/
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: "pre",
				loader: 'jshint-loader'
			},
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	// by default, webpack resolve .js extension. ex: in app.js we see require('login') import line. here, it is resolved as require('login.js') by webpack
	resolve: {
		extensions: [' ', '.js', '.es6']
	}
}