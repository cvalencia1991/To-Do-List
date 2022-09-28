const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports= {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'./dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader',"sass-loader"],
          },
           {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
           use: [
            {
                loader: 'file-loader',
                options:{
                 name: '[name].[ext]',
                 output: 'imgs/',
                 useRelativePath: true,
                }
            }
           ]
        }
        ],
      },
      devServer: {
        static: './dist',
        port: 8020,
      },
      optimization: {
        runtimeChunk: 'single',
      },

}