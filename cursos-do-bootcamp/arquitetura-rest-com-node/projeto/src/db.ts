import { Pool } from "pg";
import { config } from "dotenv";

config();

const connectionString = `${process.env.POSTGRES_DB_URL_CONECTION}`

const db = new Pool({ connectionString });

export default db;