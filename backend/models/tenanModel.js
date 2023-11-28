// models/tenanModel.js
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Tenan = db.define('tenan', {
  kodetenan: {
    type: DataTypes.STRING(32),
    primaryKey: true,
  },
  namatenan: {
    type: DataTypes.STRING(32),
  },
  hp: {
    type: DataTypes.STRING(15),
  },
  
},{
    freezeTableName: true
});

export default Tenan;

(async() => {
    await db.sync();
})();
