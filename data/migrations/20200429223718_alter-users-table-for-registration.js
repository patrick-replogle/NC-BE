exports.up = function (knex) {
  return knex.schema.alterTable("Users", function (t) {
    t.boolean("activated").notNullable().defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("Users", function (t) {
    t.dropColumn("activated");
  });
};
