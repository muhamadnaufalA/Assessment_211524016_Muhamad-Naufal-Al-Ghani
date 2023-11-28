import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Barang = db.define('barang', {
  kodebarang: {
    type: DataTypes.STRING(24),
    primaryKey: true,
  },
  namabarang: {
    type: DataTypes.STRING(32),
  },
  satuan: {
    type: DataTypes.STRING(24),
  },
  hargasatuan: {
    type: DataTypes.INTEGER,
  },
  stok: {
    type: DataTypes.INTEGER,
  },
},{
  freezeTableName: true
});

export default Barang;

(async() => {
    await db.sync();
})();

