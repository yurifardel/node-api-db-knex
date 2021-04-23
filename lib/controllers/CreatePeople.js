const connect = require("../db/connect");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const migrate = await connect("pessoa").select(["*"]);
    console.log(migrate);
    return res.json(migrate);
  },

  async create(req, res) {
    const { nome, dataNasc, cpf, ativo, meta } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connect("pessoa").insert({
      id,
      nome,
      dataNasc,
      cpf,
      ativo,
      meta,
    });

    return res.json({ id });
  },
};
