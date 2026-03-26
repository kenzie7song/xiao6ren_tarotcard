// ============================================================
// 塔罗牌数据 — Rider-Waite-Smith 78 张含图片
// 图片来源：HuggingFace multimodalart/1920-raider-waite-tarot-public-domain
// ============================================================

// ── 大阿尔卡纳 22 张（索引 0-21）───────────────────────────
const MAJOR_ARCANA = [
  {
    id: 'fool', index: 0,
    name: '愚人', nameEn: 'The Fool',
    suit: 'major', value: 0,
    filename: '0603205238985_00_93f05f199fe56df4354be531f1666b53.jpg',
    keywords: { upright: ['自由', '纯真', '冒险', '新鲜', '无限可能'], reversed: ['冲动', '鲁莽', '天真', '风险', '无计划'] },
    desc: {
      upright: '愚人象征全新的开始，带着无畏的纯真踏上旅程。预示机遇、灵感与自发性的行动。牌面显示一人站在悬崖边，毫无畏惧地迈向前方，代表对生命未知旅程的全然信任。此刻适合踏出第一步，拥抱未知。',
      reversed: '逆位愚人提醒过度冲动或幼稚的行为。可能表示在决策时缺乏考虑，或被天真想法误导。需要更多计划与谨慎，而非盲目冒险。'
    },
  },
  {
    id: 'magician', index: 1,
    name: '魔术师', nameEn: 'The Magician',
    suit: 'major', value: 1,
    filename: '0603205238985_02_5d4153da20d3d91dc0b84dd27247c1a5.jpg',
    keywords: { upright: ['意志力', '技能', '创造力', '行动', '专注'], reversed: ['欺骗', '操纵', '无创造力', '浪费天赋', '误导'] },
    desc: {
      upright: '魔术师代表潜意识的创造力与意志力的有意识运用。人物举起魔杖指向天空，另一手指向大地，表明"如在上，如在下"的能量流动。所有必要的工具都已具备，你有能力将梦想转化为现实。',
      reversed: '逆位魔术师暗示才能的浪费或意图的不纯。可能表示自我欺骗、无法实现目标，或被他人操控利用。'
    },
  },
  {
    id: 'highpriestess', index: 2,
    name: '女祭司', nameEn: 'The High Priestess',
    suit: 'major', value: 2,
    filename: '0603205238985_03_5c4ec1905aeae9bec5909153315e0269.jpg',
    keywords: { upright: ['直觉', '神秘', '内省', '灵性', '潜意识'], reversed: ['秘密', '隐瞒', '信息不足', '直觉压抑', '逃避'] },
    desc: {
      upright: '女祭司代表内在的指引与直觉的力量。她坐在两根黑白柱子之间，中间帷幕遮蔽了看得见的世界。预示需要倾听内心的声音，在决策时信任直觉胜于理性分析。',
      reversed: '逆位女祭司提醒你可能忽视了内在的声音，或被表面信息所欺骗。可能存在被隐藏的真相，需要深入挖掘。'
    },
  },
  {
    id: 'empress', index: 3,
    name: '女皇', nameEn: 'The Empress',
    suit: 'major', value: 3,
    filename: '0603205238985_04_e8af89ff25c8ad2180e1d6b564fe1930.jpg',
    keywords: { upright: ['丰盛', '母亲', '自然', '创造力', '感官'], reversed: ['依赖', '空巢', '忽视', '过度保护', '窒息'] },
    desc: {
      upright: '女皇代表丰盛、滋养与感官的和谐。她是坐在郁郁葱葱绿色世界中的女神，周围环绕着自然的美。预示物质与精神的双重富足，孕育与创造的时期。',
      reversed: '逆位女皇可能表示创造力的阻碍，或在给予与接受爱之间的失衡。可能暗示依赖性关系、母亲的议题，或对自身需求的忽视。'
    },
  },
  {
    id: 'emperor', index: 4,
    name: '皇帝', nameEn: 'The Emperor',
    suit: 'major', value: 4,
    filename: '0603205238985_05_64a833c7ec42a8634fd0bbc92a1820a3.jpg',
    keywords: { upright: ['权威', '结构', '领导力', '决断力', '秩序'], reversed: ['暴政', '僵化', '缺乏自律', '支配', '冷漠'] },
    desc: {
      upright: '皇帝代表父亲般的权威与尘世秩序的力量。他坐在坚固的王座上，展现出结构、纪律与稳定的能量。预示需要采取主动、建立规则与秩序，或在生活中引入更多的组织与方向。',
      reversed: '逆位皇帝暗示权威的滥用或秩序的崩溃。可能表示过于严苛的规则、缺乏灵活性，或完全缺乏纪律与方向。'
    },
  },
  {
    id: 'hierophant', index: 5,
    name: '教皇', nameEn: 'The Hierophant',
    suit: 'major', value: 5,
    filename: '0603205238985_06_2f083cd664f6a22ef6a6bb0033183204.jpg',
    keywords: { upright: ['传统', '精神', '信仰', '教育', '仪式'], reversed: ['反叛', '新观念', '打破传统', '狂热', '异端'] },
    desc: {
      upright: '教皇代表有组织的宗教、精神信仰与传统智慧。他为寻求指引的信徒提供祝福。预示精神成长、传统价值、道德指引，以及通过既定途径（教育、宗教、仪式）获得智慧。',
      reversed: '逆位教皇提醒对权威的盲目服从或相反地，完全排斥一切传统。可能表示信仰的危机，或找到属于自己的非传统精神道路。'
    },
  },
  {
    id: 'lovers', index: 6,
    name: '恋人', nameEn: 'The Lovers',
    suit: 'major', value: 6,
    filename: '0603205238985_07_7049a3682c6707cd661a0c92b0d4b8a0.jpg',
    keywords: { upright: ['爱', '选择', '结合', '价值观', '关系'], reversed: ['不和谐', '价值观冲突', '沟通障碍', '艰难抉择', '欺骗'] },
    desc: {
      upright: '恋人牌象征重大抉择与爱的力量。牌面中亚当与夏娃站在天使面前，各自面临选择。预示在爱情、伙伴关系或个人价值观方面的重要决定，代表和谐、热情与灵魂的结合。',
      reversed: '逆位恋人暗示关系中的冲突、价值观的分歧或艰难的抉择。可能表示欺骗、误解，或需要在多个选项间做出痛苦的决定。'
    },
  },
  {
    id: 'chariot', index: 7,
    name: '战车', nameEn: 'The Chariot',
    suit: 'major', value: 7,
    filename: '0603205238985_08_c9344575d1cfb36a722090fa6f465eda.jpg',
    keywords: { upright: ['意志力', '胜利', '控制', '决心', '成功'], reversed: ['失控', '冲动', '失去方向', '障碍', '攻击性'] },
    desc: {
      upright: '战车代表意志力与决心对世界的胜利。战士驾驶由黑白两匹狮鹫兽拉动的战车，这两股对立的力量需要被调和。预示克服障碍、实现目标，以及在逆境中保持坚定的决心。',
      reversed: '逆位战车暗示方向感的丧失或缺乏自律。可能表示被冲动控制、遭遇挫折失败，或难以协调内在的对立力量。'
    },
  },
  {
    id: 'strength', index: 8,
    name: '力量', nameEn: 'Strength',
    suit: 'major', value: 8,
    filename: '0603205238985_09_fdb39f49409ce4c2a134479f4eb457f5.jpg',
    keywords: { upright: ['勇气', '耐心', '慈悲', '内在力量', '韧性'], reversed: ['自我怀疑', '脆弱', '失控', '残忍', '弱点'] },
    desc: {
      upright: '力量牌代表内在的力量、勇气与慈悲——不是身体的强壮，而是心灵的力量。女子温柔地合上一只狮子的嘴，展示以柔克刚的力量。预示以温和与耐心克服困难。',
      reversed: '逆位力量暗示内心的脆弱或勇气的丧失。可能表示被恐惧或愤怒控制，或过度的自我控制导致情感压抑。'
    },
  },
  {
    id: 'hermit', index: 9,
    name: '隐士', nameEn: 'The Hermit',
    suit: 'major', value: 9,
    filename: '0603205238985_10_73075cf1cc03d23a3c959b8d3907aa8c.jpg',
    keywords: { upright: ['内省', '孤独', '探索', '自性', '灵性'], reversed: ['孤立', '孤独', '恐惧', '拒绝帮助', '独狼'] },
    desc: {
      upright: '隐士代表寻求内在真理的旅程。他提着灯笼独自行走，照亮前方的道路。预示需要独处的时间、深入的自我探索，以及通过内省获得的智慧。',
      reversed: '逆位隐士暗示过度的孤立或错误的孤独。可能表示拒绝他人的帮助、害怕亲密，或以孤独为借口逃避现实。'
    },
  },
  {
    id: 'wheeloffortune', index: 10,
    name: '命运之轮', nameEn: 'Wheel of Fortune',
    suit: 'major', value: 10,
    filename: '0603205238985_11_aa5c6d94399a6c68c5ccf0938200b98d.jpg',
    keywords: { upright: ['命运', '转折点', '运气', '循环', '变迁'], reversed: ['厄运', '固定不变', '抗拒改变', '停滞', '坏运气'] },
    desc: {
      upright: '命运之轮象征命运之轮的转动，代表生命周期的自然循环。轮盘上有 TORA 等神秘字母，周围是占星符号的四种生物。预示命运的转折、意想不到的变化，以及接受生命流动的力量。',
      reversed: '逆位命运之轮暗示抗拒自然的变迁，或感觉被命运推着走。可能表示错失机会、厄运的累积，或需要学会放手而非强行控制局面。'
    },
  },
  {
    id: 'justice', index: 11,
    name: '正义', nameEn: 'Justice',
    suit: 'major', value: 11,
    filename: '0603205238985_12_cb2452b3e455ec55a11fe96848da0f79.jpg',
    keywords: { upright: ['公平', '真理', '法律', '因果', '诚信'], reversed: ['不公', '偏见', '不诚实', '缺乏责任感', '惩罚'] },
    desc: {
      upright: '正义牌代表因果法则与道德真理。一手持剑（制裁的力量），一手持天平（公平与衡量）。预示基于过去行动的公正结果，以及需要以诚信与公平来面对决策。真相终将大白。',
      reversed: '逆位正义暗示不公正、偏见或缺乏诚信。可能表示谎言被揭露、承担不属于自己的责任，或需要面对 karma 的后果。'
    },
  },
  {
    id: 'hangedman', index: 12,
    name: '倒吊人', nameEn: 'The Hanged Man',
    suit: 'major', value: 12,
    filename: '0603205238985_13_8a692ffa7c224b4ca161439322e33f37.jpg',
    keywords: { upright: ['暂停', '牺牲', '新视角', '等待', '顺其自然'], reversed: ['抗拒', '牺牲无果', '坐立不安', '拖延', '牺牲过多'] },
    desc: {
      upright: '倒吊人不是受苦，而是主动选择暂停。他倒挂在 T 型十字上，呈现出全然的静止与接纳。预示自愿的牺牲、等待的智慧，以及通过改变视角获得新的领悟。',
      reversed: '逆位倒吊人暗示不必要的牺牲或拒绝做出必要的调整。可能表示被卡住、坐立不安地等待，或为了逃避而"假装"牺牲。'
    },
  },
  {
    id: 'death', index: 13,
    name: '死神', nameEn: 'Death',
    suit: 'major', value: 13,
    filename: '0603205238985_14_b69ffe0fc74c305601c760be0000c7d9.jpg',
    keywords: { upright: ['结束', '转变', '重生', '深刻变化', '放手'], reversed: ['抗拒改变', '恐惧结束', '缓慢', '拖延', '停滞'] },
    desc: {
      upright: '死神牌代表生命阶段的彻底结束与随之而来的转化。骑着白马的死神象征无论贫富贵贱，所有旧事物终将消亡。牌面预示结束、转变与新生的开始，是最有力度的转变牌。',
      reversed: '逆位死神暗示对不可避免变化的抗拒。可能表示执著于已死的事物、恐惧放手，或在应该结束时却强行维持现状。'
    },
  },
  {
    id: 'temperance', index: 14,
    name: '节制', nameEn: 'Temperance',
    suit: 'major', value: 14,
    filename: '0603205238985_15_ad3f1fc96c2cae2a0b41441c428b6d7b.jpg',
    keywords: { upright: ['平衡', '调和', '耐心', '宽容', '中庸之道'], reversed: ['失衡', '过度', '自我疗愈', '调整', '急躁'] },
    desc: {
      upright: '节制牌代表平衡、调和与中庸之道。天使将两个杯子中的液体来回倾倒，调和对立的能量。预示需要找到生活的平衡点，在极端之间取得和谐。',
      reversed: '逆位节制暗示生活中的失衡或过度。可能表示在某个领域投入过多而在其他领域不足，或需要重新评估什么才是真正的平衡。'
    },
  },
  {
    id: 'devil', index: 15,
    name: '恶魔', nameEn: 'The Devil',
    suit: 'major', value: 15,
    filename: '0603205238985_16_3f282861b00f9fe6246cd8079fa7979e.jpg',
    keywords: { upright: ['束缚', '物质主义', '沉溺', '欲望', '控制'], reversed: ['释放', '打破束缚', '自由', '摆脱依赖', '解放'] },
    desc: {
      upright: '恶魔牌代表束缚、物质主义与自我的监狱。一对男女被锁链束缚在恶魔身上，但锁链实际上很松——他们随时可以选择离开。牌面警示我们自己造成的束缚：沉溺、执念、物质主义的陷阱。',
      reversed: '逆位恶魔代表挣脱束缚、打破旧有模式。可能表示摆脱成瘾、打破不健康的关系或习惯，或从物质主义的束缚中解放出来。'
    },
  },
  {
    id: 'tower', index: 16,
    name: '塔', nameEn: 'The Tower',
    suit: 'major', value: 16,
    filename: '0603205238985_17_9bdf22277b1ca874d5a917140147278b.jpg',
    keywords: { upright: ['崩溃', '启示', '突然改变', '解放', '觉醒'], reversed: ['内部崩溃', '避免灾难', '恐惧改变', '拖延', '预防'] },
    desc: {
      upright: '塔牌代表突然而剧烈的变化——通常是外部事件摧毁虚假的安全感，让真实的自我得以显现。闪电击中高塔，人从窗口坠落。牌面预示不可避免的剧变，虽然痛苦，却是通往真实觉醒的道路。',
      reversed: '逆位塔暗示从内部开始的崩溃，或避免应该发生的改变。可能表示恐惧阻碍了必要的破坏，新秩序无法建立。'
    },
  },
  {
    id: 'star', index: 17,
    name: '星星', nameEn: 'The Star',
    suit: 'major', value: 17,
    filename: '0603205238985_18_6fbc854cb785a8cee939e015aa27dbf5.jpg',
    keywords: { upright: ['希望', '灵感', '宁静', '疗愈', '信心'], reversed: ['绝望', '失去信心', '悲观', '空虚', '绝望'] },
    desc: {
      upright: '星星牌在塔的破坏之后出现，带来希望、灵感的光芒与宁静的疗愈。女子跪在水边，将两只碗中的水倒回河流与土地，天空中闪耀着八芒星。预示混乱之后的平静，疗愈创伤，重新建立对未来的信心。',
      reversed: '逆位星星暗示希望感的丧失。可能表示绝望、空虚感，或需要找到新的灵感来源。'
    },
  },
  {
    id: 'moon', index: 18,
    name: '月亮', nameEn: 'The Moon',
    suit: 'major', value: 18,
    filename: '0603205238985_19_268a5422bfd02678fbae1d39b384078c.jpg',
    keywords: { upright: ['幻象', '恐惧', '不安', '潜意识', '直觉'], reversed: ['恐惧消退', '真相大白', '内在平静', '噩梦消退', '释放恐惧'] },
    desc: {
      upright: '月亮牌代表恐惧、幻象与潜意识的暗流。月光下，一只小狗和一只龙虾在黑暗中前行。牌面警示我们看不见的东西——内心的恐惧、错觉与被压抑的情感。',
      reversed: '逆位月亮暗示恐惧的消退与真相的浮现。可能表示走出困惑与不安，噩梦渐渐消散，或有勇气面对一直逃避的恐惧。'
    },
  },
  {
    id: 'sun', index: 19,
    name: '太阳', nameEn: 'The Sun',
    suit: 'major', value: 19,
    filename: '0603205238985_20_293caf99d19b4ba945159633c916d22a.jpg',
    keywords: { upright: ['快乐', '成功', '活力', '乐观', '生命力'], reversed: ['暂时的沮丧', '悲伤', '低落', '过度兴奋', '虚假乐观'] },
    desc: {
      upright: '太阳牌是所有牌中最积极正面的牌之一，代表快乐、成功与生命力的顶峰。骑在白马上的孩子在阳光下欢笑，天空晴朗无云。预示充满活力与乐观的时期，所有努力都得到回报。',
      reversed: '逆位太阳暗示乐观中的阴影。可能表示过度的热情消退、暂时的低落，或虚假的乐观遮蔽了现实的困难。黑暗终将过去。'
    },
  },
  {
    id: 'judgement', index: 20,
    name: '审判', nameEn: 'Judgement',
    suit: 'major', value: 20,
    filename: '0603205238985_21_696ecb953297e3192d5f2c898e16b131.jpg',
    keywords: { upright: ['觉醒', '呼唤', '复苏', '原谅', '重生'], reversed: ['自我怀疑', '不原谅', '后悔', '忽视召唤', '自我评判'] },
    desc: {
      upright: '审判牌代表灵魂的觉醒与重生。天使吹响号角，唤醒地下的死者，他们从棺材中站起来接受审判。牌面预示召唤你走向更高的使命，在反思中获得精神的复苏。',
      reversed: '逆位审判暗示自我怀疑或缺乏自信。可能表示无法原谅自己或他人，后悔阻碍了前进，或忽视来自内心的真正召唤。'
    },
  },
  {
    id: 'world', index: 21,
    name: '世界', nameEn: 'The World',
    suit: 'major', value: 21,
    filename: '0603205238985_22_cb000efb9912b049b4ac4b2f450880b2.jpg',
    keywords: { upright: ['完成', '成就', '整合', '圆满', '循环'], reversed: ['未完成', '拖延', '停滞', '缺乏成就感', '不完整'] },
    desc: {
      upright: '世界牌代表旅程的完成与成就的达成。舞者在莲花中舞蹈，周围环绕着所有四张牌的符号。牌面预示一个周期的圆满达成，目标的实现，灵性与物质的整合。',
      reversed: '逆位世界暗示旅程尚未完成。可能表示某个项目或人生阶段的拖延，感觉缺乏成就感，或需要在某个领域付出更多努力才能真正圆满。'
    },
  },
];

