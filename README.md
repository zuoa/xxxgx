# 职称申报123（zcsb123.com）

面向专业技术人员的继续教育学分与职称申报政策信息站，当前开通杭州站（宁波、温州等城市站点筹备中）。基于 Astro 静态生成，部署于 Cloudflare Pages。

## 快速开始

```bash
npm install        # 安装依赖
npm run dev        # 本地开发 http://localhost:4321
npm run build      # 构建到 dist/
npm run preview    # 预览构建产物
```

## ⚠️ 部署前必改（集中在 src/config.ts）

| 配置项 | 位置 | 说明 |
|---|---|---|
| 微信号 / 电话 / QQ | `src/config.ts` → `contact` | 当前为占位符 `YOUR_WECHAT_ID` 等 |
| 微信二维码 | `src/config.ts` → `contact.qrImage` | 图片放 `public/images/`，填路径如 `/images/wechat-qr.png` |
| 站点域名 | `src/config.ts` → `url` + `astro.config.mjs` → `site` + `public/robots.txt` | 三处保持一致 |
| 站点名称 | `src/config.ts` → `name` | 出现在标题后缀、页头、页脚 |

## Cloudflare Pages 部署

**方式一：Git 集成（推荐，自动构建）**
1. 推送本仓库到 GitHub/GitLab
2. Cloudflare Dashboard → Pages → 连接仓库
3. 构建设置：Framework preset 选 **Astro**；构建命令 `npm run build`；输出目录 `dist`
4. 绑定自定义域名后，更新上面三处域名配置并重新部署

**方式二：Wrangler 直传**
```bash
npm run build
npx wrangler pages deploy dist --project-name=hz-jxjy
```

## 部署后 SEO 操作

1. 百度站长平台 / Google Search Console 验证站点
2. 提交 sitemap：`https://你的域名/sitemap-index.xml`
3. 百度主动推送/普通收录提交各行业页 URL

## 内容维护

### 新增/修改行业页

编辑 `src/content/hangye/*.md`，frontmatter 字段由 `src/content.config.ts` 的 Zod schema 强校验：

- `creditRule`：学分要求一句话（显示在首页卡片和页内高亮块）
- `canMakeUp`：`yes`（仅建设工程）/ `no` / `check`
- `faqs`：会同时渲染为手风琴 + 输出 FAQPage JSON-LD
- `sources`：页面底部"官方来源"外链区

### 内容红线（写新内容必须遵守）

1. 公需科目只写"行业公需+一般公需**合计≥18**"，**不得拆成 12+6**
2. "4年累计360学时"**只用于建设工程系列**，其他行业不得套用
3. 集中补修**仅建设工程明文允许**，其他行业写"以本系列当年评审通知为准"
4. 职称规范名称：助理工程师 → 中级工程师 → 高级工程师 → 正高级工程师
5. 不使用"2022/2023年以来合计90学分"的历史过渡口径
6. 各行业累计口径每年可能变化，以当年评审通知为准并及时更新 `updatedAt`

## 页面结构

```
/                        首页（政策核心数字 + 15 行业导航 + 提醒）
/hangye/[slug]/          15 个行业系列页（SEO 主力）
/zhengce/                政策解读列表 + 3 篇解读
/pingtai/                浙江 12 个指定网络继续教育平台名单
/xuefenguize/            学分折算规则速查表
/faq/                    通用 FAQ（10 条，FAQPage JSON-LD）
/about/                  关于 + 联系方式
```

## SEO 已配置

- 每页独立 title/description/canonical/OG
- 行业页 + FAQ 页输出 FAQPage JSON-LD；行业页输出 BreadcrumbList；政策页输出 Article
- `@astrojs/sitemap` 自动生成 sitemap；`public/robots.txt`
- 页面底部官方来源外链（gov.cn）增强 E-E-A-T

## 后续扩展路线

- 按城市扩展：宁波、温州等 12 平台属地的继续教育指南
- 按年份归档各行业评审通知
- 资讯栏目承接长尾搜索词
