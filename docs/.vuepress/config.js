module.exports = {
  base:'/myBlog/',
  title: '小王子的博客',
  description: '大家好，欢迎来到小王子的博客',
  head:[
    [
      'link',
      {
        rel:'icon',
        href:'/favicon.ico'
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo:'/favorite.png',
    search: true,
    searchMaxSuggestions: 10,
    nav: [
      { text: '简约记账', link: '/money/READEME' },
      { text: 'React 简约记账', link: '/money-1/READEME' },
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
          '/blog/28',
        ]
      },
      {
        title: '环境搭配',
        collapsable: true,
        children: [
          '/mac/frontend.md',
          '/mac/markdown.md',
        ]
      },
      {
        title: '常用方法、技巧',
        collapsable: true,
        children: [
          '/skill/1',
          '/skill/2',
          '/css/image-mask-layer.md',
          '/css/slide-in-left.md',
        ]
      },
      {
        title: 'ES6 语法',
        collapsable: true,
        children: [
          '/javascript/1'
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
          '/vue2/1'

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
          '/blog/29',
          '/react/control',

        ]
      },
      {
        title: 'vue3 造轮子笔记',
        collapsable: true,
        children: [
          '/vue3/1',
          '/vue3/2'
        ]
      },
      
      {
        title: '简约记账笔记',
        collapsable: true,
        children: ['/money/1', '/money/2', '/money/3',
          '/money/4','/money/5',]
      },
      {
        title: 'React 简约记账',
        collapsable: true,
        children: ['/money-1/1', '/money-1/2','/money-1/3','/money-1/4','/money-1/5','/money-1/6']
      },
      {
        title: '存图网站笔记',
        collapsable: true,
        children: ['/epic/1', '/epic/2','/epic/3','/epic/4','/epic/5','/epic/6',]
      }
    ]
  }
}
