# webpack5

commit 1. creat files init
1. npm init -y
2. npm intall webpack webpack-cli webpack-dev-server -D

commit 2. add src & start
3. npx webpack  需要 src folder 注入點 (Since version 4.0.0, webpack does not require a configuration file to bundle your project. Nevertheless)
4. npx webpack --mode development

commit 3. start dev server
5. npx webpack server --mode production
6. add public file (index.html style.css)

commit 4  __dirname or process.cwd() different
7. terminal run => node test.js | direction in src terminal run => node ../test.js
  - __dirname absolute path of current file
  - process.cwd() absolute path of the executed node command

commit 5. webpack.config.js
8. add webpack.config.js
  - entry dir
  - output path

commit 6. webpack.config.js 2
9. devtool | iife | clean

commit 7. webpack.config.js 3 watch options 
10. watchOptions 

commit 8. webpack.config.js 3 devServer
11. devServe
  - 啟動 npx webpack serve
  - webpack.config.js watch 不需要 因為請動devServer DEFAULT watch 
  - 後續啟動 ws server

commit 8. webpack.config.js 3 devServer static
12. static

commit 9. webpack.config.js  optimization
13. optimize minimize if true use minimizer: [] & with 'terser-webpack-plugin'
14. webpack has auto deDup --> 重複import 的相同module webpack 只會載入一次


commit 10. webpack.config.js entry
15. webpack entry option
  - dependOn -> 將移賴的module 產生一個chunk store 依賴的檔案載入使用 (如果沒設置 檔案裡import 的module 會全部包成一包)
  - filename

commit 11. webpack.config.js tree shaking
16. removing unused codes (unused harmony export square) (watch teacher version)

commit 12. webpack.config.js side effect 
17. side effect (watch teacher version)