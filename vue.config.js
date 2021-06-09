module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Vue製Wiki'
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('text')
      .test([/\.txt$/i, /\.md$/i])
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  },
  transpileDependencies: [
    'vuetify'
  ]
}
