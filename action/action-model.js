const knexConfig = require('../knexfile');
const knex = require('knex');

const db = knex(knexConfig.development);

module.exports = {
  addAction,
};

function addAction(action) {
  return db('action')
    .insert(action);
}

