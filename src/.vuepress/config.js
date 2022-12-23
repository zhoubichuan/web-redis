module.exports = {
  // 基础配置
  base: '/web-redis/', // 部署站点的基础路径
  description: 'redis相关知识点',
  locales: {
    // 默认标题
    '/': {
      title: 'Redis笔记',
      description: ''
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  port: 3009,
  dest: 'web-redis', // 指定 vuepress build 的输出目录
  serviceWorker: true, // pwa

  // 主题配置
  themeConfig: {
    repo: 'https://github.com/zhoubichuan/web-redis', // 源码地址
    repoLabel: '查看源码', // (查看源码的)组件名称
    docsBranch: 'master', // git 源仓库 仓库分支
    editLinks: true, // 编辑链接
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    editLinkText: '在github上编辑此页',
    sidebarDepth: 2,
    lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
    nav: [
      {
        text: '基础知识',
        items: [
          {
            text: '1.redis实践指南',
            link: '/base/redis/1.index'
          },
          {
            text: '2.redis相关实践',
            link: '/base/practice/1.redis',
          }
        ]
      },
      {
        text: '高级知识',
        items: [
          {
            text: '1.组件精讲',
            link: '/senior/use/1.index'
          },
          {
            text: '2.TypeScript',
            link: '/senior/typeScript/1.index'
          },
        ]
      }
    ],
    sidebar: {
      '/base/redis/': [
        '1.index',
        '2.webpack',
        '3.file',
        '4.single',
        '5.page',
        '7.module',
        '8.project',
        '9.utils',
        '10.ui',
        '11.data',
        '12.skill',
        '13.com',
        '14.data',
        '15.api'
      ],
      '/base/practice/': [
        '1.redis',
        '2.Jenkins',
        '3.gitlab',
        'vscode',
        'test',
        'prem',
        'i18n'
      ],
      '/senior/use/': [
        '1.index',
        '2.extend',
        '3.componentCommunication',
        '4.render',
        '5.api',
        '6.form',
        '7.checkBox',
        '8.active',
        '9.alert',
        '10.table',
        '11.tree'
      ],
      '/senior/typeScript/': [
        '1.index',
      ],
    },
    searchMaxSuggestoins: 10
  }
}