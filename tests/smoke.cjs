// Pure-data checks; no network or dependencies needed.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'data.js'), 'utf8'), context, { filename: 'data.js' });
vm.runInNewContext(fs.readFileSync(path.join(root, 'roster.js'), 'utf8'), context, { filename: 'roster.js' });
const data = context.window.HM_DATA;
assert(data && Array.isArray(data.heroes), 'Must export hero catalog');
assert.equal(data.heroes.length, 173, 'Expected complete 173 champion roster for patch 26.23');
assert.equal(data.heroes.find(h=>h.id==='Yone')?.name, '永恩', 'Yone entry missing');
assert.equal(new Set(data.heroes.map(h => h.id)).size, data.heroes.length, 'Duplicate hero IDs');
const routes = data.heroes.flatMap(h => h.routes || []);
assert(routes.length >= 51, 'Expected at least 51 initial routes');
assert(data.heroes.filter(h=>(h.routes||[]).length===0).length===148, '148 new heroes should have honest empty builds');
assert.equal(new Set(routes.map(r => r.id)).size, routes.length, 'Duplicate route IDs');
for (const h of data.heroes) {
  assert(h.id && h.name && h.role, `Missing metadata for ${h.id}`);
  for (const r of h.routes || []) {
    assert(r.id && r.name && typeof r.priority === 'string' && typeof r.items === 'string', `Incomplete route: ${h.name}`);
  }
}
for (const file of ['index.html', 'app.js', 'data.js', 'roster.js', 'styles.css', 'favicon.svg', '.nojekyll']) {
  assert(fs.existsSync(path.join(root, file)), `Missing deployment asset: ${file}`);
}
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert(index.includes('<script src="data.js"></script>') && index.includes('<script src="roster.js"></script>') && index.includes('<script src="app.js"></script>'), 'Missing JS entrypoints');
console.log(`PASS: ${data.heroes.length} heroes, ${routes.length} routes, all deployment assets present.`);