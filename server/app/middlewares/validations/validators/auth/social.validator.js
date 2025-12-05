/**
 * @file app/middlewares/validations/validators/auth/login.validator.js
 * @description social 유효성 체크
 * 251205 v1.0.0 Kim init
 */

import userField from "../../fields/user.field.js";

export default [userField.provider];