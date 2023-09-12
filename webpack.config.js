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
    // main: './entry.js'
    main: {
      import: './entry.js',
      dependOn: 'shared',
      // filename: 'testSrc/[name].js'
    },
    main2: './entryTwo.js',
    shared: './sharded.js'
  },
  // 2. dir-------------------------------------------------------------------------------end

  optimization: {
    // minimize: false, // default to true under prod. mode

    minimize: true,
    // minimizer: ['...', new plugin()] // js, css ,html
  },

  output: {
    // iife: true,
    clean: true, // clean-webpack-plugin
    filename: '[name].js', // default to main.js

    path: path.resolve(__dirname, 'dist')
  },

  // watch: true, // --watch 如同指令
  watchOptions: {
    // ignored: /node_modules/
    // ignored: [path.resolve(__dirname, 'node_modules')]
    ignored: ['**/node_modules', '**/src/info.js']
  },

  devServer: {
    compress: true,
    port: 6789,
    // webSocketServer: 'ws', // 後續

    hot: true,
    // 靜態資源 
    static: [
      {
        directory: path.resolve(__dirname, 'public'),
        watch: true,
        publicPath: '/'
      },
      {
        directory: path.resolve(__dirname, 'style'),
        watch: false,
        publicPath: '/style/',
        serveIndex: false, // default true
        // staticOptions: {
        //   index: 'about.html'
        // }
      }
    ]
  }
}
