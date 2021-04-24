const connect = require("../db/connect");

module.exports = {
  async index(req, res) {
    const pessoa_id = req.headers.authorization;

    const pagina = await connect("pagina")
      .where("pessoa_id", pessoa_id)
      .select("*");

    return res.json(pagina);
  },
};
