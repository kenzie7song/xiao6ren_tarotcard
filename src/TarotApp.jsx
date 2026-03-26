import { useState, useCallback, useEffect, useRef } from 'react';
import { SPREADS, ALL_CARDS, getCardImage, getCardImageHf, getCardImageHfDownload } from './data/tarot.js';
import { MoonIcon } from './components/PageIcons.jsx';
import { FaqAccordion } from './components/FaqAccordion.jsx';
import './TarotApp.css';

const TAROT_FAQ_ITEMS = [
  {
    q: '塔罗牌一共有多少张？',
    a: '塔罗牌共有78张，分为大阿尔卡纳（22张）和小阿尔卡纳（56张）。大阿尔卡纳代表人生旅途中的重大主题与精神成长课题，编号从0（愚者）到21（世界）。小阿尔卡纳分为四组花色——权杖（火/行动）、圣杯（水/情感）、宝剑（风/思想）、星币（土/物质），每组14张（Ace至10加上4张宫廷牌），对应日常生活中各个层面的具体事件与挑战。',
  },
  {
    q: '塔罗占卜应该怎么选择占卜方式？',
    a: '塔罗占卜有多种牌阵形式，适合不同深度的问题：\n\n① 单牌占卜（单张抽牌）：适合简单直接的问题，如"今天运势如何"或快速获得某个主题的指引。单牌简洁明了，适合日常使用，但信息量有限。\n\n② 三牌占卜（三张牌阵）：经典且多用的牌阵，适合大部分日常问题，如感情、工作、学业等。分别代表"过去—现在—未来"或"问题核心—阻碍—建议"等结构，信息层次丰富。\n\n③ 五牌占卜（马蹄铁/凯尔特十字）：适合复杂的人生抉择或需要深入分析的问题。涵盖更全面的视角，包括核心问题、影响因素、潜在结果等，适合重大决策前的深度探讨。\n\n④ 是非占卜（Yes/No）：专门回答是或否的封闭式问题，如"这件事能否成功"。直接明快，适合需要快速确认方向的情况，但无法提供更多细节。\n\n选择哪种方式，取决于你问题的复杂程度与你想获得的指引深度。简单问题选单牌，常规问题选三牌，重大抉择选五牌，想快速判断选是非占卜。',
  },
  {
    q: '什么是逆位？影响大吗？',
    a: '逆位是指塔罗牌被抽取时牌面朝下（相对于正位朝上）。逆位的解读比正位更为复杂，通常代表：正位能量的减弱、反转、阻碍、内部/隐藏状态、过度或不足等。解读逆位需要结合牌义、牌阵位置以及问卜者的具体情况综合判断，不必过度恐惧逆位，许多时候逆位只是提示问题需要从另一个角度来审视。',
  },
  {
    q: '可以为自己占卜，也可以为别人占卜吗？',
    a: '塔罗占卜最适合为自己占卜，因为只有自己最了解自己的处境与感受，占卜结果也更贴合实际。若为他人占卜，需要站在对方的角度，不带主观偏见地解读，并在解读时注明"以下内容仅为提供参考，最终解释权归当事人所有"。需要注意的是，未经他人同意为他人占卜涉及隐私与伦理问题，建议仅在对方主动请求时进行。',
  },
  {
    q: '同一件事可以反复占卜吗？',
    a: '不建议对同一件事反复进行塔罗占卜。每次占卜都反映的是当下时刻的能量与信息，若重复占卜，可能会得到不同的结果，反而造成困惑，这与易经"初动"的原则相似——第一次起念时的状态最为准确。如果对结果有疑虑，可以换一种牌阵再次提问，或等待几天情况变化后再重新占卜。同一个问题建议间隔一周以上再重新占卜。',
  },
  {
    q: '什么是大阿尔卡纳？它们代表什么？',
    a: '大阿尔卡纳（Major Arcana）共22张，是塔罗牌中最具分量的牌，代表人生旅途中不可避免的重大课题与转变。从0号「愚者」象征旅程的起点，到21号「世界」代表圆满完成，每张牌都揭示了深层的精神寓意与普世智慧。例如「女教皇」代表直觉与秘密知识，「死神」并非字面意义上的死亡，而是象征旧的结束与新生的开始，是转变与重生的强大象征。',
  },
  {
    q: '四张小阿尔卡纳花色分别代表什么？',
    a: '权杖（Fire/Wands）代表行动、热情、创造与野心，对应火象星座，与我们追求目标、开启新事业的动力相关。圣杯（Water/Cups）代表情感、爱、关系与内心世界，对应水象星座，揭示人际关系中的情感流动与心理需求。宝剑（Air/Swords）代表思想、沟通、冲突与决策，对应风象星座，揭示我们心智层面的挑战与智慧。星币（Earth/Pentacles）代表物质、身体、工作与实际成果，对应土象星座，揭示现实生活的稳定性与安全感。',
  },
  {
    q: '宫廷牌是什么？应该怎么理解？',
    a: '宫廷牌（Court Cards）共16张，每组花色各有4张：侍从、骑士、王后、国王。它们代表特定能量的人物原型，或反映问卜者自身人格的某个面向。侍从象征学生或讯息使者，代表好奇与探索；骑士象征行动者，代表热情与追求；王后代表滋养者，代表成熟与包容；国王代表权威者，代表力量与责任。在解读中，宫廷牌可能指向具体的人（如某个关键人物），也可能描述一种能量或情境。',
  },
  {
    q: '塔罗占卜可以预测具体事件吗？',
    a: '塔罗占卜擅长揭示当下的能量状态、潜在的发展方向以及事件背后的深层原因。它并非算命，不能精确预测具体日期或可量化的结果（如"股价会涨到多少"）。塔罗更像是一面镜子，反映问题的本质与可能的因果关系，帮助问卜者在充分了解情况的基础上做出更明智的选择。占卜结果的准确性很大程度上取决于问题的清晰程度、问卜者的诚心程度以及解读者的专业水平。建议将塔罗视为自我探索与决策辅助的工具，而非绝对的预言。',
  },
];

