import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Kasir = db.define('kasir', {
  kodekasir: {
    type: DataTypes.STRING(32),
    primaryKey: true,
  },
  nama: {
    type: DataTypes.STRING(32),
  },
  hp: {
    type: DataTypes.STRING(15),
  },
}, {
    freezeTableName: true
});

export default Kasir;

(async() => {
    await db.sync();
})();

