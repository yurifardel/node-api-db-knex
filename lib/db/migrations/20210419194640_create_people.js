exports.up = function (knex) {
  return knex.schema.createTable("pessoa", function (table) {
    table.string("id").primary();

    table.string("nome").notNullable();
    table.string("dataNasc").notNullable();
    table.string("cpf").notNullable();
    table.boolean("ativo").notNullable();
    table.float("meta").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("pessoa");
};
