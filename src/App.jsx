import { useState } from 'react';
import Galaxy from './components/Galaxy.jsx';
import { YinYangIcon } from './components/PageIcons.jsx';
import { FaqAccordion } from './components/FaqAccordion.jsx';
import TarotApp from './TarotApp.jsx';
import './App.css';

const SIX_NAMES = ['大安', '留连', '速喜', '赤口', '小吉', '空亡'];
const SIX_FORTUNES = ['大吉', '凶', '吉', '凶', '大吉', '大凶'];
const SIX_COLORS = ['#4CAF50', '#9E9E9E', '#FF9800', '#F44336', '#8BC34A', '#607D8B'];
const SIX_WUXING = ['木', '水', '火', '金', '木', '土'];
const SIX_POSITIONS = ['食指上节', '食指下节', '中指上节', '中指下节', '无名指上节', '无名指下节'];

const FORTUNE_COLOR_MAP = {
  '大吉': '#d4af37',
  '吉':   '#5BA85A',
  '凶':   '#E74C3C',
  '大凶': '#8B0000',
};

const RESULT_TEXTS = {
  '大安': {
    keyword: '身不动，五行属木，诸事大吉',
    desc: '诸事不宜急进，宜守旧发展。运势平稳，无大起大落，适合静养、读书、规划。',
    poem: '大安主平安，诸事却相安。身不动时无咎，名利吉人来。行人未动人在内，小事可行。',
  },
  '留连': {
    keyword: '人未归，五行属水，事多拖延',
    desc: '事情进展迟缓，可能遇到阻碍或拖延。宜耐心等待，不宜强求，谨防小人拖累。',
    poem: '留连人未归，凡事皆迟疑。玄武纠缠多是非，阴私小口防。谋事最难成，急取徒劳。',
  },
  '速喜': {
    keyword: '喜事临，五行属火，好消息至',
    desc: '好消息即将到来，事情进展顺利。宜把握时机，积极行动，喜庆事近在眼前。',
    poem: '速喜主喜庆，三字吉分明。朱雀灾除吉来应，灾祸不成。婚姻行人至，佳音速报。',
  },
  '赤口': {
    keyword: '官事凶，五行属金，防口舌',
    desc: '容易发生口角争执或意外灾祸。宜保持低调，谨言慎行，避免与人冲突。',
    poem: '赤口主官非，四字要推微。白虎口舌官灾至，是非临门起。谋事犯争竞，出行防跌。',
  },
  '小吉': {
    keyword: '人即来，五行属木，小有吉利',
    desc: '有小利可得，但并非大吉。宜从小处着手，稳扎稳打，不可贪心冒进。',
    poem: '小吉主和洽，凡事皆相就。六合逢之来集福，婚姻谐老。谋事多利益，求谋称心。',
  },
  '空亡': {
    keyword: '音信无，五行属土，事多落空',
    desc: '努力可能落空，需防白忙一场。宜保守行事，另寻机会，不宜有大动作。',
    poem: '空亡事难成，劳力总落空。勾陈空有忧惊事，灾祸两多重。诸事皆不利，徒劳无功。',
  },
};

