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
   * Ref：https://v1.vuepress.vuejs.org/guide/assets.html#base-url
   * Ref: https://vuepress.vuejs.org/guide/deploy.html#github-pages
   */
  base: "/docs/",

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
    docsDir: '',
    docsRepo: 'wbstack/docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on Github!',
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
            'history',
          ]
        }
      ],
      '/tech/': [
        {
          title: 'General',
          collapsable: true,
          children: [
            '',
            'public',
            'external',
          ]
        },
        {
          title: 'Google Cloud',
          collapsable: true,
          children: [
            'gce/',
            'gce/ip',
            'gce/dns',
            'gce/gke',
            'gce/serviceaccounts',
            'gce/snapshots',
            'gce/storage',
            'gce/images',
          ]
        },
        {
          title: 'Kubernetes',
          collapsable: true,
          children: [
            'k8s/',
            'k8s/definitions',
            'k8s/helm',
            'k8s/services',
          ]
        },
        {
          title: 'Services',
          collapsable: true,
          children: [
            'services/',
            'services/ingress',
            'services/persistence',
            'services/platform',
            'services/mediawiki',
            'services/queryservice',
            'services/magnustools',
            'services/platform-nginx',
          ]
        },
        {
          title: 'Decision Records',
          collapsable: true,
          sidebarDepth: 0,
          children: [
            'decisions/',
            'decisions/0000-gce-vs-other-k8s-cluster',
            'decisions/0001-gce-kubernetes-cluster-private-vs-public',
            'decisions/0002-gce-ingress-vs-nginx',
            'decisions/0003-vitess-vs-mysql',
            'decisions/0004-one-wdqs-vs-cluster',
            'decisions/0005-backend-apis-and-services',
            'decisions/0006-wiki-access',
            'decisions/0008-custom-domains-ingress-creation',
          ]
        }
      ],
      '/users/': [
        {
          title: 'User Docs',
          collapsable: false,
          children: [
            '',
            'platform',
            'wiki',
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
