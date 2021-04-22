exports.up = function (knex) {
  return knex.schema.createTable("pages", (table) => {
    // table.increments("id");
    table.integer("pagina").notNullable();
    table.integer("tamanho").notNullable();
    table.integer("numeroRegistros").notNullable();
    table.specificType("registros", "ARRAY").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("pages");
};
