/**
 * 全站集中配置 —— 所有页面、CTA 组件、页脚都从这里读取，只需改这一个文件。
 */
export const site = {
  /** 站点名称（出现在 title 后缀、页头、页脚） */
  name: '职称申报123',
  /** 一句话定位 */
  tagline: '杭州专业技术人员继续教育学分政策解读与职称申报指南',
  /** 正式域名（与 astro.config.mjs 的 site 保持一致） */
  url: 'https://zcsb123.com',
  /** 默认 meta description */
  description:
    '职称申报123（杭州站）：解读杭州市专业技术人员继续教育学分制管理办法：每年90学分、专业科目60学分、公需科目合计18学分。覆盖建设工程、制造业（工信领域）、自然资源、生态环境等15个行业系列的职称评审继续教育学分要求、申报时间与学分登记路径。',
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

/**
 * 城市站点列表 —— 目前仅杭州站开通，其余城市为筹备中。
 * 新城市上线时把 open 改为 true 并补充对应内容即可。
 */
export const cities = [
  { name: '杭州', open: true },
  { name: '宁波', open: false },
  { name: '温州', open: false },
  { name: '嘉兴', open: false },
  { name: '绍兴', open: false },
  { name: '金华', open: false },
  { name: '台州', open: false },
  { name: '湖州', open: false },
] as const;

/** 当前站点所属城市 */
export const currentCity = cities[0];

export type SiteConfig = typeof site;
