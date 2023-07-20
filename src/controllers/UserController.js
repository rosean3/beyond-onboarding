const User = require("../models/User"); // calling the model

module.exports = {
  async index(req, res) {
    const users = await User.findAll(); // using a model method

    return res.json(users);
  },

  async store(req, res) {
    const { name, email } = req.body;

    const user = await User.create({ name, email }); // using a model method

    return res.json(user);
  },
};
