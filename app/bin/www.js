"use strict";

const app = require('../app');
const PORT = 3000;

// 서버 포트
app.listen(PORT, () => {
  console.log('서버 가동');
});