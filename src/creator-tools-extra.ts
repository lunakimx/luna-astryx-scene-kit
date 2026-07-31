type ExtraTool = {
  name: string;
  note: string;
  url: string;
  badge: string;
};

type ExtraToolGroup = {
  eyebrow: string;
  title: string;
  description: string;
  tools: ExtraTool[];
};

const STYLE_ID = 'creator-tools-extra-style';
const PANEL_ID = 'luna-signal-tools-root';

const EXTRA_TOOL_GROUPS: ExtraToolGroup[] = [
  {
    eyebrow: 'DESIGN BASICS',
    title: '디자인 기초',
    description: '타이포, 컬러, 이펙트, 국내 앱 UI를 빠르게 확인합니다.',
    tools: [
      {
        name: 'Kern',
        note: '자간이 어색한 지점과 조정 폭을 시각적으로 확인',
        url: 'https://kern.kineticstudio.com/',
        badge: 'TYPO',
      },
      {
        name: 'Coolors',
        note: '인기 팔레트, 대비 검사, 실제 디자인 미리보기',
        url: 'https://coolors.co/',
        badge: 'COLOR',
      },
      {
        name: 'Effect.app',
        note: '이미지와 영상에 실시간 이펙트를 층층이 적용',
        url: 'https://effect.app/',
        badge: 'EFFECT',
      },
      {
        name: 'WWIT',
        note: '국내 앱의 온보딩, 결제, 검색 등 실제 UI 플로우 참고',
        url: 'https://wwit.design/',
        badge: 'KOREAN UI',
      },
    ],
  },
  {
    eyebrow: 'AI VIDEO & CONTEST',
    title: 'AI 영상 · 공모전',
    description: 'AI 영상 수상작을 보고 진행 중인 공모전을 찾아봅니다.',
    tools: [
      {
        name: 'AI-Kive',
        note: 'AI 영상, 영화제 수상작, 공모전과 창작자 작품 모음',
        url: 'https://aikive.com/',
        badge: 'AI VIDEO',
      },
      {
        name: 'Crowlly',
        note: '접수 중인 AI 콘텐츠 공모전을 한곳에서 탐색',
        url: 'https://crowlly.xyz/',
        badge: 'CONTEST',
      },
    ],
  },
  {
    eyebrow: 'INSPIRATION LIBRARY',
    title: '영감 모음',
    description: '웹, 인터랙션, 모션 디자인 레퍼런스를 저장하고 둘러봅니다.',
    tools: [
      {
        name: 'Cosmos',
        note: '이미지와 아이디어를 발견하고 컬렉션으로 정리',
        url: 'https://www.cosmos.so/',
        badge: 'CURATION',
      },
      {
        name: 'Design Spells',
        note: '앱과 웹에서 발견한 작은 인터랙션 디테일 모음',
        url: 'https://www.designspells.com/',
        badge: 'INTERACTION',
      },
      {
        name: 'MaxiBestOf',
        note: '웹사이트 디자인, 섹션 구성, 폰트 레퍼런스 피드',
        url: 'https://maxibestof.one/',
        badge: 'WEB DESIGN',
      },
      {
        name: 'Motion Design Awards',
        note: '모션 디자인 수상작, 후보작, 스튜디오 레퍼런스',
        url: 'https://www.motiondesignawards.com/',
        badge: 'MOTION',
      },
    ],
  },
];

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function ensureStyles() {
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    #${PANEL_ID} .creatorToolGroup{margin-top:30px;padding-top:26px;border-top:1px solid #e8e4f1}
    #${PANEL_ID} .creatorToolGroup:first-of-type{margin-top:22px}
    #${PANEL_ID} .creatorToolGroupHead{display:flex;justify-content:space-between;gap:18px;align-items:end;margin-bottom:14px}
    #${PANEL_ID} .creatorToolGroupHead small{display:block;color:#7259b4;font-size:10px;font-weight:950;letter-spacing:.11em}
    #${PANEL_ID} .creatorToolGroupHead h3{margin:6px 0 0;font-size:22px;letter-spacing:-.035em}
    #${PANEL_ID} .creatorToolGroupHead p{max-width:520px;margin:0;color:#756e80;font-size:13px;line-height:1.55;text-align:right}
    #${PANEL_ID} .signalToolsExisting{margin-top:14px}
    #${PANEL_ID} .signalTool{position:relative;min-height:132px;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}
    #${PANEL_ID} .signalTool:hover{transform:translateY(-3px);border-color:#cfc5ea;box-shadow:0 14px 30px rgba(56,42,95,.11)}
    #${PANEL_ID} .signalTool::after{content:'↗';position:absolute;top:14px;right:15px;color:#a49ab9;font-weight:900}
    @media(max-width:700px){
      #${PANEL_ID} .creatorToolGroup{margin-top:24px;padding-top:22px}
      #${PANEL_ID} .creatorToolGroupHead{display:block}
      #${PANEL_ID} .creatorToolGroupHead p{margin-top:7px;text-align:left}
      #${PANEL_ID} .signalTool{min-height:auto}
    }
    @media(prefers-reduced-motion:reduce){#${PANEL_ID} .signalTool{transition:none}#${PANEL_ID} .signalTool:hover{transform:none}}
  `;
  document.head.appendChild(style);
}

function toolCard(tool: ExtraTool) {
  return `<a class="signalTool" href="${escapeHtml(tool.url)}" target="_blank" rel="noopener noreferrer"><small>${escapeHtml(tool.badge)}</small><strong>${escapeHtml(tool.name)}</strong><p>${escapeHtml(tool.note)}</p></a>`;
}

function groupMarkup(group: ExtraToolGroup) {
  return `<section class="creatorToolGroup"><header class="creatorToolGroupHead"><div><small>${escapeHtml(group.eyebrow)}</small><h3>${escapeHtml(group.title)}</h3></div><p>${escapeHtml(group.description)}</p></header><div class="signalTools">${group.tools.map(toolCard).join('')}</div></section>`;
}

function mountExtraTools() {
  const panel = document.getElementById(PANEL_ID);
  const existingGrid = panel?.querySelector<HTMLElement>('.signalTools');
  if (!panel || !existingGrid) return false;
  if (panel.dataset.extraToolsReady === '1') return true;

  panel.dataset.extraToolsReady = '1';
  existingGrid.classList.add('signalToolsExisting');

  const existingHeading = document.createElement('header');
  existingHeading.className = 'creatorToolGroupHead';
  existingHeading.innerHTML = '<div><small>AI PRODUCTION</small><h3>AI 제작 · 리서치 · 배포</h3></div><p>기존 제작 도구와 개발 도구를 그대로 모아뒀어요.</p>';
  existingGrid.before(existingHeading);

  existingGrid.insertAdjacentHTML('afterend', EXTRA_TOOL_GROUPS.map(groupMarkup).join(''));
  ensureStyles();
  return true;
}

function start() {
  if (mountExtraTools()) return;

  const observer = new MutationObserver(() => {
    if (!mountExtraTools()) return;
    observer.disconnect();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start, { once: true });
} else {
  start();
}
