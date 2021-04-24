exports.up = function (knex) {
  return knex.schema.createTable("pagina", (table) => {
    table.increments();

    table.integer("pagina").notNullable();
    table.integer("tamanho").notNullable();
    table.integer("numeroRegistros").notNullable();
    table.specificType("registros", "Array[]");

    table.string("pessoa_id").notNullable();

    table.foreign("pessoa_id").references("id").inTable("pessoa");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("pagina");
};
