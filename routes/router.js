const express = require("express");

const PeopleController = require("../lib/controllers/CreatePeople");
const PageController = require("../lib/controllers/PageController");
const IdController = require("../lib/controllers/IdController");

const routes = express.Router();

routes.post("/pessoa", PeopleController.create);
routes.get("/pessoa", PeopleController.index);

routes.post("/pagina", PageController.create);
routes.get("/pagina", PageController.index);

routes.get("/pessoa-id", IdController.index);

module.exports = routes;
