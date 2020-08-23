const Pool = require("pg").Pool;

const pool = process.env.NODE_ENV === 'development' ? new Pool() : new Pool({ connectionString: process.env.DATABASE_URL });

module.exports = pool;