// ── 卡牌视觉颜色配置 ──────────────────────────────────────────
const SUIT_COLORS = {
  major: { bg: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 50%, #1a1040 100%)', border: '#8b5cf6', text: '#e9d5ff', glow: '#7c3aed' },
  wands:  { bg: 'linear-gradient(135deg, #3b0a00 0%, #7f1d1d 50%, #3b0a00 100%)',   border: '#ef4444', text: '#fee2e2', glow: '#dc2626' },
  cups:   { bg: 'linear-gradient(135deg, #0c1a3b 0%, #1e3a8a 50%, #0c1a3b 100%)',   border: '#3b82f6', text: '#dbeafe', glow: '#2563eb' },
  swords: { bg: 'linear-gradient(135deg, #0f172a 0%, #312e81 50%, #0f172a 100%)',   border: '#8b5cf6', text: '#ede9fe', glow: '#7c3aed' },
  pentacles: { bg: 'linear-gradient(135deg, #0f2918 0%, #14532d 50%, #0f2918 100%)', border: '#22c55e', text: '#dcfce7', glow: '#16a34a' },
};

function getCardStyle(card) {
  return SUIT_COLORS[card.suit] || SUIT_COLORS.major;
}

// ── 卡牌图案（Unicode 符文） ──────────────────────────────────
const CARD_SYMBOLS = {
  major: { symbol: '☆', title: '大阿尔卡纳' },
  wands:  { symbol: '♣', title: '权杖' },
  cups:   { symbol: '♥', title: '圣杯' },
  swords: { symbol: '♠', title: '宝剑' },
  pentacles: { symbol: '◆', title: '星币' },
};

// ── 随机从 RANDOM.ORG 获取种子 ───────────────────────────────
async function fetchRandomSeed() {
  const url = `https://www.random.org/integers/?num=3&min=100000&max=999999&col=1&base=10&format=plain&rnd=new`;
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 4000);
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(t);
    if (!res.ok) throw new Error();
    const text = await res.text();
    const nums = text.trim().split('\n').map(Number);
    return nums[0] * 1000 + nums[1];
  } catch {
    clearTimeout(t);
    return Math.floor(Math.random() * 999999999);
  }
}

