const Pool = require("pg").Pool;

const pool = new Pool({PGHOST: process.env.DATABASE_URL});

module.exports = pool;
