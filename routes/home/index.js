"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

// 루트 경로
router.get('/', ctrl.home);

// 로그인 경로
router.get('/login', ctrl.login);

module.exports = router;
