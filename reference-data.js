/* 只录入有可复核出处的模式规则。缺失值保持“未核实”，严禁按英雄职业凭空填出装。 */
window.HM_REFERENCE = Object.freeze({
  version:'26.23', updated:'2026-11-19',
  sources:{
    riot23:'https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-23-notes/',
    riot21:'https://www.leagueoflegends.com/en-au/news/game-updates/league-of-legends-patch-26-21-notes/',
    bands:'https://haidoudashi.com/aram/headliners/',
    augments:'https://haidoudashi.com/aram/augments/',
    openData:'https://arammayhem.com/data/',
    client:'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/zh_cn/v1/cherry-augments.json'
  },
  maps:[
    {name:'嚎哭深渊',en:'Howling Abyss',info:'大乱斗经典单线战场',source:'https://wiki.leagueoflegends.com/en-us/ARAM:_Mayhem'},
    {name:'屠夫之桥',en:"Butcher’s Bridge",info:'比尔吉沃特主题大乱斗地图。是否在当前模式轮换以客户端为准',source:'https://www.leagueoflegends.com/en-au/news/game-updates/league-of-legends-patch-26-21-notes/'},
    {name:'灵花地图（Koeshin’s Crossing）',en:"Koeshin’s Crossing",info:'灵花传送门与特殊河流地形；地图轮换和嘉宾演出是不同机制',source:'https://wiki.leagueoflegends.com/en-us/ARAM:_Mayhem'}
  ],
  headliners:[
    {id:'pentakill',name:'五杀乐队',en:'Pentakill',tag:'技能强化',effect:'开局强化 Q/W/E 中的一个基础技能：该技能 +20 技能急速、+10%伤害、+10%治疗及护盾效果。18 级可再强化一个技能，包含 R。',tip:'先确定本局被强化的是哪个技能，再评估其伤害、冷却与装备协同。',source:'bands',patch:'26.21',extra:['开局：Q / W / E','18 级：可选 R']},
    {id:'kda',name:'K/DA',en:'K/DA',tag:'额外强化',effect:'收集四张明星卡，集齐后额外获得一个强化。',tip:'留意地图中的明星卡；不属于额外装备或传统符文。',source:'bands',patch:'26.21'},
    {id:'heartsteel',name:'心之钢乐队',en:'HEARTSTEEL',tag:'成员贴纸',effect:'部分强化上出现乐队成员贴纸；选取带贴纸的强化可额外获得贴纸加成。',tip:'不能只比较海克斯本身的强度，要把贴纸加成计入。',source:'bands',patch:'26.21',extra:['永恩：+40%攻击速度、+20技能急速','瑟提：每级+30生命值','凯隐：+5%全能吸血','奎桑提：立即提升1级且等级上限+1','厄斐琉斯：+2个属性锻造器','伊泽瑞尔：每级+4攻击力与+4法术强度']},
    {id:'truedamage',name:'真实伤害',en:'True Damage',tag:'团队锻造',effect:'多杀、终结连杀或摧毁防御塔会掉落供触发队伍使用的锻造器。26.23 每队每局最多获得1个棱彩锻造器。',tip:'关注团战及推塔触发；不要把掉落当作必然事件。',source:'riot23',patch:'26.23'},
    {id:'spacegroove',name:'太空律动',en:'Space Groove',tag:'团队金币',effect:'在指定舞池跳舞直至迪斯科球落下，可为全场玩家各提供1000金币。',tip:'地图事件是全场共同奖励，不是某一边独享。',source:'bands',patch:'26.21'},
    {id:'cafe',name:'咖啡甜心',en:'Cafe Cuties',tag:'圣物增益',effect:'治疗圣物光环额外回复20%已损失生命值，并提供在6秒内衰减的25%移动速度。',tip:'圣物收益基于已损失生命值，并非最大生命值。',source:'bands',patch:'26.21'},
    {id:'bee',name:'小蜜蜂乐队',en:'The Bee Band',tag:'蜂蜜事件',effect:'蜂蜜和蜜蜂周期性出现：收集蜂蜜为你与队伍提供25金币，并治疗20%最大生命值；遭蜜蜂击中造成15%最大生命值伤害。',tip:'蜂蜜与蜜蜂效果不同，位置和闪避非常重要。',source:'bands',patch:'26.21'},
    {id:'command',name:'命令行',en:'Command Line',tag:'刷新升级',effect:'每轮第一次刷新会提升被刷出强化的稀有度。',tip:'刷新价值相对提高，但不意味着可无限刷新。',source:'bands',patch:'26.21'},
    {id:'arcade',name:'街机·比特狂飙',en:'Arcade / Bit Rush',tag:'阵亡复活',effect:'参与击杀获得代币；阵亡时可消耗4枚代币复活。',tip:'复活取决于代币数量，不是无条件复活。',source:'riot23',patch:'26.23'},
    {id:'debonair',name:'执事乐队·劫',en:'Debonair',tag:'金币收益',effect:'选择强化时额外获得金币。',tip:'金币收益应计入本局装备成型节奏。',source:'riot23',patch:'26.23'},
    {id:'lailusion',name:'彼岸灵花',en:'La Ilusión',tag:'死亡护盾',effect:'友方阵亡会留下蜡烛；拾取后为自己及附近队友提供护盾。',tip:'蜡烛需要拾取，不是阵亡自动给全队加盾。',source:'riot23',patch:'26.23'},
    {id:'maestro',name:'音乐大师·烬',en:'Maestro',tag:'强化选择',effect:'每次从4个候选强化中选择，不再是通常的3选1。',tip:'这改变选择空间，不改变每个强化的固有效果。',source:'riot23',patch:'26.23'}
  ],
  // 26.23 新增，只有正式来源提供的效果才收录；稀有度未在公告列出则不猜。
  patch23Augments:[
    {name:'Fortified',en:'Fortified',rarity:'未核实',category:'坦克',effect:'获得20护甲，额外护甲再提高25%。',source:'riot23'},
    {name:'Mystic Guard',en:'Mystic Guard',rarity:'未核实',category:'坦克',effect:'获得20魔抗，额外魔抗再提高25%。',source:'riot23'},
    {name:'Slime Time',en:'Slime Time',rarity:'未核实',category:'坦克',effect:'周期性自动向周围发射史莱姆造成魔法伤害。击中英雄后留下可拾取的治疗黏液。',source:'riot23'},
    {name:'Steadfaster Presence',en:'Steadfaster Presence',rarity:'未核实',category:'坦克',effect:'提供护甲、魔抗与韧性；生命值低于40%时加成提高。',source:'riot23'}
  ],
  skillNames:[
    '超负荷','回响施放','多重射击','三重射击','热舞怪兽','地形专家','反冲','邦！','活力焕发','急速之追求','惊惧','快步','连锁反应','面包和果酱','面包和黄油','面包和奶酪','仁慈打击','贪欲束缚','装填','深红钴蓝闪光','珠光手镯'
  ],
  questNames:[
    '艾卡西亚的陷落','海牛阿福的勇士','钢化你心','狙神飞星','高压锅','急速之追求','多重射击'
  ],
  pentakillChoices:[
    {name:'重型（Q）',en:'HEAVY',slot:'Q'},
    {name:'力量（W）',en:'POWER',slot:'W'},
    {name:'鞭挞（E）',en:'THRASH',slot:'E'},
    {name:'厄运（R）',en:'DOOM',slot:'R'}
  ]
});