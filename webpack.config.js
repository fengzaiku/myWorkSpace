var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports={
	entry:'./src/app.js',
	output:{
		path:path.resolve(__dirname, './build'),
		filename: "bundle.js"
	},
	module: {
	  rules: [
		{ 
			test: /\.js$/, 
			exclude: /node_modules/, 
			loader: "babel-loader" 
		}
	  ]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
				// NODE_ENV: JSON.stringify('production')development
			}
		})
		// ,
		// new webpack.optimize.UglifyJsPlugin({
		// 	compress: {
		// 		warnings: false,
		// 		drop_console: false,
		// 	}
		// })
	],
	devServer: {
		port: 9000
	}
}




