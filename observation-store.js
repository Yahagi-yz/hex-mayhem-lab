/* Local evidence never becomes official eligibility without independent verification. */
window.HM_OBSERVATION_STORE=(()=>{
'use strict';
const statuses=Object.freeze({offered:'候选出现（未确认技能）',selected:'已成功指定技能',triggered:'实战效果已触发'});
const slots=['?','Q','W','E','R'];
const trim=(v,n)=>String(v==null?'':v).trim().slice(0,n);
function normalize(v){
 if(!v||typeof v!=='object')return null;
 const heroId=trim(v.heroId,40),slot=trim(v.slot,2),augment=trim(v.augment,90),patch=trim(v.patch,12),status=trim(v.status,20);
 if(!/^[A-Za-z][A-Za-z0-9]{1,30}$/.test(heroId)||!slots.includes(slot)||!augment||!/^\d{2}\.\d{1,2}$/.test(patch)||!Object.hasOwn(statuses,status)||(status!=='offered'&&slot==='?'))return null;
 if(['重型（Q）','力量（W）','鞭挞（E）','厄运（R）'].includes(augment))return null;
 const proof=trim(v.proofUrl,500),proofUrl=/^https:\/\/[^\s]+$/i.test(proof)?proof:'';
 return {id:trim(v.id,48)||'obs-'+Date.now(),heroId,slot,augment,patch,status,note:trim(v.note,500),proofUrl,createdAt:trim(v.createdAt,48)||new Date().toISOString(),provenance:'user-self-report'};
}
function normalizeMany(list){
 if(!Array.isArray(list))return [];
 const ids=new Set();
 return list.slice(0,3000).map(normalize).filter(x=>{if(!x||ids.has(x.id))return false;ids.add(x.id);return true});
}
function stats(list){
 const rows=normalizeMany(list),used=rows.filter(x=>x.status!=='offered'&&x.slot!=='?');
 return {records:rows.length,skillPairs:new Set(used.map(x=>x.heroId+'/'+x.slot)).size,
 interactions:new Set(used.map(x=>x.heroId+'/'+x.slot+'/'+x.augment+'/'+x.patch)).size,
 heroes:new Set(rows.map(x=>x.heroId)).size};
}
return Object.freeze({statuses,slots,normalize,normalizeMany,stats});
})();
