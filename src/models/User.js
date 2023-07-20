const { Model, DataTypes } = require("sequelize");

/* overwirting the init method from Model.
in this case, all we did was:
1. already pass in the structure so we don't have to do it when initializing the model
2. pass the sequelize connection as the only paramater

why?
just to make the code more modular and clean
*/
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