// ── 小阿尔卡纳（索引 22-77）────────────────────────────────
const MINOR_DATA = [
  // Wands 22-35
  { index: 22, suit: 'wands',  value: 1,  name: 'Ace of Wands',       nameCn: '权杖 Ace', filename: '0603205238985_23_22ed1687f1e202dc482890610651359b.jpg' },
  { index: 23, suit: 'wands',  value: 2,  name: 'Two of Wands',        nameCn: '权杖二',   filename: '0603205238985_24_573cb51379511fac771ec62bf35de19a.jpg' },
  { index: 24, suit: 'wands',  value: 3,  name: 'Three of Wands',      nameCn: '权杖三',   filename: '0603205238985_25_f81b98bea89c8cba692948138ebd82df.jpg' },
  { index: 25, suit: 'wands',  value: 4,  name: 'Four of Wands',       nameCn: '权杖四',   filename: '0603205238985_26_bd3ba5d3b1f11bc058249188d3a71a65.jpg' },
  { index: 26, suit: 'wands',  value: 5,  name: 'Five of Wands',       nameCn: '权杖五',   filename: '0603205238985_27_6a8a0ca314e8ac55dd143a9c4042f2df.jpg' },
  { index: 27, suit: 'wands',  value: 6,  name: 'Six of Wands',        nameCn: '权杖六',   filename: '0603205238985_28_a14a3ab44e937ba0de149408c8480729.jpg' },
  { index: 28, suit: 'wands',  value: 7,  name: 'Seven of Wands',      nameCn: '权杖七',   filename: '0603205238985_29_1b6a140aedd216e64a674cf9a6c41b58.jpg' },
  { index: 29, suit: 'wands',  value: 8,  name: 'Eight of Wands',      nameCn: '权杖八',   filename: '0603205238985_30_04e181abfa90d0f747c0497fe350d59b.jpg' },
  { index: 30, suit: 'wands',  value: 9,  name: 'Nine of Wands',       nameCn: '权杖九',   filename: '0603205238985_31_f88b72539a9a9779f8cf313cb566767c.jpg' },
  { index: 31, suit: 'wands',  value: 10, name: 'Ten of Wands',         nameCn: '权杖十',   filename: '0603205238985_32_67f868802676ebce90a210d956fc0294.jpg' },
  { index: 32, suit: 'wands',  value: 11, name: 'Page of Wands',        nameCn: '权杖侍从', filename: '0603205238985_33_ac2ff146e881ad7299d39cd40120a7dd.jpg' },
  { index: 33, suit: 'wands',  value: 12, name: 'Knight of Wands',     nameCn: '权杖骑士', filename: '0603205238985_34_06fe5991a12a0e820ca8447aa7af002f.jpg' },
  { index: 34, suit: 'wands',  value: 13, name: 'Queen of Wands',      nameCn: '权杖皇后', filename: '0603205238985_35_b1a791a787875aede882b7448a94a834.jpg' },
  { index: 35, suit: 'wands',  value: 14, name: 'King of Wands',       nameCn: '权杖国王', filename: '0603205238985_36_678c7a520dc6d9f72b26966f477092dc.jpg' },
  // Cups 36-49
  { index: 36, suit: 'cups',   value: 1,  name: 'Ace of Cups',         nameCn: '圣杯 Ace', filename: '0603205238985_37_4f17a5163b978034a5b8a841b121443f.jpg' },
  { index: 37, suit: 'cups',   value: 2,  name: 'Two of Cups',          nameCn: '圣杯二',   filename: '0603205238985_38_5da1301e81586bcf8c47b1d94ba468a2.jpg' },
  { index: 38, suit: 'cups',   value: 3,  name: 'Three of Cups',        nameCn: '圣杯三',   filename: '0603205238985_39_c50a4a2b55cdd14c62afa7bb3a8a2fcf.jpg' },
  { index: 39, suit: 'cups',   value: 4,  name: 'Four of Cups',         nameCn: '圣杯四',   filename: '0603205238985_40_c5bee31e1c8097c9d27b0b3851976433.jpg' },
  { index: 40, suit: 'cups',   value: 5,  name: 'Five of Cups',         nameCn: '圣杯五',   filename: '0603205238985_41_dbd7e4f939f2bbf0be8f4747f85a696c.jpg' },
  { index: 41, suit: 'cups',   value: 6,  name: 'Six of Cups',          nameCn: '圣杯六',   filename: '0603205238985_42_b90e636ae4a7bfb9be97780bf285cf4f.jpg' },
  { index: 42, suit: 'cups',   value: 7,  name: 'Seven of Cups',        nameCn: '圣杯七',   filename: '0603205238985_43_88df5949ec785c0a52e205e8c38eec31.jpg' },
  { index: 43, suit: 'cups',   value: 8,  name: 'Eight of Cups',        nameCn: '圣杯八',   filename: '0603205238985_44_2699f4553247ad8fd0b10062199d6173.jpg' },
  { index: 44, suit: 'cups',   value: 9,  name: 'Nine of Cups',         nameCn: '圣杯九',   filename: '0603205238985_45_d6c490c86d283bde215abad952b920f6.jpg' },
  { index: 45, suit: 'cups',   value: 10, name: 'Ten of Cups',           nameCn: '圣杯十',   filename: '0603205238985_46_d684f3dfaea4ff1f3dd4a3a5bb8e77fa.jpg' },
  { index: 46, suit: 'cups',   value: 11, name: 'Page of Cups',         nameCn: '圣杯侍从', filename: '0603205238985_47_b883905ee3aebd3ca64c142c64972734.jpg' },
  { index: 47, suit: 'cups',   value: 12, name: 'Knight of Cups',       nameCn: '圣杯骑士', filename: '0603205238985_48_2ed9176076924d8f685406e304a2eeed.jpg' },
  { index: 48, suit: 'cups',   value: 13, name: 'Queen of Cups',        nameCn: '圣杯皇后', filename: '0603205238985_49_a2c774c05026e44ef20f7f62fe54326c.jpg' },
  { index: 49, suit: 'cups',   value: 14, name: 'King of Cups',          nameCn: '圣杯国王', filename: '0603205238985_50_063fba44f1a033a2093808ef2a485070.jpg' },
  // Swords 50-63
  { index: 50, suit: 'swords', value: 1,  name: 'Ace of Swords',        nameCn: '宝剑 Ace', filename: '0603205238985_51_9f25eaa7c24df141d7c46e7a7249540f.jpg' },
  { index: 51, suit: 'swords', value: 2,  name: 'Two of Swords',        nameCn: '宝剑二',   filename: '0603205238985_52_dc83a5e1ab8670b65fa0936705cb3cc5.jpg' },
  { index: 52, suit: 'swords', value: 3,  name: 'Three of Swords',      nameCn: '宝剑三',   filename: '0603205238985_53_12af23e32d659ec73b276020ddf64c56.jpg' },
  { index: 53, suit: 'swords', value: 4,  name: 'Four of Swords',       nameCn: '宝剑四',   filename: '0603205238985_54_2d0e5181347701959cca210db239487b.jpg' },
  { index: 54, suit: 'swords', value: 5,  name: 'Five of Swords',       nameCn: '宝剑五',   filename: '0603205238985_55_9678e102349090196462da7b876869f2.jpg' },
  { index: 55, suit: 'swords', value: 6,  name: 'Six of Swords',        nameCn: '宝剑六',   filename: '0603205238985_56_2c025245d18e13aa89bce15bdb949e6a.jpg' },
  { index: 56, suit: 'swords', value: 7,  name: 'Seven of Swords',       nameCn: '宝剑七',   filename: '0603205238985_57_6d88d900c18809aaa1556f523d86edce.jpg' },
  { index: 57, suit: 'swords', value: 8,  name: 'Eight of Swords',      nameCn: '宝剑八',   filename: '0603205238985_58_d2627b0bdaf92ca202b9d578f52be080.jpg' },
  { index: 58, suit: 'swords', value: 9,  name: 'Nine of Swords',       nameCn: '宝剑九',   filename: '0603205238985_59_8c86e6bbff27661032b574a00b564182.jpg' },
  { index: 59, suit: 'swords', value: 10, name: 'Ten of Swords',        nameCn: '宝剑十',   filename: '0603205238985_60_484c1e947ec887147750d73bebcc445f.jpg' },
  { index: 60, suit: 'swords', value: 11, name: 'Page of Swords',       nameCn: '宝剑侍从', filename: '0603205238985_61_cb93169c7f120640584c2b00883308ae.jpg' },
  { index: 61, suit: 'swords', value: 12, name: 'Knight of Swords',    nameCn: '宝剑骑士', filename: '0603205238985_62_4fa0a11fd5c5a00edcf37ac3f74d2368.jpg' },
  { index: 62, suit: 'swords', value: 13, name: 'Queen of Swords',     nameCn: '宝剑皇后', filename: '0603205238985_63_f02af86ef55229b471c1d1253058b510.jpg' },
  { index: 63, suit: 'swords', value: 14, name: 'King of Swords',      nameCn: '宝剑国王', filename: '0603205238985_64_eb7c6746fbeb4552de04798d005a36f0.jpg' },
  // Pentacles 64-77
  { index: 64, suit: 'pentacles', value: 1,  name: 'Ace of Pentacles',  nameCn: '星币 Ace', filename: '0603205238985_65_5018e5b72e8ce116f1376028264ff011.jpg' },
  { index: 65, suit: 'pentacles', value: 2,  name: 'Two of Pentacles',  nameCn: '星币二',   filename: '0603205238985_66_9382be81d66ecc68554be184f491e74e.jpg' },
  { index: 66, suit: 'pentacles', value: 3,  name: 'Three of Pentacles',nameCn: '星币三',   filename: '0603205238985_67_ca47dcd4f58e8abc3b28f195a05e0d6a.jpg' },
  { index: 67, suit: 'pentacles', value: 4,  name: 'Four of Pentacles', nameCn: '星币四',   filename: '0603205238985_68_1e943fd4e127e727cb382f0a37e86547.jpg' },
  { index: 68, suit: 'pentacles', value: 5,  name: 'Five of Pentacles', nameCn: '星币五',   filename: '0603205238985_69_97a9f13f1c3faa0055f618793814566d.jpg' },
  { index: 69, suit: 'pentacles', value: 6,  name: 'Six of Pentacles',  nameCn: '星币六',   filename: '0603205238985_70_21a2e3232549fb406da262e7797c90ab.jpg' },
  { index: 70, suit: 'pentacles', value: 7,  name: 'Seven of Pentacles',nameCn: '星币七',   filename: '0603205238985_71_9c63f27770932ab0a1157e3b4451f3ff.jpg' },
  { index: 71, suit: 'pentacles', value: 8,  name: 'Eight of Pentacles',nameCn: '星币八',   filename: '0603205238985_72_9e15c3c6db108357f05fbec114896e86.jpg' },
  { index: 72, suit: 'pentacles', value: 9,  name: 'Nine of Pentacles', nameCn: '星币九',   filename: '0603205238985_73_539ab150d137b2806c779b2eb3d1c524.jpg' },
  { index: 73, suit: 'pentacles', value: 10, name: 'Ten of Pentacles',  nameCn: '星币十',   filename: '0603205238985_74_c8de13051cf37f0034195c0a15fc832d.jpg' },
  { index: 74, suit: 'pentacles', value: 11, name: 'Page of Pentacles', nameCn: '星币侍从', filename: '0603205238985_75_efa6dbb48e298f27acdd3c04dd98e241.jpg' },
  { index: 75, suit: 'pentacles', value: 12, name: 'Knight of Pentacles',nameCn: '星币骑士', filename: '0603205238985_76_219a1516764dd89076f68cc3fe13f06b.jpg' },
  { index: 76, suit: 'pentacles', value: 13, name: 'Queen of Pentacles',nameCn: '星币皇后', filename: '0603205238985_77_254af0100053c750f194bd3cb5e7ff66.jpg' },
  { index: 77, suit: 'pentacles', value: 14, name: 'King of Pentacles', nameCn: '星币国王', filename: '0603205238985_78_acb14b5f1e2011ce9729ab2925e95c0c.jpg' },
];

