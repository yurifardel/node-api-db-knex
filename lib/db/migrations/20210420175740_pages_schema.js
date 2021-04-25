exports.up = function (knex) {
  return knex.schema.createTable("pagina", (table) => {
    table.increments();

    table.string("title").notNullable();
    table.string("description").notNullable();

    table.string("pessoa_id").notNullable();

    table.foreign("pessoa_id").references("id").inTable("pessoa");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("pagina");
};
