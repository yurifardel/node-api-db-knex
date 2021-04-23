const connect = require("../../db/connect");
const knex = require("knex");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    // const [count] = await connect("pages").count();

    const json = await connect("pages").limit(1).offset(page).select(["*"]);

    return res.json(json);
  },

  async create(req, res) {
    const [collection] = await connect("pages").count({ value: 0 });
    const contador = collection.value;

    const limit = 3;

    const [users] = await connect("people").limit(limit).select(["people.*"]);

    const json = JSON.stringify(users);
    console.log(json);

    const pag = await connect("pages").insert({
      pagina: contador + 1,
      tamanho: 3,
      numeroRegistros: 0,
      registros: [json],
    });

    return res.json(pag);
  },
};
