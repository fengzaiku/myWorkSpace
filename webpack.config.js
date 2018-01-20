var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
const env = process.env.NODE_ENV;
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
		},
		{ 
			test: /\.jsx$/, 
			loader: "babel" 
		},
		{
	        test: /\.css$/,
	        loader: "style-loader!css-loader?modules"
      	},
		{
			test: /\.less$/,
	      	use:env === 'production' ? 
				 ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use:[
						{
							 loader: 'css-loader',
							 options: {
							 	modules: true, 
							 	localIdentName:'[local][hash:7]'
							 }
						},
						'postcss-loader',
						'less-loader'
					]
				}):
				[
      				'style-loader',
      				{
						 loader: 'css-loader',
						 options: {
						 	modules: true, 
						 	localIdentName:'[local].[name][hash:7]'
						 }
					},
					'postcss-loader',
					'less-loader'
	      		]
		},
		{
			test: /\.(png|jpe?g|gif|svg)$/i,
			use: ['file-loader?name=image/[hash].[ext]?']
		}
	  ]
	},
 	resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".less"],
        alias: {
	      '@':path.resolve(__dirname, './src')
	    }
    },	
	devtool: 'source-map',
	plugins:[
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new ExtractTextPlugin({
			filename: "css/style.[hash].css",
			disable: false,
			allChunks: true
		})
	],
	devServer: {
		noInfo: true,
		port: 9000,
		open: true,
		inline: true,
		contentBase: "./src",//本地服务器所加载的页面所在的目录
		historyApiFallback: true,//不跳转
		// 设置代理
		proxy:{
			"/kugou": {
				target: "http://m.kugou.com",
				changeOrigin: true,
				pathRewrite: {"^/kugou" : ""}
			},
			"/ad": {
				target: "http://ads.service.kugou.com",
				changeOrigin: true,
				pathRewrite: {"^/ad" : ""}
			},
			"/mobilecdn": {
				target: "http://mobilecdn.kugou.com",
				changeOrigin: true,
				pathRewrite: {"^/mobilecdn" : ""}
			},
		}

	}
}

if (env === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}



