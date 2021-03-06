export const servantConfigList = [
  {
    //英靈編號
    id: '1',
    //英靈名稱
    fullname: '瑪修・基利艾拉特',
    //英靈職階
    classType: 'shielder',
    //英靈類別(天地人星)
    alignmentType: 'earth',
    //英靈特殊屬性
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋'
    ],
    //星掉落率
    starDrop: 9.9,
    //卡組配置(2張arts卡,2張buster卡,1張quick卡)
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    //攻擊次數以及每下攻擊的傷害比例
    hits: {
      //arts牌打兩下，傷害比例分別為33/(33+67)與67/(33+67)
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        25,
        75
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    //NP獲得率
    npGain: {
      arts: 0.84,
      buster: 0.84,
      quick: 0.84,
      extra: 0.84,
      weapon: 0.84
    },
    //寶具及效果
    weaponList: [
      {
        cardType: 'arts',
        name: '假想寶具 模擬展開／人理之礎',
        specialBoost: [],
        effectList: []
      },
      {
        cardType: 'arts',
        name: 'いまは遙か理想の城(レプリカ(4/5))',
        specialBoost: [],
        /**
          目前的寶具效果列表：
          decreaseAllDefense:降低敵方全體的防禦
          decreaseOneDefense:降低敵方單體的防禦
          decreaseSelfAttack:降低自己的攻擊
          dispelOneBuff:移除敵方單體強化效果
          dispelAllBuff:移除敵方全體強化效果
          addSelfArt:增強自己的arts性能
          addSelfBuster:增強自己的buster性能
          addSelfQuick:增強自己的quick性能
          addSelfWeapon:增強自己的寶具威力
          addAllAttack:增強己方全體的寶具威力
          addOtherAttack:增強己方除自己以外的全體攻擊
          addSelfAttack:增強自己的攻擊
          addSelfCritical:增強自己的爆擊威力
          addAllCritical:增強己方全體的爆擊威力
          addStar:增加星星
          addSelfStarDrop:增強自己的星掉落率
          addAllStarDrop:增強己方全體的星掉落率
          addSelfNp:寶具施放後增加自己的np
          addAllNp:寶具施放後增加己方全體的np
          addSelfGainNp:增加自己的np獲得率
          addAllGainNp:增加己方全體的np獲得率
          addOneBeHitDamage:增加敵方單體的被攻增傷
          addOneSpecialAttribute:附予敵方單體特殊屬性
          addAllSpecialAttribute:附予敵方全體體特殊屬性
          attackSelfSpecialBoost:自己獲得對XX特攻能力
          attackAll:對敵方全體攻擊
          attackOne:對敵方單體攻擊
        **/
        effectList: [
          {
            effectType: 'addOtherAttack',
            number: 30
          }
        ]
      }
    ],
    //被動技能
    passiveBuff: [
      {
        name: 'quick',
        number: 6
      }
    ]
  },
  {
    id: '2',
    fullname: '阿爾托莉亞・潘德拉剛',
    classType: 'saber',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '秩序',
      '善',
      '女性',
      '騎乘',
      '人型',
      '龍',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '亞瑟',
      '王'
    ],
    starDrop: 10,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.86,
      buster: 0.86,
      quick: 0.86,
      extra: 0.86,
      weapon: 0.86
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '誓約勝利之劍(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addSelfNp',
            number: [
              20,
              27.5,
              35,
              42.5,
              50
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '誓約勝利之劍(聖劍覺醒)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addSelfNp',
            number: [
              20,
              27.5,
              35,
              42.5,
              50
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '3',
    fullname: '阿爾托莉亞・潘德拉剛〔Alter〕',
    classType: 'saber',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '秩序',
      '惡',
      '女性',
      '人型',
      '龍',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋',
      '亞瑟',
      '王'
    ],
    starDrop: 9.9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.86,
      buster: 0.86,
      quick: 0.86,
      extra: 0.86,
      weapon: 0.86
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '誓約勝利之劍(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              450,
              550,
              600,
              625,
              650
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addSelfNp',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '4',
    fullname: '阿爾托莉亞・潘德拉剛〔Lily〕',
    classType: 'saber',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '秩序',
      '善',
      '女性',
      '騎乘',
      '人型',
      '龍',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '亞瑟',
      '王'
    ],
    starDrop: 10,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.86,
      buster: 0.86,
      quick: 0.86,
      extra: 0.86,
      weapon: 0.86
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '必勝黃金之劍(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              2,
              5,
              8,
              11,
              13,
              16,
              19,
              26
            ],
            number: [
              300,
              450,
              525,
              562.5,
              600
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 6
      }
    ]
  },
  {
    id: '5',
    fullname: '尼祿．克勞狄烏斯',
    classType: 'saber',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '混沌',
      '善',
      '女性',
      '騎乘',
      '人型',
      '羅馬',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋',
      '王'
    ],
    starDrop: 10.1,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        6,
        13,
        33,
        20,
        28
      ]
    },
    npGain: {
      arts: 0.84,
      buster: 0.84,
      quick: 0.84,
      extra: 0.84,
      weapon: 0.84
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '童女謳歌的榮華帝政(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '童女謳歌的榮華帝政(黄金の大事業)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              600,
              750,
              825,
              862.5,
              900
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '6',
    fullname: '齊格飛',
    classType: 'saber',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '混沌',
      '善',
      '男性',
      '騎乘',
      '人型',
      '龍',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人',
      '王'
    ],
    starDrop: 10,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.83,
      buster: 0.83,
      quick: 0.83,
      extra: 0.83,
      weapon: 0.83
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '幻想大劍・天魔失墜(初期)',
        specialBoost: [
          {
            limitTarget: '龍',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '幻想大劍・天魔失墜(強化クエスト ジークフリート 2)',
        specialBoost: [
          {
            limitTarget: '龍',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addSelfGainNp',
            number: 20
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '7',
    fullname: ' 蓋烏斯・尤里烏斯・凱撒',
    classType: 'saber',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '中立',
      '中庸',
      '男性',
      '騎乘',
      '人型',
      '神性',
      '羅馬',
      '被「天地乖離開辟之星」所剋',
      '愛人',
      '王'
    ],
    starDrop: 10,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.1,
      buster: 1.1,
      quick: 1.1,
      extra: 1.1,
      weapon: 1.1
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '黄之死(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              1,
              3,
              5,
              7,
              9,
              10,
              12,
              14,
              16,
              23
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addStar',
            number: [
              5,
              10,
              15,
              20,
              25
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      },
      {
        name: 'damage',
        number: 125
      }
    ]
  },
  {
    id: '8',
    fullname: '阿蒂拉',
    classType: 'saber',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '混沌',
      '善',
      '女性',
      '騎乘',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '王'
    ],
    starDrop: 10.1,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        25,
        75
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.84,
      buster: 0.84,
      quick: 0.84,
      extra: 0.84,
      weapon: 0.84
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '軍神之劍(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '軍神之劍(私の記憶)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 10
      },
      {
        name: 'damage',
        number: 175
      }
    ]
  },
  {
    id: '9',
    fullname: '吉爾・德・萊斯',
    classType: 'saber',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '秩序',
      '善',
      '男性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 9.9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.82,
      buster: 0.82,
      quick: 0.82,
      extra: 0.82,
      weapon: 0.82
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '在聖旗之下群起怒吼吧(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfAttack',
            number: [
              50,
              75,
              87.5,
              93.8,
              100
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'addStar',
            number: [
              5,
              10,
              15,
              20,
              25
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 12
      },
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '10',
    fullname: '騎士德翁',
    classType: 'saber',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '中立',
      '中庸',
      '無性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.83,
      buster: 0.83,
      quick: 0.83,
      extra: 0.83,
      weapon: 0.83
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '百合花開豪華絢爛(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              20,
              25,
              27.5,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '11',
    fullname: 'Emiya',
    classType: 'archer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '中立',
      '中庸',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 7.9,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.51,
      buster: 0.51,
      quick: 0.51,
      extra: 0.51,
      weapon: 0.51
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '無限劍製(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              3,
              3,
              5,
              7,
              8,
              10,
              12,
              14,
              16,
              22
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '無限劍製(無限劍製)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              3,
              3,
              5,
              7,
              8,
              10,
              12,
              14,
              16,
              22
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 8
      }
    ]
  },
  {
    id: '12',
    fullname: '吉爾伽美什',
    classType: 'archer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '男性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '王'
    ],
    starDrop: 7.9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        6,
        13,
        20,
        26,
        35
      ],
      buster: [
        27,
        22,
        13,
        4,
        34
      ],
      quick: [
        7,
        15,
        23,
        15,
        40
      ],
      extra: [
        10,
        14,
        17,
        3,
        10,
        14,
        7,
        25
      ]
    },
    npGain: {
      arts: 0.34,
      buster: 0.34,
      quick: 0.34,
      extra: 0.34,
      weapon: 0.34
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '天地乖離開辟之星(初期)',
        specialBoost: [
          {
            limitTarget: '被「天地乖離開辟之星」所剋',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '天地乖離開辟之星(開闢の理)',
        specialBoost: [
          {
            limitTarget: '被「天地乖離開辟之星」所剋',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'addSelfWeapon',
            number: 30
          },
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'damage',
        number: 175
      },
      {
        name: 'critical',
        number: 11
      }
    ]
  },
  {
    id: '13',
    fullname: '羅賓漢',
    classType: 'archer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '中立',
      '善',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 8,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.87,
      buster: 0.87,
      quick: 0.87,
      extra: 0.87,
      weapon: 0.87
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '祈禱之弓(初期)',
        specialBoost: [
          {
            limitTarget: '中毒',
            number: [
              200,
              212.5,
              225,
              237.5,
              250
            ]
          }
        ],
        effectList: [
          {
            effectType: 'addOneSpecialAttribute',
            number: '中毒'
          },
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 10
      }
    ]
  },
  {
    id: '14',
    fullname: '阿塔蘭塔',
    classType: 'archer',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '中立',
      '惡',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 8,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.5,
      buster: 0.5,
      quick: 0.5,
      extra: 0.5,
      weapon: 0.5
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '訴狀箭書(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              3,
              5,
              3,
              7,
              8,
              10,
              12,
              14,
              16,
              22
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addStar',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'quick',
        name: '訴狀箭書(ロンドン・チャイルド)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              3,
              5,
              3,
              7,
              8,
              10,
              12,
              14,
              16,
              22
            ],
            number: [
              800,
              1000,
              1100,
              1150,
              1200
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addStar',
            number: [
              15,
              20,
              25,
              30,
              35
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 10
      }
    ]
  },
  {
    id: '15',
    fullname: '尤瑞艾莉',
    classType: 'archer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 7.9,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.9,
      buster: 0.9,
      quick: 0.9,
      extra: 0.9,
      weapon: 0.9
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '女神的視線(初期)',
        specialBoost: [
          {
            limitTarget: '男性',
            number: [
              150,
              200,
              225,
              237.5,
              250
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: 900
          }
        ]
      },
      {
        cardType: 'arts',
        name: '女神的視線(私から姉妹へ)',
        specialBoost: [
          {
            limitTarget: '男性',
            number: [
              150,
              200,
              225,
              237.5,
              250
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: 1200
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'damage',
        number: 300
      },
      {
        name: 'critical',
        number: 11
      }
    ]
  },
  {
    id: '16',
    fullname: '阿拉什',
    classType: 'archer',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '中庸',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人'
    ],
    starDrop: 8,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.84,
      buster: 0.84,
      quick: 0.84,
      extra: 0.84,
      weapon: 0.84
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '流星一條(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '流星一条(孤独な戦士、獅子の如く勇敢な彼)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              800,
              1000,
              1100,
              1150,
              1200
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 6
      }
    ]
  },
  {
    id: '17',
    fullname: '庫・夫林',
    classType: 'lancer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '男性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人'
    ],
    starDrop: 12.1,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.07,
      buster: 1.07,
      quick: 1.07,
      extra: 1.07,
      weapon: 1.07
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '穿刺死棘之槍(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseOneDefense',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'damage',
        number: 175
      }
    ]
  },
  {
    id: '18',
    fullname: '伊莉莎白・巴托里',
    classType: 'lancer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '人型',
      '龍',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 11.8,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.1,
      buster: 1.1,
      quick: 1.1,
      extra: 1.1,
      weapon: 1.1
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '鮮血魔女(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 8
      }
    ]
  },
  {
    id: '19',
    fullname: '武藏坊弁慶',
    classType: 'lancer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 11.9,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.79,
      buster: 0.79,
      quick: 0.79,
      extra: 0.79,
      weapon: 0.79
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '五百羅漢補陀落渡海(初期)',
        specialBoost: [],
        effectList: []
      }
    ],
    passiveBuff: []
  },
  {
    id: '20',
    fullname: '庫・夫林〔Prototype〕',
    classType: 'lancer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '男性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 12.1,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.08,
      buster: 1.08,
      quick: 1.08,
      extra: 1.08,
      weapon: 1.08
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '貫穿朱槍(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseOneDefense',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'damage',
        number: 175
      }
    ]
  },
  {
    id: '21',
    fullname: '列奧尼達一世',
    classType: 'lancer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '王'
    ],
    starDrop: 11.8,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.07,
      buster: 1.07,
      quick: 1.07,
      extra: 1.07,
      weapon: 1.07
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '炎門守護者(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addStar',
            number: [
              5,
              10,
              15,
              20,
              25
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '22',
    fullname: '羅慕路斯',
    classType: 'lancer',
    alignmentType: 'star',
    specialAttributeList: [
      'Servant',
      '混沌',
      '中庸',
      '男性',
      '人型',
      '羅馬',
      '王'
    ],
    starDrop: 12.1,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.07,
      buster: 1.07,
      quick: 1.07,
      extra: 1.07,
      weapon: 1.07
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '世間萬物通吾槍(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              3,
              7,
              10,
              14,
              17,
              21,
              28
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addAllAttack',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '23',
    fullname: '美杜莎',
    classType: 'rider',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '騎乘',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 9,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.58,
      buster: 0.58,
      quick: 0.58,
      extra: 0.58,
      weapon: 0.58
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '騎英的韁繩(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addAllStarDrop',
            number: [
              20,
              30,
              40,
              50,
              60
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 11
      },
      {
        name: 'damage',
        number: 95
      },
      {
        name: 'critical',
        number: 6
      }
    ]
  },
  {
    id: '24',
    fullname: '聖喬治',
    classType: 'rider',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '男性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 8.9,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.85,
      buster: 0.85,
      quick: 0.85,
      extra: 0.85,
      weapon: 0.85
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '以力屠絕的祝福之劍(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addOneSpecialAttribute',
            number: '龍'
          },
          {
            effectType: 'attackOne',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '25',
    fullname: '愛德華・蒂奇',
    classType: 'rider',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 8.8,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        25,
        75
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.56,
      buster: 0.56,
      quick: 0.56,
      extra: 0.56,
      weapon: 0.56
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '安妮女王的復仇(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addStar',
            number: 5
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '26',
    fullname: '布狄卡',
    classType: 'rider',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '中立',
      '善',
      '女性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '王'
    ],
    starDrop: 8.9,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.85,
      buster: 0.85,
      quick: 0.85,
      extra: 0.85,
      weapon: 0.85
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '無以誓約的守護車輪(初期)',
        specialBoost: [],
        effectList: []
      },
      {
        cardType: 'arts',
        name: '無以誓約的守護車輪(強化クエスト ブーディカ 2)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addAllAttack',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 10
      }
    ]
  },
  {
    id: '27',
    fullname: '牛若丸',
    classType: 'rider',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '中庸',
      '女性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 9.1,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.87,
      buster: 0.87,
      quick: 0.87,
      extra: 0.87,
      weapon: 0.87
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '壇之浦・八艘跳(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addSelfStarDrop',
            number: [
              50,
              60,
              70,
              80,
              90
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'quick',
        name: '壇之浦・八艘跳(無償の愛などなく)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              1600,
              2000,
              2200,
              2300,
              2400
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addSelfStarDrop',
            number: [
              50,
              60,
              70,
              80,
              90
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 11
      }
    ]
  },
  {
    id: '28',
    fullname: '亞歷山大',
    classType: 'rider',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '中立',
      '善',
      '男性',
      '騎乘',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '王',
      '希臘神話系男性'
    ],
    starDrop: 9,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.86,
      buster: 0.86,
      quick: 0.86,
      extra: 0.86,
      weapon: 0.86
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '蹂躪征服方起始(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addStar',
            number: [
              5,
              10,
              15,
              20,
              25
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'quick',
        name: '蹂躪征服方起始(駆け抜ける、始まりの蹂躙制覇)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              800,
              1000,
              1100,
              1150,
              1200
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addStar',
            number: [
              15,
              20,
              25,
              30,
              35
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 11
      },
      {
        name: 'damage',
        number: 100
      }
    ]
  },
  {
    id: '29',
    fullname: '瑪莉・安東尼',
    classType: 'rider',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 9,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1,
      buster: 1,
      quick: 1,
      extra: 1,
      weapon: 1
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '願百合王冠的榮光永在(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 11
      }
    ]
  },
  {
    id: '30',
    fullname: '瑪爾大',
    classType: 'rider',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '騎乘',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 9,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.58,
      buster: 1.58,
      quick: 1.58,
      extra: 1.58,
      weapon: 1.58
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '不懂愛的悲哀之龍啊(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 11.5
      },
      {
        name: 'damage',
        number: 150
      }
    ]
  },
  {
    id: '31',
    fullname: '美狄亞',
    classType: 'caster',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '中立',
      '惡',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 10.9,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.64,
      buster: 1.64,
      quick: 1.64,
      extra: 1.64,
      weapon: 1.64
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '萬符必行破戒(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'dispelOneBuff',
            useNumberBy: 'charge'
          },
          {
            effectType: 'addSelfNp',
            number: [
              20,
              40,
              60,
              80,
              100
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '萬符必行破戒(魔女の箱庭)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              600,
              750,
              825,
              862.5,
              900
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'dispelOneBuff',
            useNumberBy: 'charge'
          },
          {
            effectType: 'addSelfNp',
            number: [
              20,
              40,
              60,
              80,
              100
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 10
      }
    ]
  },
  {
    id: '32',
    fullname: '吉爾・德・雷',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10.8,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.58,
      buster: 1.58,
      quick: 1.58,
      extra: 1.58,
      weapon: 1.58
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '螺湮城教本(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 8
      }
    ]
  },
  {
    id: '33',
    fullname: '漢斯・克里斯蒂安・安徒生',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10.8,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.66,
      buster: 1.66,
      quick: 1.66,
      extra: 1.66,
      weapon: 1.66
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '為你撰寫的故事(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addAllAttack',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '為你撰寫的故事(人間観察)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addAllAttack',
            chance: [
              60,
              70,
              75,
              77.5,
              80
            ],
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'addAllStarDrop',
            chance: [
              60,
              70,
              75,
              77.5,
              80
            ],
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 4
      }
    ]
  },
  {
    id: '34',
    fullname: '威廉・莎士比亞',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '中立',
      '中庸',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10.8,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.59,
      buster: 1.59,
      quick: 1.59,
      extra: 1.59,
      weapon: 1.59
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '開演之刻已至，獻上如雷喝采(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 6
      }
    ]
  },
  {
    id: '35',
    fullname: '梅菲斯托費勒斯',
    classType: 'caster',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 11,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.81,
      buster: 0.81,
      quick: 0.81,
      extra: 0.81,
      weapon: 0.81
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '淺眠炸彈(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '淺眠炸彈(チクタク・バン！)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 7
      }
    ]
  },
  {
    id: '36',
    fullname: '沃夫岡・阿瑪迪斯・莫札特',
    classType: 'caster',
    alignmentType: 'star',
    specialAttributeList: [
      'Servant',
      '中立',
      '善',
      '男性',
      '人型',
      '愛人'
    ],
    starDrop: 11,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.6,
      buster: 1.6,
      quick: 1.6,
      extra: 1.6,
      weapon: 1.6
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '獻給死神的安魂曲(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'decreaseAllDefense',
            chance: [
              60,
              70,
              75,
              77.5,
              80
            ],
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 8
      }
    ]
  },
  {
    id: '37',
    fullname: '諸葛孔明〔埃爾梅羅II世〕',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '中立',
      '善',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 10.8,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.64,
      buster: 1.64,
      quick: 1.64,
      extra: 1.64,
      weapon: 1.64
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '石兵八陣(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '石兵八陣(再臨の真実)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'decreaseAllDefense',
            number: [
              30,
              40,
              45,
              47.5,
              50
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 10
      }
    ]
  },
  {
    id: '38',
    fullname: '庫・夫林',
    classType: 'caster',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '男性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人'
    ],
    starDrop: 10.9,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.6,
      buster: 1.6,
      quick: 1.6,
      extra: 1.6,
      weapon: 1.6
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '灼燒殆盡的火籠(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 8
      },
      {
        name: 'damage',
        number: 175
      }
    ]
  },
  {
    id: '39',
    fullname: '佐佐木小次郎',
    classType: 'assassin',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '中立',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 25.3,
    cards: {
      arts: 1,
      buster: 1,
      quick: 3
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.05,
      buster: 1.05,
      quick: 1.05,
      extra: 1.05,
      weapon: 1.05
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '燕返(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              16,
              33,
              51
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addStar',
            number: [
              15,
              20,
              25,
              30,
              35
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 4
      }
    ]
  },
  {
    id: '40',
    fullname: '咒腕的哈桑',
    classType: 'assassin',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 25.2,
    cards: {
      arts: 1,
      buster: 1,
      quick: 3
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.07,
      buster: 1.07,
      quick: 1.07,
      extra: 1.07,
      weapon: 1.07
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '妄想心音(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 10.5
      }
    ]
  },
  {
    id: '41',
    fullname: '絲忒諾',
    classType: 'assassin',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 25,
    cards: {
      arts: 1,
      buster: 1,
      quick: 3
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 2.26,
      buster: 2.26,
      quick: 2.26,
      extra: 2.26,
      weapon: 2.26
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '女神的微笑(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'decreaseAllDefense',
            number: 20
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'damage',
        number: 300
      },
      {
        name: 'starDrop',
        number: 10.5
      }
    ]
  },
  {
    id: '42',
    fullname: '荊軻',
    classType: 'assassin',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 25.2,
    cards: {
      arts: 1,
      buster: 1,
      quick: 3
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.05,
      buster: 1.05,
      quick: 1.05,
      extra: 1.05,
      weapon: 1.05
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '不歸匕首(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addStar',
            number: [
              15,
              20,
              25,
              30,
              35
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 8
      }
    ]
  },
  {
    id: '43',
    fullname: '夏爾・亨利・桑松',
    classType: 'assassin',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 24.8,
    cards: {
      arts: 1,
      buster: 1,
      quick: 3
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.06,
      buster: 1.06,
      quick: 1.06,
      extra: 1.06,
      weapon: 1.06
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '死亡將為明日的希望(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseOneDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '死亡將為明日的希望(強化クエスト サンソン 2)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              800,
              1000,
              1100,
              1150,
              1200
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseOneDefense',
            number: [
              30,
              35,
              40,
              45,
              50
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 4
      }
    ]
  },
  {
    id: '44',
    fullname: '歌劇魅影',
    classType: 'assassin',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 25.2,
    cards: {
      arts: 1,
      buster: 1,
      quick: 3
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        66,
        34
      ],
      quick: [
        25,
        75
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.71,
      buster: 0.71,
      quick: 0.71,
      extra: 0.71,
      weapon: 0.71
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '吾之情歌僅在地獄迴響(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '吾之情歌僅在地獄迴響(クリスティーヌの呼び声)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              600,
              750,
              825,
              862.5,
              900
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 10
      }
    ]
  },
  {
    id: '45',
    fullname: '瑪塔・哈里',
    classType: 'assassin',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '中庸',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 24.6,
    cards: {
      arts: 1,
      buster: 1,
      quick: 3
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 2.1,
      buster: 2.1,
      quick: 2.1,
      extra: 2.1,
      weapon: 2.1
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '擁有陽眼之女(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'decreaseAllDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '46',
    fullname: '卡米拉',
    classType: 'assassin',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 25.2,
    cards: {
      arts: 1,
      buster: 1,
      quick: 3
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 2.15,
      buster: 2.15,
      quick: 2.15,
      extra: 2.15,
      weapon: 2.15
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '幻想鐵處女(初期)',
        specialBoost: [
          {
            limitTarget: '女性',
            number: [
              120,
              132.5,
              145,
              157.5,
              170
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addSelfAttack',
            number: 20
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 4
      }
    ]
  },
  {
    id: '47',
    fullname: '赫拉克勒斯',
    classType: 'berserker',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '混沌',
      '狂',
      '男性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '希臘神話系男性'
    ],
    starDrop: 5,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        25,
        75
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.07,
      buster: 1.07,
      quick: 1.07,
      extra: 1.07,
      weapon: 1.07
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '射殺百頭(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              1,
              2,
              1,
              3,
              4,
              4,
              5,
              6,
              7,
              8,
              9,
              9,
              10,
              11,
              20
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseOneDefense',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 8
      },
      {
        name: 'damage',
        number: 200
      }
    ]
  },
  {
    id: '48',
    fullname: '蘭斯洛特',
    classType: 'berserker',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '秩序',
      '狂',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 5,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.5,
      buster: 0.5,
      quick: 0.5,
      extra: 0.5,
      weapon: 0.5
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '騎士不徒手而亡(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfAttack',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackAll',
            hits: [
              3,
              5,
              3,
              7,
              8,
              10,
              12,
              14,
              16,
              22
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'quick',
        name: '騎士不徒手而亡(NPC限定)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfAttack',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackAll',
            hits: [
              3,
              5,
              3,
              7,
              8,
              10,
              12,
              14,
              16,
              22
            ],
            number: [
              200,
              275,
              312.5,
              331.3,
              350
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 6
      }
    ]
  },
  {
    id: '49',
    fullname: '呂布奉先',
    classType: 'berserker',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 5,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.04,
      buster: 1.04,
      quick: 1.04,
      extra: 1.04,
      weapon: 1.04
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '軍神五兵(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 10
      }
    ]
  },
  {
    id: '50',
    fullname: '斯巴達克斯',
    classType: 'berserker',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '中立',
      '中庸',
      '男性',
      '人型',
      '羅馬',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 4.9,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.01,
      buster: 1.01,
      quick: 1.01,
      extra: 1.01,
      weapon: 1.01
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '傷獸的咆吼(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '愛は爆発する(NPC限定)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: 10
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 12
      }
    ]
  },
  {
    id: '51',
    fullname: '坂田金時',
    classType: 'berserker',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '男性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 5,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        25,
        75
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.03,
      buster: 1.03,
      quick: 1.03,
      extra: 1.03,
      weapon: 1.03
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '黄金衝撃(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 2
      },
      {
        name: 'damage',
        number: 125
      }
    ]
  },
  {
    id: '52',
    fullname: '弗拉德三世',
    classType: 'berserker',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人',
      '王'
    ],
    starDrop: 4.9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.5,
      buster: 0.5,
      quick: 0.5,
      extra: 0.5,
      weapon: 0.5
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '血染的王鬼(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              1,
              3,
              5,
              7,
              9,
              10,
              12,
              14,
              16,
              23
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addStar',
            number: [
              15,
              20,
              25,
              30,
              35
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '血染的王鬼(レジェンド・オブ・ドラキュリア　Ⅰ)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              1,
              3,
              5,
              7,
              9,
              10,
              12,
              14,
              16,
              23
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addStar',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 12
      }
    ]
  },
  {
    id: '53',
    fullname: '阿斯忒里翁',
    classType: 'berserker',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '希臘神話系男性'
    ],
    starDrop: 4.9,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.68,
      buster: 0.68,
      quick: 0.68,
      extra: 0.68,
      weapon: 0.68
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '萬古不變的迷宮(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '萬古不變的迷宮(その手を、君に)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'decreaseAllDefense',
            number: 40
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 8
      }
    ]
  },
  {
    id: '54',
    fullname: '卡利古拉',
    classType: 'berserker',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '羅馬',
      '被「天地乖離開辟之星」所剋',
      '王'
    ],
    starDrop: 5,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        25,
        75
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.68,
      buster: 0.68,
      quick: 0.68,
      extra: 0.68,
      weapon: 0.68
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '吞噬吾心吧，月光(初期)',
        specialBoost: [],
        effectList: []
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 11
      }
    ]
  },
  {
    id: '55',
    fullname: '大流士三世',
    classType: 'berserker',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '王'
    ],
    starDrop: 5,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.67,
      buster: 0.67,
      quick: 0.67,
      extra: 0.67,
      weapon: 0.67
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '不死的萬名騎兵(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              1,
              3,
              5,
              7,
              9,
              10,
              12,
              14,
              16,
              23
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '不死的萬名騎兵(両雄、荒野の果てに)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              1,
              3,
              5,
              7,
              9,
              10,
              12,
              14,
              16,
              23
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 8
      }
    ]
  },
  {
    id: '56',
    fullname: '清姬',
    classType: 'berserker',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '人型',
      '龍',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 4.9,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 2.03,
      buster: 2.03,
      quick: 2.03,
      extra: 2.03,
      weapon: 2.03
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '轉身火生三味(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 12
      }
    ]
  },
  {
    id: '57',
    fullname: '血斧・埃里克',
    classType: 'berserker',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '中庸',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 4.9,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        25,
        75
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.02,
      buster: 1.02,
      quick: 1.02,
      extra: 1.02,
      weapon: 1.02
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '血染的加冕儀式(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfAttack',
            number: [
              30,
              35,
              40,
              45,
              50
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 8
      }
    ]
  },
  {
    id: '58',
    fullname: '玉藻貓',
    classType: 'berserker',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '人型',
      '猛獸',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 5,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        66,
        34
      ],
      quick: [
        25,
        75
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.71,
      buster: 0.71,
      quick: 0.71,
      extra: 0.71,
      weapon: 0.71
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '璀燦日光午睡宮酒池肉林(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'quick',
        name: '璀燦日光午睡宮酒池肉林(修羅肉輪)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              800,
              1000,
              1100,
              1150,
              1200
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 6
      }
    ]
  },
  {
    id: '59',
    fullname: '貞德',
    classType: 'ruler',
    alignmentType: 'star',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '人型',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10.1,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.76,
      buster: 0.76,
      quick: 0.76,
      extra: 0.76,
      weapon: 0.76
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '吾主在此(初期)',
        specialBoost: [],
        effectList: []
      }
    ],
    passiveBuff: []
  },
  {
    id: '60',
    fullname: '俄里翁',
    classType: 'archer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '混沌',
      '中庸',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '希臘神話系男性'
    ],
    starDrop: 8,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 1,
      buster: 1,
      quick: 1,
      extra: 1,
      weapon: 1
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '月女神の愛矢恋矢(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '月女神の愛矢恋矢(或る愛のうた)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              1200,
              1500,
              1650,
              1725,
              1800
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 11
      }
    ]
  },
  {
    id: '61',
    fullname: '伊莉莎白・巴托里〔萬聖節〕',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '人型',
      '龍',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10.8,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 1.6,
      buster: 1.6,
      quick: 1.6,
      extra: 1.6,
      weapon: 1.6
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '鮮血特上魔嬢(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 8
      }
    ]
  },
  {
    id: '62',
    fullname: '玉藻前',
    classType: 'caster',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '中立',
      '惡',
      '女性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 11,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        6,
        13,
        20,
        26,
        35
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 0.32,
      buster: 0.32,
      quick: 0.32,
      extra: 0.32,
      weapon: 0.32
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '水天日光天照八野鎮石(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addAllNp',
            number: [
              25,
              31.25,
              37.5,
              43.75,
              50
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '水天日光天照八野鎮石(メル友戦争)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addAllNp',
            number: [
              25,
              31.25,
              37.5,
              43.75,
              50
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 6
      },
      {
        name: 'damage',
        number: 200
      }
    ]
  },
  {
    id: '63',
    fullname: '大衛',
    classType: 'archer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '王'
    ],
    starDrop: 8,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.76,
      buster: 0.76,
      quick: 0.76,
      extra: 0.76,
      weapon: 0.76
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '五つの石(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 10
      }
    ]
  },
  {
    id: '64',
    fullname: '赫克特',
    classType: 'lancer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '男性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '希臘神話系男性'
    ],
    starDrop: 12.2,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.08,
      buster: 1.08,
      quick: 1.08,
      extra: 1.08,
      weapon: 1.08
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '不毀の極槍(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '不毀の極槍(トロージャン・ガーディアン)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '65',
    fullname: '弗朗西斯・德雷克',
    classType: 'rider',
    alignmentType: 'star',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '騎乘',
      '人型'
    ],
    starDrop: 9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        20,
        30,
        20,
        30
      ],
      buster: [
        54,
        46
      ],
      quick: [
        23,
        17,
        11,
        17,
        11,
        21
      ],
      extra: [
        30,
        20,
        30,
        20
      ]
    },
    npGain: {
      arts: 0.42,
      buster: 0.42,
      quick: 0.42,
      extra: 0.42,
      weapon: 0.42
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '黄金鹿と嵐の夜(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              33,
              13,
              20,
              6,
              28
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addStar',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '黄金鹿と嵐の夜(財宝の島)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              33,
              13,
              20,
              6,
              28
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addStar',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '66',
    fullname: '安妮・伯妮＆瑪莉・瑞德',
    classType: 'rider',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 9.1,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.84,
      buster: 0.84,
      quick: 0.84,
      extra: 0.84,
      weapon: 0.84
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '比翼にして連理(初期)',
        specialBoost: [
          {
            limitTarget: 'hpPercentage',
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              5,
              11,
              17,
              11,
              23,
              33
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'quick',
        name: '比翼にして連理(キャプテン・キッドの財宝を奪取せよ)',
        specialBoost: [
          {
            limitTarget: 'hpPercentage',
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              5,
              11,
              17,
              11,
              23,
              33
            ],
            number: [
              1600,
              2000,
              2200,
              2300,
              2400
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '67',
    fullname: '美狄亞〔Lily〕',
    classType: 'caster',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 10.7,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        10,
        20,
        30,
        40
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.4,
      buster: 0.4,
      quick: 0.4,
      extra: 0.4,
      weapon: 0.4
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '修補すべき全ての疵(初期)',
        specialBoost: [],
        effectList: []
      },
      {
        cardType: 'arts',
        name: '修補すべき全ての疵(仲良しの魔女)',
        specialBoost: [],
        effectList: []
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 8
      }
    ]
  },
  {
    id: '68',
    fullname: '沖田總司',
    classType: 'saber',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '中立',
      '中庸',
      '女性',
      '騎乘',
      '人型',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10.2,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        7,
        15,
        23,
        15,
        40
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.09,
      buster: 1.09,
      quick: 1.09,
      extra: 1.09,
      weapon: 1.09
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '無明三段突き(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              16,
              33,
              51
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseOneDefense',
            number: [
              30,
              40,
              45,
              47.5,
              50
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 2
      }
    ]
  },
  {
    id: '69',
    fullname: '織田信長',
    classType: 'archer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '王'
    ],
    starDrop: 7.9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        10,
        20,
        30,
        40
      ],
      buster: [
        10,
        20,
        30,
        40
      ],
      quick: [
        33,
        67
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.43,
      buster: 0.43,
      quick: 0.43,
      extra: 0.43,
      weapon: 0.43
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '三千世界(初期)',
        specialBoost: [
          {
            limitTarget: '騎乘',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              3,
              5,
              3,
              7,
              8,
              10,
              12,
              14,
              16,
              22
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 8
      }
    ]
  },
  {
    id: '70',
    fullname: '斯卡哈',
    classType: 'lancer',
    alignmentType: 'star',
    specialAttributeList: [
      'Servant',
      '中立',
      '善',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '王'
    ],
    starDrop: 12.2,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        13,
        20,
        13,
        20,
        13,
        21
      ],
      quick: [
        25,
        75
      ],
      extra: [
        6,
        12,
        18,
        12,
        18,
        12,
        22
      ]
    },
    npGain: {
      arts: 0.71,
      buster: 0.71,
      quick: 0.71,
      extra: 0.71,
      weapon: 0.71
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '貫き穿つ死翔の槍(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'quick',
        name: '貫き穿つ死翔の槍(キル・ミー・イフ・ユー・キャン)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              1600,
              2000,
              2200,
              2300,
              2400
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '71',
    fullname: '迪爾姆德・奧德利暗',
    classType: 'lancer',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人'
    ],
    starDrop: 12.3,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        33,
        67
      ],
      quick: [
        33,
        67
      ],
      extra: [
        10,
        20,
        30,
        40
      ]
    },
    npGain: {
      arts: 0.79,
      buster: 0.79,
      quick: 0.79,
      extra: 0.79,
      weapon: 0.79
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '破魔の紅薔薇、必滅の黄薔薇(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              60,
              40
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'dispelOneBuff',
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'quick',
        name: '破魔の紅薔薇、必滅の黄薔薇(薔薇の双槍)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              60,
              40
            ],
            number: [
              1600,
              2000,
              2200,
              2300,
              2400
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'dispelOneBuff',
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '72',
    fullname: '弗格斯・馬克・羅伊',
    classType: 'saber',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '秩序',
      '中庸',
      '男性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人',
      '王'
    ],
    starDrop: 10,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        25,
        75
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.09,
      buster: 1.09,
      quick: 1.09,
      extra: 1.09,
      weapon: 1.09
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '虹霓剣(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              30,
              10,
              15,
              20,
              25
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              20,
              30,
              40,
              50,
              60
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '虹霓剣(プリティ・イリュージョン)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              30,
              10,
              15,
              20,
              25
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              20,
              30,
              40,
              50,
              60
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '73',
    fullname: '阿爾托莉亞・潘德拉剛〔聖誕Alter〕',
    classType: 'rider',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '騎乘',
      '人型',
      '龍',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋',
      '亞瑟',
      '王'
    ],
    starDrop: 8.9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.87,
      buster: 0.87,
      quick: 0.87,
      extra: 0.87,
      weapon: 0.87
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '約束された勝利の剣(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              450,
              550,
              600,
              625,
              650
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addSelfNp',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 10
      }
    ]
  },
  {
    id: '74',
    fullname: '童謠',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '中立',
      '中庸',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10.8,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.54,
      buster: 0.54,
      quick: 0.54,
      extra: 0.54,
      weapon: 0.54
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '誰かの為の物語(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: 20
          }
        ]
      },
      {
        cardType: 'arts',
        name: '誰かの為の物語(本の群れ、わたしたちの群れ)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              600,
              750,
              825,
              862.5,
              900
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: 20
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 10
      }
    ]
  },
  {
    id: '75',
    fullname: '開膛手傑克',
    classType: 'assassin',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 25.5,
    cards: {
      arts: 1,
      buster: 1,
      quick: 3
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        66,
        34
      ],
      quick: [
        7,
        15,
        23,
        15,
        40
      ],
      extra: [
        10,
        20,
        30,
        40
      ]
    },
    npGain: {
      arts: 1.07,
      buster: 1.07,
      quick: 1.07,
      extra: 1.07,
      weapon: 1.07
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '解体聖母(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackSelfSpecialBoost',
            limitTarget: '女性',
            number: [
              50,
              62.5,
              75,
              87.5,
              100
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackOne',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'quick',
        name: '解体聖母(ジャック・キルズ・ジャック)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackSelfSpecialBoost',
            limitTarget: '女性',
            number: [
              50,
              62.5,
              75,
              87.5,
              100
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackOne',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              1400,
              1800,
              2000,
              2100,
              2200
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 10.5
      }
    ]
  },
  {
    id: '76',
    fullname: '莫德雷德',
    classType: 'saber',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '混沌',
      '中庸',
      '女性',
      '騎乘',
      '人型',
      '龍',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 10,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        10,
        20,
        30,
        40
      ]
    },
    npGain: {
      arts: 0.56,
      buster: 0.56,
      quick: 0.56,
      extra: 0.56,
      weapon: 0.56
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '我が麗しき父への叛逆(初期)',
        specialBoost: [
          {
            limitTarget: '亞瑟',
            number: [
              180,
              190,
              200,
              210,
              220
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addSelfNp',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '我が麗しき父への叛逆(キング・オブ・キングス)',
        specialBoost: [
          {
            limitTarget: '亞瑟',
            number: [
              180,
              190,
              200,
              210,
              220
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addSelfNp',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '77',
    fullname: '尼古拉・特斯拉',
    classType: 'archer',
    alignmentType: 'star',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '男性',
      '人型',
      '愛人'
    ],
    starDrop: 7.9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.87,
      buster: 0.87,
      quick: 0.87,
      extra: 0.87,
      weapon: 0.87
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '人類神話・雷電降臨(初期)',
        specialBoost: [
          {
            limitTarget: '被「人類神話・雷電降臨」所剋',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '人類神話・雷電降臨(ライトニング)',
        specialBoost: [
          {
            limitTarget: '被「人類神話・雷電降臨」所剋',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 8
      }
    ]
  },
  {
    id: '78',
    fullname: '阿爾托莉亞・潘德拉剛〔Alter〕',
    classType: 'lancer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '騎乘',
      '人型',
      '龍',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '亞瑟',
      '王'
    ],
    starDrop: 11.8,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        16,
        51
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 0.74,
      buster: 0.74,
      quick: 0.74,
      extra: 0.74,
      weapon: 0.74
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '最果てにて輝ける槍(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '最果てにて輝ける槍(醒めぬ夢、終わらぬ戦)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 10
      }
    ]
  },
  {
    id: '79',
    fullname: '馮・霍恩海姆・帕拉塞爾斯',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 10.8,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.55,
      buster: 0.55,
      quick: 0.55,
      extra: 0.55,
      weapon: 0.55
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '元素使いの魔剣(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '元素使いの魔剣(デビルズ・クエスト)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 10
      }
    ]
  },
  {
    id: '80',
    fullname: '查爾斯・巴貝奇',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '中庸',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10.8,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        16,
        33,
        51
      ]
    },
    npGain: {
      arts: 0.91,
      buster: 0.91,
      quick: 0.91,
      extra: 0.91,
      weapon: 0.91
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '絢爛なりし灰燼世界(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              12.5,
              15,
              17.5,
              20
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '絢爛なりし灰燼世界(鋼鐵機動戦記Ｃ・バベッジ)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              12.5,
              15,
              17.5,
              20
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '81',
    fullname: '亨利・傑基爾＆海德',
    classType: 'assassin',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人'
    ],
    starDrop: 25.6,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.05,
      buster: 1.05,
      quick: 1.05,
      extra: 1.05,
      weapon: 1.05
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '密やかなる罪の遊戯(初期)',
        specialBoost: [],
        effectList: []
      },
      {
        cardType: 'buster',
        name: '密やかなる罪の遊戯(ハイド氏とジキル博士)',
        specialBoost: [],
        effectList: []
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 10
      }
    ]
  },
  {
    id: '82',
    fullname: '弗蘭肯斯坦',
    classType: 'berserker',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '中庸',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 4.9,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        25,
        75
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.83,
      buster: 0.83,
      quick: 0.83,
      extra: 0.83,
      weapon: 0.83
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '磔刑の雷樹(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              4,
              9,
              14,
              19,
              23,
              31
            ],
            number: [
              700,
              900,
              1000,
              1050,
              1100
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'quick',
        name: '磔刑の雷樹(１１月の物寂しい夜の出来事　Ⅰ)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              4,
              9,
              14,
              19,
              23,
              31
            ],
            number: [
              900,
              1100,
              1200,
              1250,
              1300
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 4
      }
    ]
  },
  {
    id: '83',
    fullname: '所羅門',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 11,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 1.64,
      buster: 1.64,
      quick: 1.64,
      extra: 1.64,
      weapon: 1.64
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '誕生の時きたれり、其は全てを修めるもの(初期)',
        specialBoost: [],
        effectList: []
      }
    ],
    passiveBuff: []
  },
  {
    id: '84',
    fullname: '阿周那',
    classType: 'archer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '男性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 8,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        25,
        75
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.51,
      buster: 0.51,
      quick: 0.51,
      extra: 0.51,
      weapon: 0.51
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '破壊神の手翳(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '破壊神の手翳(神弓の真価)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'damage',
        number: 175
      },
      {
        name: 'critical',
        number: 10
      }
    ]
  },
  {
    id: '85',
    fullname: '迦爾納',
    classType: 'lancer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '男性',
      '騎乘',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人'
    ],
    starDrop: 12.2,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 0.72,
      buster: 0.72,
      quick: 0.72,
      extra: 0.72,
      weapon: 0.72
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '日輪よ、死に随え(初期)',
        specialBoost: [
          {
            limitTarget: '神性',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 10
      },
      {
        name: 'damage',
        number: 200
      }
    ]
  },
  {
    id: '86',
    fullname: '謎之女主角X',
    classType: 'assassin',
    alignmentType: 'star',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '騎乘',
      '人型',
      '龍',
      '阿爾托莉亞臉',
      '亞瑟',
      '王'
    ],
    starDrop: 25.6,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 0.81,
      buster: 0.81,
      quick: 0.81,
      extra: 0.81,
      weapon: 0.81
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '無銘勝利剣(初期)',
        specialBoost: [
          {
            limitTarget: '阿爾托莉亞臉',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              5,
              7,
              5,
              7,
              5,
              7,
              5,
              7,
              5,
              7,
              5,
              35
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'quick',
        name: '無銘勝利剣(セイバースレイヤー　覚醒編)',
        specialBoost: [
          {
            limitTarget: '阿爾托莉亞臉',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              5,
              7,
              5,
              7,
              5,
              7,
              5,
              7,
              5,
              7,
              5,
              35
            ],
            number: [
              1600,
              2000,
              2200,
              2300,
              2400
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 12
      },
      {
        name: 'starDrop',
        number: 10
      }
    ]
  },
  {
    id: '87',
    fullname: '芬恩・麥克庫爾',
    classType: 'lancer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '中立',
      '中庸',
      '男性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 12.3,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        27,
        18,
        9,
        46
      ]
    },
    npGain: {
      arts: 0.55,
      buster: 0.55,
      quick: 0.55,
      extra: 0.55,
      weapon: 0.55
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '無敗の紫靫草(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '無敗の紫靫草(フィン・マックール、神を斃した英雄)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              600,
              750,
              825,
              862.5,
              900
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'damage',
        number: 125
      }
    ]
  },
  {
    id: '88',
    fullname: '布倫希爾德',
    classType: 'lancer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '中立',
      '善',
      '女性',
      '騎乘',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 12.2,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 1.07,
      buster: 1.07,
      quick: 1.07,
      extra: 1.07,
      weapon: 1.07
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '死がふたりを分断つまで(初期)',
        specialBoost: [
          {
            limitTarget: '愛人',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addAllStarDrop',
            number: 30
          }
        ]
      },
      {
        cardType: 'buster',
        name: '死がふたりを分断つまで(けれど私は、炎でありたい)',
        specialBoost: [
          {
            limitTarget: '愛人',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              800,
              1000,
              1100,
              1150,
              1200
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addAllStarDrop',
            number: 50
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 10
      },
      {
        name: 'damage',
        number: 100
      }
    ]
  },
  {
    id: '89',
    fullname: '貝奧武夫',
    classType: 'berserker',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人',
      '王'
    ],
    starDrop: 4.9,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 0.68,
      buster: 0.68,
      quick: 0.68,
      extra: 0.68,
      weapon: 0.68
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '源流闘争(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              13,
              7,
              10,
              5,
              7,
              5,
              7,
              5,
              7,
              5,
              7,
              22
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '源流闘争(グレンデルの再臨)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              13,
              7,
              10,
              5,
              7,
              5,
              7,
              5,
              7,
              5,
              7,
              22
            ],
            number: [
              700,
              900,
              1000,
              1050,
              1100
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 1
      }
    ]
  },
  {
    id: '90',
    fullname: '尼祿・克勞狄烏斯〔Bride〕',
    classType: 'saber',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '混沌',
      '花嫁',
      '女性',
      '騎乘',
      '人型',
      '羅馬',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋',
      '王'
    ],
    starDrop: 10.1,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        9,
        18,
        27,
        46,
        0
      ]
    },
    npGain: {
      arts: 0.7,
      buster: 0.7,
      quick: 0.7,
      extra: 0.7,
      weapon: 0.7
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '星馳せる終幕の薔薇(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              25,
              75
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseOneDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '星馳せる終幕の薔薇(決意の花束)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              25,
              75
            ],
            number: [
              1200,
              1500,
              1650,
              1725,
              1800
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseOneDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '91',
    fullname: '兩儀式',
    classType: 'saber',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '中立',
      '中庸',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 9.9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 0.84,
      buster: 0.84,
      quick: 0.84,
      extra: 0.84,
      weapon: 0.84
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '無垢識・空の境界(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 6
      },
      {
        name: 'buster',
        number: 6
      },
      {
        name: 'quick',
        number: 6
      },
      {
        name: 'critical',
        number: 6
      }
    ]
  },
  {
    id: '92',
    fullname: '兩儀式',
    classType: 'assassin',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 25.6,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        30,
        20,
        10,
        40
      ],
      extra: [
        26,
        13,
        20,
        6,
        35
      ]
    },
    npGain: {
      arts: 0.8,
      buster: 0.8,
      quick: 0.8,
      extra: 0.8,
      weapon: 0.8
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '唯識・直死の魔眼(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              16,
              33,
              51
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 10
      },
      {
        name: 'starDrop',
        number: 6
      }
    ]
  },
  {
    id: '93',
    fullname: '天草四郎',
    classType: 'ruler',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        9,
        18,
        27,
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 0.86,
      buster: 0.86,
      quick: 0.86,
      extra: 0.86,
      weapon: 0.86
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '双腕・零次集束(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'dispelAllBuff',
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '双腕・零次集束(世界の救済について話をしよう)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'dispelAllBuff',
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '94',
    fullname: '阿斯托爾福',
    classType: 'rider',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '無性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 9,
    cards: {
      arts: 1,
      buster: 1,
      quick: 3
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 0.66,
      buster: 0.66,
      quick: 0.66,
      extra: 0.66,
      weapon: 0.66
    },
    weaponList: [
      {
        cardType: 'quick',
        name: 'この世ならざる幻馬(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addStar',
            number: [
              5,
              10,
              15,
              20,
              25
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'quick',
        name: 'この世ならざる幻馬(強化クエスト アストルフォ)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              800,
              1000,
              1100,
              1150,
              1200
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addStar',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 11
      },
      {
        name: 'critical',
        number: 8
      }
    ]
  },
  {
    id: '95',
    fullname: '子吉爾',
    classType: 'archer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '男性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '王'
    ],
    starDrop: 7.9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        16,
        33,
        51
      ]
    },
    npGain: {
      arts: 0.62,
      buster: 0.62,
      quick: 0.62,
      extra: 0.62,
      weapon: 0.62
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '王の財宝(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              4,
              8,
              13,
              4,
              8,
              13,
              4,
              8,
              13,
              25
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '王の財宝(野に咲く花の愛でかた)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              4,
              8,
              13,
              4,
              8,
              13,
              4,
              8,
              13,
              25
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'damage',
        number: 175
      },
      {
        name: 'critical',
        number: 10
      }
    ]
  },
  {
    id: '96',
    fullname: '巖窟王',
    classType: 'avenger',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 5.9,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        5,
        11,
        5,
        17,
        62
      ]
    },
    npGain: {
      arts: 0.62,
      buster: 0.62,
      quick: 0.62,
      extra: 0.62,
      weapon: 0.62
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '虎よ、煌々と燃え盛れ(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              3,
              6,
              10,
              13,
              16,
              13,
              10,
              29
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 8
      }
    ]
  },
  {
    id: '97',
    fullname: '南丁格爾',
    classType: 'berserker',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 5,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        66,
        34
      ],
      buster: [
        100
      ],
      quick: [
        6,
        13,
        20,
        13,
        20,
        28
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.77,
      buster: 0.77,
      quick: 0.5,
      extra: 0.77,
      weapon: 0.77
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '我はすべて毒あるもの、害あるものを絶つ(初期)',
        specialBoost: [],
        effectList: []
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 12
      }
    ]
  },
  {
    id: '98',
    fullname: '庫・夫林〔Alter〕',
    classType: 'berserker',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人'
    ],
    starDrop: 5.1,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        5,
        10,
        15,
        20,
        50
      ]
    },
    npGain: {
      arts: 0.69,
      buster: 0.69,
      quick: 0.69,
      extra: 0.69,
      weapon: 0.69
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '噛み砕く死牙の獣(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfAttack',
            number: [
              30,
              40,
              50,
              60,
              70
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackOne',
            hits: [
              2,
              5,
              7,
              10,
              5,
              7,
              10,
              5,
              7,
              10,
              5,
              27
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 6
      },
      {
        name: 'damage',
        number: 150
      }
    ]
  },
  {
    id: '99',
    fullname: '女王梅芙',
    classType: 'rider',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '王'
    ],
    starDrop: 9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        19,
        9,
        14,
        9,
        14,
        9,
        26
      ]
    },
    npGain: {
      arts: 0.86,
      buster: 0.86,
      quick: 0.86,
      extra: 0.86,
      weapon: 0.86
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '愛しき私の鉄戦車(初期)',
        specialBoost: [
          {
            limitTarget: '男性',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '愛しき私の鉄戦車(強化クエスト メイヴ)',
        specialBoost: [
          {
            limitTarget: '男性',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              800,
              1000,
              1100,
              1150,
              1200
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 10
      }
    ]
  },
  {
    id: '100',
    fullname: '海倫娜・布拉瓦茨基',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10.7,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        4,
        9,
        14,
        19,
        23,
        31
      ],
      extra: [
        12,
        25,
        63
      ]
    },
    npGain: {
      arts: 0.45,
      buster: 0.45,
      quick: 0.45,
      extra: 0.45,
      weapon: 0.45
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '金星神・火炎天主(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              20,
              30,
              40,
              50
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '金星神・火炎天主(彼女の見る世界)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              600,
              750,
              825,
              862.5,
              900
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              20,
              30,
              40,
              50
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 10
      }
    ]
  },
  {
    id: '101',
    fullname: '羅摩',
    classType: 'saber',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '秩序',
      '善',
      '男性',
      '騎乘',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人',
      '王'
    ],
    starDrop: 10.2,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        25,
        75
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 0.84,
      buster: 0.84,
      quick: 0.84,
      extra: 0.84,
      weapon: 0.84
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '羅刹を穿つ不滅(初期)',
        specialBoost: [
          {
            limitTarget: '魔性',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 11
      },
      {
        name: 'damage',
        number: 200
      }
    ]
  },
  {
    id: '102',
    fullname: '李書文',
    classType: 'lancer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '中立',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 12.2,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.52,
      buster: 0.52,
      quick: 0.52,
      extra: 0.52,
      weapon: 0.52
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '神槍无二打(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              12,
              25,
              63
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseOneDefense',
            number: 20
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '103',
    fullname: '湯瑪斯・愛迪生',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10.6,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.51,
      buster: 0.51,
      quick: 0.51,
      extra: 0.51,
      weapon: 0.51
    },
    weaponList: [
      {
        cardType: 'arts',
        name: 'Ｗ・Ｆ・Ｄ(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 4
      }
    ]
  },
  {
    id: '104',
    fullname: '傑羅尼莫',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '中立',
      '善',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 11,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        25,
        75
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 0.9,
      buster: 0.9,
      quick: 0.9,
      extra: 0.9,
      weapon: 0.9
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '大地を創りし者(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              400,
              550,
              625,
              662.5,
              700
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '大地を創りし者(ジェロニモ・イン・ロンドン)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              600,
              750,
              825,
              862.5,
              900
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 8
      }
    ]
  },
  {
    id: '105',
    fullname: '比利小子',
    classType: 'archer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '中庸',
      '男性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 8,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        10,
        20,
        30,
        40
      ],
      quick: [
        33,
        67
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 0.56,
      buster: 0.56,
      quick: 0.56,
      extra: 0.56,
      weapon: 0.56
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '壊音の霹靂(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              16,
              33,
              51
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'quick',
        name: '壊音の霹靂(強化クエスト ビリー・ザ・キッド)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              16,
              33,
              51
            ],
            number: [
              1600,
              2000,
              2200,
              2300,
              2400
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 7
      },
      {
        name: 'critical',
        number: 10
      }
    ]
  },
  {
    id: '106',
    fullname: '貞德〔Alter〕',
    classType: 'avenger',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '人型',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 6,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        10,
        20,
        30,
        40
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        3,
        7,
        10,
        14,
        17,
        21,
        28
      ]
    },
    npGain: {
      arts: 0.83,
      buster: 0.83,
      quick: 0.83,
      extra: 0.83,
      weapon: 0.83
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '吼え立てよ、我が憤怒(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              3,
              5,
              3,
              7,
              8,
              10,
              12,
              14,
              16,
              22
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 10
      }
    ]
  },
  {
    id: '107',
    fullname: '安格拉曼紐',
    classType: 'avenger',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 6,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 0.79,
      buster: 0.79,
      quick: 0.79,
      extra: 0.79,
      weapon: 0.79
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '偽り写し記す万象(初期)',
        specialBoost: [],
        effectList: []
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 10
      }
    ]
  },
  {
    id: '108',
    fullname: '伊斯坎達爾',
    classType: 'rider',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '中立',
      '善',
      '男性',
      '騎乘',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '愛人',
      '王',
      '希臘神話系男性'
    ],
    starDrop: 8.8,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        4,
        9,
        14,
        19,
        23,
        31
      ]
    },
    npGain: {
      arts: 0.66,
      buster: 0.66,
      quick: 0.66,
      extra: 0.66,
      weapon: 0.66
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '王の軍勢(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              33,
              12,
              8,
              4,
              12,
              8,
              4,
              19
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      },
      {
        cardType: 'buster',
        name: '王の軍勢(遠征は終わらず)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              33,
              12,
              8,
              4,
              12,
              8,
              4,
              19
            ],
            number: [
              400,
              500,
              550,
              575,
              600
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 11
      },
      {
        name: 'damage',
        number: 150
      }
    ]
  },
  {
    id: '109',
    fullname: 'Emiya〔Assassin〕',
    classType: 'assassin',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 25.6,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        8,
        16,
        25,
        8,
        16,
        27
      ],
      quick: [
        9,
        27,
        27,
        37
      ],
      extra: [
        15,
        21,
        5,
        10,
        15,
        5,
        10,
        19
      ]
    },
    npGain: {
      arts: 0.46,
      buster: 0.46,
      quick: 0.46,
      extra: 0.46,
      weapon: 0.28
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '時のある間に薔薇を摘め(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              6,
              4,
              8,
              6,
              8,
              4,
              6,
              4,
              2,
              6,
              2,
              8,
              2,
              6,
              28
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 10
      },
      {
        name: 'starDrop',
        number: 10.5
      }
    ]
  },
  {
    id: '110',
    fullname: '百貌的哈桑',
    classType: 'assassin',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '惡',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 25.5,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        4,
        9,
        14,
        19,
        23,
        31
      ]
    },
    npGain: {
      arts: 0.48,
      buster: 0.48,
      quick: 0.48,
      extra: 0.48,
      weapon: 0.38
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '妄想幻像(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              16,
              5,
              11,
              8,
              11,
              5,
              8,
              5,
              2,
              8,
              2,
              11,
              8
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 10
      }
    ]
  },
  {
    id: '111',
    fullname: '愛麗絲菲爾〔天之衣〕',
    classType: 'caster',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 10.8,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 0.42,
      buster: 0.42,
      quick: 0.42,
      extra: 0.42,
      weapon: 0.42
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '白き聖杯よ、謳え(初期)',
        specialBoost: [],
        effectList: []
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 8
      },
      {
        name: 'damage',
        number: 200
      }
    ]
  },
  {
    id: '112',
    fullname: '酒呑童子',
    classType: 'assassin',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '人型',
      '神性',
      '魔性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '龍'
    ],
    starDrop: 25,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        9,
        27,
        27,
        37
      ],
      extra: [
        4,
        9,
        14,
        19,
        23,
        31
      ]
    },
    npGain: {
      arts: 0.55,
      buster: 0.55,
      quick: 0.55,
      extra: 0.55,
      weapon: 0.55
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '千紫万紅・神便鬼毒(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addAllSpecialAttribute',
            number: '中毒'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'damage',
        number: 150
      },
      {
        name: 'starDrop',
        number: 6
      }
    ]
  },
  {
    id: '113',
    fullname: '玄奘三藏',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 11,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        4,
        9,
        14,
        19,
        23,
        31
      ]
    },
    npGain: {
      arts: 0.82,
      buster: 0.82,
      quick: 0.82,
      extra: 0.82,
      weapon: 0.82
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '五行山・釈迦如来掌(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              15,
              3,
              6,
              9,
              3,
              6,
              9,
              3,
              6,
              9,
              3,
              28
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 11
      },
      {
        name: 'damage',
        number: 125
      }
    ]
  },
  {
    id: '114',
    fullname: '源頼光',
    classType: 'berserker',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '騎乘',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 4.9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        10,
        20,
        30,
        40
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        20,
        13,
        6,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.46,
      buster: 0.46,
      quick: 0.46,
      extra: 0.46,
      weapon: 0.46
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '牛王招雷・天網恢々(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfStarDrop',
            number: [
              100,
              150,
              200,
              250,
              300
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackAll',
            hits: [
              16,
              12,
              12,
              8,
              16,
              12,
              24
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 12
      },
      {
        name: 'quick',
        number: 11
      },
      {
        name: 'damage',
        number: 150
      }
    ]
  },
  {
    id: '115',
    fullname: '坂田金時',
    classType: 'rider',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '男性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人'
    ],
    starDrop: 9,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 1.15,
      buster: 1.15,
      quick: 1.15,
      extra: 1.15,
      weapon: 1.15
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '夜狼死九・黄金疾走(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfQuick',
            number: [
              10,
              30,
              50,
              70,
              90
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackOne',
            hits: [
              35,
              21,
              14,
              30
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'damage',
        number: 150
      }
    ]
  },
  {
    id: '116',
    fullname: '茨木童子',
    classType: 'berserker',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '人型',
      '魔性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 4.9,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        9,
        27,
        27,
        37
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 1.03,
      buster: 1.03,
      quick: 1.03,
      extra: 1.03,
      weapon: 1.03
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '羅生門大怨起(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'dispelOneBuff',
            useNumberBy: 'charge'
          },
          {
            effectType: 'decreaseOneDefense',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 8
      }
    ]
  },
  {
    id: '117',
    fullname: '風魔小太郎',
    classType: 'assassin',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 25.6,
    cards: {
      arts: 1,
      buster: 1,
      quick: 3
    },
    hits: {
      arts: [
        10,
        20,
        30,
        40
      ],
      buster: [
        100
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 0.54,
      buster: 0.54,
      quick: 0.54,
      extra: 0.54,
      weapon: 0.54
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '不滅の混沌旅団(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 10.5
      }
    ]
  },
  {
    id: '118',
    fullname: '奧茲曼迪亞斯',
    classType: 'rider',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '混沌',
      '中庸',
      '男性',
      '騎乘',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人',
      '王'
    ],
    starDrop: 9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        6,
        13,
        20,
        26,
        35
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.59,
      buster: 0.59,
      quick: 0.59,
      extra: 0.59,
      weapon: 0.59
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '光輝の大複合神殿(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseOneDefense',
            number: [
              20,
              30,
              40,
              50,
              60
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 11
      },
      {
        name: 'damage',
        number: 175
      }
    ]
  },
  {
    id: '119',
    fullname: '阿爾托莉亞・潘德拉剛',
    classType: 'lancer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '騎乘',
      '人型',
      '龍',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '亞瑟',
      '王'
    ],
    starDrop: 12.2,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 1.1,
      buster: 1.1,
      quick: 1.1,
      extra: 1.1,
      weapon: 1.1
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '最果てにて輝ける槍(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              33,
              67
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addSelfNp',
            number: [
              20,
              30,
              40,
              50,
              60
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 10
      }
    ]
  },
  {
    id: '120',
    fullname: '尼托克里絲',
    classType: 'caster',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '王'
    ],
    starDrop: 10.8,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.54,
      buster: 0.54,
      quick: 0.54,
      extra: 0.54,
      weapon: 0.54
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '冥鏡宝典(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '冥鏡宝典(ファラオ・ニトクリス)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              600,
              750,
              825,
              862.5,
              900
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 10
      },
      {
        name: 'damage',
        number: 175
      }
    ]
  },
  {
    id: '121',
    fullname: '蘭斯洛特',
    classType: 'saber',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '秩序',
      '善',
      '男性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人'
    ],
    starDrop: 10,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        10,
        20,
        30,
        40
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.83,
      buster: 0.83,
      quick: 0.83,
      extra: 0.83,
      weapon: 0.83
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '縛鎖全断・過重湖光(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfArt',
            number: 30
          },
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addOneBeHitDamage',
            number: [
              1000,
              1500,
              2000,
              2500,
              3000
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '122',
    fullname: '崔斯坦',
    classType: 'archer',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 8.1,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        6,
        13,
        20,
        26,
        35
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        4,
        9,
        14,
        19,
        23,
        31
      ]
    },
    npGain: {
      arts: 0.58,
      buster: 0.58,
      quick: 0.58,
      extra: 0.58,
      weapon: 0.58
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '痛哭の幻奏(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              5,
              11,
              16,
              5,
              11,
              16,
              36
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 8
      }
    ]
  },
  {
    id: '123',
    fullname: '高文',
    classType: 'saber',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '秩序',
      '善',
      '男性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '愛人'
    ],
    starDrop: 10,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 1.14,
      buster: 1.14,
      quick: 1.14,
      extra: 1.14,
      weapon: 1.14
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '転輪する勝利の剣(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '124',
    fullname: '靜謐的哈桑',
    classType: 'assassin',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '惡',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 25.6,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        10,
        20,
        30,
        40
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.53,
      buster: 0.53,
      quick: 0.53,
      extra: 0.53,
      weapon: 0.53
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '妄想毒身(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addOneSpecialAttribute',
            number: '中毒'
          },
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          }
        ]
      },
      {
        cardType: 'arts',
        name: '妄想毒身(強化クエスト 静謐のハサン)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addOneSpecialAttribute',
            number: '中毒'
          },
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              1200,
              1500,
              1650,
              1725,
              1800
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 10
      },
      {
        name: 'starDrop',
        number: 10.5
      }
    ]
  },
  {
    id: '125',
    fullname: '俵藤太',
    classType: 'archer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '中立',
      '善',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 7.8,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.57,
      buster: 0.57,
      quick: 0.57,
      extra: 0.57,
      weapon: 0.57
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '八幡祈願・大妖射貫(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackSelfSpecialBoost',
            limitTarget: '魔性',
            number: [
              50,
              62.5,
              75,
              87.5,
              100
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 8
      }
    ]
  },
  {
    id: '126',
    fullname: '貝德維爾',
    classType: 'saber',
    alignmentType: 'star',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '秩序',
      '善',
      '男性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 10.2,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        33,
        67
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 1.11,
      buster: 1.11,
      quick: 1.11,
      extra: 1.11,
      weapon: 1.11
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '剣を摂れ、銀色の腕(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfBuster',
            number: [
              30,
              40,
              50,
              60,
              70
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackOne',
            hits: [
              33,
              67
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 10
      }
    ]
  },
  {
    id: '127',
    fullname: '李奧納多・達文西',
    classType: 'caster',
    alignmentType: 'star',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10.8,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        9,
        27,
        27,
        37
      ],
      extra: [
        9,
        18,
        27,
        46
      ]
    },
    npGain: {
      arts: 0.54,
      buster: 0.54,
      quick: 0.54,
      extra: 0.54,
      weapon: 0.54
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '万能の人(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'addSelfWeapon',
            number: [
              30,
              40,
              50,
              60,
              70
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 10
      }
    ]
  },
  {
    id: '128',
    fullname: '玉藻前',
    classType: 'lancer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '中立',
      '夏',
      '女性',
      '騎乘',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 12.2,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        10,
        20,
        30,
        40
      ]
    },
    npGain: {
      arts: 1.05,
      buster: 1.05,
      quick: 1.05,
      extra: 1.05,
      weapon: 1.05
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '常夏日光・日除傘寵愛一神(初期)',
        specialBoost: [
          {
            limitTarget: '男性',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 10
      },
      {
        name: 'quick',
        number: 10
      },
      {
        name: 'damage',
        number: 230
      }
    ]
  },
  {
    id: '129',
    fullname: '阿爾托莉亞・潘德拉剛',
    classType: 'archer',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '人型',
      '龍',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '亞瑟',
      '王'
    ],
    starDrop: 8,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.59,
      buster: 0.59,
      quick: 0.59,
      extra: 0.59,
      weapon: 0.59
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '陽光煌めく勝利の剣(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              2,
              5,
              8,
              5,
              8,
              11,
              13,
              8,
              11,
              29
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addSelfNp',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 10
      },
      {
        name: 'critical',
        number: 10
      }
    ]
  },
  {
    id: '130',
    fullname: '瑪莉・安東尼',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10.9,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        6,
        13,
        20,
        26,
        35
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        10,
        20,
        30,
        40
      ]
    },
    npGain: {
      arts: 0.32,
      buster: 0.32,
      quick: 0.32,
      extra: 0.32,
      weapon: 0.32
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '愛すべき輝きは永遠に(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addAllCritical',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 10
      }
    ]
  },
  {
    id: '132',
    fullname: '莫德雷德',
    classType: 'rider',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '人型',
      '龍',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 9.2,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        10,
        20,
        30,
        40
      ]
    },
    npGain: {
      arts: 0.71,
      buster: 0.71,
      quick: 0.71,
      extra: 0.71,
      weapon: 0.71
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '逆巻く波濤を制する王様気分！(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 5
      },
      {
        name: 'starDrop',
        number: 5
      }
    ]
  },
  {
    id: '133',
    fullname: '斯卡哈',
    classType: 'assassin',
    alignmentType: 'star',
    specialAttributeList: [
      'Servant',
      '中立',
      '善',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '王'
    ],
    starDrop: 25.6,
    cards: {
      arts: 1,
      buster: 1,
      quick: 3
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.71,
      buster: 0.71,
      quick: 0.71,
      extra: 0.71,
      weapon: 0.71
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '蹴り穿つ死翔の槍(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 2
      }
    ]
  },
  {
    id: '134',
    fullname: '清姬',
    classType: 'lancer',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '人型',
      '龍',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 12,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        4,
        9,
        14,
        19,
        23,
        31
      ],
      quick: [
        33,
        67
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 1.05,
      buster: 1.05,
      quick: 1.05,
      extra: 1.05,
      weapon: 1.05
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '道成寺鐘百八式火竜薙(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              4,
              9,
              14,
              19,
              23,
              31
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 12
      }
    ]
  },
  {
    id: '135',
    fullname: '瑪爾大',
    classType: 'ruler',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.76,
      buster: 0.76,
      quick: 0.76,
      extra: 0.76,
      weapon: 0.76
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '荒れ狂う哀しき竜よ(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'decreaseOneDefense',
            number: [
              10,
              20,
              30,
              40,
              50
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackOne',
            hits: [
              2,
              5,
              8,
              10,
              13,
              8,
              10,
              13,
              8,
              23
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '136',
    fullname: '伊莉雅絲菲爾',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '中立',
      '善',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10.7,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        6,
        13,
        20,
        26,
        35
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.32,
      buster: 0.32,
      quick: 0.32,
      extra: 0.32,
      weapon: 0.32
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '多元重奏飽和砲撃(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfBuster',
            number: [
              20,
              35,
              50,
              65,
              80
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackOne',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseSelfAttack',
            number: 10
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '137',
    fullname: '克洛伊・馮・愛因茲貝倫',
    classType: 'archer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 8,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        4,
        9,
        14,
        19,
        23,
        31
      ],
      buster: [
        33,
        67
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        10,
        20,
        30,
        40
      ]
    },
    npGain: {
      arts: 0.38,
      buster: 0.38,
      quick: 0.38,
      extra: 0.38,
      weapon: 0.38
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '鶴翼三連(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              4,
              9,
              14,
              19,
              23,
              31
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 8
      }
    ]
  },
  {
    id: '138',
    fullname: '伊莉莎白・巴托里〔Brave〕',
    classType: 'saber',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '混沌',
      '善',
      '女性',
      '人型',
      '龍',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 9.9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.55,
      buster: 0.55,
      quick: 0.55,
      extra: 0.55,
      weapon: 0.55
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '鮮血竜巻魔嬢(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              3,
              7,
              10,
              14,
              17,
              21,
              28
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 6
      }
    ]
  },
  {
    id: '139',
    fullname: '克麗奧佩脫拉',
    classType: 'assassin',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '女性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '王'
    ],
    starDrop: 25.5,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        4,
        9,
        14,
        19,
        23,
        31
      ]
    },
    npGain: {
      arts: 1.06,
      buster: 1.06,
      quick: 1.06,
      extra: 1.06,
      weapon: 1.06
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '暁の時を終える蛇よ、此処に(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfBuster',
            number: [
              30,
              40,
              50,
              60,
              70
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'damage',
        number: 125
      },
      {
        name: 'starDrop',
        number: 8
      }
    ]
  },
  {
    id: '140',
    fullname: '弗拉德三世〔EXTRA〕',
    classType: 'lancer',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '王'
    ],
    starDrop: 11.6,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 1.1,
      buster: 1.1,
      quick: 1.1,
      extra: 1.1,
      weapon: 1.1
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '串刺城塞(初期)',
        specialBoost: [
          {
            limitTarget: '惡',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              4,
              9,
              14,
              19,
              23,
              31
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '141',
    fullname: '貞德・Alter・聖誕・Lily',
    classType: 'lancer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '人型',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 12.1,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.72,
      buster: 0.72,
      quick: 0.72,
      extra: 0.72,
      weapon: 0.72
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '優雅に歌え、かの聖誕を(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addAllAttack',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '142',
    fullname: '伊絲塔',
    classType: 'archer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋'
    ],
    starDrop: 8,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        10,
        20,
        30,
        40
      ],
      buster: [
        100
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        3,
        7,
        10,
        14,
        17,
        21,
        28
      ]
    },
    npGain: {
      arts: 0.45,
      buster: 0.45,
      quick: 0.45,
      extra: 0.45,
      weapon: 0.45
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '山脈震撼す明星の薪(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfBuster',
            number: [
              20,
              30,
              40,
              50,
              60
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackAll',
            hits: [
              13,
              33,
              51
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'damage',
        number: 225
      },
      {
        name: 'critical',
        number: 10
      }
    ]
  },
  {
    id: '143',
    fullname: '恩奇杜',
    classType: 'lancer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '中立',
      '中庸',
      '無性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 12,
    cards: {
      arts: 1,
      buster: 1,
      quick: 3
    },
    hits: {
      arts: [
        6,
        13,
        20,
        26,
        35
      ],
      buster: [
        100
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        4,
        9,
        14,
        19,
        23,
        31
      ]
    },
    npGain: {
      arts: 0.53,
      buster: 0.53,
      quick: 0.53,
      extra: 0.53,
      weapon: 0.53
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '人よ、神を繋ぎとめよう(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'decreaseOneDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackOne',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '144',
    fullname: '魁札爾・科亞特爾',
    classType: 'rider',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '騎乘',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '王'
    ],
    starDrop: 9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.9,
      buster: 0.9,
      quick: 0.9,
      extra: 0.9,
      weapon: 0.9
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '炎、神をも焼き尽くせ(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 12
      },
      {
        name: 'damage',
        number: 300
      }
    ]
  },
  {
    id: '145',
    fullname: '吉爾伽美什',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '男性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '愛人',
      '王'
    ],
    starDrop: 10.9,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        6,
        13,
        20,
        26,
        35
      ],
      buster: [
        4,
        9,
        14,
        19,
        23,
        31
      ],
      quick: [
        33,
        67
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.32,
      buster: 0.32,
      quick: 0.32,
      extra: 0.32,
      weapon: 0.16
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '王の号砲(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              1,
              3,
              5,
              7,
              9,
              10,
              12,
              14,
              16,
              23
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 10
      },
      {
        name: 'damage',
        number: 175
      }
    ]
  },
  {
    id: '146',
    fullname: '美杜莎',
    classType: 'lancer',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '中立',
      '善',
      '女性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 12.2,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        10,
        20,
        30,
        40
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.44,
      buster: 0.44,
      quick: 0.44,
      extra: 0.44,
      weapon: 0.44
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '女神の抱擁(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              2,
              5,
              8,
              11,
              13,
              16,
              19,
              26
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'damage',
        number: 250
      }
    ]
  },
  {
    id: '147',
    fullname: '戈爾貢',
    classType: 'avenger',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 6,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        6,
        13,
        20,
        26,
        35
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.37,
      buster: 0.37,
      quick: 0.37,
      extra: 0.37,
      weapon: 0.37
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '強制封印・万魔神殿(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addAllNp',
            number: 10
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 6
      }
    ]
  },
  {
    id: '148',
    fullname: '豹人',
    classType: 'lancer',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '中庸',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '猛獸'
    ],
    starDrop: 12,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        10,
        20,
        30,
        40
      ],
      quick: [
        33,
        67
      ],
      extra: [
        4,
        9,
        14,
        19,
        23,
        31
      ]
    },
    npGain: {
      arts: 1.05,
      buster: 1.05,
      quick: 1.05,
      extra: 1.05,
      weapon: 1.05
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '逃れ得ぬ死の鉤爪(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              33,
              67
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 2
      }
    ]
  },
  {
    id: '149',
    fullname: '迪亞馬特',
    classType: 'beastII',
    alignmentType: 'beast',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '神性'
    ],
    starDrop: 9.9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        100
      ],
      extra: [
        100
      ]
    },
    npGain: {
      arts: 0,
      buster: 0,
      quick: 0,
      extra: 0,
      weapon: 0
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '仔よ、創世の理に従え(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              100
            ],
            number: 500
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '150',
    fullname: '梅林',
    classType: 'caster',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 10.8,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        6,
        13,
        20,
        26,
        35
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        4,
        9,
        14,
        19,
        23,
        31
      ]
    },
    npGain: {
      arts: 0.81,
      buster: 0.81,
      quick: 0.81,
      extra: 0.81,
      weapon: 0.81
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '永久に閉ざされた理想郷(初期)',
        specialBoost: [],
        effectList: []
      },
      {
        cardType: 'arts',
        name: '永久に閉ざされた理想郷(NPC限定)',
        specialBoost: [],
        effectList: []
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 6
      }
    ]
  },
  {
    id: '151',
    fullname: '哥耶堤亞',
    classType: 'beastI',
    alignmentType: 'beast',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '無性',
      '人型',
      '王'
    ],
    starDrop: 0,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        6,
        13,
        20,
        26,
        35
      ],
      buster: [
        6,
        13,
        20,
        26,
        35
      ],
      quick: [
        6,
        13,
        20,
        26,
        35
      ],
      extra: [
        100
      ]
    },
    npGain: {
      arts: 0,
      buster: 0,
      quick: 0,
      extra: 0,
      weapon: 0
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '誕生の時きたれり、其は全てを修めるもの(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: 400
          }
        ]
      },
      {
        cardType: 'arts',
        name: '焼却式 ベレト(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: 800
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '152',
    fullname: '所羅門',
    classType: 'caster',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 11,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        100
      ],
      buster: [
        100
      ],
      quick: [
        100
      ],
      extra: [
        100
      ]
    },
    npGain: {
      arts: 1.85,
      buster: 1.85,
      quick: 1.85,
      extra: 1.85,
      weapon: 1.85
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '訣別の時きたれり、其は、世界を手放すもの(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              16,
              33,
              51
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 10
      }
    ]
  },
  {
    id: '153',
    fullname: '宮本武藏',
    classType: 'saber',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '混沌',
      '善',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        33,
        67
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        10,
        20,
        30,
        40
      ]
    },
    npGain: {
      arts: 0.87,
      buster: 0.87,
      quick: 0.87,
      extra: 0.87,
      weapon: 0.87
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '六道五輪・倶利伽羅天象(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfWeapon',
            number: [
              20,
              30,
              40,
              50,
              60
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackOne',
            hits: [
              3,
              7,
              10,
              14,
              17,
              21,
              28
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'dispelOneBuff',
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '154',
    fullname: '“山之翁”',
    classType: 'assassin',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 25.5,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        6,
        13,
        20,
        26,
        35
      ],
      extra: [
        4,
        9,
        14,
        19,
        23,
        31
      ]
    },
    npGain: {
      arts: 1,
      buster: 1,
      quick: 1,
      extra: 1,
      weapon: 1
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '死告天使(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 8
      },
      {
        name: 'starDrop',
        number: 10
      }
    ]
  },
  {
    id: '155',
    fullname: '謎之女主角X〔Alter〕',
    classType: 'berserker',
    alignmentType: 'star',
    specialAttributeList: [
      'Servant',
      '中立',
      '惡',
      '女性',
      '人型',
      '龍',
      '阿爾托莉亞臉',
      '亞瑟',
      '王'
    ],
    starDrop: 5,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        10,
        20,
        30,
        40
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 1.07,
      buster: 1.07,
      quick: 1.07,
      extra: 1.07,
      weapon: 1.07
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '黒竜双剋勝利剣(初期)',
        specialBoost: [
          {
            limitTarget: 'Saber職階Servant',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              2,
              4,
              6,
              8,
              11,
              13,
              15,
              17,
              24
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 6
      }
    ]
  },
  {
    id: '156',
    fullname: '詹姆斯・莫里亞蒂',
    classType: 'archer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 8,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        10,
        20,
        30,
        40
      ],
      buster: [
        6,
        13,
        20,
        26,
        35
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        4,
        9,
        14,
        19,
        23,
        31
      ]
    },
    npGain: {
      arts: 0.38,
      buster: 0.38,
      quick: 0.38,
      extra: 0.38,
      weapon: 0.38
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '終局的犯罪(監獄グレートエスケープ)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'decreaseOneDefense',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackOne',
            hits: [
              1,
              2,
              3,
              5,
              6,
              7,
              8,
              10,
              11,
              12,
              14,
              21
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 11
      }
    ]
  },
  {
    id: '157',
    fullname: 'Emiya〔Alter〕',
    classType: 'archer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 7.9,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        10,
        20,
        30,
        40
      ],
      buster: [
        10,
        20,
        30,
        40
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.43,
      buster: 0.43,
      quick: 0.43,
      extra: 0.43,
      weapon: 0.43
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '無限の剣製(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              1,
              3,
              5,
              7,
              9,
              10,
              12,
              14,
              16,
              23
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 10
      }
    ]
  },
  {
    id: '158',
    fullname: '海森・羅伯',
    classType: 'avenger',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '猛獸'
    ],
    starDrop: 6,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        33,
        67
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.79,
      buster: 0.79,
      quick: 0.79,
      extra: 0.79,
      weapon: 0.79
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '遥かなる者への斬罪(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              2,
              5,
              8,
              11,
              13,
              16,
              19,
              26
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 8
      }
    ]
  },
  {
    id: '159',
    fullname: '燕青',
    classType: 'assassin',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 25.6,
    cards: {
      arts: 1,
      buster: 1,
      quick: 3
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.71,
      buster: 0.71,
      quick: 0.71,
      extra: 0.71,
      weapon: 0.71
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '十面埋伏・無影の如く(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              1,
              3,
              4,
              6,
              7,
              9,
              10,
              12,
              13,
              15,
              20
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 5
      },
      {
        name: 'critical',
        number: 5
      },
      {
        name: 'starDrop',
        number: 6
      }
    ]
  },
  {
    id: '160',
    fullname: '亞瑟・潘德拉剛〔Prototype〕',
    classType: 'saber',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '秩序',
      '善',
      '男性',
      '騎乘',
      '人型',
      '龍',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '亞瑟',
      '愛人',
      '王'
    ],
    starDrop: 10,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.84,
      buster: 0.84,
      quick: 0.84,
      extra: 0.84,
      weapon: 0.84
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '約束された勝利の剣(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfWeapon',
            number: [
              10,
              20,
              30,
              40,
              50
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '161',
    fullname: '土方歲三',
    classType: 'berserker',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '惡',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 4.9,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        0,
        0
      ],
      buster: [
        0,
        0
      ],
      quick: [
        0,
        0,
        0
      ],
      extra: [
        0,
        0,
        0
      ]
    },
    npGain: {
      arts: 1.08,
      buster: 1.08,
      quick: 1.08,
      extra: 1.08,
      weapon: 1.08
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '不滅の誠(初期)',
        specialBoost: [
          {
            limitTarget: 'hpPercentage',
            number: [
              600,
              800,
              900,
              950,
              1000
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              0,
              0,
              0,
              0,
              0
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '162',
    fullname: '茶茶',
    classType: 'berserker',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '中庸',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 4.9,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        0,
        0
      ],
      buster: [
        0,
        0,
        0,
        0,
        0
      ],
      quick: [
        0,
        0,
        0
      ],
      extra: [
        0,
        0,
        0,
        0
      ]
    },
    npGain: {
      arts: 1.03,
      buster: 1.03,
      quick: 1.03,
      extra: 1.03,
      weapon: 1.03
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '絢爛魔界日輪城(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: []
  },
  {
    id: '163',
    fullname: 'Meltlilith',
    classType: 'alterEgo',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '騎乘',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 10.2,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        0,
        0
      ],
      buster: [
        0
      ],
      quick: [
        0,
        0,
        0,
        0
      ],
      extra: [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    npGain: {
      arts: 0.92,
      buster: 0.92,
      quick: 0.92,
      extra: 0.92,
      weapon: 0.92
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '弁財天五弦琵琶(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'dispelOneBuff',
            useNumberBy: 'charge'
          },
          {
            effectType: 'addSelfQuick',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      },
      {
        name: 'damage',
        number: 225
      },
      {
        name: 'critical',
        number: 10
      }
    ]
  },
  {
    id: '164',
    fullname: 'Passionlip',
    classType: 'alterEgo',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '女性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 9.9,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        0,
        0,
        0
      ],
      buster: [
        0
      ],
      quick: [
        0,
        0,
        0,
        0
      ],
      extra: [
        0,
        0,
        0,
        0,
        0
      ]
    },
    npGain: {
      arts: 0.77,
      buster: 0.77,
      quick: 0.77,
      extra: 0.77,
      weapon: 0.77
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '死が二人を別離つとも(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'damage',
        number: 200
      },
      {
        name: 'critical',
        number: 6
      },
      {
        name: 'starDrop',
        number: 10.5
      }
    ]
  },
  {
    id: '165',
    fullname: '鈴鹿御前',
    classType: 'saber',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      'Saber職階Servant',
      '中立',
      '惡',
      '女性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '騎乘',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 10.2,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        0,
        0,
        0
      ],
      buster: [
        0,
        0,
        0
      ],
      quick: [
        0,
        0,
        0
      ],
      extra: [
        0,
        0,
        0,
        0
      ]
    },
    npGain: {
      arts: 0.57,
      buster: 0.57,
      quick: 0.57,
      extra: 0.57,
      weapon: 0.57
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '天鬼雨(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addSelfCritical',
            number: [
              40,
              50,
              60,
              70,
              80
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      },
      {
        name: 'damage',
        number: 200
      }
    ]
  },
  {
    id: '166',
    fullname: 'ＢＢ',
    classType: 'moonCancer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 14.7,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        6,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.61,
      buster: 0.61,
      quick: 0.61,
      extra: 0.61,
      weapon: 0.61
    },
    weaponList: [
      {
        cardType: 'arts',
        name: 'Ｃ.Ｃ.Ｃ.(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              0,
              0,
              0,
              0,
              0
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addAllNp',
            number: 20
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 10
      }
    ]
  },
  {
    id: '167',
    fullname: '殺生院祈荒',
    classType: 'alterEgo',
    alignmentType: 'beast',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '人型'
    ],
    starDrop: 10,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.55,
      buster: 0.55,
      quick: 0.55,
      extra: 0.55,
      weapon: 0.55
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '快楽天・胎蔵曼荼羅(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 10
      },
      {
        name: 'specialBoost',
        limitTarget: 'ruler',
        number: 150
      }
    ]
  },
  {
    id: '169',
    fullname: '山魯佐德',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 10.8,
    cards: {
      arts: 3,
      buster: 1,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        10,
        20,
        30,
        40
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        10,
        20,
        30,
        40
      ]
    },
    npGain: {
      arts: 0.51,
      buster: 0.51,
      quick: 0.51,
      extra: 0.51,
      weapon: 0.51
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '千夜一夜物語(初期)',
        specialBoost: [
          {
            limitTarget: '王',
            number: [
              200,
              250,
              275,
              287.5,
              300
            ]
          }
        ],
        effectList: [
          {
            effectType: 'addSelfWeapon',
            number: 20
          },
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 11.5
      }
    ]
  },
  {
    id: '170',
    fullname: '武則天',
    classType: 'assassin',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '惡',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '王'
    ],
    starDrop: 25.5,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        16,
        33,
        51
      ]
    },
    npGain: {
      arts: 0.87,
      buster: 0.87,
      quick: 0.87,
      extra: 0.87,
      weapon: 0.87
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '告密羅織経(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addOneSpecialAttribute',
            number: '中毒'
          },
          {
            effectType: 'addSelfCritical',
            number: [
              50,
              62.5,
              75,
              87.5,
              100
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 4
      }
    ]
  },
  {
    id: '171',
    fullname: '彭忒西勒亞',
    classType: 'berserker',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '王'
    ],
    starDrop: 4.9,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        33,
        67
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 1.07,
      buster: 1.07,
      quick: 1.07,
      extra: 1.07,
      weapon: 1.07
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '我が瞋恚にて果てよ英雄(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              2,
              5,
              8,
              11,
              13,
              16,
              19,
              26
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 12
      },
      {
        name: 'damage',
        number: 175
      }
    ]
  },
  {
    id: '172',
    fullname: '克里斯多福・哥倫布',
    classType: 'rider',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '惡',
      '男性',
      '人型',
      '騎乘',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 8.9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        10,
        20,
        30,
        40
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.55,
      buster: 0.55,
      quick: 0.55,
      extra: 0.55,
      weapon: 0.55
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '新天地探索航(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '173',
    fullname: '夏洛克・福爾摩斯',
    classType: 'ruler',
    alignmentType: 'star',
    specialAttributeList: [
      'Servant',
      '中立',
      '善',
      '男性',
      '人型'
    ],
    starDrop: 10.0,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        10,
        20,
        30,
        40
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.76,
      buster: 0.76,
      quick: 0.76,
      extra: 0.76,
      weapon: 0.76
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '初歩的なことだ、友よ(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'decreaseAllDefense',
            number: [
              30,
              40,
              45,
              47.5,
              50
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addAllCritical',
            number: [
              50,
              62.5,
              75,
              87.5,
              100
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'dispelAllBuff',
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'arts',
        number: 12
      }
    ]
  },
  {
    id: '174',
    fullname: '保羅・班揚',
    classType: 'berserker',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '中立',
      '中庸',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 4.9,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        10,
        20,
        30,
        40
      ]
    },
    npGain: {
      arts: 0.67,
      buster: 0.67,
      quick: 0.67,
      extra: 0.67,
      weapon: 0.67
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '驚くべき偉業(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              33,
              67
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 4
      }
    ]
  },
  {
    id: '175',
    fullname: '尼祿・克勞狄烏斯',
    classType: 'caster',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '夏',
      '女性',
      '騎乘',
      '人型',
      '羅馬',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋',
      '王'
    ],
    starDrop: 11.1,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        4,
        9,
        14,
        19,
        23,
        31
      ],
      buster: [
        33,
        67
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        4,
        9,
        14,
        19,
        23,
        31
      ]
    },
    npGain: {
      arts: 0.4,
      buster: 0.4,
      quick: 0.4,
      extra: 0.4,
      weapon: 0.4
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '誉れ歌う黄金劇場(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfWeapon',
            number: [
              20,
              30,
              40,
              50,
              60
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackAll',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      },
      {
        name: 'arts',
        number: 11
      }
    ]
  },
  {
    id: '176',
    fullname: '弗蘭肯斯坦',
    classType: 'saber',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '中立',
      '夏',
      '女性',
      '騎乘',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 9.9,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        10,
        20,
        30,
        40
      ],
      buster: [
        6,
        13,
        20,
        26,
        35
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.7,
      buster: 0.7,
      quick: 0.7,
      extra: 0.7,
      weapon: 0.7
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '串刺の雷刃(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 12
      },
      {
        name: 'buster',
        number: 2
      }
    ]
  },
  {
    id: '177',
    fullname: '尼托克里絲',
    classType: 'assassin',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋',
      '王'
    ],
    starDrop: 25,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        10,
        20,
        30,
        40
      ]
    },
    npGain: {
      arts: 0.78,
      buster: 0.78,
      quick: 0.78,
      extra: 0.78,
      weapon: 0.78
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '穢れを漱げ、青く美しきナイル(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              20,
              20,
              20,
              20,
              20
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 10
      },
      {
        name: 'damage',
        number: 185
      }
    ]
  },
  {
    id: '178',
    fullname: '織田信長',
    classType: 'berserker',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '夏',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '王'
    ],
    starDrop: 5,
    cards: {
      arts: 1,
      buster: 3,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        4,
        9,
        14,
        19,
        23,
        31
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.93,
      buster: 0.93,
      quick: 0.93,
      extra: 0.93,
      weapon: 0.93
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '第六天魔王波旬～夏盛～(初期)',
        specialBoost: [
          {
            limitTarget: '神性',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              1,
              2,
              3,
              5,
              6,
              7,
              8,
              10,
              11,
              12,
              14,
              21
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'buster',
        number: 6
      }
    ]
  },
  {
    id: '179',
    fullname: '阿爾托莉亞・潘德拉剛〔Alter〕',
    classType: 'rider',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '惡',
      '女性',
      '騎乘',
      '人型',
      '龍',
      '阿爾托莉亞臉',
      '被「天地乖離開辟之星」所剋',
      '亞瑟',
      '王'
    ],
    starDrop: 9,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        33,
        67
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.59,
      buster: 0.59,
      quick: 0.59,
      extra: 0.59,
      weapon: 0.59
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '不撓燃えたつ勝利の剣(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              4,
              9,
              14,
              19,
              23,
              31
            ],
            number: [
              1200,
              1600,
              1800,
              1900,
              2000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addSelfNp',
            number: [
              10,
              10,
              10,
              10,
              10
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      },
      {
        name: 'critical',
        number: 12
      }
    ]
  },
  {
    id: '180',
    fullname: '海倫娜・布拉瓦茨基',
    classType: 'archer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '混沌',
      '善',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋'
    ],
    starDrop: 8,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        6,
        13,
        20,
        26,
        35
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        16,
        33,
        51
      ]
    },
    npGain: {
      arts: 0.38,
      buster: 0.38,
      quick: 0.38,
      extra: 0.38,
      weapon: 0.38
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '金星神・白銀円環(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              450,
              600,
              675,
              712.5,
              750
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'decreaseAllDefense',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 6
      }
    ]
  },
  {
    id: '181',
    fullname: '源賴光',
    classType: 'lancer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '騎乘',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 11.8,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        10,
        20,
        30,
        40
      ],
      buster: [
        100
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.75,
      buster: 0.75,
      quick: 0.75,
      extra: 0.75,
      weapon: 0.75
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '釈提桓因・金剛杵(初期)',
        specialBoost: [
          {
            limitTarget: 'ignoreDefense'
          }
        ],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              6,
              9,
              14,
              19,
              23,
              31
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addStar',
            number: [
              20,
              25,
              30,
              35,
              40
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 11
      },
      {
        name: 'buster',
        number: 6
      },
      {
        name: 'damage',
        number: 150
      }
    ]
  },
  {
    id: '182',
    fullname: '伊絲塔',
    classType: 'rider',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '騎乘',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋'
    ],
    starDrop: 9,
    cards: {
      arts: 2,
      buster: 1,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        6,
        13,
        20,
        26,
        35
      ],
      quick: [
        33,
        67
      ],
      extra: [
        16,
        33,
        51
      ]
    },
    npGain: {
      arts: 0.68,
      buster: 0.68,
      quick: 0.68,
      extra: 0.68,
      weapon: 0.68
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '神峰天廻る明星の虹(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfQuick',
            number: [
              20,
              30,
              40,
              50,
              60
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'attackAll',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 12
      },
      {
        name: 'critical',
        number: 10
      },
      {
        name: 'damage',
        number: 225
      }
    ]
  },
  {
    id: '183',
    fullname: '帕爾瓦蒂',
    classType: 'lancer',
    alignmentType: 'sky',
    specialAttributeList: [
      'Servant',
      '秩序',
      '善',
      '女性',
      '人型',
      '神性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋'
    ],
    starDrop: 11.8,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 1.08,
      buster: 1.08,
      quick: 1.08,
      extra: 1.08,
      weapon: 1.08
    },
    weaponList: [
      {
        cardType: 'quick',
        name: '恋見てせざるは愛無きなり(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addAllNp',
            number: [
              10,
              15,
              20,
              25,
              30
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'damage',
        number: 225
      }
    ]
  },
  {
    id: '184',
    fullname: '巴御前',
    classType: 'archer',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '中立',
      '中庸',
      '女性',
      '人型',
      '魔性',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 7.9,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        33,
        67
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.87,
      buster: 0.87,
      quick: 0.87,
      extra: 0.87,
      weapon: 0.87
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '真言・聖観世音菩薩(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              100
            ],
            number: [
              600,
              800,
              900,
              950,
              1000
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'critical',
        number: 10
      },
      {
        name: 'buster',
        number: 2
      }
    ]
  },
  {
    id: '185',
    fullname: '望月千代女',
    classType: 'assassin',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '混沌',
      '惡',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 25.5,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        16,
        33,
        51
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        10,
        20,
        30,
        40
      ]
    },
    npGain: {
      arts: 0.8,
      buster: 0.8,
      quick: 0.8,
      extra: 0.8,
      weapon: 0.8
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '口寄せ・伊吹大明神縁起(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              6,
              13,
              20,
              26,
              35
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 10.5
      }
    ]
  },
  {
    id: '186',
    fullname: '寶藏院胤舜',
    classType: 'lancer',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '中立',
      '中庸',
      '男性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 12.2,
    cards: {
      arts: 1,
      buster: 1,
      quick: 3
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        33,
        67
      ],
      quick: [
        16,
        33,
        51
      ],
      extra: [
        10,
        20,
        30,
        40
      ]
    },
    npGain: {
      arts: 1.06,
      buster: 1.06,
      quick: 1.06,
      extra: 1.06,
      weapon: 1.06
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '朧裏月十一式(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'addSelfAttack',
            number: [
              30,
              40,
              45,
              47.5,
              50
            ],
            useNumberBy: 'level'
          },
          {
            effectType: 'addSelfStarDrop',
            number: [
              100,
              125,
              150,
              175,
              200
            ],
            useNumberBy: 'charge'
          },
          {
            effectType: 'addSelfCritical',
            number: [
              100,
              100,
              100,
              100,
              100
            ],
            useNumberBy: 'charge'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 10.5
      }
    ]
  },
  {
    id: '187',
    fullname: '柳生但馬守宗矩',
    classType: 'saber',
    alignmentType: 'human',
    specialAttributeList: [
      'Servant',
      '秩序',
      '中庸',
      '男性',
      '人型',
      '騎乘',
      '被「天地乖離開辟之星」所剋',
      '愛人'
    ],
    starDrop: 10.3,
    cards: {
      arts: 2,
      buster: 2,
      quick: 1
    },
    hits: {
      arts: [
        33,
        67
      ],
      buster: [
        100
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        10,
        20,
        30,
        40
      ]
    },
    npGain: {
      arts: 0.81,
      buster: 0.81,
      quick: 0.81,
      extra: 0.81,
      weapon: 0.81
    },
    weaponList: [
      {
        cardType: 'arts',
        name: '剣術無双・剣禅一如(初期)',
        specialBoost: [],
        effectList: [
          {
            effectType: 'attackOne',
            hits: [
              10,
              20,
              30,
              40
            ],
            number: [
              900,
              1200,
              1350,
              1425,
              1500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'quick',
        number: 8
      }
    ]
  },
  {
    id: '188',
    fullname: '加藤段藏',
    classType: 'assassin',
    alignmentType: 'earth',
    specialAttributeList: [
      'Servant',
      '中立',
      '中庸',
      '女性',
      '人型',
      '被「天地乖離開辟之星」所剋',
      '被「人類神話・雷電降臨」所剋',
      '被「神秘殺し」所剋'
    ],
    starDrop: 25.5,
    cards: {
      arts: 1,
      buster: 2,
      quick: 2
    },
    hits: {
      arts: [
        16,
        33,
        51
      ],
      buster: [
        33,
        67
      ],
      quick: [
        10,
        20,
        30,
        40
      ],
      extra: [
        6,
        13,
        20,
        26,
        35
      ]
    },
    npGain: {
      arts: 0.71,
      buster: 0.71,
      quick: 0.71,
      extra: 0.71,
      weapon: 0.71
    },
    weaponList: [
      {
        cardType: 'buster',
        name: '絡繰幻法・呑牛(初期)',
        specialBoost: [
          {
            limitTarget: '魔性',
            number: [
              150,
              162.5,
              175,
              187.5,
              200
            ]
          }
        ],
        effectList: [
          {
            effectType: 'attackAll',
            hits: [
              16,
              33,
              51
            ],
            number: [
              300,
              400,
              450,
              475,
              500
            ],
            useNumberBy: 'level'
          }
        ]
      }
    ],
    passiveBuff: [
      {
        name: 'starDrop',
        number: 10
      }
    ]
  }
];