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
    deadline: '2026-08-18T23:59:59+09:00',
    total_prize: { amount_krw: 48000000, display: '총 4,800만원' },
    top_prize: { amount_krw: 10000000, display: '대상 1,000만원' },
    eligibility: '만 14세 이상 누구나, 개인 또는 팀', team_allowed: true,
    submission_format: '16:9, 30초~5분, FHD 이상 MP4', ai_usage_status: 'required',
    ai_usage_note: '생성형 AI 기반 스토리 영상', required_assets: ['AI 활용 고지'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open',
    summary: '자유 주제 생성형 AI 단편영상 공모전.', why_recommended: '자유 주제와 큰 상금으로 영화형 작업에 잘 맞습니다.', difficulty: '상', estimated_days: '10~20일', beginner_friendly: false, solo_friendly: true, recommendation_score: 98,
    fact_check_status: 'verified_official', fact_check_note: '공식 접수 안내와 보조 공고 대조', risk_factors: ['AI 활용 고지 필요'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '2026 궁중문화축전 AI 영상 공모전', organizer: '국가유산청 궁능유적본부 · 국가유산진흥원', category: ['AI', 'AI 영상', '숏폼', '전통문화'], official_url: 'https://www.kh.or.kr/fest', deadline: '2026-08-16T23:59:59+09:00',
    total_prize: { amount_krw: 9000000, display: '총 900만원' }, top_prize: { amount_krw: 3000000, display: '대상 300만원' }, eligibility: '대한민국 국민 누구나, 개인 참가', team_allowed: false, submission_format: '9:16, 30~60초, FHD 이상', ai_usage_status: 'required', ai_usage_note: '왕과 현대인의 궁궐 생활을 AI 영상으로 제작', required_assets: ['공개 공유 링크'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '왕과 사는 나를 주제로 한 궁중 AI 쇼츠.', why_recommended: '조선 캐릭터와 궁중 콘텐츠 경험을 살리기 좋습니다.', difficulty: '중', estimated_days: '5~10일', beginner_friendly: true, solo_friendly: true, recommendation_score: 98, fact_check_status: 'verified_official', fact_check_note: '공식 공고와 보도자료 대조', risk_factors: ['1인 1작품'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '한국드라마 70주년 기념 창작드라마 AI 트레일러 공모전', organizer: '서울드라마어워즈조직위원회', category: ['AI', 'AI 영상', '드라마'], official_url: 'https://www.seouldrama.org/', deadline: '2026-08-31T23:59:59+09:00', total_prize: { amount_krw: 14000000, display: '총 1,400만원' }, top_prize: { amount_krw: 5000000, display: '대상 500만원' }, eligibility: '누구나, 개인 또는 5인 이하 팀', team_allowed: true, submission_format: '16:9, 1~3분, FHD 이상', ai_usage_status: 'required', ai_usage_note: 'AI 또는 실사·AI 혼합 트레일러', required_assets: ['5쪽 이내 기획안'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '창작 드라마 기획안과 AI 트레일러를 제출.', why_recommended: '감정형 드라마와 예고편 제작 경험에 잘 맞습니다.', difficulty: '상', estimated_days: '10~20일', beginner_friendly: false, solo_friendly: true, recommendation_score: 97, fact_check_status: 'verified_official', fact_check_note: '공식 보도자료와 접수 안내 대조', risk_factors: ['기획안 필수'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '2026년 지진안전 AI 영상 공모전', organizer: '행정안전부', category: ['AI', 'AI 영상', '숏폼', '공공안전'], official_url: 'https://www.mois.go.kr/', deadline: '2026-08-09T23:59:59+09:00', total_prize: { amount_krw: 10000000, display: '총 1,000만원' }, top_prize: { amount_krw: 2000000, display: '대상 200만원 + 장관상' }, eligibility: '대한민국 국민 누구나, 개인 또는 최대 5인 팀', team_allowed: true, submission_format: '9:16, 30초 이상 60초 미만', ai_usage_status: 'required', ai_usage_note: '기획·이미지·영상·음성·자막 중 한 과정 이상 AI 사용', required_assets: ['AI 제작 고지'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '지진 행동요령을 알리는 세로형 AI 영상.', why_recommended: '짧은 재난 드라마와 행동요령을 연결하기 좋습니다.', difficulty: '중', estimated_days: '3~7일', beginner_friendly: true, solo_friendly: true, recommendation_score: 95, fact_check_status: 'verified_official', fact_check_note: '행정안전부 공식 공고 확인', risk_factors: ['안전 정보 정확성'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '움직이는 한국화 : AI 미디어아트 공모전', organizer: 'CJ CGV · EASYWITH', category: ['AI', 'AI 영상', '미디어아트', '디자인'], official_url: 'https://www.cgv.co.kr/', deadline: '2026-08-14T23:59:59+09:00', total_prize: { amount_krw: 26000000, display: '총 2,600만원' }, top_prize: { amount_krw: 10000000, display: '대상 1,000만원' }, eligibility: '일반부 누구나, 개인 또는 5인 이하 팀', team_allowed: true, submission_format: '키비주얼 3장 이상, 설명, 스토리보드', ai_usage_status: 'required', ai_usage_note: '한국화를 AI 미디어아트로 재해석', required_assets: ['키비주얼', '콘티'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '한국화 기반 AI 미디어아트 공모전.', why_recommended: '조선 음식과 궁중 공간을 큰 화면 작품으로 묶기 좋습니다.', difficulty: '상', estimated_days: '7~14일', beginner_friendly: false, solo_friendly: true, recommendation_score: 96, fact_check_status: 'verified_official', fact_check_note: 'CJ 공식 안내와 보조 출처 대조', risk_factors: ['본선 4K 영상 제작'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '2026년 제7회 서울대학교병원 멀티시네마월 영상작품 공모전', organizer: '서울대학교병원', category: ['AI 영상', '미디어아트'], official_url: 'https://www.snuh.org/', deadline: '2026-08-31T23:59:59+09:00', total_prize: { amount_krw: 17000000, display: '총 1,700만원' }, top_prize: { amount_krw: 7000000, display: '대상 700만원' }, eligibility: '누구나, 개인 또는 팀', team_allowed: true, submission_format: '5760×1792, MP4 H.264, 4GB 미만', ai_usage_status: 'allowed_not_required', ai_usage_note: '생성형 AI 사용 가능, 실사 촬영만으로 만든 영상 제외', required_assets: ['작품설명서'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '병원 초대형 멀티시네마월 상영용 CG 영상.', why_recommended: '자연과 계절을 넓은 화면에 펼치는 작업에 적합합니다.', difficulty: '상', estimated_days: '10~20일', beginner_friendly: false, solo_friendly: true, recommendation_score: 89, fact_check_status: 'verified_official', fact_check_note: '병원 공식 공고 확인', risk_factors: ['특수 해상도'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '전국민 AI활용 사례 공모전 시즌 2', organizer: '과학기술정보통신부', category: ['AI', '숏폼', '이미지', '테크'], official_url: 'https://www.msit.go.kr/', deadline: '2026-08-31T18:00:00+09:00', total_prize: { amount_krw: 34000000, display: '총 3,400만원' }, top_prize: { display: '장관상 포함' }, eligibility: '일반 국민 누구나', team_allowed: false, submission_format: '이미지·글 또는 1분 이내 숏폼', ai_usage_status: 'required', ai_usage_note: '생활·교육·업무의 실제 AI 활용 사례', required_assets: ['활용 사례 보고서'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '실제 AI 활용 경험을 소개하는 공모전.', why_recommended: 'AI 영상 제작과 웹앱 운영 경험을 그대로 활용할 수 있습니다.', difficulty: '하', estimated_days: '2~5일', beginner_friendly: true, solo_friendly: true, recommendation_score: 91, fact_check_status: 'verified_official', fact_check_note: '공식 대회 페이지 확인', risk_factors: ['실제 사례 증빙'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '2026 대한민국 공익광고제 공모전', organizer: '한국방송광고진흥공사', category: ['광고', '영상', '디자인'], official_url: 'https://www.kobaco.co.kr/', deadline: '2026-09-01T16:00:00+09:00', total_prize: { display: '공식 요강 확인' }, top_prize: { amount_krw: 10000000, display: '대상 1,000만원 + 대통령상' }, eligibility: '전 국민', team_allowed: true, submission_format: 'TV 스토리보드, 인쇄, 영상', ai_usage_status: 'unknown', ai_usage_note: '생성형 AI 허용 여부 사전 확인 권장', required_assets: ['부문별 출품 파일'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '국내 대표 공익광고 공모전.', why_recommended: '광고 영상 경험을 살릴 수 있습니다.', difficulty: '상', estimated_days: '10~20일', beginner_friendly: false, solo_friendly: true, recommendation_score: 88, fact_check_status: 'verified_official', fact_check_note: 'KOBACO 공식 안내 확인', risk_factors: ['AI 사용 조건 문의 권장'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '제21회 생물다양성 세밀화 및 인공지능 이미지 공모전', organizer: '국립생물자원관', category: ['AI', 'AI 이미지', '디자인'], official_url: 'https://www.nibr.go.kr/', deadline: '2026-08-28T23:59:59+09:00', total_prize: { display: '공식 시상내역 확인' }, top_prize: { amount_krw: 3000000, display: 'AI 이미지 성인부 대상 300만원' }, eligibility: '국민 누구나', team_allowed: false, submission_format: '생성형 AI 이미지 온라인 접수', ai_usage_status: 'required', ai_usage_note: 'AI 이미지 부문 생성형 AI 필수', required_assets: ['대상 생물 종 표기'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '자생생물과 멸종위기종을 표현하는 AI 이미지 공모전.', why_recommended: '자연 일러스트 작업에 잘 맞습니다.', difficulty: '중', estimated_days: '3~7일', beginner_friendly: true, solo_friendly: true, recommendation_score: 92, fact_check_status: 'verified_official', fact_check_note: '국립생물자원관 공식 안내 확인', risk_factors: ['생물 종 표현 정확성'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '2026 철강 AI 영상광고 공모전', organizer: '한국철강협회', category: ['AI', 'AI 영상', '광고'], official_url: 'https://www.kosa.or.kr/', deadline: '2026-08-09T18:00:00+09:00', total_prize: { amount_krw: 18000000, display: '총 1,800만원' }, top_prize: { amount_krw: 5000000, display: '대상 500만원' }, eligibility: '누구나, 개인 또는 팀', team_allowed: true, submission_format: '16:9, 30초 이내, FHD 이상', ai_usage_status: 'required', ai_usage_note: '생성형 AI 철강 광고 영상', required_assets: ['AI 제작 고지'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '철강 산업과 제품 가치를 알리는 AI 광고.', why_recommended: '제품 광고 연출 경험을 살리기 좋습니다.', difficulty: '중', estimated_days: '4~8일', beginner_friendly: true, solo_friendly: true, recommendation_score: 95, fact_check_status: 'verified_official', fact_check_note: '협회 공식 공고와 보조 출처 대조', risk_factors: ['산업 정보 정확성'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '2026 한글 AI아트 창작 공모전', organizer: '세종대왕기념사업회', category: ['AI', 'AI 이미지', 'AI 영상', '디자인'], official_url: 'https://www.sejongkorea.org/', deadline: '2026-08-30T23:59:59+09:00', total_prize: { amount_krw: 5800000, display: '총 580만원' }, top_prize: { amount_krw: 1000000, display: '부문별 대상 100만원' }, eligibility: '국내외 누구나, 개인 또는 팀', team_allowed: true, submission_format: '이미지 1920×1080 이상 또는 1분 이내 MP4', ai_usage_status: 'required', ai_usage_note: '한글의 조형미와 창제 정신을 AI로 표현', required_assets: ['사용 AI 도구명', 'SNS 공개 게시'], region: '국내외 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '한글을 주제로 한 AI 이미지·숏폼 공모전.', why_recommended: '한글과 궁중문화, 음식, 패션을 연결하기 좋습니다.', difficulty: '중', estimated_days: '3~7일', beginner_friendly: true, solo_friendly: true, recommendation_score: 92, fact_check_status: 'verified_official', fact_check_note: '공식 모집 페이지와 보조 공고 대조', risk_factors: ['작품당 참가비', 'SNS 업로드 필수'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '2026 한국마사회 AI 영상 공모전', organizer: '한국마사회', category: ['AI', 'AI 영상', '숏폼'], official_url: 'https://www.kra.co.kr/', deadline: '2026-08-15T23:59:59+09:00', total_prize: { amount_krw: 14000000, display: '총 1,400만원' }, top_prize: { amount_krw: 5000000, display: '대상 500만원' }, eligibility: '국적·연령 제한 없음, 개인 또는 팀', team_allowed: true, submission_format: 'AI 필름 또는 정확히 30초 숏폼, FHD 이상', ai_usage_status: 'required', ai_usage_note: '말의 과거·현재·미래를 생성형 AI로 표현', required_assets: ['프롬프트', '제작 과정 증빙'], region: '국내외 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '말 문화와 한국마사회를 알리는 AI 영상 공모전.', why_recommended: '조선시대 말 문화나 판타지 서사에 잘 맞습니다.', difficulty: '중', estimated_days: '5~10일', beginner_friendly: true, solo_friendly: true, recommendation_score: 96, fact_check_status: 'verified_official', fact_check_note: '공식 접수 페이지와 FilmFreeway 대조', risk_factors: ['AI 활용 증빙 필수'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '2026 에이즈 및 성매개감염병 제대로, 제로로 숏폼 영상 콘텐츠 공모전', organizer: '질병관리청', category: ['AI 영상', '숏폼', '공익광고'], official_url: 'https://www.kdca.go.kr/', deadline: '2026-08-30T23:59:59+09:00', total_prize: { amount_krw: 7000000, display: '총 700만원' }, top_prize: { amount_krw: 3000000, display: '대상 300만원' }, eligibility: '만 19~34세, 개인 또는 2~4인 팀', team_allowed: true, submission_format: '일반 영상 또는 생성형 AI 활용 숏폼', ai_usage_status: 'allowed_not_required', ai_usage_note: 'AI 활용 영상 부문은 생성형 AI 필수', required_assets: ['신청서', '영상 파일'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '예방·검사·편견 해소를 주제로 한 숏폼 공모전.', why_recommended: '애니메이션과 공익광고 형식으로 접근할 수 있습니다.', difficulty: '중', estimated_days: '3~7일', beginner_friendly: true, solo_friendly: true, recommendation_score: 86, fact_check_status: 'verified_official', fact_check_note: '질병관리청 공식 공고와 정책자료 대조', risk_factors: ['연령 제한', '의학 정보 정확성'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '국립생태원과 함께하는 AI 생태 이야기 영상 공모전', organizer: '국립생태원', category: ['AI', 'AI 영상', '숏폼'], official_url: 'https://www.nie.re.kr/', deadline: '2026-07-31T23:59:59+09:00', total_prize: { amount_krw: 2000000, display: '총 200만원' }, top_prize: { amount_krw: 1000000, display: '대상 100만원' }, eligibility: '대한민국 국민 누구나, 개인 또는 팀', team_allowed: true, submission_format: '9:16, 30초~1분', ai_usage_status: 'required', ai_usage_note: '귀요미·펭이 캐릭터를 활용한 AI 생태 영상', required_assets: ['지정 캐릭터', 'AI 제작 문구'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '국립생태원 캐릭터로 만드는 AI 생태 숏폼.', why_recommended: '캐릭터 중심 애니메이션 작업에 잘 맞습니다.', difficulty: '중', estimated_days: '2~5일', beginner_friendly: true, solo_friendly: true, recommendation_score: 93, fact_check_status: 'verified_official', fact_check_note: '공식 블로그와 공모전 안내 대조', risk_factors: ['오늘 마감', '지정 캐릭터 필수'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '제3회 KRC AI 디지털 혁신 공모전', organizer: '한국농어촌공사', category: ['AI', 'AI 영상', '앱·웹', '테크'], official_url: 'https://www.ekr.or.kr/', deadline: '2026-07-31T23:59:59+09:00', total_prize: { amount_krw: 10500000, display: '총 1,050만원' }, top_prize: { amount_krw: 5000000, display: '최고상 500만원' }, eligibility: '만 18세 이상, 개인 또는 최대 4인 팀', team_allowed: true, submission_format: 'AI 서비스 기획·개발 또는 농어촌 미래 AI 영상', ai_usage_status: 'required', ai_usage_note: '공공데이터와 AI 또는 생성형 AI 영상 활용', required_assets: ['신청서', '기획서'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '농어촌 미래를 위한 AI 서비스와 영상 공모전.', why_recommended: 'AI 영상 부문은 짧은 기간에도 도전할 수 있습니다.', difficulty: '중', estimated_days: '3~10일', beginner_friendly: true, solo_friendly: true, recommendation_score: 88, fact_check_status: 'partial', fact_check_note: '공식 공고와 보조 공고의 총상금 표기가 달라 공식 수치 적용', risk_factors: ['오늘 마감'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '2026 사천에어쇼와 함께하는 90초 우주항공 AI 영상 공모전', organizer: '사천에어쇼 추진위원회', category: ['AI', 'AI 영상', '광고'], official_url: 'https://airshow.sacheon.go.kr/', deadline: '2026-08-06T18:00:00+09:00', total_prize: { amount_krw: 7000000, display: '총 700만원' }, top_prize: { amount_krw: 3000000, display: '대상 300만원' }, eligibility: '개인 또는 최대 4인 팀', team_allowed: true, submission_format: '16:9, 15~90초, FHD 이상', ai_usage_status: 'required', ai_usage_note: '사천 우주항공 산업과 미래 가치를 AI 영상으로 표현', required_assets: ['AI 도구와 제작 과정', 'SNS 공개 URL'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '사천 우주항공 산업 홍보 AI 영상.', why_recommended: '미래 도시와 항공 시네마틱 연출에 잘 맞습니다.', difficulty: '중', estimated_days: '4~8일', beginner_friendly: true, solo_friendly: true, recommendation_score: 96, fact_check_status: 'verified_official', fact_check_note: '공식 접수 페이지와 보조 공고 대조', risk_factors: ['8월 6일 18시 마감'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '아이허브 AI 공모전', organizer: '아이허브', category: ['AI', 'AI 영상', '광고', '뷰티'], official_url: 'https://kr.iherb.com/', deadline: '2026-08-03T23:59:59+09:00', total_prize: { amount_krw: 15000000, display: '총 1,500만원 상당' }, top_prize: { amount_krw: 5000000, display: '대상 500만원' }, eligibility: '만 19세 이상 대한민국 거주자, 개인 또는 최대 3인 팀', team_allowed: true, submission_format: '15초 세로 광고 또는 40초 가로 건강 루틴 영상', ai_usage_status: 'required', ai_usage_note: '생성형 AI로 직접 제작', required_assets: ['AI 도구명', '주요 프롬프트 3개', 'SNS 공개 URL'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '아이허브와 건강 루틴을 주제로 한 AI 광고 공모전.', why_recommended: '짧은 브랜드 광고 제작 경험을 바로 활용할 수 있습니다.', difficulty: '중', estimated_days: '2~4일', beginner_friendly: true, solo_friendly: true, recommendation_score: 97, fact_check_status: 'verified_official', fact_check_note: '공식 공모전 페이지 확인', risk_factors: ['건강 효능 과장 금지', '8월 3일 마감'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '군산 8월의 크리스마스 단편 영화제 공모전', organizer: '군산시', category: ['AI 영상', '단편영화', '관광'], official_url: 'https://www.gunsan.go.kr/', deadline: '2026-08-07T18:00:00+09:00', total_prize: { amount_krw: 4000000, display: '총 400만원 상당' }, top_prize: { amount_krw: 2000000, display: '전체 최고상 200만원 상당' }, eligibility: '만 19세 이상, 개인 또는 3인 이하 팀', team_allowed: true, submission_format: '1~3분, FHD 이상 MP4 또는 MOV', ai_usage_status: 'allowed_not_required', ai_usage_note: 'AI 부문은 생성형 AI 활용 필수', required_assets: ['군산 촬영지 소재', 'AI 활용 범위'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '군산 영화·드라마 촬영지를 소재로 한 단편 영화제.', why_recommended: '관광지와 AI 스토리텔링을 묶을 수 있습니다.', difficulty: '중', estimated_days: '4~8일', beginner_friendly: true, solo_friendly: true, recommendation_score: 72, fact_check_status: 'verified_official', fact_check_note: '군산시 공식 공고와 보조 출처 대조', risk_factors: ['지역 자료 확보 필요'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '제8회 FUTURE FINANCE A.I. CHALLENGE', organizer: 'KB국민은행', category: ['AI', '금융', '앱·웹', '테크'], official_url: 'https://www.kbstar.com/', deadline: '2026-08-03T16:00:00+09:00', total_prize: { amount_krw: 28000000, display: '총 2,800만원' }, top_prize: { amount_krw: 10000000, display: '대상 1,000만원' }, eligibility: '대학·대학원 재학생 또는 휴학생, 연령 조건 있음', team_allowed: true, submission_format: '기술설명서 PPT와 구현 코드 포함 프로토타입', ai_usage_status: 'required', ai_usage_note: 'AI 금융 서비스 기획 및 구현', required_assets: ['기술설명서', '프로토타입 코드'], region: '대한민국 · 온라인/본선 오프라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: 'AI 금융 서비스 프로토타입 경진대회.', why_recommended: '개발 역량이 있는 대학생 팀에 적합합니다.', difficulty: '상', estimated_days: '10~20일', beginner_friendly: false, solo_friendly: false, recommendation_score: 74, fact_check_status: 'partial', fact_check_note: '공식 접수 페이지와 보조 공고 대조', risk_factors: ['학생·연령 제한', '8월 3일 16시 마감'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '제17회 한국패션디자인학회 생성형 AI 무신사 스탠다드 우먼 시그니처 백 디자인 공모전', organizer: '한국패션디자인학회 · 무신사', category: ['AI 이미지', '패션', '제품 디자인'], official_url: 'https://www.ksfd.co.kr/', application_start: '2026-08-10', deadline: '2026-09-30T23:59:59+09:00', total_prize: { amount_krw: 3200000, display: '약 320만원 상당' }, top_prize: { amount_krw: 1000000, display: '최고상 100만원 상당' }, eligibility: '일반인 포함, 개인 또는 2인 팀', team_allowed: true, submission_format: '16:9 JPEG와 제작 과정 PDF 10쪽 이내', ai_usage_status: 'required', ai_usage_note: 'AI 가방 디자인과 선정 후 AI 룩북 제작', required_assets: ['프롬프트와 제작 과정 PDF'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '무신사 스탠다드 우먼 시그니처 백 AI 디자인 공모전.', why_recommended: 'AI 패션 화보와 제품 디자인 경험을 함께 보여줄 수 있습니다.', difficulty: '중', estimated_days: '5~10일', beginner_friendly: true, solo_friendly: true, recommendation_score: 94, fact_check_status: 'verified_official', fact_check_note: '학회 공식 공지와 대학 안내 대조', risk_factors: ['작품당 참가비 1만원'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: 'AI 캐릭터 채팅 공모전 빅뱅 챌린지', organizer: '메타크래프트 · 챗플', category: ['AI', 'AI 캐릭터', '콘텐츠', '테크'], official_url: 'https://chatple.ai/', deadline: '2026-08-07T23:59:59+09:00', total_prize: { amount_krw: 50000000, display: '최대 5,000만원 규모' }, top_prize: { amount_krw: 5000000, display: '1위 500만원' }, eligibility: '만 18세 이상 크리에이터', team_allowed: false, submission_format: 'AI 채팅 캐릭터 1작품 등록', ai_usage_status: 'required', ai_usage_note: 'AI 캐릭터와 대화 콘텐츠 제작', required_assets: ['신규 캐릭터', '즐겨찾기 100건 이상'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '누적 대화 수로 경쟁하는 AI 캐릭터 공모전.', why_recommended: '캐릭터 세계관과 팬 반응을 시험하기 좋습니다.', difficulty: '중', estimated_days: '3~10일', beginner_friendly: true, solo_friendly: true, recommendation_score: 82, fact_check_status: 'partial', fact_check_note: '공식 이벤트 페이지와 보조 출처 대조', risk_factors: ['즐겨찾기 조건', '성과형 보상'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '우리 하천·계곡이 청정하계 바뀌었어요 숏폼 영상 공모전', organizer: '행정안전부', category: ['숏폼', '영상', '공공 콘텐츠'], official_url: 'https://www.mois.go.kr/', deadline: '2026-08-31T23:59:59+09:00', total_prize: { amount_krw: 2600000, display: '총 260만원' }, top_prize: { amount_krw: 1000000, display: '대상 100만원 + 장관상' }, eligibility: '대한민국 국민 누구나', team_allowed: true, submission_format: '30초 이상 60초 미만 숏폼', ai_usage_status: 'allowed_not_required', ai_usage_note: 'AI와 드론 활용 허용', required_assets: ['하천·계곡 정비 전후 자료'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '하천·계곡 정비 전후 변화를 알리는 숏폼.', why_recommended: '현장 영상에 AI 그래픽을 더하는 방식이 적합합니다.', difficulty: '중', estimated_days: '3~7일', beginner_friendly: true, solo_friendly: true, recommendation_score: 76, fact_check_status: 'verified_official', fact_check_note: '행정안전부 공식 보도자료와 언론 보도 대조', risk_factors: ['실제 현장 자료 필요'], last_verified_at: '2026-07-31T08:48:00+09:00'
  },
  {
    title: '제2회 매일유업 대학생 AI 영상 공모전', organizer: '매일유업', category: ['AI', 'AI 영상', '광고', '숏폼'], official_url: 'https://www.maeil.com/', deadline: '2026-08-17T23:59:59+09:00', total_prize: { amount_krw: 12000000, display: '총 1,200만원' }, top_prize: { amount_krw: 3000000, display: '1등 300만원' }, eligibility: '대학·대학원 재학생, 휴학생, 졸업예정자', team_allowed: false, submission_format: '9:16, 30초 미만, HD 이상, 100MB 미만', ai_usage_status: 'required', ai_usage_note: '매일유업 제품 AI 광고 영상', required_assets: ['부문별 제품 활용'], region: '대한민국 · 온라인', scope: 'domestic', korean_eligible: true, status: 'open', summary: '매일유업 제품을 소재로 한 대학생 AI 광고 공모전.', why_recommended: '학생 크리에이터의 브랜드 광고 포트폴리오에 좋습니다.', difficulty: '중', estimated_days: '3~7일', beginner_friendly: true, solo_friendly: true, recommendation_score: 82, fact_check_status: 'verified_official', fact_check_note: '공식 접수 페이지와 보조 공고 대조', risk_factors: ['대학생 신분 제한'], last_verified_at: '2026-07-31T08:48:00+09:00'
  }
];

const deadlineTime = (value: string) => new Date(value).getTime();

function withLiveStatus(contest: Contest): Contest {
  const now = Date.now();
  const deadline = deadlineTime(contest.deadline);
  const remaining = Math.max(0, Math.ceil((deadline - now) / 86400000));
  return { ...contest, d_day: remaining, status: deadline < now ? 'closed' : 'open' };
}

window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  const response = await originalFetch(input, init);
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
  if (!url.includes('/data/contests.json')) return response;

  try {
    const payload = await response.clone().json();
    if (!Array.isArray(payload?.contests)) return response;

    const incoming = latestContests.map(withLiveStatus);
    const incomingKeys = new Set(incoming.map((contest) => `${contest.title}|${contest.organizer}|${contest.official_url}`));
    payload.contests = [
      ...incoming,
      ...payload.contests
        .map((contest: Contest) => withLiveStatus(contest))
        .filter((contest: Contest) => !incomingKeys.has(`${contest.title}|${contest.organizer}|${contest.official_url}`)),
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