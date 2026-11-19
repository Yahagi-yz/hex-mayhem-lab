/* Publicly attributed and individually reviewed champion evidence.
 * These are observed three-item paths, NOT jointly measured item/augment combinations.
 * Legacy speculative routes remain separate and never silently become verified.
 */
window.HM_BUILD_EVIDENCE={
  "version": "v1.4-pilot",
  "snapshotDate": "2026-11-19",
  "caveat": "所有三件套出装序列均是公开来源的观测结果；单独列出的热门海克斯没有与这些装备路径进行联合统计。小样本或旧版本不可视为当前必胜方案。",
  "credits": "出装与强化数据摘要：arammayhem.com（按英雄页面逐条核对），日期和补丁版本见各英雄；仅保留事实性简要数据及外部链接。",
  "heroes": {
    "MasterYi": {
      "name": "无极剑圣",
      "source": "https://arammayhem.com/build/masteryi/",
      "sourcePatch": "26.22",
      "statsDate": "2026-11-17",
      "skillPriority": "Q > E > W",
      "augments": {
        "prismatic": [
          "Mystic Punch",
          "Dual Wield",
          "Ultimate Awakening"
        ],
        "gold": [
          "Still Here",
          "Pursuit of Haste",
          "Upgrade Infinity Edge"
        ],
        "silver": [
          "Deft",
          "Upgrade Collector",
          "Blunt Force"
        ]
      },
      "paths": [
        {
          "id": "yi-onhit",
          "title": "攻速特效 · 公开三件套",
          "items": [
            "收集者",
            "破败王者之刃",
            "鬼索的狂暴之刃"
          ],
          "pickRate": 4.81,
          "winRate": 53.34
        },
        {
          "id": "yi-crit",
          "title": "暴击收割 · 公开三件套",
          "items": [
            "收集者",
            "破败王者之刃",
            "无尽之刃"
          ],
          "pickRate": 3.98,
          "winRate": 55.89
        },
        {
          "id": "yi-pen",
          "title": "暴击穿甲 · 公开三件套",
          "items": [
            "收集者",
            "无尽之刃",
            "多米尼克领主的致意"
          ],
          "pickRate": 3.35,
          "winRate": 58.19
        }
      ],
      "explicitCombos": [
        {
          "title": "Mystic Punch + Dashing",
          "augments": [
            "Mystic Punch",
            "Dashing"
          ],
          "note": "来源组合说明侧重 Q 循环与技能急速；其所述阈值和装备建议不等于整体胜率领先，需按当前版本复核。",
          "source": "https://arammayhem.com/build/masteryi/"
        }
      ]
    },
    "Rammus": {
      "name": "披甲龙龟",
      "source": "https://arammayhem.com/build/rammus/",
      "sourcePatch": "26.22",
      "statsDate": "2026-11-17",
      "skillPriority": "W > E > Q（参考不同来源的技能推荐）",
      "augments": {
        "prismatic": [
          "Goliath",
          "Icathia's Fall",
          "Mad Scientist"
        ],
        "gold": [
          "Armored Impact",
          "Tank Engine",
          "Quest: Steel Your Heart"
        ],
        "silver": [
          "Heavy Hitter",
          "Upgrade Immolate",
          "Dive Bomber"
        ]
      },
      "paths": [
        {
          "id": "ram-warmog",
          "title": "心钢 + 反甲 + 狂徒 · 公开三件套",
          "items": [
            "心之钢",
            "荆棘之甲",
            "狂徒铠甲"
          ],
          "pickRate": 16.24,
          "winRate": 47.26
        },
        {
          "id": "ram-unending",
          "title": "心钢 + 反甲 + 无终恨意 · 公开三件套",
          "items": [
            "心之钢",
            "荆棘之甲",
            "无终恨意"
          ],
          "pickRate": 8.06,
          "winRate": 48.1
        }
      ],
      "explicitCombos": [
        {
          "title": "Ethereal Weapon",
          "augments": [
            "Ethereal Weapon"
          ],
          "note": "来源组合页将此强化与龙龟 W 反伤触发攻击特效联系起来；属于机制组合说明，不是整套出装统计。",
          "source": "https://arammayhem.com/build/rammus/"
        }
      ]
    },
    "XinZhao": {
      "name": "德邦总管",
      "source": "https://arammayhem.com/build/xinzhao/",
      "sourcePatch": "26.22",
      "statsDate": "2026-11-17",
      "skillPriority": "Q > E > W（来源页面的主要技能点法；其他统计站口径不同）",
      "augments": {
        "prismatic": [
          "Master of Duality",
          "Mystic Punch",
          "Dual Wield"
        ],
        "gold": [
          "Still Here",
          "Ethereal Weapon",
          "The Boom and the Bass"
        ],
        "silver": [
          "Zealot",
          "Flow of Spirit",
          "Typhoon"
        ]
      },
      "paths": [
        {
          "id": "xin-dd",
          "title": "电刃 + 黄昏与黎明 + 死亡之舞",
          "items": [
            "斯塔缇克电刃",
            "黄昏与黎明",
            "死亡之舞"
          ],
          "pickRate": 12.58,
          "winRate": 55.06
        },
        {
          "id": "xin-visage",
          "title": "电刃 + 黄昏与黎明 + 振奋盔甲",
          "items": [
            "斯塔缇克电刃",
            "黄昏与黎明",
            "振奋盔甲"
          ],
          "pickRate": 6.95,
          "winRate": 54.27
        },
        {
          "id": "xin-heartsteel",
          "title": "心钢前置 · 公开三件套",
          "items": [
            "心之钢",
            "斯塔缇克电刃",
            "黄昏与黎明"
          ],
          "pickRate": 3.81,
          "winRate": 53.81
        }
      ],
      "explicitCombos": [
        {
          "title": "Master of Duality + Protein Shake",
          "augments": [
            "Master of Duality",
            "Protein Shake"
          ],
          "note": "来源讨论物法双修与赵信治疗收益；并没有提供这组海克斯对应的六神装胜率。",
          "source": "https://arammayhem.com/build/xinzhao/"
        }
      ]
    },
    "Yone": {
      "name": "封魔剑魂",
      "source": "https://arammayhem.com/build/yone/",
      "sourcePatch": "26.22",
      "statsDate": "2026-11-16",
      "skillPriority": "Q > E > W",
      "augments": {
        "prismatic": [
          "Mystic Punch",
          "Jeweled Gauntlet",
          "Final Form"
        ],
        "gold": [
          "Soul Siphon",
          "Still Here",
          "The Boom and the Bass"
        ],
        "silver": [
          "Upgrade Death's Dance",
          "Deft",
          "Tank It Or Leave It"
        ]
      },
      "paths": [
        {
          "id": "yone-yuntal",
          "title": "芸塔尔 + Rite of Ruin + 死亡之舞",
          "items": [
            "Yun Tal Wildarrows",
            "Rite of Ruin",
            "死亡之舞"
          ],
          "pickRate": 5.82,
          "winRate": 61.8,
          "note": "装备英文名称按来源原样保留；该路线样本占比不高，不能因为观察胜率最高就断言最优。"
        },
        {
          "id": "yone-botrk",
          "title": "破败 + 盾弓 + 无尽",
          "items": [
            "破败王者之刃",
            "不朽盾弓",
            "无尽之刃"
          ],
          "pickRate": 3.49,
          "winRate": 50.5
        },
        {
          "id": "yone-crit",
          "title": "芸塔尔 + 无尽 + 死亡之舞",
          "items": [
            "Yun Tal Wildarrows",
            "无尽之刃",
            "死亡之舞"
          ],
          "pickRate": 2.49,
          "winRate": 53.83
        }
      ],
      "explicitCombos": [
        {
          "title": "Critical Healing + Deft",
          "augments": [
            "Critical Healing",
            "Deft"
          ],
          "note": "来源明确描述暴击治疗与攻速的协同，是玩法建议而不是三件套联合数据。",
          "source": "https://arammayhem.com/build/yone/"
        }
      ]
    }
  }
};
