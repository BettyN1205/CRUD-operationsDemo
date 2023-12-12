const usersData = require("../seed-data/users");
const postsData = require("../seed-data/posts");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Delete existing data
  await knex('post').del();
  await knex('user').del();
  
  // Insert seed data
  await knex('user').insert(usersData);
  await knex('post').insert(postsData);

};
