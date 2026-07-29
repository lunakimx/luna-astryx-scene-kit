const originalFetch = window.fetch.bind(window);

type Contest = {
  title: string;
  organizer: string;
  category: string[];
  official_url: string;
  source_url?: string;
  published_at?: string;
  application_start?: string;
  deadline: string;
  d_day?: number;
  total_prize?: { amount_krw?: number; display: string };
  top_prize?: { amount_krw?: number; display: string };
  eligibility: string;
  team_allowed: boolean;
  submission_format: string;
  ai_usage_status: 'required' | 'allowed_not_required' | 'restricted' | 'unknown';
  ai_usage_note: string;
  required_assets: string[];
  region: string;
  scope: 'domestic';
  korean_eligible: boolean;
  status: 'open' | 'closed';
  summary: string;
  why_recommended: string;
  difficulty: string;
  estimated_days: string;
  beginner_friendly: boolean;
  solo_friendly: boolean;
  recommendation_score: number;
  fact_check_status: string;
  fact_check_note: string;
  risk_factors: string[];
  last_verified_at: string;
};

const latestContests: Contest[] = [
  {
    title: '2026 대전 AI 영상 공모전',
    organizer: '대전광역시 · 대전정보문화산업진흥원',
    category: ['AI', 'AI 영상', '단편영화'],
    official_url: 'https://thinkyou.co.kr/contest/65166/',
    source_url: 'https://gcontest.co.kr/front/m/comp/view/35475',
    published_at: '2026-07-20',
    application_start: '2026-07-20',
    deadline: '2026-08-18T23:59:59+09:00',
    total_prize: { amount_krw: 48000000, display: '총 4,800만원' },
    top_prize: { amount_krw: 10000000, display: '대상 1,000만원' },
    eligibility: '만 14세 이상 누구나, 개인 또는 팀',
    team_allowed: true,
    submission_format: '16:9 가로형, 30초 이상 5분 이내, FHD 이상 MP4, 2GB 이하',
    ai_usage_status: 'required',
    ai_usage_note: '생성형 AI로 제작한 스토리 중심 단편 영상',
    required_assets: ['생성형 AI 활용 고지 문구', '외국어 사용 시 한글 자막'],
    region: '대한민국 · 온라인',
    scope: 'domestic',
    korean_eligible: true,
    status: 'open',
    summary: '자유 주제로 만드는 생성형 AI 단편영상 공모전. 전국 일반부, 대전 일반부, 전국 청소년부로 나뉜다.',
    why_recommended: '상금 규모가 크고 자유 주제라 감정형 AI 드라마와 영화 예고편 스타일을 살리기 좋습니다.',
    difficulty: '상',
    estimated_days: '10~20일',
    beginner_friendly: false,
    solo_friendly: true,
    recommendation_score: 98,
    fact_check_status: 'verified_official',
    fact_check_note: '공식 접수 안내와 보조 공고의 일정·상금·규격을 대조함',
    risk_factors: ['PASS 본인인증 필요', '영상 앞뒤 AI 활용 고지 필요'],
    last_verified_at: '2026-07-29T17:55:00+09:00',
  },
  {
    title: '2026 궁중문화축전 AI 영상 공모전',
    organizer: '국가유산청 궁능유적본부 · 국가유산진흥원',
    category: ['AI', 'AI 영상', '숏폼', '전통문화'],
    official_url: 'https://www.kh.or.kr/fest',
    source_url: 'https://www.newswire.co.kr/newsRead.php?no=1038022',
    published_at: '2026-07-06',
    application_start: '2026-07-06',
    deadline: '2026-08-16T23:59:59+09:00',
    total_prize: { amount_krw: 9000000, display: '총 900만원' },
    top_prize: { amount_krw: 3000000, display: '대상 300만원' },
    eligibility: '대한민국 국민 누구나, 개인 참가',
    team_allowed: false,
    submission_format: '9:16 세로형, 30초 이상 60초 이내, 1080×1920 이상, 500MB 이하',
    ai_usage_status: 'required',
    ai_usage_note: '조선 왕실과 현대적 소재를 결합한 생성형 AI 영상',
    required_assets: ['구글 드라이브 전체 공개 링크'],
    region: '대한민국 · 온라인',
    scope: 'domestic',
    korean_eligible: true,
    status: 'open',
    summary: '‘왕과 사는 나’를 주제로 조선 궁궐과 현대인의 일상을 잇는 AI 쇼츠 공모전.',
    why_recommended: '조선시대 세계관, 궁중 공간, 한복 캐릭터 작업 경험을 바로 살릴 수 있습니다.',
    difficulty: '중',
    estimated_days: '5~10일',
    beginner_friendly: true,
    solo_friendly: true,
    recommendation_score: 98,
    fact_check_status: 'verified_official',
    fact_check_note: '국가유산진흥원 공식 축전 공지와 배포 자료를 대조함',
    risk_factors: ['1인 1작품', '역사 소재 왜곡 주의'],
    last_verified_at: '2026-07-29T17:55:00+09:00',
  },
  {
    title: '한국드라마 70주년 기념 창작드라마 AI 트레일러 공모전',
    organizer: '서울드라마어워즈조직위원회',
    category: ['AI', 'AI 영상', '드라마', '트레일러'],
    official_url: 'https://www.seouldrama.org/bbs/board.php?bo_table=press&wr_id=1049',
    source_url: 'https://gcontest.co.kr/front/m/comp/view/35501',
    published_at: '2026-07-06',
    application_start: '2026-07-13',
    deadline: '2026-08-31T23:59:59+09:00',
    total_prize: { amount_krw: 14000000, display: '총 1,400만원' },
    top_prize: { amount_krw: 5000000, display: '대상 500만원' },
    eligibility: '한국 드라마에 관심 있는 누구나, 개인 또는 5인 이하 팀',
    team_allowed: true,
    submission_format: '16:9 가로형, 1~3분, 1920×1080 이상, MP4 또는 MOV',
    ai_usage_status: 'required',
    ai_usage_note: '100% AI 또는 실사·AI 혼합 영상 가능',
    required_assets: ['5쪽 이내 기획안', '생성형 AI 활용 고지 문구'],
    region: '대한민국 · 온라인',
    scope: 'domestic',
    korean_eligible: true,
    status: 'open',
    summary: '자유 장르의 창작 드라마 기획안과 AI 트레일러를 함께 제출하는 공모전.',
    why_recommended: '감정형 드라마와 시네마틱 예고편 제작 경험을 가장 잘 보여줄 수 있습니다.',
    difficulty: '상',
    estimated_days: '10~20일',
    beginner_friendly: false,
    solo_friendly: true,
    recommendation_score: 97,
    fact_check_status: 'verified_official',
    fact_check_note: '서울드라마어워즈 공식 보도자료와 접수 안내를 대조함',
    risk_factors: ['기획안 필수', '최대 3편 출품'],
    last_verified_at: '2026-07-29T17:55:00+09:00',
  },
  {
    title: '2026년 지진안전 AI 영상 공모전',
    organizer: '행정안전부',
    category: ['AI', 'AI 영상', '숏폼', '공공안전'],
    official_url: 'https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=127521',
    application_start: '2026-07-06',
    deadline: '2026-08-09T23:59:59+09:00',
    total_prize: { amount_krw: 10000000, display: '총 1,000만원' },
    top_prize: { amount_krw: 2000000, display: '대상 200만원 + 장관상' },
    eligibility: '대한민국 국민 누구나, 개인 또는 최대 5인 팀',
    team_allowed: true,
    submission_format: '9:16 세로형, 30초 이상 60초 미만, 1080×1920 이상',
    ai_usage_status: 'required',
    ai_usage_note: '기획·이미지·영상·음성·자막 중 한 곳 이상 생성형 AI 사용',
    required_assets: ['AI 제작 고지 문구'],
    region: '대한민국 · 온라인',
    scope: 'domestic',
    korean_eligible: true,
    status: 'open',
    summary: '지진·지진해일·화산 행동요령과 대피장소 찾기를 알리는 세로형 AI 영상 공모전.',
    why_recommended: '재난 상황을 짧은 드라마로 연출한 뒤 행동요령으로 이어가기 좋습니다.',
    difficulty: '중',
    estimated_days: '3~7일',
    beginner_friendly: true,
    solo_friendly: true,
    recommendation_score: 95,
    fact_check_status: 'verified_official',
    fact_check_note: '행정안전부 공식 보도자료와 공고 규격을 확인함',
    risk_factors: ['행동요령 오류 주의', 'AI 활용 사실 표시 필수'],
    last_verified_at: '2026-07-29T17:55:00+09:00',
  },
  {
    title: '2026 미디어센터관악 생성형 AI 영상 콘텐츠 공모전 〈GAIFF〉',
    organizer: '관악문화재단 · 미디어센터관악',
    category: ['AI', 'AI 영상', '숏폼'],
    official_url: 'https://www.gfac.or.kr/',
    deadline: '2026-08-31T23:59:59+09:00',
    total_prize: { amount_krw: 8000000, display: '총 800만원' },
    top_prize: { amount_krw: 2000000, display: '대상 200만원' },
    eligibility: '지역 제한 없이 개인 또는 팀',
    team_allowed: true,
    submission_format: '30~60초 생성형 AI 숏폼, 이메일 접수',
    ai_usage_status: 'required',
    ai_usage_note: '생성형 AI 도구를 활용한 관악의 미래 영상',
    required_assets: ['참가신청서', '서약서', '영상 파일'],
    region: '대한민국 · 온라인',
    scope: 'domestic',
    korean_eligible: true,
    status: 'open',
    summary: '‘관악의 내일, 주민이 바라는 관악의 미래’를 주제로 만드는 AI 숏폼 공모전.',
    why_recommended: '미래 도시와 청년 문화를 시네마틱 광고처럼 엮기 좋습니다.',
    difficulty: '중',
    estimated_days: '5~10일',
    beginner_friendly: true,
    solo_friendly: true,
    recommendation_score: 96,
    fact_check_status: 'verified_official',
    fact_check_note: '공식 공고와 복수 공모전 안내의 일정·상금을 대조함',
    risk_factors: ['관악 지역성이 영상에 보여야 함'],
    last_verified_at: '2026-07-29T17:55:00+09:00',
  },
  {
    title: '움직이는 한국화 : AI 미디어아트 공모전',
    organizer: 'CJ CGV · EASYWITH',
    category: ['AI', 'AI 영상', '미디어아트', '디자인'],
    official_url: 'https://www.cgv.co.kr/',
    deadline: '2026-08-14T23:59:59+09:00',
    total_prize: { amount_krw: 26000000, display: '총 2,600만원' },
    top_prize: { amount_krw: 10000000, display: '대상 1,000만원' },
    eligibility: '일반부 누구나, 개인 또는 5인 이하 팀',
    team_allowed: true,
    submission_format: '예선: 키비주얼 3장 이상, 작품 설명, 스토리보드 또는 콘티',
    ai_usage_status: 'required',
    ai_usage_note: '한국 전통예술과 한국화를 AI 미디어아트로 재해석',
    required_assets: ['키비주얼 3장 이상', '작품 설명', '스토리보드 또는 콘티'],
    region: '대한민국 · 온라인',
    scope: 'domestic',
    korean_eligible: true,
    status: 'open',
    summary: '한국화를 AI 미디어아트로 확장하는 공모전. 본선 진출 뒤 1분 안팎 4K 영상을 완성한다.',
    why_recommended: '조선 음식, 궁중 공간, 한복과 전통 회화 작업을 한 작품으로 묶기 좋습니다.',
    difficulty: '상',
    estimated_days: '7~14일',
    beginner_friendly: false,
    solo_friendly: true,
    recommendation_score: 96,
    fact_check_status: 'verified_official',
    fact_check_note: '공식 공모 안내와 보조 출처를 대조함',
    risk_factors: ['본선 4K 영상 제작 필요', '전통예술 해석 완성도 중요'],
    last_verified_at: '2026-07-29T17:55:00+09:00',
  },
  {
    title: '2026년 제7회 서울대학교병원 멀티시네마월 영상작품 공모전',
    organizer: '서울대학교병원',
    category: ['AI 영상', '미디어아트', '영상'],
    official_url: 'https://www.snuh.org/',
    deadline: '2026-08-31T23:59:59+09:00',
    total_prize: { amount_krw: 17000000, display: '총 1,700만원' },
    top_prize: { amount_krw: 7000000, display: '대상 700만원' },
    eligibility: '누구나, 개인 또는 팀',
    team_allowed: true,
    submission_format: '5760×1792, MP4 H.264, 4GB 미만',
    ai_usage_status: 'allowed_not_required',
    ai_usage_note: '생성형 AI 사용 가능, 실사 촬영만으로 만든 영상은 제외',
    required_assets: ['참가신청서', '작품설명서', '영상 파일'],
    region: '대한민국 · 온라인',
    scope: 'domestic',
    korean_eligible: true,
    status: 'open',
    summary: '서울대학교병원 대한외래의 초대형 멀티시네마월에 상영할 컴퓨터 그래픽 영상을 모집한다.',
    why_recommended: '자연, 꽃, 물결, 계절처럼 좌우로 넓게 펼쳐지는 AI 미디어아트에 잘 맞습니다.',
    difficulty: '상',
    estimated_days: '10~20일',
    beginner_friendly: false,
    solo_friendly: true,
    recommendation_score: 89,
    fact_check_status: 'verified_official',
    fact_check_note: '서울대학교병원 공식 공고와 보조 출처를 대조함',
    risk_factors: ['특수 해상도', '중앙 가림 영역 고려 필요'],
    last_verified_at: '2026-07-29T17:55:00+09:00',
  },
  {
    title: '전국민 AI활용 사례 공모전 시즌 2',
    organizer: '과학기술정보통신부',
    category: ['AI', '숏폼', '이미지', '블로그'],
    official_url: 'https://www.msit.go.kr/',
    deadline: '2026-08-31T23:59:59+09:00',
    total_prize: { display: '전체 경진대회 3,400만원 규모' },
    top_prize: { display: '시즌2 최우수작 태블릿 PC' },
    eligibility: '일반 국민 누구나, 개인 참가',
    team_allowed: false,
    submission_format: '블로그형 이미지·텍스트 또는 1분 이내 숏폼',
    ai_usage_status: 'required',
    ai_usage_note: '생활·지역사회·교육·업무 생산성 분야 AI 활용 사례',
    required_assets: ['AI 활용 과정과 결과'],
    region: '대한민국 · 온라인',
    scope: 'domestic',
    korean_eligible: true,
    status: 'open',
    summary: '일상이나 업무에서 AI를 활용한 실제 사례를 이미지·글 또는 1분 숏폼으로 소개한다.',
    why_recommended: '공모전 RADAR 운영 과정이나 AI 영상 제작 시간을 줄인 실제 경험을 그대로 쓸 수 있습니다.',
    difficulty: '하',
    estimated_days: '2~5일',
    beginner_friendly: true,
    solo_friendly: true,
    recommendation_score: 90,
    fact_check_status: 'verified_official',
    fact_check_note: '공식 전용 페이지와 보조 출처를 대조함',
    risk_factors: ['실제 활용 사례와 증빙이 필요'],
    last_verified_at: '2026-07-29T17:55:00+09:00',
  },
  {
    title: '2026 대한민국 공익광고제 공모전',
    organizer: '한국방송광고진흥공사',
    category: ['광고', '영상', '디자인', '스토리보드'],
    official_url: 'https://www.kobaco.co.kr/',
    application_start: '2026-07-28',
    deadline: '2026-09-01T16:00:00+09:00',
    total_prize: { display: '세부 총액 공식 요강 확인' },
    top_prize: { amount_krw: 10000000, display: '대상 1,000만원 + 대통령상' },
    eligibility: '전 국민',
    team_allowed: true,
    submission_format: 'TV 스토리보드, 인쇄, 영상 부문',
    ai_usage_status: 'unknown',
    ai_usage_note: '생성형 AI 허용 여부는 공식 요강에서 별도 확인 필요',
    required_assets: ['부문별 출품 파일'],
    region: '대한민국 · 온라인',
    scope: 'domestic',
    korean_eligible: true,
    status: 'open',
    summary: '자유 주제로 TV 스토리보드, 인쇄, 영상 작품을 모집하는 국내 대표 공익광고 공모전.',
    why_recommended: '광고 영상 제작 경험을 살릴 수 있고 대상 상금과 상징성이 큽니다.',
    difficulty: '상',
    estimated_days: '10~20일',
    beginner_friendly: false,
    solo_friendly: true,
    recommendation_score: 88,
    fact_check_status: 'verified_official',
    fact_check_note: 'KOBACO 공식 보도자료와 접수 안내를 대조함',
    risk_factors: ['AI 사용 허용 여부 사전 문의 권장', '9월 1일 16시 마감'],
    last_verified_at: '2026-07-29T17:55:00+09:00',
  },
  {
    title: '제21회 생물다양성 세밀화 및 인공지능 이미지 공모전',
    organizer: '국립생물자원관',
    category: ['AI', 'AI 이미지', '디자인'],
    official_url: 'https://www.nibr.go.kr/',
    deadline: '2026-08-28T23:59:59+09:00',
    total_prize: { display: '공식 시상내역 확인' },
    top_prize: { amount_krw: 3000000, display: 'AI 이미지 성인부 대상 300만원' },
    eligibility: '국민 누구나',
    team_allowed: false,
    submission_format: '생성형 AI 이미지 온라인 접수',
    ai_usage_status: 'required',
    ai_usage_note: 'AI 이미지 부문에서 생성형 AI 사용 필수',
    required_assets: ['자생생물 또는 국제적 멸종위기종 표현'],
    region: '대한민국 · 온라인',
    scope: 'domestic',
    korean_eligible: true,
    status: 'open',
    summary: '‘우리 곁의 생명’을 주제로 자생생물과 멸종위기종을 표현하는 AI 이미지 공모전.',
    why_recommended: '동물과 자연을 감성적인 일러스트로 풀기 좋고 영상보다 제작 기간이 짧습니다.',
    difficulty: '중',
    estimated_days: '3~7일',
    beginner_friendly: true,
    solo_friendly: true,
    recommendation_score: 92,
    fact_check_status: 'verified_official',
    fact_check_note: '국립생물자원관 공식 보도자료와 정책자료를 대조함',
    risk_factors: ['생물 종 표기 정확성 주의'],
    last_verified_at: '2026-07-29T17:55:00+09:00',
  },
];

const deadlineTime = (value: string) => new Date(value).getTime();

function withLiveStatus(contest: Contest): Contest {
  const now = Date.now();
  const deadline = deadlineTime(contest.deadline);
  const remaining = Math.max(0, Math.ceil((deadline - now) / 86400000));
  return {
    ...contest,
    d_day: remaining,
    status: deadline < now ? 'closed' : 'open',
  };
}

window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  const response = await originalFetch(input, init);
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;

  if (!url.includes('/data/contests.json')) return response;

  try {
    const payload = await response.clone().json();
    if (!Array.isArray(payload?.contests)) return response;

    const incoming = latestContests.map(withLiveStatus);
    const incomingTitles = new Set(incoming.map((contest) => contest.title));

    payload.contests = [
      ...incoming,
      ...payload.contests
        .map((contest: Contest) => withLiveStatus(contest))
        .filter((contest: Contest) => !incomingTitles.has(contest.title)),
    ];
    payload.generated_at = new Date().toISOString();

    return new Response(JSON.stringify(payload), {
      status: response.status,
      statusText: response.statusText,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  } catch {
    return response;
  }
};
