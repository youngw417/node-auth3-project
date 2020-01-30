
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'youngw417', password: '123456', department:'admin'},
        {id: 2, username: 'sunwon111', password: '234567', department:'user'},
        {id: 3, username: 'james123', password: '345678', department:'user'}
      ]);
    });
};
