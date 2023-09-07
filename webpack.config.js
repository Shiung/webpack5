const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV,
  // devtool: 'inline-source-map', // 產生sorce map under file
  devtool: 'source-map', // create new soure map file 
  

  // 1. dir-------------------------------------------------------------------------------
  // entry: './src/entry.js',
  // entry: {
  //   // mainTest: './src/entry.js' // the point to CWD of the webpack command
    
  //   mainTest: path.resolve(__dirname, './src/entry.js')
  // },
  // 1. dir-------------------------------------------------------------------------------end

  // 2. dir-------------------------------------------------------------------------------
  // context 指定webpack 路徑的資料是哪個
  context: path.resolve(__dirname, 'src'), // decides where ./ points to
  entry: {
    mainTest2: './entry.js'
  },
  // 2. dir-------------------------------------------------------------------------------end

  output: {
    // iife: true,
    clean: true, // clean-webpack-plugin
    filename: '[name].js', // default to main.js

    path: path.resolve(__dirname, 'dist')
  }
}