const ADVICE_TEXTS = {
  '大安': [
    '这是非常平稳的运势信号，适合静下心来整理思路，不必急于做重大决定。',
    '如果最近有出行计划，大安是好兆头，旅途大概率平安顺利。',
    '适合处理文书、合同等需要耐心的事务，效率会比平时更高。',
    '人际关系上，与人相处和睦，贵人运会暗中助力。',
  ],
  '留连': [
    '当前处于"等"的阶段，强行推进往往事倍功半，不如顺其自然。',
    '此卦提醒你：小人近身，合作或借贷方面要格外谨慎，签合同前多看几遍。',
    '感情上若有等待的人，短时间内可能还没有确切消息，不要频繁催促。',
    '适合用这段时间来学习新知识、储备技能，为后续发力做准备。',
  ],
  '速喜': [
    '好消息已经在路上了！保持乐观积极的心态，好事会更顺利地到来。',
    '若有报喜、面试、签约等计划，本周内是行动的好窗口期。',
    '此卦也暗示可能有意外的小惊喜，留意身边的机缘和巧合。',
    '人缘运势上，适合社交、表白、修复关系，会有出乎意料的好回应。',
  ],
  '赤口': [
    '今日要特别注意言行，避免与人起争执，尤其在公共场合保持低调。',
    '有出行计划的朋友建议推迟或做足安全准备，此卦出行运较弱。',
    '遇到有人找你借钱或签重要协议，请三思而后行，不要冲动答应。',
    '如果已经发生了口角摩擦，主动道歉或冷处理比硬碰硬更明智。',
  ],
  '小吉': [
    '这是一个"小有收获"的信号，努力会有回报，但不要期待一夜暴富。',
    '适合从小事开始推进，稳扎稳打，积小胜为大胜。',
    '感情上有暗恋或暧昧的朋友，可以主动一点，小吉的能量支持你迈出这一步。',
    '此卦提醒：贪心是大忌，见好就收才是明智之选。',
  ],
  '空亡': [
    '当前阶段时机尚未成熟，若有重大决定，建议等一周后再重新占卜。',
    '此卦提示你：方向可能选错了，或者条件还没有具备，不必过于沮丧。',
    '适合用空亡期来反思、调整目标方向，重新梳理后再出发。',
    '不要在这段时间做高风险投资或大额支出，否则很可能打水漂。',
  ],
};

function calcSuan(guaMonth, GuaDay, GuaTime) {
  const total = (guaMonth + GuaDay + GuaTime) % 6;
  const idx = total === 0 ? 5 : total - 1;
  return { idx, name: SIX_NAMES[idx], fortune: SIX_FORTUNES[idx], color: SIX_COLORS[idx] };
}

