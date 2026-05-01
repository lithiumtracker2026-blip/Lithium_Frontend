import { Pool } from 'pg';

let pool;

function createPool() {
  const poolConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    max: 5, // Reduced for Vercel's serverless environment
    idleTimeoutMillis: 10000, // Shortened to avoid idle timeouts on Vercel
    connectionTimeoutMillis: 10000,
    acquireTimeoutMillis: 10000,
    statement_timeout: 30000,
    keepAlive: true,
    keepAliveInitialDelayMillis: 10000,
  };

  // Use SSL for production (Supabase requires it)
  if (process.env.NODE_ENV === 'production' || process.env.DATABASE_URL) {
    poolConfig.ssl = {
      rejectUnauthorized: false
    };
  }

  return new Pool(poolConfig);
}

function getPool() {
  if (!pool) {
    pool = createPool();
  }
  return pool;
}

export async function query(text, params) {
  const pool = getPool();
  let client;
  try {
    client = await pool.connect();
    const result = await client.query(text, params);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
}

export { getPool };