import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const bundlePath = fileURLToPath(new URL('../assets/index-pages.js', import.meta.url));
const indexPath = fileURLToPath(new URL('../index.html', import.meta.url));
let bundle = readFileSync(bundlePath, 'utf8');
let index = readFileSync(indexPath, 'utf8');

const existingCard = 'title:`造物工场`,detailUrl:`/ProductWorkshop/`';
const agentHarborTail = 'title:`Agent Harbor`,detailUrl:`/AgentHarbor/`,copy:`在 Mac 顶部统一查看 Claude Code、Codex 与 DeepSeek Harness 的任务状态，并直接处理权限、问题和计划审阅。`,url:`/AgentHarbor/`,cover:`/assets/agent-harbor-cover.png`,action:`查看产品介绍`}].filter(e=>e.kind===q)';
const productWorkshopTail = 'title:`Agent Harbor`,detailUrl:`/AgentHarbor/`,copy:`在 Mac 顶部统一查看 Claude Code、Codex 与 DeepSeek Harness 的任务状态，并直接处理权限、问题和计划审阅。`,url:`/AgentHarbor/`,cover:`/assets/agent-harbor-cover.png`,action:`查看产品介绍`},{index:`07`,kind:`product`,meta:`PRODUCT · 04 · V0.1.0`,title:`造物工场`,detailUrl:`/ProductWorkshop/`,copy:`把用户目标、Agent 协作、预算权限、真实预览、证据和用户 Gate 放进同一条交付链。`,status:`macOS 体验版可下载`,url:`/ProductWorkshop/#download`,cover:`/assets/product-workshop-cover.png`,action:`查看并下载`}].filter(e=>e.kind===q)';

if (!bundle.includes(existingCard)) {
  const matches = bundle.split(agentHarborTail).length - 1;
  if (matches !== 1) {
    throw new Error(`Expected one Agent Harbor product tail, found ${matches}`);
  }
  bundle = bundle.replace(agentHarborTail, productWorkshopTail);
}

index = index.replace(
  'src="./assets/index-pages.js"',
  'src="./assets/index-pages.js?v=product-workshop-0.1.0"',
);

writeFileSync(bundlePath, bundle);
writeFileSync(indexPath, index);
console.log('Added Product Workshop after Agent Harbor and updated the bundle cache key.');
