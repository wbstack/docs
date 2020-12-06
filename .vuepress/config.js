const { description } = require('../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "WBStack Docs",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Technology',
        link: '/tech/'
      },
      {
        text: 'Users',
        link: '/users/'
      },
      {
        text: 'WBStack',
        link: 'https://www.wbstack.com'
      },
      {
        text: 'Github',
        link: 'https://www.github.com/wbstack'
      }
    ],
    sidebar: {
      '/about/': [
        {
          title: 'About',
          collapsable: false,
          children: [
            '',
            'open-source',
            'funding',
          ]
        }
      ],
      '/tech/': [
        {
          title: 'Tech Docs',
          collapsable: false,
          children: [
            '',
            'deployment',
            'public',
            'infra',
            'external',
            'platform',
          ]
        }
      ],
      '/users/': [
        {
          title: 'User Docss',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-mermaidjs',
  ]
}
