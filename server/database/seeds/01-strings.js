/* eslint-disable func-names */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('strings')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('strings').insert([
        { string: 'Never' },
        { string: 'Gonna' },
        { string: 'Give' },
        { string: 'You' },
        { string: 'Up' },
      ]);
    });
};
