const originalFetch = window.fetch.bind(window);

const kescoContest = {
  title: '2026 한국전기안전공사 AI 영상 공모전',
  organizer: '한국전기안전공사',
  category: ['AI', 'AI 영상', '숏폼'],
  official_url: 'https://thinkyou.co.kr/mobile/contest/64439/',
  deadline: '2026-07-26T23:59:59+09:00',
  d_day: 0,
  total_prize: { amount_krw: 1000000, display: '총 100만원' },
  eligibility: '누구나 참여 가능, 개인 또는 4인 이하 팀',
  team_allowed: true,
  ai_usage_status: 'required',
  status: 'open',
  summary: '전기안전을 주제로 생성형 AI를 활용해 제작하는 1분 이내 세로형 숏폼 영상 공모전. 광고, 드라마, 애니메이션, 뮤직비디오 등 형식 제한 없음.',
  why_recommended: '생성형 AI 활용이 필수이고 1분 이내 세로형 영상이라 개인 창작자가 빠르게 도전하기 좋습니다. 마감은 2026년 7월 26일 23:59입니다.',
  difficulty: '중',
  estimated_days: '1~3일',
  beginner_friendly: true,
  solo_friendly: true,
  recommendation_score: 98,
  scope: 'domestic',
  korean_eligible: true,
};

window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  const response = await originalFetch(input, init);
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;

  if (!url.includes('/data/contests.json')) return response;

  try {
    const payload = await response.clone().json();
    if (!Array.isArray(payload?.contests)) return response;

    const exists = payload.contests.some((contest: { title?: string }) => contest.title === kescoContest.title);
    if (!exists) payload.contests.unshift(kescoContest);

    return new Response(JSON.stringify(payload), {
      status: response.status,
      statusText: response.statusText,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  } catch {
    return response;
  }
};
