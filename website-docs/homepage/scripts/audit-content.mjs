import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const output = join(process.cwd(), 'out');
const html = await readFile(join(output, 'index.html'), 'utf8');
const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, '');
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'The homepage must have one main heading');
for (const term of ['势途AI企业级知识库', '由Vantage万极维护并开源', '知识问答', '智能体与 MCP', '企业部署', '从自己的资料开始']) {
  assert.ok(visible.includes(term), `Missing product content: ${term}`);
}
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
  assert.ok(ids.has(anchor), `Missing navigation target: #${anchor}`);
}
const assets = new Set([...html.matchAll(/(?:src|href|poster)="(\/[^"?#]*)/g)].map(match => match[1]));
for (const asset of assets) {
  const path = join(output, decodeURIComponent(asset));
  let file = await stat(path);
  if (file.isDirectory()) file = await stat(join(path, 'index.html'));
  assert.ok(file.isFile() && file.size > 0, `Missing local asset: ${asset}`);
}
assert.match(html, /aria-controls="main-navigation"/);
console.log(`Homepage audit passed: product content, navigation anchors, and ${assets.size} local assets.`);
