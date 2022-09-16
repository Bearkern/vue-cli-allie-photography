module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/allie-photography/'
    : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: '艾里攝影工作室',
    },
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon-32x32.png',
      favicon16: 'favicon-16x16.png',
      appTouchIcon: 'apple-touch-icon.png',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico',
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/stylesheets/all.scss";
        `,
      },
    },
  },
}