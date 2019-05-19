
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {a: 'a'},
        {a: 'b'},
        {a: 'c'},
      ]);
    });
};
