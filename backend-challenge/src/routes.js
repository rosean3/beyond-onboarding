const express = require("express");
const UserController = require("./controllers/UserController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({
    message: "Hello World",
  });
});

routes.get("/users", UserController.read);
routes.post("/users", UserController.create);
routes.patch("/users/:cpf", UserController.update);
routes.delete("/users/:cpf", UserController.delete);

module.exports = routes;
