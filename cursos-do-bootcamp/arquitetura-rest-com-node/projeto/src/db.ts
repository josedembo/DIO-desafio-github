import { Pool } from "pg";


const connectionString = 'postgres://syzwjsgd:0vcEXzgu53i9czDZJSLw9fb6XjYXDRI2@tuffi.db.elephantsql.com/syzwjsgd';

const db = new Pool({ connectionString });

export default db;