

const tsImportPluginFactory = require('ts-import-plugin')

import { join } from 'path'
export default {
  scene: [
    ["w-scene-react", {
      dva: false,
      antd_mobile: true,
      ts: true,
    }]
  ],
  entry: {
    app: './tsrc/index.ts'
  },
  html: {
    filename: './index.html',
    template : './index.ejs',
    inject   : true,
    chunks: ['app']
  },
  outputPath: 'dist',//打包之后的目录
  chainWebpack(config, webpack) {
    config.resolve.alias.set('@', join(process.cwd(), 'tsrc'));// 比如配置alias
    
  },
  proxy: {
    // '/notcontrol': {target: 'http://www.baidu.com', changeOrigin: true},
  },
  hash: true,
  dll: {
    switch: true,
    dllName: 'wangwei',
    pkg: ['react', 'react-dom', 'react-router-dom', 'react-loadable']
  },
  layoutMode: {
    switch: true,
    mode: 'vw',
    func: 'vw()'
  },
  mock: true,
  typescript: {
    transpileOnly: true,
    getCustomTransformers: () => ({
      before: [ tsImportPluginFactory({
        libraryName: 'antd-mobile',
        libraryDirectory: 'lib',
        style: true
      }) ]
    }),
    compilerOptions: {
      module: 'es2015'
    }
  },
  extraPostCSSPlugins:[require('postcss-pxtorem')({ rootValue: 50, propWhiteList: [] })]
}