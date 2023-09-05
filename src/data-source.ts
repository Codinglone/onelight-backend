require("dotenv").config();
import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Gallery } from "./entity/Gallery";

const PORT = parseInt(process.env.DB_PORT) || 5000;

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Gallery],
  migrations: [],
  subscribers: [],
});
