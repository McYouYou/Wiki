import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "McYouYou Wiki",
  description: "MC公益群组服务器",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/docs/index' }
    ],

    sidebar: [
      {
        text: '玩家文档',
        items: [
          { text: '游玩须知', link: '/docs/index' }
        ]
      },
      {
        text: 'API文档',
        items: [
          { text: 'API总览', link: '/api/index' }
        ]
      },
      {
        text: '入驻YouYou',
        items: [
          { text: '介绍', link: '/docs/joinindex' },
          { text: '申请加入群组服', link: '/docs/join' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/McYouYou' }
    ]
  }
})
