const medicineData = {
    "人参": {
        pinyin: "Renshen",
        category: "补气类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23FFE4B5"/><text x="50%" y="45%" font-family="Arial" font-size="24" fill="%23B8860B" text-anchor="middle">人参</text><text x="50%" y="65%" font-family="Arial" font-size="16" fill="%23CD853F" text-anchor="middle">补气类</text></svg>`,
        properties: {
            nature: "温",
            taste: "甘、微苦",
            meridian: "心、肺、脾经"
        },
        effects: [
            "大补元气",
            "补脾益肺",
            "生津养血",
            "安神益智"
        ],
        usage: [
            "3-9克，煎服",
            "可单用或与其他药材配伍",
            "重症可用至15克"
        ],
        contraindications: "阴虚火旺者慎用，感冒发热、咽喉肿痛、胃有实火者忌服。"
    },
    "黄芪": {
        pinyin: "Huangqi",
        category: "补气类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23FFE4B5"/><text x="50%" y="45%" font-family="Arial" font-size="24" fill="%23B8860B" text-anchor="middle">黄芪</text><text x="50%" y="65%" font-family="Arial" font-size="16" fill="%23CD853F" text-anchor="middle">补气类</text></svg>`,
        properties: {
            nature: "温",
            taste: "甘",
            meridian: "肺、脾经"
        },
        effects: [
            "补气升阳",
            "益卫固表",
            "利水消肿",
            "生津养血",
            "托毒排脓"
        ],
        usage: [
            "10-30克，煎服",
            "可单用或与其他药材配伍",
            "用量可随证候轻重而增减"
        ],
        contraindications: "表实邪旺、气盛有余者忌服。"
    },
    "当归": {
        pinyin: "Danggui",
        category: "补血类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23FFB6C1"/><text x="50%" y="45%" font-family="Arial" font-size="24" fill="%23CD5C5C" text-anchor="middle">当归</text><text x="50%" y="65%" font-family="Arial" font-size="16" fill="%23BC8F8F" text-anchor="middle">补血类</text></svg>`,
        properties: {
            nature: "温",
            taste: "甘、辛",
            meridian: "心、肝、脾经"
        },
        effects: [
            "补血活血",
            "调经止痛",
            "润肠通便",
            "养血润燥"
        ],
        usage: [
            "6-15克，煎服",
            "可单用或与其他药材配伍",
            "外用可制成当归油"
        ],
        contraindications: "胃肠有湿热及大便溏泄者慎服。"
    },
    "金银花": {
        pinyin: "Jinyinhua",
        category: "清热类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23E0FFFF"/><text x="50%" y="45%" font-family="Arial" font-size="24" fill="%234682B4" text-anchor="middle">金银花</text><text x="50%" y="65%" font-family="Arial" font-size="16" fill="%235F9EA0" text-anchor="middle">清热类</text></svg>`,
        properties: {
            nature: "寒",
            taste: "甘",
            meridian: "肺、心、胃经"
        },
        effects: [
            "清热解毒",
            "疏散风热",
            "凉血消肿"
        ],
        usage: [
            "6-15克，煎服",
            "重症可用30-60克",
            "可泡茶饮用"
        ],
        contraindications: "脾胃虚寒者慎服。"
    },
    "陈皮": {
        pinyin: "Chenpi",
        category: "理气类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23FFA07A"/><text x="50%" y="45%" font-family="Arial" font-size="24" fill="%23D2691E" text-anchor="middle">陈皮</text><text x="50%" y="65%" font-family="Arial" font-size="16" fill="%23A0522D" text-anchor="middle">理气类</text></svg>`,
        properties: {
            nature: "温",
            taste: "辛、苦",
            meridian: "脾、肺经"
        },
        effects: [
            "理气健脾",
            "燥湿化痰",
            "和胃醒脾"
        ],
        usage: [
            "3-10克，煎服",
            "可泡茶饮用",
            "可研末服用"
        ],
        contraindications: "阴虚火旺、胃阴不足者慎服。"
    },
    "酸枣仁": {
        pinyin: "Suanzaoren",
        category: "安神类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23E6E6FA"/><text x="50%" y="45%" font-family="Arial" font-size="24" fill="%236A5ACD" text-anchor="middle">酸枣仁</text><text x="50%" y="65%" font-family="Arial" font-size="16" fill="%23483D8B" text-anchor="middle">安神类</text></svg>`,
        properties: {
            nature: "平",
            taste: "甘、酸",
            meridian: "心、肝、胆经"
        },
        effects: [
            "养心安神",
            "敛汗养阴",
            "平肝潜阳"
        ],
        usage: [
            "9-15克，煎服",
            "可研粉冲服",
            "常与其他安神药同用"
        ],
        contraindications: "胃寒及大便溏泄者慎用。"
    },
    "茯苓": {
        pinyin: "Fuling",
        category: "利水类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23B0E0E6"/><text x="50%" y="45%" font-family="Arial" font-size="24" fill="%234169E1" text-anchor="middle">茯苓</text><text x="50%" y="65%" font-family="Arial" font-size="16" fill="%234682B4" text-anchor="middle">利水类</text></svg>`,
        properties: {
            nature: "平",
            taste: "甘、淡",
            meridian: "心、脾、肾经"
        },
        effects: [
            "利水渗湿",
            "健脾宁心",
            "安神益智"
        ],
        usage: [
            "15-30克，煎服",
            "可单用或配伍",
            "制成茯苓粉食用"
        ],
        contraindications: "小便不利、阴虚火旺者慎用。"
    },
    "川芎": {
        pinyin: "Chuanxiong",
        category: "活血类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23FFE4E1"/><text x="50%" y="45%" font-family="Arial" font-size="24" fill="%23DC143C" text-anchor="middle">川芎</text><text x="50%" y="65%" font-family="Arial" font-size="16" fill="%23B22222" text-anchor="middle">活血类</text></svg>`,
        properties: {
            nature: "温",
            taste: "辛",
            meridian: "肝、胆、心包经"
        },
        effects: [
            "活血行气",
            "祛风止痛",
            "理气开郁"
        ],
        usage: [
            "3-10克，煎服",
            "可研末服用",
            "外用可研末调敷"
        ],
        contraindications: "阴虚火旺及月经过多者慎用。"
    },
    "黄连": {
        pinyin: "Huanglian",
        category: "清热类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23E0FFFF"/><text x="50%" y="45%" font-family="Arial" font-size="24" fill="%234682B4" text-anchor="middle">黄连</text><text x="50%" y="65%" font-family="Arial" font-size="16" fill="%235F9EA0" text-anchor="middle">清热类</text></svg>`,
        properties: {
            nature: "寒",
            taste: "苦",
            meridian: "心、脾、胃、肝、胆经"
        },
        effects: [
            "清热燥湿",
            "泻火解毒",
            "清心除烦"
        ],
        usage: [
            "2-5克，煎服",
            "可研末服用",
            "外用可研末调敷"
        ],
        contraindications: "脾胃虚寒者忌服。"
    },
    "白芍": {
        pinyin: "Baishao",
        category: "补血类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23FFB6C1"/><text x="50%" y="45%" font-family="Arial" font-size="24" fill="%23CD5C5C" text-anchor="middle">白芍</text><text x="50%" y="65%" font-family="Arial" font-size="16" fill="%23BC8F8F" text-anchor="middle">补血类</text></svg>`,
        properties: {
            nature: "微寒",
            taste: "苦、酸",
            meridian: "肝、脾经"
        },
        effects: [
            "养血调经",
            "敛阴止汗",
            "柔肝止痛"
        ],
        usage: [
            "6-15克，煎服",
            "可炒用或生用",
            "常与其他药材配伍"
        ],
        contraindications: "脾胃虚寒、不思饮食者慎用。"
    },
    "桂枝": {
        pinyin: "Guizhi",
        category: "发散类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23FFDAB9"/><text x="50%" y="45%" font-family="Arial" font-size="24" fill="%23FF7F50" text-anchor="middle">桂枝</text><text x="50%" y="65%" font-family="Arial" font-size="16" fill="%23FF6347" text-anchor="middle">发散类</text></svg>`,
        properties: {
            nature: "温",
            taste: "辛、甘",
            meridian: "心、肺、膀胱经"
        },
        effects: [
            "发汗解表",
            "温通经脉",
            "助阳化气"
        ],
        usage: [
            "3-10克，煎服",
            "可研末服用",
            "常与其他发散药同用"
        ],
        contraindications: "阴虚火旺、多汗者慎用。"
    },
    "甘草": {
        pinyin: "Gancao",
        category: "补气类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23FFE4B5"/><text x="50%" y="45%" font-family="Arial" font-size="24" fill="%23B8860B" text-anchor="middle">甘草</text><text x="50%" y="65%" font-family="Arial" font-size="16" fill="%23CD853F" text-anchor="middle">补气类</text></svg>`,
        properties: {
            nature: "平",
            taste: "甘",
            meridian: "心、肺、脾、胃经"
        },
        effects: [
            "补脾益气",
            "清热解毒",
            "调和诸药"
        ],
        usage: [
            "2-10克，煎服",
            "可单用或配伍",
            "常作为调和药使用"
        ],
        contraindications: "水肿、高血压者慎用。"
    },
    "丹参": {
        pinyin: "Danshen",
        category: "活血类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23FFE4E1"/><text x="50%" y="45%" font-family="Arial" font-size="24" fill="%23DC143C" text-anchor="middle">丹参</text><text x="50%" y="65%" font-family="Arial" font-size="16" fill="%23B22222" text-anchor="middle">活血类</text></svg>`,
        properties: {
            nature: "微寒",
            taste: "苦",
            meridian: "心、心包、肝经"
        },
        effects: [
            "活血化瘀",
            "养血安神",
            "清心除烦"
        ],
        usage: [
            "10-15克，煎服",
            "可制成丹参片",
            "可与其他活血药同用"
        ],
        contraindications: "月经过多及出血性疾病者慎用。"
    },
    "半夏": {
        pinyin: "Banxia",
        category: "化痰类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23E6E6FA"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%236A5ACD" text-anchor="middle">半夏</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23483D8B" text-anchor="middle">化痰类</text></svg>`,
        properties: {
            nature: "温",
            taste: "辛、苦",
            meridian: "脾、胃、肺经"
        },
        effects: [
            "燥湿化痰",
            "降逆止呕",
            "消痞散结"
        ],
        usage: [
            "3-9克，煎服",
            "须制用",
            "不宜生用"
        ],
        contraindications: "阴虚血燥者忌服。"
    },
    "柴胡": {
        pinyin: "Chaihu",
        category: "解表类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23FFDAB9"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%23FF7F50" text-anchor="middle">柴胡</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23FF6347" text-anchor="middle">解表类</text></svg>`,
        properties: {
            nature: "微寒",
            taste: "苦、辛",
            meridian: "肝、胆经"
        },
        effects: [
            "和解少阳",
            "升发阳气",
            "疏肝解郁"
        ],
        usage: [
            "3-10克，煎服",
            "可单用或配伍"
        ],
        contraindications: "阴虚火旺者慎用。"
    },
    "山药": {
        pinyin: "Shanyao",
        category: "补气类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23FFE4B5"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%23B8860B" text-anchor="middle">山药</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23CD853F" text-anchor="middle">补气类</text></svg>`,
        properties: {
            nature: "平",
            taste: "甘",
            meridian: "脾、肺、肾经"
        },
        effects: [
            "补脾养胃",
            "生津益肺",
            "补肾涩精"
        ],
        usage: [
            "15-30克，煎服",
            "可炒用或生用",
            "可作为食材"
        ],
        contraindications: "无特殊禁忌。"
    },
    "枸杞子": {
        pinyin: "Gouqizi",
        category: "补血类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23FFB6C1"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%23CD5C5C" text-anchor="middle">枸杞子</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23BC8F8F" text-anchor="middle">补血类</text></svg>`,
        properties: {
            nature: "平",
            taste: "甘",
            meridian: "肝、肾经"
        },
        effects: [
            "滋补肝肾",
            "益精明目",
            "养血安神"
        ],
        usage: [
            "6-15克，煎服",
            "可泡茶",
            "可作为食材"
        ],
        contraindications: "脾虚有湿、腹泻者慎服。"
    },
    "菊花": {
        pinyin: "Juhua",
        category: "清热类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23E0FFFF"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%234682B4" text-anchor="middle">菊花</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%235F9EA0" text-anchor="middle">清热类</text></svg>`,
        properties: {
            nature: "微寒",
            taste: "甘、苦",
            meridian: "肺、肝经"
        },
        effects: [
            "疏散风热",
            "平肝明目",
            "清热降火"
        ],
        usage: [
            "5-10克，泡茶或煎服",
            "可单用或配伍"
        ],
        contraindications: "脾胃虚寒者慎服。"
    },
    "麦冬": {
        pinyin: "Maidong",
        category: "养阴类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23E0FFFF"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%234682B4" text-anchor="middle">麦冬</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%235F9EA0" text-anchor="middle">养阴类</text></svg>`,
        properties: {
            nature: "微寒",
            taste: "甘、微苦",
            meridian: "心、肺、胃经"
        },
        effects: [
            "养阴生津",
            "润肺清心",
            "益胃"
        ],
        usage: [
            "10-15克，煎服",
            "可单用或配伍"
        ],
        contraindications: "脾胃虚寒、大便溏泄者慎服。"
    },
    "白术": {
        pinyin: "Baizhu",
        category: "补气类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23FFE4B5"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%23B8860B" text-anchor="middle">白术</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23CD853F" text-anchor="middle">补气类</text></svg>`,
        properties: {
            nature: "温",
            taste: "甘、苦",
            meridian: "脾、胃经"
        },
        effects: [
            "健脾益气",
            "燥湿利水",
            "止汗安胎"
        ],
        usage: [
            "6-12克，煎服",
            "可炒用"
        ],
        contraindications: "阴虚内热、口干烦渴者忌服。"
    },
    "天麻": {
        pinyin: "Tianma",
        category: "平肝类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23DDA0DD"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%239370DB" text-anchor="middle">天麻</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%238B008B" text-anchor="middle">平肝类</text></svg>`,
        properties: {
            nature: "平",
            taste: "甘",
            meridian: "肝经"
        },
        effects: [
            "平肝息风",
            "祛风通络",
            "止眩"
        ],
        usage: [
            "3-9克，煎服",
            "可研粉吞服",
            "常与其他平肝药同用"
        ],
        contraindications: "无特殊禁忌。"
    },
    "红花": {
        pinyin: "Honghua",
        category: "活血类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23FFE4E1"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%23DC143C" text-anchor="middle">红花</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23B22222" text-anchor="middle">活血类</text></svg>`,
        properties: {
            nature: "温",
            taste: "辛",
            meridian: "心、肝经"
        },
        effects: [
            "活血通经",
            "散瘀止痛",
            "祛瘀生新"
        ],
        usage: [
            "3-9克，煎服",
            "可泡酒外用",
            "常与其他活血药配伍"
        ],
        contraindications: "孕妇及月经过多者忌服。"
    },
    "石斛": {
        pinyin: "Shihu",
        category: "养阴类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23E0FFFF"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%234682B4" text-anchor="middle">石斛</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%235F9EA0" text-anchor="middle">养阴类</text></svg>`,
        properties: {
            nature: "微寒",
            taste: "甘",
            meridian: "胃、肾经"
        },
        effects: [
            "养阴清热",
            "益胃生津",
            "明目"
        ],
        usage: [
            "6-15克，煎服",
            "可泡茶",
            "可研粉冲服"
        ],
        contraindications: "脾胃虚寒者慎服。"
    },
    "玄参": {
        pinyin: "Xuanshen",
        category: "清热类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23E0FFFF"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%234682B4" text-anchor="middle">玄参</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%235F9EA0" text-anchor="middle">清热类</text></svg>`,
        properties: {
            nature: "寒",
            taste: "苦、咸",
            meridian: "心、肾经"
        },
        effects: [
            "清热凉血",
            "滋阴降火",
            "解毒散结"
        ],
        usage: [
            "10-15克，煎服",
            "可单用或配伍"
        ],
        contraindications: "脾胃虚寒者慎服。"
    },
    "薄荷": {
        pinyin: "Bohe",
        category: "解表类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23FFDAB9"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%23FF7F50" text-anchor="middle">薄荷</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23FF6347" text-anchor="middle">解表类</text></svg>`,
        properties: {
            nature: "凉",
            taste: "辛",
            meridian: "肺、肝经"
        },
        effects: [
            "疏散风热",
            "清利头目",
            "利咽"
        ],
        usage: [
            "3-6克，煎服",
            "可泡茶",
            "外用可研末"
        ],
        contraindications: "阳虚感冒、多汗者慎服。"
    },
    "牛膝": {
        pinyin: "Niuxi",
        category: "活血类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23FFE4E1"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%23DC143C" text-anchor="middle">牛膝</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23B22222" text-anchor="middle">活血类</text></svg>`,
        properties: {
            nature: "平",
            taste: "苦、酸",
            meridian: "肝、肾经"
        },
        effects: [
            "活血通经",
            "引血下行",
            "强筋骨"
        ],
        usage: [
            "10-15克，煎服",
            "可泡酒外用",
            "可配伍使用"
        ],
        contraindications: "孕妇忌服。"
    },
    "桑叶": {
        pinyin: "Sangye",
        category: "清热类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23E0FFFF"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%234682B4" text-anchor="middle">桑叶</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%235F9EA0" text-anchor="middle">清热类</text></svg>`,
        properties: {
            nature: "寒",
            taste: "苦、甘",
            meridian: "肺、肝经"
        },
        effects: [
            "疏散风热",
            "清肺润燥",
            "明目"
        ],
        usage: [
            "5-10克，煎服",
            "可泡茶",
            "可与菊花同用"
        ],
        contraindications: "脾胃虚寒者慎服。"
    },
    "五味子": {
        pinyin: "Wuweizi",
        category: "收涩类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23F0E68C"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%23DAA520" text-anchor="middle">五味子</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23B8860B" text-anchor="middle">收涩类</text></svg>`,
        properties: {
            nature: "温",
            taste: "酸",
            meridian: "心、肺、肾经"
        },
        effects: [
            "收敛固涩",
            "益气生津",
            "宁心安神"
        ],
        usage: [
            "3-6克，煎服",
            "可泡茶",
            "可研末服"
        ],
        contraindications: "外感发热、咳嗽有痰者忌服。"
    },
    "车前子": {
        pinyin: "Cheqianzi",
        category: "利水类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23B0E0E6"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%234169E1" text-anchor="middle">车前子</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%234682B4" text-anchor="middle">利水类</text></svg>`,
        properties: {
            nature: "寒",
            taste: "甘、咸",
            meridian: "肝、肾、肺、小肠经"
        },
        effects: [
            "利水通淋",
            "清热明目",
            "祛痰止咳"
        ],
        usage: [
            "5-10克，煎服",
            "可研末服",
            "可配伍使用"
        ],
        contraindications: "小便清长者慎服。"
    },
    "益母草": {
        pinyin: "Yimucao",
        category: "活血类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23FFE4E1"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%23DC143C" text-anchor="middle">益母草</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23B22222" text-anchor="middle">活血类</text></svg>`,
        properties: {
            nature: "微寒",
            taste: "辛、苦",
            meridian: "心、肝、膀胱经"
        },
        effects: [
            "活血调经",
            "利水消肿",
            "清热明目"
        ],
        usage: [
            "10-15克，煎服",
            "可泡茶",
            "可制成注射液"
        ],
        contraindications: "孕妇慎用。"
    },
    "肉苁蓉": {
        pinyin: "Roucongrong",
        category: "补阳类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23FFD700"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%23DAA520" text-anchor="middle">肉苁蓉</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23B8860B" text-anchor="middle">补阳类</text></svg>`,
        properties: {
            nature: "温",
            taste: "甘、咸",
            meridian: "肾、大肠经"
        },
        effects: [
            "补肾阳",
            "益精血",
            "润肠通便"
        ],
        usage: [
            "10-15克，煎服",
            "可泡酒",
            "可与其他补阳药同用"
        ],
        contraindications: "阴虚火旺、大便溏泄者慎服。"
    },
    "淫羊藿": {
        pinyin: "Yinyanghuo",
        category: "补阳类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23FFD700"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%23DAA520" text-anchor="middle">淫羊藿</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23B8860B" text-anchor="middle">补阳类</text></svg>`,
        properties: {
            nature: "温",
            taste: "辛、甘",
            meridian: "肝、肾经"
        },
        effects: [
            "补肾阳",
            "强筋骨",
            "祛风湿"
        ],
        usage: [
            "5-10克，煎服",
            "可泡酒",
            "可制成片剂"
        ],
        contraindications: "阴虚火旺者忌服。"
    },
    "远志": {
        pinyin: "Yuanzhi",
        category: "安神类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23E6E6FA"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%236A5ACD" text-anchor="middle">远志</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23483D8B" text-anchor="middle">安神类</text></svg>`,
        properties: {
            nature: "温",
            taste: "苦、辛",
            meridian: "心、肾、肺经"
        },
        effects: [
            "安神益智",
            "交通心肾",
            "消痰开窍"
        ],
        usage: [
            "3-9克，煎服",
            "可研末服",
            "常与其他安神药同用"
        ],
        contraindications: "胃病及孕妇慎用。"
    },
    "合欢花": {
        pinyin: "Hehuanhua",
        category: "安神类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23E6E6FA"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%236A5ACD" text-anchor="middle">合欢花</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23483D8B" text-anchor="middle">安神类</text></svg>`,
        properties: {
            nature: "平",
            taste: "甘",
            meridian: "心、肝经"
        },
        effects: [
            "解郁安神",
            "舒肝理气",
            "活血止痛"
        ],
        usage: [
            "10-15克，煎服",
            "可泡茶",
            "可与其他安神药同用"
        ],
        contraindications: "无特殊禁忌。"
    },
    "天南星": {
        pinyin: "Tiannanxing",
        category: "化痰类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23E6E6FA"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%236A5ACD" text-anchor="middle">天南星</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23483D8B" text-anchor="middle">化痰类</text></svg>`,
        properties: {
            nature: "温",
            taste: "辛、苦",
            meridian: "肝、脾、肺经"
        },
        effects: [
            "燥湿化痰",
            "祛风止痉",
            "散结消肿"
        ],
        usage: [
            "3-9克，煎服",
            "须制用",
            "外用可研末调敷"
        ],
        contraindications: "孕妇及阴虚火旺者忌服。"
    },
    "瓜蒌": {
        pinyin: "Gualou",
        category: "化痰类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23E6E6FA"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%236A5ACD" text-anchor="middle">瓜蒌</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23483D8B" text-anchor="middle">化痰类</text></svg>`,
        properties: {
            nature: "寒",
            taste: "甘、苦",
            meridian: "肺、胃经"
        },
        effects: [
            "清热化痰",
            "宽胸散结",
            "润燥滑肠"
        ],
        usage: [
            "10-15克，煎服",
            "可生用或炒用",
            "常与其他化痰药同用"
        ],
        contraindications: "脾胃虚寒者慎服。"
    },
    "香附": {
        pinyin: "Xiangfu",
        category: "理气类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23FFA07A"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%23D2691E" text-anchor="middle">香附</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23A0522D" text-anchor="middle">理气类</text></svg>`,
        properties: {
            nature: "平",
            taste: "辛、微苦",
            meridian: "肝、三焦经"
        },
        effects: [
            "理气解郁",
            "调经止痛",
            "开郁化滞"
        ],
        usage: [
            "6-12克，煎服",
            "可研末服",
            "常与其他理气药同用"
        ],
        contraindications: "气虚及月经量多者慎服。"
    },
    "佛手": {
        pinyin: "Foshou",
        category: "理气类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23FFA07A"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%23D2691E" text-anchor="middle">佛手</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23A0522D" text-anchor="middle">理气类</text></svg>`,
        properties: {
            nature: "温",
            taste: "辛、苦",
            meridian: "肝、胃、肺经"
        },
        effects: [
            "理气和胃",
            "疏肝解郁",
            "化痰止咳"
        ],
        usage: [
            "3-10克，煎服",
            "可泡茶",
            "可制成佛手片"
        ],
        contraindications: "阴虚火旺者慎服。"
    },
    "砂仁": {
        pinyin: "Sharen",
        category: "理气类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23FFA07A"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%23D2691E" text-anchor="middle">砂仁</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23A0522D" text-anchor="middle">理气类</text></svg>`,
        properties: {
            nature: "温",
            taste: "辛",
            meridian: "脾、胃、肾经"
        },
        effects: [
            "化湿开胃",
            "温脾止泻",
            "理气安胎"
        ],
        usage: [
            "3-6克，煎服",
            "可研末服",
            "孕妇常用"
        ],
        contraindications: "阴虚火旺者慎服。"
    },
    "木香": {
        pinyin: "Muxiang",
        category: "理气类",
        image: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="%23FFA07A"/><text x="50%" y="40%" font-family="Microsoft YaHei" font-size="24" fill="%23D2691E" text-anchor="middle">木香</text><text x="50%" y="70%" font-family="Microsoft YaHei" font-size="16" fill="%23A0522D" text-anchor="middle">理气类</text></svg>`,
        properties: {
            nature: "温",
            taste: "辛、苦",
            meridian: "脾、胃、大肠经"
        },
        effects: [
            "行气止痛",
            "健脾消食",
            "调气降逆"
        ],
        usage: [
            "3-10克，煎服",
            "可研末服",
            "常与其他理气药同用"
        ],
        contraindications: "阴虚火旺及孕妇慎服。"
    }
}; 