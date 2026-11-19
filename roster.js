/* Official champion roster fallback for patch 26.23 (Data Dragon 16.23.1).
 * New champions are blank by design: no fabricated augments/builds.
 * The authoritative zh_CN metadata is refreshed from Riot Data Dragon on load.
 */
(() => {
'use strict';
const seed = window.HM_DATA;
if (!seed || !Array.isArray(seed.heroes)) return;
const manifest = `
Aatrox|亚托克斯|战士
Ahri|阿狸|法师
Akali|阿卡丽|刺客
Akshan|阿克尚|射手
Alistar|阿利斯塔|坦克
Ambessa|安蓓萨|战士
Amumu|阿木木|坦克
Anivia|艾尼维亚|法师
Annie|安妮|法师
Aphelios|厄斐琉斯|射手
Ashe|艾希|射手
AurelionSol|奥瑞利安·索尔|法师
Aurora|阿萝拉|法师
Azir|阿兹尔|法师
Bard|巴德|辅助
Belveth|卑尔维斯|战士
Blitzcrank|布里茨|坦克
Brand|布兰德|法师
Braum|布隆|辅助
Briar|贝蕾亚|战士
Caitlyn|凯特琳|射手
Camille|卡蜜尔|战士
Cassiopeia|卡西奥佩娅|法师
Chogath|科加斯|坦克
Corki|库奇|射手
Darius|德莱厄斯|战士
Diana|黛安娜|刺客
DrMundo|蒙多医生|坦克
Draven|德莱文|射手
Ekko|艾克|刺客
Elise|伊莉丝|法师
Evelynn|伊芙琳|刺客
Ezreal|伊泽瑞尔|射手
Fiddlesticks|费德提克|法师
Fiora|菲奥娜|战士
Fizz|菲兹|刺客
Galio|加里奥|坦克
Gangplank|普朗克|战士
Garen|盖伦|战士
Gnar|纳尔|战士
Gragas|古拉加斯|战士
Graves|格雷福斯|射手
Gwen|格温|战士
Hecarim|赫卡里姆|战士
Heimerdinger|黑默丁格|法师
Hwei|彗|法师
Illaoi|俄洛伊|战士
Irelia|艾瑞莉娅|战士
Ivern|艾翁|辅助
Janna|迦娜|辅助
JarvanIV|嘉文四世|战士
Jax|贾克斯|战士
Jayce|杰斯|战士
Jhin|烬|射手
Jinx|金克丝|射手
Kaisa|卡莎|射手
Kalista|卡莉丝塔|射手
Karma|卡尔玛|辅助
Karthus|卡尔萨斯|法师
Kassadin|卡萨丁|刺客
Katarina|卡特琳娜|刺客
Kayle|凯尔|战士
Kayn|凯隐|战士
Kennen|凯南|法师
Khazix|卡兹克|刺客
Kindred|千珏|射手
Kled|克烈|战士
KogMaw|克格莫|射手
KSante|奎桑提|坦克
Leblanc|乐芙兰|刺客
LeeSin|李青|战士
Leona|蕾欧娜|坦克
Lillia|莉莉娅|战士
Lissandra|丽桑卓|法师
Locke|洛克|刺客
Lucian|卢锡安|射手
Lulu|璐璐|辅助
Lux|拉克丝|法师
Malphite|墨菲特|坦克
Malzahar|玛尔扎哈|法师
Maokai|茂凯|坦克
MasterYi|易|战士
Mel|梅尔|法师
Milio|米利欧|辅助
MissFortune|厄运小姐|射手
Mordekaiser|莫德凯撒|战士
Morgana|莫甘娜|辅助
Naafiri|纳亚菲利|刺客
Nami|娜美|辅助
Nasus|内瑟斯|战士
Nautilus|诺提勒斯|坦克
Neeko|妮蔻|法师
Nidalee|奈德丽|刺客
Nilah|尼菈|射手
Nocturne|魔腾|刺客
Nunu|努努和威朗普|坦克
Olaf|奥拉夫|战士
Orianna|奥莉安娜|法师
Ornn|奥恩|坦克
Pantheon|潘森|战士
Poppy|波比|坦克
Pyke|派克|刺客
Qiyana|奇亚娜|刺客
Quinn|奎因|射手
Rakan|洛|辅助
Rammus|拉莫斯|坦克
RekSai|雷克塞|战士
Rell|芮尔|坦克
Renata|烈娜塔|辅助
Renekton|雷克顿|战士
Rengar|雷恩加尔|刺客
Riven|锐雯|战士
Rumble|兰博|战士
Ryze|瑞兹|法师
Samira|莎弥拉|射手
Sejuani|瑟庄妮|坦克
Senna|赛娜|射手
Seraphine|萨勒芬妮|辅助
Sett|瑟提|战士
Shaco|萨科|刺客
Shen|慎|坦克
Shyvana|希瓦娜|战士
Singed|辛吉德|坦克
Sion|赛恩|坦克
Sivir|希维尔|射手
Skarner|斯卡纳|坦克
Smolder|斯莫德|射手
Sona|娑娜|辅助
Soraka|索拉卡|辅助
Swain|斯维因|法师
Sylas|塞拉斯|法师
Syndra|辛德拉|法师
TahmKench|塔姆|坦克
Taliyah|塔莉垭|法师
Talon|泰隆|刺客
Taric|塔里克|辅助
Teemo|提莫|射手
Thresh|锤石|辅助
Tristana|崔丝塔娜|射手
Trundle|特朗德尔|战士
Tryndamere|泰达米尔|战士
TwistedFate|崔斯特|法师
Twitch|图奇|射手
Udyr|乌迪尔|战士
Urgot|厄加特|战士
Varus|韦鲁斯|射手
Vayne|薇恩|射手
Veigar|维迦|法师
Velkoz|维克兹|法师
Vex|薇古丝|法师
Vi|蔚|战士
Viego|佛耶戈|战士
Viktor|维克托|法师
Vladimir|弗拉基米尔|法师
Volibear|沃利贝尔|战士
Warwick|沃里克|战士
MonkeyKing|孙悟空|战士
Xayah|霞|射手
Xerath|泽拉斯|法师
XinZhao|赵信|战士
Yasuo|亚索|战士
Yone|永恩|战士
Yorick|约里克|战士
Yuumi|悠米|辅助
Yunara|芸阿娜|射手
Zaahen|亚恒|战士
Zac|扎克|坦克
Zed|劫|刺客
Zeri|泽丽|射手
Ziggs|吉格斯|法师
Zilean|基兰|辅助
Zoe|佐伊|法师
Zyra|婕拉|法师
`.trim().split('\n').map(row => {
  const [id,name,role]=row.split('|'); return {id,name,role};
});
const known = new Set(seed.heroes.map(h => h.id));
for (const h of manifest) {
  if (known.has(h.id)) continue;
  seed.heroes.push({id:h.id,name:h.name,title:'待同步官方称号',role:h.role,aliases:[h.id],routes:[],source:'',catalogStatus:'待完善'});
  known.add(h.id);
}
seed.roster = {version:'16.23.1',expected:173,source:'Riot Data Dragon',offlineFallback:true};

const roleMap = {Fighter:'战士',Mage:'法师',Marksman:'射手',Assassin:'刺客',Tank:'坦克',Support:'辅助'};
function applyRoster(champions) {
  if (!Array.isArray(champions) || champions.length < 173) return false;
  const byId = new Map(seed.heroes.map(h=>[h.id,h]));
  let changes=0;
  for (const ch of champions) {
    const id=String(ch.id||'').trim();
    if (!/^[A-Za-z][A-Za-z0-9]{1,30}$/.test(id) || !ch.name) continue;
    let h=byId.get(id);
    if (!h) {
      h={id,name:String(ch.name),title:String(ch.title||''),role:'战士',aliases:[id],routes:[],source:'',catalogStatus:'待完善'};
      seed.heroes.push(h); byId.set(id,h);
    }
    if (h.catalogStatus==='待完善') {
      h.name=String(ch.name);h.title=String(ch.title||'');
      h.role=(ch.tags||[]).map(t=>roleMap[t]).filter(Boolean).join(' / ')||h.role;
      h.aliases=[...new Set([...(h.aliases||[]),id])];
      changes++;
    }
  }
  seed.roster.verified=true;
  seed.roster.fetchedAt=new Date().toISOString();
  return changes>0;
}
function notify(){window.dispatchEvent(new Event('hm-roster-updated'))}
const CACHE='hex_mayhem_champion_roster_16_23_1';
try {
  const cached=JSON.parse(localStorage.getItem(CACHE)||'null');
  if (cached?.version===seed.roster.version && Array.isArray(cached.champions)) applyRoster(cached.champions);
} catch (_) {}
// 2026 patch 26.23 has Data Dragon version 16.23.1.
if (typeof fetch==='function') {
  fetch('https://ddragon.leagueoflegends.com/cdn/16.23.1/data/zh_CN/champion.json')
    .then(r=>{if(!r.ok)throw Error(`Data Dragon HTTP ${r.status}`);return r.json()})
    .then(j=>{
      if(!j||!j.data)return;
      const champions=Object.values(j.data).map(c=>({id:c.id,name:c.name,title:c.title,tags:c.tags}));
      if(applyRoster(champions))notify();
      if(champions.length>=173)try{localStorage.setItem(CACHE,JSON.stringify({version:seed.roster.version,champions}))}catch(_){ }
    }).catch(()=>{ /* Use bundled Chinese names and cached metadata on offline/fetch failure. */ });
}
})();