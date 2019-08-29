exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.text('username', 128).unique().notNullable();
    tbl.text('password', 128).unique().notNullable(); //we dont want this to be unique
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};