const MINOR_KEYWORDS = {
  wands: {
    1:  { upright: ['灵感', '新机会', '潜力', '成长', '能量'], reversed: ['延迟', '缺乏能量', '丧失热情', '挫折', '创造力受阻'] },
    2:  { upright: ['计划', '决策', '探索', '志向', '等待'], reversed: ['恐惧未知', '缺乏计划', '犹豫', '过于谨慎', '信息不足'] },
    3:  { upright: ['里程碑', '进步', '商业', '扩张', '远见'], reversed: ['停滞', '延迟', '挫折', '缺乏远见', '等待'] },
    4:  { upright: ['庆祝', '和谐', '家庭', '安居', '庆典'], reversed: ['冲突', '缺乏团队精神', '不稳定', '过渡期', '不安'] },
    5:  { upright: ['竞争', '冲突', '争夺', '多样性', '团队'], reversed: ['避免冲突', '解决纷争', '内讧', '合作', '释放压力'] },
    6:  { upright: ['胜利', '成功', '认可', '荣誉', '领导力'], reversed: ['失败', '缺乏认可', '过度骄傲', '失败者', '傲慢'] },
    7:  { upright: ['挑战', '竞争', '坚持', '信念', '防御'], reversed: ['过度疲惫', '放弃', '被击败', '信心不足', '劣势'] },
    8:  { upright: ['快速行动', '速度', '动势', '进展', '好消息'], reversed: ['延迟', '挫折', '等待', '停滞', '取消'] },
    9:  { upright: ['韧性', '勇气', '意志力', '经验', '坚持'], reversed: ['疲惫', '倦怠', '偏执', '放弃', '最后障碍'] },
    10: { upright: ['负担', '压力', '过度努力', '责任', '不放手'], reversed: ['放下负担', 'delegation', '减轻压力', '效率', '共享重量'] },
    11: { upright: ['探索', '热情', '可能性', '新消息', '创意'], reversed: ['新的热情', '新的方向', '推迟计划', '缺乏动力', '等待'] },
    12: { upright: ['行动', '冲动', '冒险', '热情', '自由'], reversed: ['冲动', '延迟', '挫折', '鲁莽', '失去耐心'] },
    13: { upright: ['自信', '魅力', '热情', '独立', '勇气'], reversed: ['自我怀疑', '嫉妒', '不安全', '苛刻', '控制'] },
    14: { upright: ['领导力', '勇气', '影响力', '企业家精神', '荣誉'], reversed: ['过度支配', '冲动', '缺乏计划', '盛气凌人', '苛刻'] },
  },
  cups: {
    1:  { upright: ['爱', '情感', '机会', '创造力', '灵性'], reversed: ['自我封闭', '情感过度', '压抑情感', '空虚', '拒绝'] },
    2:  { upright: ['伙伴关系', '亲密', '吸引力', '结合', '承诺'], reversed: ['不平衡', '不和谐', '分离', '不匹配', '诱惑'] },
    3:  { upright: ['友谊', '社区', '庆典', '社会', '欢乐'], reversed: ['社交过度', '孤独', 'gossip', '冲突', '退出'] },
    4:  { upright: ['沉思', '内省', '不满足', '冷漠', '脱离'], reversed: ['重新评估', '选择权', '接受', '新奇', '采取行动'] },
    5:  { upright: ['失落', '悲伤', '失望', '遗憾', '接受'], reversed: ['接受', '继续前进', '放下', '寻求平衡', '宽恕'] },
    6:  { upright: ['回忆', '怀旧', '纯真', '家庭', '童年'], reversed: ['活在过去', '不成熟', '告别过去', '幼稚', '停滞'] },
    7:  { upright: ['选择', '幻觉', '机会', '白日梦', '决定'], reversed: ['清晰', '避免选择', '失去焦点', '过滤', '做出决定'] },
    8:  { upright: ['放弃', '离开', '撤退', '寻找真相', '独处'], reversed: ['无法放手', '滞留', '后悔', '继续前进', '接受'] },
    9:  { upright: ['愿望实现', '满足', '幸福', '情感丰富', '快乐'], reversed: ['不满足', '空虚', '愿望落空', '物质主义', '高期待'] },
    10: { upright: ['和谐', '家庭', '幸福', '情感满足', '共同愿景'], reversed: ['家庭冲突', '不和谐', '情感空虚', '破裂', '价值观差异'] },
    11: { upright: ['创意', '直觉', '情感信息', '好奇', '机会'], reversed: ['情绪化', '幻想', '创意封锁', '不成熟', '信息不足'] },
    12: { upright: ['浪漫', '魅力', '想象力', '行动', '完美主义者'], reversed: ['情绪波动', '失望', '想象', '不实际', '逃避'] },
    13: { upright: ['直觉', '慈悲', '情感治愈', '敏感', '接纳'], reversed: ['情绪波动', '过度敏感', '自我牺牲', '压抑情感', '不安全感'] },
    14: { upright: ['平衡', '控制', '温和', '同理心', '外交手腕'], reversed: ['情绪失控', '冷漠', '操纵', '抑郁', '不平衡'] },
  },
  swords: {
    1:  { upright: ['突破', '清晰', '真相', '精神力量', '胜利'], reversed: ['混乱', '误导', '信息不足', '攻击性', '偏见'] },
    2:  { upright: ['暂停', '决定', '中立', '情感平衡', '等待'], reversed: ['无法决定', '信息不足', '犹豫', '推迟决定', '逃避'] },
    3:  { upright: ['心碎', '悲伤', '背叛', '痛苦', '冲突'], reversed: ['接受', '放下', '治愈', '宽恕', '复原'] },
    4:  { upright: ['休息', '恢复', '撤退', '内省', '暂停'], reversed: ['休息过度', '焦虑', '缺乏休息', '不安', '继续前进'] },
    5:  { upright: ['冲突', '失败', '输', '背叛', '争论'], reversed: ['避免冲突', '放下', '复原', '和平', '继续前进'] },
    6:  { upright: ['过渡', '移动', '离开', '恢复', '前进'], reversed: ['停滞', '拖延', '无法继续', '不稳定', '留下'] },
    7:  { upright: ['策略', '狡诈', '秘密', '行动', '个人力量'], reversed: ['自我反省', '后果', '阴谋', '间谍活动', '不诚实'] },
    8:  { upright: ['限制', '困境', '无助', '负面思维', '自我囚禁'], reversed: ['释放', '自由', '新视角', '自信', '控制'] },
    9:  { upright: ['焦虑', '恐惧', '噩梦', '困扰', '绝望'], reversed: ['面对恐惧', '希望', '走出困境', '接受', '求助'] },
    10: { upright: ['结束', '崩溃', '痛苦', '背叛', '最黑暗时刻'], reversed: ['开始复苏', '接受改变', '继续前进', '放下', '重生'] },
    11: { upright: ['好奇心', '分析', '沟通', '真相', '新想法'], reversed: ['过度批评', '讽刺', '八卦', '防御', '思维不清'] },
    12: { upright: ['行动', '激情', '决心', '快速行动', '攻击性'], reversed: ['冲动', '仓促', '挫折', '愤怒', '不考虑后果'] },
    13: { upright: ['智慧', '独立', '直接', '清晰', '真相'], reversed: ['冷酷', '残忍', '过度批评', '八卦', '恶意'] },
    14: { upright: ['权威', '真相', '判断', '智力', '原则'], reversed: ['暴政', '过度批判', '不公正', '滥用权力', '混乱'] },
  },
  pentacles: {
    1:  { upright: ['机会', '新开始', '财务', '繁荣', '安全感'], reversed: ['错失机会', '贪婪', '物质主义', '不安全', '延迟'] },
    2:  { upright: ['平衡', '适应', '优先', '时间管理', '忙碌'], reversed: ['不平衡', '过度忙碌', 'disorganization', '过度承诺', '分心'] },
    3:  { upright: ['团队合作', '协作', '技能', '工作', '认可'], reversed: ['缺乏团队合作', '独自工作', '平凡', '失败', '不和谐'] },
    4:  { upright: ['安全', '保守', '占有欲', '节约', '边界'], reversed: ['开放', '给予', '过度节约', '安全感不足', '放手'] },
    5:  { upright: ['困难', '需要', '贫困', '孤立', '精神挑战'], reversed: ['恢复', '团体', '共享', '帮助', '走出逆境'] },
    6:  { upright: ['给予', '接受', '慷慨', '慈善', '平衡'], reversed: ['自私', '不平等', '债务', '不公平', '金钱纠纷'] },
    7:  { upright: ['耐心', '投资', '长期目标', '奖励', '等待'], reversed: ['不耐烦', '缺乏进展', '失败', '没有耐心', '不满足'] },
    8:  { upright: ['专注', '工艺', '奉献', '努力', '质量'], reversed: ['缺乏专注', '三心二意', '完美主义', '低质量', '拖延'] },
    9:  { upright: ['繁荣', '独立', '自给自足', '奢华', '奖励'], reversed: ['过度依赖', '财务过度', '低自尊', '工作狂', '不平衡'] },
    10: { upright: ['财富', '家庭', '遗产', '继承', '长期成功'], reversed: ['家庭冲突', '财务失败', '代际问题', '短期利益', '损失'] },
    11: { upright: ['学习', '技能', '目标', '进步', '承诺'], reversed: ['缺乏专注', '低价值', '浪费时间', '没有目标', '拖延'] },
    12: { upright: ['效率', '保守', '责任', '耐心', '传统'], reversed: ['拖延', '倦怠', '无聊', '不灵活', '不负责任'] },
    13: { upright: ['实用', '安全感', '养育', '自然', '丰盛'], reversed: ['自我忽视', '不安全', '过度关注金钱', '依赖', '不平衡'] },
    14: { upright: ['安全', '领导力', '控制', '繁荣', '保守主义'], reversed: ['过度控制', '物质主义', '贪婪', '不公平', '利用'] },
  },
};

