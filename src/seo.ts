import { site } from './config';

/**
 * 结构化数据（schema.org JSON-LD）公共构造函数。
 * 各页面把返回值传给 Base 布局的 jsonLd prop 即可。
 */

/** 站点运营主体，Article 的 author/publisher、首页 Organization 共用 */
export const organization = {
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/og-image.png`,
} as const;

/** 面包屑条目：href 相对路径即可，name 为展示名 */
export interface BreadcrumbItem {
  name: string;
  href: string;
}

/** 生成 BreadcrumbList JSON-LD，自动补"首页"为第一级 */
export function breadcrumbLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: '首页', href: '/' }, ...items].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: new URL(item.href, site.url).href,
    })),
  };
}

/** Article JSON-LD 公共字段，页面传入差异化部分 */
export function articleLd(opts: {
  headline: string;
  description: string;
  /** 页面相对路径，用于 mainEntityOfPage */
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    inLanguage: 'zh-CN',
    mainEntityOfPage: { '@type': 'WebPage', '@id': new URL(opts.path, site.url).href },
    datePublished: opts.datePublished ?? '2026-07-01',
    dateModified: opts.dateModified ?? site.updatedAt,
    author: organization,
    publisher: organization,
  };
}
