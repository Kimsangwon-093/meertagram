/**
 * @file app/repositories/user.repository.js
 * @description User Repository
 * 251120 v1.0.0 Kim init
 */

import { where } from 'sequelize';
import db from '../models/index.js';
const { User} = db;

async function findByEmail(t = null, email) {
  // SELECT * FROM users WHERE email = ? AND delete_at IS NULL;
  return await User.findOne(
    {
      where: {
        email: email
      }
    },
    {
      transaction: t
    }
  );
}

export default {
  findByEmail,
}