const MINOR_DESC = {
  wands: {
    1:  { upright: '权杖 Ace 象征全新创意机会的萌芽，是火元素的纯粹力量。一只手从云中伸出，握住一根正在发芽的权杖。预示灵感迸发、新的热情与创造潜力的觉醒。', reversed: '逆位 Ace 暗示创意机会的延迟或丧失。可能表示缺乏动力、热情的消退，或在应该行动时感到无力。' },
    2:  { upright: '权杖二展示一个人站在世界之巅，手持两根权杖，眺望远方。代表对未来的规划、决策前的思考，以及对更大世界的探索欲望。', reversed: '逆位权杖二暗示对未知的恐惧或计划的缺失。可能表示犹豫不决、害怕走出去，或在决策时缺乏清晰的方向。' },
    3:  { upright: '权杖三展示一个人在山顶眺望海港，三根权杖稳稳插入土地。代表等待成果、坚持不懈，以及在商业或事业上的进步与扩张。', reversed: '逆位权杖三暗示计划或项目中的停滞。可能表示合作伙伴的延迟、海外业务的阻碍，或缺乏远见导致的方向迷失。' },
    4:  { upright: '权杖四描绘一个和平的庆祝场景，两根花饰柱子支撑着四个权杖，一对情侣在下方舞蹈。代表家庭和谐、搬入新居、婚礼或任何带来社区归属感的庆典。', reversed: '逆位权杖四暗示社区或家庭中的冲突。可能表示搬家或过渡期的不稳定，缺少团队精神，或和谐背后的暗流涌动。' },
    5:  { upright: '权杖五展示五个人挥舞着权杖，彼此争斗。代表竞争、多样性的冲突，以及多人之间的观点碰撞。并非完全的负面——有时这种竞争能激发创新。', reversed: '逆位权杖五暗示避免不必要的冲突或找到合作方式。可能表示团队内部的小摩擦得到解决，或相反地，长期压抑导致的问题。' },
    6:  { upright: '权杖六描绘一位英雄骑马凯旋归来，手持一根装饰华丽的权杖，周围的人向他致敬。代表胜利、公众的认可与成功。', reversed: '逆位权杖六暗示自我中心的骄傲或缺乏认可。可能表示在成功后过于傲慢，或贡献未得到应有的重视。' },
    7:  { upright: '权杖七展示一个人站在山坡上，手持权杖，击退六个从下方进攻的人。代表在竞争中坚持立场、保卫自己的领土或观点所需的勇气。', reversed: '逆位权杖七暗示过度消耗或放弃抵抗。可能表示感觉被围困、信心不足，或需要重新评估是否值得继续战斗。' },
    8:  { upright: '权杖八展示八根权杖在晴空中快速飞行，排列整齐。代表迅速的行动、快速的进展，以及某个项目或关系中累积的动势。', reversed: '逆位权杖八暗示延迟或挫折。可能表示期待已久的进展被推迟，外出旅行的取消，或在快速行动前的犹豫。' },
    9:  { upright: '权杖九描绘一个人绑着绷带站立，身后是八根权杖，面前还有一个。代表经历了众多挑战后的韧性，以及在看似即将放弃时仍能坚持的勇气。', reversed: '逆位权杖九暗示长期的疲惫或倦怠。可能表示累积的压力导致崩溃，或对重复挑战的偏执。休息是为了走更远的路。' },
    10: { upright: '权杖十展示一个人沉重地扛着十根权杖，几乎看不见他的脸。代表过度承担责任、压力累积，以及不知道何时该放手的执着。', reversed: '逆位权杖十暗示学会放下或委托。可能表示放下不必要的负担，认清真正属于自己的责任，或学会了有效分配任务。' },
    11: { upright: '权杖侍从是一个热情洋溢的年轻探索者，手持一根未成熟的权杖。代表探索新创意、充满热情的计划开始，以及来自远方的消息。', reversed: '逆位侍从暗示热情方向的改变或计划的推迟。可能表示新的兴趣点出现，或在应该行动时陷入犹豫。' },
    12: { upright: '权杖骑士是一个充满激情的战士，骑着马快速奔跑，权杖扛在肩上。代表勇敢的行动、冲动的决定，以及对自由的强烈渴望。', reversed: '逆位骑士暗示过度冲动带来的挫折。可能表示因急躁而犯的错误，旅行的延迟，或在行动前需要更多的思考。' },
    13: { upright: '权杖皇后是一位自信而热情的女性，坐在华丽的宝座上，座上装饰着狮子和向日葵。代表温暖、魅力与充满活力的领导力。', reversed: '逆位皇后暗示自我怀疑或控制欲。可能表示对自己缺乏信心、对他人的嫉妒，或在领导风格中过于苛刻。' },
    14: { upright: '权杖国王是一位成熟的领导者，坐在宝座上，宝座两侧装饰着狮子的头像和黑色公羊。代表果断的领导、企业家精神，以及以愿景驱动的影响力。', reversed: '逆位国王暗示过度支配或缺乏计划。可能表示利用权力谋取私利，在决策中过于冲动，或领导风格中缺乏耐心和包容。' },
  },
  cups: {
    1:  { upright: '圣杯 Ace 象征情感、爱与灵性的新开始。一只手从云中伸出，将满溢的圣杯交出，杯中有水涌出，下面有鸽子衔着圣饼。代表新感情的萌芽、创造力的涌现与精神的复苏。', reversed: '逆位 Ace 暗示情感的封闭或空虚。可能表示压抑感受、拒绝新的情感连接，或相反地，情感泛滥无法控制。' },
    2:  { upright: '圣杯二展示一男一女相互举杯致敬，两只圣杯被一条神奇的丝带连接。代表爱情中的伙伴关系、强烈的相互吸引，以及建立亲密关系的机会。', reversed: '逆位圣杯二暗示关系中的不平衡。可能表示权力的不对等、价值观的差异，或关系中的一方付出远大于另一方。' },
    3:  { upright: '圣杯三描绘三位女子在葡萄园中舞蹈，举杯庆祝。她们代表友谊、社区与社交的喜悦。牌面预示庆祝活动、友情，以及共享的快乐时光。', reversed: '逆位三暗示社交中的冲突或过度。可能表示被 gossip 伤害、群体中的分歧，或在热闹中感到孤独。' },
    4:  { upright: '圣杯四展示一个人坐在树下，对面前伸出的三只圣杯视而不见，旁边还有一只杯。代表沉思、冷漠与对现状的不满——对眼前的机会视而不见。', reversed: '逆位四暗示重新评估与重新发现。可能表示意识到自己的冷漠态度，或从新的角度看待被忽视的机会。' },
    5:  { upright: '圣杯五描绘一个人身着黑色斗篷，站在翻倒的杯子前，河流在远方流淌。前景是三只倒空的杯子，但身后还有两只满的。代表失落、悲伤与对失去的执着。', reversed: '逆位五暗示接受与放下。可能表示不再被失落困住，承认失去的同时也看见仍然拥有的，学会了向前看。' },
    6:  { upright: '圣杯六描绘一个孩子从圣杯中摘花递给另一个孩子，后面是花园。代表美好的回忆、童年时光的怀旧，以及家庭关系的温暖。', reversed: '逆位六暗示过度沉湎于过去。可能表示对童年的不健康执着，或需要在情感上真正成长，放下旧日情怀。' },
    7:  { upright: '圣杯七展示一个人面前漂浮着七个杯子，每个杯子中都有不同的东西：珠宝、皇冠、龙、城堡、蛇、火焰中人。代表选择面前的多种可能性，但也暗示着幻想与逃避。', reversed: '逆位七暗示更加清晰或逃避选择。可能表示过滤了不现实的选择，专注于真正想要的目标，或相反地，完全逃避决策。' },
    8:  { upright: '圣杯八描绘一个人拄着杖离开八个杯子搭建的圣坛。代表放下过去、离开不再满足的情境，以及对更深层真理的追寻。', reversed: '逆位八暗示无法放手或后悔离开。可能表示对已做决定的怀疑，或反之，该走却留，困在不健康的关系或工作中。' },
    9:  { upright: '圣杯九被称为"愿望牌"，描绘一个人坐在摆满九只圣杯的桌子后面，脸上带着满足的微笑。代表愿望的实现、情感上的满足与幸福。', reversed: '逆位九暗示不满足或愿望的落空。可能表示期待未实现，或物质满足后仍然感到空虚，意识到真正的幸福来自内心。' },
    10: { upright: '圣杯十描绘一家人在彩虹下舞蹈，孩子在拥抱，父母相依而立，背景是两座房子和流淌的河流。代表家庭的和谐、情感上的终极满足与共同的愿景。', reversed: '逆位十暗示家庭或情感关系中的冲突。可能表示价值观的差异、关系中的裂痕，或在追求"完美家庭"中迷失了真实的情感连接。' },
    11: { upright: '圣杯侍从是一个年轻浪漫的角色，手持一只圣杯，杯中有一尾鱼跃出。代表创意的涌现、直觉的觉醒，以及来自内心的情感或创意信息。', reversed: '逆位侍从暗示情绪化或创意受阻。可能表示被幻想带走，或情感上的不成熟，需要在感受和行动之间建立更好的桥梁。' },
    12: { upright: '圣杯骑士骑着马行进在海岸边，手持圣杯，目光望向远方。代表浪漫的理想主义者，带着魅力与想象力追求情感目标。', reversed: '逆位骑士暗示情绪化或脱离现实。可能表示被浪漫幻想冲昏头脑，行动上的迟缓，或对关系的不切实际期待。' },
    13: { upright: '圣杯皇后是一位充满爱与直觉的女性，坐在海边的宝座上，宝座没有靠背，象征与潜意识的连接。代表直觉的力量、情感的治愈与慈悲的领导力。', reversed: '逆位皇后暗示情绪的波动或过度敏感。可能表示被他人的情感淹没，过度的自我牺牲，或学会了设立边界。' },
    14: { upright: '圣杯国王是一位成熟而情感平衡的统治者，坐在海上的宝座上，代表对情绪王国的掌控。牌面预示外交手腕、情感智慧与温和而有原则的领导力。', reversed: '逆位国王暗示情绪失控或操纵。可能表示在情感上过于冷漠，或相反地，被情绪淹没，需要重新找回内心的平衡。' },
  },
  swords: {
    1:  { upright: '宝剑 Ace 象征真理、突破与清晰思维的力量。一只手从云中伸出，持有一把双面刃的宝剑，宝剑上方是皇冠。预示思想上的突破、做出清晰决策的能力，以及真相的胜利。', reversed: '逆位 Ace 暗示混乱、误导或思想上的攻击性。可能表示被错误信息误导，或在沟通中过于尖锐，需要找回思想的清晰。' },
    2:  { upright: '宝剑二描绘一个人坐在石椅上，双手各持一剑，蒙着眼睛。代表需要暂停做决定，在对立的力量之间保持中立，以及对信息的等待。', reversed: '逆位二暗示无法做出决定或逃避选择。可能表示被信息淹没，在应该行动时陷入瘫痪，或被迫做出仓促决定。' },
    3:  { upright: '宝剑三描绘一颗心脏被三把剑刺穿，背景是乌云和雨。代表心碎、悲伤与被背叛的痛苦。是最沉重的塔罗牌之一。', reversed: '逆位三暗示痛苦的接受与开始愈合。可能表示在伤痛中找到了意义，学习宽恕，或痛苦开始减轻，悲伤可以转化为力量。' },
    4:  { upright: '宝剑四展示一个人躺在教堂的长凳上休息，三把剑挂在头顶的墙上，第四把放在脚边。代表急需的休息、恢复与从世界撤退进行内省。', reversed: '逆位四暗示休息过度或不安。可能表示逃避太久无法恢复，或相反地，需要休息却无法放下，焦虑不安。' },
    5:  { upright: '宝剑五描绘一个人手持三把剑从两个跪着的人身边走过，那两人似乎已经放弃。代表冲突中的胜利——但这是一个空洞的胜利。', reversed: '逆位五暗示避免无意义的冲突。可能表示放下了争论，或相反地，是失败后学会了不再执着于输赢。' },
    6:  { upright: '宝剑六描绘一个人乘船渡河，船上竖着六把剑。代表从困难时期过渡到平静，搬家、改变或放下过去的故事。', reversed: '逆位六暗示过渡中的停滞。可能表示被过去困住，旅行的延迟，或不愿面对必须做的改变。' },
    7:  { upright: '宝剑七描绘一个人偷偷溜过五个插在地上的剑的营地，手中还拿着另外两把。代表使用策略和智慧获胜，但可能涉及一定程度的不诚实。', reversed: '逆位七暗示自我反省或不诚实的后果。可能表示被揭穿的阴谋，行为后果，或需要检视自己的策略是否道德。' },
    8:  { upright: '宝剑八描绘一个女人被八把剑包围，双手被绑住，但绳子实际上很松，她可以自由离开。代表自我施加的限制，被负面思维囚禁的困境。', reversed: '逆位八暗示释放与新的自由。可能表示打破自我设限，看清自己并非真正被困住，或重新获得对局面的控制。' },
    9:  { upright: '宝剑九描绘一个人坐在床上，双手捂脸，被九把剑围绕，头顶上方有一把摇摇欲坠的剑。代表极度的焦虑、恐惧、噩梦与精神上的痛苦。', reversed: '逆位九暗示希望的曙光。可能表示开始面对而非逃避恐惧，承认需要帮助，或在黑暗中找到一丝光明。' },
    10: { upright: '宝剑十描绘一个人脸朝下趴在地上，十把剑从背后刺入。代表最黑暗的时刻——某种东西完全结束，但正因如此，全新的开始才有可能。', reversed: '逆位十暗示最坏的已经过去。可能表示接受痛苦，开始复苏，从崩溃中重生，学会了在最低处反弹。' },
    11: { upright: '宝剑侍从是一个年轻而好奇的角色，手持一把剑，站在多云的天空下。代表对新想法的渴望、好奇的思维与追求真相的决心。', reversed: '逆位侍从暗示过度批评或思维混乱。可能表示尖酸刻薄、传播 gossip，或在思考问题时缺乏清晰。' },
    12: { upright: '宝剑骑士骑在疾驰的白马上，手持剑向前冲去。代表快速、激进的行动，决心达成目标，但也暗示过于急躁。', reversed: '逆位骑士暗示冲动带来的问题。可能表示因急躁而犯错，仓促做决定，或被愤怒驱使而失去理智。' },
    13: { upright: '宝剑皇后是一位聪明而独立的女性，坐在有蝴蝶装饰的宝座上，手持一把断剑。代表智慧、独立思考、以直接和清晰的方式沟通。', reversed: '逆位皇后暗示思想上的残酷或过度批评。可能表示尖酸刻薄、传播八卦，或以智慧为武器伤害他人。' },
    14: { upright: '宝剑国王是一位严肃的统治者，坐在装有两个天使头像的高宝座上，手持一把双刃剑。代表权威、真相、清晰的判断与公平。', reversed: '逆位国王暗示滥用权威或思想上的暴政。可能表示不公正的裁决、过度苛刻的批评，或以权力压制他人。' },
  },
  pentacles: {
    1:  { upright: '星币 Ace 象征物质世界的新开始。一只手从云中伸出，持有一枚闪闪发光的金币，币上有五角星符号。代表新的财务机会、事业的开端与物质繁荣。', reversed: '逆位 Ace 暗示错失物质机会或过度关注金钱。可能表示财务不安全，贪婪遮蔽了判断，或在应该抓住机会时犹豫不决。' },
    2:  { upright: '星币二描绘一个人手持两个旋转的金币，背景是海洋。代表在多个责任之间找到平衡，适应变化，管理时间与精力的能力。', reversed: '逆位二暗示失衡或混乱。可能表示无法同时处理多项任务，时间管理失败，或在责任中迷失了自己。' },
    3:  { upright: '星币三描绘一个石匠在凿石，两个赞助人在旁边观看，背景是建了一半的教堂。代表团队合作、技能的合作，将愿景转化为现实。', reversed: '逆位三暗示缺乏团队精神或技能不足。可能表示项目中的分歧，贡献不被认可，或在追求完美中忽视合作。' },
    4:  { upright: '星币四描绘一个人坐在地上，用双臂紧紧护住脚边的金币，头顶还有另一枚。代表对金钱或物质的执着追求、安全感的需求，以及节约的态度。', reversed: '逆位四暗示开放与放手。可能表示学会分享，学习花钱而非只存，或相反地，过度节约导致生活质量下降。' },
    5:  { upright: '星币五描绘两个人在暴风雪中走过破旧的教堂。代表财务或情感上的困难时期，感到孤立无援，但远处的窗户透出温暖的光。', reversed: '逆位五暗示从困难中恢复。可能表示找到社区和帮助，在逆境中发现新的精神意义，或学会了依靠他人。' },
    6:  { upright: '星币六描绘一个人向两个乞丐分发金币，天平在手中保持平衡。代表给予与接受的平衡，慈善、慷慨，以及共享财富。', reversed: '逆位六暗示不平衡或债务问题。可能表示给予者或接受者的失衡，或在金钱关系中感到不公平。' },
    7:  { upright: '星币七描绘一个人靠在锄头上，看着一株植物慢慢生长。代表需要耐心等待成果，对长期目标的投入，以及在努力过程中保持信念。', reversed: '逆位七暗示不耐烦或缺乏进展。可能表示对成果的期待过高，在应该坚持时放弃，或需要重新评估投资方向。' },
    8:  { upright: '星币八描绘一个人专注地雕刻星币，沉浸在工作中。代表对技能的专注投入，精益求精的努力，以及在工作中找到的意义。', reversed: '逆位八暗示缺乏专注或质量下降。可能表示三心二意，在应该专注于一个项目时分散了注意力，或过于追求完美导致拖延。' },
    9:  { upright: '星币九描绘一位优雅的女性站在葡萄园中，周围是丰收的果实和一只信赖的鸟。代表物质上的成功，自给自足，独立，以及享受自己努力工作的成果。', reversed: '逆位九暗示过度依赖或物质主义。可能表示在财务上过度依赖他人，或工作狂导致生活其他方面的失衡。' },
    10: { upright: '星币十描绘一个大家庭在古老的庭院中聚会，老者坐在中央，周围有狗和儿童。代表物质财富的积累，家庭的繁荣，祖辈留下的遗产与长久的成功。', reversed: '逆位十暗示家庭或财务冲突。可能表示代际之间的纠纷，遗产问题，或在追求财富中牺牲了家庭关系。' },
    11: { upright: '星币侍从是一个年轻而认真的学生，手持一枚星币，脚踏实地。代表学习新技能、设定财务目标，以及对物质世界努力的承诺。', reversed: '逆位侍从暗示缺乏专注或目标。可能表示浪费时间在无价值的事物上，或在需要行动时犹豫不决。' },
    12: { upright: '星币骑士骑着一匹稳定的黑马，手持一枚星币，缓慢而坚定地行进。代表勤劳、可靠，对目标的稳步推进，以及传统保守的方法。', reversed: '逆位骑士暗示拖延或倦怠。可能表示变得过于无聊和保守，逃避责任，或在应该行动时迟缓不前。' },
    13: { upright: '星币皇后是一位务实而富有的女性，坐在植物繁茂的宝座上。代表实用主义、家庭的安全与繁荣，以及物质与精神世界的平衡。', reversed: '逆位皇后暗示自我忽视或财务焦虑。可能表示过度关注金钱和物质，忽视自己的需求，或在安全感方面的不安。' },
    14: { upright: '星币国王是一位成熟而成功的商业领袖，坐在有公牛头像装饰的宝座上。代表物质世界的成功，对财务的控制，以及可靠、保守的领导力。', reversed: '逆位国王暗示过度的物质主义或控制。可能表示利用他人谋取利益，贪婪遮蔽了判断，或对财富的过度执着。' },
  },
};

