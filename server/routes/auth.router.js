/**
 * @file routes/auth.Router.js
 * @description 인증 관련 라우터
 * 251119 v1.0.0 Kim init
 */

import express from "express";
import { authController } from "../app/controllers/auth.controller.js";
import loginValidator from "../app/middlewares/validations/validators/auth/login.validator.js";
import validationHandler from "../app/middlewares/validations/validationHandler.js";

const authRouter = express.Router();

authRouter.post('/login', loginValidator, validationHandler, authController.login);
// return: 함수를 종료한다.
export default authRouter;