/* Evidence-first ability augment guide. Not a complete champion eligibility matrix. */
window.HM_ABILITY_EVIDENCE=Object.freeze({
  "schema": 1,
  "updated": "2026-11-20",
  "status": "partial-official-evidence",
  "sources": {
    "riot": "https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-12-notes/",
    "riotFix": "https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-13-notes/",
    "hexaram": "https://hexaram.lol/en/champions/",
    "ddragon": "https://ddragon.leagueoflegends.com/"
  },
  "disclaimer": "这里只录入公开来源明确指名的英雄+技能实例；未列出不代表不可获得。固定槽位关联也不等于隐藏掉落白名单。客户端实际可选结果优先。",
  "rules": [
    {
      "id": "eligibility",
      "title": "只会提供对英雄可用的技能强化",
      "patch": "26.12",
      "source": "https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-12-notes/"
    },
    {
      "id": "eligibility-fix",
      "title": "26.13 修复错误派发及后续槽位出现率问题",
      "patch": "26.13",
      "source": "https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-13-notes/"
    },
    {
      "id": "runes",
      "title": "海克斯大乱斗不使用传统符文配置",
      "patch": "26.23",
      "source": "https://support.riotgames.com/en-us/league-of-legends/events/league-of-legends-aram-mayhem-game-mode"
    }
  ],
  "fixedSlots": [
    {
      "slot": "Q",
      "name": "Bread and Butter",
      "zh": "面包和黄油",
      "description": "固定关联 Q 的技能急速强化类型；是否出现、对该技能是否有效，仍按实际游戏机制判断。"
    },
    {
      "slot": "W",
      "name": "Bread and Jam",
      "zh": "面包和果酱",
      "description": "固定关联 W 的技能急速强化类型；不代表所有英雄都可获得或收益一致。"
    },
    {
      "slot": "E",
      "name": "Bread and Cheese",
      "zh": "面包和奶酪",
      "description": "固定关联 E 的技能急速强化类型；不代表所有英雄都可获得或收益一致。"
    }
  ],
  "examples": [
    {
      "heroId": "Lux",
      "slot": "Q",
      "augment": "Multishot",
      "zh": "多重射击",
      "patch": "26.12",
      "kind": "官方明确演示",
      "note": "Riot 开发文章以拉克丝 Q 举例：附加射弹可扩大禁锢命中范围；演示不等于此强化在所有补丁、所有时段的稳定出现率。",
      "source": "https://www.leagueoflegends.com/en-gb/news/dev/dev-augmentmaxxing-aram-mayhem/"
    },
    {
      "heroId": "Garen",
      "slot": "E",
      "augment": "Quickstep",
      "zh": "快步",
      "patch": "26.12",
      "kind": "官方明确举例",
      "note": "Riot 26.12 更新说明明确用盖伦 E（自身范围技能）举例：施放后向前位移。",
      "source": "https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-12-notes/"
    },
    {
      "heroId": "Kennen",
      "slot": "R",
      "augment": "Quickstep",
      "zh": "快步",
      "patch": "26.12",
      "kind": "官方明确举例",
      "note": "Riot 26.12 更新说明明确用凯南 R 举例：自体范围技能触发向前位移。",
      "source": "https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-12-notes/"
    },
    {
      "heroId": "Blitzcrank",
      "slot": "Q",
      "augment": "Multishot",
      "zh": "多重射击",
      "patch": "26.12",
      "kind": "官方明确举例",
      "note": "Riot 26.12 更新说明明确举例：机器人 Q 可在技能强化后发射三条钩子。",
      "source": "https://www.leagueoflegends.com/en-us/news/game-updates/league-of-legends-patch-26-12-notes/"
    }
  ],
  "cautions": [
    {
      "heroId": "Yone",
      "slot": "Q",
      "patch": "26.21",
      "note": "来源的技能机制表标注：永恩 Q 不受传统技能急速影响。不能把通用 Q 技能急速直接视为其必然收益。",
      "source": "https://hexaram.lol/en/champions/yone/"
    },
    {
      "heroId": "Yone",
      "slot": "W",
      "patch": "26.21",
      "note": "来源的技能机制表标注：永恩 W 冷却随攻击速度变化，不按常规技能急速收益理解。",
      "source": "https://hexaram.lol/en/champions/yone/"
    }
  ],
  "dynamicAugments": [
    {
      "name": "Adaptive Ward",
      "zh": "自适应护卫",
      "rarity": "白银",
      "rule": "技能击中敌方英雄时，按目标伤害类型获得持续一段时间的护甲或魔抗。",
      "trigger": "由游戏内指定技能触发；具体技能可选资格未公开。 当前版本的实际掉落资格以客户端为准。",
      "patch": "26.21",
      "source": "https://hexaram.lol/en/champions/lux/"
    },
    {
      "name": "Bolstered",
      "zh": "强效护盾",
      "rarity": "白银",
      "rule": "来自被选定技能的护盾会随目标已损失生命值提高效果。",
      "trigger": "要求技能具备有效护盾交互；未获取逐英雄发放表。 当前版本的实际掉落资格以客户端为准。",
      "patch": "26.21",
      "source": "https://hexaram.lol/en/champions/lux/"
    },
    {
      "name": "BONK!",
      "zh": "邦！",
      "rarity": "黄金",
      "rule": "由选定技能强化的普攻或技能对目标与附近敌人造成额外伤害。",
      "trigger": "需要符合技能增强普攻机制，不能泛化到所有 Q/W/E/R。 当前版本的实际掉落资格以客户端为准。",
      "patch": "26.21",
      "source": "https://hexaram.lol/en/champions/lux/"
    },
    {
      "name": "Chain Reaction",
      "zh": "连锁反应",
      "rarity": "黄金",
      "rule": "被选定技能击退的敌人若撞到其他英雄或地形，会产生额外控制及伤害。",
      "trigger": "依赖击退和碰撞，不是所有控制技能都满足。 当前版本的实际掉落资格以客户端为准。",
      "patch": "26.21",
      "source": "https://hexaram.lol/en/champions/lux/"
    },
    {
      "name": "CRIMSON COBALT",
      "zh": "深红钴蓝",
      "rarity": "黄金",
      "rule": "被选定技能伤害标记的目标，在后续普攻触发标记时造成额外伤害并减少被选技能冷却。",
      "trigger": "由游戏内选定技能，实际资格与伤害数值以客户端为准。 当前版本的实际掉落资格以客户端为准。",
      "patch": "26.21",
      "source": "https://hexaram.lol/en/champions/lux/"
    },
    {
      "name": "Double Strike",
      "zh": "双重打击",
      "rarity": "白银",
      "rule": "被选定的技能额外应用一次攻击特效。",
      "trigger": "只能对可触发攻击特效的技能按机制使用，不能一律套用。 当前版本的实际掉落资格以客户端为准。",
      "patch": "26.21",
      "source": "https://hexaram.lol/en/champions/lux/"
    }
  ]
});
