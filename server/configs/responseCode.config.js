/**
 * @file configs/responseCode.config.js
 * @description 서비스 전역 응답 코드 설정 모듈(각 API 응답시 참조되는 표준 응답 코드 정의)
 * 251119 v1.0.0 Kim init
 */

// ---------------------------
// type import
// ---------------------------
/**
 * @typedef {import('./responseCode.config.type.js').ResponseCodeConfig} ResponseCodeConfig
 */

// ---------------------------
/**
 * 정상 처리 응딥 코드 설정
 * @type {ResponseCodeConfig} 
 */
const SUCCESS = {
  code: '00',
  msg: 'NOMAL_CODE',
  info:'정상처리',
  status: 200
} // 상수로만 쓰기로 약속
Object.freeze(SUCCESS); //이 객체는 외부에서 수정 못함

/**
 * 로그인 에러 응딥 코드 설정
 * @type {ResponseCodeConfig} 
 */
const NOT_REGISTERD_ERROR = {
  code: 'E01',
  msg: 'Unauhtorized Error',
  info: '아이디나 비밀번호가 틀렸습니다',
  status: 400
}
Object.freeze(NOT_REGISTERD_ERROR);

/**
 * 파라미터 에러 응딥 코드 설정
 * @type {ResponseCodeConfig} 
 */
const BAD_REQUEST_ERROR = {
  code: 'E21',
  msg: 'Bad Request Error',
  info: '요청 파라미터에 이상이 있습니다.',
  status: 400
}
Object.freeze(BAD_REQUEST_ERROR);

export {
  SUCCESS,
  NOT_REGISTERD_ERROR,
  BAD_REQUEST_ERROR,
}