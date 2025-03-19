import mysql from "mysql2/promise";

let pool: mysql.Pool | undefined;

declare global {
  var _mysqlPool: mysql.Pool | undefined;
}

if (!global._mysqlPool) {
  global._mysqlPool = mysql.createPool({
    host: process.env.DATABASE_HOST || "127.0.0.1",
    user: process.env.DATABASE_USER || "root",
    password: process.env.DATABASE_PASSWORD || "",
    database: process.env.DATABASE_NAME || "test",
    port: Number(process.env.DATABASE_PORT) || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
}

pool = global._mysqlPool;

/** Returns a guaranteed MySQL pool instance */
export const getDBPool = (): mysql.Pool => {
  if (!pool) {
    throw new Error("Database pool is not initialized");
  }
  return pool;
};