async function fetchTrueRandom(min, max) {
  const url = `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) throw new Error('network error');
    const text = await res.text();
    const n = parseInt(text.trim(), 10);
    if (isNaN(n) || n < min || n > max) throw new Error('invalid response');
    return n;
  } catch {
    clearTimeout(timeout);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

const FAQ_ITEMS = [
  {
    q: '什么是小六壬？',
    a: '小六壬是中国民间流传的一种简易占卜术，又称诸葛马前课、指掌决。通过六神（大安、留连、速喜、赤口、小吉、空亡）来预测吉凶。只需在手掌上按月、日、时依次掐算，即可快速得出结果，非常适合日常生活中的快速决策和预判。',
  },
  {
    q: '小六壬怎么算？',
    a: '小六壬按农历月、日、时辰依次在六个宫位上掐算。正月起大安，依次顺时针数到该月；从月落点起数日期；从日落点起数时辰，最终落点即为结果。掐算顺序为：大安 → 留连 → 速喜 → 赤口 → 小吉 → 空亡 → 循环。',
  },
  {
    q: '小六壬的六神分别代表什么？',
    a: '大安属木主吉，身不动事事安稳；留连属水主平，人未归事多拖延；速喜属火主吉，喜事临门好消息至；赤口属金主凶，口舌是非需防小人；小吉属木主吉，小有吉利适合求人办事；空亡属土主凶，音信稀少事多落空。',
  },
  {
    q: '小六壬用农历还是阳历？',
    a: '传统小六壬使用农历（阴历）进行推算。现代应用中，使用阳历也能得出参考结果，关键是保持日期和时辰的一致性。建议在有明确日期的场景下使用，如外出办事、求医问药、婚姻求财等日常决策。',
  },
  {
    q: '小六壬准吗？',
    a: '小六壬是中国传统易经文化的重要分支，起源于周易体系。相比周易六十四卦的复杂推算，小六壬简化为六神占卜法，更加直观简便。倪海厦老师认为，小六壬虽然简单，但蕴含了周易"初动原则"的核心智慧——以第一次起念时的时辰为准，同一件事不宜反复占卜。仅供参考自娱。',
  },
  {
    q: '小六壬怎么看时辰？',
    a: '小六壬将一天分为六个时辰段：子时（23:00-01:00）、丑时（01:00-03:00）、寅时（03:00-05:00）、卯时（05:00-07:00）、辰时（07:00-09:00）、巳时（09:00-11:00）、午时（11:00-13:00）、未时（13:00-15:00）、申时（15:00-17:00）、酉时（17:00-19:00）、戌时（19:00-21:00）、亥时（21:00-23:00）。每个时辰对应一个宫位起卦。',
  },
  {
    q: '大安代表什么意思？',
    a: '大安五行属木，主吉。代表身不动、事事安稳的良好状态。传统诗诀说"大安主平安，诸事却相安"。适用于平稳发展、静养等待的场景，如出行平安、考试顺利、办事稳妥等。',
  },
  {
    q: '小六壬和大六壬有什么区别？',
    a: '大六壬是中国古代三大预测术之一（太乙、奇门、大六壬），系统庞大复杂，以十天干、十二地支为基础进行推算。而小六壬简化为六神占卜法，只需六神配十二月将，掐指即可得出结果，更适合日常生活中的快速决策。两者原理皆源于易经，但复杂程度和应用场景不同。',
  },
  {
    q: '小六壬可以一天算几次？',
    a: '同一件事不宜反复占卜，这与易经"诚则灵"的理念一致。第一次起念时的时辰为准最为准确。不同的事情可以分别占卜，但建议保持诚心和专注，每次只问一事，才能得到更可靠的参考结果。',
  },
];

function PalmDiagram({ resultIdx, color }) {
  const positions = [
    { finger: '食指', section: '上节', label: SIX_NAMES[1], color: SIX_COLORS[1] },
    { finger: '食指', section: '下节', label: SIX_NAMES[0], color: SIX_COLORS[0] },
    { finger: '中指', section: '上节', label: SIX_NAMES[2], color: SIX_COLORS[2] },
    { finger: '中指', section: '下节', label: SIX_NAMES[5], color: SIX_COLORS[5] },
    { finger: '无名指', section: '上节', label: SIX_NAMES[3], color: SIX_COLORS[3] },
    { finger: '无名指', section: '下节', label: SIX_NAMES[4], color: SIX_COLORS[4] },
  ];

  return (
    <div className="palm-diagram">
      <div className="palm-title">掌诀图</div>
      <div className="palm-fingers">
        {positions.map((p, i) => (
          <div key={i} className={`palm-finger ${i === resultIdx ? 'active' : ''}`}
               style={i === resultIdx ? { '--active-color': color } : {}}>
            <div className="finger-name">{p.finger}</div>
            <div className="finger-section" style={{ color: p.color }}>{p.section}</div>
            <div className="finger-hex" style={{ color: p.color, fontWeight: i === resultIdx ? 700 : 400 }}>
              {p.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatPageEntryDisplay(d) {
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const y = d.getFullYear();
  const h24 = d.getHours();
  const min = String(d.getMinutes()).padStart(2, '0');
  const isPm = h24 >= 12;
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  const ap = isPm ? '下午' : '上午';
  return `${m}/${day}/${y} ${ap} ${String(h12).padStart(2, '0')}:${min}`;
}

function splitByPeriod(text) {
  if (!text) return null;
  const parts = text.split('。').filter(p => p.trim());
  return parts.map((p, i) => <span key={i} className="result-poem-line">{p}</span>);
}

function ModeCalendarIcon() {
  return (
    <svg className="time-display-calendar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('xiaoliuren');
  const [mode, setMode] = useState('now');
  const [customTime, setCustomTime] = useState('');
  const [randomVal, setRandomVal] = useState('');
  const [randomParams, setRandomParams] = useState(null);
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [pageEnterAt] = useState(() => new Date());

  function handleDivine() {
    let gMonth, gDay, gTime;
    if (mode === 'now') {
      const t = pageEnterAt;
      gMonth = t.getMonth() + 1;
      gDay = t.getDate();
      gTime = Math.floor(t.getHours() / 2);
    } else if (mode === 'custom') {
      if (!customTime) { alert('请先选择日期和时间'); return; }
      const d = new Date(customTime);
      gMonth = d.getMonth() + 1;
      gDay = d.getDate();
      gTime = Math.floor(d.getHours() / 2);
    } else {
      if (!randomVal || isNaN(Number(randomVal)) || Number(randomVal) < 1) {
        alert('请输入一个正整数'); return;
      }
      const v = Number(randomVal);
      gMonth = (v % 12) + 1;
      gDay   = ((v * 7 + 3) % 30) + 1;
      gTime  = ((v * 13 + 7) % 12);
      setRandomParams({ v, gMonth, gDay, gTime });
    }
    const res = calcSuan(gMonth, gDay, gTime);
    setResult(res);
    setHistory(prev => [{ ...res, mode, time: new Date().toLocaleString('zh-CN') }, ...prev].slice(0, 10));
  }

  async function handleRandom() {
    const v = await fetchTrueRandom(1, 9999);
    setRandomVal(String(v));
  }

  function formatTimeLabel(d) {
    const hours = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const idx = Math.floor(d.getHours() / 2);
    return `${d.getMonth() + 1}月${d.getDate()}日 ${hours[idx]}时`;
  }

  return (
    <div className="app-wrapper">
      <Galaxy
        transparent={true}
        starSpeed={0.4}
        density={1.0}
        hueShift={140}
        speed={0.8}
        mouseInteraction={true}
        glowIntensity={0.4}
        saturation={0.0}
        mouseRepulsion={true}
        repulsionStrength={1.5}
        twinkleIntensity={0.3}
        rotationSpeed={0.05}
        autoCenterRepulsion={0}
      />

      {/* 顶部 Tab 导航 */}
      <div className="tab-nav" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'xiaoliuren'}
          className={`tab-item ${activeTab === 'xiaoliuren' ? 'active' : ''}`}
          onClick={() => setActiveTab('xiaoliuren')}
        >
          小六壬
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'tarot'}
          className={`tab-item ${activeTab === 'tarot' ? 'active' : ''}`}
          onClick={() => setActiveTab('tarot')}
        >
          塔罗牌
        </button>
      </div>

      {activeTab === 'xiaoliuren' ? (
      <div className="app-content app-content-xiaoliuren">
        <header className="app-header page-module-header">
          <div className="page-header-icon" aria-hidden>
            <YinYangIcon />
          </div>
          <h1 className="page-module-title">小六壬占卜</h1>
          <p className="app-subtitle">心中默念要咨询的问题，点击开始占卜</p>
        </header>

        <div className="mode-block">
          <div className="mode-selector">
            {[
              { key: 'now',    label: '当前时间' },
              { key: 'custom', label: '选择时间' },
              { key: 'random', label: '随机取数' },
            ].map(m => (
              <button
                key={m.key}
                type="button"
                className={`mode-btn ${mode === m.key ? 'active' : ''}`}
                onClick={() => { setMode(m.key); setResult(null); setRandomParams(null); }}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {mode === 'now' && (
          <div className="mode-time-display-bar" role="status" aria-label="进入页面时的参考时间">
            <span className="mode-time-display-text">{formatPageEntryDisplay(pageEnterAt)}</span>
            <ModeCalendarIcon />
          </div>
        )}

        {mode === 'custom' && (
          <div className="input-group">
            <input
              type="datetime-local"
              value={customTime}
              onChange={e => setCustomTime(e.target.value)}
              className="time-input"
            />
          </div>
        )}

        {mode === 'random' && (
          <div className="input-group">
            <input
              type="number"
              placeholder="输入任意正整数"
              value={randomVal}
              onChange={e => setRandomVal(e.target.value)}
              className="random-input"
              min="1"
            />
            <button className="action-btn" onClick={handleRandom}>随机</button>
          </div>
        )}

        {mode === 'random' && (
          <p className="random-hint">
            基于大气噪声真随机数，可修改数字后点击"开始占卜"重新计算
          </p>
        )}

        <button className="divine-btn" onClick={handleDivine}>
          开始占卜
        </button>

        {result && (
          <div className="result-card-wrapper">
            {/* 吉凶 & 卦名 */}
            <div className="fortune-display">
              <span
                className="fortune-tag"
                style={{ color: FORTUNE_COLOR_MAP[result.fortune], textShadow: `0 0 20px ${FORTUNE_COLOR_MAP[result.fortune]}80` }}
              >
                {result.fortune}
              </span>
              <span
                className="hexagram-label"
                style={{ color: result.color, borderColor: result.color }}
              >
                {result.name}
              </span>
              <span className="fortune-sub">
                {SIX_POSITIONS[result.idx]} · 五行属{SIX_WUXING[result.idx]}
              </span>
            </div>

            {/* 推算过程 */}
            <div className="process-section">
              <div className="section-title">推算过程</div>
              <div className="process-chain">
                {mode === 'now' && (
                  <>正月 → 大安 → {pageEnterAt.getDate()} → 速喜 → {formatTimeLabel(pageEnterAt).split(' ')[1]} → <strong style={{ color: result.color }}>{result.name}</strong></>
                )}
                {mode === 'custom' && customTime && (
                  <>正月 → 大安 → {new Date(customTime).getDate()} → 速喜 → {formatTimeLabel(new Date(customTime)).split(' ')[1]} → <strong style={{ color: result.color }}>{result.name}</strong></>
                )}
                {mode === 'random' && randomParams && (
                  <>随机数 <strong>{randomParams.v}</strong> → 月{randomParams.gMonth}日{randomParams.gDay}时{randomParams.gTime} → <strong style={{ color: result.color }}>{result.name}</strong></>
                )}
              </div>
            </div>

            {/* 掌诀图 */}
            <PalmDiagram resultIdx={result.idx} color={result.color} />

            {/* 推算结果 */}
            <div className="result-section">
              <div className="section-title">断语</div>
              <div className="result-keyword" style={{ color: result.color }}>
                {RESULT_TEXTS[result.name].keyword}
              </div>
              <div className="result-desc result-desc-period">{splitByPeriod(RESULT_TEXTS[result.name].desc)}</div>
            </div>

            {/* 诗诀 */}
            <div className="poem-section">
              <div className="section-title">诗诀</div>
              <div className="poem-text result-poem">{splitByPeriod(RESULT_TEXTS[result.name].poem)}</div>
            </div>

            {/* 给你的建议 */}
            <div className="advice-section">
              <div className="section-title">给你的建议</div>
              <div className="advice-list">
                {ADVICE_TEXTS[result.name].map((line, i) => (
                  <div key={i} className="advice-item">
                    <span className="advice-dot" style={{ color: result.color }}>·</span>
                    <span className="advice-text">{line}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="divine-btn card-btn" onClick={handleDivine}>
              再次占卜
            </button>
          </div>
        )}

        {/* 历史记录 */}
        {history.length > 0 && (
          <div className="history-panel">
            <div className="history-panel-title">最近占卜</div>
            {history.map((h, i) => (
              <div key={i} className="history-item">
                <span className="history-item-name" style={{ color: h.color, fontWeight: 600 }}>{h.name}</span>
                <span className="history-item-right">
                  <span className="history-fortune" style={{ color: FORTUNE_COLOR_MAP[h.fortune] }}>
                    {h.fortune}
                  </span>
                  <span className="history-time">{h.time}</span>
                </span>
              </div>
            ))}
          </div>
        )}

        {/* 六神总览（置于常见问题上方） */}
        <div className="intro-card">
          <div className="intro-title">六神总览</div>
          <div className="hexagram-grid">
            {SIX_NAMES.map((name, i) => (
              <div key={i} className="hexagram-mini" style={{ borderColor: SIX_COLORS[i] + '55' }}>
                <span className="hex-mini-name" style={{ color: SIX_COLORS[i] }}>{name}</span>
                <span className="hex-mini-wx">{SIX_WUXING[i]}</span>
                <span className="hex-mini-pos">{SIX_POSITIONS[i]}</span>
              </div>
            ))}
          </div>
        </div>

        <FaqAccordion items={FAQ_ITEMS} />
        <div className="page-bottom-disclaimer">@Kenzie的神秘学studio · @kenzie_thxg</div>
      </div>
      ) : (
        <div className="app-content app-content-tarot">
          <TarotApp />
        </div>
      )}
    </div>
  );
}
