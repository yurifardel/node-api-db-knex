const connect = require("../db/connect");
const knex = require("knex");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    // const [count] = await connect("pages").count();

    const json = await connect("pagina")
      .join("pessoa", "pessoa.id", "=", "pagina.pessoa_id")
      .limit(3)
      .offset(page)
      .select([
        "pagina.*",
        "pessoa.nome",
        "pessoa.dataNasc",
        "pessoa.cpf",
        "pessoa.ativo",
        "pessoa.meta",
      ]);

    console.log(json);
    return res.json(json);
  },

  async create(req, res) {
    const [collection] = await connect("pagina").count({ value: 0 });
    const contador = collection.value;

    // const [users] = await connect("pessoa").count({ value: 0 }).limit(3);
    // console.log(users.value);

    // if (users.value > 3) {
    //   return res.status(401).json({ error: "operation not permitted" });

    // }

    const { tamanho, numeroRegistros } = req.body;
    const pessoa_id = req.headers.authorization;

    const [id] = await connect("pagina").insert({
      pagina: contador + 1,
      tamanho,
      numeroRegistros,
      registros: [],
      pessoa_id,
    });

    return res.json({ id });
  },
};
