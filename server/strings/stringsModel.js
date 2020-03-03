const db = require('../database/dbConfig');

module.exports = {
  get,
  insertString,
};

function get() {
  return db('strings');
}

function insertString(string) {
  return db('strings').insert(string);
}
