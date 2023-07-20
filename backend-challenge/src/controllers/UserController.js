const User = require("../models/User"); // calling the model

module.exports = {
  async read(req, res) {
    try {
      const users = await User.findAll(); // using a model method
      return res.json(users);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Internal server error", errorMessage: error.message });
    }
  },

  async create(req, res) {
    const { cpf, name, email } = req.body;

    if (!cpf || !email) {
      return res.status(400).json({ error: "Missing obligatory data" });
    }

    try {
      const user = await User.create({ cpf, name, email }); // using a model method
      return res.json(user);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Internal server error", errorMessage: error.message });
    }
  },

  async update(req, res) {
    // this is a patch
    const { cpf } = req.params;

    const { name, email } = req.body;

    const previousUserInfo = await User.findByPk(cpf);

    if (!previousUserInfo) {
      return res.status(404).json({ error: "User not found" });
    }

    try {
      await User.update(
        {
          name: name ? name : previousUserInfo.name,
          email: email ? email : previousUserInfo.email,
        },
        { where: { cpf } }
      );
      const updatedUser = {
        cpf,
        name: name ? name : previousUserInfo.name,
        email: email ? email : previousUserInfo.email,
      };
      return res.json(updatedUser);
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Internal server error", errorMessage: error.message });
    }
  },

  async delete(req, res) {
    const { cpf } = req.params;

    const userToBeDeleted = await User.findByPk(cpf);

    if (!userToBeDeleted) {
      return res.status(404).json({ error: "User not found" });
    }

    try {
      await User.destroy({ where: { cpf } });
      return res
        .status(200)
        .json({ message: "User deleted", deletedUser: userToBeDeleted });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Internal server error", errorMessage: error.message });
    }
  },
};
