module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: 'dist',
    assetsDir: 'assets',
    
    chainWebpack: config => {
      config.plugin('html').tap(args => {
        args[0].title = 'Mon CV - Portfolio'
        return args
      })
    },
    
    css: {
      loaderOptions: {
        css: {
          // options here
        }
      }
    },
    
    devServer: {
      port: 8080,
      host: 'localhost'
    }
  }