const connect = require("../db/connect");
const knex = require("knex");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    // const [count] = await connect("pages").count();

    const json = await connect("pagina").limit(1).offset(page).select(["*"]);

    return res.json(json);
  },

  async create(req, res) {
    const [collection] = await connect("pagina").count({ value: 0 });
    const contador = collection.value;

    const users = await connect.column("*").from("pessoa");

    const pag = await connect("pagina").insert({
      pagina: contador + 1,
      tamanho: 3,
      numeroRegistros: 0,
      registros: [{ users }],
    });

    return res.json(users);
  },
};