const SUIT_LABELS = {
  wands: { name: '权杖', nameEn: 'Wands', element: '火', nature: '激情与创造力' },
  cups:  { name: '圣杯', nameEn: 'Cups',   element: '水', nature: '情感与关系' },
  swords:{ name: '宝剑', nameEn: 'Swords', element: '风', nature: '思想与沟通' },
  pentacles:{ name: '星币', nameEn: 'Pentacles', element: '地', nature: '物质与金钱' },
};

const SUIT_COLORS = {
  major: '#8b5cf6', wands: '#c0392b', cups: '#2980b9', swords: '#8e44ad', pentacles: '#27ae60',
};

// ── 构建小阿尔卡纳完整对象 ───────────────────────────────────
const MINOR_ARCANA = MINOR_DATA.map(d => ({
  id: `${d.suit}-${d.value}`,
  index: d.index,
  name: d.nameCn,
  nameEn: d.name,
  suit: d.suit,
  value: d.value,
  filename: d.filename,
  keywords: MINOR_KEYWORDS[d.suit][d.value],
  desc: MINOR_DESC[d.suit][d.value],
  suitLabel: SUIT_LABELS[d.suit],
}));

// ── 完整卡池 ─────────────────────────────────────────────────
export const ALL_CARDS = [
  ...MAJOR_ARCANA,
  ...MINOR_ARCANA,
];

