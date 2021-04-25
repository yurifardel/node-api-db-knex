const connect = require("../db/connect");

module.exports = {
  async index(req, res) {
    try {
      const { page = 1 } = req.query;

      // const [count] = await connect("pages").count();

      const migration = await connect("pagina")
        .join("pessoa", "pessoa.id", "=", "pagina.pessoa_id")
        .offset((page - 1) * 5)
        .select(["pagina.*", "pessoa.nome"]);

      console.log(migration);
      res.json(migration);
    } catch (error) {
      return console.log(error);
    }
  },

  async create(req, res) {
    // const [collection] = await connect("pagina").count({ value: 0 });
    // const contador = collection.value;

    const { title, description } = req.body;
    const pessoa_id = req.headers.authorization;

    const [id] = await connect("pagina").insert({
      description,
      title,
      pessoa_id,
    });

    return res.json({ id });
  },
};
