import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/': [
    {
      isGroup: true,
      text: 'Guide',
      children: [
        '/guide/README.md',
        '/guide/server.md',
        '/guide/cluster.md',
        '/guide/sentinel.md',
        '/guide/ring.md',
        '/guide/universal.md',
        '/guide/lua-scripting.md',
      ],
    },
    {
      isGroup: true,
      text: 'Tutorial',
      children: [
        '/guide/performance.md',
        '/guide/tracing.md',
        '/guide/caching.md',
        '/guide/rate-limiting.md',
        '/guide/get-all-keys.md',
        '/guide/scanning-hash-fields.md',
        '/guide/bloom-cuckoo-count-min-top-k.md',
      ],
    },
  ],
}
