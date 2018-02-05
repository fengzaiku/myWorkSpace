var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
const env = process.env.NODE_ENV;
module.exports={
	entry:'./src/app.js',
	output:{
		path:path.resolve(__dirname, './build'),
		filename: '[name].js',
    chunkFilename: '[name][chunkhash].js'
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
	        loader: "style-loader!css-loader"
      	},
		{
			test: /\.less$/,
	      	use:env === 'production' ? 
				 ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use:[
						{
							 loader: 'css-loader',
							 exclude:'/src/assets/styleSheet/comman/',
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
			// {
			// 	test: /\.(png|jpe?g|gif|svg)$/i,
			// 	use: ['file-loader?name=image/[hash].[ext]?']
			// },
			{
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
        loader: 'url-loader',
        options: {
          limit: 10000
          // name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
          // name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
          // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
	  ]
	},
 	resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".less"]
    },	
	devtool: 'source-map',
	plugins:[
		new ExtractTextPlugin({
			filename: "css/style.[hash].css",
			disable: false,
			allChunks: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors', // 将公共模块提取，生成名为`vendors`的chunk
			chunks: ['main'],
			minChunks: 1 // 提取所有entry共同依赖的模块
		}),
		new HtmlWebpackPlugin({
			template: 'index.html',
			inject: true,
      // hash: true,
      // cache: true,
      chunks: ['main','vendors']
		})
	],
	devServer: {
		noInfo: true,
		port: 9000,
		open: true,
		inline: true,
		openPage:"home",
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



