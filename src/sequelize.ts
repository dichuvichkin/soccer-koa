import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
  database: "soccer",
  dialect: "sqlite",
  username: "root",
  password: "",
  storage: "../soccer.db",
  modelPaths: [__dirname + "/models"],
  operatorsAliases: false
});
