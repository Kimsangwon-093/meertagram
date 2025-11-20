/**
 * @file app/controllers/auth.controller.js
 * @description 인증 관련 컨트롤러
 * 251119 v1.0.0 Kim init
 */

import { request } from "express";
import { body } from "express-validator";
import { SUCCESS } from "../../configs/responseCode.config.js";
import { createBaseResponse } from "../utils/createBaseResponse.util.js";
import authService from "../services/auth.service.js";

// ----------------
// -----public-----
// ----------------
/**
 * 
 * 로그인 컨트롤러 처리
 * @param {import("express").Request} req - 리퀘스트 객체
 * @param {import("express").Response} res - 리스폰스 객체
 * @param {import("express").NextFunction} next - next 객체
 * @returns
 */
async function login(req, res, next) {
  try {
    const body = req.body; // 파라미터 획득

    // 로그인 서비스 호출
    const result = await authService.login(body);
    
    return res.status(SUCCESS.status).send(createBaseResponse(SUCCESS, result));
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
// ----------
// export
// ----------

export const authController = {
  login,
};

// 파라미터 유효성 검사
// 이메일로 유저 검색 
// 유저가 준 패스워드와 DB의 패스워드를 비교
// 토큰생성
// 토큰 및 정상 처리 응답 