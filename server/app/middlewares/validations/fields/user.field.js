/**
 * @file app/middlewares/validations/fields/user.field.js
 * @description 유저 정보 유효성 검사 필드
 * 251119 v1.0.0 Kim init
 */
// 1.필드 정의
import { body } from "express-validator";

const email = body('email') // 바디에서 이메일이라는 키를 찾아 온다.
.trim()
.notEmpty()
.withMessage('이메일은 필수 항목 입니다.')
.bail() //하나씩 체크 하도록 설정
.isEmail()
.withMessage('유효한 이메일을 입력해 주세요')
;

const password = body('password') // 바디에서 패스워드 라는 키를 찾아 온다.
.notEmpty()
.withMessage('비밀번호는 필수 항목 입니다.')
.bail()
.matches(/^[a-zA-Z0-9!@#$]{8,20}$/) // 정규식
.withMessage('영어 대/소문자·숫자·!·@·#.$· 8~20자 허용')
;

export default {
  email,
  password,
};