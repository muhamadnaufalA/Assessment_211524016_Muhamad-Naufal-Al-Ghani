// models/notaModel.js
import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Kasir from "./kasirModel.js";
import Tenan from "./tenanModel.js";

const {DataTypes} = Sequelize;

const Nota = db.define('nota', {
  kodenota: {
    type: DataTypes.STRING(32),
    primaryKey: true,
  },
  tglnota: {
    type: DataTypes.DATE,
  },
  jumlahbelanja: {
    type: DataTypes.INTEGER,
  },
  diskon: {
    type: DataTypes.INTEGER,
  },
  total: {
    type: DataTypes.INTEGER,
  },
},{
    freezeTableName: true
});

// Define associations
Kasir.hasMany(Nota);
Nota.belongsTo(Kasir);

Tenan.hasMany(Nota);
Nota.belongsTo(Tenan);

export default Nota;

(async() => {
    await db.sync();
})();
