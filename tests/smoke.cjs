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

// Patch 26.23 opening rules and 173-champion roster must be complete and sourced.
vm.runInNewContext(fs.readFileSync(path.join(root, 'reference-data.js'), 'utf8'), context, {filename:'reference-data.js'});
assert.equal(context.window.HM_REFERENCE.headliners.length,12,'Expected 12 independently sourced headliners');
assert.equal(context.window.HM_REFERENCE.patch23Augments.length,4,'Expected 4 new augments in 26.23');
const manifest=fs.readFileSync(path.join(root,'roster.js'),'utf8');
assert(manifest.includes('Yone|永恩|战士')&&manifest.includes('Locke|洛克|刺客'),'Missing complete roster examples');
assert(index.includes('headliners')&&index.includes('reference-data.js')&&index.includes('verified-data.js'),'Missing source-backed views');
const app=fs.readFileSync(path.join(root,'app.js'),'utf8');
assert(app.includes('function sourcedCombinationsFor')&&app.includes('function headlinersPage'),'Missing sourced-combo and headliner UI');
console.log('PASS: 12 headliners, 4 official 26.23 augments, 173-roster support, explicit evidence UI.');
vm.runInNewContext(fs.readFileSync(path.join(root,'build-evidence.js'),'utf8'),context,{filename:'build-evidence.js'});
const e=context.window.HM_BUILD_EVIDENCE;
assert(e&&e.heroes,'Missing build evidence module');
assert.equal(Object.keys(e.heroes).length,4,'Four pilot champions required');
let n=0;for(const [id,h] of Object.entries(e.heroes)){
 assert(data.heroes.some(hero=>hero.id===id),'Unknown champion in evidence: '+id);
 assert(h.source.startsWith('https://'),'Source URL required');
 assert(h.sourcePatch==='26.22','Evidence patch label must match source snapshot');
 assert(h.statsDate&&h.augments&&Array.isArray(h.paths),'Missing evidence metadata');
 for(const p of h.paths){n++;assert(p.items.length===3,'Only observed three-item paths are allowed');
 assert(p.pickRate>0&&p.winRate>=0&&p.winRate<=100,'Out of range source stats');
 assert(p.id&&p.title,'Missing build identifier');}
}
assert.equal(n,11,'Expected 11 observed source paths');
assert(index.includes('build-evidence.js'),'Missing evidence loader');
assert(app.includes('renderBuildEvidenceHero')&&app.includes('evidence-copy'),'Missing evidence UI');
console.log('PASS: 4 sourced champions, 11 observed three-item paths; independent augments separated.');
