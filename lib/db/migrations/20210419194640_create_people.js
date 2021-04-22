exports.up = function (knex) {
  return knex.schema.createTable("people", function (table) {
    table.string("id").primary();
    table.string("nome").notNullable();
    table.string("dataNasc").notNullable();
    table.string("cpf").notNullable();
    table.string("ativo").notNullable();
    table.string("meta").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("people");
};
