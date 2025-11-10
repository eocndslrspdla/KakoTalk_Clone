const express = require('express');
const {router : authRoutes} = require('./routes/auth');
const friendRoutes = require('./routes/friends');
const cors = require('cors');

const app = express();

// cprs 설정 : 프론트엔드 URL(3000포트) 및 인증정보 허용
app.use(cors({
  origin: 'http://localhost:3000', credentials : true
}));

app.use(express.json());
// 라우트 연결 
app.use('/api/auth', authRoutes); // 인증 (회원가입, 로그인)
app.use('/api/friends', friendRoutes);  // 친구 관리 (친구 추가)

// 서버 실행
app.listen(3001, () => {
  console.log('Server running on port 3001');
});
