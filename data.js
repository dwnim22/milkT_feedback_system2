const data = {
    "weights": {
        "superMainKeywordWeight": 50,
        "mainKeywordWeight": 15,
        "generalKeywordBonus": 5
    },
    "commonHiddenKeywords": {
        "교사관련": [
            { "keywords": ["안내미흡", "설명부족", "안내오류", "안내실수", "정보누락", "소통문제", "잘못 알려줌", "전달오류", "오안내"], "type": "안내미흡" },
            { "keywords": ["연락어려움", "연락불가", "연락두절", "전화불통", "통화실패", "응답없음", "연락지연", "연락안됨", "연락안되어"], "type": "연락어려움" },
            { "keywords": ["관리불만", "관리미흡", "학생방치", "관리부재", "학습관리불만", "학습불만"], "type": "관리불만" },
            { "keywords": ["응대불만", "교사불친절", "불쾌한응대", "반말사용", "고압적태도", "소리지름", "감정적대응", "성의없는응대"], "type": "응대불만" },
            { "keywords": ["처리지연", "처리누락", "응답지연", "피드백지연", "연락지연", "정보누락", "업무미처리"], "type": "처리지연및누락" },
            { "keywords": ["관리자불만", "책임회피", "대응부족", "처리불만"], "type": "관리자불만" }
        ],
        "원격요청": [
            { "keywords": ["환경"], "type": "고객환경(S/W)" },
            { "keywords": ["멈춤", "렉", "멈춰", "멈추는", "끊겨", "끊기는"], "type": "멈춤현상(S/W)" },
            { "keywords": ["충전", "방전"], "type": "충전및방전(H/W)" },
            { "keywords": ["터치", "터치안됨", "터치불량"], "type": "터치불량(H/W)" },
            { "keywords": ["화면", "액정", "디스플레이"], "type": "화면이상(H/W)" },
            { "keywords": ["소리", "사운드"], "type": "소리이상(H/W)" },
            { "keywords": ["금액", "비용", "비싸"], "type": "금액불만(H/W)" },
            { "keywords": ["사양", "성능"], "type": "기기사양(H/W)" },
            { "keywords": ["체험기기다름", "체험기다름"], "type": "체험기다름(H/W)" },
            { "keywords": ["초기", "초기상태"], "type": "기기초기상태불만(H/W)" }
        ],
        "결제관련": [
            { "keywords": ["처리지연", "처리누락", "지연", "누락"], "type": "처리지연및누락" },
            { "keywords": ["규정", "정책"], "type": "규정불만" },
            { "keywords": ["미납서류"], "type": "미납관련서류수령" },
            { "keywords": ["미납안내"], "type": "미납안내불만" },
            { "keywords": ["결제방법", "결제하는법"], "type": "결제방법불만" },
            { "keywords": ["미납", "미납중지"], "type": "미납중지불만" }
        ],
        "기기사용관련": [
            { "keywords": ["환경"], "type": "고객환경(S/W)" },
            { "keywords": ["멈춤", "렉", "멈춰", "멈추는", "끊겨", "끊기는"], "type": "멈춤현상(S/W)" },
            { "keywords": ["충전", "방전"], "type": "충전및방전(H/W)" },
            { "keywords": ["터치", "터치안됨", "터치불량"], "type": "터치불량(H/W)" },
            { "keywords": ["화면", "액정", "디스플레이"], "type": "화면이상(H/W)" },
            { "keywords": ["소리", "사운드"], "type": "소리이상(H/W)" },
            { "keywords": ["금액", "비용", "비싸"], "type": "금액불만(H/W)" },
            { "keywords": ["사양", "성능"], "type": "기기사양(H/W)" },
            { "keywords": ["체험기기다름", "체험기다름"], "type": "체험기다름(H/W)" },
            { "keywords": ["초기", "초기상태"], "type": "기기초기상태불만(H/W)" },
            { "keywords": ["규정", "정책"], "type": "규정불만" }
        ],
        "AS관련": [
            { "keywords": ["환경"], "type": "기기AS규정불만" },
            { "keywords": ["멈춤", "렉", "멈춰", "멈추는", "끊겨", "끊기는"], "type": "AS비용불만" },
            { "keywords": ["충전", "방전"], "type": "처리지연및누락" },
            { "keywords": ["터치", "터치안됨", "터치불량"], "type": "구성품AS불만" }
        ]
    },
    "types": [
        { "mainType": "교사관련", "subType": "관리교사", "superMainKeywords": [], "mainKeywords": ["관리교사","관리선생님"], "generalKeywords": ["교사", "선생", "관리"], "hiddenKeywordRef": "교사관련" },
        { "mainType": "교사관련", "subType": "상담교사", "superMainKeywords": [], "mainKeywords": ["상담교사","상담선생님"], "generalKeywords": ["교사", "선생", "상담"], "hiddenKeywordRef": "교사관련" },
        { "mainType": "교사관련", "subType": "지사(홍보)교사", "superMainKeywords": [], "mainKeywords": ["홍보교사", "지사교사"], "generalKeywords": ["교사", "선생", "지사", "홍보"], "hiddenKeywordRef": "교사관련" },
        { "mainType": "원격요청", "subType": "구성품", "superMainKeywords": ["원격점검","예약시간"], "mainKeywords": ["구성품","예약"], "generalKeywords": ["키보드", "펜"], "hiddenKeywordRef": "원격요청" },
        { "mainType": "원격요청", "subType": "학습기기", "superMainKeywords": ["원격점검","예약시간"], "mainKeywords": ["기기","예약"], "generalKeywords": [], "hiddenKeywordRef": "원격요청" },
        { "mainType": "원격요청", "subType": "학습환경", "superMainKeywords": ["원격점검","예약시간"], "mainKeywords": ["환경","예약"], "generalKeywords": ["와이파이", "WIFI"], "hiddenKeywordRef": "원격요청" },
        { "mainType": "원격요청", "subType": "예약확인/변경/취소", "superMainKeywords": ["원격점검","예약시간"], "mainKeywords": ["예약","취소","변경","확인"], "generalKeywords": ["예약"], "hiddenKeywordRef": "원격요청" },
        { "mainType": "원격요청", "subType": "프리패스원격", "superMainKeywords": ["원격점검","예약시간"], "mainKeywords": ["프리패스","예약"], "generalKeywords": [], "hiddenKeywordRef": "원격요청" },
        { "mainType": "결제관련", "subType": "결제요청및변경", "superMainKeywords": ["결제요청","결제변경"], "mainKeywords": ["결제","카드"], "generalKeywords": ["요청", "변경", "즉시", "계좌"], "hiddenKeywordRef": "결제관련" },
        { "mainType": "결제관련", "subType": "결제확인", "superMainKeywords": ["결제확인"], "mainKeywords": ["결제","카드"], "generalKeywords": ["확인", "문의", "증명"], "hiddenKeywordRef": "결제관련" },
        { "mainType": "결제관련", "subType": "결제오류", "superMainKeywords": ["결제오류"], "mainKeywords": ["결제","카드"], "generalKeywords": ["오류", "이중결제"], "hiddenKeywordRef": "결제관련" },
        { "mainType": "기기사용관련", "subType": "WIFI및설치", "superMainKeywords": ["와이파이","WIFI"], "mainKeywords": [], "generalKeywords": ["기기", "WIFI", "공유기", "핫스팟"], "hiddenKeywordRef": "기기사용관련" },
        { "mainType": "기기사용관련", "subType": "구성품관련", "superMainKeywords": ["구성품"], "mainKeywords": [], "generalKeywords": ["기기", "키보드", "펜"], "hiddenKeywordRef": "기기사용관련", "exceptionHiddenKeywords": [ {"keywords": ["안전사고", "화재위험", "과열현상", "감전위험", "안전관리미흡", "부상위험"], "type": "안전사고관련"} ] },
        { "mainType": "기기사용관련", "subType": "기기인증초기화", "superMainKeywords": ["기기인증","기기인증초기화"], "mainKeywords": ["인증"], "generalKeywords": ["기기", "로그인", "초기화"], "hiddenKeywordRef": "기기사용관련" },
        { "mainType": "기기사용관련", "subType": "학습기기관련", "superMainKeywords": ["학습기기"], "mainKeywords": ["기기"], "generalKeywords": ["문의", "업데이트", "최적화"], "hiddenKeywordRef": "기기사용관련", "exceptionHiddenKeywords": [ {"keywords": ["안전사고", "화재위험", "과열현상", "감전위험", "안전관리미흡", "부상위험"], "type": "안전사고관련"} ] },
        { "mainType": "기기사용관련", "subType": "공장초기화", "superMainKeywords": ["공장초기화","기기초기화"], "mainKeywords": [], "generalKeywords": ["기기", "초기화"], "exceptionHiddenKeywords": [ {"keywords": ["규정", "정책"], "type": "규정불만"} ], "weights": { "superMainKeywordWeight": 60, "mainKeywordWeight": 20, "generalKeywordBonus": 5 } },
        { "mainType": "AS관련", "subType": "AS대행및발송", "superMainKeywords": ["AS대행"], "mainKeywords": ["AS", "대행"], "generalKeywords": ["대체기기", "회수"] },
        { "mainType": "AS관련", "subType": "구성품AS", "superMainKeywords": ["구성품AS"], "mainKeywords": ["AS"], "generalKeywords": ["구성품", "키보드", "펜"] },
        { "mainType": "AS관련", "subType": "AS관련취소", "superMainKeywords": ["AS취소","AS대행취소"], "mainKeywords": ["AS"], "generalKeywords": ["대행", "취소"] },
        { "mainType": "AS관련", "subType": "불량판정서기기교체", "superMainKeywords": ["불량판정서"], "mainKeywords": ["판정서"], "generalKeywords": ["AS", "불량", "팩스"] },
        { "mainType": "AS관련", "subType": "삼성AS센터관련", "superMainKeywords": ["삼성"], "mainKeywords": ["센터","서비스센터"], "generalKeywords": ["AS", "확인서"] },
        { "mainType": "AS관련", "subType": "기기AS관련", "superMainKeywords": [], "mainKeywords": ["AS","발열","수리"], "generalKeywords": ["기기", "점검"] },
        { "mainType": "개인정보관련", "subType": "ID/비번문의", "superMainKeywords": ["개인정보"], "mainKeywords": ["아이디", "비밀번호"], "generalKeywords": ["ID", "비번", "암호", "패스워드"] },
        { "mainType": "개인정보관련", "subType": "정보확인및변경", "superMainKeywords": ["개인정보"], "mainKeywords": ["확인", "변경"], "generalKeywords": ["주소", "연락처", "번호"] },
        { "mainType": "개인정보관련", "subType": "계정생성관련", "superMainKeywords": ["개인정보"], "mainKeywords": ["계정", "생성"], "generalKeywords": ["아이디", "ID", "로그인"] },
        { "mainType": "개인정보관련", "subType": "탈퇴문의", "superMainKeywords": ["탈퇴","개인정보"], "mainKeywords": ["삭제"], "generalKeywords": ["개인정보"] },
        { "mainType": "개인정보관련", "subType": "동의정보/수신거부", "superMainKeywords": ["동의정보","정보동의","수신거부","개인정보"], "mainKeywords": ["동의", "거부","삭제"], "generalKeywords": ["개인정보", "탈퇴", "마케팅"] },
        { "mainType": "장애관련", "subType": "장애재인입", "superMainKeywords": ["장애재인입"], "mainKeywords": ["장애"], "generalKeywords": ["오류", "재인입"] },
        { "mainType": "장애관련", "subType": "서버장애", "superMainKeywords": ["서버장애"], "mainKeywords": ["장애"], "generalKeywords": ["오류", "서버"] },
        { "mainType": "장애관련", "subType": "런처장애", "superMainKeywords": ["런처장애"], "mainKeywords": ["장애"], "generalKeywords": ["오류", "런처"] },
        { "mainType": "장애관련", "subType": "