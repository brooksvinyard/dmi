/* eslint-disable func-names */
exports.up = function(knex) {
  return knex.schema.createTable('strings', table => {
    table.increments();
    table.string('string').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('strings');
};
