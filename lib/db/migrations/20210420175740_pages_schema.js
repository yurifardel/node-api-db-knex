exports.up = function (knex) {
  return knex.schema.createTable("pagina", (table) => {
    // table.increments("id");
    table.integer("pagina").notNullable();
    table.integer("tamanho").notNullable();
    table.integer("numeroRegistros").notNullable();
    table.specificType("registros", "Array[]");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("pagina");
};
