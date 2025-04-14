import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Technical Books",
  description: "值得一看的技术类书籍列表",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the CC-BY-SA-4.0 license.',
      copyright: `Copyright © 2018-${new Date().getFullYear()} <a href="https://github.com/doocs">Doocs</a>`
    },
    logo: '/favicon-32x32.png',
    editLink: {
      pattern: 'https://github.com/doocs/technical-books/edit/main/docs/:path',
      text: '在 GitHub 编辑'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/doocs/technical-books' }
    ]
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-FXKXWXY4HF' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-FXKXWXY4HF');`
    ]
  ],
  cleanUrls: true,
  sitemap: {
    hostname: 'https://book.doocs.org'
  }
})
