import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const hangye = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hangye' }),
  schema: z.object({
    /** 行业名称，如"建设工程" */
    name: z.string(),
    /** SEO title（不含站点名后缀） */
    title: z.string(),
    /** meta description */
    description: z.string(),
    /** 关键词（备用） */
    keywords: z.array(z.string()).default([]),
    /** 涉及评审级别，如"中级工程师 / 高级工程师 / 正高级工程师" */
    level: z.string(),
    /** 学分要求一句话，如"2024年以来合计240学分，2025年起每年≥90学分" */
    creditRule: z.string(),
    /** 学分特殊说明（如建设工程"4年累计360学分"专属规则） */
    creditNote: z.string().optional(),
    /** 是否明文允许集中补修：yes 仅建设工程；check 以当年通知为准 */
    canMakeUp: z.enum(['yes', 'no', 'check']).default('check'),
    /** 学分登记路径 */
    registerPath: z.array(z.string()),
    /** 申报时间窗（如有） */
    applyWindow: z.string().optional(),
    /** 主管部门联系方式 */
    contacts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    /** 官方来源链接（页面底部展示 + E-E-A-T） */
    sources: z.array(z.object({ title: z.string(), url: z.string() })).min(1),
    /** 该行业常见问题（渲染 + FAQPage JSON-LD） */
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    updatedAt: z.string(),
    /** 排序权重，越小越靠前 */
    order: z.number().default(99),
  }),
});

export const collections = { hangye };
