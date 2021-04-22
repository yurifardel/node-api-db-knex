const express = require("express");

const PeopleController = require("../lib/controllers/people/CreatePeople");
const PageController = require("../lib/controllers/page/PageController");

const routes = express.Router();

routes.post("/people", PeopleController.create);
routes.get("/people", PeopleController.index);

routes.post("/pagina", PageController.create);
routes.get("/pagina", PageController.index);

module.exports = routes;
