/**
 * 百度搜索资源平台「普通收录」API 主动推送脚本。
 * 用法：node scripts/baidu-push.mjs [sitemapUrl]
 * 从 sitemap 读取全部 URL，批量 POST 给百度。也可用 BAIDU_PUSH_TOKEN 覆盖默认 token。
 * 官方限制：每天可推送的配额有限，重复推送不扣分但无意义，建议新页面发布后再跑。
 */
const SITE = 'https://zcsb123.com';
const TOKEN = process.env.BAIDU_PUSH_TOKEN ?? 'iUWL7gyIxvNl3ttZ';
const PUSH_API = `http://data.zz.baidu.com/urls?site=${SITE}&token=${TOKEN}`;

const sitemapUrl = process.argv[2] ?? `${SITE}/sitemap-0.xml`;

const xml = await (await fetch(sitemapUrl)).text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) throw new Error(`未从 ${sitemapUrl} 解析到任何 URL`);

console.log(`推送 ${urls.length} 个 URL 到百度…`);
const res = await fetch(PUSH_API, {
  method: 'POST',
  headers: { 'Content-Type': 'text/plain' },
  body: urls.join('\n'),
});
const result = await res.json();
console.log('百度返回：', result);
// 正常返回：{"success":24,"remain":99999...}；失败时含 error/message 字段
