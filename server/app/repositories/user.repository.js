/**
 * @file app/repositories/user.repository.js
 * @description User Repository
 * 251120 v1.0.0 Kim init
 */

import { where } from 'sequelize';
import db from '../models/index.js';
const { User} = db;
/**
 * 
 * @param {import("sequelize").Transaction} t 
 * @param {string} email 
 * @returns 
 */

async function findByEmail(t = null, email) {
  // SELECT * FROM users WHERE email = ? AND delete_at IS NULL;
  return await User.findOne(
    {
      where: {
        email: email
      },
      transaction: t
    }
  );
}

/**
 * 
 * @param {import("sequelize").Transaction} t 
 * @param {import("../models/index.js").User} user 
 * @returns 
 */
async function save(t = null, user) {
  return await user.save({ transaction: t });
}

export default {
  findByEmail,
  save,
}