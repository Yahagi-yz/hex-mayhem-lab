/* Generate public, attributed snapshot from CC-BY-4.0 arammayhem.com plus CommunityDragon metadata.
 * No claim of win-rate, champion-item synergy, or guaranteed availability is generated.
 */
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const base='https://arammayhem.com/data/v1/latest/';
const client='https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/zh_cn/v1/cherry-augments.json';
async function load(url){const ctl=new AbortController();const timeout=setTimeout(()=>ctl.abort(),18000);try{const res=await fetch(url,{signal:ctl.signal,headers:{'User-Agent':'HexMayhemLab/1.3 (public data with attribution)'}});if(!res.ok)throw Error(`${res.status} ${url}`);return await res.json()}finally{clearTimeout(timeout)}}
function normCDragon(x){const arr=Array.isArray(x)?x:Object.values(x||{});return arr.filter(v=>v&&typeof v==='object'&&(v.nameTRA||v.name||v.augmentNameId)).map(v=>({id:String(v.augmentNameId||v.id||''),name:String(v.nameTRA||v.name||''),description:String(v.summaryDescription||v.description||''),rarity:v.rarity||'',tags:v.augmentDisplayTags||[],image:v.augmentSmallIconPath||''}));}
async function main(){const [aug,cms,comb,cd]=await Promise.allSettled([
load(base+'augments.json'),load(base+'champions.json'),load(base+'combos.json'),load(client)]);
 const fail=(key,x)=>{console.log('Source unavailable:',key,String(x?.reason||''));return null};
 const augData=aug.status==='fulfilled'?aug.value:fail('augments',aug),champData=cms.status==='fulfilled'?cms.value:fail('champions',cms),comboData=comb.status==='fulfilled'?comb.value:fail('combos',comb),cdData=cd.status==='fulfilled'?cd.value:fail('communitydragon',cd);
 const augments=(augData?.rows||[]).map(x=>({id:String(x.augmentId),name:String(x.name?.['zh-CN']||x.name?.en||x.slug),en:String(x.name?.en||''),rarity:x.rarity||'',pickRate:x.pickRate??null,introducedPatch:x.introducedPatch??null,retiredPatch:x.retiredPatch??null,url:x.url||''}));
 const champions=(champData?.rows||[]).map(x=>({id:String(x.championId),name:String(x.name?.['zh-CN']||x.name?.en||''),en:String(x.name?.en||''),pickRate:x.pickRate??null,url:x.url||''}));
 const combos=(comboData?.rows||[]).map(x=>({championId:String(x.championId),augmentIds:(x.augmentIds||[]).map(String),types:(x.types||[]).map(String),url:x.url||'',name:String(x.slug||'')}));
 const clientAugments=cdData?normCDragon(cdData):[];
 if(augments.length<150)throw Error(`Expected at least 150 open augment records, got ${augments.length}; refusing to publish incomplete snapshot`);
 if(champions.length<160)throw Error(`Expected at least 160 champion records, got ${champions.length}`);
 const meta={status:'sourced',patch:augData.meta.patch,statsDate:augData.meta.statsDate,builtAt:new Date().toISOString(),license:'CC BY 4.0',attribution:'数据来源：arammayhem.com',attributionUrl:'https://arammayhem.com/data/',communityDragonUrl:client,clientCount:clientAugments.length,notes:'登场率仅限来源样本；组合列表不提供英雄装备顺序或胜率'};
 const data={meta,augments,champions,combos,clientAugments};
 fs.writeFileSync(path.join(root,'verified-data.js'),'/* Automatically generated from credited sources; do not edit manually. */\nwindow.HM_VERIFIED='+JSON.stringify(data)+';\n');
 console.log(JSON.stringify({status:'OK',patch:meta.patch,statsDate:meta.statsDate,augmentCount:augments.length,championCount:champions.length,comboCount:combos.length,clientCount:clientAugments.length,bytes:fs.statSync(path.join(root,'verified-data.js')).size}));
}
main().catch(e=>{console.error('Reference data verification failed:',e);process.exitCode=1});