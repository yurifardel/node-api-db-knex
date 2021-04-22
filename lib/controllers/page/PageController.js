const connect = require("../../db/connect");

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

    const users = await connect("people")
      .limit(3)
      .select([
        "people.id",
        "people.nome",
        "people.dataNasc",
        "people.cpf",
        "people.ativo",
        "people.meta",
      ]);
    console.log(users);

    const pag = await connect("pages").insert({
      pagina: contador + 1,
      tamanho: 2,
      numeroRegistros: 0,
      registros: users,
    });

    return res.json(pag);
  },
};
