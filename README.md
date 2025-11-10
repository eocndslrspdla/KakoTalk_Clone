back/
├── routes/
│   └── auth.js           # 인증 관련 라우터 (회원가입, 로그인 API 및 JWT 검증 미들웨어)
│   └── friends.js           # 친구 관리 라우터 (친구 추가, 친구 목록 조회 API)
├── models/
│   └── users.js          # 사용자 및 친구 정보 DB 쿼리 관련 함수 모듈
├── db.js                 # MySQL 연결 설정 및 커넥션 관리
└── server.js             # Express 서버 실행 및 라우터 연결
