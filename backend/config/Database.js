import { Sequelize } from "sequelize";

const db = new Sequelize('assessment', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres', 
    port: 5432, 
})

export default db;