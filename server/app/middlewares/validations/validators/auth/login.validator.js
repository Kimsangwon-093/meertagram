/**
 * @file app/middlewares/validations/validators/auth/login.validator.js
 * @description 로그인용 유효성 체크
 * 251119 v1.0.0 Kim init
 */
// 2.유효성 체크-필요한 항목들만 모아서 체크
// import { email, password } from "../../fields/user.field.js";

// export default [email, password];

import userField from "../../fields/user.field.js";

export default [userField.email, userField.password];