export const CARD_MAP = Object.fromEntries(ALL_CARDS.map(c => [c.id, c]));

// ── 卡牌图片：优先本地 Pocket PDF 切图（public/tarot-pocket/00.jpg–77.jpg，运行 npm run extract:tarot 生成）
const HF_TRAIN_BASE =
  'https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/train';

function viteBase() {
  const b = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL;
  return (b || '/').replace(/\/?$/, '/');
}

/** 本地牌面（与 card.index 0–77 对应 Rider-Waite 顺序） */
export function getCardImage(card) {
  const i = String(card.index).padStart(2, '0');
  return `${viteBase()}tarot-pocket/${i}.jpg`;
}

export function getCardImageHf(card) {
  return `${HF_TRAIN_BASE}/${card.filename}`;
}

export function getCardImageHfDownload(card) {
  return `${HF_TRAIN_BASE}/${card.filename}?download=true`;
}

// ── 牌阵定义 ───────────────────────────────────────────────
export const SPREADS = [
  {
    id: 'single',
    name: '单张占卜',
    nameEn: 'Single Card',
    icon: '◇',
    positions: 1,
    labels: ['今日指引'],
    desc: '快速简单的单张牌解读，获取今日或当下问题的直接指引。',
  },
  {
    id: 'three',
    name: '三牌占卜',
    nameEn: 'Three Cards',
    icon: '◇◇◇',
    positions: 3,
    labels: ['过去', '现在', '未来'],
    desc: '经典三牌展开，揭示问题的过去状态、当前状况与未来走向。',
  },
  {
    id: 'yesno',
    name: '是/否占卜',
    nameEn: 'Yes or No',
    icon: '？',
    positions: 1,
    labels: ['是/否'],
    desc: '针对简单直接的问题，获得明确的肯定或否定指引。',
  },
  {
    id: 'fivespread',
    name: '五牌展开',
    nameEn: 'Five Cards',
    icon: '◇◇◇◇◇',
    positions: 5,
    labels: ['核心', '阻碍', '基础', '过去', '希望'],
    desc: '五个位置的展开，更全面地分析问题的各个层面与影响因素。',
  },
];

// ── 洗牌抽取（Fisher-Yates + 种子） ────────────────────────
export function seededShuffle(arr, seed) {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 16807) % 2147483647;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── 是/否判断逻辑 ────────────────────────────────────────────
export function getYesNo(card, reversed) {
  const odd = (card.suit === 'major' ? card.value % 2 === 1 : card.value % 2 === 1);
  if (reversed) {
    return odd
      ? { answer: '否', color: '#ef4444', icon: '✗', reason: '逆位加强否定倾向' }
      : { answer: '是', color: '#22c55e', icon: '✓', reason: '逆位减弱否定偏向肯定' };
  }
  return odd
    ? { answer: '是', color: '#22c55e', icon: '✓', reason: '正位支持肯定倾向' }
    : { answer: '否', color: '#ef4444', icon: '✗', reason: '正位倾向否定' };
}

export { SUIT_COLORS, SUIT_LABELS };
