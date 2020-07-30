module.exports = {
  base:'/myBlog/',
  title: '小王子的博客',
  description: '大家好，欢迎来到小王子的博客',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      { text: '简约记账', link: '/money/READEME' },
      { text: '存图网站', link: '/epic/READEME' },
      { text: '前端三剑客', items: [
        { text: 'HTML', link: '/html/READEME' },
        { text: 'CSS', link: '/css/READEME' },
        { text: 'JavaScript', link: '/JavaScript/READEME' }
      ]},
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      {
        title: '三剑客知识笔记',
        collapsable: true,
        children: [
          '/blog/1',
          '/blog/2',
          '/blog/3',
          '/blog/4',
          '/blog/5',
          '/blog/6',
          '/blog/7',
          '/blog/8',
          '/blog/9',
          '/blog/10',
          '/blog/11',
          '/blog/12',
          '/blog/13',
          '/blog/15',
          '/blog/20',
          '/blog/21',
          '/blog/22',
        ]
      },
      {
        title: 'Vue 笔记',
        collapsable: true,
        children: [
          '/blog/16',
          '/blog/17',
          '/blog/18',
          '/blog/19',
          '/blog/20',
          '/blog/21',
          '/blog/23',

        ]
      },
      {
        title: 'React 笔记',
        collapsable: true,
        children: [
          '/blog/24',
          '/blog/25',
          '/blog/26',
          '/blog/27',
        ]
      },
      
      {
        title: '简约记账笔记',
        collapsable: false,
        children: ['/money/1', '/money/2', '/money/3',
          '/money/4','/money/5',]
      },
      {
        title: 'React 简约记账',
        collapsable: false,
        children: ['/money-1/1', '/money-1/2']
      },
      {
        title: '存图网站笔记',
        collapsable: false,
        children: ['/epic/1', '/epic/2','/epic/3','/epic/4','/epic/5','/epic/6',]
      }
    ]
  }
}
