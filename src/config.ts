/**
 * 全站集中配置 —— 部署前请替换以下占位信息
 * 所有页面、CTA 组件、页脚都从这里读取，只需改这一个文件。
 */
export const site = {
  /** 站点名称（出现在 title 后缀、页头、页脚） */
  name: '杭州继续教育学分指南',
  /** 一句话定位 */
  tagline: '杭州专业技术人员继续教育学分政策解读与申报指南',
  /** 正式域名（与 astro.config.mjs 的 site 保持一致） */
  url: 'https://hz-jxjy.pages.dev',
  /** 默认 meta description */
  description:
    '解读杭州市专业技术人员继续教育学分制管理办法：每年90学分、专业科目60学分、公需科目合计18学分。覆盖建设工程、制造业（工信领域）、自然资源、生态环境等15个行业系列的职称评审继续教育学分要求、申报时间与学分登记路径。',
  /** 联系与转化信息 */
  contact: {
    /** 微信二维码图片路径（放在 public/ 下） */
    qrImage: '/qrcode.jpg',
    /** CTA 文案 */
    ctaTitle: '继续教育学分不够？',
    ctaSubtitle: '提供新干线在线学习辅助，专业科目 / 公需科目学分规划，助你按时达标。',
  },
  /** 内容最后更新日期（展示在页脚，增强可信度） */
  updatedAt: '2026-08-01',
} as const;

export type SiteConfig = typeof site;
