// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/config.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://zcsb123.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        // 全站内容随 config.ts 的 updatedAt 统一更新；按页面类型给抓取优先级
        item.lastmod = site.updatedAt;
        const url = item.url;
        if (url === `${site.url}/`) item.priority = 1.0;
        else if (url.includes('/hangye/') || url.includes('/zhengce/')) item.priority = 0.8;
        else item.priority = 0.6;
        item.changefreq = 'weekly';
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
