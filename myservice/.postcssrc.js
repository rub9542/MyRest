// module.exports = {
//     parser: 'sugarss',
//     map: false,
//     plugins: {
//       'postcss-plugin': {}
//     }
//   }
module.exports = ({ env }) => ({
    ...options,
    plugins: {
      'postcss-plugin': env === 'production' ? {} : false
    }
  })