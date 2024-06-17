const { override, addWebpackModuleRule, addBabelPlugin } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  }),
  addWebpackModuleRule({
    test: /\.(svg|eot|ttf|woff)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      }
    ]
  }),
  addBabelPlugin([
    'import',
    {
      libraryName: '@ucloud-fe/react-components',
      camel2DashComponentName: false,
      libraryDirectory: 'lib/components'
    }
  ])
);
