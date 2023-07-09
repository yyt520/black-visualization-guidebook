const config = {
  mode: 'site',
  title: 'Visualization Guidebook',
  description: 'Visualization 完全知识体系',
  base: '/black-visualization-guidebook/',
  publicPath: '/black-visualization-guidebook/',
  favicon: './favicon.ico',
  logo: 'http://img.mrsingsing.com/visualization-guidebook-favicon.png',
  hash: true,
  exportStatic: {},
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/yyt520/black-visualization-guidebook',
    },
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
