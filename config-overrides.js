const { override, fixBabelImports, addLessLoader } = require('customize-cra')
const { name } = require('./package.json')

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@ant-prefix': name,
      },
    },
  }),
  fixBabelImports('antd', {
    libraryName: 'antd',
    libraryDirectory: 'lib',
    style: true,
  }),
  fixBabelImports('@formily/antd', {
    libraryName: '@formily/antd',
    libraryDirectory: 'lib',
    style: true,
  })
)
