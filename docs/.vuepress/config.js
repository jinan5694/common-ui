module.exports = {
  themeConfig: {
    logo: '/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: 'Github', link: 'https://google.com' },
    ],
    sidebarDepth: 0,
    sidebar: {
      '/guide/': [
        ['install', '安装'],
        ['start', '快速上手'],
      ],
      '/components/': [
        ['change-log', '更新日志'],
        ['foo', 'foo'],
        ['bar', 'bar'],
      ]
    }
  }
}