const connect = require("../../db/connect");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const migrate = await connect("registros").select(["*"]);
    console.log(migrate);
    return res.json(migrate);
  },

  async create(req, res) {
    const { nome, dataNasc, cpf, ativo, meta } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    const [Id] = await connect("registros").insert({
      id,
      nome,
      dataNasc,
      cpf,
      ativo,
      meta,
    });

    return res.json({ Id });
  },
};
