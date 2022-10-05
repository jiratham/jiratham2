import {Sequelize} from "sequelize";
 
const db = new Sequelize('jiratham_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;