// ── 洗牌抽取 N 张（Fisher-Yates + 种子） ───────────────────
function seededShuffle(arr, seed) {
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
function getYesNo(card, reversed) {
  // 奇数大阿尔卡纳倾向于 是
  const majorOdd = card.suit === 'major' && card.value % 2 === 1;
  const minorOdd = card.suit !== 'major' && card.value % 2 === 1;
  const odd = majorOdd || minorOdd;

  if (reversed) {
    return odd ? { answer: '否', color: '#ef4444', icon: '✗', reason: '逆位加强否定' } : { answer: '是', color: '#22c55e', icon: '✓', reason: '逆位出现，减弱肯定' };
  }
  return odd ? { answer: '是', color: '#22c55e', icon: '✓', reason: '正位支持肯定' } : { answer: '否', color: '#ef4444', icon: '✗', reason: '正位倾向否定' };
}

// ── 生成占卜建议 ────────────────────────────────────────────
function buildAdvice(card, reversed, label, index) {
  const name = card.name;
  const suitLabel = card.suit === 'major' ? '大阿尔卡纳' :
    card.suit === 'wands' ? '权杖' : card.suit === 'cups' ? '圣杯' :
    card.suit === 'swords' ? '宝剑' : '星币';
  const posLabel = label || `第${index + 1}张牌`;
  const kws = reversed ? card.keywords.reversed : card.keywords.upright;
  const kwStr = kws ? kws.join('、') : '';
  const revNote = reversed ? '（逆位：能量受阻或反转）' : '';

  if (card.suit === 'major') {
    const majorAdvices = {
      0: ['愚者象征全新的开始，当前适合大胆迈出第一步，即使前方未知也要保持勇气。', '但别忘了提前做好基本准备，愚者的冒险需要一点理性兜底。'],
      1: ['女祭司代表直觉与内在智慧，当前适合向内探索，倾听内心的声音。', '不适合贸然行动，让答案在安静中浮现。'],
      2: ['女皇象徵丰盛与创造力，当前适合拓展社交、享受生活或投入艺术创作。', '保持温柔接纳的心态，你正在被滋养。'],
      3: ['皇帝象徵权威与结构，当前适合制定计划、设立界限或担起领导责任。', '注意避免过于强硬或控制，人际关系中多些弹性会更好。'],
      4: ['教皇代表传统与指引，当前适合寻求老师、长辈或有经验者的建议。', '如果感觉被规范束缚，记住你也拥有质疑和选择的权利。'],
      5: ['恋人象徵重大选择与伙伴关系，当前适合权衡利弊、做出重要决定。', '跟随内心的价值判断，无论选择什么都要为自己的决定负责。'],
      6: ['战车象徵决心与意志力，当前适合排除万难、向前推进，克服眼前的阻碍。', '过于激进可能适得其反，记得用智慧导航而非蛮力冲刺。'],
      7: ['力量象徵内在力量与勇气，当前适合以内在力量面对挑战，恐惧不是你真正的敌人。', '恐惧和不安是正常的，关键是带着信念坚持下去，你比自己以为的更强大。'],
      8: ['命运之轮象徵外在时机与运势流转，当前适合顺应变化、把握机遇。', '无论转到好或坏，都只是运势的一部分，保持谦逊和警觉。'],
      9: ['正义象徵公正、因果与真相，当前适合客观审视现状，承担应有的责任。', '做决定前多听听各方声音，真相终将浮出水面。'],
      10: ['吊人象徵暂停、等待与视角转换，当前适合停下来换一个角度看待问题。', '看似牺牲，实则是在积蓄力量，等待更好的时机。'],
      11: ['死神象徵结束、转变与重生，当前适合放下旧有的模式，拥抱新的开始。', '结束是痛苦的，但也是通往新生的必经之路。'],
      12: ['节制象徵平衡、调和与耐心，当前适合调整节奏，在两端之间找到平衡。', '不要走极端，无论是饮食、作息还是人际关系，中庸之道更稳健。'],
      13: ['恶魔象徵束缚、执念与物质，当前适合检视哪些是被真正需要的，哪些是沉溺。', '识别并打破那些无益的习惯或执念，你比自己以为的更自由。'],
      14: ['塔象徵突变、动荡与警醒，当前可能面临突如其来的变化或转折。', '这不是惩罚，而是提醒——在崩塌中重建更稳固的基础。'],
      15: ['星星象徵希望、疗愈与灵感，当前适合放松心情，向内寻找平静与方向。', '暴风雨已经过去，星光指引着你走向内心的应许之地。'],
      16: ['月亮象徵困惑、恐惧与潜意识，当前要警惕隐藏的危险和自我欺骗。', '信任但要核实，不要被模糊的情绪和表象牵着走。'],
      17: ['太阳象徵成功、快乐与活力，当前是好兆头，适合大步向前。', '享受这段高光时刻，但也要记得照亮身边的人。'],
      18: ['审判象徵觉醒、反省与重新开始，当前适合回顾过去，做出新的承诺。', '无论过去如何，此刻你都有机会重新定义自己。'],
      19: ['世界象徵完成、圆满与新循环，当前预示着一个阶段的圆满落幕。', '庆祝这段旅程的完成，带着智慧和喜悦准备迎接下一个循环。'],
    };
    const tips = majorAdvices[card.value] || [`${name} ${revNote}，${kwStr ? '关键词：' + kwStr : ''}，建议跟随直觉，顺势而为。`];
    return [`【${posLabel}】${name} ${revNote}：${tips[0]}`, tips[1] ? `　${tips[1]}` : null].filter(Boolean);
  }

  const suitAdvices = {
    wands: [
      '权杖能量与行动力相关，暗示你正站在一个需要勇气迈步的节点上。',
      '若有拖延或倦怠，问问自己：我在害怕什么？迈出第一步往往是最难的。',
      '适合开启新项目、换工作、表白或任何需要主动出击的事项。',
      '但注意：热情要用在正确的方向上，避免因冲动而付出代价。',
    ],
    cups: [
      '圣杯能量与情感、直觉相关，提醒你多关注内心的真实感受。',
      '在关系中，无论是与伴侣、家人还是朋友，沟通和倾听是关键。',
      '当前适合修复裂痕、表达爱意或投入创意艺术活动。',
      '但也要警惕过度沉溺于情绪或幻想，理性与感性同样重要。',
    ],
    swords: [
      '宝剑能量与思想、沟通、冲突相关，暗示当前需要清晰的思维。',
      '如果正在做决定，列出利弊清单，用理性分析来平衡直觉。',
      '沟通中注意措辞，避免无意间的言语伤害。',
      '也暗示可能面临冲突或困难，但正直面对比逃避更有益。',
    ],
    pentacles: [
      '星币能量与物质、工作、现实成果相关，提醒你关注实际层面。',
      '当前适合制定预算、规划职业、健身塑形或处理实际事务。',
      '成功来自于持续的小步积累，不要期待一夜之间的巨大改变。',
      '如果感到焦虑，回归最基本的事项，一步一步来。',
    ],
  };

  const base = suitAdvices[card.suit] || ['跟随直觉，顺势而为，把握当下。'];
  return [
    `【${posLabel}】${name}${revNote ? '（逆位）' : ''}，关键词：${kwStr}`,
    `${base[0]}`,
    base[1] ? `　${base[1]}` : null,
  ].filter(Boolean);
}

// ── 单卡展示组件 ────────────────────────────────────────────
function TarotCardDisplay({ card, reversed, label, index, revealed, animDelay, onCardClick }) {
  const style = getCardStyle(card);
  const suitInfo = CARD_SYMBOLS[card.suit] || CARD_SYMBOLS.major;
  const primarySrc = getCardImage(card);
  const [imgSrc, setImgSrc] = useState(primarySrc);
  const imgAttempt = useRef(0);

  useEffect(() => {
    setImgSrc(primarySrc);
    imgAttempt.current = 0;
  }, [primarySrc, card.id]);

  const onImgError = useCallback(() => {
    if (imgAttempt.current === 0) {
      imgAttempt.current = 1;
      setImgSrc(getCardImageHf(card));
    } else if (imgAttempt.current === 1) {
      imgAttempt.current = 2;
      setImgSrc(getCardImageHfDownload(card));
    }
  }, [card]);

  return (
    <div
      className={`tarot-card-wrap ${reversed ? 'reversed' : ''}`}
      style={{ animationDelay: `${animDelay}ms` }}
      onClick={() => onCardClick && onCardClick(card, reversed)}
    >
      {label && <div className="card-label">{label}</div>}
      <div className={`tarot-card ${revealed ? 'revealed' : ''}`}>
        <div className="card-back" style={{ borderColor: style.border }}>
          <div className="card-back-inner">
            <div className="back-pattern" />
            <div className="back-symbol" style={{ color: style.border }}>{suitInfo.symbol}</div>
          </div>
        </div>
        <div
          className="card-front"
          style={{ background: style.bg, borderColor: style.border, boxShadow: `0 0 20px ${style.glow}60` }}
        >
          <img
            src={imgSrc}
            alt={card.name}
            className={`card-img ${reversed ? 'img-reversed' : ''}`}
            loading="lazy"
            referrerPolicy="no-referrer"
            decoding="async"
            onError={onImgError}
          />
          <div className="card-name-overlay">
            <div className="card-name-cn" style={{ color: style.text }}>{card.name}</div>
            <div className="card-name-en" style={{ color: style.text + 'aa' }}>{card.nameEn}</div>
          </div>
          {reversed && (
            <div className="reversed-badge">逆位</div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── 牌面放大查看组件 ────────────────────────────────────────
function CardZoomOverlay({ card, reversed, onClose }) {
  const style = getCardStyle(card);
  const suitInfo = CARD_SYMBOLS[card.suit] || CARD_SYMBOLS.major;
  const [imgSrc, setImgSrc] = useState(getCardImage(card));

  const handleImgError = useCallback(() => {
    setImgSrc(prev => {
      if (prev === getCardImage(card)) return getCardImageHf(card);
      if (prev === getCardImageHf(card)) return getCardImageHfDownload(card);
      return prev;
    });
  }, [card]);

  return (
    <div className="card-zoom-overlay" onClick={onClose}>
      {/* 背景暗化层 */}
      <div className="card-zoom-bg" />

      {/* 旋转放大的牌 */}
      <div
        className="card-zoom-stage"
        onClick={e => e.stopPropagation()}
      >
        <div className="card-zoom-card" style={{ borderColor: style.border }}>
          <div className="card-zoom-inner" style={{ background: style.bg, borderColor: style.border, boxShadow: `0 0 60px ${style.glow}80` }}>
            <img
              src={imgSrc}
              alt={card.name}
              className={`card-zoom-img ${reversed ? 'img-reversed' : ''}`}
              referrerPolicy="no-referrer"
              decoding="async"
              onError={handleImgError}
            />
            <div className="card-zoom-name-overlay">
              <div className="card-zoom-name-cn" style={{ color: style.text }}>{card.name}</div>
              <div className="card-zoom-name-en" style={{ color: style.text + 'bb' }}>{card.nameEn}</div>
            </div>
            {reversed && <div className="card-zoom-reversed-badge">逆位</div>}
          </div>
        </div>
      </div>

      {/* 关闭提示 */}
      <div className="card-zoom-hint">点击背景关闭</div>
    </div>
  );
}

// ── 解读内容 ────────────────────────────────────────────────
function InterpretationPanel({ card, reversed }) {
  const kws = reversed ? card.keywords.reversed : card.keywords.upright;
  const desc = reversed ? card.desc.reversed : card.desc.upright;
  const style = getCardStyle(card);

  return (
    <div className="interpretation-panel" style={{ borderColor: style.border + '40', boxShadow: `0 4px 24px ${style.glow}20` }}>
      <div className="interp-header">
        <div className="interp-card-name">
          <span style={{ color: style.text }}>{card.name}</span>
          {reversed && <span className="reversed-tag" style={{ borderColor: style.border, color: style.text }}>逆位</span>}
        </div>
        <div className="interp-type-tag">
          {card.suit === 'major' ? '大阿尔卡纳' : `${card.suit === 'wands' ? '权杖' : card.suit === 'cups' ? '圣杯' : card.suit === 'swords' ? '宝剑' : '星币'} ${card.value}`}
        </div>
      </div>

      <div className="interp-section">
        <div className="interp-section-title">关键词</div>
        <div className="keyword-list">
          {kws.map((kw, i) => (
            <span key={i} className="keyword-tag" style={{ borderColor: style.border + '80', color: style.text }}>
              {kw}
            </span>
          ))}
        </div>
      </div>

      <div className="interp-section">
        <div className="interp-section-title">解读</div>
        <p className="interp-desc">{desc}</p>
      </div>
    </div>
  );
}

// ── 主组件 ──────────────────────────────────────────────────
export default function TarotApp() {
  const [step, setStep] = useState('select'); // 'select' | 'question' | 'drawing' | 'result'
  const [selectedSpread, setSelectedSpread] = useState(null);
  const [question, setQuestion] = useState('');
  const [cards, setCards] = useState([]);
  const [reversedFlags, setReversedFlags] = useState([]);
  const [revealedCount, setRevealedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [zoomedCard, setZoomedCard] = useState(null);
  const [zoomedReversed, setZoomedReversed] = useState(false);

  const startReading = useCallback((spread) => {
    setSelectedSpread(spread);
    setStep('question');
    setCards([]);
    setReversedFlags([]);
    setRevealedCount(0);
  }, []);

  const performDraw = useCallback(async () => {
    if (!selectedSpread) return;
    setStep('drawing');
    setIsLoading(true);
    const n = selectedSpread.positions;

    // 从 RANDOM.ORG 获取真随机种子
    const seed = await fetchRandomSeed();
    const shuffled = seededShuffle(ALL_CARDS, seed);
    const drawn = shuffled.slice(0, n);
    const revFlags = drawn.map(() => {
      // 用随机数种子决定正逆位（50%概率）
      seed; // just reference to trigger
      return Math.random() < 0.3; // ~30% 概率逆位
    });

    setCards(drawn);
    setReversedFlags(revFlags);
    setIsLoading(false);

    // 逐张翻牌动画
    for (let i = 0; i < n; i++) {
      await new Promise(r => setTimeout(r, 600));
      setRevealedCount(i + 1);
    }
    await new Promise(r => setTimeout(r, 600));
    setStep('result');
  }, [selectedSpread]);

  const resetReading = () => {
    setStep('select');
    setCards([]);
    setReversedFlags([]);
    setRevealedCount(0);
    setQuestion('');
    setZoomedCard(null);
  };

  const addToHistory = () => {
    if (!cards.length) return;
    const entry = {
      spread: selectedSpread,
      cards: cards.map((c, i) => ({ ...c, reversed: reversedFlags[i] })),
      question,
      time: new Date().toLocaleString('zh-CN'),
    };
    setHistory(prev => [entry, ...prev].slice(0, 10));
  };

  const yesNo = selectedSpread?.id === 'yesno' && cards[0] ? getYesNo(cards[0], reversedFlags[0]) : null;

  return (
    <div className="tarot-app">
      {/* 顶部 Tab bar */}
      <header className="tarot-header page-module-header">
        <div className="page-header-icon" aria-hidden>
          <MoonIcon />
        </div>
        <h1 className="page-module-title">塔罗占卜</h1>
        <p className="app-subtitle">78张牌·静心默念问题·抽取</p>
      </header>

      {/* ── Step 1: 选择牌阵 ── */}
      {step === 'select' && (
        <div className="spread-section">
          <div className="spread-section-title">选择占卜方式</div>
          <div className="spread-grid">
            {SPREADS.map(spread => (
              <button
                key={spread.id}
                className="spread-card"
                onClick={() => startReading(spread)}
              >
                <div className="spread-icon">{spread.icon}</div>
                <div className="spread-name">{spread.name}</div>
                <div className="spread-name-en">{spread.nameEn}</div>
                <div className="spread-desc">{spread.desc}</div>
                <div className="spread-positions">
                  {spread.positions} {spread.positions === 1 ? '张牌' : '张牌'}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Step 2: 输入问题 ── */}
      {step === 'question' && selectedSpread && (
        <div className="question-section">
          <button type="button" className="tarot-return-pill-half" onClick={resetReading}>
            ← 返回
          </button>
          <div className="spread-info-card spread-info-card--tall">
            <div className="spread-info-icon">{selectedSpread.icon}</div>
            <div className="spread-info-name">{selectedSpread.name}</div>
            <div className="spread-info-desc">{selectedSpread.desc}</div>
          </div>
          <button type="button" className="draw-btn" onClick={performDraw}>
            开始抽牌
          </button>
        </div>
      )}

      {/* ── Step 3: 抽牌中（loading） ── */}
      {step === 'drawing' && (
        <div className="drawing-section">
          <div className="drawing-cards-preview">
            {cards.map((card, i) => (
              <div key={i} className="drawing-card-slot" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="card-back drawing-card-back">
                  <div className="back-pattern" />
                  <div className="back-symbol">☆</div>
                </div>
              </div>
            ))}
          </div>
          <p className="drawing-text">正在洗牌抽取...</p>
          <p className="drawing-subtext">真随机数生成中</p>
        </div>
      )}

      {/* ── Step 4: 结果展示 ── */}
      {step === 'result' && (
        <div className="result-section">
          <button type="button" className="tarot-return-pill-half" onClick={resetReading}>
            ← 返回
          </button>

          {/* 是/否特殊展示 */}
          {yesNo && (
            <div className="yesno-result">
              <div className="yesno-icon" style={{ color: yesNo.color }}>{yesNo.icon}</div>
              <div className="yesno-answer" style={{ color: yesNo.color }}>{yesNo.answer}</div>
              <div className="yesno-reason">{yesNo.reason}</div>
              <div className="yesno-card-mini">
                {cards[0] && (
                  <TarotCardDisplay
                    card={cards[0]}
                    reversed={reversedFlags[0]}
                    revealed={true}
                    animDelay={0}
                    onCardClick={(card, rev) => { setZoomedCard(card); setZoomedReversed(rev); }}
                  />
                )}
              </div>
            </div>
          )}

          {/* 牌阵展示 */}
          {!yesNo && (
            <div className="spread-layout">
              {/* 根据牌阵不同布局 */}
              {selectedSpread?.id === 'single' && (
                <div className="layout-single">
                  {cards[0] && (
                    <TarotCardDisplay
                      card={cards[0]}
                      reversed={reversedFlags[0]}
                      label={selectedSpread.labels[0]}
                      revealed={true}
                      animDelay={0}
                      onCardClick={(card, rev) => { setZoomedCard(card); setZoomedReversed(rev); }}
                    />
                  )}
                </div>
              )}

              {selectedSpread?.id === 'three' && (
                <div className="layout-three">
                  {cards.map((card, i) => (
                    <TarotCardDisplay
                      key={i}
                      card={card}
                      reversed={reversedFlags[i]}
                      label={selectedSpread.labels[i]}
                      revealed={true}
                      animDelay={i * 200}
                      onCardClick={(c, rev) => { setZoomedCard(c); setZoomedReversed(rev); }}
                    />
                  ))}
                </div>
              )}

              {selectedSpread?.id === 'fivespread' && (
                <div className="layout-five">
                  {/* 5个位置：1=顶中，2=左，3=右，4=底左，5=底右 */}
                  {cards[0] && (
                    <div className="five-pos top-center">
                      <TarotCardDisplay card={cards[0]} reversed={reversedFlags[0]} label={selectedSpread.labels[0]} revealed={true} animDelay={0} onCardClick={(card, rev) => { setZoomedCard(card); setZoomedReversed(rev); }} />
                    </div>
                  )}
                  <div className="five-row">
                    {cards[1] && <TarotCardDisplay card={cards[1]} reversed={reversedFlags[1]} label={selectedSpread.labels[1]} revealed={true} animDelay={150} onCardClick={(card, rev) => { setZoomedCard(card); setZoomedReversed(rev); }} />}
                    {cards[2] && <TarotCardDisplay card={cards[2]} reversed={reversedFlags[2]} label={selectedSpread.labels[2]} revealed={true} animDelay={300} onCardClick={(card, rev) => { setZoomedCard(card); setZoomedReversed(rev); }} />}
                    {cards[3] && <TarotCardDisplay card={cards[3]} reversed={reversedFlags[3]} label={selectedSpread.labels[3]} revealed={true} animDelay={450} onCardClick={(card, rev) => { setZoomedCard(card); setZoomedReversed(rev); }} />}
                  </div>
                  {cards[4] && (
                    <div className="five-pos bottom-center">
                      <TarotCardDisplay card={cards[4]} reversed={reversedFlags[4]} label={selectedSpread.labels[4]} revealed={true} animDelay={600} onCardClick={(card, rev) => { setZoomedCard(card); setZoomedReversed(rev); }} />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* 问题回顾 */}
          {question && (
            <div className="question-reminder">
              <span className="question-reminder-label">你的问题：</span>
              <span className="question-reminder-text">{question}</span>
            </div>
          )}

          {/* 逐张解读 */}
          <div className="interpretations">
            {cards.map((card, i) => (
              <InterpretationPanel
                key={i}
                card={card}
                reversed={reversedFlags[i]}
              />
            ))}
          </div>

          {/* 给你的建议 */}
          <div className="tarot-advice-section">
            <div className="tarot-advice-title">给你的建议</div>
            {cards.map((card, i) => (
              <div key={i} className="tarot-advice-item">
                {(buildAdvice(card, reversedFlags[i], selectedSpread?.labels?.[i], i) || []).map((line, j) => (
                  <p key={j} className="tarot-advice-line">{line}</p>
                ))}
              </div>
            ))}
          </div>

          <button type="button" className="draw-btn again-btn" onClick={() => { addToHistory(); performDraw(); }}>
            再次占卜
          </button>
          <button type="button" className="draw-btn tarot-return-pill-full" onClick={resetReading}>
            返回
          </button>
        </div>
      )}

      {/* 历史记录 */}
      {history.length > 0 && (
        <div className="tarot-history">
          <div className="history-title">最近占卜</div>
          {history.map((h, i) => (
            <div key={i} className="history-item">
              <div className="history-meta">
                <span className="history-spread">{h.spread.name}</span>
                <span className="history-time">{h.time}</span>
              </div>
              <div className="history-cards">
                {h.cards.map((c, j) => (
                  <span key={j} className={`history-card-chip ${c.reversed ? 'reversed' : ''}`} style={{ borderColor: getCardStyle(c).border + '80', color: getCardStyle(c).text }}>
                    {c.name}{c.reversed ? '逆' : ''}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <FaqAccordion items={TAROT_FAQ_ITEMS} />
      <div className="page-bottom-disclaimer">@Kenzie的神秘学studio · @kenzie_thxg</div>

      {/* 牌面放大浮层 */}
      {zoomedCard && (
        <CardZoomOverlay
          card={zoomedCard}
          reversed={zoomedReversed}
          onClose={() => setZoomedCard(null)}
        />
      )}
    </div>
  );
}
