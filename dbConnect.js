const sql = require('mssql');

const config = {
    user: 'admin',
    password: 'sapassword',
    server: 'aws-sql-server-db.c7i6un41glyu.ap-southeast-1.rds.amazonaws.com',
    database: 'IMPOSTER',
    port: 1433
};

const pool = new sql.ConnectionPool(config)
const poolConnection = pool.connect();

module.exports = { sql, pool, poolConnection };