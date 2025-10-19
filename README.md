back/
├── routes/
│   └── auth.js           # 인증 관련 라우터 (회원가입, 로그인 API)
├── models/
│   └── users.js          # 사용자 DB 쿼리 관련 함수 모듈
├── db.js                 # MySQL 연결 설정 및 커넥션 관리
└── server.js             # Express 서버 실행 및 라우터 연결

1. 아래의 명령어를 설치
npm install express cors mysql2 bcrypt jsonwebtoken

2. 실행
node server.js

postman으로 동작 확인..
